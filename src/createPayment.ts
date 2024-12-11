//ошибка в Boolean и типизировал getUrl, но с system & userAccount & account нет идей как типизировать, по логике необходимо создать отдельный интерфейс или класс. Сделал any чтобы ts не ругался, но это плохая практика(
const createPayment = (isToken: boolean, getUrl:()=>string[],system:any, account:any, userAccount:any):void => {
  if (isToken) {
    const token = getUrl().slice();
    system.createTransaction(token).setTransaction();
  } else {
    const cardNumber = account.getCardNumber();
    userAccount.createCardPayment(cardNumber).postTransactionToServer();
  }
};
