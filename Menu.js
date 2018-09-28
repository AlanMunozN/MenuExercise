const food = [
    { name: 'baguette', icon: '🥖', price: 10 },
    { name: 'tomato', icon: '🍅', price: 2 },
    { name: 'avocado', icon: '🥑', price: 80 }
]

const meat = [
    { name: 'bacon', icon: '🥓', price: 20 },
    { name: 'beef', icon: '🍖', price: 30 },
    { name: 'chicken', icon: '🍗', price: 25 }
]

const fruits = [
    { name: 'melon', icon: '🍈', price: 12 },
    { name: 'watermelon', icon: '🍉', price: 10 },
    { name: 'apple', icon: '🍎', price: 5 },
]

const fruitsWithDescription = fruits.map(e => {
    return { 
        ...e, 
        description: `This is a ${e.name}, it cost $${e.price} and i looks like this: ${e.icon}`
    }
})

const menu = [
    food.slice(0,2).concat(meat[1]),
    food.concat(meat[1]),
    food.slice(0,3).concat(meat[0]).concat(meat[2]),
    food.slice(2,3).concat(meat[1],fruits[1]),
    food.slice(1,3).concat(meat[0],fruits[0]),
    food.slice(1,2).concat(meat[1],fruits[2]),
    food.slice(1,2).concat(meat[2],fruits[2]),
    food.slice(0,3).concat(meat.slice(0,3),fruits.slice(0,3)),
]

const menuChido = menu.map(e => ({
        description: `This is a${e.reduce((p, c) => `${p} ${c.name}`, '')} meal.`,
        image: e.reduce((p, c) => `${p} ${c.icon}`, ''),
        price: e.reduce((p, c) => p + c.price, 0)
    }))

const menuDescription = menuChido.map(e => `${e.description}, it cost $${e.price} and i looks like this: ${e.image}`) 

const colors=[
  red=[food[1],fruits[2],meat[1]],
  green=[food[2],fruits[0],fruits[1]],
  orange=[food[0],meat[2],meat[0]]
]

console.log(menuDescription);

for(let i=0;i<colors.length;i++){
  let nameColor=["Red","Green","orange"];
    console.log(colors[i][0].name+","+colors[i][1].name+","+colors[i][2].name+" are color "+nameColor[i]+"Look at them: "+colors[i][0].icon+","+colors[i][1].icon+","+colors[i][2].icon);
}