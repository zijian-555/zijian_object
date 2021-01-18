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
        img: 'https://img2.epetbar.com/common/upload/commonfile/2020/011/17/164919_793128.jpg@!200w-c',
        title: '比瑞吉俱乐部小型老年犬粮2KG',
        price1: '￥79.00',
        price2: '￥69.00',
        price3: '17.25元/斤',
        sales: '月销852包'
    }, {
        img: 'https://img2.epetbar.com/common/upload/commonfile/2020/011/17/162837_412338.jpg@!200w-c',
        title: '比瑞吉泰迪贵宾成犬粮2KG',
        price1: '￥75.00',
        price2: '￥62.00',
        price3: '15.50元/斤',
        sales: '月销4416包'
    }, {
        img: 'https://img2.epetbar.com/common/upload/commonfile/2020/03/25/110445_288924.jpg@!200w-c',
        title: '比瑞吉小型犬成犬粮1.5kg',
        price1: '￥99.00',
        price2: '￥69.00',
        price3: '23.00元/斤',
        sales: '月销3688袋'
    }, {
        img: 'https://img2.epetbar.com/common/upload/commonfile/2020/011/17/162201_558691.jpg@!200w-c',
        title: '比瑞吉 俱乐部全犬种全价成犬粮 12kg',
        price1: '￥329.00',
        price2: '￥299.00',
        price3: '12.45元/斤',
        sales: '月销328袋'
    }, {
        img: 'https://img2.epetbar.com/common/upload/commonfile/2020/011/17/162528_566501.jpg@!200w-c',
        title: '比瑞吉离乳奶糕幼犬粮2kg',
        price1: '￥89.00',
        price2: '￥79.00',
        price3: '19.75元/斤',
        sales: '月销346包'
    }, {
        img: 'https://img2.epetbar.com/common/upload/commonfile/2020/011/17/174500_411898.jpg@!200w-c',
        title: '比瑞吉小型犬老年犬粮2kg',
        price1: '￥140.00',
        price2: '￥109.00',
        price3: '27.25元/斤',
        sales: '月销468袋'
    }, {
        img: 'https://img2.epetbar.com/common/upload/commonfile/2020/011/17/170552_129961.jpg@!200w-c',
        title: '比瑞吉Nature Bridge 无谷六种肉配方全犬粮 2kg',
        price1: '￥229.00',
        price2: '￥209.00',
        price3: '52.25元/斤',
        sales: '月销68袋'
    }, {
        img: 'https://img2.epetbar.com/common/upload/commonfile/2020/03/25/111202_361404.jpg@!200w-c',
        title: '比瑞吉俱乐部成犬粮10kg',
        price1: '￥269.00',
        price2: '￥219.00',
        price3: '10.95元/斤',
        sales: '月销3290袋'
    }, {
        img: 'https://img2.epetbar.com/common/upload/commonfile/2020/011/17/170624_150554.jpg@!200w-c',
        title: '比瑞吉无谷六种肉全犬粮8kg',
        price1: '￥699.00',
        price2: '￥629.00',
        price3: '39.31元/斤',
        sales: '月销80袋'
    }, {
        img: 'https://img2.epetbar.com/common/upload/commonfile/2020/011/17/154319_774047.jpg@!200w-c',
        title: '比瑞吉俱乐部 健康膳食配方 美毛全期犬粮 2KG',
        price1: '￥79.00',
        price2: '￥62.00',
        price3: '15.50元/斤',
        sales: '月销652包'
    }, {
        img: 'https://img2.epetbar.com/common/upload/commonfile/2020/011/17/163024_585441.jpg@!200w-c',
        title: '比瑞吉小型全价成犬粮2KG',
        price1: '￥69.00',
        price2: '￥62.00',
        price3: '15.50元/斤',
        sales: '月销1262包'
    }, {
        img: 'https://img2.epetbar.com/common/upload/commonfile/2020/03/25/110702_474131.jpg@!200w-c',
        title: '比瑞吉泰迪贵宾成犬粮2kg',
        price1: '￥139.00',
        price2: '￥129.00',
        price3: '32.25元/斤',
        sales: '月销1912袋'
    }, {
        img: 'https://img2.epetbar.com/common/upload/commonfile/2020/011/17/173332_778033.jpg@!200w-c',
        title: '比瑞吉Nature Bridge 优选系列 比熊成年期犬粮 2kg',
        price1: '￥160.00',
        price2: '￥149.00',
        price3: '37.25元/斤',
        sales: '月销270袋'
    }, {
        img: 'https://img2.epetbar.com/common/upload/commonfile/2020/03/25/110325_585681.jpg@!200w-c',
        title: '比瑞吉小型犬成犬粮10kg',
        price1: '￥439.00',
        price2: '￥409.00',
        price3: '20.45元/斤',
        sales: '月销1348袋'
    }, {
        img: 'https://img2.epetbar.com/common/upload/commonfile/2020/011/17/162334_434969.jpg@!200w-c',
        title: '比瑞吉大中型老年犬粮12KG',
        price1: '￥355.00',
        price2: '￥319.00',
        price3: '13.29元/斤',
        sales: '月销266包'
    }, {
        img: 'https://img2.epetbar.com/common/upload/commonfile/2020/05/15/183452_775148.jpg@!200w-c',
        title: '小型犬主粮套餐（比瑞吉泰迪贵宾成犬粮2kg&牛棒骨S号）',
        price1: '￥375.00',
        price2: '￥167.00',
        price3: '37.95元/斤',
        sales: '月销0件'
    }, {
        img: 'https://img2.epetbar.com/common/upload/commonfile/2020/06/03/203327_5466.jpg@!200w-c',
        title: '小型犬专享营养套餐（比瑞吉小型成犬粮1.5kg&专利洁齿零食）',
        price1: '￥266.00',
        price2: '￥122.70',
        price3: '37.87元/斤',
        sales: '月销0件'
    }, {
        img: 'https://img2.epetbar.com/common/upload/commonfile/2020/06/03/2026010_681940.jpg@!200w-c',
        title: '成犬粮性价比套餐（比瑞吉成犬粮10kg&爆款牛肉棒&鸡肉干&妙鲜包12袋）',
        price1: '￥775.68',
        price2: '￥358.70',
        price3: '14.94元/斤',
        sales: '月销0件'
    }, {
        img: 'https://img2.epetbar.com/common/upload/commonfile/2020/03/25/115517_643744.jpg@!200w-c',
        title: '比瑞吉 俱乐部全犬种全价幼犬粮 2kg',
        price1: '￥183.00',
        price2: '￥75.00',
        price3: '18.75元/斤',
        sales: '月销328袋'
    }, {
        img: 'https://img2.epetbar.com/common/upload/commonfile/2020/011/17/162118_770418.jpg@!200w-c',
        title: '比瑞吉 俱乐部全犬种全价成犬粮 2kg',
        price1: '￥174.00',
        price2: '￥72.00',
        price3: '18.00元/斤',
        sales: '月销62袋'
    }, {
        img: 'https://img2.epetbar.com/common/upload/commonfile/2020/011/17/174251_682602.jpg@!200w-c',
        title: '比瑞吉Nature Bridge 优选系列 室内小型犬成年期犬粮 2kg',
        price1: '￥162.00',
        price2: '￥135.00',
        price3: '33.75元/斤',
        sales: '月销142袋'
    }, {
        img: 'https://img2.epetbar.com/common/upload/commonfile/2020/03/25/1120010_100003.jpg@!200w-c',
        title: '比瑞吉俱乐部 天然健康膳食配方 泰迪贵宾全价幼犬粮 2KG',
        price1: '￥192.00',
        price2: '￥79.00',
        price3: '19.75元/斤',
        sales: '月销542包'
    }, {
        img: 'https://img2.epetbar.com/common/upload/commonfile/2020/03/25/0105045_289282.jpg@!200w-c',
        title: '比瑞吉 健康型天然粮大型犬成犬粮 15kg',
        price1: '￥1,377.00',
        price2: '￥569.00',
        price3: '18.96元/斤',
        sales: '月销116袋'
    }, {
        img: 'https://img2.epetbar.com/common/upload/commonfile/2019/010/18/151820_320468.jpg@!200w-c',
        title: '比瑞吉Nature Bridge 优选系列 小型犬成年期犬粮 1.5kg',
        price1: '￥118.00',
        price2: '￥99.00',
        price3: '33.00元/斤',
        sales: '月销354袋'
    }, {
        img: 'https://img2.epetbar.com/common/upload/commonfile/2019/011/13/183956_160087.jpg@!200w-c',
        title: '比瑞吉Nature Bridge 优选系列 小型犬成年期犬粮 10kg',
        price1: '￥585.00',
        price2: '￥489.00',
        price3: '24.45元/斤',
        sales: '月销14袋'
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