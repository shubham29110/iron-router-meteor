Template.post.onCreated(function(){
    Meteor.subscribe('posts');
})

Template.post.helpers({
    "blogPosts":function() {
        return Posts.find({})
    }
})