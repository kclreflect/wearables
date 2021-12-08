'use strict'

const mongoose = require('mongoose');
const user = require('./models/user');

module.exports = async(event, context) => {
  try { if(mongoose.connection.readyState==0) await mongoose.connect('mongodb://'+process.env.db_string, {user:process.env.db_user,pass:process.env.db_pass}); } catch(error) { console.log(error); }
  try { await user.updateOne({"_id":event.body.patientId}, {"nokiaId":event.body.nokiaId, "token":event.body.token, "refresh":event.body.refresh}, {upsert:true}); } catch(error) { console.log(error); }
  return context.status(200);
}


