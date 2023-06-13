// 세자리 숫자를 무작위로 뽑아 반환하는 함수
function randomNumber () {
    num1 = Math.floor(Math.random()*10);
    num2 = Math.floor(Math.random()*10);
    while(num2 === num1){
        num2 = Math.floor(Math.random()*10);
    }
    num3 = Math.floor(Math.random()*10);
    while(num3 === num1 || num3 === num2){
        num3 = Math.floor(Math.random()*10);
    }
    
    return `${num1}${num2}${num3}`
}

//사용자가 입력한 수와 미리 만들어진 수를 비교해 몇S몇B인지 문자열을 반환하는 함수
// userInput 문자열로 넣어주고 cpInput도 문자열로 넣어주자

function countSB (userInput,cpInput) {
    let S = 0;
    let B = 0;
    for (let i=0; i < userInput.length ; i++){
        for (let j=0; j < userInput.length; j++) {
            if(userInput[i] === cpInput[j]) {
                if(i === j)
                    S+=1;
                else
                    B += 1 ;
            }
        }
    }
    return (B===0 ? '' : `${B}B`) + (S===0? '' : `${S}S`);
}



