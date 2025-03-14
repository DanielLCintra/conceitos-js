/**
 * TaskMaster - Aula sobre Estruturas de Repetição
 * Este arquivo demonstra as diferentes estruturas de repetição em JavaScript
 */

// ========================================
// AULA 11-13: ESTRUTURAS DE REPETIÇÃO
// ========================================

// Array de tarefas para exemplos
const tarefas = [
    { id: 1, titulo: "Estudar JavaScript", concluida: true, prioridade: "alta" },
    { id: 2, titulo: "Criar projeto TaskMaster", concluida: false, prioridade: "alta" },
    { id: 3, titulo: "Preparar apresentação", concluida: false, prioridade: "média" },
    { id: 4, titulo: "Revisar código", concluida: false, prioridade: "baixa" },
    { id: 5, titulo: "Debugar aplicação", concluida: true, prioridade: "média" }
];

// ----- Loop for -----
console.log("---- Loop for ----");

// Estrutura básica do for
for (let i = 0; i < 5; i++) {
    console.log(`Iteração ${i}`);
}

// Percorrendo um array com for
console.log("\nPercorrendo array com for:");
for (let i = 0; i < tarefas.length; i++) {
    console.log(`Tarefa ${i + 1}: ${tarefas[i].titulo}`);
}

// Loop for com múltiplas variáveis
console.log("\nLoop for com múltiplas variáveis:");
for (let i = 0, j = tarefas.length - 1; i < j; i++, j--) {
    console.log(`Trocando ${tarefas[i].titulo} com ${tarefas[j].titulo}`);
}

// ----- Loop for...in -----
console.log("\n---- Loop for...in ----");

// Iterando sobre propriedades de um objeto
const tarefa = tarefas[0];
console.log("Propriedades da tarefa:");
for (let propriedade in tarefa) {
    console.log(`${propriedade}: ${tarefa[propriedade]}`);
}

// Iterando sobre índices de um array
console.log("\nÍndices do array de tarefas:");
for (let indice in tarefas) {
    console.log(`Índice ${indice}: ${tarefas[indice].titulo}`);
}

// Cuidado com for...in e arrays (não garante ordem)
console.log("\nCuidado com a ordem em for...in:");
const arrayModificado = tarefas;
arrayModificado.customProperty = "Propriedade personalizada";
for (let key in arrayModificado) {
    console.log(key); // Pode incluir propriedades não numéricas
}

// ----- Loop for...of -----
console.log("\n---- Loop for...of ----");

// Iterando sobre elementos de um array
console.log("Tarefas com for...of:");
for (let tarefa of tarefas) {
    console.log(`- ${tarefa.titulo} (${tarefa.prioridade})`);
}

// Iterando sobre caracteres de uma string
const palavra = "TaskMaster";
console.log("\nLetras de 'TaskMaster':");
for (let letra of palavra) {
    console.log(letra);
}

// ----- Loop while -----
console.log("\n---- Loop while ----");

// Estrutura básica do while
let contador = 0;
console.log("Loop while básico:");
while (contador < 5) {
    console.log(`Contador: ${contador}`);
    contador++;
}

// Exemplo prático: procurando um elemento
console.log("\nProcurando tarefa com while:");
let i = 0;
while (i < tarefas.length && tarefas[i].titulo !== "Revisar código") {
    console.log(`Verificando: ${tarefas[i].titulo}`);
    i++;
}

if (i < tarefas.length) {
    console.log(`Tarefa encontrada na posição ${i}: ${tarefas[i].titulo}`);
} else {
    console.log("Tarefa não encontrada");
}

// ----- Loop do...while -----
console.log("\n---- Loop do...while ----");

// Estrutura básica do do...while
contador = 0;
console.log("Loop do...while básico:");
do {
    console.log(`Contador: ${contador}`);
    contador++;
} while (contador < 5);

// Exemplo com condição falsa inicialmente
console.log("\nLoop do...while com condição falsa inicialmente:");
contador = 10;
do {
    console.log(`Este código ainda executa uma vez mesmo com contador = ${contador}`);
} while (contador < 5);

// ----- Controle de Loops: break e continue -----
console.log("\n---- Controle de Loops: break e continue ----");

// break: interrompe a execução do loop
console.log("Usando break para parar na tarefa de id 3:");
for (let i = 0; i < tarefas.length; i++) {
    console.log(`Verificando tarefa ${tarefas[i].id}: ${tarefas[i].titulo}`);

    if (tarefas[i].id === 3) {
        console.log("Tarefa 3 encontrada. Parando loop.");
        break;
    }
}

