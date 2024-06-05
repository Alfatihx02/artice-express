var express = require('express');
const model_users = require('../model/model_users');
const model_artikel = require('../model/model_artikel');
var router = express.Router();

/* GET users listing. */
router.get('/', async(req, res, next) => {
    try {
      let id = req.session.userID;
      let Data = await model_users.getID(id);
      if (Data.length > 0){
          // Pengecekan Level User
          if(Data[0].level_user != 2){
              res.redirect('/logout')
          }else{
              res.render('superuser/index', {
                  title: 'Admin Home',
                  id: id, // Tambahkan id di sini
                  username: Data[0].username,
                  email: Data[0].email,
                  foto_profil: Data[0].foto_profil,
                  created: Data[0].created_at,
                  session: req.session
              });
          }
      }else {
        res.status(401).json({error: 'user not found !'})
        res.redirect('/login')
      }
    } catch(error) {
      req.flash(`error`,`Login Terlebih Dahulu !`);
      res.redirect(`/login`);
    }
  });

  router.get('/user_dashboard', async (req, res, next) => {
    try {
      let id = req.session.userID;
      let Data = await model_users.getID(id);
      let rows = await model_users.getAll();
      if (Data.length > 0){
          // Pengecekan Level User
          if(!session && Data[0].level_user != 2){
              res.redirect('/logout')
          }else{
              res.render('superuser/dashboard1', {
                  title: 'Admin Dashboard',
                  id: id,
                  nama: Data[0].username,
                  foto: Data[0].foto_profil,
                  data: rows,
                  session: req.session
              });
          }
      }else {
        res.status(401).json({error: 'user not found !'})
        res.redirect('/login')
      }
    } catch (error) {
        
    }
  })
  router.get('/article_dashboard', async (req, res, next) => {
    try {
      let id = req.session.userID;
      let Data = await model_users.getID(id);
      let artikel = await model_artikel.getAll();
      if (Data.length > 0){
          // Pengecekan Level User
          if(Data[0].level_user != 2){
              res.redirect('/logout')
          }else{
              res.render('superuser/dashboard', {
                  title: 'Admin Dashboard',
                  id: id,
                  data: rows,
                  artikel: artikel,
                  session: req.session
              });
          }
      }else {
        res.status(401).json({error: 'user not found !'})
        res.redirect('/login')
      }
    } catch (error) {
        
    }
  })

module.exports = router;
