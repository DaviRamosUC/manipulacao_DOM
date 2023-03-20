<h1>DOM</h1>
O Document Object Model ou simplesmente DOM é utilizado pelo navegador Web para representar a sua página Web. Quando altera-se esse modelo com o uso do Javascript altera-se também a página Web. É muito mais fácil trabalhar com DOM do que diretamente com código HTML ou CSS. Um dos grandes responsáveis por isso tudo é o objeto document que é responsável por conceder ao código Javascript todo o acesso a árvore DOM do navegador Web. Portanto, qualquer coisa criado pelo navegador Web no modelo da página Web poderá ser acessado através do objeto Javascript document.
Usa-se o DOM principalmente para atualizar uma página Web (DOM é bastante utilizado com Ajax) ou quando se quer construir uma interface de usuário avançada. Com o DOM pode-se mover itens dentro de uma página ou criar efeitos CSS bastante interessantes sem precisar nem mesmo recarregar a página.
Através do objeto document pode-se ter acesso a um grande número de propriedades. Segue abaixo algumas propriedades que podem ser utilizadas com o objeto document:

| Propriedade | Descrição |
| :---         |     :---:      |
| documentElement | Captura o elemento raiz <html> de um documento HTML. |
| getElementById | Busca um elemento da página Web com o uso do atributo id do elemento. |
| createElement | Cria um nodo elemento na página. |
| createAttribute | Cria um nodo atributo na página. |
| createTextNode | Cria um nodo texto na página. |
| getElementsByTagName | Retorna um array dos elementos com o mesmo nome. |
| appendChild | Insere um novo elemento filho. |
| removeChild | Remove um elemento filho. |
| parentNode | Retorna o nodo pai de um nodo. |


<h1>EventTarget.addEventListener()</h1>

addEventListener() registra uma única espera de evento em um único alvo. O alvo do evento pode ser um único elemento em um documento, o documento em si, uma janela  ou um XMLHttpRequest.

Para registrar mais de uma espera de evento como alvo, chame addEventListener() para o mesmo alvo mas com diferentes tipos de evento ou captura de parâmetro

<h2>Por que usar addEventListener?</h2>
addEventListener é a maneira de registrar uma espera de evento como especificada no W3C DOM. Seus benefícios são os seguintes:

Permite mais de um manipulador por evento. Isso é particularmente útil em bibliotecas DHTML ou em extensões Mozilla que precisam trabalhar bem mesmo com outras bibliotecas/extensões sendo usadas.
Te dá um pente-fino do estágio em que a espera de evento é ativada (captura ou borbulha).
Funciona em qualquer elemento DOM, não só para elementos HTML.