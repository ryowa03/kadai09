
<!-- //ログインのために必要なセッションを作る
session start を書くとidが作られている -->

<!-- session_startを書くとサーバー側でidが作られる -->
<?php
session_start();

$lid = 'yamada';
$lpw = 'aaa';

// $_SESSION変数に格納することで他のシートでも使える
$_SESSION['lid']=$lid;
$_SESSION['lpw']=$lpw;


//上のsession_idで作られたidを呼び出してエコーで表示
//なお、sessionidはブラウザにとサーバー両方に保存される
//プラウザにおいてはクッキーの中に保存される
$sid = session_id();
echo $sid;


?>

