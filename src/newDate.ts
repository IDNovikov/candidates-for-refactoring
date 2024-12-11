//добавил класс с функцией add, типизировал их

class DateClass {
    public add(param:number):number{
        return param
    }
}
const date = new DateClass()
const newDate:number = date.add(5);
