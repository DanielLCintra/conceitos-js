// =======================================================================
// AULA: MANIPULAÇÃO DO DOM COM JAVASCRIPT
// Duração: 1 hora e 40 minutos
// =======================================================================

// =======================================================================
// PARTE 1: INTRODUÇÃO AO DOM (15 minutos)
// =======================================================================

// O que é o DOM (Document Object Model)?
// ---------------------------------------------------------------------
// - É uma interface de programação para documentos HTML e XML
// - Representa a estrutura do documento como uma árvore de objetos
// - Permite que o JavaScript acesse e manipule o conteúdo, estrutura e estilo de uma página web
// - É criado pelo navegador quando a página é carregada

// Estrutura em árvore do DOM
// ---------------------------------------------------------------------
// - Começa com o objeto "document" como raiz
// - Cada elemento HTML é um "nó" na árvore
// - Elementos podem conter outros elementos (nós filhos)
// - Exemplo de estrutura:
//   * document
//     * html
//       * head
//         * title
//         * meta
//       * body
//         * header
//         * main
//         * footer

// Relação entre HTML e o DOM
// ---------------------------------------------------------------------
// - HTML é o documento inicial
// - O navegador lê o HTML e cria o DOM
// - O DOM pode ser diferente do HTML original devido a:
//   * Correções automáticas de erros no HTML
//   * Elementos criados por JavaScript
//   * Alterações dinâmicas na página

// Objetos principais: document e window
// ---------------------------------------------------------------------
// - window: representa a janela do navegador (objeto global do JavaScript no navegador)
//   * Contém propriedades como location, history, localStorage
//   * Métodos como alert(), setTimeout(), fetch()

// - document: representa o documento HTML carregado na janela
//   * Métodos para selecionar elementos
//   * Métodos para criar elementos
//   * Eventos relacionados ao documento

// EXEMPLO PRÁTICO:
console.log(document.documentElement); // Acessa o elemento <html>
console.log(document.head); // Acessa o elemento <head>
console.log(document.body); // Acessa o elemento <body>

// =======================================================================
// PARTE 2: SELEÇÃO DE ELEMENTOS (20 minutos)
// =======================================================================

// Métodos de seleção
// ---------------------------------------------------------------------

// 1. getElementById - Seleciona um elemento pelo atributo id
const headingById = document.getElementById('main-title');
console.log(headingById);

// 2. getElementsByClassName - Seleciona elementos pela classe (retorna HTMLCollection)
const paragraphsByClass = document.getElementsByClassName('paragraph');
console.log(paragraphsByClass); // HTMLCollection (similar a um array)
console.log(paragraphsByClass[0]); // Acessando o primeiro elemento

// 3. getElementsByTagName - Seleciona elementos pelo nome da tag (retorna HTMLCollection)
const allDivs = document.getElementsByTagName('div');
console.log(allDivs);

// 4. querySelector - Seleciona o primeiro elemento que corresponde ao seletor CSS
const firstButton = document.querySelector('button');
const navItem = document.querySelector('.nav-item');
const header = document.querySelector('#header');
console.log(firstButton);

// 5. querySelectorAll - Seleciona todos os elementos que correspondem ao seletor CSS (retorna NodeList)
const allButtons = document.querySelectorAll('button');
const allNavItems = document.querySelectorAll('.nav-item');
console.log(allButtons); // NodeList (similar a um array)

// DIFERENÇAS IMPORTANTES:
// - HTMLCollection vs NodeList:
//   * HTMLCollection é "ao vivo" (atualiza automaticamente quando o DOM muda)
//   * NodeList geralmente é estático (não atualiza quando o DOM muda)
//   * NodeList tem mais métodos como forEach

// - Converter para Array (quando necessário):
const buttonsArray = Array.from(allButtons);
// ou
const buttonsArrayAlt = [...allButtons];

// Navegação pelo DOM (relações entre nós)
// ---------------------------------------------------------------------

// Navegando para cima (pais)
const childElement = document.querySelector('.child');
console.log(childElement.parentNode); // Nó pai (pode ser um elemento ou não)
console.log(childElement.parentElement); // Elemento pai (apenas elementos HTML)

