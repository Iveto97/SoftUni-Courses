import { catList } from "./catList.js";

export function catCreator(cats) {
let ul = '<ul>' ;
    cats.forEach(cat => {
        ul += catList(cat)
    });
ul += '</ul>';
return ul; 
}