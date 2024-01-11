


const list1 = document.querySelector('#list1');
const list2 = document.querySelector('#list2');
const list3 = document.querySelector('#list3');

const list4 = document.querySelector('#list4');
const list5 = document.querySelector('#list5');
const list6 = document.querySelector('#list6');

const list7 = document.querySelector('#list7');
const list8 = document.querySelector('#list8');
const list9 = document.querySelector('#list9');



/*jsの関数１：画像ホバーアクション*/ 
function addHoverEffect(elementId) {
    const element = document.getElementById(elementId);

    element.addEventListener('mouseover', function (event) {
        const targetElement = event.target.closest(`#${elementId}`);
        if (targetElement) {
            targetElement.style.transform = 'scale(1.1)';
        }
    });

    element.addEventListener('mouseout', function (event) {
        const targetElement = event.target.closest(`#${elementId}`);
        if (targetElement) {
            targetElement.style.transform = 'scale(1)';
        }
    });
}


// 以下ではlist imgを取得できない。なぜならphpファイル上に存在するimgではなくjsで生成したimgだから
// const listImg = document.querySelectorAll('#list img');




// const lists = [{
// name:'古民家再生プロジェクト',
// img: '../img-list/job814_0001.jpg',
// text:'',},
// { 
//     name:'観光資源豊富な離島のPR!',
//     img: '../img-list/job814_0002.jpg',
// text:'',},
//  {
//     name:'着物デザイナー',
//     img: '../img-list/jobs_key_20150401133949.jpg',
// text:'', },

// ];


// 以下のようにjsの配列でphpファイルに対してdivなどを生成しているため、画像ホバーやカルーセルなど、全然やり方わからん//
// 上記のように悩んだ結果、for文をやめて一つひとつ表示//
const content1 = `<img src = "../img-list/job814_0001.jpg" alt = "" style="width: 500px; height: 300px;"> <h2> aaa</h2></div>`;
list1.insertAdjacentHTML('beforeend',content1);

const content2 = `<img src = "../img-list/job814_0002.jpg" alt = "" style="width: 500px; height: 300px;"> <h2> aaa</h2></div>`;
list2.insertAdjacentHTML('beforeend',content2);

const content3 = `<img src = "../img-list/jobs_key_20150401133949.jpg" alt = "" style="width: 500px; height: 300px;"> <h2> aaa</h2></div>`;
list3.insertAdjacentHTML('beforeend',content3);


const content4 = `<img src = "../img-list/job814_0001.jpg" alt = "" style="width: 500px; height: 300px;"> <h2> aaa</h2></div>`;
list4.insertAdjacentHTML('beforeend',content4);

const content5 = `<img src = "../img-list/job814_0002.jpg" alt = "" style="width: 500px; height: 300px;"> <h2> aaa</h2></div>`;
list5.insertAdjacentHTML('beforeend',content5);

const content6 = `<img src = "../img-list/jobs_key_20150401133949.jpg" alt = "" style="width: 500px; height: 300px;"> <h2> aaa</h2></div>`;
list6.insertAdjacentHTML('beforeend',content6);

const content7 = `<img src = "../img-list/job814_0001.jpg" alt = "" style="width: 500px; height: 300px;"> <h2> aaa</h2></div>`;
list4.insertAdjacentHTML('beforeend',content7);

const content8 = `<img src = "../img-list/job814_0002.jpg" alt = "" style="width: 500px; height: 300px;"> <h2> aaa</h2></div>`;
list5.insertAdjacentHTML('beforeend',content8);

const content9 = `<img src = "../img-list/jobs_key_20150401133949.jpg" alt = "" style="width: 500px; height: 300px;"> <h2> aaa</h2></div>`;
list6.insertAdjacentHTML('beforeend',content9);



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



/*画像ホバーアクション*/ 
addHoverEffect('list1');
addHoverEffect('list2');
addHoverEffect('list3');





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
