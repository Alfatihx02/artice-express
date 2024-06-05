const express = require(`express`);
const router = express.Router();
const indexRouter = require('./index');

function truncateText(text, maxLength) {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + '...';
  }
  return text;
}

const connection = require(`../config/database`);
const fs = require("fs");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });
const model_artikel = require(`../model/model_artikel`);
const model_author = require(`../model/model_author`);
const model_komentar = require("../model/model_komentar");
const model_users = require('../model/model_users');
// const model_users = require("../model/model_users");

router.use('/', indexRouter);

router.get(`/`, async function (req, res, next) {
  let rows = await model_artikel.getAll();
  console.log("Rows: ", rows);  // Log the data to check its content
  let terbaru = await model_artikel.getLatest();
  let terlama = await model_artikel.getOldest();
  let popular = await model_artikel.getPopular();
  // Batasi panjang teks deskripsi artikel
  rows = rows.map(article => {
    article.isi = truncateText(article.isi, 200); // Batasi hingga 200 karakter
    return article;
  });
  res.render(`artikel/index`, {
    data: rows,
    terbaru,
    terlama,
    popular,
    session: req.session
  });
});

router.get(`/beritaF1`, async (req, res, next) => {
  let beritaF1 = await model_artikel.getFormulaOne();
  res.render(`artikel/beritaF1`,{
      title: `Data author`,
      beritaF1
  });
})


// Letakkan Komentar Di fungsi berikut
router.get('/berita/:id', async function (req, res, next) {
  try {
    let id_a = req.params.id;
    let berita = await model_artikel.getByIdAuthor(id_a);
    let popular = await model_artikel.getPopular();
    let komentar = await model_komentar.getKomentarByArtikel(id_a);
    let users = await model_users.getID(id_a)
    if (berita) {
      berita.isi = berita.isi.split('\n').filter(paragraph => paragraph.trim() !== '')
      res.render('artikel/berita', {
        berita: berita,
        popular: popular,
        komentar: komentar,
        users: users,
        session: req.session
      });
    } else {
      res.status(404).send('Artikel tidak ditemukan');
    }
  } catch (err) {
    next(err);
  }
}); 

router.get(`/create`, async function (req, res, next) {
  let rows = await model_author.getAll();
    res.render(`artikel/create`, {
      title: 'Create artikel',
      data: rows
    }
    );
});

router.post(`/store`, upload.single("foto_artikel"), async function (req, res, next) {
  try {
    let {judul, isi, kategori, author_id} = req.body;
    let data = {
        judul,
        isi,
        kategori,
        author_id,
        foto_artikel: req.file.filename
    };
    await model_artikel.writeData(data);
    req.flash("success", "Berhasil menambahkan artikel");
    res.redirect("/");
  } catch (err) {
    req.flash("error", "Terjadi kesalahan pada fungsi");
    res.redirect("/");
  }
});

// Display form to edit an artikel
router.get('/edit/:id_a', async (req, res, next) => {
    const id_a = req.params.id_a;
    let rows = await model_artikel.editData(id_a);
    let data = await model_author.getAll()
    res.render('artikel/edit',{
      data,
      id_artikel:     rows[0].id_artikel,
      judul:          rows[0].judul,
      isi:            rows[0].isi,
      kategori:       rows[0].kategori,
      author_id:      rows[0].author_id,
      foto_artikel:   rows[0].foto_artikel,
    });
  });
  
  // Update an artikel
  router.post('/update/:id_a', upload.single('foto_artikel'), async (req, res, next) => {
    try {
      const id_a = req.params.id_a;
      const { judul, isi, kategori, author_id} = req.body;
      let foto_artikel = req.file ? req.file.filename : null;
      
      // If a new file is uploaded, delete the old file
      if (foto_artikel) {
        const artikel = await model_artikel.getById(id_a);
        if (artikel.foto_artikel) {
          fs.unlinkSync(path.join(__dirname, '../public/images/', artikel.foto_artikel));
        }
      }
  
      const data = { judul, isi, kategori, author_id, foto_artikel };
      await model_artikel.updateData(id_a, data);
      req.flash('success', 'Berhasil mengubah artikel');
      res.redirect('/');
    } catch (err) {
      req.flash('error', 'Terjadi kesalahan pada fungsi');
      res.redirect('/');
    }
  });
  
  // Delete an artikel
  router.get('/delete/:id_a', async (req, res, next) => {
    const id_a = req.params.id_a;
    const artikel = await model_artikel.getById(id_a);
  
    // Delete the associated image file
    if (artikel.foto_artikel) {
      fs.unlinkSync(path.join(__dirname, '../public/images/', artikel.foto_artikel));
    }
  
    await model_artikel.deleteData(id_a);
    req.flash('success', 'Berhasil menghapus artikel');
    res.redirect('/');
  });

module.exports = router;
