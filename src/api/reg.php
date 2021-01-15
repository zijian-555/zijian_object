<?php
header('Access-Control-Allow-Origin:*');
    // 链接数据库
    // include '../db/connect.php';
    require('./connect.php');

    // 接收前端传来的数据
    $username = $_GET['username'];
    $password = $_GET['password'];
    $phone= $_GET['phone'];


    // 编写sql语句
    $sql = "insert into user (username,password,phone) values('$username','$password','$phone')";

    $result = $conn->query($sql);
    
    if($result){
        echo 'success';
    }else{
        echo 'fail';
    }

    //释放查询结果集，避免资源浪费
    // $result->close();
    // 关闭数据链接，避免资源占用
    $conn->close();

?>