export class Item{
    color:string;
    gas: string;
    year:number;
    description:string;
    price:number;

    constructor(color: string, gas: string, year: number, description: string, price: number){
        this.color = color;
        this.gas = gas;
        this.year = year;
        this.description = description;
        this.price = price;
    }
}