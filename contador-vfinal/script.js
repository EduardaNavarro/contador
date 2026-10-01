const inicio = new Date("2026-09-17T12:00:00").getTime();
const fim = new Date("2026-10-09T12:00:00").getTime();

function atualizarContagem() {
    const agora = new Date().getTime();
    const diasElemento = document.getElementById("dias");
    const horasElemento = document.getElementById("horas");
    const minutosElemento = document.getElementById("minutos");
    const segundosElemento = document.getElementById("segundos");
    const mensagem = document.getElementById("mensagem-contagem");

    if (!diasElemento) {
        return;
    }

    if (agora < inicio) {

        const distancia = inicio - agora;
        mostrarTempo(distancia);
        mensagem.textContent = "A contagem começará em breve!";
        return;
    }

    if (agora >= inicio && agora < fim) {

        const distancia = fim - agora;
        mostrarTempo(distancia);
        mensagem.textContent = "O lançamento está chegando!";
        return;
    }

    if (agora >= fim) {

        diasElemento.textContent = "00";
        horasElemento.textContent = "00";
        minutosElemento.textContent = "00";
        segundosElemento.textContent = "00";
        mensagem.textContent = "O filme já foi lançado!";

    }

}

function mostrarTempo(distancia) {

    const dias = Math.floor(
        distancia / (1000 * 60 * 60 * 24)
    );

    const horas = Math.floor(
        (distancia % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutos = Math.floor(
        (distancia % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const segundos = Math.floor(
        (distancia % (1000 * 60))
        / 1000
    );

    document.getElementById("dias").textContent =
        String(dias).padStart(2, "0");

    document.getElementById("horas").textContent =
        String(horas).padStart(2, "0");

    document.getElementById("minutos").textContent =
        String(minutos).padStart(2, "0");

    document.getElementById("segundos").textContent =
        String(segundos).padStart(2, "0");
}

atualizarContagem();

setInterval(atualizarContagem, 1000);

const formulario = document.getElementById("ticketForm");


if (formulario) {

    formulario.addEventListener("submit", function(event) {

        event.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const assunto = document.getElementById("assunto").value;
        const mensagem = document.getElementById("mensagem").value.trim();
        const mensagemTicket =
            document.getElementById("mensagem-ticket");

        if (nome === "") {

            mensagemTicket.textContent =
                "Por favor, preencha seu nome.";

            mensagemTicket.style.color = "#e46107";
            return;
        }


        if (email === "") {

            mensagemTicket.textContent =
                "Por favor, informe seu e-mail.";

            mensagemTicket.style.color = "#e46107";

            return;
        }

        const formatoEmail =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (!formatoEmail.test(email)) {
            mensagemTicket.textContent =
                "Digite um e-mail válido.";

            mensagemTicket.style.color = "#e46107";
            return;
        }


        if (assunto === "") {

            mensagemTicket.textContent =
                "Selecione um assunto.";

            mensagemTicket.style.color = "#e46107";

            return;
        }


        if (mensagem === "") {

            mensagemTicket.textContent =
                "Escreva uma mensagem.";

            mensagemTicket.style.color = "#e46107";

            return;
        }

        mensagemTicket.textContent =
            "Ticket enviado com sucesso!";

        mensagemTicket.style.color =
            "#fac23c";

        formulario.reset();

    });

}