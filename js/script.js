const textInputField = document.getElementById('text-area');
const firstButton = document.getElementById('first-button');
const display = document.getElementById('display');
const winnerDisplay = document.getElementById('display-winner');
const winnerButton = document.getElementById('winner');
const arrayOfText = [];

const space = `${' '}`;
const comma = `${','}`;

const textArray = (peep) => {
    const text = textInputField.value;
    const textArrayComma = text.split(peep);
    for(const text of textArrayComma){
        arrayOfText.push(text);
    }
}


const addItem = (peep) => {
    textArray(peep);
    console.log("mak", arrayOfText);
    for (item of arrayOfText) {
        const list = document.createElement('li');
        list.innerText = item;
        display.appendChild(list)
        textInputField.value = '';
    }
}

winnerButton.addEventListener('click', () => {
    console.log("mak", arrayOfText);
    let ArrayLength = arrayOfText.length;
    if(ArrayLength === 0){
        alert('Please Input Some Text First!')
        return;
    }
    const randomNumber = Math.random() * ArrayLength;
    const randomNumberRound = Math.floor(randomNumber);
    
    const winnerList = document.createElement('li');
    winnerList.innerText = arrayOfText[randomNumberRound];

    const randomRotation = Math.random()*360;
    const randomDegree = Math.floor(randomRotation);
    
    const Circle = document.getElementById('circle');
    Circle.classList.add('spinneranimation'); 
    Circle.classList.add(`rotate-[${randomDegree}deg]`); 
    setTimeout(()=>{
        Circle.classList.remove('spinneranimation');
        winnerDisplay.appendChild(winnerList);
    },
    5000)

    console.log(randomDegree);
    // textInputField.value = ''
});

// function winnerSelector() {

// }