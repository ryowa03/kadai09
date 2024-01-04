<?php

//セッションidをリジェネレートする。アクセスの度に変わる仕様とする。（セキュリティの観点から）
session_start();

//旧セッションIDを取得
$old_session_id = session_id();

//新規でセッションIDを作成　下のコードがあるとIDがリジェネレートされるように。
session_regenerate_id(true);


$new_session_id = session_id();

?>