const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main().then(()=>{
    console.log("connection successfull");
}).catch((err)=>
    console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let Allchats = [
{
        from: "neha",
        to: "priya",
        msg: "send me holiday home work",
        created_at: new Date()
    },
    {
        from: "rohit",
        to: "kratika",
        msg: "i like your opinion",
        created_at: new Date()
    },
    {
        from: "Nitesh",
        to: "Ritu",
        msg: "mind your business",
        created_at: new Date()
    },
    {
        from: "jay",
        to: "nikhil",
        msg: "hey! how are you?",
        created_at: new Date()
    },
    {
        from: "Nitesh",
        to: "Bhanu",
        msg: "selfish people stay away",
        created_at: new Date()
    },
   
    {
        from: "jayant",
        to: "Jay",
        msg: "All the best for your upcoming exams",
        created_at: new Date()
    },
]

Chat.insertMany(Allchats);