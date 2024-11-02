import app from "./app.js";

app.listen(process.env.PORT,()=>{
    console.log(`surver running on port ${process.env.PORT}`);
});