var mysql = require('mysql');

// 创建 mysql 连接池资源
var pool = mysql.createPool({
    host: '47.98.161.153',
    user: 'root',
    password: 'Admin@123',
    port: '3306',
    database: 'xikun',
    charset: 'UTF8_GENERAL_CI',
    multipleStatements: true
});

exports.query = function (sql, arr, callback) {
    //建立链接
    pool.getConnection(function (err, connection) {
        if (err) {
            throw err;
            return
        }
        connection.query(sql, arr, function (error, results, fields) {
            //将链接返回到连接池中，准备由其他人重复使用
            connection.release();
            let data = {};
            if (error) {
                //throw error;
                data = {
                    data: error,
                    status: 0
                }
                callback && callback(data, fields);
                return
            }
            //执行回调函数，将数据返回
            data = {
                data: results,
                status: 200
            };
            callback && callback(data, fields);
        });
    });
};

