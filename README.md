<h1>DOM</h1>
O Document Object Model ou simplesmente DOM � utilizado pelo navegador Web para representar a sua p�gina Web. Quando altera-se esse modelo com o uso do Javascript altera-se tamb�m a p�gina Web. � muito mais f�cil trabalhar com DOM do que diretamente com c�digo HTML ou CSS. Um dos grandes respons�veis por isso tudo � o objeto document que � respons�vel por conceder ao c�digo Javascript todo o acesso a �rvore DOM do navegador Web. Portanto, qualquer coisa criado pelo navegador Web no modelo da p�gina Web poder� ser acessado atrav�s do objeto Javascript document.
Usa-se o DOM principalmente para atualizar uma p�gina Web (DOM � bastante utilizado com Ajax) ou quando se quer construir uma interface de usu�rio avan�ada. Com o DOM pode-se mover itens dentro de uma p�gina ou criar efeitos CSS bastante interessantes sem precisar nem mesmo recarregar a p�gina.
Atrav�s do objeto document pode-se ter acesso a um grande n�mero de propriedades. Segue abaixo algumas propriedades que podem ser utilizadas com o objeto document:

| Propriedade | Descri��o |
| :---         |     :---:      |
| documentElement | Captura o elemento raiz <html> de um documento HTML. |
| getElementById | Busca um elemento da p�gina Web com o uso do atributo id do elemento. |
| createElement | Cria um nodo elemento na p�gina. |
| createAttribute | Cria um nodo atributo na p�gina. |
| createTextNode | Cria um nodo texto na p�gina. |
| getElementsByTagName | Retorna um array dos elementos com o mesmo nome. |
| appendChild | Insere um novo elemento filho. |
| removeChild | Remove um elemento filho. |
| parentNode | Retorna o nodo pai de um nodo. |


<h1>EventTarget.addEventListener()</h1>

addEventListener() registra uma �nica espera de evento em um �nico alvo. O alvo do evento pode ser um �nico elemento em um documento, o documento em si, uma janela  ou um XMLHttpRequest.

Para registrar mais de uma espera de evento como alvo, chame addEventListener() para o mesmo alvo mas com diferentes tipos de evento ou captura de par�metro

<h2>Por que usar addEventListener?</h2>
addEventListener � a maneira de registrar uma espera de evento como especificada no W3C DOM. Seus benef�cios s�o os seguintes:

Permite mais de um manipulador por evento. Isso � particularmente �til em bibliotecas DHTML ou em extens�es Mozilla que precisam trabalhar bem mesmo com outras bibliotecas/extens�es sendo usadas.
Te d� um pente-fino do est�gio em que a espera de evento � ativada (captura ou borbulha).
Funciona em qualquer elemento DOM, n�o s� para elementos HTML.