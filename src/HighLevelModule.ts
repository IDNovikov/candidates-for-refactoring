//только добавил методы доступа и типизировал выводы
class LowLevelModule {
  public doSomething():void {
    // реализация
  }
}

class HighLevelModule {
  private lowLevelModule: LowLevelModule;

  constructor() {
    this.lowLevelModule = new LowLevelModule(); // создание экземпляра
  }

  public doSomethingElse():void {
    this.lowLevelModule.doSomething(); // использование непосредственной зависимости
  }
}
