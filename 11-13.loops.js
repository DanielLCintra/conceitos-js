/**
 * TaskMaster - Complemento: Métodos Modernos de Array
 * Este arquivo demonstra os métodos modernos de manipulação de arrays em JavaScript
 * comparando-os com as estruturas de repetição tradicionais
 */

// ========================================
// MÉTODOS MODERNOS DE ARRAY EM JAVASCRIPT
// ========================================

// Array de tarefas para exemplos (mesmo do arquivo original)
const tarefas = [
    { id: 1, titulo: "Estudar JavaScript", concluida: true, prioridade: "alta" },
    { id: 2, titulo: "Criar projeto TaskMaster", concluida: false, prioridade: "alta" },
    { id: 3, titulo: "Preparar apresentação", concluida: false, prioridade: "média" },
    { id: 4, titulo: "Revisar código", concluida: false, prioridade: "baixa" },
    { id: 5, titulo: "Debugar aplicação", concluida: true, prioridade: "média" }
];

// ----- forEach -----
console.log("---- Array.forEach() ----");

// forEach vs for tradicional
console.log("Comparação: for tradicional vs forEach");

// Com for tradicional
console.log("\nUsando for tradicional:");
for (let i = 0; i < tarefas.length; i++) {
    console.log(`Tarefa ${i + 1}: ${tarefas[i].titulo}`);
}

// Com forEach (mais legível e conciso)
console.log("\nUsando forEach:");
tarefas.forEach((tarefa, indice) => {
    console.log(`Tarefa ${indice + 1}: ${tarefa.titulo}`);
});

// Vantagens do forEach:
console.log("\nVantagens do forEach:");
console.log("1. Sintaxe mais limpa e declarativa");
console.log("2. Não precisa gerenciar índices manualmente");
console.log("3. Menos propenso a erros (como off-by-one)");
console.log("4. Acesso direto ao valor e índice");

// ----- map -----
console.log("\n---- Array.map() ----");

// map vs for com novo array
console.log("Comparação: for com novo array vs map");

// Com for tradicional
console.log("\nUsando for tradicional:");
const titulosTarefasTradicionais = [];
for (let i = 0; i < tarefas.length; i++) {
    titulosTarefasTradicionais.push(`${tarefas[i].titulo} (${tarefas[i].prioridade})`);
}
console.log(titulosTarefasTradicionais);

// Com map (transforma cada elemento em um novo valor)
console.log("\nUsando map:");
const titulosTarefas = tarefas.map(tarefa =>
    `${tarefa.titulo} (${tarefa.prioridade})`
);
console.log(titulosTarefas);

// Exemplo prático: transformando formato de dados
console.log("\nTransformando formato de dados com map:");
const tarefasFormatadas = tarefas.map(tarefa => ({
    titulo: tarefa.titulo,
    status: tarefa.concluida ? "✓ Concluída" : "□ Pendente",
    nivelPrioridade: tarefa.prioridade === "alta" ? 3 : (tarefa.prioridade === "média" ? 2 : 1)
}));
console.log(tarefasFormatadas);

// ----- filter -----
console.log("\n---- Array.filter() ----");

// filter vs for com condição
console.log("Comparação: for com condição vs filter");

// Com for tradicional
console.log("\nUsando for tradicional (filtrando tarefas pendentes):");
const tarefasPendentesTradicionais = [];
for (let i = 0; i < tarefas.length; i++) {
    if (!tarefas[i].concluida) {
        tarefasPendentesTradicionais.push(tarefas[i]);
    }
}
console.log(`Encontradas ${tarefasPendentesTradicionais.length} tarefas pendentes`);

// Com filter (filtra elementos com base em uma condição)
console.log("\nUsando filter:");
const tarefasPendentes = tarefas.filter(tarefa => !tarefa.concluida);
console.log(`Encontradas ${tarefasPendentes.length} tarefas pendentes:`,
    tarefasPendentes.map(t => t.titulo));

// Substituindo função de filtro por prioridade da aula original
console.log("\nRefatorando a função filtrarTarefasPorPrioridade:");

// Versão original com for
function filtrarTarefasPorPrioridadeTradicional(tarefas, prioridade) {
    const resultado = [];
    for (let i = 0; i < tarefas.length; i++) {
        if (tarefas[i].prioridade === prioridade) {
            resultado.push(tarefas[i]);
        }
    }
    return resultado;
}

// Versão com filter (mais concisa e declarativa)
function filtrarTarefasPorPrioridade(tarefas, prioridade) {
    return tarefas.filter(tarefa => tarefa.prioridade === prioridade);
}

const tarefasAlta = filtrarTarefasPorPrioridade(tarefas, "alta");
console.log("Tarefas de alta prioridade:", tarefasAlta.map(t => t.titulo));

// ----- find e findIndex -----
console.log("\n---- Array.find() e Array.findIndex() ----");

// find vs loop com break
console.log("Comparação: while com break vs find/findIndex");

// Com while e break (como no exemplo da aula original)
console.log("\nUsando while com break:");
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

