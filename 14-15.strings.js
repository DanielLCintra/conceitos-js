/**
 * TaskMaster - Demonstração de Manipulação de Strings
 * Aulas 14-15: Manipulação básica e avançada de strings
 */

// ===== AULA 14: MANIPULAÇÃO BÁSICA DE STRINGS =====
console.log("===== MANIPULAÇÃO BÁSICA DE STRINGS =====");

// Criação de strings
let titulo = "Aprender JavaScript";
let descricao = 'Estudar manipulação de strings';
console.log("Título:", titulo);
console.log("Descrição:", descricao);

// Comprimento de uma string
console.log("Comprimento do título:", titulo.length);

// Acesso a caracteres individuais
console.log("Primeiro caractere do título:", titulo[0]);
console.log("Último caractere do título:", titulo[titulo.length - 1]);
console.log("Caractere na posição 8:", titulo.charAt(8)); // Alternativa para acessar caracteres

// Concatenação de strings (forma tradicional)
let categoria = "Estudo";
let informacaoCompleta = "Categoria: " + categoria + " - " + titulo;
console.log("Concatenação tradicional:", informacaoCompleta);

// Template strings (ES6+)
let dataCriacao = "01/06/2025";
let resumoDaTarefa = `Tarefa: ${titulo} (${categoria})
Criada em: ${dataCriacao}
Descrição: ${descricao}`;

console.log("Template string:");
console.log(resumoDaTarefa);

// Métodos básicos para busca
console.log("Posição de 'JavaScript':", titulo.indexOf("JavaScript"));
console.log("'JavaScript' está presente?", titulo.includes("JavaScript"));
console.log("Começa com 'Aprender'?", titulo.startsWith("Aprender"));
console.log("Termina com 'Script'?", titulo.endsWith("Script"));

// Formatação para exibição de tarefas
function formatarTituloTarefa(titulo, prioridade) {
    let simboloPrioridade = "";

    if (prioridade === "alta") {
        simboloPrioridade = "⚠️ ";
    } else if (prioridade === "média") {
        simboloPrioridade = "📌 ";
    }

    return `${simboloPrioridade}${titulo.toUpperCase()}`;
}

console.log("Título formatado:", formatarTituloTarefa(titulo, "alta"));
console.log("Título formatado:", formatarTituloTarefa("Revisar código", "média"));

// Truncando descrições longas
function truncarDescricao(descricao, maxLength = 30) {
    if (descricao.length <= maxLength) {
        return descricao;
    }
    return descricao.substring(0, maxLength) + "...";
}

let descricaoLonga = "Este é um exemplo de uma descrição muito longa que precisará ser truncada para exibição na interface do usuário do TaskMaster.";
console.log("Descrição truncada:", truncarDescricao(descricaoLonga));
console.log("Descrição truncada (20 caracteres):", truncarDescricao(descricaoLonga, 20));

// ===== AULA 15: MANIPULAÇÃO AVANÇADA DE STRINGS =====
console.log("\n===== MANIPULAÇÃO AVANÇADA DE STRINGS =====");

// Métodos de slice, substring e substr
let texto = "JavaScript é incrível!";
console.log("Original:", texto);
console.log("slice(0, 10):", texto.slice(0, 10)); // "JavaScript"
console.log("slice(11):", texto.slice(11)); // "é incrível!"
console.log("slice(-10):", texto.slice(-10)); // "é incrível!"
console.log("substring(0, 10):", texto.substring(0, 10)); // "JavaScript"
console.log("substring(11):", texto.substring(11)); // "é incrível!"

// Dividir strings (split) e juntar (join)
let tags = "javascript,programação,web,frontend";
let arrayTags = tags.split(",");
console.log("Array de tags:", arrayTags);

let listaTarefas = ["Estudar JS", "Criar TaskMaster", "Testar aplicação"];
let textoTarefas = listaTarefas.join(" | ");
console.log("Lista de tarefas formatada:", textoTarefas);

