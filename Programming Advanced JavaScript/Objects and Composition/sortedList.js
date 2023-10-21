function createSortedList() {
    const specialList = [];

    const list = {
        size: 0,

        add(number) {
            specialList.push(number);
            this.size++
            specialList.sort((a, b) => a - b);
        },

        remove(index) {
            if(index >= 0 && index < specialList.length) {
                specialList.splice(index, 1);
                this.size--
            }
        },

        get(index) {
            if(index >= 0 && index < specialList.length){
                 return specialList[index]; 
            }
        }
    }

    return list;
}

let list = createSortedList();
list.add(5);
list.add(6); //6 7
list.add(7); 
console.log(list.get(1)); 
list.remove(1); 
console.log(list.get(1));