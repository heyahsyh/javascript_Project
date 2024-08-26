const cardArray = [
    {
        name: "fries",
        img: 'image/fries.png'
    },
    {
        name: "cheeseburger",
        img: 'image/cheeseburger.png'
    },
    {
        name: "hotdog",
        img: 'image/hotdog.png'
    },
    {
        name: "icecream",
        img: 'image/icecream.png'
    },
    {
        name: "pizza",
        img: 'image/pizaa.png'
    },
    {
        name: "milkshake",
        img: 'image/milkshake.png'
    },
    {
        name: "fries",
        img: 'image/fries.png'
    },
    {
        name: "cheeseburger",
        img: 'image/cheeseburger.png'
    },
    {
        name: "hotdog",
        img: 'image/hotdog.png'
    },
    {
        name: "icecream",
        img: 'image/icecream.png'
    },
    {
        name: "milkshake",
        img: 'image/milkshake.png'
    },
    {
        name: "pizza",
        img: 'image/pizaa.png'
    },
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector("#grid")

function createBoard() {
    for(let i = 0; i < cardArray.length; i++) {
       const card =  document.createElement("img")
       card.setAttribute('src', 'image/mixcolor.jpg')
       card.setAttribute('data-id', i)
       card.addEventListener("click", flipCard)
       gridDisplay.appendChild(card)
       
    }
}
createBoard()

function flipCard() {
    console.log("clicked");
    


}