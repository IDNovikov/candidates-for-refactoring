//добавил типизацию параметров и вывода функции а также создал переменную
function calculateTotalPrice(quantity:number, price:number):number {
  let totalPrice:number = quantity * price;
  return totalPrice
}
//типизировал параметр и изменил его на более читаемое и привел к строковому значению
function formatPhoneNumber(phoneNumber:number):string {
  const textNumber:string = phoneNumber.toString()
  let formatedNumber:string = `(${textNumber.slice(0, 3)}) ${textNumber.slice(3, 6)}-${textNumber.slice(6)}`
  return formatedNumber
}
