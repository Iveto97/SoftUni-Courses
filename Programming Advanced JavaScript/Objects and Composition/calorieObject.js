function calorieObject(input) {
    let fruitsList = {};
    for (index = 0; index < input.length; index += 2) {
        const fruit = input[index];
        const calorie = input[index + 1]
        fruitsList[fruit] = Number(calorie);
    }
    console.log(fruitsList);
} 

calorieObject(['Yoghurt', '48', 'Rise', '138',

'Apple', '52'])