var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');
//施令者
var setComment = function (button,fun) {
    button.onclick = function () {
        fun.execute()
    }
}
//动作
var MenuBar = {
    refresh:function () {
        alert('刷新菜单')
    }
}
var SubBar = {
    add:function () {
        alert('添加')
    },
    sub:function () {
        alert('减少')
    }
}
//封装命令类
class RefreshComment{
    constructor(receive){
        this.receive = receive
    }
    execute(){
       this.receive.refresh();
    }
}
class SubComment{
    constructor(receive){
        this.receive = receive
    }
    execute(){
        this.receive.sub();
    }
}
class AddComment{
    constructor(receive){
        this.receive = receive
    }
    execute(){
        this.receive.add();
    }
}
var refreshComment = new RefreshComment(MenuBar);
var subComment = new SubComment(SubBar);
var addComment = new AddComment(SubBar);

setComment(button1,refreshComment);
setComment(button2,subComment);
setComment(button3,addComment);



