const i_nome = document.getElementById("i_nome");
const i_partida = document.getElementById("i_partida");
const i_destino = document.getElementById("i_destino");
const tipo_de_carga = document.getElementById("tipo_de_carga");

const call_me_button = document.getElementById("call_me_button");

console.log(i_nome, i_partida, i_destino, tipo_de_carga);

call_me_button.addEventListener('click', () => {

    let message = encodeURIComponent(`Olá Savio! Gostaria de solicitar um frete.`);

    if(
        i_nome.value !== "" &&
        i_partida.value !== "" &&
        i_destino.value !== "" &&
        tipo_de_carga.value !== ""
    )
    {
        message = encodeURIComponent(`Olá Savio! Me chamo ${i_nome.value}. Gostaria de solicitar um frete de ${tipo_de_carga.value}, de ${i_partida.value} para ${i_destino.value}.`);
    }

    window.open(`https://wa.me/5511980950396?text=${message}`, '_blank');
});
