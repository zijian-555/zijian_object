<?php
    $_servername = 'localhost';
    $_username = 'root';
    $_password = '';
    $_dbname = 'e_pet';

    // 链接mysql
    $conn = new mysqli($_servername, $_username, $_password, $_dbname);

    // 检测连接
    if ($conn->connect_error) {
        die("连接失败: " . $conn->connect_error);
    } 

    //查询前设置编码，防止输出乱码
    $conn->set_charset('utf8');

    // var_dump($conn);

    // // 执行sql语句
    // $sql = "select * from user";

    // $result =$conn->query($sql);

    // if($result->num_rows>0){
    //     $rows = $result->fetch_all(MYSQLI_ASSOC);
    //     echo json_encode($rows,JSON_UNESCAPED_UNICODE);
    // }

    // var_dump($rows);
?>