//в прошлом коде нарушен принцип инкапусляции логики. 
class A {
//..
  doSomething() {
    this.b.doSomething();
  }
}

class B {
//..
  doSomething() {
    this.c.doSomething();
  }
}

class C {
  
  doSomething() {
    // Логика
  }
}

//инициализируем классы и наследуем логику 
const c = new C()
const b = new B(c);
const a = new A(b)

//получаем наш метод
a.doSomething()


