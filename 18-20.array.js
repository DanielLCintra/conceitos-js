/**
 * TaskMaster - Aula sobre Arrays
 * Este arquivo demonstra o trabalho com arrays em JavaScript
 */

// ========================================
// AULA 18-20: ARRAYS
// ========================================

// ----- Criação de Arrays -----
console.log("---- Criação de Arrays ----");

// Array literal (forma mais comum)
const tarefas = [
    "Estudar JavaScript",
    "Criar projeto TaskMaster",
    "Preparar apresentação",
    "Revisar código"
];
console.log("Array de tarefas:", tarefas);

// Construtor Array
const categorias = new Array("Trabalho", "Estudo", "Pessoal", "Projetos");
console.log("Array de categorias:", categorias);

// Array.of (ES6)
const prioridades = Array.of("Baixa", "Média", "Alta");
console.log("Array de prioridades:", prioridades);

// Array.from (ES6) - cria array a partir de iterable ou array-like
const letras = Array.from("TaskMaster");
console.log("Array de letras:", letras);

// Array com elementos vazios
const vazios = new Array(5); // Cria array com 5 slots vazios
console.log("Array com slots vazios:", vazios);
console.log("Comprimento:", vazios.length);

// ----- Acesso a Elementos -----
console.log("\n---- Acesso a Elementos ----");

// Acesso por índice (começa em 0)
console.log("Primeira tarefa:", tarefas[0]);
console.log("Segunda tarefa:", tarefas[1]);
console.log("Última tarefa:", tarefas[tarefas.length - 1]);

// Índice fora dos limites
console.log("Índice inexistente:", tarefas[10]); // undefined, não gera erro

// Modificação por índice
tarefas[2] = "Preparar apresentação sobre Arrays";
console.log("Array após modificação:", tarefas);

// ----- Métodos Básicos de Array -----
console.log("\n---- Métodos Básicos de Array ----");

// length - propriedade que indica o tamanho do array
console.log("Número de tarefas:", tarefas.length);

// push - adiciona elemento(s) ao final do array e retorna o novo comprimento
const novoTamanho = tarefas.push("Testar aplicação", "Documentar código");
console.log("Após push:", tarefas);
console.log("Novo tamanho:", novoTamanho);

// pop - remove e retorna o último elemento
const ultimaTarefa = tarefas.pop();
console.log("Elemento removido com pop:", ultimaTarefa);
console.log("Após pop:", tarefas);

// unshift - adiciona elemento(s) ao início do array e retorna o novo comprimento
const tamanhoAposUnshift = tarefas.unshift("Planejar sprint");
console.log("Após unshift:", tarefas);
console.log("Tamanho após unshift:", tamanhoAposUnshift);

// shift - remove e retorna o primeiro elemento
const primeiraTarefa = tarefas.shift();
console.log("Elemento removido com shift:", primeiraTarefa);
console.log("Após shift:", tarefas);

// ----- Métodos de Busca e Posicionamento -----
console.log("\n---- Métodos de Busca e Posicionamento ----");

// indexOf - retorna o primeiro índice do elemento encontrado ou -1
const indiceRevisar = tarefas.indexOf("Revisar código");
console.log("Índice de 'Revisar código':", indiceRevisar);

// lastIndexOf - retorna o último índice do elemento encontrado ou -1
tarefas.push("Revisar código"); // Adicionando um duplicado para o exemplo
const ultimoIndiceRevisar = tarefas.lastIndexOf("Revisar código");
console.log("Último índice de 'Revisar código':", ultimoIndiceRevisar);

// includes - verifica se o array contém o elemento (true/false)
const contemApresentacao = tarefas.includes("Preparar apresentação sobre Arrays");
console.log("Contém 'Preparar apresentação sobre Arrays'?", contemApresentacao);

// find - retorna o primeiro elemento que satisfaz a função de teste
const tarefasObjetos = [
    { id: 1, titulo: "Estudar JavaScript", concluida: true },
    { id: 2, titulo: "Criar projeto", concluida: false },
    { id: 3, titulo: "Revisar código", concluida: false }
];

const tarefaConcluida = tarefasObjetos.find(tarefa => tarefa.concluida);
console.log("Primeira tarefa concluída:", tarefaConcluida);

// findIndex - retorna o índice do primeiro elemento que satisfaz a função de teste
const indiceTarefaCriar = tarefasObjetos.findIndex(tarefa => tarefa.titulo.includes("Criar"));
console.log("Índice da tarefa que inclui 'Criar':", indiceTarefaCriar);

