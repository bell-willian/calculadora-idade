const form = document.querySelector('#form');
const date = document.getElementById('date');

form.addEventListener('submit', function(e){
    e.preventDefault()
    const dateValue = date.value;
    if(dateValue == ''){
        badResult('Passe uma data valida!');
    }else{
        const parts = dateValue.split('-');
        const year = Number(parts[0].trim());
        const month = Number(parts[1].trim());
        const date = new Date();
        const currentYear = date.getFullYear();
        if(currentYear >= year){
            setResult(sumAge(year,month));
        }else{
            badResult('Passe um ano valido!')
        }
        
    }
})

function sumAge(year, month){
    const dateNow = new Date();
    const currentYear = dateNow.getFullYear();
    const monthActual = dateNow.getMonth() + 1;
    if(monthActual == month){
        const monthLife = monthActual - month;
        return `Você tem ${currentYear - year} e ${monthLife} meses de vida`
    }else if(monthActual < month){
        const monthLife = 12 - (month - monthActual);
        return `Você tem ${currentYear - year - 1} e ${monthLife} meses de vida`;
    }else{
        const monthLife = monthActual - month;
        return `Você tem ${currentYear - year} e ${monthLife} meses de vida`
    }
}

function setResult(result){
    const resultHtml = document.querySelector('#result');
    resultHtml.innerHTML = '';
    const p = document.createElement('p');
    p.classList.add('ageResult')
    p.innerHTML = result;
    resultHtml.appendChild(p);

}
function badResult(error){
    const resultHtml = document.querySelector('#result');
    resultHtml.innerHTML = '';
    const p = document.createElement('p');
    p.classList.add('badResult')
    p.innerHTML = error;
    resultHtml.appendChild(p);

}
