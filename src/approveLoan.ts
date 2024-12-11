
// добавил типизацию юзера и параметров, дополнил отказом пользователя
interface IUser {
  name:string;
  age:number;
  employmentStatus: "employed"|"unemployed";
  criminalRecord: boolean;
}

function checkUser (user:IUser, approveLoan:()=>void, rejectLoan:()=>void ):void {
  if (
  user.age >= 18 &&
  user.age <= 65 &&
  user.employmentStatus === 'employed' &&
  user.criminalRecord === false
) {
  approveLoan();
} else {
  rejectLoan()
}
}

