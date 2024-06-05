const express = require(`express`);
const model_artikel = require("../model/model_artikel");
const model_users = require("../model/model_users");
const model_komentar = require("../model/model_komentar");

const router = express.Router();

router.get('/berita/:id/komentar', async (req, res ,next) => {
    try {
        let id_a = req.params.id;
        let komentar = await model_komentar.getKomentarByArtikel(id_a);
        if(komentar) {
            res.render('artikel/berita', {
                komentar: komentar
            });
        } else {
            res.status(404).send('Komentar tidak ditemukan')
        }
    } catch (error) {
        
    }
})

router.get(`/create`, async (req,res,next) => {
    let user_id = req.session.userID
    let rows = await model_users.getID(user_id);
    let artikel = await model_artikel.getById(id);
    res.render(`komentar/create`,{
        title: `Create komentar`,
        id: id,
        data: rows,
        artikel: artikel,
        session: req.session
    });
})

router.post('/store/:id_artikel', async (req, res, next) => {
    try {
        let { comment_text } = req.body;
        let id_artikel = req.params.id_artikel; 
        let user_id = req.session.userID;

        if (!user_id) {
            req.flash('error', 'Silahkan Login sebelum berkomentar');
            return res.redirect(`/berita/${id_artikel}`);
        }

        let data = {
            comment_text,
            id_artikel,
            user_id
        };
        await model_komentar.writeData(data);
        req.flash('success', 'Berhasil menambahkan data');
        return res.redirect(`/berita/${id_artikel}`);
    } catch (err) {
        console.error('Error saat menyimpan data:', err);
        req.flash('error', 'Terjadi kesalahan pada fungsi');
        return res.redirect(`/berita/${id_artikel}`);
    }
});

router.get(`/edit/(:id)`, async (req,res,next) => {
    let id = req.params.id;
    let rows = await model_komentar.editData(id);
    let user = await model_users.getID(id);
    res.render(`komentar/edit`,{
        user,
        id:            rows[0].id_komentar,
        comment_text:    rows[0].comment_text,
    })
})

router.post('/update/:id', async (req, res) => {
    try {
        let id = req.params.id;
        let { comment_text } = req.body;
        let user_id = req.session.userID;

        if (!user_id) {
            req.flash('error', 'Silahkan login terlebih dahulu.');
            return res.redirect('/login');
        }

        let data = {
            comment_text
        };

        await model_komentar.updateData(id, data);
        req.flash('success', 'Berhasil mengupdate komentar');
        res.status(200).send('Komentar diperbarui.');
        return res.redirect(`/berita/${id_artikel}`)
    } catch (err) {
        console.error('Error saat mengupdate komentar:', err);
        req.flash('error', 'Terjadi kesalahan saat mengupdate komentar');
        res.status(500).send('Terjadi kesalahan pada server.');
        return res.redirect(`/berita/${id_artikel}`);
    }
});

// router.get(`/delete/(:id)`, async (req,res,next) => {
//     id = req.params.id;
//     await model_komentar.deleteData(id);
//     req.flash(`success`,`Berhasil menghapus data`);
//     res.redirect( `/komentar`)
// })

router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await model_komentar.deleteData(id);
        req.flash('success', 'Berhasil menghapus data');
        res.status(200).send('Komentar berhasil dihapus');
        return res.redirect(`/berita/${id_artikel}`);
    } catch (err) {
        console.error('Error saat menghapus komentar:', err);
        req.flash('error', 'Terjadi kesalahan saat menghapus komentar');
        res.status(500).send('Terjadi kesalahan pada server.');
        return res.redirect(`/berita/${id_artikel}`);   
    }
});

module.exports = router;