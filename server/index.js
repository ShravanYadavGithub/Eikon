const express =require('express');

const morgan = require('morgan');
const mongoose =require('mongoose')
const cors = require('cors');

const server=express();
const HomeRouter=require('./routes/home')
const productRouter=require('./routes/product')
const userRouter=require('./routes/user')
const AboutRouter=require('./routes/about')
const AppointmentRouter=require('./routes/appointment')
const MedicalRouter=require('./routes/medical')
const MapingEcommerceRouter=require('./routes/MapingEcommerce')
const FooterRouter=require('./routes/footer')
const EnquiryRouter=require('./routes/enquiry')




// db connection 

// main().catch(err => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
// console.log('database connected')  
// }


// const { MongoClient } = require("mongodb");

// const username = encodeURIComponent("shravany787");
// const password = encodeURIComponent("DdoJyNtuttEGCqPw");
// const cluster = "Cluster0";


// let uri = `mongodb+srv://${username}:${password}@${cluster}.meodf1o.mongodb.net/`;

// const client = new MongoClient(uri);

// async function run() {
//   try {
//     await client.connect();

//     const database = client.db("eikon");
//     const ratings = database.collection("eikon_home");

//     const cursor = ratings.find();

//     await cursor.forEach(doc => console.dir(doc));
//   } finally {
//     await client.close();
//   }
// }
// run().catch(console.dir);

// getting-started.js

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/eikon');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
//to read body josn// ise body parser bolte hai//
server.use(express.json());
server.use(morgan('default'))

server.use(express.static('public'));
server.use(cors());
server.use('/products',productRouter.router)
server.use('/user',userRouter.router)
server.use('/about',AboutRouter.router)
server.use('/home',HomeRouter.router)
server.use('/appointments',AppointmentRouter.router)
server.use('/medical',MedicalRouter.router)
server.use('/MapingEcommerce',MapingEcommerceRouter.router)
server.use('/footer',FooterRouter.router)
server.use('/enquiry',EnquiryRouter.router)



// MVC model-viwe-controller


server.listen(8080,()=>{
  console.log('server Started')
})














// server.use((req,res,next)=>{
//   console.log(req.method,req.ip,req.hostname)
//   next()

// })