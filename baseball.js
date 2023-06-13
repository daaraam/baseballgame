//---------------------------------함수 정의-------------------------------------------------

// 세자리의 수를 생성해 반환. 각 자릿수는 중복되지 않는다.
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
    
    return `${num1}${num2}${num3}`;
}

//user가 입력한 숫자와 컴퓨터가 생성한 숫자를 문자열 형태로 입력받아 ?B?S 문자열을 반환
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
    let answer
    if(B == 3){
        answer = (`${B}B`)
    }else if(S == 3){
        answer = (`${S}S`)
    }else{
    answer = (`${B}B${S}S`)}
    return answer 
    
    // return (B===0 ? `` : `${B}B`) + (S===0 ? `` : `${S}S`);
}

//터미널을 통해 user의 입력이 들어왔을 때 호출될 함수. 
//함수가 호출될 때 userInput에 터미널로 받은 입력 문자열이 들어간다.
// const inputHandler = function inputHandler(userInput){
    function inputHandler(userInput){
    //(?B?S)문자열을 result에 저장
    let result = countSB(userInput, cpNum);
    //(?B?S)문자열 출력
    console.log(result);
    
    //결과가 3S이면(맞췄으면), 맞췄다는 메세지 출력하고 프로그램 종료 
    if(result === '3S'){
        console.log(`${challenge}번째 만에 맞추셨습니다.\n게임을 종료합니다.`);
        rl.close();
    }
    else{//아니면, 다시 사용자의 입력을 받음. 입력이 들어오면 inputHandler가 다시 호출된다.
        challenge += 1;
        rl.question(`${challenge}번째 시도: `, inputHandler); 
    }
}


//-----------------------------------여기부터 실행 흐름---------------------------------

//readline을 쓰기 위한 초기 설정
const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
    output: process.stdout
});


//맞춰야 하는 세자리 수 생성.
const cpNum = randomNumber();

//첫번째 시도
let challenge = 1;

//`${challenge}번째 시도: `가 출력 후 사용자의 입력을 기다리다가, 사용자의 입력이 오면 inputHandler 호출.
rl.question(`${challenge}번째 시도: `, inputHandler);
//inputHandler의 인자로는 터미널에서 입력받은 문자열이 들어간다.
//예를 들어, 사용자가 132를 치고 엔터를 누른다면, 엔터를 누르는 순간 "inputHandler('132');"  라는 문장이 실행된다고 생각하면 된다.

//rl.close()를 호출했을 때 실행될 함수를 등록. 여기는 화살표 함수가 등록되어 있다.
//rl.close()를 호출하게 되면 등록해 놓은 화살표 함수가 실행된다. 
rl.on("close", () => {
    //프로그램을 종료시킴.
	process.exit();
});