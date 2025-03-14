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

// ----- Exercícios Práticos -----
/*
EXERCÍCIO 1:
Crie uma função que gere um número aleatório entre 1 e 100.

Resolução:
function gerarNumeroAleatorio() {
    // Math.random() gera número entre 0 (inclusive) e 1 (exclusive)
    // Multiplicamos por 100 para ter um número entre 0 e 99.99999...
    // Math.floor arredonda para baixo, obtendo 0 a 99
    // Adicionamos 1 para ter um número entre 1 e 100
    return Math.floor(Math.random() * 100) + 1;
}

console.log("Número aleatório entre 1 e 100:", gerarNumeroAleatorio());
console.log("Número aleatório entre 1 e 100:", gerarNumeroAleatorio());
console.log("Número aleatório entre 1 e 100:", gerarNumeroAleatorio());
*/

/*
EXERCÍCIO 2:
Calcule a área de um círculo com base em seu raio usando Math.PI.
Crie uma função que receba o raio como parâmetro e retorne a área.

Resolução:
function calcularAreaCirculo(raio) {
    if (raio < 0) {
        return "O raio não pode ser negativo";
    }
    
    // Fórmula da área do círculo: A = π * r²
    const area = Math.PI * Math.pow(raio, 2);
    
    // Arredonda para 2 casas decimais
    return Number(area.toFixed(2));
}

console.log("Área do círculo com raio 5:", calcularAreaCirculo(5));
console.log("Área do círculo com raio 7.5:", calcularAreaCirculo(7.5));
console.log("Área do círculo com raio 10:", calcularAreaCirculo(10));
*/

/*
EXERCÍCIO 3:
Crie uma função que arredonde um número para o número específico de casas decimais.

Resolução:
function arredondar(numero, casasDecimais = 2) {
    // Verificar se o número de casas decimais é não-negativo
    if (casasDecimais < 0) {
        return "O número de casas decimais não pode ser negativo";
    }
    
    // Usar toFixed para formatar o número e depois converter de volta para número
    return Number(numero.toFixed(casasDecimais));
}

console.log("Pi arredondado para 2 casas:", arredondar(Math.PI, 2)); // 3.14
console.log("Pi arredondado para 4 casas:", arredondar(Math.PI, 4)); // 3.1416
console.log("Pi arredondado para 0 casas:", arredondar(Math.PI, 0)); // 3
*/

/*
EXERCÍCIO 4:
Use Math.max e Math.min para encontrar o maior e o menor número em um conjunto de valores.
Crie uma função que receba um array de números e retorne um objeto com o maior e o menor valor.

Resolução:
function encontrarMaiorEMenor(numeros) {
    if (!numeros || numeros.length === 0) {
        return { maior: null, menor: null };
    }
    
    return {
        maior: Math.max(...numeros),
        menor: Math.min(...numeros)
    };
}

const meusNumeros = [15, 7, 23, 42, 8, 19, 3];
console.log("Maior e menor número:", encontrarMaiorEMenor(meusNumeros));
*/

/*
EXERCÍCIO 5:
Crie uma função que gere uma senha aleatória com um comprimento especificado.
A senha deve conter apenas números.

Resolução:
function gerarSenhaAleatoria(comprimento = 6) {
    if (comprimento <= 0) {
        return "O comprimento da senha deve ser positivo";
    }
    
    let senha = "";
    for (let i = 0; i < comprimento; i++) {
        // Gerar um dígito aleatório (0-9)
        const digito = Math.floor(Math.random() * 10);
        senha += digito;
    }
    
    return senha;
}

console.log("Senha aleatória de 4 dígitos:", gerarSenhaAleatoria(4));
console.log("Senha aleatória de 6 dígitos:", gerarSenhaAleatoria(6));
console.log("Senha aleatória de 8 dígitos:", gerarSenhaAleatoria(8));
*/

/*
EXERCÍCIO 6:
Crie uma função que gere uma cor RGB aleatória.
A função deve retornar uma string no formato "rgb(r, g, b)".

Resolução:
function gerarCorAleatoria() {
    // Gerar componentes R, G e B aleatórios (0-255)
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    
    return `rgb(${r}, ${g}, ${b})`;
}

console.log("Cor aleatória 1:", gerarCorAleatoria());
console.log("Cor aleatória 2:", gerarCorAleatoria());
console.log("Cor aleatória 3:", gerarCorAleatoria());
*/