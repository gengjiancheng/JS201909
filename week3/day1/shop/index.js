// 通过ajax获取数据
let dataAry;
let xhr = new XMLHttpRequest();
xhr.open('get', './data.json', false);
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        // 代表请求成功
        // JSON.response从后台获取到的JSON字符串
        dataAry = JSON.parse(xhr.response)
    }
}
xhr.send();
console.log(dataAry);

// 把获取到的数据渲染到页面上
let box = document.querySelector('main');

function renderHtml(arr) {
    let str = ''; // 用来拼接DOM结构字符串的；
    arr.forEach(item => {
        let {
            img,
            num,
            price,
            title
        } = item;
        str += ` <div class="good_box">
    <div class="img_box">
        <img src="${img}"
            alt="">
    </div>
    <div class="desc">${title}</div>
    <div class="price">￥${price.toFixed(2)}</div>
    <div class="bot_box">
        <div class="left_box">选购</div>
        <div class="right_box">评价数${num}</div>
    </div>
</div>`
    })
    box.innerHTML = str;
}
renderHtml(dataAry);
let timeBtn = document.querySelector('.timeBtn'),
    priceBtn = document.querySelector('.priceBtn'),
    commentBtn = document.querySelector('.commentBtn');

// 元素.getAttribute('行内属性名'),获取行内属性用的
// 元素.getAttribute('行内属性名','对应的属性值') 设置行内属性用的

let flag = 1;
timeBtn.onclick = function () {
    dataAry.sort((a, b) => {
        flag *= -1;
        return (a.time - b.time) * flag;
    })
    renderHtml(dataAry);
};


priceBtn.onclick = function () {
    dataAry.sort((a, b) => {
        flag *= -1;
        return (a.price - b.price) * flag;
    })
    renderHtml(dataAry);
};


commentBtn.onclick = function () {
    dataAry.sort((a, b) => {
        flag *= -1;
        return (a.num - b.num) * flag;
    })
    renderHtml(dataAry);
};