// Extração de tags de uma descrição
function extrairTags(texto) {
    // Procura por hashtags no texto (#exemplo)
    const matches = texto.match(/#(\w+)/g) || [];

    // Remove o símbolo # e retorna apenas as palavras
    return matches.map(tag => tag.substring(1));
}

let descricaoComTags = "Estudar #javascript e #react para o projeto #taskmaster";
console.log("Tags extraídas:", extrairTags(descricaoComTags));

// Busca e substituição
function destacarTermoDeBusca(texto, termo) {
    if (!termo) return texto;

    // Criar uma expressão regular com a flag 'gi' (global, case insensitive)
    const regex = new RegExp(termo, 'gi');

    // Substituir todas as ocorrências pelo termo entre asteriscos
    return texto.replace(regex, `**$&**`);
}

let resultadoBusca = destacarTermoDeBusca("JavaScript é uma linguagem de programação incrível. Amo javascript!", "javascript");
console.log("Resultado com destaque:", resultadoBusca);

// Transformação de strings
console.log("Maiúsculas:", texto.toUpperCase());
console.log("Minúsculas:", texto.toLowerCase());

// Remoção de espaços em branco
let entradaUsuario = "   Aprender JavaScript   ";
console.log("Original com espaços:", `"${entradaUsuario}"`);
console.log("Após trim():", `"${entradaUsuario.trim()}"`);
console.log("Após trimStart():", `"${entradaUsuario.trimStart()}"`);
console.log("Após trimEnd():", `"${entradaUsuario.trimEnd()}"`);

// Preenchimento de strings (padStart e padEnd)
let numero = "42";
console.log("padStart(5, '0'):", numero.padStart(5, '0')); // "00042"
console.log("padEnd(5, '*'):", numero.padEnd(5, '*')); // "42***"

// Sistema de busca para tarefas
function buscarTarefas(tarefas, termo) {
    if (!termo) return tarefas;

    termo = termo.toLowerCase();

    return tarefas.filter(tarefa => {
        // Busca no título
        if (tarefa.titulo.toLowerCase().includes(termo)) return true;

        // Busca na descrição
        if (tarefa.descricao && tarefa.descricao.toLowerCase().includes(termo)) return true;

        // Busca nas tags
        if (tarefa.tags && tarefa.tags.some(tag => tag.toLowerCase().includes(termo))) return true;

        return false;
    });
}

// Exemplo de tarefas
const tarefas = [
    { id: 1, titulo: "Aprender JavaScript", descricao: "Estudar strings e métodos", tags: ["estudo", "javascript"] },
    { id: 2, titulo: "Criar componentes React", descricao: "Implementar interface do TaskMaster", tags: ["projeto", "react"] },
    { id: 3, titulo: "Testar aplicação", descricao: "Verificar funcionalidades do TaskMaster", tags: ["testes", "qualidade"] }
];

console.log("\nBusca por 'javascript':", buscarTarefas(tarefas, "javascript"));
console.log("Busca por 'task':", buscarTarefas(tarefas, "task"));
console.log("Busca por 'estudo':", buscarTarefas(tarefas, "estudo"));

// Formatação avançada para interface
function formatarTarefaParaExibicao(tarefa) {
    // Título em maiúsculas
    const tituloFormatado = tarefa.titulo.toUpperCase();

    // Descrição truncada
    const descricaoFormatada = tarefa.descricao
        ? truncarDescricao(tarefa.descricao, 40)
        : "Sem descrição";

    // Tags formatadas
    const tagsFormatadas = tarefa.tags
        ? tarefa.tags.map(tag => `#${tag}`).join(" ")
        : "";

    // Montar exibição completa
    return `${tituloFormatado}
${descricaoFormatada}
${tagsFormatadas}`;
}

console.log("\nTarefa formatada para exibição:");
console.log(formatarTarefaParaExibicao(tarefas[0]));

// ----- Exercícios para os Alunos -----
/*
EXERCÍCIO 1:
Crie uma função que receba um nome completo e retorne apenas o primeiro nome.

Resolução:
function obterPrimeiroNome(nomeCompleto) {
    // Divide o nome completo por espaços
    const partes = nomeCompleto.split(' ');
    
    // Retorna a primeira parte (primeiro nome)
    return partes[0];
}

console.log("Primeiro nome de 'João Silva':", obterPrimeiroNome("João Silva")); // João
console.log("Primeiro nome de 'Maria da Silva':", obterPrimeiroNome("Maria da Silva")); // Maria
*/

/*
EXERCÍCIO 2:
Crie uma função que conte quantas vogais existem em uma string.

Resolução:
function contarVogais(texto) {
    // Converter para minúsculas para facilitar a comparação
    const textoMinusculo = texto.toLowerCase();
    
    // Inicializar contador
    let contador = 0;
    
    // Iterar por cada caractere da string
    for (let i = 0; i < textoMinusculo.length; i++) {
        const char = textoMinusculo[i];
        
        // Verificar se o caractere é uma vogal
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            contador++;
        }
    }
    
    return contador;
}

console.log("Vogais em 'JavaScript':", contarVogais("JavaScript")); // 3 (a a i)
console.log("Vogais em 'Hello World':", contarVogais("Hello World")); // 3 (e o o)
*/

/*
EXERCÍCIO 3:
Crie uma função que transforme a primeira letra de cada palavra em maiúscula.

Resolução:
function capitalizarPalavras(texto) {
    // Dividir o texto em palavras
    const palavras = texto.split(' ');
    
    // Capitalizar cada palavra
    const palavrasCapitalizadas = palavras.map(palavra => {
        // Se a palavra estiver vazia, retorne como está
        if (palavra.length === 0) return palavra;
        
        // Pegar a primeira letra e transformar em maiúscula
        const primeiraLetra = palavra[0].toUpperCase();
        
        // Pegar o resto da palavra
        const restoDaPalavra = palavra.slice(1);
        
        // Juntar a primeira letra maiúscula com o resto da palavra
        return primeiraLetra + restoDaPalavra;
    });
    
    // Juntar as palavras novamente com espaço
    return palavrasCapitalizadas.join(' ');
}

console.log("Texto capitalizado:", capitalizarPalavras("olá mundo, como vai você?")); 
// Olá Mundo, Como Vai Você?
*/

/*
EXERCÍCIO 4:
Crie uma função que substitua todas as ocorrências de uma palavra em um texto.

Resolução:
function substituirPalavra(texto, palavraAntiga, palavraNova) {
    // Criar uma expressão regular para buscar todas as ocorrências
    // 'g' indica global (todas as ocorrências) e 'i' indica case-insensitive
    const regex = new RegExp(palavraAntiga, 'gi');
    
    // Substituir todas as ocorrências
    return texto.replace(regex, palavraNova);
}

const textoOriginal = "JavaScript é incrível! Estou aprendendo JavaScript e estou gostando muito de JavaScript.";
console.log("Texto com substituições:", 
    substituirPalavra(textoOriginal, "JavaScript", "JS"));
// JS é incrível! Estou aprendendo JS e estou gostando muito de JS.
*/

/*
EXERCÍCIO 5:
Crie uma função que verifica se uma string é um palíndromo (lê-se igual de trás para frente, ignorando espaços e diferença entre maiúsculas e minúsculas).

Resolução:
function verificarPalindromo(texto) {
    // Remover espaços e converter para minúsculas
    const textoProcessado = texto.toLowerCase().replace(/\s/g, '');
    
    // Inverter a string
    const textoInvertido = textoProcessado.split('').reverse().join('');
    
    // Verificar se a string original é igual à invertida
    return textoProcessado === textoInvertido;
}

console.log("'Ana' é palíndromo?", verificarPalindromo("Ana")); // true
console.log("'arara' é palíndromo?", verificarPalindromo("arara")); // true
console.log("'A man a plan a canal Panama' é palíndromo?", 
    verificarPalindromo("A man a plan a canal Panama")); // true
console.log("'JavaScript' é palíndromo?", verificarPalindromo("JavaScript")); // false
*/

/*
EXERCÍCIO 6:
Crie uma função que formate um número de telefone para o formato (XX) XXXXX-XXXX, independente do formato de entrada.

Resolução:
function formatarTelefone(numero) {
    // Remover caracteres não numéricos
    const numerosApenas = numero.replace(/\D/g, '');
    
    // Verificar se o número tem a quantidade correta de dígitos
    if (numerosApenas.length !== 11) {
        return "Número inválido. Deve ter 11 dígitos.";
    }
    
    // Formatar no padrão (XX) XXXXX-XXXX
    return `(${numerosApenas.slice(0, 2)}) ${numerosApenas.slice(2, 7)}-${numerosApenas.slice(7)}`;
}

console.log("Telefone formatado:", formatarTelefone("11987654321")); // (11) 98765-4321
console.log("Telefone formatado:", formatarTelefone("(11) 98765-4321")); // (11) 98765-4321
console.log("Telefone formatado:", formatarTelefone("11 98765 4321")); // (11) 98765-4321
*/