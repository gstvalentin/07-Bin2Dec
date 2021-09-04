
function convert() {    
    let binary = document.getElementById('userInput').value
    
    if (binary === '') {
        document.querySelector('#errorMessage').innerHTML = '*please type a binary number'; // informa que precisa digitar no campo
        return document.getElementById('decNumber').value = ''; //limpa o campo decimal
    } else if (/^[01]+$/.test(binary)) {
        const decimal = parseInt(binary, 2);
        document.getElementById('decNumber').value = decimal;
        document.querySelector('#errorMessage').innerHTML = '' //limpar o campo
        return true;
    } else  {
        binary.split('').map((binaryValidate) => {
            if (binaryValidate !== '0' && binaryValidate !== '1') {
                return document.querySelector('#errorMessage').innerHTML = '*Only binary number allowed' //informa que não aceita outro tipo de formato de número
            }
            
        })
    }


}