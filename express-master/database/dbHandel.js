/**
 * Created by ibm on 2017/8/23.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var model = require('./model');



for(var m in model){
    mongoose.model(m,new Schema(model[m]));
}

module.exports = {
    getModel : function(type){
        return mongoose.model(type)
    }
}

