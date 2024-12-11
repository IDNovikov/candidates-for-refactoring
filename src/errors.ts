//Все функции возвращают объект response, который должен соответствовать типу Response+нет самого типа

interface Response {
   status:number;
}

interface IHttpStatusCode{
  NOT_FOUND_404:number;
  FORBIDDEN_403:number;
}

const hasNotFoundStatus = (response: Response, HttpStatusCode:IHttpStatusCode):Response => {
   response.status = HttpStatusCode.NOT_FOUND_404;
   return response 
};

const hasForbiddenStatus = (response: Response, HttpStatusCode:IHttpStatusCode):Response => {
   response.status = HttpStatusCode.FORBIDDEN_403;
   return response 
};

const hasServiceUnavailableStatus = (response: Response):Response => {
  response.status = 503;
  return response 
};
