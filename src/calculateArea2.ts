function calculateArea2(radius: number): number {
  if(radius>0){//добавил обработку ошибки
return Math.PI * radius * radius; // теперь Math.PI (не сразу догадался...)
  }else{
    throw new Error ("Радиус не может быть отрицательным или равным нулю")
  }
  
}
