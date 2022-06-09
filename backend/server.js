import express from "express";
import "dotenv/config"
import connnectToMongoose from "./util/connect-mongoose.js";
import cors from "cors"
import apiroutes from "./routes/api-routes.js"
import cookieParser from "cookie-parser";



const isConnect = await connnectToMongoose();
if(!isConnect){
    process.exit("Exit because could not connect to mongodb")
}

const port = process.env.PORT || 3003;
const app = express()
app.use(express.json())
app.use(cookieParser())

app.use(cors());


// error handling
// für alle seiten die nicht gefunden werden steht das => *
app.use( (err, req, res, next) => {
    res.status(404);
	res.send('404 Site Not Found');
})


app.use(apiroutes)
app.use("/searchbook",apiroutes)

app.get("/*" , (req , res , next) => {
    const myErr = new Error('New Error'); //Error erstellt
    myErr.type = 'not-found'; //type des errors definiert
    next(myErr); //error weiter geleitet
})


app.listen((port),()=>{
    console.log("Port is listening on 3003")
})