// ----- Métodos de Transformação de Arrays -----
console.log("\n---- Métodos de Transformação de Arrays ----");

// concat - concatena arrays e retorna um novo array
const tarefasPrioritarias = ["Corrigir bugs", "Atender cliente"];
const todasTarefas = tarefas.concat(tarefasPrioritarias);
console.log("Arrays concatenados:", todasTarefas);

// slice - retorna uma cópia de parte do array
const tresUltimasTarefas = todasTarefas.slice(-3);
console.log("Três últimas tarefas:", tresUltimasTarefas);
const tarefasDoMeio = todasTarefas.slice(2, 5);
console.log("Tarefas do meio (índices 2 a 4):", tarefasDoMeio);

// splice - altera o array original removendo, substituindo ou adicionando elementos
// splice(indiceInicio, quantidadeRemover, elementosAdicionar...)
const tarefasModificadas = [...todasTarefas]; // Criando cópia para não modificar o original
const removidos = tarefasModificadas.splice(1, 2, "Nova tarefa 1", "Nova tarefa 2");
console.log("Elementos removidos:", removidos);
console.log("Array após splice:", tarefasModificadas);

// reverse - inverte a ordem dos elementos do array
const tarefasInvertidas = [...tarefas]; // Criando cópia para não modificar o original
tarefasInvertidas.reverse();
console.log("Array invertido:", tarefasInvertidas);

// sort - ordena os elementos do array
const tarefasOrdenadas = [...tarefas]; // Criando cópia para não modificar o original
tarefasOrdenadas.sort();
console.log("Array ordenado alfabeticamente:", tarefasOrdenadas);

// Ordenação personalizada com sort
const numeros = [10, 5, 8, 1, 7, 2];
numeros.sort((a, b) => a - b); // Ordenação numérica crescente
console.log("Números ordenados crescentemente:", numeros);

// Ordenação de objetos
const tarefasOrdem = [...tarefasObjetos]; // Criando cópia para não modificar o original
tarefasOrdem.sort((a, b) => a.id - b.id); // Ordenação por ID
console.log("Tarefas ordenadas por ID:", tarefasOrdem);

// ----- Iteração em Arrays -----
console.log("\n---- Iteração em Arrays ----");

// forEach - executa uma função para cada elemento
console.log("Iterando com forEach:");
tarefas.forEach((tarefa, indice) => {
    console.log(`${indice + 1}. ${tarefa}`);
});

// map - cria um novo array com os resultados da função para cada elemento
const tarefasFormatadas = tarefasObjetos.map(tarefa => {
    return {
        titulo: tarefa.titulo.toUpperCase(),
        status: tarefa.concluida ? "CONCLUÍDA" : "PENDENTE"
    };
});
console.log("Tarefas formatadas com map:", tarefasFormatadas);

// filter - cria um novo array com elementos que passam no teste da função
const tarefasPendentes = tarefasObjetos.filter(tarefa => !tarefa.concluida);
console.log("Tarefas pendentes filtradas:", tarefasPendentes);

// reduce - reduz o array a um único valor aplicando uma função acumuladora
const totalTarefas = tarefasObjetos.reduce((total, tarefa) => {
    return total + (tarefa.concluida ? 1 : 0);
}, 0);
console.log("Total de tarefas concluídas:", totalTarefas);

// some - verifica se pelo menos um elemento satisfaz a condição
const temTarefasConcluidas = tarefasObjetos.some(tarefa => tarefa.concluida);
console.log("Tem alguma tarefa concluída?", temTarefasConcluidas);

// every - verifica se todos os elementos satisfazem a condição
const todasTarefasConcluidas = tarefasObjetos.every(tarefa => tarefa.concluida);
console.log("Todas as tarefas estão concluídas?", todasTarefasConcluidas);

// ----- Spread Operator e Arrays -----
console.log("\n---- Spread Operator (...) e Arrays ----");

// Clonando arrays
const tarefasClone = [...tarefas];
console.log("Clone do array de tarefas:", tarefasClone);

// Combinando arrays
const todasCategorias = [...categorias, "Urgente", "Rotineiro"];
console.log("Combinação de arrays com spread:", todasCategorias);

