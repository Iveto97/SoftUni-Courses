function cats(arr) {
    let cats, catName, age;
    cats = [];
    class Cat {
        constructor(catName, age) {
            this.catName = catName;
            this.age = age;
        }

        meow() {
            console.log(`${this.catName}, age ${this.age} says Meow`);
        }
    }
    for (let cat of arr) {
        [catName, age] = cat.split(" ");
        cat = new Cat(catName, age);
        cat.meow();
    }
}

cats(['Mellow 2', 'Tom 5']);