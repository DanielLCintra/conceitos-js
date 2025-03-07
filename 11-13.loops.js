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

// ----- Desafios para os Alunos -----
/*
1. Implemente uma função de ordenação que use loops para ordenar as tarefas por diferentes critérios (prioridade, data, alfabético).
2. Crie uma função que utiliza loops aninhados para agrupar tarefas por mês e semana.
3. Desenvolva um sistema de filtros combinados que permite ao usuário filtrar tarefas por múltiplos critérios simultaneamente.
4. Implemente um algoritmo de busca que encontre tarefas mesmo com termos parciais ou com erros de digitação simples.
*/