// Com find (encontra o primeiro elemento que satisfaz uma condição)
console.log("\nUsando find:");
const tarefaRevisao = tarefas.find(tarefa => tarefa.titulo === "Revisar código");
console.log(tarefaRevisao ? `Tarefa encontrada: ${tarefaRevisao.titulo}` : "Tarefa não encontrada");

// Com findIndex (encontra o índice do primeiro elemento que satisfaz uma condição)
console.log("\nUsando findIndex:");
const indiceRevisao = tarefas.findIndex(tarefa => tarefa.titulo === "Revisar código");
console.log(indiceRevisao !== -1
    ? `Tarefa encontrada na posição ${indiceRevisao}: ${tarefas[indiceRevisao].titulo}`
    : "Tarefa não encontrada");

// ----- reduce -----
console.log("\n---- Array.reduce() ----");

// reduce vs acumulador em loop
console.log("Comparação: loop com acumulador vs reduce");

// Com for tradicional
console.log("\nContando tarefas concluídas com for:");
let concluidasTradicional = 0;
for (let i = 0; i < tarefas.length; i++) {
    if (tarefas[i].concluida) {
        concluidasTradicional++;
    }
}
console.log(`Total de tarefas concluídas: ${concluidasTradicional}`);

// Com reduce (acumula valores em um único resultado)
console.log("\nContando tarefas concluídas com reduce:");
const concluidas = tarefas.reduce((total, tarefa) => {
    return total + (tarefa.concluida ? 1 : 0);
}, 0);
console.log(`Total de tarefas concluídas: ${concluidas}`);

// Exemplo avançado: estatísticas de tarefas (refatoração do exemplo da aula)
console.log("\nEstatísticas com reduce (refatoração do exemplo da aula):");

