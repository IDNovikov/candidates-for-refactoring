//добавил тип Elem и обработку 
type TElem = {
  isPayday():boolean;
  calculatePay():any;
  deliverPay(pay:any):void;
}

const pay = (employees: TElem[]):void => {
  for (let elem of employees) {
    if (elem.isPayday()) {
      const pay = elem.calculatePay();

      elem.deliverPay(pay);
    }else{
      console.log("Not payday")
    }
  }
};
