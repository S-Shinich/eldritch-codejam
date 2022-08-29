
const ancientsData = [
    {
      id: 'azathoth',
      name: 'azathoth',
      cardFace: 'Ancients.azathoth',
      firstStage: {
        greenCards: 1,
        blueCards: 1,
        brownCards: 2,
      },
      secondStage: {
        greenCards: 2,
        blueCards: 1,
        brownCards: 3,
      },
      thirdStage: {
        greenCards: 2,
        blueCards: 0,
        brownCards: 4,
      },
    },
    {
      id: 'cthulhu',
      name: 'cthulhu',
      cardFace: 'Ancients.cthulhu',
      firstStage: {
        greenCards: 0,
        blueCards: 2,
        brownCards: 2,
      },
      secondStage: {
        greenCards: 1,
        blueCards: 0,
        brownCards: 3,
      },
      thirdStage: {
        greenCards: 3,
        blueCards: 0,
        brownCards: 4,
      },
    },
    {
      id: 'iogSothoth',
      name: 'iogSothoth',
      cardFace: 'Ancients.iogSothoth',
      firstStage: {
        greenCards: 0,
        blueCards: 1,
        brownCards: 2,
      },
      secondStage: {
        greenCards: 2,
        blueCards: 1,
        brownCards: 3,
      },
      thirdStage: {
        greenCards: 3,
        blueCards: 0,
        brownCards: 4,
      },
    },
    {
      id: 'shubNiggurath',
      name: 'shubNiggurath',
      cardFace: 'Ancients.shubNiggurath',
      firstStage: {
        greenCards: 1,
        blueCards: 1,
        brownCards: 2,
      },
      secondStage: {
        greenCards: 3,
        blueCards: 1,
        brownCards: 2,
      },
      thirdStage: {
        greenCards: 2,
        blueCards: 0,
        brownCards: 4,
      },
    },
  ]

const cardsDataGreen = [
    {
      id: 'green1',
      cardFace: '.green1',
      difficulty: 'easy',
      color:'green'
    },
    {
      id: 'green2',
      cardFace: '.green2',
      difficulty: 'hard',
      color:'green'
    },
    {
      id: 'green3',
      cardFace: '.green3',
      difficulty: 'hard',
      color:'green'
    },
    {
      id: 'green4',
      cardFace: '.green4',
      difficulty: 'hard',
      color:'green'
    },
    {
      id: 'green5',
      cardFace: '.green5',
      difficulty: 'hard',
      color:'green'
    },
    {
      id: 'green6',
      cardFace: '.green6',
      difficulty: 'hard',
      color:'green'
    },
    {
      id: 'green7',
      cardFace: '.green7',
      difficulty: 'normal',
      color:'green'
    },
    {
      id: 'green8',
      cardFace: '.green8',
      difficulty: 'normal',
      color:'green'
    },
    {
      id: 'green9',
      cardFace: '.green9',
      difficulty: 'normal',
      color:'green'
    },
    {
      id: 'green10',
      cardFace: '.green10',
      difficulty: 'normal',
      color:'green'
    },
    {
      id: 'green11',
      cardFace: '.green11',
      difficulty: 'normal',
      color:'green'
    },
    {
      id: 'green12',
      cardFace: '.green12',
      difficulty: 'easy',
      color:'green'
    },
    {
      id: 'green13',
      cardFace: '.green13',
      difficulty: 'normal',
      color:'green'
    },
    {
      id: 'green14',
      cardFace: '.green14',
      difficulty: 'normal',
      color:'green'
    },
    {
      id: 'green15',
      cardFace: '.green15',
      difficulty: 'normal',
      color:'green'
    },
    {
      id: 'green16',
      cardFace: '.green16',
      difficulty: 'easy',
      color:'green'
    },
    {
      id: 'green17',
      cardFace: '.green17',
      difficulty: 'easy',
      color:'green'
    },
    {
      id: 'green18',
      cardFace: '.green18',
      difficulty: 'easy',
      color:'green'
    },
  ]
  
