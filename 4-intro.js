/**
 * TaskMaster - Aplicativo de Gerenciamento de Tarefas
 * Arquivo principal de JavaScript - Versão Inicial
 * 
 * Este arquivo será expandido ao longo do curso
 * para demonstrar conceitos progressivamente.
 * 
 * "Com grandes poderes vem grandes responsabilidades." - Tio Ben (Stan Lee/Marvel Comics)
 */

/*
Instalar extensão

Microsoft Edge Tools for VS Code
*/


// ========================================
// AULA 4: INTRODUÇÃO AO JAVASCRIPT
// ========================================

// Mensagem de boas-vindas no console
console.log("Bem-vindo ao TaskMaster!");
console.log("Versão 0.1 - Introdução ao JavaScript");

// Exemplo de comentários:
// Este é um comentário de linha única

/* 
   Este é um comentário
   de múltiplas linhas
*/

// Exemplo para demonstrar que JavaScript é case-sensitive
let nome = "TaskMaster";
let Nome = "Outro nome";
console.log("JavaScript é case-sensitive:");
console.log(nome); // TaskMaster
console.log(Nome); // Outro nome

// Exibindo uma caixa de diálogo (pouco usado em aplicações modernas)
// alert("Bem-vindo ao TaskMaster!");

// Exemplos básicos de variáveis
let appVersion = 0.1;
let isActive = true;

// Mostrando valores no console (ferramenta essencial para debugging)
console.log("Versão do aplicativo:", appVersion);
console.log("Aplicativo ativo:", isActive);

// Exemplo simples de concatenação de strings
let mensagem = "Olá! Bem-vindo ao " + nome;
console.log(mensagem);

// Exemplo de template string (forma moderna de concatenação)
let mensagemTemplate = `Aplicativo: ${nome} - Versão: ${appVersion}`;
console.log(mensagemTemplate);

// Exemplo de alert simples
// alert("Bem-vindo ao TaskMaster!");

// Exemplo de alert com concatenação de strings
let mensagemAlert = "Bem-vindo ao " + nome + "!";
// alert(mensagemAlert);

// ========================================
// EXERCÍCIOS PRÁTICOS - INTRODUÇÃO AO JS
// ========================================

/*
EXERCÍCIO 1:
Crie duas variáveis com seu nome e idade.
Use console.log para mostrar a mensagem "Meu nome é [seu nome] e tenho [sua idade] anos."

Exemplo:
Meu nome é João e tenho 30 anos.

Resolução:
let meuNome = "João";
let minhaIdade = 30;
console.log(`Meu nome é ${meuNome} e tenho ${minhaIdade} anos.`);

// Alternativa sem template string:
console.log("Meu nome é " + meuNome + " e tenho " + minhaIdade + " anos.");
*/

/*
EXERCÍCIO 2:
Crie variáveis para representar uma tarefa:
- título da tarefa
- descrição
- concluída (true/false)
Mostre essas informações no console.

Exemplo:
Tarefa: Estudar JavaScript
Descrição: Aprender os conceitos básicos de JavaScript
Concluída: false

Resolução:
let tituloTarefa = "Estudar JavaScript";
let descricaoTarefa = "Aprender os conceitos básicos de JavaScript";
let tarefaConcluida = false;

console.log("Tarefa:", tituloTarefa);
console.log("Descrição:", descricaoTarefa);
console.log("Concluída:", tarefaConcluida);

// Usando template string:
console.log(`Tarefa: ${tituloTarefa}
Descrição: ${descricaoTarefa}
Concluída: ${tarefaConcluida}`);
*/

/*
EXERCÍCIO 3:
Use as ferramentas do navegador para abrir o console JavaScript.
Tente modificar o valor da variável 'nome' diretamente no console.
Confirme se o valor foi alterado.

Exemplo:
-- Crie a variável nome no seu arquivo javascript, depois acesse o navegador e digite:
nome = "Outro nome";
console.log(nome);
*/

/*
EXERCÍCIO 4:
Descomente a linha do alert() e recarregue a página.
Depois, modifique a mensagem do alert e teste novamente.

Exemplo:
// alert("Bem-vindo ao TaskMaster!");
alert("Bem-vindo ao TaskMaster!");
*/

/*
EXERCÍCIO 5:
Exercício de debugging:
1. Copie e cole o seguinte código abaixo dos comentários:
   let numero1 = 10;
   let numero2 = "5";
   console.log(numero1 + numero2);

2. Observe o resultado no console. É o que você esperava?
Não, o resultado é 105, pois o JavaScript está concatenando as strings.

3. Modifique o código para realizar uma soma numérica correta.
Resolução:
let numero1 = 10;
let numero2 = "5";
console.log(numero1 + Number(numero2)); // ou parseInt(numero2)

// Outra solução:
let numero1 = 10;
let numero2 = 5; // Modificar diretamente para um número
console.log(numero1 + numero2);
*/

/*
EXERCÍCIO 6:
Crie uma variável para armazenar o nome do seu projeto e exiba-o no console.

Resolução:
let nomeDoProjeto = "TaskMaster";
console.log("Nome do projeto:", nomeDoProjeto);
*/

/*
EXERCÍCIO 7:
Crie duas variáveis numéricas e exiba a soma, subtração, multiplicação e divisão delas.

Resolução:
let valor1 = 20;
let valor2 = 5;

console.log("Soma:", valor1 + valor2); // 25
console.log("Subtração:", valor1 - valor2); // 15
console.log("Multiplicação:", valor1 * valor2); // 100
console.log("Divisão:", valor1 / valor2); // 4
*/

/*
EXERCÍCIO 8:
Crie uma mensagem de boas-vindas usando template string para incluir:
- Nome do usuário
- Nome do aplicativo
- Versão do aplicativo

Resolução:
let nomeUsuario = "Maria";
let nomeApp = "TaskMaster";
let versaoApp = 1.0;

let mensagemBoasVindas = `Olá ${nomeUsuario}! 
Bem-vindo ao ${nomeApp} versão ${versaoApp}.
Estamos felizes em ter você como usuário!`;

console.log(mensagemBoasVindas);
*/

/*
EXERCÍCIO 9:
Use console.log com typeof para mostrar o tipo de cada uma das seguintes variáveis:
- Uma string
- Um número
- Um booleano
- Uma variável não inicializada

Resolução:
let textoExemplo = "JavaScript é incrível";
let numeroExemplo = 42;
let verdadeiroFalso = true;
let variavelNaoInicializada;

console.log("Tipo de textoExemplo:", typeof textoExemplo); // string
console.log("Tipo de numeroExemplo:", typeof numeroExemplo); // number
console.log("Tipo de verdadeiroFalso:", typeof verdadeiroFalso); // boolean
console.log("Tipo de variavelNaoInicializada:", typeof variavelNaoInicializada); // undefined
*/