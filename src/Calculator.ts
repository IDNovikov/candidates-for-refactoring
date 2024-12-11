class Calculator {
  public add(a: number, b: number): number {
    return a + b;
  }
  public subtract(a: number, b: number): number {
    return a - b;
  }
  public multiply(a: number, b: number): number {
    return a * b;
  }
  public divide(a: number, b: number): number {
    if(b===0){//на ноль нельзя делить
    return a / b;
    }else{
      throw new Error ("На ноль нельзя делить")
    }

  }
}
