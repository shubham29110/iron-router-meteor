import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
 // if (postMessage.find().count()===0) {
    Posts.insert({title:"First Post",body:"First PostBody",message:"First Post Message"})
    Posts.insert({title:"Second Post",body:"Second PostBody",message:"Second Post Message"})
    Posts.insert({title:"Third Post",body:"Third PostBody",message:"Third Post Message"})
  //}
  Meteor.publish('posts',function(){
    return Posts.find({});
  })
});
