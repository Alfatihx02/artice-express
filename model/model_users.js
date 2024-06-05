const connection = require(`../config/database`);

class model_users{
    static async getAll(){
        return new Promise((resolve, reject) => {
            connection.query(`select * from users order by user_id desc`, function(err, rows){
                if(err){
                    reject(err);
                }else{
                    resolve(rows);
                } 
            });    
        })
    };

    static async Store(data){
        return new Promise((resolve, reject) => {
            connection.query(`insert into users set ?`, data, function(err, result){
                if(err){
                    reject(err);
                }else{
                    resolve(result);
                }
            })
        })
    }

    static async Login(email) {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM users WHERE email = ?`, [email], (err, rows) => {
                if (err) {
                    console.log(err);
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    }

    static async getID(id) {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM users WHERE user_id = ?`, [id], (err, rows) => {
                if (err) {
                    console.log(err);
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    }

    static async updateUsers(id, data){
        return new Promise((resolve,reject) => {
            connection.query(`update users set ? where user_id = ${id}`, data, function(err,rows){
                if(err){
                    reject(err);
                }else{
                    resolve(rows);
                }
            })
        })
    }

    static async Delete(id){
        return new Promise((resolve,reject) => {        
            connection.query(`delete from users where user_id = ${id}`, function(err, rows){
                if(err){
                    reject(err);
                }else{
                    resolve(rows);
                }
            })
        });
    }
}



module.exports = model_users