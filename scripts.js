const key = "80b9c12fe03de693c920c885dd3f0756"

function colocardadostela(dados){
document.querySelector(".cidade").innerHTML = " Previsão do Tempo em " + dados.name + " :"
document.querySelector(".tempmax").innerHTML = "Temp.Max  " + Math.floor (dados.main.temp_max) + "°C"
document.querySelector(".tempmin").innerHTML = "Temp.Min  " + Math.floor (dados.main.temp_min) + "°C"
document.querySelector(".texto-previsao").innerHTML =  dados.weather[0].description
document.querySelector(".umidade").innerHTML = "Umidade de " + dados.main.humidity + "%"
document.querySelector(".img-previsao") . src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

console.log(dados)
}

async function buscarcidade(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())
colocardadostela(dados)
}

function cliqueinobotao() {
    const cidade = document.querySelector(".input-cidade").value
    buscarcidade(cidade)
}

function atualizarDataHora() {
    const agora = new Date();
    const dataHora = agora.toLocaleString('pt-BR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    });

    document.querySelector(".data-hora").textContent = dataHora;
}

window.onload = function() {
    atualizarDataHora();
};