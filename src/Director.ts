type TEvent = {//cсоздал тип Event
  Date:number;
  Note:string;
}

class Calendar {
  public addEvent(event:TEvent):void { //добавил public и типизировал параметр
    console.log(event)
  }
}

class Director extends Calendar{ // класс Директор ожидает Календарь, тк использует его метод
  private calendar: Calendar; //здесь приватное свойство
  
  constructor(calendar: Calendar) {
    super()
    this.calendar = calendar;
  }

  scheduleMeeting(event:TEvent):void {
    this.calendar.addEvent(event);
  }
}
