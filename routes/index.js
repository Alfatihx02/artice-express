var express = require('express');
var router = express.Router();

const bcrypt = require('bcrypt');
var model_users = require('../model/model_users');

router.get('/register', function(req, res, next) {
  res.render('auth/register');
});

router.get('/login', function(req, res, next) {
  res.render('auth/login');
});

router.post('/saveusers', async(req, res) =>{
  let { username, email, password } = req.body;
  let enkripsi = await bcrypt.hash(password, 10);
  let Data = {
    username,
    email,
    password: enkripsi,
    level_user: 1
  };
  await model_users.Store(Data);
  req.flash('success','berhasil register');
  res.redirect('/login')
});

router.post('/log', async (req, res) => {
  let { email, password } = req.body;
  try {
    let Data = await model_users.Login(email);
    if(Data.length > 0 )
      {
      let enkripsi = Data[0].password;
      let cek = await bcrypt.compare(password, enkripsi);
      if(cek){
        req.session.userID = Data[0].user_id;
        if(Data[0].level_user == 2){
          req.flash('success','Berhasil login')
          res.redirect('/admin');
        }else if(Data[0].level_user == 1){
          req.flash('success','berhasil login');
          res.redirect('/users');
        }else{
          res.status(404).send('Akun tidak ditemukan');
        }
      }else{
        req.flash('error','Email atau password salah');
        res.redirect('/login');
      }
    }else{
      req.flash('error','akun tidak ditemukan');
      res.redirect('/home/login');
    }
  } 
  catch (err) {
    console.error('Error during login process:', err);
    req.flash('error','error pada fungsi');
    res.redirect('/login');
  }
})

router.get('/logout', function(req, res) {
  req.session.destroy(function(err){
    if(err){
      console.error(err);
    }else{
      res.redirect('/');
    }
  });
});


module.exports = router;
