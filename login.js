'use strict';

const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    login();
});

async function login(){
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    if(email === '' || senha === ''){
        alert('Preencha tudo');
        return false;
    }

    try{
        const APIlogin = await fetch('https://back-login.vercel.app/usuarios');

        const listarUsuarios = await APIlogin.json();

        let usuario = false;

        listarUsuarios.forEach((user)=>{

            if(email === user.email && senha === user.senha){

                localStorage.setItem("id", user.id);

                localStorage.setItem("email", user.email);


                window.location.href = './index.html';
                
                usuario = true;
            }
        });

        if(!usuario){
            alert('N existe esse mano');
        }

    } catch(error){
        alert('API tá falhando ae');
        console.error(error);
    }
}
