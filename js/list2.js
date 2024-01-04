



// 以下ではlist imgを取得できない。なぜならphpファイル上に存在するimgではなくjsで生成したimgだから
// const listImg = document.querySelectorAll('#list img');






const list = document.querySelector('#list');

const lists2 = [
    { name: '伝統けん玉職人', img: '../img-list/jobs_key_20180625112706.jpg', text: '' },
    { name: '果物を採る簡単なお仕事', img: '../img-list/jobs_key_20220721214049.jpeg', text: '' },
    { name: '観光地復興プロジェクト', img: '../img-list/jobs_key_20230426122649.jpg', text: '' },
];

for (let i = 0; i < lists2.length; i++) {
    const column = document.createElement('div');
    column.className = 'column2';

    const img = document.createElement('img');
    img.src = `../img-list/${lists2[i].img}`;
    img.alt = '';
    img.style.width = '500px';
    img.style.height = '300px';

    const h2 = document.createElement('h2');
    h2.textContent = lists2[i].name;

    column.appendChild(img);
    column.appendChild(h2);
    
    // ここでマウスオーバーとマウスアウトのイベントを設定
    img.addEventListener('mouseover', function() {
        this.style.backgroundColor = 'lightblue';
    });

    img.addEventListener('mouseout', function() {
        this.style.backgroundColor = ''; // マウスアウト時に背景色をクリア
    });

    list.appendChild(column);
}


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
