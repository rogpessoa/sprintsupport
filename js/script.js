import validaNome from "./valida-nome.js";
import ehMaiorDeIdade from "./valida-idade.js";
const camposDoFormulario = document.querySelectorAll("[required]");
const formulario = document.querySelector('[dados-formulario]');


formulario.addEventListener("submit", (e) =>{
    e.preventDefault();

const listaRespostas = {
    "nome": e.target.elements["nome"].value,
    "matricula": e.target.elements["matricula"].value,
    "descricao": e.target.elements["descricao"].value,
    "categoria": e.target.elements["categoria"].value,
    "email": e.target.elements["email"].value,
    "nascimento": e.target.elements["nascimento"].value,
}

localStorage.setItem("chamado", JSON.stringify(listaRespostas));

window.location.href = "./gsuite.html";

})

camposDoFormulario.forEach((campo)=>{
    campo.addEventListener('blur', ()=> verificaCampo(campo));
    campo.addEventListener("invalid", evento => evento.preventDefault());

})

const tipoDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'customError'
]

const mensagens = {
    nome: {
        valueMissing: "O campo nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, coloque seu nome completo."
    },
    matricula: {
        valueMissing: "O campo matrícula não pode estar vazio.",
        patternMismatch: "Por favor, preencha uma matrícula válida.",
        tooShort: "Sua matrícula precisa ter no minimo 10 caractéres e no máximo 12."
    },
    descricao: {
        valueMissing: "Esse campo não pode ficar vazio.",
        typeMismatch: "Por favor, descreva seu problema",
        customError: "Você deve descrever seu problema"
    },
    categoria: {
        valueMissing: 'O campo de categoria  é obrigatório.',
        patternMismatch: "Por favor, escolha um tipo de chamado.",
        customError: "O campo categoria não foi selecionado.",
        tooShort: "O campo categoria está vazio."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um e-mail válido."
    },
    nascimento: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio.',
        customError: 'Você deve ser maior que 18 anos para abrir chamado.'
    }
}



function verificaCampo(campo){
    let mensagem = "";
    campo.setCustomValidity('');
    if (campo.name == 'nome'){
        validaNome(campo);
    }
    if(campo.name == "nascimento" && campo.value != ""){
        ehMaiorDeIdade(campo);
    }
    tipoDeErro.forEach(erro=>{
        if(campo.validity[erro]){
            mensagem = mensagens[campo.name][erro];
        }
        if(campo.validity.customError){
            mensagem = campo.validationMessage;
        }
    })
    const mensagemErro = campo.parentNode.querySelector('.mensagem-erro');
    const validadorDeInput = campo.checkValidity();
    if(!validadorDeInput){
        mensagemErro.textContent = mensagem;
    }else{
        mensagemErro.textContent = "";
    }

}