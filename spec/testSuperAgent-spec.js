/**
 * Created by liuru on 16-8-4.
 */
const supertest = require('supertest');
const app = require('../src/app.js');
const request  = supertest(app);


describe("/query",function () {
    it("should get a paramter from the query",function (done) {
        request
            .post('/suer')
            .query({name: '1223'})
            .expect({name: '1223'})
            .end(function (err,res) {
                if(err){
                    done.fail(err);
                }else{
                    done();
                }
            })
    });
});

describe("/params",function () {
    it("should get a paratemter from the params",function (done) {
        request
            .get('/userss')
            .expect({"user":"userss"})
            .end(function (err,res) {
                if(err){
                    done.fail(err);
                }else{
                    done();
                }
            })
    });
});

describe("/json",function () {
    it("should get the paratemer from the json",function (done) {
        request
            .post('/json')
            .send({"name":"zhangsha"})
            .expect({"name":"zhangsha"})
            .end(function (err,res) {
                    if(err){
                        done.fail(err);
                    }else {
                        done();
                    }
                })
    });
});

describe("/www",function () {
    it("should get the paratemeter from the www postman",function (done) {
        request
            .post('/')
            .send({"name": "liuru"})
            .expect({"name":"liuru"})
            .end(function (err,res) {
                if(err){
                    done.fail(err);
                }else {
                    done();
                }
            })
    });
});