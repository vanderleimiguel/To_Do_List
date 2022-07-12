const addBtn = document.querySelector('#addBtn') //criou uma variavel, acessou o document que é o meu DOM do HTML e pegou as propriedades do meu button e guardou a variavel criada

//criar um evento de click para o botão executar e função click do usuario
addBtn.addEventListener('click', function () {
  const li = document.createElement('li') //criação da li na minha lista vazia
  const inputValue = document.querySelector('#myInput').value
  //peguei o valor digitado pelo meu usuario e coloquei na variavel criada
  const taskText = document.createTextNode(inputValue)
  //adicionou o texto digitado pelo usuario na taskText
  li.appendChild(taskText) //adicionei na minha tag <li>o valor que veio digitado pelo usuario</li>

  //verificação se o usuario realmente digitou uma tarefa, verificar se o input não esta em branco
  if (inputValue === '') {
    alert('Você deve digitar uma tarefa!!')
  } else {
    document.getElementById('myUL').appendChild(li) //adicionou a li como filha de ul
  }

  //zerar o valor input
  document.querySelector('#myInput').value = ''

  //incluir o simbolo de x na li
  const span = document.createElement('span') //criei um elemento html span
  const icon = document.createTextNode('\u00D7') //criação do simbolo X pelo JS
  span.className = 'close'
  span.appendChild(icon) //inserido icone na span
  li.appendChild(span) //inserido span em li

  //apagar a tarefa
  const close = document.querySelectorAll('.close') //utilizamos o selector ALL para pegar todas as span criadas

  for (let i = 0; i < close.length; i++) {
    close[i].addEventListener('click', function () {
      const li = this.parentElement //pega o parente e neste caso é o elemento li
      li.style.display = 'none' //mudar o siaplay para none fazendo ele sumir
    })
  }
}) //termina a função addBtn
