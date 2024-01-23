//Função para reproduzir um som com base no ID do elemento fornecido
function tocaSom(idElemento) {
    let audioElemento = document.querySelector(idElemento);

    if (audioElemento) {
        audioElemento.currentTime = 0
        audioElemento.play();
    }
}


//Seleciona todos os elementos com a classe 'tecla' e armazena-os em um NodeList
const listaDeTeclas = document.querySelectorAll('.tecla');


//Inicializa uma variável contadora
let contador = 0;

//Repetir através de cada elemento no NodeList
while (contador < listaDeTeclas.length) {

    //Obtem o elemento atual na repetição
    const tecla = listaDeTeclas[contador];

    //Extrai a segunda classe (assumindo que existem duas classes) do elemento
    const instrumento = tecla.classList[1];

    //Crie o ID para o elemento de áudio correspondente usando a classe de instrumento
    const idAudio = `#som_${instrumento}`;

    //Atribuir um manipulador de eventos de clique ao elemento atual
    tecla.onclick = function () {

        //Chame a função tocaSom com o ID de áudio gerado quando o elemento for clicado
        tocaSom(idAudio);

    }
    //Incrementa o contador para a próxima repetição
    contador = contador + 1;
}
document.body.addEventListener('keyup', function (evento) {
    playSound(evento.code.toLocaleLowerCase());
})

document.querySelector('.composer button').addEventListener('click', function () {
    let song = document.querySelector('#input').value;
    if (song !== '') {
        let songArray = song.split('');
        playComposition(songArray);
        /*console.log(songArray)*/
    }
})

function playSound(sound) {
    let audioElemento = document.querySelector(`.s_${sound}`);
    let keyElement = document.querySelector(`.${sound}`);

    if (audioElemento) {
        audioElemento.currentTime = 0;
        audioElemento.play();
    }
    if (keyElement) {
        keyElement.classList.add('ativa');
        setTimeout(function () {
            keyElement.classList.remove('ativa');
        }, 250)
    }
}


function playComposition(songArray) {
    let wait = 0

    for( let songItem of songArray){
        setTimeout(()=>{
            playSound(`key${songItem}`)
        }, wait)

        wait+= 250;
    }

}





