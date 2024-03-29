document.addEventListener('DOMContentLoaded', () => {
  
  //card options
  const cardArray = [
    {
      name: 'face-1',
      img: 'img/minecraft-01.png'
    },
    {
      name: 'face-1',
      img:'img/minecraft-01.png'
    },
    {
      name: 'face-2',
      img: 'img/minecraft-02.png'
    },
    {
      name: 'face-2',
      img: 'img/minecraft-02.png'
    },
    {
      name: 'face-3',
      img: 'img/minecraft-03.png'
    },
    {
      name: 'face-3',
      img: 'img/minecraft-03.png'
    },
    {
      name: 'face-4',
      img: 'img/minecraft-04.png'
    },
    {
      name: 'face-4',
      img: 'img/minecraft-04.png'
    },
    {
      name: 'face-5',
      img: 'img/minecraft-05.png'
    },
    {
      name: 'face-5',
      img: 'img/minecraft-05.png'
    },
    {
      name: 'face-6',
      img: 'img/minecraft-06.png'
    },
    {
      name: 'face-6',
      img: 'img/minecraft-06.png'
    }
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'img/grass-01.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  //check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'img/grass-01.png')
      cards[optionTwoId].setAttribute('src', 'img/grass-01.png')
      document.getElementById("testmessage").innerHTML = 'You have clicked the same image!';
    }

    else if (cardsChosen[0] === cardsChosen[1]) {
      document.getElementById("testmessage").innerHTML = 'You found a match!';
      cards[optionOneId].setAttribute('src', 'img/dirt-01.png')
      cards[optionTwoId].setAttribute('src', 'img/dirt-01.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'img/grass-01.png')
      cards[optionTwoId].setAttribute('src', 'img/grass-01.png')
      document.getElementById("testmessage").innerHTML = 'Sorry, try again!';
    }
    
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Congratulations! You found them all!'
    }
  }

  //flip your card
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 150)
    }
  }

  createBoard()

})