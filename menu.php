
<?php
session_start();
require_once('funcs.php');
loginCheck();

?>


<!DOCTYPE html>
<html lang="en">
<head>

<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

<link rel="stylesheet" href="css/style.css">


</head>


<div class="header">
<img src="img/header_logo.png" alt="">
</div>


<body>
<nav>
<button id = "menu-open" class = "btn-menu"></button>


<div id = "menu-panel">

<button id = "menu-close" class = "btn-menu">

<svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                <title>メニューを閉じる</title>
                <path clip-rule="evenodd" d="m7.53033 6.46967c-.29289-.29289-.76777-.29289-1.06066 0s-.29289.76777 0 1.06066l4.46963 4.46967-4.46963 4.4697c-.29289.2929-.29289.7677 0 1.0606s.76777.2929 1.06066 0l4.46967-4.4696 4.4697 4.4696c.2929.2929.7677.2929 1.0606 0s.2929-.7677 0-1.0606l-4.4696-4.4697 4.4696-4.46967c.2929-.29289.2929-.76777 0-1.06066s-.7677-.29289-1.0606 0l-4.4697 4.46963z" fill-rule="evenodd"/>
            </svg>
            </button>


<ul class = "menu-list">
<li><a href="https://www.shigoto-ryokou.com/">プロジェクトのメンバーになる</a></li>
<li><a href="">立ち上げメンバーになる</a></li>
<li><a href="">フリーランスとして受託する</a></li>
<li><a href="">今と違う職種を体験</a></li>
<li><a href="">今と違う会社を体験</a></li>
</ul>

</div>
</nav>

<div class = "menu-img">
プロジェクトのメンバーになる<br>
<img id = "imageLink1" class = select1 src="img/image3-4.jpg" alt="">
<br>立ち上げメンバーになる<br>
<img id = "imageLink2" class = select2 src="img/flat-illustration-business-team-meeting-for-project-brainstorming_115495-245.avif" alt="">
<br>フリーランスとして受託する<br>
<img id = "imageLink3" class = select3 src="img/resized.avif" alt="">
</div>

<script src="js/menu.js"></script>

</body>
</html> 