// continue: pula para a próxima iteração
console.log("\nUsando continue para mostrar apenas tarefas não concluídas:");
for (let i = 0; i < tarefas.length; i++) {
    if (tarefas[i].concluida) {
        console.log(`Pulando tarefa concluída: ${tarefas[i].titulo}`);
        continue;
    }

    console.log(`Tarefa pendente: ${tarefas[i].titulo}`);
}

// ----- Loops Aninhados -----
console.log("\n---- Loops Aninhados ----");

// Matriz de exemplo (projetos e suas tarefas)
const projetos = [
    { nome: "Website", tarefas: ["Design", "HTML", "CSS", "JavaScript"] },
    { nome: "API", tarefas: ["Modelagem", "Rotas", "Controladores"] },
    { nome: "App Mobile", tarefas: ["Wireframes", "UI", "Integração"] }
];

console.log("Lista de tarefas por projeto:");
for (let i = 0; i < projetos.length; i++) {
    console.log(`\nProjeto: ${projetos[i].nome}`);

    for (let j = 0; j < projetos[i].tarefas.length; j++) {
        console.log(`  - Tarefa ${j + 1}: ${projetos[i].tarefas[j]}`);
    }
}

// Usando break e continue em loops aninhados
console.log("\nUsando labels, break e continue em loops aninhados:");

projetoLoop: for (let i = 0; i < projetos.length; i++) {
    console.log(`\nAnalisando projeto: ${projetos[i].nome}`);

    for (let j = 0; j < projetos[i].tarefas.length; j++) {
        if (projetos[i].tarefas[j] === "HTML") {
            console.log(`  Encontrou HTML! Pulando para o próximo projeto.`);
            continue projetoLoop; // Pula para a próxima iteração do loop externo
        }

        console.log(`  - Verificando tarefa: ${projetos[i].tarefas[j]}`);

        if (projetos[i].tarefas[j] === "Integração") {
            console.log(`  Encontrou Integração! Parando completamente.`);
            break projetoLoop; // Interrompe ambos os loops
        }
    }
}

// ----- Otimização de Loops -----
console.log("\n---- Otimização de Loops ----");

// Armazenando o tamanho do array fora do loop
console.log("Loop otimizado com tamanho armazenado:");
for (let i = 0, len = tarefas.length; i < len; i++) {
    console.log(`Tarefa ${i + 1}: ${tarefas[i].titulo}`);
}

// Loop reverso (às vezes mais eficiente)
console.log("\nLoop reverso:");
for (let i = tarefas.length - 1; i >= 0; i--) {
    console.log(`Tarefa ${i + 1}: ${tarefas[i].titulo}`);
}

// ----- Exemplos Práticos no TaskMaster -----
console.log("\n---- Exemplos Práticos no TaskMaster ----");

// Exemplo 1: Filtragem de tarefas
function filtrarTarefasPorPrioridade(tarefas, prioridade) {
    const resultado = [];

    for (let i = 0; i < tarefas.length; i++) {
        if (tarefas[i].prioridade === prioridade) {
            resultado.push(tarefas[i]);
        }
    }

    return resultado;
}

const tarefasAlta = filtrarTarefasPorPrioridade(tarefas, "alta");
console.log("Tarefas de alta prioridade:", tarefasAlta);

// Exemplo 2: Paginação de resultados
function paginarTarefas(tarefas, tamanhoPagina, numeroPagina) {
    const inicio = (numeroPagina - 1) * tamanhoPagina;
    const fim = inicio + tamanhoPagina;
    const resultado = [];

    for (let i = inicio; i < fim && i < tarefas.length; i++) {
        resultado.push(tarefas[i]);
    }

    return {
        pagina: numeroPagina,
        totalPaginas: Math.ceil(tarefas.length / tamanhoPagina),
        totalItens: tarefas.length,
        itens: resultado
    };
}

const pagina1 = paginarTarefas(tarefas, 2, 1);
console.log("\nPaginação - Página 1:", pagina1);
const pagina2 = paginarTarefas(tarefas, 2, 2);
console.log("Paginação - Página 2:", pagina2);

// Exemplo 3: Estatísticas de tarefas
function calcularEstatisticas(tarefas) {
    let total = tarefas.length;
    let concluidas = 0;
    let prioridades = { baixa: 0, média: 0, alta: 0 };

    for (let tarefa of tarefas) {
        if (tarefa.concluida) {
            concluidas++;
        }

        prioridades[tarefa.prioridade]++;
    }

    return {
        total,
        concluidas,
        pendentes: total - concluidas,
        percentualConcluido: (concluidas / total) * 100,
        prioridades
    };
}

const estatisticas = calcularEstatisticas(tarefas);
console.log("\nEstatísticas de tarefas:", estatisticas);