const cardsDataBrown = [
    {
      id: 'brown1',
      cardFace: '.brown1',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown2',
      cardFace: '.brown2',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown3',
      cardFace: '.brown3',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown4',
      cardFace: '.brown4',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown5',
      cardFace: '.brown5',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown6',
      cardFace: '.brown6',
      difficulty: 'hard',
      color:'brown'
    },
    {
      id: 'brown7',
      cardFace: '.brown7',
      difficulty: 'hard',
      color:'brown'
    },
    {
      id: 'brown8',
      cardFace: '.brown8',
      difficulty: 'hard',
      color:'brown'
    },
    {
      id: 'brown9',
      cardFace: '.brown9',
      difficulty: 'hard',
      color:'brown'
    },
    {
      id: 'brown10',
      cardFace: '.brown10',
      difficulty: 'hard',
      color:'brown'
    },
    {
      id: 'brown11',
      cardFace: '.brown11',
      difficulty: 'easy',
      color:'brown'
    },
    {
      id: 'brown12',
      cardFace: '.brown12',
      difficulty: 'easy',
      color:'brown'
    },
    {
      id: 'brown13',
      cardFace: '.brown13',
      difficulty: 'easy',
      color:'brown'
    },
    {
      id: 'brown14',
      cardFace: '.brown14',
      difficulty: 'easy',
      color:'brown'
    },
    {
      id: 'brown15',
      cardFace: '.brown15',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown16',
      cardFace: '.brown16',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown17',
      cardFace: '.brown17',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown18',
      cardFace: '.brown18',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown19',
      cardFace: '.brown19',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown20',
      cardFace: '.brown20',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown21',
      cardFace: '.brown21',
      difficulty: 'easy',
      color:'brown'
    },
  ]

const cardsDataBlue = [
    {
      id: 'blue1',
      cardFace: '.blue1',
      difficulty: 'hard',
      color:'blue'
    },
    {
      id: 'blue2',
      cardFace: '.blue2',
      difficulty: 'hard',
      color:'blue'
    },
    {
      id: 'blue3',
      cardFace: '.blue3',
      difficulty: 'easy',
      color:'blue'
    },
    {
      id: 'blue4',
      cardFace: '.blue4',
      difficulty: 'easy',
      color:'blue'
    },
    {
      id: 'blue5',
      cardFace: '.blue5',
      difficulty: 'easy',
      color:'blue'
    },
    {
      id: 'blue6',
      cardFace: '.blue6',
      difficulty: 'hard',
      color:'blue'
    },
    {
      id: 'blue7',
      cardFace: '.blue7',
      difficulty: 'normal',
      color:'blue'
    },
    {
      id: 'blue8',
      cardFace: '.blue8',
      difficulty: 'hard',
      color:'blue'
    },
    {
      id: 'blue9',
      cardFace: '.blue9',
      difficulty: 'normal',
      color:'blue'
    },
    {
      id: 'blue10',
      cardFace: '.blue10',
      difficulty: 'easy',
      color:'blue'
    },
    {
      id: 'blue11',
      cardFace: '.blue11',
      difficulty: 'normal',
      color:'blue'
    },
    {
      id: 'blue12',
      cardFace: '.blue12',
      difficulty: 'normal',
      color:'blue'
    },
  ]
  
// ##########################

const currAncientCard = document.querySelectorAll('.ancient');
const counterCards = document.querySelectorAll('.dot');
const currDifficulties = document.querySelectorAll('.diff');
const currDeck = document.querySelector('.deck');
const lastCard = document.querySelector('.last-card');

const deckGreen = [];
const deckBrown = [];
const deckBlue  = [];
let deckStage1 = [];
let deckStage2 = [];
let deckStage3 = [];
let deck = [];
let currCard ;
let subCardsGreen =[]; 
let subCardsBrown =[]; 
let subCardsBlue  =[]; 

let iStage1 = 0;
let iStage2 = 0;
let iStage3 = 0;


// console.log(currAncientCard);
// console.log(counterCards);
// console.log(currDifficulties);

const arrCardColor = []; 

