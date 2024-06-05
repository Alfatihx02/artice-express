const connection = require(`../config/database`);

class model_author{
    static async getAll(){
        return new Promise((resolve, reject) => {
            connection.query(`select * from author a join users b on a.user_id=b.user_id order by a.id_author desc`, function(err, rows){
                if(err){
                    reject(err);
                }else{
                    resolve(rows);
                } 
            });    
        })
    };
    static async writeData(data){
        return new Promise((resolve, reject) => {
            connection.query(`insert into author set ?`, data, function(err, result){
                if(err){
                    reject(err);
                }else{
                    resolve(result);
                }
            })
        })
    }
    
    static async editData(id){
        return new Promise((resolve, reject) => {
            connection.query(`select * from author where id_author = ${id}`, function(err, rows){
                if(err){
                    reject(err);
                }else{
                    resolve(rows);
                }
            })
        })
    }
    static async updateData(id, data){
        return new Promise((resolve,reject) => {
            connection.query(`update author set ? where id_author = ${id}`, data, function(err,rows){
                if(err){
                    reject(err);
                }else{
                    resolve(rows);
                }
            })
        })
    }
    static async deleteData(id){
        return new Promise((resolve,reject) => {        
            connection.query(`delete from author where id_author = ${id}`, function(err, rows){
                if(err){
                    reject(err);
                }else{
                    resolve(rows);
                }
            })
        });
    }
}



module.exports = model_author