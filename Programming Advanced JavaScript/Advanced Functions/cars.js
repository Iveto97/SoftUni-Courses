function cars(carsString) {
   
  let result = [];
  let map = new Map();
    
  let carsObject = {
    create: function([name, , parent]) {
        parent = parent ? map.get(parent) : null;
        let newObject = Object.create(parent);
        map.set(name, newObject);
        return newObject;
    },

    set: function([name, key, value]){
        let carsObject = map.get(name);
        carsObject[key] = value;
    },

    print: function([name]) {
        let obj = map.get(name);
        let allProperties = []
        Object.keys(obj).forEach(key => allProperties.push(`${key}:${obj[key]}`));
        while(Object.getPrototypeOf(obj)) {
            Object.keys(Object.getPrototypeOf(obj)).forEach(key => allProperties.push(`${key}:${Object.getPrototypeOf(obj)[key]}`));
            obj = Object.getPrototypeOf(obj);
        }
        console.log(allProperties.join(','));
    }
  };

    for(const line of carsString){
        let data = line.split(' ');
        let command = data.shift();
        carsObject[command](data);
    }
}

cars(['create c1','create c2 inherit c1','set c1 color red','set c2 model new','print c1','print c2']);


//create <name> - creates an object with the supplied <name>
//create <name> inherits <parentName> - creates an object with the given <name>, that inherits from the parent object with the <parentName>
//set <name> <key> <value> - sets the property with key equal to <key> to <value> in the object with the supplied <name>.
//print <name> - prints the object with the supplied <name> in the format "<key1>:<value1>,<key2>:<value2>…" - the printing should also print all inherited properties from parent objects. Inherited properties should come after own properties.