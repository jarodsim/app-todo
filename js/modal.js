/**JS DO MODAL DE PRIVACIDADE*/

let modal = document.getElementById('modal')
let btn = document.getElementById('modal-btn')
let span = document.getElementsByClassName('close')[0]

btn.onclick = function () {
    modal.style.display = 'block'
}

span.onclick = function () {
    modal.style.display = 'none'
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none'
    }
}