// Navegando para baixo (filhos)
const parentElement = document.querySelector('.parent');
console.log(parentElement.children); // HTMLCollection de elementos filhos
console.log(parentElement.childNodes); // NodeList de todos os nós filhos (incluindo espaços em branco)
console.log(parentElement.firstChild); // Primeiro nó filho (pode ser espaço em branco)
console.log(parentElement.firstElementChild); // Primeiro elemento filho
console.log(parentElement.lastChild); // Último nó filho
console.log(parentElement.lastElementChild); // Último elemento filho

// Navegando lateralmente (irmãos)
const middleChild = document.querySelector('.middle');
console.log(middleChild.previousSibling); // Irmão anterior (pode ser espaço em branco)
console.log(middleChild.previousElementSibling); // Elemento irmão anterior
console.log(middleChild.nextSibling); // Próximo irmão (pode ser espaço em branco)
console.log(middleChild.nextElementSibling); // Próximo elemento irmão

// EXERCÍCIO PRÁTICO:
// Explore a estrutura DOM de uma página e selecione elementos usando
// diferentes métodos. Compare os resultados.

// =======================================================================
// PARTE 3: MANIPULAÇÃO DE CONTEÚDO E ATRIBUTOS (20 minutos)
// =======================================================================

// Modificando conteúdo de texto
// ---------------------------------------------------------------------

// 1. textContent - Todo o conteúdo de texto, incluindo texto em elementos filhos
const paragraph = document.querySelector('p');
console.log(paragraph.textContent); // Lê o conteúdo de texto
paragraph.textContent = 'Novo texto do parágrafo'; // Modifica o conteúdo

// 2. innerText - Semelhante ao textContent, mas respeita a estilização e não retorna conteúdo oculto
console.log(paragraph.innerText);
paragraph.innerText = 'Texto alterado com innerText';

// 3. innerHTML - Obtém ou define o conteúdo HTML interno
console.log(paragraph.innerHTML);
paragraph.innerHTML = 'Texto com <strong>destaque</strong>'; // Permite incluir HTML

// IMPORTANTE: Cuidado com innerHTML e segurança!
// - Pode criar vulnerabilidades XSS (Cross-Site Scripting)
// - Evite usar innerHTML com conteúdo gerado pelo usuário
// - Prefira criar elementos e anexá-los ao DOM

// Trabalhando com atributos
// ---------------------------------------------------------------------

// 1. Métodos genéricos para atributos
const image = document.querySelector('img');
console.log(image.getAttribute('src')); // Obtém o valor do atributo
image.setAttribute('src', 'nova-imagem.jpg'); // Define o valor do atributo
image.setAttribute('alt', 'Descrição da imagem'); // Adiciona um novo atributo
image.removeAttribute('title'); // Remove um atributo

// 2. Propriedades específicas (mais rápido e conveniente para atributos comuns)
console.log(image.src); // Lê o atributo src
image.src = 'outra-imagem.jpg'; // Modifica o atributo src
image.alt = 'Nova descrição'; // Modifica o atributo alt
image.id = 'imagem-principal'; // Modifica o atributo id

// 3. Verificando a existência de um atributo
console.log(image.hasAttribute('alt')); // true ou false

// Manipulando classes CSS
// ---------------------------------------------------------------------

const element = document.querySelector('.elemento');

// 1. className (string com todas as classes)
console.log(element.className); // String com todas as classes
element.className = 'nova-classe'; // Substitui todas as classes existentes
element.className += ' outra-classe'; // Adiciona classe (cuidado com o espaço)

// 2. classList (interface mais moderna e poderosa)
element.classList.add('destaque'); // Adiciona uma classe
element.classList.remove('antiga'); // Remove uma classe
element.classList.toggle('visivel'); // Adiciona se não existir, remove se existir
console.log(element.classList.contains('destaque')); // Verifica se existe (true/false)
element.classList.replace('antiga', 'nova'); // Substitui uma classe por outra

// EXERCÍCIO PRÁTICO:
// Modificar o conteúdo e os atributos de elementos em uma página.
// Criar efeitos visuais alterando classes CSS.

// =======================================================================
// PARTE 4: CRIAÇÃO E REMOÇÃO DE ELEMENTOS (15 minutos)
// =======================================================================

// Criando elementos
// ---------------------------------------------------------------------

