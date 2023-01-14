const express=require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app=express();
const mysql = require('mysql');
const db=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'todolist'
})

app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use(express.json());

app.get('/api/get',(req,res)=>{
    
    const sqlInsert="select * from tasks;";
    db.query(sqlInsert,(err,result)=>{
        if(err)
        {
            
        }
        res.send(result);
        
    })
})
app.post('/api/update',(req,res)=>{
    const id=req.body.id;
    const newReminder=req.body.updateReminder;
    // console.log(id);
    // console.log(newReminder);
    const sqlUpdate="update tasks set reminder= ? where id = ?";
    db.query(sqlUpdate,[newReminder,id],(err,result)=>{
        if(err)
        {

            console.log(err);
        }
        
    })
    const sqlget="select * from tasks;";
    db.query(sqlget,(err,result)=>{
        if(err)
        {
            
        }
        res.send(result);
        
    })
    
}
)
app.post('/api/delete',(req,res)=>{
    const id=req.body.id;
    
    const sqlUpdate="delete from tasks where id = ?";
    db.query(sqlUpdate,[id],(err,result)=>{
        if(err)
        {

            console.log(err);
        }
        
    })
    const sqlget="select * from tasks;";
    db.query(sqlget,(err,result)=>{
        if(err)
        {
            
        }
        res.send(result);
        
    })
    
}
)
app.post('/api/insert',(req,res)=>{
    const text=req.body.text;
    const day=req.body.day;
    const reminder=req.body.reminder;
    // console.log(text);
    // console.log(day);
    const sqlInsert="Insert into tasks (text,day,reminder) values (?,?,?);";
    db.query(sqlInsert,[text,day,reminder],(err,result)=>{
        if(err)
        {
            // alert('Unsucessfull insert');
            console.log(err);
        }
        
    })
    const sqlget="select * from tasks;";
    db.query(sqlget,(err,result)=>{
        if(err)
        {
            
        }
        res.send(result);
        
    })
})

app.listen(5000,()=>{
    console.log('server running on port 5000');
});