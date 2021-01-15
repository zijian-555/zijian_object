<?php
header('Access-Control-Allow-Origin:*');
    // 链接数据库
    // include '../db/connect.php';
    require('./connect.php');

    // 接收前端传来的数据
    $username = $_GET['username'];
    $password = $_GET['password'];

    // 编写sql语句
    $sql1 = "select username from user where username='$username'";
    $sql2 = "select username from user where password='$password'";
    $result1 = $conn->query($sql1);
    $result2 = $conn->query($sql2);

    if($result1->num_rows > 0 && $result2->num_rows > 0){
        echo 'yes';
    }else{
        echo 'no';
    }

    //释放查询结果集，避免资源浪费
    $result1->close();
    $result2->close();
    // 关闭数据链接，避免资源占用
    $conn->close();

?>