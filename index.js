const express=require('express');
const bodyParser=require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended:true}))
const PORT=5000;

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})
app.post('/bmic',(req,res)=>{
    h=parseFloat(req.body.Height)
    w=parseFloat(req.body.Weight)

    bmi=w/(h*h)

    bmi=bmi.toFixed();
 
    if(bmi>18.5 && bmi<25){
     res.send(`<h1 style="margin-top:5rem; font-size:2.5rem; font-family:sans-serif; text-align:center;">Your BMI is <strong style="color:#07a607;"> ${bmi} </strong>, Your BMI is  <strong style="color:#07a607;">&nbsp;NORMAL</strong></h1>`)
    }else if(bmi>25){
        res.send(`<h1 style="margin-top:5rem; font-size:2.5rem; font-family:sans-serif; text-align:center;">Your BMI is <strong style="color:red;"> ${bmi} </strong> , Your BMI is&nbsp;<i style="color:red;"> not normal</i>  , you are&nbsp;<strong style="color:red;"> OVERWEIGHT<strong></h1>`)
    }else{
        res.send(`<h1 style="margin-top:5rem; font-size:2.5rem; font-family:sans-serif; text-align:center;">Your BMI is <strong style="color:blue;"> ${bmi} </strong>, Your BMI is&nbsp;<i style="color:blue;"> not normal </i> , you are&nbsp;<strong style="color:blue;"> UNDERWEIGHT</strong></h1>`)
    }
    
})
app.listen(PORT,()=>{
 console.log(`BMI_Calculator app listening at  http://localhost:${PORT}`);
})