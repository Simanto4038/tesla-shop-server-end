const express = require('express')
const { MongoClient, Collection } = require('mongodb');
require('dotenv').config();


const app = express()
const ObjectId = require('mongodb').ObjectId;
const email = require('mongodb').email;
const port = process.env.PORT || 5000;
const cors = require('cors');
var bodyParser = require('body-parser');


app.use(cors())
app.use(express.json())
// const db = require('db')
// db.connect({
//   username: process.env.DB_USER,
//   password: process.env.DB_PASS
// })

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.bbopj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/', (req, res) => {
    res.send('Hello World!')
  })


  

async function run() {
    try {
      await client.connect();
      const database = client.db("TeslaShop");
      const allProductsCollection = database.collection("AllProducts");
    //   const claintCollection = database.collection("ourClaints");
    //   const destinationDataCollection = database.collection("TeslaDestinationData");
    //   const userCartDataCollection = database.collection("TeslauserCartData");
    //   const commentDataCollection = database.collection("CommentCartData");
      // create a document to insert


      app.get('/productsOutput', async (req, res) => {

       const result =  allProductsCollection.find({});
      const users = await result.toArray()
      res.send(users)
      })

    //   app.get('/usersDetail', async (req, res) => {

    //   const result =  userDataCollection.find({});
    //   const users = await result.toArray()
    //   res.send(users)
    //   })

      //claints Data Get

    //   app.get('/Claint', async (req, res) => {

    //   const result = claintCollection.find({});
    //   const users = await result.toArray()
    //   res.send(users)
    //   })

      //Post A Document to Data base

      
    //  app.post("/userInput",async(req,res)=>
    //   {
    //     const newUser = req.body;
    //     console.log('Send to DB',req.body);
    //     const result = await  userDataCollection.insertOne(newUser);
    //     console.log(`A document was inserted with the _id: ${result.insertedId}`);
    //     res.json(result)
    //   })



      //POST a Comment



    //   app.post("/comment",async(req,res)=>
    //   {
    //     const newUser = req.body;
    //     console.log('Send to DB',req.body);
    //     const result = await  commentDataCollection.insertOne(newUser);
    //     console.log(`A comment was inserted with the _id: ${result.insertedId}`);
    //     res.json(result)
    //   })
     


      // GET A COMMENT

    //   app.get('/comment', async (req, res) => {

    //     const result = commentDataCollection.find({});
    //     const users = await result.toArray()
    //     res.send(users)
    //   })


      //Post A  Dynamic Cart Document to Data base

    //   app.post("/userCart",async(req,res)=>
    //   {
    //     const newData = req.body;
    //     console.log('Send Cart to DB',req.body);
    //     const result = await  userCartDataCollection.insertOne(newData).toArray;
    //     console.log(`A Cart was inserted with the _id: ${result.insertedId}`);
    //     res.json(result)
       
    //   })

    
      /****All claints Cart Data Get*****/

    //   app.get('/userCart', async (req, res) => {

    //     const result = userCartDataCollection.find({});
    //     const users = await result.toArray()
    //     res.send(users)
    //     })

         /****Single claints Cart Data Get*****/

        // app.get('/userCart/:id', async (req, res) => {

        // const result = userCartDataCollection.findOne({});
        // const users = await result.toArray()
        // res.send(users)
        // })

       /*******************   Delete A Cart    ***********************************/
          
    //    app.delete('/userCart/:id',async(req,res)=>
    //     {
    //     const id = req.params.id;
    //     console.log(id);
    //     const quary = { _id: ObjectId(id)}
    //     const result= await userCartDataCollection.deleteOne(quary);
    //     res.json(result)
    //     })


      /********************************** Update Info ***********************************/
    //    app.put('/userCart/:id',async(req,res)=>
    //     {
    //     const id = req.params.id;
    //     console.log(id);
    //     const quary = { _id: ObjectId(id)}
    //     const options = { upsert: true };
    //     const updateDoc = {
    //       $set: {
    //         status: `Approve`
    //       },
    //     };
    //     const result= await userCartDataCollection.updateOne(quary,updateDoc,options);
    //     res.json(result)
    //     })



      //Post A Destination to Data base
    //   app.post("/adminInput",async(req,res)=>
    //   {
    //     const newUser = req.body;
    //     console.log('Send to DB',req.body);
    //     const result = await  destinationDataCollection.insertOne(newUser);
    //     console.log(`A document was inserted with the _id: ${result.insertedId}`);
    //     res.json(result)
    //   })

     
    } finally {
     // await client.close();
    }
  }
  run().catch(console.dir);
  
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })