const express = require('express')
const app = express();
const cors = require('cors')
const db = require('../src/sql')
const bodyParser = require('body-parser')
//middleware
app.use(cors());
app.options('*',cors);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))

// getting the posts
app.get('/api/posts',(req,res,next)=>{
    let post = []
    let sql = 'Select * from posts';
    let query = db.query(sql,(err,result)=>{
        if(err) throw err;
        console.log(result);
        this.post = result;
        res.status(200).json({
            message:'post fetched successfully',
            posts:result
        });
    })

})

//posting data
app.post('/api/posts',(req,res,next)=>{
    const post = {title:req.body.title,content:req.body.content};
    let sql ='Insert INTO posts SET ?';
    let query = db.query(sql,post,(err,result)=>{
        if(err) throw err;
        console.log(result);
    })
    res.status(200).json({
        message:'Post added successfully'
    })

})

app.get('/api/blogCount',(req,res,next)=>{
    let sql = 'Select Count(*) from posts as count';
    let query = db.query(sql,(err,result)=>{
        if(err) throw err;
        console.log(result);
        this.post = result;
        res.status(200).json({
            message:'post fetched successfully',
            count:result[0]['Count(*)']
        });
});
})

app.get('/api/allblog',(req,res,next)=>{
    let sql = 'Select * from posts ';
    let query = db.query(sql,(err,result)=>{
        if(err) throw err;
        console.log(result);
        this.post = result;
        res.status(200).json({
            message:'post fetched successfully',
            posts:result
        });
});
})

app.get('/api/allimages',(req,res,next)=>{
    let sql = 'Select * from images ';
    let query = db.query(sql,(err,result)=>{
        if(err) throw err;
        console.log(result);
        this.post = result;
        res.status(200).json({
            message:'post fetched successfully',
            posts:result
        });
});
})
app.post('/api/allimages',(req,res,next)=>{

    let sql = 'Insert INTO images SET ?';
    const images = {imageSrc:req.body.title,imageAlt:"asbdhasbdjas"};
    let query = db.query(sql,images,(err,result)=>{
        if(err) throw err;
        console.log(result);
    })
    res.status(200).json({
        message:'image added successfully'
    })
})

module.exports = app 