//banner图跟随背景颜色
jQuery(function($) {
    //对应的六种背景颜色
    var color = ['#c13d17', '#0e2758', '#1d95f0', '#eecd9a', '#f26b45', '#ff6f67'];
    var turns;
    setInterval(function() {
        turns = $('.carousel-inner .active').index();
        $('#bannersfather').get(0).style.background = color[turns];
        $('ol li').get(0).style.background = color[turns];
        $('ol li').get(1).style.background = color[turns];
    }, 100);
    //导航标签切换
    var tag1 = $('ol li').get(0);
    var tag2 = $('ol li').get(1);
    var con1 = $('#tag .con').get(0);
    var con2 = $('#tag .con').get(1);

    tag1.onmouseover = () => {
        con2.style.display = 'none';
        con1.style.display = 'block';
    };
    tag2.onmouseover = () => {
        con2.style.display = 'block';
        con1.style.display = 'none';
    };
    var dog_r = $('.con > div').get(0);
    var cat_r = $('.con > div').get(1);
    var dog = $('.con > img').get(0);
    var cat = $('.con > img').get(1);


    //banner标签_滑动

    // dog_r.onmouseover = function() {
    //     clearInterval(i1);
    //     clearInterval(i2);
    //     console.log('in');
    //     var dogsleft = 0;
    //     var speed = 2
    //     let i1 = setInterval(function() {
    //         dogsleft === -24 ? clearInterval(i1) : dogsleft = dogsleft - speed;
    //         dog.style.left = dogsleft + 'px';
    //         console.log(dog.style.left);
    //     }, 10)
    // }
    // dog_r.onmouseleave = () => {
    //     dog.style.left = 0;
    //     console.log('out');
    // }

    // cat_r.onmouseover = function() {
    //     clearInterval(i1);
    //     clearInterval(i2);
    //     console.log('in');
    //     var speed = 2;
    //     var catsleft = 0;
    //     let i2 = setInterval(function() {
    //         catsleft == -24 ? clearInterval(i2) : catsleft = catsleft - speed;
    //         cat.style.left = catsleft + 'px';
    //     }, 10);
    // }
    // cat_r.onmouseleave = () => {
    //     cat.style.left = 0;
    //     console.log('out');
    // }


    //进入商品列表
    const xhr = new XMLHttpRequest();
    xhr.onload = function() {
        let data = xhr.responseText;
        console.log('data=', data);
        // result.innerHTML = data;
    }

    $('.goods_m211 img').on('click', function() {
        window.location.assign("../html/goodlist.html")
    })
    $('.goods_m212 img').on('click', function() {
        window.location.assign("../html/goodlist1.html")
    })
    $('.goods_m22 img').on('click', function() {
        window.location.assign("../html/goodlist2.html")
    })










})