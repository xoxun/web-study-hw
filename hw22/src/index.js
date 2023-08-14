const range =  document.querySelector(".game-start input");
const play = document.querySelector(".game-play");
const number =  document.querySelector(".game-play input");
const result = document.querySelector(".game-result");


function checkRange(){
    const rangeNumber = range.value;
    //console.log(rangeNumber);
    if(rangeNumber > 0 ){
        return rangeNumber;
    }else{
        return 0;
    }
}

function checkNumber(){
    const userNumber = number.value;
    if(userNumber.length > 0 ){
        return userNumber;
    }else{
        return -1;
    }
}

function handlePlaySubmit(event){
    event.preventDefault();
    result.innerHTML = ""; //자식요소 삭제(이전결과삭제)
    
    const rangeNumber = checkRange();

    if(rangeNumber === 0){
        alert("0 이상의 범위를 입력하세용!");
    }else{
        const userNumber = checkNumber();
        const machineNumber = Math.floor(Math.random()*(Number(rangeNumber)+1));
        console.log(machineNumber);
        if(userNumber === -1){
            alert("추측 숫자를 입력해주세용!");
        }else{
            const gameContent = document.createElement('h3');
            gameContent.innerText = `You chose: ${userNumber}. the machine chose: ${machineNumber}.`;
            result.appendChild(gameContent);

            const gameResult = document.createElement('h2');
            
            if(userNumber== machineNumber){
                gameResult.innerText = "You win!";
            }else{
                gameResult.innerText = "You lost!";
            }
            result.appendChild(gameResult);
        }
    }
    
}

play.addEventListener("submit",handlePlaySubmit);
