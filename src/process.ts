//не понятен контект функций, их очередность, асинхронные ли они, что они возвращают... Сделал общую асинхронную функцию вызона и обернул в блок try-catch
async function ProcessFunctions(){
    try {
        await processVerificationRequest();
        await makeUpdateRequest();
        await processDeletion();
    }catch(error){
        console.log(error)
    }
}