// Usando spread com funções
function resumoTarefas(primeira, segunda, ...resto) {
    console.log("Tarefa prioritária:", primeira);
    console.log("Segunda tarefa:", segunda);
    console.log("Demais tarefas:", resto);
}

resumoTarefas(...tarefas);

// ----- Desestruturação de Arrays -----
console.log("\n---- Desestruturação de Arrays ----");

// Atribuição básica via desestruturação
const [primeiraCat, segundaCat, terceiraCat] = categorias;
console.log("Categorias desestruturadas:", primeiraCat, segundaCat, terceiraCat);

// Ignorando elementos
const [primeira, , terceira] = tarefas;
console.log("Primeira e terceira tarefas:", primeira, terceira);

// Rest pattern
const [primeiraP, segundaP, ...restantes] = tarefas;
console.log("Primeiras tarefas:", primeiraP, segundaP);
console.log("Restantes:", restantes);

// Valores padrão
const cores = ["vermelho", "verde"];
const [cor1, cor2, cor3 = "azul"] = cores;
console.log("Cores com valor padrão:", cor1, cor2, cor3);

// Trocando variáveis
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log("Após troca:", a, b);

// ----- Arrays Multidimensionais -----
console.log("\n---- Arrays Multidimensionais ----");

// Criando uma matriz (array bidimensional)
const projetos = [
    ["Website", ["Design", "HTML", "CSS", "JavaScript"]],
    ["API", ["Modelagem", "Rotas", "Controladores"]],
    ["App Mobile", ["Wireframes", "UI", "Integração"]]
];

// Acessando elementos
console.log("Primeiro projeto:", projetos[0][0]);
console.log("Tarefas do primeiro projeto:", projetos[0][1]);
console.log("Primeira tarefa do segundo projeto:", projetos[1][1][0]);

// Iterando sobre uma matriz
console.log("\nTodos os projetos e tarefas:");
for (let i = 0; i < projetos.length; i++) {
    console.log(`\nProjeto: ${projetos[i][0]}`);

    for (let j = 0; j < projetos[i][1].length; j++) {
        console.log(`  - ${projetos[i][1][j]}`);
    }
}

// ----- Métodos Avançados de Arrays (ES6+) -----
console.log("\n---- Métodos Avançados de Arrays (ES6+) ----");

// flat - "achata" arrays aninhados
const tarefasAninhadas = [["Estudar JavaScript", "Criar projeto"], ["Testar", "Depurar"]];
const tarefasAchatadas = tarefasAninhadas.flat();
console.log("Array achatado:", tarefasAchatadas);

// flatMap - map seguido de flat(1)
const frases = ["JavaScript é incrível", "Arrays são úteis"];
const palavras = frases.flatMap(frase => frase.split(" "));
console.log("Palavras extraídas com flatMap:", palavras);

// Array.from com mapeamento
const numString = "12345";
const numeros2 = Array.from(numString, num => parseInt(num) * 2);
console.log("Array.from com mapeamento:", numeros2);

// ----- Exemplos Práticos no TaskMaster -----
console.log("\n---- Exemplos Práticos no TaskMaster ----");

// Exemplo 1: CRUD de tarefas com arrays
const gerenciadorTarefas = {
    tarefas: [],

    // Create - Adicionar tarefa
    adicionarTarefa(titulo, descricao = "", prioridade = "média") {
        const novaTarefa = {
            id: Date.now(), // ID único baseado no timestamp
            titulo,
            descricao,
            prioridade,
            concluida: false,
            dataCriacao: new Date(),
            dataAtualizacao: new Date()
        };

        this.tarefas.push(novaTarefa);
        return novaTarefa;
    },

    // Read - Obter tarefas
    obterTodasTarefas() {
        return [...this.tarefas]; // Retorna cópia do array
    },

    obterTarefaPorId(id) {
        return this.tarefas.find(tarefa => tarefa.id === id);
    },

    // Update - Atualizar tarefa
    atualizarTarefa(id, atualizacoes) {
        const indice = this.tarefas.findIndex(tarefa => tarefa.id === id);

        if (indice === -1) return false;

        this.tarefas[indice] = {
            ...this.tarefas[indice],
            ...atualizacoes,
            dataAtualizacao: new Date()
        };

        return this.tarefas[indice];
    },

    // Delete - Remover tarefa
    removerTarefa(id) {
        const indice = this.tarefas.findIndex(tarefa => tarefa.id === id);

        if (indice === -1) return false;

        const tarefaRemovida = this.tarefas[indice];
        this.tarefas.splice(indice, 1);

        return tarefaRemovida;
    },

    // Funcionalidades adicionais
    marcarComoConcluida(id) {
        return this.atualizarTarefa(id, { concluida: true });
    },

    filtrarPorPrioridade(prioridade) {
        return this.tarefas.filter(tarefa => tarefa.prioridade === prioridade);
    },

    buscarPorTitulo(termo) {
        return this.tarefas.filter(tarefa =>
            tarefa.titulo.toLowerCase().includes(termo.toLowerCase())
        );
    },

    ordenarPor(campo, crescente = true) {
        return [...this.tarefas].sort((a, b) => {
            if (a[campo] < b[campo]) return crescente ? -1 : 1;
            if (a[campo] > b[campo]) return crescente ? 1 : -1;
            return 0;
        });
    }
};

