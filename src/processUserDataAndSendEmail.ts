//тип юзер не определен и класс емейлсервис, нет обработки ошибки, не понтно что делает процессДата

type TUser = {
  email:string
  processData:()=>void
}

class EmailService{
  sendEmail(email:string, text:string){
    console.log(email+text)
  }
}

const emailService = new EmailService()

function processUserDataAndSendEmail(user: TUser) {
  try{
  // Обработка данных пользователя
  user.processData();

  // Отправка электронной почты
  emailService.sendEmail(user.email, 'Данные обработаны успешно');
  }catch(error){
    console.log(error)
  }

}
