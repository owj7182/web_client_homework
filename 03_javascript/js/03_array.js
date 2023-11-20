function test1() {
    const userInput = prompt("좋아하는 영화를 입력해주세요.");

    if(!userInput) {
        alert('유효한 문자열을 입력해주세요.');
        return;
    }

    const arr = userInput.split(', ');

    arr.sort();

    alert("경고창 출력 : " + arr.join(', '));
}

function test2() {
    const rainbow = ["빨", "주", "노", "초", "파", "남", "보"];

    for(let i = 0; i < rainbow.length; i++){
        console.log(rainbow);    
        rainbow.push(rainbow.shift());
        
    }

}

function test3() {
    const arr1 = [];
    for(let i = 1; i <= 100; i++) {
        arr1.push(i);
    }
    console.log(arr1);

    const arr2 = arr1.slice();
    console.log(arr2.sort(function(a, b) {
        return b - a;
    }));
}