const connection = require('../config/database');

class model_komentar {
    static async getKomentarByArtikel(id_artikel) {
      return new Promise((resolve, reject) => {
        connection.query(`SELECT k.*, a.judul, u.username, u.foto_profil
        FROM komentar k
        JOIN artikel a ON k.id_artikel = a.id_artikel
        JOIN users u ON k.user_id = u.user_id
        WHERE k.id_artikel = ?
        ORDER BY k.created_at DESC`,[id_artikel], (err, rows) => {
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
      connection.query('INSERT INTO komentar SET ?', data, (err, result) => {
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
        connection.query(`select * from komentar where id_komentar = ${id}`, function(err, rows){
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
      connection.query(`UPDATE komentar SET ? WHERE id_artikel = ${id}`, data, (err, result) => {
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
      connection.query(`DELETE FROM komentar WHERE id_artikel = ${id}`, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }
}

module.exports = model_komentar;