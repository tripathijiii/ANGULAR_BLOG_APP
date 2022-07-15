const express = require('express')
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser')
//middleware
app.use(cors());
app.options('*',cors);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))

// getting the posts
app.get('/api/posts',(req,res,next)=>{
    const post = [
        {
            id:'sdfasdasdasfasdfasd',
            title:'this is from server',
            content:'server content',

        },
        {
            id:'sdfasdasdasfasdfas1',
            title:'this is from server',
            content:'server content',
            
        },
        {
            id:'sdfasdasdasfasdfasq',
            title:'this is from server',
            content:'server content',
            
        }
    ]
    res.status(200).json({
        message:'post fetched successfully',
        posts:post
    });

})

//posting data
app.post('/api/posts',(req,res,next)=>{
    const post = req.body;
    res.status(200).json({
        message:'Post added successfully'
    })
})


module.exports = app