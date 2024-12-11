//добавил методы доступа, типизацию вывода функций и конструктор в Customer

class Order {
  private customer: Customer;

  constructor() {
    this.customer = new Customer();
  }

 public  getTotalPrice(): number {
    return this.customer.calculateTotalPrice();
  }
}

class Customer {
  private items: Item[];

  constructor (items:Item[]){
    this.items=items
  }
  
  protected calculateTotalPrice(items): number {
    // вычисление общей цены на основе items
  }
}
