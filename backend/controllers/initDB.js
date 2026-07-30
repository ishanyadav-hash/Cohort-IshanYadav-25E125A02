const {query}=require("../models/connection")

const initDatabase= async()=>{
    const createTableQuery=`CREATE TABLE IF NOT EXISTS demo(
    id SERIAL,
    name VARCHAR(100) NOT NULL,
    regd_no VARCHAR(10) UNIQUE NOT NULL CHECK (LENGTH(regd_no) = 10),
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL CHECK (LENGTH(password) >= 8),
    age INT CHECK(age >=16 AND age <=65) NOT NULL,
    PRIMARY KEY(id,regd_no) );
    `;

try{
    await query(createTableQuery);
    console.log("Table created successfully")
} catch(error){
    console.log(error);
    process.exit(1);
}
}

module.exports={
    initDatabase
}
