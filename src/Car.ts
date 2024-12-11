//добавил конструктор и наверное свойства должны быть только читаемыми, тк с ограничением "приватно" мы не сможем получать их значения
class Car {
  readonly make;
  readonly model;
  readonly year;
  readonly color;
  readonly price;
  readonly mileage;

  constructor(make:string,model:string,year:number,color:string,price:number,mileage:number){
    this.make=make
    this.model=model
    this.year=year
    this.color=color
    this.price=price
    this.mileage=mileage

  }
}
