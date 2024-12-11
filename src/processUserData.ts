//Добавил типы user и userData, сделал функцию асинхронной и обработал ошибку

type Tuser = {
  id:number;
}

type TuserData = {
  age:number;
  name:string
}

async function processUserData(user:Tuser ):Promise<void> {
  // Получаем данные пользователя
  try{
    const userData:TuserData = await getUserData(user);

     // Проверяем данные пользователя
    if (userData.age >= 18) {
      // Обрабатываем данные
      processUser(user);
    } else {
    // Выводим ошибку
    console.error('User is under 18');
  }
  }catch(error){
console.log("Error...")
  }
  
}
