  const connection = require('../config/database');

  class model_artikel {
    static async getAll() {
      return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM artikel a LEFT JOIN author b ON a.author_id = b.id_author ORDER BY a.id_artikel DESC', (err, rows) => {
          if (err) {
            reject(err);
          } else {
            resolve(rows);
          }
        });
      });
    }
    static async getFormulaOne() {
      return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM artikel WHERE kategori = Formula 1 ORDER BY id_artikel DESC', (err, rows) => {
          if (err) {
            reject(err);
          } else {
            resolve(rows);
          }
        });
      });
    }
    static async getAll() {
      return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM artikel a LEFT JOIN author b ON a.author_id = b.id_author ORDER BY a.id_artikel DESC', (err, rows) => {
          if (err) {
            reject(err);
          } else {
            resolve(rows);
          }
        });
      });
    }
    static async getAll() {
      return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM artikel a LEFT JOIN author b ON a.author_id = b.id_author ORDER BY a.id_artikel DESC', (err, rows) => {
          if (err) {
            reject(err);
          } else {
            resolve(rows);
          }
        });
      });
    }

    static async getByIdAuthor(id) {
      return new Promise((resolve, reject) => {
        connection.query(`SELECT Artikel.*, Author.nama_author
        FROM Artikel
        LEFT JOIN Author ON Artikel.author_id = Author.id_author
        WHERE Artikel.id_artikel = ?`, [id], (err, rows) => {
          if (err) {
            reject(err);
          } else {
            resolve(rows[0]);
          }
        });
      });
    }

    static async getPopular() {
      return new Promise((resolve, reject) => {
        connection.query(`
          SELECT a.*, COUNT(k.id_komentar) AS jumlah_komentar
          FROM artikel a
          LEFT JOIN komentar k ON a.id_artikel = k.id_artikel
          GROUP BY a.id_artikel
          ORDER BY jumlah_komentar DESC
          LIMIT 10
        `, (err, rows) => {
          if (err) {
            reject(err);
          } else {
            resolve(rows);
          }
        });
      });
    }

    static async getLatest() {
      return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM artikel ORDER BY created_at DESC LIMIT 10', (err, rows) => {
          if (err) {
            reject(err);
          } else {
            resolve(rows);
          }
        });
      });
    }

    static async getOldest() {
      return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM artikel ORDER BY created_at ASC LIMIT 10', (err, rows) => {
          if (err) {
            reject(err);
          } else {
            resolve(rows);
          }
        });
      });
    }

    static async writeData(data) {
      return new Promise((resolve, reject) => {
        connection.query('INSERT INTO artikel SET ?', data, (err, result) => {
          if (err) {
            console.log(err);
            reject(err);
          } else {
            resolve(result);
          }
        });
      });
    }

    static async editData(id){
      return new Promise((resolve, reject) => {
          connection.query(`select * from artikel where id_artikel = ${id}`, function(err, rows){
              if(err){
                  reject(err);
              }else{
                  resolve(rows);
              }
          })
      })
  }

    static async getById(id){
      return new Promise((resolve, reject) => {
          connection.query(`select * from artikel where id_artikel = ${id}`, function(err, rows){
              if(err){
                  reject(err);
              }else{
                  resolve(rows);
              }
          })
      })
  }
    

    static async updateData(id, data) {
      return new Promise((resolve, reject) => {
        connection.query(`UPDATE artikel SET ? WHERE id_artikel = ${id}`, data, (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      });
    }

    static async deleteData(id) {
      return new Promise((resolve, reject) => {
        connection.query(`DELETE FROM artikel WHERE id_artikel = ${id}`, (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      });
    }
  }

  module.exports = model_artikel;