// Versão original com loop
function calcularEstatisticasTradicional(tarefas) {
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

// Versão com reduce (combina todas as operações em uma só passagem)
function calcularEstatisticas(tarefas) {
    const estatisticas = tarefas.reduce((acc, tarefa) => {
        // Incrementa contador de concluídas se necessário
        if (tarefa.concluida) {
            acc.concluidas++;
        }

        // Incrementa contador de prioridade
        acc.prioridades[tarefa.prioridade]++;

        return acc;
    }, {
        total: tarefas.length,
        concluidas: 0,
        prioridades: { baixa: 0, média: 0, alta: 0 }
    });

    // Cálculos derivados
    estatisticas.pendentes = estatisticas.total - estatisticas.concluidas;
    estatisticas.percentualConcluido = (estatisticas.concluidas / estatisticas.total) * 100;

    return estatisticas;
}

const estatisticas = calcularEstatisticas(tarefas);
console.log("Estatísticas de tarefas:", estatisticas);

// ----- some e every -----
console.log("\n---- Array.some() e Array.every() ----");

// some vs loop com flag
console.log("\nVerificando se pelo menos uma tarefa está concluída:");

// Com for tradicional e flag
let temConcluidaTradicional = false;
for (let i = 0; i < tarefas.length; i++) {
    if (tarefas[i].concluida) {
        temConcluidaTradicional = true;
        break;  // Podemos parar assim que encontrarmos uma
    }
}
console.log(`Pelo menos uma tarefa concluída? ${temConcluidaTradicional ? 'Sim' : 'Não'}`);

// Com some (verifica se pelo menos um elemento satisfaz a condição)
const temConcluida = tarefas.some(tarefa => tarefa.concluida);
console.log(`Pelo menos uma tarefa concluída? ${temConcluida ? 'Sim' : 'Não'}`);

// every vs loop com flag
console.log("\nVerificando se todas as tarefas estão concluídas:");

// Com for tradicional e flag
let todasConcluidasTradicional = true;
for (let i = 0; i < tarefas.length; i++) {
    if (!tarefas[i].concluida) {
        todasConcluidasTradicional = false;
        break;  // Podemos parar na primeira não concluída
    }
}
console.log(`Todas as tarefas concluídas? ${todasConcluidasTradicional ? 'Sim' : 'Não'}`);

// Com every (verifica se todos os elementos satisfazem a condição)
const todasConcluidas = tarefas.every(tarefa => tarefa.concluida);
console.log(`Todas as tarefas concluídas? ${todasConcluidas ? 'Sim' : 'Não'}`);

// ----- flat e flatMap -----
console.log("\n---- Array.flat() e Array.flatMap() ----");

// Exemplo com matriz de tarefas aninhadas
const projetosComTarefas = [
    {
        nome: "Website",
        tarefas: [
            { titulo: "Design", concluida: true },
            { titulo: "HTML", concluida: true },
            { titulo: "CSS", concluida: false }
        ]
    },
    {
        nome: "API",
        tarefas: [
            { titulo: "Modelagem", concluida: true },
            { titulo: "Rotas", concluida: false }
        ]
    }
];

// Extrair todas as tarefas em um único array com loops aninhados
console.log("\nExtraindo todas as tarefas com loops aninhados:");
const todasTarefasTradicional = [];
for (let i = 0; i < projetosComTarefas.length; i++) {
    for (let j = 0; j < projetosComTarefas[i].tarefas.length; j++) {
        todasTarefasTradicional.push(projetosComTarefas[i].tarefas[j]);
    }
}
console.log(`Total de tarefas: ${todasTarefasTradicional.length}`);

// Com flatMap (mapeia cada elemento para um array e depois achata o resultado)
console.log("\nExtraindo todas as tarefas com flatMap:");
const todasTarefas = projetosComTarefas.flatMap(projeto => projeto.tarefas);
console.log(`Total de tarefas: ${todasTarefas.length}`);
console.log("Títulos:", todasTarefas.map(t => t.titulo));

// ----- Encadeamento de métodos -----
console.log("\n---- Encadeamento de métodos ----");

// Encontrar títulos das tarefas de alta prioridade não concluídas
console.log("\nTítulos das tarefas de alta prioridade não concluídas:");

// Com loops tradicionais
const tarefasAltaPendentesTradicional = [];
for (let i = 0; i < tarefas.length; i++) {
    if (tarefas[i].prioridade === "alta" && !tarefas[i].concluida) {
        tarefasAltaPendentesTradicional.push(tarefas[i].titulo);
    }
}
console.log("Com loops tradicionais:", tarefasAltaPendentesTradicional);

// Com métodos encadeados
const tarefasAltaPendentes = tarefas
    .filter(tarefa => tarefa.prioridade === "alta" && !tarefa.concluida)
    .map(tarefa => tarefa.titulo);
console.log("Com métodos encadeados:", tarefasAltaPendentes);

// Exemplo mais complexo: estatísticas de conclusão por prioridade
console.log("\nEstatísticas de conclusão por prioridade:");

// Usando métodos encadeados
const estatisticasPorPrioridade = Object.fromEntries(
    // Primeiro, agrupamos por prioridade
    Object.entries(
        tarefas.reduce((acc, tarefa) => {
            // Se o acumulador ainda não tem esta prioridade, inicializamos
            if (!acc[tarefa.prioridade]) {
                acc[tarefa.prioridade] = { total: 0, concluidas: 0 };
            }

            // Incrementamos os contadores
            acc[tarefa.prioridade].total++;
            if (tarefa.concluida) {
                acc[tarefa.prioridade].concluidas++;
            }

            return acc;
        }, {})
    ).map(([prioridade, stats]) => [
        prioridade,
        {
            ...stats,
            percentualConcluido: (stats.concluidas / stats.total) * 100
        }
    ])
);

console.log(estatisticasPorPrioridade);

// ----- Comparação de desempenho -----
console.log("\n---- Por que usar métodos modernos de array? ----");

console.log(`
Vantagens dos métodos modernos de array:

1. Código mais declarativo: expressa "o que" fazer em vez de "como" fazer
2. Maior legibilidade: intenção do código fica mais clara
3. Menos código boilerplate: menos variáveis temporárias e índices para gerenciar
4. Imutabilidade: os métodos retornam novos arrays em vez de modificar o original
5. Encadeamento: facilidade para combinar operações sequenciais
6. Menos erros: evita problemas comuns de loops como off-by-one errors
7. Consistência funcional: assinatura padronizada (elemento, índice, array)

Quando usar loops tradicionais:
1. Ao precisar de break/continue para controle explícito do fluxo
2. Em casos específicos de performance com arrays muito grandes
3. Ao precisar modificar o array original durante a iteração
4. Em loops complexos não lineares (pular elementos, etc.)
`);

// ----- Exercícios para os alunos -----
/*
EXERCÍCIO 1:
Reescreva a função somarArray do exercício 5 original usando reduce.

Resolução:
function somarArray(numeros) {
    return numeros.reduce((soma, numero) => soma + numero, 0);
}

const meusNumeros = [10, 20, 30, 40, 50];
console.log("Soma dos números:", somarArray(meusNumeros)); // 150
*/

/*
EXERCÍCIO 2:
Use filter e map para criar uma lista formatada apenas das tarefas concluídas.

Resolução:
function listarTarefasConcluidas(tarefas) {
    return tarefas
        .filter(tarefa => tarefa.concluida)
        .map(tarefa => `[✓] ${tarefa.titulo} (${tarefa.prioridade})`);
}

console.log("Tarefas concluídas:", listarTarefasConcluidas(tarefas));
*/

/*
EXERCÍCIO 3:
Reescreva a função encontrarNumero do exercício 7 original usando findIndex.

Resolução:
function encontrarNumero(array, numero) {
    const indice = array.findIndex(item => item === numero);
    return indice !== -1
        ? `Número ${numero} encontrado na posição ${indice}`
        : `Número ${numero} não encontrado no array`;
}

const numeros = [5, 8, 12, 3, 7, 9, 15];
console.log(encontrarNumero(numeros, 7));  // Encontrado na posição 4
console.log(encontrarNumero(numeros, 10)); // Não encontrado
*/

/*
EXERCÍCIO 4:
Use flatMap para criar um array com todas as palavras de um array de frases.

Resolução:
function extrairPalavras(frases) {
    return frases.flatMap(frase => frase.split(' '));
}

const frases = [
    "JavaScript é incrível",
    "Métodos de array são poderosos",
    "Programação funcional é elegante"
];

console.log("Palavras extraídas:", extrairPalavras(frases));
*/