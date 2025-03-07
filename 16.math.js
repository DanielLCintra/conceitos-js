/**
 * TaskMaster - Demonstração do Objeto Math
 * Aula 16: Constantes matemáticas, arredondamento, números aleatórios e operações
 */

// ===== CONSTANTES MATEMÁTICAS =====
console.log("===== CONSTANTES MATEMÁTICAS =====");

// PI (π)
console.log("Math.PI:", Math.PI);
// Calculando a área de um círculo
const raio = 5;
const areaCirculo = Math.PI * Math.pow(raio, 2);
console.log(`Área de um círculo com raio ${raio}: ${areaCirculo}`);

// Euler's number (e)
console.log("Math.E:", Math.E);

// Outras constantes matemáticas
console.log("Math.SQRT2 (Raiz de 2):", Math.SQRT2);
console.log("Math.SQRT1_2 (1/√2):", Math.SQRT1_2);
console.log("Math.LN2 (Logaritmo natural de 2):", Math.LN2);
console.log("Math.LN10 (Logaritmo natural de 10):", Math.LN10);

// ===== MÉTODOS DE ARREDONDAMENTO =====
console.log("\n===== MÉTODOS DE ARREDONDAMENTO =====");

const numero = 9.7;
const numeroNegativo = -9.7;

// Math.round - Arredonda para o inteiro mais próximo
console.log(`Math.round(${numero}):`, Math.round(numero));
console.log(`Math.round(${numeroNegativo}):`, Math.round(numeroNegativo));

// Math.floor - Arredonda para baixo (menor inteiro)
console.log(`Math.floor(${numero}):`, Math.floor(numero));
console.log(`Math.floor(${numeroNegativo}):`, Math.floor(numeroNegativo));

// Math.ceil - Arredonda para cima (maior inteiro)
console.log(`Math.ceil(${numero}):`, Math.ceil(numero));
console.log(`Math.ceil(${numeroNegativo}):`, Math.ceil(numeroNegativo));

// Math.trunc - Remove a parte decimal (trunca)
console.log(`Math.trunc(${numero}):`, Math.trunc(numero));
console.log(`Math.trunc(${numeroNegativo}):`, Math.trunc(numeroNegativo));

// toFixed - Formata com número específico de casas decimais (retorna string)
const pi = Math.PI;
console.log(`${pi} com 2 casas decimais:`, pi.toFixed(2));
console.log(`${pi} com 4 casas decimais:`, pi.toFixed(4));

// Exemplo prático: calcular médias de prioridade
const tarefas = [
    { id: 1, titulo: "Tarefa 1", prioridade: 3 },
    { id: 2, titulo: "Tarefa 2", prioridade: 2 },
    { id: 3, titulo: "Tarefa 3", prioridade: 3 },
    { id: 4, titulo: "Tarefa 4", prioridade: 1 },
    { id: 5, titulo: "Tarefa 5", prioridade: 2 }
];

function calcularMediaPrioridade(tarefas) {
    if (tarefas.length === 0) return 0;

    const somaPrioridades = tarefas.reduce((total, tarefa) => total + tarefa.prioridade, 0);
    const media = somaPrioridades / tarefas.length;

    return Number(media.toFixed(1)); // Converte de volta para número com 1 casa decimal
}

console.log("Média de prioridades:", calcularMediaPrioridade(tarefas));

// ===== NÚMEROS ALEATÓRIOS =====
console.log("\n===== NÚMEROS ALEATÓRIOS =====");

// Math.random() - gera número aleatório entre 0 (inclusive) e 1 (exclusive)
console.log("Math.random():", Math.random());
console.log("Math.random():", Math.random());
console.log("Math.random():", Math.random());

