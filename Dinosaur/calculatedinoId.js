
const {values} = require('../constants');

// const values = {
//     "Birds":1024,
//     "Dogs":512,
//     "SeaCreatures":256,
//     "Plants":128,
//     "PlantAndMeat":64,
//     "Meat":32,
//     "Tall":16,
//     "Short":8,
//     "Medium":4,
//     "Cute":2,
//     "Ferocious":1
// }


const calculatedinoId = (answers) => {
    console.log('reducs fn answers:', answers)
    console.log('reduce fn values', values)
    const total = answers.reduce((start, item) =>{ 
        console.log('freduce fn:', start)
        start = start + values[item];
        return start
    }, 0)
    return total
   // console.log('TOTAL?', total)
}


module.exports = calculatedinoId

//calculatedinoId(["Birds","Meat","Tall","Cute"])


// 1024+32+16+2