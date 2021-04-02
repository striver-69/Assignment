const assert=require('assert')
const User=require('../src/models/user')

describe('Reading user after signing up in the app,out of our database', () => {
  let tester,chiru
  beforeEach((done) => {
    chiru=new User({email:'test@tester.com',password:"eegergergre"})
    tester=new User({email:'test@tester1.com',password:"eegergergre"})
    Promise.all([chiru.save(),tester.save()])
    .then(()=>done())
  });

  it('finds all users with email of chiru', (done) => {
    User.find({email:'test@tester.com'})
    .then((users)=>{
      assert(users[0]._id.toString() === chiru._id.toString())
      done()
    })
  });

  it('find a user with a particular email', (done) => {
    User.findOne({_id:chiru._id})
    .then((user)=>{
      assert(user.email === 'test@tester.com')
      done()
    })
  });
  
  it('find number of current users in the database', (done) => {
    User.find({})
    .then((user)=>{
      assert(user.length === 2)
      done()
    })
  });
});