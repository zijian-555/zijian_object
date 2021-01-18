<?php 

    $content = file_get_contents('https://list.epet.com/search/main.html?match_cid=&ls=1&keyword=%E6%AF%94%E7%91%9E%E5%90%89&match_mode=&pet_type=dog&version=2.0.0&attrid=&brandid=0&buymode=0&cid=3555');

    // preg_match('/\[<a.+>(.+)<\/a>\]/', $content,$res);

    // var_dump($res);

    // echo $res;
    echo $content;
?>