//Contador
const formatarDigito = (digito) => `0${digito}`.slice(-2); //formata para empre ter 2 digitos
//Esta função atualiza o contador na tela
const atualizar = (tempo) => {

    const segundos = document.getElementById('segundo');
    const minutos = document.getElementById('minutos');
    const horas = document.getElementById('horas');
    const dias = document.getElementById('dias');
    const qtdMinutos = Math.floor((tempo % (60 * 60)) /60);
    const qtdHoras = Math.floor((tempo % (60 * 60 * 24)) / (60 * 60));
    const qtdHoras = Math.floor((tempo % (60 * 60 * 24))
};
