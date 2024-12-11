//добавил функцию конструктор и типизировал параметры 
class DaoCacheConfigProperties {
  public alive:number; // alive cache time in days
  public elements:number; // maximum elements in cache
  constructor(alive:number, elements:number){
    this.alive=alive
    this.elements=elements
  }
}
