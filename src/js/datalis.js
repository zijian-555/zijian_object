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



    //获取url参数，转成对象，写入页面
    var params = location.search.slice(1);
    var arr_params = params.split('&');
    var data = {};
    arr_params.forEach(function(i) {
        let arr = i.split('=');
        let k = arr[0];
        let v = arr[1];
        data[k] = decodeURI(v);
    })
    console.log(data);
    let html_l = '<div><img src="' + data.mg + '"></div>';
    $('.data-l').html(html_l)
    var html_r = '';
    html_r += '<h4>' + data.title + '</h4>'
    html_r += '<span class="sp1">高性价比 强健骨骼 保护关节</span>'
    html_r += '<div id="huodong" style="background:url(../img/linearred.png);width:667px;height:60px"></div>'
    html_r += '<p><span class="sp2">活动价</span><span class="sp3">' + data.price2 + '</span>'
    html_r += '<del>' + data.price1 + '</del></p>'
    html_r += '<p><span class="sp4">' + data.sales + '</span><span  class="sp5">评价：<a>(1038)</a></span><span class="sp6">咨询：<a>(88)</a></span>'
    html_r += '<span class="sp7">赠送：<a>最多7E宠币</a></span></p>'

    $('.data-r1').html(html_r)

    let html_r_hd = ''
    html_r_hd += '<span class="sp-2" style="color:#fff;font-size:16px ">此商品参与“折扣”活动</span><span class="sp-1" style="color:#fff;font-size:10px">距结束仅剩3天</span>'
    $('#huodong').html(html_r_hd)