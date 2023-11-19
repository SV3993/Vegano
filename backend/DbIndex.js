
const mongoose = require('mongoose');
const mongoURI = 'mongodb://mernapp:SAINATH@ac-35u9mis-shard-00-00.5oppbwe.mongodb.net:27017,ac-35u9mis-shard-00-01.5oppbwe.mongodb.net:27017,ac-35u9mis-shard-00-02.5oppbwe.mongodb.net:27017/foodData?replicaSet=atlas-mnb6ab-shard-0&ssl=true&authSource=admin';
mongoose.set('strictQuery', false);
const mongoDB = async () => {
    await mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
        if (err) console.log('Connection Failed\nThe Error Is:-', err);
        else {
            console.log("Connection Succeded");
            const fetched_data = await mongoose.connection.db.collection("food2");


            //There Is CRUD Operation In Mongoose
            //C:Create
            //R:Read
            //U:Update
            //D:Delete
            fetched_data.find({}).toArray(async function (error, data) {
                // if (error) console.log("No Data Fetched");
                // else {
                //     global.food2=data;
                //     console.log(global.food2);
                // }
                const foodCategory = await mongoose.connection.db.collection("food1");
                foodCategory.find({}).toArray(function (err, catData) {
                    if (error) console.log("No Data Fetched");
                    else {
                        global.food2 = data;
                        global.food1 = catData;
                    }
                });
            });
        }
    });




    // try{
    //     await mongoose.connect(mongoURI,{useUnifiedTopology:true,useNewUrlParser:true});
    //     console.log('Connection Succeded');
    //     const fetched_data=await mongoose.connection.db.collection('foodList1');
    //     const data = await fetched_data.find({},(err,data)=>{
    //         if(err) console.log('No Data Fetched');
    //         else console.log(data);
    //     })    
    // }
    // catch(err){
    //     console.log('Connection Failed');
    // }
};

// const config=require("config");
// const db=config.get(mongoURI);
// mongoose.set('strictQuery', false);
// const connectDB= async()=>{
//     try{
//         await mongoose.connect(db);
//         console.log("connected");
//     }
//     catch(error){
//         console.log(error);
//     }
// }
module.exports = mongoDB;