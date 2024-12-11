
// Модуль 1 (типизировал item, далее типизировал параметр как массив Итемов, а также добавил условия на цену больше 0 )

interface Iitem{
  name:string;
  price:number;
}

function calcTotalPrice(items:Iitem[]):number {
  let totalPrice = 0;
  items.forEach((item) => {
    if(item.price>0){
      totalPrice += item.price;
    }else{
      throw new Error ("Error with price")
    }

  });
  return totalPrice;
}

// Модуль 2
function applyDiscount(totalPrice:number, discountPercentage:number):number {
  if(totalPrice>0&&discountPercentage>0&&discountPercentage<100){
return totalPrice * (1 - discountPercentage / 100);
  }
  throw new Error ("Error with price or discount")
}