function getAncientCard() {
  for (i=0; i<currAncientCard.length; i++) {
  const AncientCard = ancientsData[i];
  currAncientCard[i].addEventListener('click', (e) => {
    console.log(AncientCard);
    console.log(e.target);
    for (let prop in AncientCard) {
      console.log(prop);
      if (prop === 'firstStage' ){
        arrCardColor.green = counterCards[0].innerHTML = AncientCard.firstStage.greenCards;     
        arrCardColor.brown = counterCards[1].innerHTML = AncientCard.firstStage.brownCards;
        arrCardColor.blue  = counterCards[2].innerHTML = AncientCard.firstStage.blueCards;
      }
      else if (prop === 'secondStage' ){
        arrCardColor.green += counterCards[3].innerHTML = AncientCard.secondStage.greenCards;
        arrCardColor.brown += counterCards[4].innerHTML = AncientCard.secondStage.brownCards;
        arrCardColor.blue  += counterCards[5].innerHTML = AncientCard.secondStage.blueCards;
      }
      else if (prop === 'thirdStage' ){
        arrCardColor.green += counterCards[6].innerHTML = AncientCard.thirdStage.greenCards;
        arrCardColor.brown += counterCards[7].innerHTML = AncientCard.thirdStage.brownCards;
        arrCardColor.blue  += counterCards[8].innerHTML = AncientCard.thirdStage.blueCards;
      } 
      console.log(arrCardColor);
    }
  }) 
}
}

function  getRandomNum(iMin, iMax) {
  return  Math.floor(Math.random() * (iMax - iMin )) + iMin; 
};

function getCard(color, index) {
  if (color === 'green') {
    return subCardsGreen[index];
  }
  else if (color === 'brown') {
    return subCardsBrown[index];
  }
  else {  
    return subCardsBlue[index];
  }

};

function getCardsByLevel() {
    deckGreen.length=0;
    deckBrown.length=0;
    deckBlue .length=0;

   // difficulties = normal  !!!!!!!!!!!!!!!!!!!!!!!!

    for ( let gr = 0;  gr < arrCardColor.green;) {
      let randomNum =  getRandomNum(0, subCardsGreen.length);
      let deckGreenEl = getCard("green", randomNum);
      console.log(randomNum); 
      if (deckGreen.indexOf(deckGreenEl) === -1) {
        deckGreen.push(deckGreenEl);   
        gr++; 
 
    }  
    };
    
    for ( let gr = 0;  gr < arrCardColor.brown;) {
      let randomNum =  getRandomNum(0, subCardsBrown.length);
      let deckBrownEl = getCard("brown", randomNum);
      console.log(randomNum); 
      if (deckBrown.indexOf(deckBrownEl) === -1) {
        deckBrown.push(deckBrownEl);   
        gr++; 

    }  
    };

    for ( let gr = 0;  gr < arrCardColor.blue;) {
      let randomNum =  getRandomNum(0, subCardsBlue.length);
      let deckBlueEl = getCard("blue", randomNum);
      console.log(randomNum); 
      if (deckBlue.indexOf(deckBlueEl) === -1) {
        deckBlue.push(deckBlueEl);   
        gr++; 
      
    }  
    };
    // deckStage1 = [...deckGreen, ...deckBrown, ...deckBlue];
    fillStages();
}


function fillStages(){
  
  deckStage1= deckGreen.splice(0, counterCards[0].innerHTML).concat(deckBrown.splice(0, counterCards[1].innerHTML), deckBlue.splice(0,  counterCards[2].innerHTML))
  deckStage2= deckGreen.splice(0, counterCards[3].innerHTML).concat(deckBrown.splice(0, counterCards[4].innerHTML), deckBlue.splice(0,  counterCards[5].innerHTML))
  deckStage3= deckGreen.splice(0, counterCards[6].innerHTML).concat(deckBrown.splice(0, counterCards[7].innerHTML), deckBlue.splice(0,  counterCards[8].innerHTML))

  console.log(deckStage1);
  console.log(deckStage2);
  console.log(deckStage3);
  
  shuffle(deckStage1)
  shuffle(deckStage2);
  shuffle(deckStage3);

  deck = deckStage3.concat(deckStage2, deckStage1);
  iStage1 = deckStage1.length;
  };

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}


// **************

getAncientCard();

