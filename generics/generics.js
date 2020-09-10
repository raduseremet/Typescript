"use strict";
function genericFunction(a, b) {
    console.log(a, b);
}
genericFunction({ name: 'Leu', age: 3, color: 'yellow' }, 7);
// generic classes
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1); // -1
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('Max');
textStorage.addItem('Manu');
//console.log(textStorage.getItems());
const numberStorage = new DataStorage();
