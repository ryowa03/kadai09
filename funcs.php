<?php

function db_conn(){
    try {
        $db_name = 'gs_db4'; //データベース名
        $db_id   = 'root'; //アカウント名
        $db_pw   = ''; //パスワード：MAMPは'root'
        $db_host = 'localhost'; //DBホスト
        return $pdo = new PDO('mysql:dbname=' . $db_name . ';charset=utf8;host=' . $db_host, $db_id, $db_pw);
    } catch (PDOException $e) {
        exit('DB Connection Error:' . $e->getMessage());
    }
}


 //ログインしてないとエラーになるよ処理を関数化
 //セッションidを持っていたら見れる、持っていないと見れないようにするコード
//!が否定、つまり持っていなやつ. ｜｜はor
//つまりifのとこ、左がssid持っていないやつ。右が持っているけど一致しないやつ、両方とも弾く対象
function loginCheck(){
    if(!isset($_SESSION['chk_ssid'])  ||  $_SESSION['chk_ssid'] !== session_id() ){
        exit('LOGIN ERROR');
    } else{
        session_regenerate_id(true);
        $_SESSION['chk_ssid'] = session_id();
    }
}




?>


