interface Stack<T> {
  pop(): T | null;
  push(item: T): void;
  percentFull(): number;
}
//в классе отсутствовали функции интерфейса 
class UnlimitedStack<T> implements Stack<T> {
  
  pop(): T | null{
   return null
  }
  push(item:T):void{
    console.log(item)
  }
  percentFull(): number {
    return 0;
  }
}
