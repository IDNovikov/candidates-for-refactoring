//сделал функцию асинхронной, типизировал функции колбэки, добавил обработчик ошибки

const calculateWeeklyPay = async (overtime: boolean, getTenthRate:()=>number, getTenthsWorked:()=>number): Promise<number> => {
  try{
  const tenthRate: number = await getTenthRate();
  const tenthsWorked: number = await getTenthsWorked();

  const straightTime: number = Math.min(400, tenthsWorked);
  const overTime: number = Math.max(0, tenthsWorked - straightTime);

  const straightPay: number = straightTime * tenthRate;
  const overtimeRate: number = overtime ? 1.5 : 1.0 * tenthRate;
  const overtimePay: number = Math.round(overTime * overtimeRate);

  return straightPay + overtimePay;
  }catch (error){
    throw new Error ("Error massage")
  }
  
}
