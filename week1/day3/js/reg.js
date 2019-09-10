// var username = '注册用户名';
// var password = '注册密码';
// log.onclick=function(){
//     console.log(username,password)
// }

function reginM() {
    function init() {
        var username = '注册用户名';
        var password = '注册密码';
        reg.onclick = function () {
            alert(`${username},${password}`)
        }
    }

    function fn() {
        console.log('我是注册的函数')
    }
    return {
        init: init,
        fn: fn
    }
}