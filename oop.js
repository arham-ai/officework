class car {
    constructor(make,model,year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getcarInfo() {
        return`${this.make} ${this.model} ${this.year}`;
    }
}
let mycar = new car('toyota','vigo',2020);
console.log(mycar.getcarInfo());