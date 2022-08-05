const sqlite3=require("sqlite3").verbose();

const db = new sqlite3.Database("./mock.db", sqlite3.OPEN_READWRITE,(err)=>{
    if (err) return console.error(err.message);
    console.log("connection successsful");
});
// db.run(
//     `CREATE TABLE users(first_name,last_name,user_name,password,email,id)`
// );

// const sql = `INSERT INTO users (first_name, last_name, user_name, password, email, id)
//                 VALUES(?,?,?,?,?,?)`;
// db.run(
//     sql,
//     ["mike","codes","mike_codes","123","mokecodes@45.com",45],
//     (err) => {
//         if (err) return console.error(err.message);
//         console.log("a new added");
//     }
// );
const sql =`Select * from users`;
db.all(sql,[],(err, rows) =>{
    if (err) return console.error(err.message);

    rows.forEach((row)=>{
        console.log(row);
    });
});
db.close((err) => {
    if (err) return console.error(err.message);
});                