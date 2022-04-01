const app=require("./index");
const connect =require("./configu/db");

app.listen(5000,async()=>{
    try {
        await connect();
    } catch (error) {
        return res.status(500).send({message: error.message});
    }
    console.log("listning on port 5000");
})