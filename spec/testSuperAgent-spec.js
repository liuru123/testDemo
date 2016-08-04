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

