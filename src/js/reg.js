jQuery(function($) {
    //登录&注册 切换
    let swift2denglu = $('u').on('click', function() {
        $('main').hide();
        $('#denglu').show();
    });
    let swift2zhuce = $('#zczh').on('click', function() {
        $('main').show();
        $('#denglu').hide();
    });
    //登录页面 登录方式切换
    $('#pt').on('mouseover', function() {
        $('#dl_sj').hide();
        $('#dl_yzm').hide();
        $('#dl_zh').show();
        $('#dl_pw').show();

    })
    $('#dt').on('mouseover', function() {
        $('#dl_sj').show();
        $('#dl_yzm').show();
        $('#dl_zh').hide();
        $('#dl_pw').hide();
    })

    //点击注册
    //获取元素
    let $sjh = $('#phone')
    let $yhm = $('#yhm')
    let $psw1 = $('#set')
    let $psw2 = $('#comf')
        //返回数据
    const xhr_reg = new XMLHttpRequest();
    xhr_reg.onload = function() {
        let data = xhr_reg.responseText;
        console.log(`'${data}'`);
        if (data == 'success') {
            alert('注册成功');
            location.href = 'login.html';
        } else if (data === 'fail') {
            alert('用户名或手机已被注册')
        }
    }

    $('#reg_').on('click', function() {

        let _sjh = $sjh.val();
        let _yhm = $yhm.val();
        let _psw1 = $psw1.val();
        let _psw2 = $psw2.val();

        if (!/^\d{11}$/.test(_sjh)) {
            alert('请输入正确手机号');
            return false;
        }
        if (/^\.{10}$/.test(_yhm)) {
            alert('账号不合法');
            return false;
        }
        if (/\s/.test(_sjh)) {
            alert('密码不合法');
            return false;
        }
        if (_psw1 !== _psw2) {
            alert('两次输入的密码不一致');
            return false;
        }

        //传账号、手机、密码至数据库，拒绝重复注册
        xhr_reg.open('get', 'http://localhost:2020/api/reg.php?' + 'username=' + _yhm + '&password=' + _psw2 + '&phone=' + _sjh, true);
        xhr_reg.send();
    })




    //点击登录
    const xhr_dl = new XMLHttpRequest();
    xhr_dl.onload = function() {
        let data = xhr_dl.responseText;
        console.log(`'${data}'`);
        if (data == 'yes') {
            alert('登录成功！');
            location.href = 'login.html';
        } else if (data === 'no') {
            alert('登录失败！')
        }
    }
    let denglu_btn = $('#sub').on('click', function() {
        let dl_zh = $('#dl_zh').val();
        let dl_pw = $('#dl_pw').val();
        xhr_dl.open('get', 'http://localhost:2020/api/dl.php?' + 'username=' + dl_zh + '&password=' + dl_pw, true);
        xhr_dl.send();
    });

})