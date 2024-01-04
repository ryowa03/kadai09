

/*メニュー画像のクリックリンクアクション*/ 
document.getElementById('imageLink1').addEventListener('click',function(){
    window.location.href =  'https://www.shigoto-ryokou.com/';
});

document.getElementById('imageLink2').addEventListener('click',function(){
    window.location.href =  'https://www.shigoto-ryokou.com/';
});

document.getElementById('imageLink3').addEventListener('click',function(){
    window.location.href =  'https://www.shigoto-ryokou.com/';
});



/*スライドメニューの表示アクション*/ 
const menuOpen = document.querySelector('#menu-open');
const menuClose = document.querySelector('#menu-close');
const menuPanel =  document.querySelector('#menu-panel');
const menuOptions = {
duration: 1400,
easing: 'ease',
fill: 'forwards',
};

menuOpen.addEventListener('click',() => {
menuPanel.animate({translate:['100vw',0]} , menuOptions);
});

menuClose.addEventListener('click',() => {
    menuPanel.animate({translate:[0,'100vw']} , menuOptions);
    });