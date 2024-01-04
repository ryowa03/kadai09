


const list1 = document.querySelector('#list1');
const list2 = document.querySelector('#list2');
const list3 = document.querySelector('#list3');


// 以下ではlist imgを取得できない。なぜならphpファイル上に存在するimgではなくjsで生成したimgだから
// const listImg = document.querySelectorAll('#list img');




const lists = [{
name:'古民家再生プロジェクト',
img: '../img-list/job814_0001.jpg',
text:'',},
{ 
    name:'観光資源豊富な離島のPR!',
    img: '../img-list/job814_0002.jpg',
text:'',},
 {
    name:'着物デザイナー',
    img: '../img-list/jobs_key_20150401133949.jpg',
text:'', },

];


// 以下のようにjsの配列でphpファイルに対してdivなどを生成しているため、画像ホバーやカルーセルなど、全然やり方わからん//
// 上記のように悩んだ結果、for文をやめて一つひとつ表示//
const content1 = `<img src = "../img-list/job814_0001.jpg" alt = "" style="width: 500px; height: 300px;"> <h2> aaa</h2></div>`;
list1.insertAdjacentHTML('beforeend',content1);

const content2 = `<img src = "../img-list/job814_0002.jpg" alt = "" style="width: 500px; height: 300px;"> <h2> aaa</h2></div>`;
list2.insertAdjacentHTML('beforeend',content2);

const content3 = `<img src = "../img-list/jobs_key_20150401133949.jpg" alt = "" style="width: 500px; height: 300px;"> <h2> aaa</h2></div>`;
list3.insertAdjacentHTML('beforeend',content3);



// const lists2 = [{
//     name:'伝統けん玉職人',
//     img: '../img-list/jobs_key_20180625112706.jpg',
// text:'', },
//  {
//     name:'果物を採る簡単なお仕事',
//     img: '../img-list/jobs_key_20220721214049.jpeg',
// text:'', },
// {
//     name:'観光地復興プロジェクト',
//     img: '../img-list/jobs_key_20230426122649.jpg',
// text:'', },

// ];


// for(let i = 0; i < lists2.length; i++){
// const content = `<div class = "column2"><img src = "../img-list/${lists2[i].img}" alt = "" style = "width:500px; height: 300px;"> <h2> ${lists2[i].name}</h2></div>`;
// list2.insertAdjacentHTML('beforeend',content);
// }



/*画像ホバーアクション。よくわからん*/ 
list1.addEventListener('mouseover', function (event) {
    // イベントが発生した要素が list またはその子孫である場合のみ実行
    const imgElement = event.target.closest('#list1');
    if (imgElement) {
        imgElement.style.backgroundColor = 'lightblue';
    }
});

list1.addEventListener('mouseout', function (event) {
    // イベントが発生した要素が list またはその子孫である場合のみ実行
    const imgElement = event.target.closest('#list1');
    if (imgElement) {
        imgElement.style.backgroundColor = ''; // マウスアウト時に背景色をクリア
    }
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
