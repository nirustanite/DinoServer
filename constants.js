const listOfQuestions = [
    {
        question:"What type of pet do you like??",
        choice1:"Birds",
        choice2:"Dogs",
        choice3:"SeaCreatures"
    },
    {
        question:"What type of food you prefer for your pet??",
        choice1:"Plants",
        choice2:"PlantAndMeat",
        choice3:"Meat"
    },
    {
        question:"WHich height will you prefer for your pet??",
        choice1:"Tall",
        choice2:"Short",
        choice3:"Medium"
    },
    {
        question:"How do you prefer your pet to look like??",
        choice1:"Cute",
        choice2:"Ferocious"
    }
]


const values = {
    Birds:1024,
    Dogs:512,
    SeaCreatures:256,
    Plants:128,
    PlantAndMeat:64,
    Meat:32,
    Tall:16,
    Short:8,
    Medium:4,
    Cute:2,
    Ferocious:1
}

module.exports = {listOfQuestions,values}