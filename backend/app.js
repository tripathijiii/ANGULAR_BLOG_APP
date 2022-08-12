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
    const post = {title:req.body.title,content:req.body.content,email:req.body.email};
    let sql ='Insert INTO posts SET ?';
    let query = db.query(sql,post,(err,result)=>{
        if(err) throw err;
        console.log(result);
    })
    res.status(200).json({
        message:'Post added successfully'
    })

})

app.post('/api/blogCount',(req,res,next)=>{
    let sql = "Select Count(*) from posts as count where email = '"+ req.body.email + "';";
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

app.post('/api/galleryCount',(req,res,next)=>{
    let sql = "Select Count(*) from images as count where email = '"+ req.body.email + "';";
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
    const images = {imageSrc:req.body.title,imageAlt:"asbdhasbdjas",email:req.body.email};
    let query = db.query(sql,images,(err,result)=>{
        if(err) throw err;
        console.log(result);
    })
    res.status(200).json({
        message:'image added successfully'
    })
})
app.post('/api/usercheck',(req,res,next)=>{
    let sql = "Select * from users where email = '" + req.body.title +"' and password = '" + req.body.content +"';";
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
app.post('/api/userimages',(req,res,next)=>{
    let sql = "Select * from images where email ='"+ req.body.title +"';";
    let query = db.query(sql,(err,result)=>{
        if(err) throw err;
        console.log(result);
        res.status(200).json({
            message:'post fetched successfully',
            posts:result
        });
    })
    
})

app.post('/api/userposts',(req,res,next)=>{
    let sql = "Select * from posts where email ='"+ req.body.email +"';";
    let query = db.query(sql,(err,result)=>{
        if(err) throw err;
        console.log(result);
        res.status(200).json({
            message:'post fetched successfully',
            posts:result
        });
    })
    
})

app.post('/api/createuser',(req,res,next)=>{
    post = {email:req.body.email,password:req.body.password,type:"member",username:req.body.username};
    let sql = "Insert into users set ?"
    let query = db.query(sql,post,(err,result)=>{
        if(err) throw err;
        console.log(result);
    });
    res.status(200).json({
        message:'image added successfully'
    });
})

app.post('/api/useremailcheck',(req,res,next)=>{
    let sql = "Select * from users where email = '"+req.body.email +"';";
    let query = db.query(sql,(err,result)=>{
        if(err) throw err;
        console.log(result);
        res.status(200).json({
            message:'post fetched successfully',
            posts:result
        });
});
})

app.post('/api/deletepost',(req,res,next)=>{
    let sql = "delete from posts where ?";//+String(req.body.index)+";";
    let query = db.query(sql,{id:req.body.index},(err,result)=>{
        if(err) throw  err;
        console.log(result);
        console.log("this clicked");
        res.status(200).json({
            message:'post deleted Succesfully'
        })
    })
})
app.get('/api/userslist',(req,res,next)=>{
    let sql = 'Select * from users';
    let query = db.query(sql,(err,result)=>{
        if(err) throw err;
        console.log(result);
        res.status(200).json({
            message:"This worked",
            users:result
        })
    })
})

app.post('/api/deleteuser',(req,res,next)=>{
    let sql = "delete from posts where email = '"+req.body.email+"';";
    let query = db.query(sql);
    console.log("posts")
    sql = "delete from images where email = '"+req.body.email+"';";
    query = db.query(sql);
    console.log("images")
    sql = "delete from users where email = '"+req.body.email+"';";
    query = db.query(sql);
    res.status(200).json({
        message:"This worked"
    })
});
 


module.exports = app 