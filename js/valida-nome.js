export default function validaNome(campo) {
    const verificaNome = campo.value;
    // Regex para verificar se há números
    let regexNum = /\d/;
    // Regex para verificar se há caracteres especiais (exceto espaços)
    let regexCaracter = /[^\w\s]/;

    if (regexNum.test(verificaNome) || regexCaracter.test(verificaNome)) {
        campo.setCustomValidity('O nome digitado não é válido. Apenas letras e espaços são permitidos.');
    } else {
        campo.setCustomValidity(''); // Reseta a mensagem de erro se o nome for válido
    }
}
