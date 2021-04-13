const knex = require('knex');

const db = knex({
    client: 'pg', // pg for postgres
    connection: {
     connectionString: process.env.DATABASE_URL,
     ssl: { rejectUnauthorized: false }
    }
  });
/*
  const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: '12345',
        database: 'boats'
    }
})*/


const adduser = ({lname,fname,email,password}) => {
    return db('users').insert({'lname':lname,'fname':fname,'email':email,'password':password})
}
const checkuser = ({email}) => {
    return db.select('password','fname','id').from('users').whereRaw('email LIKE ?', email)
}

const boats = () => {
    return db.select('*').from('sale')
}
const searchSeller = (num) => {
    return db.select('email').from('users').whereRaw(`id = ${num}`)
}
const userbymail = (email) => {
    return db.select('id').from('users').whereRaw('email LIKE ?', email)
}
const addbout = ({ brand, model, condition, year, len, style, price,seller }) => {
    return db('sale').insert({'brand':brand,'model':model,'condition':condition,'year':year,'length':len,'style':style,'price':price,'seller':seller.id})}
    
const specboats = (s,c,l,pmi,pma,ymi,yma) =>{
    console.log(s,c,l,pmi,pma,ymi,yma);
    return db.select('*')
    .from('sale')
    .whereRaw(`style LIKE ? and condition LIKE ? `, [s,c])
    .whereRaw(`price between ${pmi} AND ${pma}`)
    .whereRaw(`year between ${ymi} AND ${yma}`)
}

//   ? ${l} AND  AND 


module.exports ={
    adduser,
    checkuser,
    addbout,
    boats,
    searchSeller,
    userbymail,
    specboats
}
/*
CREATE TABLE users (
	id serial PRIMARY KEY,
	lname VARCHAR ( 20 ) NOT NULL,
	fname VARCHAR ( 20 ) NOT NULL,
	email VARCHAR ( 30 ) UNIQUE NOT NULL,
	password VARCHAR ( 20 ) NOT NULL
);

CREATE TABLE sale (
	id serial,
	seller int,
	price float,
	style VARCHAR ( 20 ) NOT NULL,
	year int NOT NULL,
	condition VARCHAR ( 20 ) NOT NULL,
	length float,
	brand VARCHAR ( 20 ) NOT NULL,
	model VARCHAR ( 20 ) NOT NULL,
	created_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

insert into sale (seller,price,style,year,condition,length,brand,model)
values (1,3000,'power',2014,'new',6,'marine','cruise');
*/
