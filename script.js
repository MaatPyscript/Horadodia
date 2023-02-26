function carregar () {
var mensagem = document.getElementById('mensagem')
var imagem = document.getElementById('imagem')
var data = new Date()
//var hora = data.getHours()
var hora = 23
mensagem.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12) {
    //Bom dia !
    imagem.src = 'fotomanha.png'
    document.body.style.background = '#f0ab50'
} else if (hora >= 12 && hora < 18) {
    // Boa tarde !
    imagem.src = 'fototarde.png'
    document.body.style.background = '#262a2d'
} else {
    //Boa Noite !
    imagem.src = 'fotonoite.png'
    document.body.style.background = '#091428'
}
}

