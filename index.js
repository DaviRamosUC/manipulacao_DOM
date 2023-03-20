// Exemplo de manipula��o do DOM com js

// Criar o elemento <li> e o n� de texto.
// Ap�s isso, anexar o n� de texto ao elemento
var elem  = document.createElement("li");
var texto = document.createTextNode("mais um item");
elem.appendChild(texto);

// Exemplo de como usar o addEventListener

var fazAlgo = function(elemento)
{
  this.nome = 'Algo bom';
  this.handleEvent = function(evento) {
    console.log(this.nome); // 'Algo bom', porque this � o objeto fazAlgo
    switch(evento.type) {
      case 'click':
        // seu codigo aqui...
        break;
      case 'dblclick':
        // seu codigo aqui...
        break;
    }
  };
  elemento.addEventListener('click', this, false);
  elemento.addEventListener('dblclick', this, false); 
}