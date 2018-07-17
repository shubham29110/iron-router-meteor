Router.configure({
    layoutTemplate:'layout'
});

Router.map(function(){
    this.route("home",{
        path:"/",
        template: 'home'
    });
    this.route("about",{
        path:"/about",
        template: 'about'
    });
    this.route("post",{
        path:"/post",
        template: 'post'
    });
    this.route("postShow",{
        path:"/post/:_id",
        template: 'postShow',
        data:function(){
            return postMessage.findOne({_id:this.params._id})
        }
    });
})
