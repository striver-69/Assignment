const mongoose=require('mongoose')

mongoose.Promise=global.Promise

before((done) => {
  mongoose.connect('mongodb+srv://form:12345678abc@cluster0.f1ci4.mongodb.net/User?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true})
  mongoose.connection.once('open',()=> {done()}).on('error',(error)=> console.warn('Error',error))
});

beforeEach((done) => {
  const {users}=mongoose.connection.collections
  users.drop(()=>{
    done()
  })
});
