const express = require(`express`);
const model_author = require("../model/model_author");
const model_users = require("../model/model_users");

const router = express.Router();

router.get(`/`, async (req, res, next) => {
    let rows = await model_author.getAll();
    res.render(`author/index`,{
        title: `Data author`,
        data: rows
    });
})

router.get(`/create`, async (req,res,next) => {
    let rows = await model_users.getAll();
    res.render(`author/create`,{
        title: `Create author`,
        data: rows
    });
})

router.post(`/store`, async (req,res,next) => {
    try{
        let {nama_author, user_id} = req.body;
        let data = {
            nama_author,
            user_id
        }
        await model_author.writeData(data);
        req.flash(`success`,`Berhasil menambahkan data`);
        res.redirect(`/author`);
    }catch{
        console.error('Error saat menyimpan data:', err);
        req.flash(`error`,`terjadi kesalahan pada fungsi`);
        res.redirect(`/author`);
    }
})

router.get(`/edit/(:id)`, async (req,res,next) => {
    let id = req.params.id;
    let rows = await model_author.editData(id);
    let data = await model_users.getAll();
    res.render(`author/edit`,{
        data,
        id:             rows[0].id_author,
        nama_author:    rows[0].nama_author,
    })
})

router.post(`/update/(:id)`, async (req,res,next) => {
    let id = req.params.id;
    try{
        let {nama_author, user_id} = req.body;
        let data = {
            nama_author,
            user_id
        }
        await model_author.updateData(id,data);
        req.flash(`success`,`Berhasil mengupdate data`);
        res.redirect(`/author`);
    }catch{
        req.flash(`error`,`terjadi kesalahan pada fungsi`);
        res.redirect(`/author`);
    }
})

router.get(`/delete/(:id)`, async (req,res,next) => {
    id = req.params.id;
    await model_author.deleteData(id);
    req.flash(`success`,`Berhasil menghapus data`);
    res.redirect( `/author`)
})
module.exports = router;