// 1. Criar um novo elemento
const newParagraph = document.createElement('p');
newParagraph.textContent = 'Este é um parágrafo criado com JavaScript';
newParagraph.className = 'novo destaque';
newParagraph.id = 'paragrafo-novo';

// 2. Criar um nó de texto
const textNode = document.createTextNode('Este é um texto simples');

// Adicionando elementos ao DOM
// ---------------------------------------------------------------------

const container = document.querySelector('.container');

// 1. appendChild - Adiciona como último filho
container.appendChild(newParagraph);

// 2. insertBefore - Insere antes de um elemento de referência
const referenceElement = document.querySelector('.reference');
container.insertBefore(newParagraph, referenceElement);

// 3. append - Adiciona múltiplos nós ao final (método mais moderno)
const anotherParagraph = document.createElement('p');
anotherParagraph.textContent = 'Outro parágrafo';
container.append(anotherParagraph, textNode, 'Texto direto'); // Pode incluir nós e strings

// 4. prepend - Adiciona múltiplos nós ao início
const title = document.createElement('h2');
title.textContent = 'Título da Seção';
container.prepend(title);

// 5. insertAdjacentElement - Inserir em posições específicas
const infoBox = document.createElement('div');
infoBox.className = 'info-box';
infoBox.textContent = 'Informações importantes';

// Posições possíveis:
element.insertAdjacentElement('beforebegin', infoBox); // Antes do elemento
element.insertAdjacentElement('afterbegin', infoBox);  // Dentro do elemento, antes do primeiro filho
element.insertAdjacentElement('beforeend', infoBox);   // Dentro do elemento, após o último filho
element.insertAdjacentElement('afterend', infoBox);    // Depois do elemento

// Removendo elementos
// ---------------------------------------------------------------------

// 1. removeChild - Remove um filho do elemento pai
const childToRemove = document.querySelector('.remove-me');
childToRemove.parentNode.removeChild(childToRemove);

// 2. remove - Método mais moderno e direto (sem referenciar o pai)
const elementToRemove = document.querySelector('.another-to-remove');
elementToRemove.remove();

// Substituindo elementos
// ---------------------------------------------------------------------

// replaceChild - Substitui um elemento filho por outro
const oldElement = document.querySelector('.old');
const newElement = document.createElement('div');
newElement.className = 'new';
newElement.textContent = 'Elemento substituto';
oldElement.parentNode.replaceChild(newElement, oldElement);

// EXERCÍCIO PRÁTICO:
// Criar uma interface que permite adicionar, remover e substituir elementos
// dinamicamente.

// =======================================================================
// PARTE 5: MANIPULAÇÃO DE ESTILOS (10 minutos)
// =======================================================================

// Estilos inline
// ---------------------------------------------------------------------

const styledElement = document.querySelector('.styled');

// 1. Propriedade style - Acessa os estilos inline
styledElement.style.color = 'blue';
styledElement.style.backgroundColor = 'yellow'; // Propriedades com hífen são camelCase em JS
styledElement.style.fontSize = '20px'; // Sempre incluir unidades (px, em, rem, etc.)
styledElement.style.padding = '10px 20px';

// 2. Definir múltiplos estilos de uma vez
styledElement.style.cssText = 'color: red; background-color: black; font-size: 16px;';

// 3. Remover um estilo específico
styledElement.style.color = ''; // Remove a propriedade

// Obtendo estilos computados
// ---------------------------------------------------------------------

// getComputedStyle - Obtém todos os estilos aplicados (CSS externo, interno e inline)
const computedStyles = window.getComputedStyle(styledElement);
console.log(computedStyles.getPropertyValue('color'));
console.log(computedStyles.backgroundColor);

// IMPORTANTE:
// - Os estilos inline (style) têm prioridade máxima (sobrescrevem CSS externo)
// - Modificar classes é geralmente mais limpo que modificar estilos inline
// - Use estilos inline para mudanças temporárias ou dinâmicas (animações, posição)

// EXERCÍCIO PRÁTICO:
// Criar animações ou efeitos visuais usando manipulação de estilos.

// =======================================================================
// PARTE 6: EVENTOS DO DOM (15 minutos)
// =======================================================================

// Adicionando event listeners
// ---------------------------------------------------------------------

const button = document.querySelector('#action-button');