function removeElementByName(arr, name){
  return arr.filter( e => e.name !== name );
}

function getLevel() {
  console.log('$$$$$');
  for (i=0; i<currDifficulties.length; i++) {
  // const AncientCard = ancientsData[i];
  currDifficulties[i].addEventListener('click', (e) => {
    if (arrCardColor.green === undefined ) {
      return alert('Сперва надо выбрать древнего')
    };

  if (i === 0) {    // Очень легкий  уровень
    // console.log(cardsDataBlue);
    subCardsGreen = removeElementByName(cardsDataGreen, 'hard') ;
    subCardsBrown = removeElementByName(cardsDataBrown, 'hard');
    subCardsBlue  = removeElementByName(cardsDataBlue, 'hard'); 
    // console.log(subCardsBlue);
  }
  else if (i === 1) {   // Легкий уровень
    subCardsGreen = removeElementByName(cardsDataGreen, 'hard') ;
    subCardsBrown = removeElementByName(cardsDataBrown, 'hard');
    subCardsBlue  = removeElementByName(cardsDataBlue, 'hard'); 
  }
    else if (i === 2) {   // редний уровень 
    subCardsGreen = cardsDataGreen;
    subCardsBrown = cardsDataBrown;
    subCardsBlue  = cardsDataBlue;
  }
  else if (i === 3) {   // Высокий уровень
    subCardsGreen = removeElementByName(cardsDataGreen, 'easy') ;
    subCardsBrown = removeElementByName(cardsDataBrown, 'easy');
    subCardsBlue  = removeElementByName(cardsDataBlue, 'easy'); 
  }
  else  {               // Очень высокий уровень
    subCardsGreen = removeElementByName(cardsDataGreen, 'easy') ;
    subCardsBrown = removeElementByName(cardsDataBrown, 'easy');
    subCardsBlue  = removeElementByName(cardsDataBlue, 'easy'); 
  }
  console.log(i);
    getCardsByLevel();

  });
  };
  };


getLevel();

currDeck.addEventListener('click', makeStep);

console.log(deck);

function makeStep(){
  if (deck.length) {
  currCard = deck[deck.length - 1 ];
  console.log(currCard); 
  
  lastCard.style.backgroundImage = `url('./assets/MythicCards/${currCard.color}/${currCard.id}.png')`;
  
  console.log(iStage1); 
  if (iStage1 ){
    if (currCard.color === 'green') {
     --counterCards[0].innerHTML ;
     --iStage1;
    }
    else if ( currCard.color === 'brown') {     
      --counterCards[1].innerHTML ;
      --iStage1;
    }
    else {
      --counterCards[2].innerHTML;
      --iStage1;
    }
    if (!iStage1){
      iStage2 =  deckStage2.length;
    } 
    
    deck.pop();
    console.log(iStage1);
  }

  else if ( iStage2 ){
    if (currCard.color === 'green') {
      --counterCards[3].innerHTML ;
      --iStage2;
     }
     else if ( currCard.color === 'brown') {     
       --counterCards[4].innerHTML ;
       --iStage2;
     }
     else {
       --counterCards[5].innerHTML;
       --iStage2;
     }
     if (!iStage2){
       iStage3 =  deckStage3.length;
     }
     deck.pop(); 
    console.log(iStage2);

  }

  else if (iStage3){
    if (currCard.color === 'green') {
      --counterCards[6].innerHTML ;
      --iStage3;
     }
     else if ( currCard.color === 'brown') {     
       --counterCards[7].innerHTML ;
       --iStage3;
     }
     else {
       --counterCards[8].innerHTML;
       --iStage3;
     }
     deck.pop(); 
    console.log(iStage3);
  } 
    
  }
  else {
    lastCard.style.backgroundImage = null; 
  }

};

// const difficultiesButton = document.querySelector('.bnt_difficulties');

const shuffleButton = document.querySelector('.shuffle-button');
const deckContainer = document.querySelector('.deck-container');

shuffleButton.addEventListener('click', (sh) => {
  sh.preventDefault();
  shuffleButton.classList.toggle('hide');
deckContainer.classList.toggle('hide');
})