// Exemplo 4: Sistema de pesquisa com destacamento
function pesquisarTarefas(tarefas, termo) {
    if (!termo || termo.trim() === "") {
        return { encontradas: tarefas, total: tarefas.length };
    }

    termo = termo.toLowerCase();
    const encontradas = [];

    for (let tarefa of tarefas) {
        if (tarefa.titulo.toLowerCase().includes(termo)) {
            // Cria uma cópia da tarefa para não modificar a original
            const tarefaEncontrada = { ...tarefa };

            // Destaca o termo na cópia
            const regex = new RegExp(`(${termo})`, 'gi');
            tarefaEncontrada.tituloDestacado = tarefa.titulo.replace(regex, '<mark>$1</mark>');

            encontradas.push(tarefaEncontrada);
        }
    }

    return { encontradas, total: encontradas.length };
}

const resultadosPesquisa = pesquisarTarefas(tarefas, "re");
console.log("\nResultados da pesquisa por 're':", resultadosPesquisa);

// ----- Exercícios para os Alunos -----
/*
EXERCÍCIO 1:
Use um loop for para exibir os números de 1 a 10.

Resolução:
function exibirNumeros1a10() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

console.log("Números de 1 a 10:");
exibirNumeros1a10();
*/

/*
EXERCÍCIO 2:
Crie um array com 5 frutas e use um loop for para exibir cada uma.

Resolução:
function exibirFrutas() {
    const frutas = ["Maçã", "Banana", "Laranja", "Morango", "Uva"];
    
    for (let i = 0; i < frutas.length; i++) {
        console.log(`Fruta ${i + 1}: ${frutas[i]}`);
    }
}

console.log("\nLista de frutas:");
exibirFrutas();
*/

/*
EXERCÍCIO 3:
Use um loop while para fazer uma contagem regressiva de 10 a 1.

Resolução:
function contagemRegressiva() {
    let contador = 10;
    
    while (contador >= 1) {
        console.log(contador);
        contador--;
    }
}

console.log("\nContagem regressiva de 10 a 1:");
contagemRegressiva();
*/

/*
EXERCÍCIO 4:
Crie um loop que exiba apenas os números pares de 0 a 20.

Resolução:
function exibirNumerosPares() {
    // Usando for
    for (let i = 0; i <= 20; i += 2) {
        console.log(i);
    }
    
    // Alternativa com verificação de paridade
    // for (let i = 0; i <= 20; i++) {
    //     if (i % 2 === 0) {
    //         console.log(i);
    //     }
    // }
}

console.log("\nNúmeros pares de 0 a 20:");
exibirNumerosPares();
*/

/*
EXERCÍCIO 5:
Crie uma função que receba um array de números e retorne a soma de todos eles usando um loop.

Resolução:
function somarArray(numeros) {
    let soma = 0;
    
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    
    return soma;
}

const meusNumeros = [10, 20, 30, 40, 50];
console.log("\nSoma dos números:", somarArray(meusNumeros)); // 150
*/

/*
EXERCÍCIO 6:
Crie uma função que percorra um objeto e liste todas as suas propriedades e valores.

Resolução:
function listarPropriedades(objeto) {
    for (let propriedade in objeto) {
        console.log(`${propriedade}: ${objeto[propriedade]}`);
    }
}

const minhaTarefa = {
    id: 1,
    titulo: "Estudar loops",
    prioridade: "alta",
    concluida: false
};

console.log("\nPropriedades da tarefa:");
listarPropriedades(minhaTarefa);
*/

/*
EXERCÍCIO 7:
Use um loop para encontrar um número específico em um array. Se encontrar, exiba a posição. Caso contrário, exiba uma mensagem informando que não foi encontrado.

Resolução:
function encontrarNumero(array, numero) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === numero) {
            return `Número ${numero} encontrado na posição ${i}`;
        }
    }
    
    return `Número ${numero} não encontrado no array`;
}

const numeros = [5, 8, 12, 3, 7, 9, 15];
console.log("\nBuscando números:");
console.log(encontrarNumero(numeros, 7));  // Encontrado na posição 4
console.log(encontrarNumero(numeros, 10)); // Não encontrado
*/

/*
EXERCÍCIO 8:
Crie uma função que conte quantas tarefas de um array estão concluídas.

Resolução:
function contarTarefasConcluidas(tarefas) {
    let contador = 0;
    
    for (let i = 0; i < tarefas.length; i++) {
        if (tarefas[i].concluida) {
            contador++;
        }
    }
    
    return contador;
}

const minhasTarefas = [
    { titulo: "Tarefa 1", concluida: true },
    { titulo: "Tarefa 2", concluida: false },
    { titulo: "Tarefa 3", concluida: true },
    { titulo: "Tarefa 4", concluida: false },
    { titulo: "Tarefa 5", concluida: true }
];

console.log("\nTotal de tarefas concluídas:", contarTarefasConcluidas(minhasTarefas)); // 3
*/