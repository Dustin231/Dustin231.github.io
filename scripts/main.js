let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/ocean.jpg') {
        myImage.setAttribute('src', 'images/ocean2.jpg');
    } else {
        myImage.setAttribute('src', 'images/ocean.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {  //
    let myName = prompt('输入你的名字');//弹出会话框
    if(!myName || myName === null){ // myName 没有值或值为 null。
        setUserName();
    } else{
        localStorage.setItem('name', myName); //调用本地储存API，储存用户输入姓名
        myHeading.textContent = 'Mozilla 酷毙了，' + myName;
    }
}

if (!localStorage.getItem('name')) {//当本地存储为空时
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}

myButton.onclick = function () {
    setUserName();
}