// Demonstração do gerenciador de tarefas
console.log("Demonstração do gerenciador de tarefas:");

// Adicionando tarefas
gerenciadorTarefas.adicionarTarefa("Estudar arrays em JavaScript", "Aprender métodos principais", "alta");
gerenciadorTarefas.adicionarTarefa("Implementar TaskMaster", "Criar interface básica", "alta");
gerenciadorTarefas.adicionarTarefa("Revisar documentação", "", "baixa");

// Listando todas as tarefas
console.log("\nTodas as tarefas:");
console.log(gerenciadorTarefas.obterTodasTarefas());

// Atualizando uma tarefa
const tarefasAtuais = gerenciadorTarefas.obterTodasTarefas();
const idParaAtualizar = tarefasAtuais[1].id;
gerenciadorTarefas.atualizarTarefa(idParaAtualizar, {
    titulo: "Implementar TaskMaster v2",
    descricao: "Versão melhorada com filtros"
});

// Marcando uma tarefa como concluída
const idParaConcluir = tarefasAtuais[0].id;
gerenciadorTarefas.marcarComoConcluida(idParaConcluir);

// Filtrando por prioridade
console.log("\nTarefas de alta prioridade:");
console.log(gerenciadorTarefas.filtrarPorPrioridade("alta"));

// Buscando por termo
console.log("\nBusca por 'implementar':");
console.log(gerenciadorTarefas.buscarPorTitulo("implementar"));

// Ordenando por título
console.log("\nTarefas ordenadas por título:");
console.log(gerenciadorTarefas.ordenarPor("titulo"));

// Removendo uma tarefa
const idParaRemover = tarefasAtuais[2].id;
console.log("\nRemovendo tarefa:");
console.log(gerenciadorTarefas.removerTarefa(idParaRemover));

// Lista final de tarefas
console.log("\nLista final de tarefas:");
console.log(gerenciadorTarefas.obterTodasTarefas());

// Exemplo 2: Agrupamento de tarefas por categoria
const tarefasCategorizadas = [
    { id: 1, titulo: "Estudar JavaScript", categoria: "estudo" },
    { id: 2, titulo: "Reunião com cliente", categoria: "trabalho" },
    { id: 3, titulo: "Comprar mantimentos", categoria: "pessoal" },
    { id: 4, titulo: "Revisar documentação", categoria: "estudo" },
    { id: 5, titulo: "Preparar apresentação", categoria: "trabalho" }
];

function agruparPorCategoria(tarefas) {
    const categorias = {};

    tarefas.forEach(tarefa => {
        // Se a categoria ainda não existe, cria um array vazio
        if (!categorias[tarefa.categoria]) {
            categorias[tarefa.categoria] = [];
        }

        // Adiciona a tarefa na categoria correspondente
        categorias[tarefa.categoria].push(tarefa);
    });

    return categorias;
}

const tarefasAgrupadas = agruparPorCategoria(tarefasCategorizadas);
console.log("\nTarefas agrupadas por categoria:");
console.log(tarefasAgrupadas);

// ----- Desafios para os Alunos -----
/*
1. Implemente uma função que encontre tarefas duplicadas (com o mesmo título) em um array.
2. Crie uma função que agrupe tarefas por mês de vencimento.
3. Implemente um sistema de tags para tarefas, permitindo que uma tarefa tenha múltiplas tags e seja pesquisável por elas.
4. Desenvolva uma função que crie um resumo semanal mostrando quantas tarefas foram concluídas e quantas foram adicionadas por dia.
*/