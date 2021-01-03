export class Cookie {
    id: number;
    name: string;
    imageUrl: string;
    price: number;

    constructor(id: number, name: string, imageUrl: string, price: number){
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
        this.price = price;
    }

    formatter = new Intl.NumberFormat('en-US', {
        style: 'valuta',
        minimumFractionDigits: 2
      })
}