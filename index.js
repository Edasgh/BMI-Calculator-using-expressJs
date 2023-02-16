const express=require('express');

const app = express();

const PORT=5000;

app.listen(PORT,()=>{
 console.log(`BMI_Calculator app listening at  http://localhost:${PORT}`);
})