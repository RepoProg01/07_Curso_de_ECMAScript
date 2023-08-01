const regex = /\b(Apple)+\b/g;

const fruit = 'Apple, Banana, Grape, Orange, Strawberry, Pear, Watermelon';

for(const match of fruit.matchAll(regex)){
    console.log(match);
}
