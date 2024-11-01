export default function validaNome(campo){
    const verificaNome = campo.value;
    let regexNum = /(\d+)| /g;
    let regexCaracter = /\W|_/;
    if (regexNum.test(verificaNome) || regexCaracter.test(verificaNome)){
        campo.setCustomValidity('O nome digitado não é válido');

    }

}