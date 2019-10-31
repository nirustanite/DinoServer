const listOfQuestions = [
    {
        question:"What type of pet do you like??",
        choices:["Birds","Dogs","SeaCreatures"]
    },
    {
        question:"What type of food you prefer for your pet??",
        choices:["Plants","PlantAndMeat","Meat"]
    },
    {
        question:"WHich height will you prefer for your pet??",
        choices:["Tall","Short","Medium"]
    },
    {
        question:"How do you prefer your pet to look like??",
        choices:["Cute","Ferocious"]
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