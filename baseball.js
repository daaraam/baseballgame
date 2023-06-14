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

function countSB (userInput,cpInput) {
    let S = 0;
    let B = 0;
    for (let i=0; i < userInput.length ; i++){
        for (let j=0; j < userInput.length; j++) { 
            if(userInput[i] === cpInput[j]) { 
                if(i === j) 
                    S+=1; 
                else 
                    B+=1; 
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
}

    const cpNum = randomNumber();
    let challenge = 1;
    
    function inputHandler(userInput){
    let result = countSB(userInput, cpNum);
    console.log(result);
    
    if(result === '3S'){
        console.log(`${challenge}번째 만에 맞추셨습니다.\n게임을 종료합니다.`);
        rl.close();
    }
    else{
        challenge += 1;
        rl.question(`${challenge}번째 시도: `, inputHandler); 
    }
} 

const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
    output: process.stdout
});

rl.question(`${challenge}번째 시도: `, inputHandler);

rl.on("close", () => {
	process.exit();
});