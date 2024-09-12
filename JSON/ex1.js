function Enviar(){
    let numero = document.getElementById("número").value; 
    localStorage.setItem('númeroUsuario', numero);

    alert("O número armazenado do seu usuário é: " + numero);
}