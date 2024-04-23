'use strict'

const form = document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault()

    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value

    if (email === 'adm@gmail.com' && senha === 'Adm123@') {
        window.location.href = './index.html'
    } else {
        alert('Por favor, coloque as informações corretas!!')
    }
})



