var express = require('express');
const model_users = require('../model/model_users');
var router = express.Router();
const bcrypt = require('bcrypt');

const fs = require("fs");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images/users");
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

/* GET users listing. */
  router.get('/', async (req, res, next) => {
    try {
      let id = req.session.userID;
      if (!id) {
        req.flash('error', 'Silahkan login terlebih dahulu');
        return res.redirect('/login');
      }
      let Data = await model_users.getID(id);
      if (Data.length > 0) {
        res.render('users/index', {
          title: 'Users Home',
          id: id, // Tambahkan id di sini
          username: Data[0].username,
          email: Data[0].email,
          foto_profil: Data[0].foto_profil,
          created: Data[0].created_at,
          session: req.session
        });
      } else {
        req.flash('error', 'akun tidak ditemukan');
        res.redirect('/home/login');
      }
    } catch (error) {
      res.status(501).json({ error: 'Login Terlebih Dahulu!' });
    }
  });

router.get('/edit/:id', async (req, res, next) => {
  try {
    let id = req.session.userID; // Menggunakan userID dari sesi
    let Data = await model_users.getID(id);
    if (Data.length > 0) {
      res.render('users/edit', {
        id: id,
        username: Data[0].username,
        foto_profil: Data[0].foto_profil,
      });
    } else {
      req.flash('error', 'akun tidak ditemukan');
      res.redirect('/home/login');
    }
  } catch (error) {
    res.status(501).json({ error: 'Login Terlebih Dahulu!' });
  }
});

router.post('/update/:id', upload.single('foto_profil'), async (req, res) => {
  try {
    let id = req.params.id;
    let { username } = req.body;
    let foto_profil = req.file ? req.file.filename : req.body.old_foto_profil;

    if (req.file) {
      const users = await model_users.getID(id);
      if (users.length > 0 && users[0].foto_profil) {
        fs.unlinkSync(path.join(__dirname, '../public/images/users', users[0].foto_profil));
      }
    }

    let data = {
      username,
      foto_profil
    };

    await model_users.updateUsers(id, data);
    req.flash('success', 'Berhasil memperbarui profil!');
    res.redirect('/users');
  } catch (error) {
    console.error('Error saat memperbarui profil:', error);
    req.flash('error', 'Terjadi kesalahan pada fungsi');
    res.redirect('/users');
  }
});


router.get('/updatepwd', async (req, res) => {
  let id = req.session.userID;
  let Data = await model_users.getID(id);

  res.render('users/pwd',{
    nama:   Data[0].username,
    email: Data[0].email,
    level: Data[0].level_user
  });
});

router.post('/changepwd', async (req, res) => {
  try {
    let id = req.session.userID;
    let {password} = req.body;
    let enkripsi = await bcrypt.hash(password, 10);
    let data = {
      password: enkripsi
    }
    let save = await model_users.updateUsers(id, data);
    if(save){
      req.flash('Success','Berhasil Merubah Password !');
      res.redirect('/users');

    }else{

      req.flash('Error','Error pada Model !');
      res.redirect('/users');
    }
  } catch (error) {
    req.flash('error','error pada method');
    res.redirect('/users');
  }
});

module.exports = router;