// 1. addEventListener - Método moderno e flexível
button.addEventListener('click', function (event) {
    console.log('Botão clicado!');
    console.log(event); // Objeto de evento com informações úteis
});

// 2. Usando função nomeada (facilita a remoção posterior)
function handleMouseOver(event) {
    console.log('Mouse sobre o botão');
    this.style.backgroundColor = 'lightblue'; // 'this' se refere ao elemento que disparou o evento
}

button.addEventListener('mouseover', handleMouseOver);

// 3. Usando arrow function (cuidado: 'this' se refere ao escopo externo)
button.addEventListener('mouseout', (event) => {
    console.log('Mouse saiu do botão');
    event.target.style.backgroundColor = ''; // use event.target em vez de this
});

// 4. Removendo event listeners (precisa da mesma função de referência)
button.removeEventListener('mouseover', handleMouseOver);

// Tipos comuns de eventos
// ---------------------------------------------------------------------

// 1. Eventos de mouse
button.addEventListener('click', () => console.log('Click'));
button.addEventListener('dblclick', () => console.log('Double click'));
button.addEventListener('mousedown', () => console.log('Mouse button down'));
button.addEventListener('mouseup', () => console.log('Mouse button up'));
button.addEventListener('mouseover', () => console.log('Mouse over'));
button.addEventListener('mouseout', () => console.log('Mouse out'));
button.addEventListener('mousemove', (e) => console.log(`Mouse position: ${e.clientX}, ${e.clientY}`));

// 2. Eventos de teclado
document.addEventListener('keydown', (e) => console.log(`Key down: ${e.key}`));
document.addEventListener('keyup', (e) => console.log(`Key up: ${e.key}`));
document.addEventListener('keypress', (e) => console.log(`Key press: ${e.key}`));

// 3. Eventos de formulário
const form = document.querySelector('form');
const input = document.querySelector('input');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Impede o envio padrão do formulário
    console.log('Form submitted');
});

input.addEventListener('focus', () => console.log('Input focused'));
input.addEventListener('blur', () => console.log('Input lost focus'));
input.addEventListener('change', (e) => console.log(`Value changed to: ${e.target.value}`));
input.addEventListener('input', (e) => console.log(`Current input: ${e.target.value}`));

// 4. Eventos de documento
document.addEventListener('DOMContentLoaded', () => console.log('DOM fully loaded'));
window.addEventListener('load', () => console.log('Page fully loaded'));
window.addEventListener('resize', () => console.log(`Window size: ${window.innerWidth}x${window.innerHeight}`));
window.addEventListener('scroll', () => console.log(`Scrolled to: ${window.scrollX}, ${window.scrollY}`));

// O objeto de evento
// ---------------------------------------------------------------------

function detailedEventHandler(event) {
    console.log('Tipo de evento:', event.type);
    console.log('Elemento alvo:', event.target);
    console.log('Elemento atual:', event.currentTarget);
    console.log('Coordenadas do mouse:', event.clientX, event.clientY);
    console.log('Tecla pressionada:', event.key);
    console.log('Botão do mouse:', event.button);
    console.log('Teclas modificadoras:', event.ctrlKey, event.shiftKey, event.altKey);
}

// Propagação de eventos (event bubbling e capturing)
// ---------------------------------------------------------------------

document.querySelector('#outer').addEventListener('click', (e) => {
    console.log('Outer element clicked');
});

document.querySelector('#middle').addEventListener('click', (e) => {
    console.log('Middle element clicked');
    // e.stopPropagation(); // Interrompe a propagação para elementos pais
});

document.querySelector('#inner').addEventListener('click', (e) => {
    console.log('Inner element clicked');
});

// Ordem de propagação:
// 1. Capturing phase (topo para baixo): raiz -> alvo (raramente usado)
// 2. Target phase: o próprio elemento
// 3. Bubbling phase (baixo para cima): alvo -> raiz (comportamento padrão)

// Para usar a fase de capturing (menos comum):
document.querySelector('#outer').addEventListener('click', () => {
    console.log('Capturing phase');
}, true); // O terceiro parâmetro 'true' ativa a fase de capturing

// Prevenindo comportamentos padrão
// ---------------------------------------------------------------------

const link = document.querySelector('a');
link.addEventListener('click', (e) => {
    e.preventDefault(); // Impede a navegação padrão do link
    console.log('Link clicado, mas navegação impedida');
});

