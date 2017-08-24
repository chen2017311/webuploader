/**
 * @Author: Randy
 * @Date:   2017-08-23 09:31:17
 * @Email:  mynameislxmax@outlook.com
 * @Filename: index.js
 * @Last modified by:   Randy
 * @Last modified time: 2017-08-23 01:09:53
 */

'use strict';

var express = require('express');
var router = express.Router();  //express 路由

var hello = require('./hello');

router.get('/hello',hello.hello);

router.get('/',function(req,res){
    res.render('index',{
      title:'index'
    });
});

router.route('/login').get(function(req,res){
    res.render('login',{
      title : 'login'
    })
}).post(function(req,res){
    var uname = req.body.uname;
    var StudentsModel = global.dbHandel.getModel('students');
    console.log(uname);
    if(uname){
        console.log(2)
        StudentsModel.findOne({name : uname},function(err,doc){
            if(doc){
                console.log(3)
                res.send({msg:'ok',code:'20000'})
            }else{
                console.log(4)
                res.send({msg:'no',code:'40004'})
            }
        })
    }else{

    }


});

//是请求也是路径
router.route('/register').get(function(req,res){
    res.render('register',{
      title:'register'
    })
}).post(function(req,res){
    console.log(req.body)
});
router.get('/home',function(req,res){
    res.render('home',{
      title : 'home'
    })
});

module.exports = router;
