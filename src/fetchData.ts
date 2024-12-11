// ошибка в вызове фетч, там не все так просто (проще в axios). Не без помощи интернета, но должно выглядеть как-то так:


const DEFAULT_TIMEOUT:number = 5000;
const url:string = 'https://api.example.com/data'

const fetchTimeout = (url:string, options:any, timeout:number):Promise<any> => {//плохая практика с options:any и еще бы понимать что мы ожидаем 

  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  return fetch(url, {...options, signal: controller.signal})
    .finally(() => clearTimeout(id)); 
};


fetchTimeout(url, {}, DEFAULT_TIMEOUT )
    .then((response) => console.log(response))
    .catch((error) => console.error(error));

