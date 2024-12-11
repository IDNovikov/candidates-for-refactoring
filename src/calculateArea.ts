enum ShapeType {
  Circle,
  Square,
}

function calculateArea(shape: ShapeType, radiusOrSide: number): number {
  let area = 0;
if(radiusOrSide>0){//добавил обработку ошибки 
switch (shape) {
    case ShapeType.Circle:
      area = Math.PI * Math.pow(radiusOrSide, 2);
      break;
    case ShapeType.Square:
      area = Math.pow(radiusOrSide, 2);
      break;
  }
  return area;
}else{
  throw new Error ("Сторона не может быть отрицательной или равной нулю")
}
}

console.log(calculateArea(ShapeType.Circle, 5)); // Output: 78.54
