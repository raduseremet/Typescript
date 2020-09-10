
interface Animal {
    name: string
    age: number
    color: string
}



function genericFunction<T extends Animal, U>(a: T, b: U){

 console.log(a, b);

}

 genericFunction<{name: string, age:number, color:string}, number>({name: 'Leu', age: 3, color: 'yellow'}, 7);





// generic classes

class DataStorage<T extends string | number | boolean> {
    private data: T[] = [];
  
    addItem(item: T) {
      this.data.push(item);
    }
  
    removeItem(item: T) {
      if (this.data.indexOf(item) === -1) {
        return;
      }
      this.data.splice(this.data.indexOf(item), 1); // -1
    }
  
    getItems() {
      return [...this.data];
    }
  }
  
  const textStorage = new DataStorage<string>();
  textStorage.addItem('Max');
  textStorage.addItem('Manu');
  //console.log(textStorage.getItems());
  
  const numberStorage = new DataStorage<number>();