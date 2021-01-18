    //导航标签切换

    var tag1 = $('ol li').get(0);
    var tag2 = $('ol li').get(1);
    var con1 = $('#tag .con').get(0);
    var con2 = $('#tag .con').get(1);
    var tag = $('#tag').get(0);
    con1.style.display = 'none';
    con2.style.display = 'none';
    tag.style.display = 'none';
    tag1.onmouseover = () => {
        tag.style.display = 'block';
        con2.style.display = 'none';
        con1.style.display = 'block';
    };
    tag2.onmouseover = () => {
        tag.style.display = 'block';
        con2.style.display = 'block';
        con1.style.display = 'none';
    };
    con1.onmouseleave = () => {
        tag.style.display = 'none';
    };
    con2.onmouseleave = () => {
        tag.style.display = 'none';
    };


    //页面写入数据
    let goodslist = document.querySelector('#goodslist');
    let data = [{
        img: 'https://img2.epetbar.com/goods/sales/20190715141321_481808.jpg@!200w-c',
        title: '雪貂留香  幼犬专用香波500ml',
        price1: '￥55.00',
        price2: '￥29.90',
        price3: "",
        sales: '月销604瓶'
    }, {
        img: 'https://img2.epetbar.com/goods/sales/20190621095132_114378.jpg@!200w-c',
        title: '【添加貂油 有效止痒】雪貂留香 香波 500ml',
        price1: '￥55.00',
        price2: '￥35.00',
        price3: "",
        sales: '月销3238瓶'
    }, {
        img: 'https://img2.epetbar.com/goods/sales/20190621094936_123145.jpg@!200w-c',
        title: '【貂油洗护 精油萃取】雪貂留香 通用香波 500ml',
        price1: '￥55.00',
        price2: '￥35.00',
        price3: "",
        sales: '月销7518瓶'
    }, {
        img: 'https://img2.epetbar.com/goods/sales/20190621095532_870924.jpg@!200w-c',
        title: '【红棕毛专享 有效增色】雪貂留香 香波500ml',
        price1: '￥55.00',
        price2: '￥35.00',
        price3: "",
        sales: '月销1326瓶'
    }, {
        img: 'https://img2.epetbar.com/goods/sales/20190621095845_654510.jpg@!200w-c',
        title: '雪貂留香  润丝护毛素 300ml',
        price1: '￥49.00',
        price2: '￥29.40',
        price3: "",
        sales: '月销926瓶'
    }, {
        img: 'https://img2.epetbar.com/goods/sales/20190621095652_540893.jpg@!200w-c',
        title: '雪貂留香 美白毛专用香波500ml',
        price1: '￥55.00',
        price2: '￥35.00',
        price3: "",
        sales: '月销1122瓶'
    }, {
        img: 'https://img2.epetbar.com/common/upload/commonfile/2019/09/24/184103_122510.jpg@!200w-c',
        title: '【深层洁净 四效合一】雪貂留香 健康护理香波 500ml',
        price1: '￥55.00',
        price2: '￥33.00',
        price3: "",
        sales: '月销540瓶'
    }, {
        img: 'https://img2.epetbar.com/common/upload/commonfile/2020/01/03/094543_302079.jpg@!200w-c',
        title: '雪貂留香XUEDIAO 慕斯氨基酸免洗泡泡沐浴露 530ml',
        price1: '￥59.90',
        price2: '￥44.00',
        price3: "",
        sales: '月销336瓶'
    }];
    // console.log(data);
    var result = data.map(function(item) {
        // 拼接url参数

        var params = '';
        for (var key in item) {
            // 把中文转成URL编码：encodeURI
            params += key + '=' + encodeURI(item[key]) + '&'
        }
        //删除多余&
        params = params.slice(1, -1);

        var html = '';
        html += '<div class="ka">'
        html += '<a href="../html/goods.html?' + params + '"><img src=' + item.img + '></img></a>'
        html += '<h4><img src="../img/hd.png">' + item.title + '</h4>'
        html += '<p class="price" style ="color:#999999;font-size:10px"><del>' + item.price1 + '</del><span style="font-size:16px;font-weight:700;color:#ff6600;">' + item.price2 + '</span><span>' + item.price3 + '</span></p>'
        html += '<p style ="color:#999999;font-size:10px;">' + item.sales + '</p>'
        html += '</div>';

        return html;
    })
    console.log(result.join(','));
    goodslist.innerHTML = result.join('');