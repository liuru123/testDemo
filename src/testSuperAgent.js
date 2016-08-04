/**
 * Created by liuru on 16-8-2.
 */
 const request = require('superagent');

request
    .post('localhost:3000/suer')
    .query({name:'Manny'})
    .end(function (err,res){
       if(res.ok){                               //query类型
        console.log('right '+res.text);
       }else{
           console.log('error'+res.text);
       }
    });


request
    .get('localhost:3000/userss')
    .end(function (err,res) {                    //params类型
        if(res.ok){
            console.log('hello'+res.text);
        }else{
            console.log('oh no error'+res.text);
        }
    });


request
    .post('localhost:3000/json')
     .type('json')
     .set("Content-Type","application/json")
    .send({"name":"zhangsha"})
    .end(function (err,res) {                           //json类型
        console.log(res.text);
    });

request
    .post('localhost:3000')
    .type('form')
    .send({ email: 'joe@smith.com' })                       //www类型
    .end(function(err, res){
        console.log(res.text);
    });

request
    .post('localhost:3000/header')
    .set({"name":"1233"})                        //header
        .end(function (req,res) {
            console.log(res.text);
});
