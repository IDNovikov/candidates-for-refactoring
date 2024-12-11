class Popup {//не было класса попап
  //logic
  
}
class FilmController extends Popup {//ожидаем класс попап

  private popupOpened:boolean//не инициализировано свойство

  constructor(popupOpened:boolean){//собираем класс
    super()
    this.popupOpened=popupOpened
  }
  
  openDetails() {
    const popup = new Popup();
    this.popupOpened = true;
  }

  isPopupOpened() {
    return this.popupOpened;
  }
}
