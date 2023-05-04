// Obtém a janela modal e o botão para abri-la
let modal = document.getElementById('myModal');

// Obtém o botão para fechar a janela
let closeBtn = document.getElementsByClassName('close')[0];

// Quando o usuário clicar no botão, abre a janela modal
window.onload = function () {
  modal.style.display = 'block';
};

// Quando o usuário clicar no botão de fechar, fecha a janela modal
closeBtn.onclick = function () {
  modal.style.display = 'none';
};

// Quando o usuário clicar fora da janela, fecha a janela modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

document.getElementById('myForm').addEventListener('submit', function (event) {
  // previne o comportamento padrão do formulário (recarregar a página)
  event.preventDefault();
  // fecha a janela modal
  modal.style.display = 'none';
  // processa os dados do formulário e envia
  // ...
});
