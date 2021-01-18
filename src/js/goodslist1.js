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
        img: 'https://img2.epetbar.com/goods/sales/20190605171843_52374.jpg@!200w-c',
        title: '澳大利亚丝倍亮Supercoat 小型犬成年期全价犬粮 1.5kg',
        price1: '￥69.00',
        price2: '￥49.00',
        price3: '16.33元/斤',
        sales: '月销320包'
    }, {
        img: 'https://img2.epetbar.com/2018-04/08/11/1524aa49a9f72818f1296bcddceb3bfd.jpg@!200w-c',
        title: '丝倍亮成年期犬粮15kg',
        price1: '￥458.00',
        price2: '￥359.00',
        price3: '11.96元/斤',
        sales: '月销114包'
    }, {
        img: 'https://img2.epetbar.com/goods/sales/20190605170950_29259.jpg@!200w-c',
        title: '澳大利亚丝倍亮Supercoat 成年期全价犬粮 1.5kg',
        price1: '￥69.00',
        price2: '￥49.00',
        price3: '16.33元/斤',
        sales: '月销62包'
    }, {
        img: 'https://img2.epetbar.com/2018-04/08/11/922a1ebb36c15ff861733909bcb66cd2.jpg@!200w-c',
        title: '丝倍亮老年期犬全犬粮15kg',
        price1: '￥488.00',
        price2: '￥449.00',
        price3: '14.96元/斤',
        sales: '月销64包'
    }, {
        img: 'https://img2.epetbar.com/goods/sales/20190428144941_47678.jpg@!200w-c',
        title: '澳大利亚丝倍亮Supercoat 小型犬成年期全价犬粮 7.5kg',
        price1: '￥269.00',
        price2: '￥249.00',
        price3: '16.60元/斤',
        sales: '月销32包'
    }, {
        img: 'https://img2.epetbar.com/goods/sales/20190605171650_537963.jpg@!200w-c',
        title: '丝倍亮小型犬幼犬粮1.5kg',
        price1: '￥72.00',
        price2: '￥59.00',
        price3: '19.66元/斤',
        sales: '月销36包'
    }, {
        img: 'https://img2.epetbar.com/goods/sales/upload_file_20194171585.jpg@!200w-c',
        title: '丝倍亮Supercoat 丝巾 2条装',
        price1: '￥60.00',
        price2: '￥50.00',
        price3: "",
        sales: '月销246盒'
    }, {
        img: 'https://img2.epetbar.com/goods/sales/20190605170817_872908.jpg@!200w-c',
        title: '澳大利亚丝倍亮Supercoat 幼年期全价犬粮 1.5kg',
        price1: '￥72.00',
        price2: '￥59.00',
        price3: '19.66元/斤',
        sales: '月销18包'
    }, {
        img: 'https://img2.epetbar.com/2018-04/08/10/7f7484a711339ca65cf5fc24cb6942e7.jpg@!200w-c',
        title: '丝倍亮幼年期全价犬粮15kg',
        price1: '￥488.00',
        price2: '￥379.00',
        price3: '12.63元/斤',
        sales: '月销4包'
    }, {
        img: 'https://img2.epetbar.com/goods/sales/20190517181512_599581.jpg@!200w-c',
        title: '澳大利亚丝倍亮Supercoat 小型犬幼年期全价犬粮 7.5kg',
        price1: '￥289.00',
        price2: '￥209.00',
        price3: '13.93元/斤',
        sales: '月销34包'
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