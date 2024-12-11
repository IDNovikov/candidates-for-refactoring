//предположил, что функция auth асинхронная, добавил типизацию функции sendAuth и auth
type TPayment = {
  amount: number;
  rcCode: number;
};

type TGateway = {
  sendAuth:(payment: TPayment) => Promise<number>;//ожидаем промис
};

const auth = async (payment: TPayment, gateway: TGateway):Promise<TPayment> => {
  try{//
    const isAuth = await gateway.sendAuth(payment);
     return {//возвращаю обновленный объект
      ...payment,
      rcCode: isAuth,
    };
  } catch (error) {
    throw new Error ("Auth error")
  }
};
