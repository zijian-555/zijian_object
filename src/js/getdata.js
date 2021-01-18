let goodslist = [];
let list = document.querySelector('.lis_box.glist1');
let child = list.children;
console.log(child);

// 获取页面数据
for (let i = 0; i < child.length - 1; i++) {
    let goods = {};
    goods.img = child[i].querySelector('.list_box-li .gd-photo img').src;
    goods.title = child[i].querySelector('.list_box-li .gd-photo').title;
    goods.price1 = child[i].querySelector('.list_box-li .gprice .market-price').innerHTML;
    goods.price2 = child[i].querySelector('.list_box-li .gprice .price').innerHTML;
    goods.price3 = child[i].querySelector('.list_box-li .gprice .dprice').innerHTML;
    goods.sales = child[i].querySelector('.list_box-li .deal-cnt em').innerHTML;
    goodslist.push(goods);

}


let res = JSON.stringify(goodslist)
console.log(res);