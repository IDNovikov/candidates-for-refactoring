
//матч мог вернуть undefined и в методе сет 2 обязательных параметра, плохой нейминг, неизвестно есть ли методы в объектах


const matchedHeaders:[string,string,...string[]] = rawHeaderLine.match(headerPattern);//добавил типизацию

if(matchedHeaders!==undefined&&matchedHeaders.length >= 2&&){//проверяю массив и имеет ли 2 строки
headers.set(matchedHeaders[1].toLowerCase(), matchedHeaders[2]);
}else{
    console.log("Must be a 2 matched headers")
}