// Função para gerar número aleatório em um intervalo
function numeroAleatorioEntre(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("Número aleatório entre 1 e 10:", numeroAleatorioEntre(1, 10));
console.log("Número aleatório entre 1 e 10:", numeroAleatorioEntre(1, 10));
console.log("Número aleatório entre 1 e 10:", numeroAleatorioEntre(1, 10));

// Gerar IDs aleatórios para tarefas
function gerarIdAleatorio() {
    return Date.now() + Math.floor(Math.random() * 1000);
}

console.log("ID aleatório para tarefa:", gerarIdAleatorio());
console.log("ID aleatório para tarefa:", gerarIdAleatorio());

// Selecionar tarefa aleatória
function selecionarTarefaAleatoria(tarefas) {
    const indiceAleatorio = Math.floor(Math.random() * tarefas.length);
    return tarefas[indiceAleatorio];
}

console.log("Tarefa selecionada aleatoriamente:", selecionarTarefaAleatoria(tarefas));

// Gerar dados aleatórios para demonstração
function gerarTarefaAleatoria() {
    const titulos = ["Estudar JavaScript", "Criar componentes", "Testar aplicação", "Revisar código", "Documentar projeto"];
    const prioridades = [1, 2, 3]; // 1=baixa, 2=média, 3=alta

    return {
        id: gerarIdAleatorio(),
        titulo: titulos[numeroAleatorioEntre(0, titulos.length - 1)],
        prioridade: prioridades[numeroAleatorioEntre(0, prioridades.length - 1)],
        concluida: Math.random() > 0.7 // 30% de chance de estar concluída
    };
}

console.log("Tarefa gerada aleatoriamente:", gerarTarefaAleatoria());

// ===== OPERAÇÕES MATEMÁTICAS =====
console.log("\n===== OPERAÇÕES MATEMÁTICAS =====");

// Valor absoluto
console.log("Math.abs(-10):", Math.abs(-10));

// Potenciação
console.log("Math.pow(2, 3):", Math.pow(2, 3)); // 2³ = 8
console.log("2 ** 3:", 2 ** 3); // Operador de exponenciação ES2016

// Raiz quadrada
console.log("Math.sqrt(16):", Math.sqrt(16));

// Máximo e mínimo
console.log("Math.max(5, 10, 3, 8):", Math.max(5, 10, 3, 8));
console.log("Math.min(5, 10, 3, 8):", Math.min(5, 10, 3, 8));

// Aplicando com array usando spread operator
const valores = [5, 10, 3, 8, 12];
console.log("Máximo do array:", Math.max(...valores));
console.log("Mínimo do array:", Math.min(...valores));

// Funções trigonométricas
console.log("Math.sin(0):", Math.sin(0));
console.log("Math.cos(Math.PI):", Math.cos(Math.PI));
console.log("Math.tan(Math.PI / 4):", Math.tan(Math.PI / 4));

// ===== EXEMPLOS PRÁTICOS PARA O TASKMASTER =====
console.log("\n===== EXEMPLOS PRÁTICOS PARA O TASKMASTER =====");

// 1. Estatísticas de tarefas
function calcularEstatisticas(tarefas) {
    if (tarefas.length === 0) {
        return {
            total: 0,
            concluidas: 0,
            percentualConcluido: 0,
            prioridadeMedia: 0
        };
    }

    const concluidas = tarefas.filter(t => t.concluida).length;
    const percentualConcluido = (concluidas / tarefas.length) * 100;

    // Arredonda para o inteiro mais próximo
    const percentualFormatado = Math.round(percentualConcluido);

    // Calcula a prioridade média
    const somaPrioridades = tarefas.reduce((total, t) => total + t.prioridade, 0);
    const prioridadeMedia = somaPrioridades / tarefas.length;

    return {
        total: tarefas.length,
        concluidas,
        percentualConcluido: percentualFormatado,
        prioridadeMedia: Number(prioridadeMedia.toFixed(1))
    };
}

// Tarefas de exemplo
const minhasTarefas = [
    { id: 1, titulo: "Estudar Math", prioridade: 3, concluida: true },
    { id: 2, titulo: "Implementar estatísticas", prioridade: 2, concluida: false },
    { id: 3, titulo: "Criar componentes", prioridade: 3, concluida: false },
    { id: 4, titulo: "Testar aplicação", prioridade: 1, concluida: false }
];

console.log("Estatísticas das tarefas:", calcularEstatisticas(minhasTarefas));

// 2. Distribuir tarefas em categorias
function distribuirTarefasEmCategorias(tarefas, numCategorias) {
    // Se não houver tarefas, retorne um array vazio
    if (tarefas.length === 0) return Array(numCategorias).fill([]);

    // Cria um array de categorias vazias
    const categorias = Array(numCategorias).fill().map(() => []);

    // Distribui cada tarefa em uma categoria
    tarefas.forEach(tarefa => {
        const indiceCategoria = Math.floor(Math.random() * numCategorias);
        categorias[indiceCategoria].push(tarefa);
    });

    return categorias;
}

const categorias = distribuirTarefasEmCategorias(minhasTarefas, 3);
console.log("Distribuição de tarefas em categorias:");
categorias.forEach((cat, index) => {
    console.log(`Categoria ${index + 1}: ${cat.length} tarefas`);
});

// 3. Gerar cor de fundo com base na prioridade
function gerarCorPrioridade(prioridade) {
    // Converte prioridade para um valor entre 0 e 1
    const valor = (prioridade - 1) / 2; // Assumindo que prioridade é 1, 2 ou 3

    // Gera cores do verde ao vermelho
    const r = Math.round(255 * valor);
    const g = Math.round(255 * (1 - valor));
    const b = 0;

    return `rgb(${r}, ${g}, ${b})`;
}

console.log("Cor para prioridade baixa (1):", gerarCorPrioridade(1));
console.log("Cor para prioridade média (2):", gerarCorPrioridade(2));
console.log("Cor para prioridade alta (3):", gerarCorPrioridade(3));

// 4. Implementar função para gerar ID único usando timestamp e número aleatório
function gerarIdUnico() {
    // Combina timestamp atual com um número aleatório entre 1000-9999
    return `${Date.now()}-${Math.floor(1000 + Math.random() * 9000)}`;
}

console.log("ID único para tarefa:", gerarIdUnico());
console.log("ID único para tarefa:", gerarIdUnico());