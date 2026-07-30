const {query}=require("../models/connection")

const initDatabase= async ()=>{
    const createTableQuery=`
    CREATE TABLE IF NOT EXISTS demo(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    regd_no VARCHAR(100) UNIQUE NOT NULL PRIMARY KEY,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) CHECK() NOT NULL,
    age INT CHECK(age >=16 AND age <=65) NOT NULL)`
}

try{
    await query(createTableQuery)
    console.log("Table created successfully")
} catch(error){
    console.log(error);
    process.exit(1);
}

module.exports={
    initDatabase
}