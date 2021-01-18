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