// EXERCÍCIO PRÁTICO:
// Criar uma interface interativa que responda a diferentes tipos de eventos
// do usuário.

// =======================================================================
// PARTE 7: MINI-PROJETO - LISTA DE TAREFAS (20 minutos)
// =======================================================================

// Implementação de uma lista de tarefas interativa
document.addEventListener('DOMContentLoaded', () => {
    // 1. Selecionar elementos importantes
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTask');
    const taskList = document.getElementById('taskList');

    // 2. Função para adicionar nova tarefa
    function addNewTask() {
        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            // Criar elementos
            const li = document.createElement('li');
            const span = document.createElement('span');
            const deleteButton = document.createElement('button');

            // Configurar elementos
            span.textContent = taskText;
            span.className = 'task-text';
            deleteButton.textContent = 'Excluir';
            deleteButton.className = 'delete-btn';

            // Adicionar event listeners
            span.addEventListener('click', () => {
                li.classList.toggle('completed');
            });

            deleteButton.addEventListener('click', () => {
                li.remove();
            });

            // Construir e adicionar o item da lista
            li.appendChild(span);
            li.appendChild(deleteButton);
            taskList.appendChild(li);

            // Limpar o input
            taskInput.value = '';
            taskInput.focus();
        }
    }

    // 3. Adicionar event listeners
    addTaskButton.addEventListener('click', addNewTask);

    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addNewTask();
        }
    });
});

// =======================================================================
// PARTE 8: ENCERRAMENTO E RECURSOS ADICIONAIS (5 minutos)
// =======================================================================

// Resumo dos conceitos aprendidos
// ---------------------------------------------------------------------
// - DOM é a interface para interagir com documentos HTML/XML
// - Seleção de elementos usando getElementById, querySelector, etc.
// - Manipulação de conteúdo, atributos e classes
// - Criação e remoção de elementos
// - Manipulação de estilos
// - Trabalho com eventos

// Dicas de performance ao manipular o DOM
// ---------------------------------------------------------------------
// 1. Minimize as manipulações do DOM (são operações caras)
// 2. Use DocumentFragment para preparar múltiplas mudanças de uma vez
// 3. Modifique elementos desconectados antes de adicioná-los ao DOM
// 4. Modifique classes CSS em vez de estilos individuais quando possível
// 5. Use delegação de eventos para elementos criados dinamicamente
// 6. Prefira textContent em vez de innerHTML quando não precisa de HTML

// Exemplo de DocumentFragment (melhor performance para múltiplas inserções)
function addManyItems() {
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < 100; i++) {
        const item = document.createElement('li');
        item.textContent = `Item ${i + 1}`;
        fragment.appendChild(item);
    }

    // Apenas uma operação de repaint no DOM
    document.getElementById('longList').appendChild(fragment);
}

// Exemplo de delegação de eventos (melhor para elementos dinâmicos)
document.getElementById('taskList').addEventListener('click', function (e) {
    // Verifica se o clique foi em um botão de exclusão
    if (e.target.classList.contains('delete-btn')) {
        e.target.parentElement.remove();
    }

    // Verifica se o clique foi no texto da tarefa
    if (e.target.classList.contains('task-text')) {
        e.target.parentElement.classList.toggle('completed');
    }
});

// Bibliotecas que facilitam a manipulação do DOM
// ---------------------------------------------------------------------
// - jQuery (clássica, mas menos necessária com JS moderno)
// - Alpine.js (leve, declarativa)
// - htmx (extensões HTML para AJAX, CSS Transitions, etc.)
// - lit-html (manipulação de templates HTML baseada em strings)

// Recursos para estudo adicional
// ---------------------------------------------------------------------
// - MDN Web Docs: https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model
// - JavaScript.info: https://javascript.info/document
// - W3Schools: https://www.w3schools.com/js/js_htmldom.asp
// - CSS-Tricks: https://css-tricks.com/dom/

// EXERCÍCIOS ADICIONAIS (se houver tempo)
// ---------------------------------------------------------------------
// 1. Implementar funcionalidade de arrastar e soltar para reordenar tarefas
// 2. Adicionar persistência local usando localStorage
// 3. Implementar filtros para visualizar apenas tarefas completas/incompletas