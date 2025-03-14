/**
 * TaskMaster - Aula sobre Variáveis e Tipos de Dados
 * Este arquivo demonstra os conceitos de variáveis e tipos de dados em JavaScript
 */

// ========================================
// AULA 5-6: VARIÁVEIS E TIPOS DE DADOS
// ========================================

// ----- Declaração de Variáveis -----

// Declaração com var (escopo de função)
var oldWay = "Forma antiga de declarar variáveis";

// Declaração com let (escopo de bloco, pode ser reatribuída)
let userName = "Maria";
userName = "João"; // Reatribuição permitida

// Declaração com const (escopo de bloco, não pode ser reatribuída)
const API_URL = "https://api.example.com/tasks";
// API_URL = "nova url"; // Geraria erro: Assignment to constant variable

// ----- Escopo de Variáveis -----

function demonstrarEscopo() {
    var funcScope = "Visível apenas dentro da função";

    if (true) {
        var varInsideBlock = "var não respeita bloco";
        let letInsideBlock = "let respeita bloco";
        console.log(letInsideBlock); // Acessível
    }

    console.log(varInsideBlock); // Acessível (var não respeita o escopo de bloco)
    // console.log(letInsideBlock); // Erro: letInsideBlock is not defined
}

// demonstrarEscopo(); // Descomente para executar

// ----- Tipos de Dados Primitivos -----

// String - textos
let taskTitle = "Estudar JavaScript";
let description = 'Aprender sobre variáveis';
let template = `Título: ${taskTitle}`; // Template string (ES6)

// Number - números
let priority = 1;
let progress = 75.5;
let infinity = Infinity;
let notANumber = NaN;

// Boolean - verdadeiro ou falso
let isCompleted = false;
let isImportant = true;

// Undefined - variável sem valor atribuído
let notDefined;

// Null - valor nulo intencional
let noValue = null;

// Symbol - valor único (ES6)
let uniqueId = Symbol("id");

// BigInt - números inteiros grandes (ES2020)
let bigNumber = 1234567890123456789012345678901234567890n;

// ----- Verificação de Tipos -----

console.log("---- Verificação de Tipos ----");
console.log(typeof taskTitle); // string
console.log(typeof priority); // number
console.log(typeof isCompleted); // boolean
console.log(typeof notDefined); // undefined
console.log(typeof noValue); // object (isso é um bug conhecido em JavaScript)
console.log(typeof uniqueId); // symbol
console.log(typeof bigNumber); // bigint

// ----- Conversão de Tipos -----

console.log("---- Conversão de Tipos ----");

// Conversão para String
let numToString = String(42); // "42"
let boolToString = String(true); // "true"
let numToString2 = 42 + ""; // Conversão implícita: "42"

// Conversão para Number
let stringToNum = Number("42"); // 42
let boolToNum = Number(true); // 1
let parseIntEx = parseInt("42.9"); // 42 (número inteiro)
let parseFloatEx = parseFloat("42.9"); // 42.9 (número decimal)

// Conversão para Boolean
let stringToBool = Boolean("hello"); // true (string não vazia)
let zeroToBool = Boolean(0); // false

// Valores falsy em JavaScript:
console.log("---- Valores Falsy ----");
console.log(Boolean("")); // string vazia
console.log(Boolean(0)); // zero
console.log(Boolean(null)); // null
console.log(Boolean(undefined)); // undefined
console.log(Boolean(NaN)); // NaN
console.log(Boolean(false)); // false

// ----- Tipos de Dados Complexos -----

// Object - objetos
let task = {
    id: 1,
    title: "Aprender JavaScript",
    completed: false,
    tags: ["estudo", "programação"],
    dueDate: new Date("2025-12-31"),
    assignee: {
        name: "João",
        email: "joao@example.com"
    },
    toggleComplete: function () {
        this.completed = !this.completed;
    }
};

// Acessando propriedades de objetos
console.log("---- Acessando Propriedades de Objetos ----");
console.log(task.title); // Notação de ponto
console.log(task["title"]); // Notação de colchetes
console.log(task.assignee.name); // Propriedades aninhadas
task.toggleComplete(); // Chamando um método
console.log(task.completed); // true

// Array - arrays
let tasks = [
    { id: 1, title: "Tarefa 1", completed: false },
    { id: 2, title: "Tarefa 2", completed: true },
    { id: 3, title: "Tarefa 3", completed: false }
];

// Acessando elementos de arrays
console.log("---- Acessando Elementos de Arrays ----");
console.log(tasks[0]); // Primeiro elemento
console.log(tasks[1].title); // Propriedade do segundo elemento
console.log(tasks.length); // Número de elementos

// Date - datas
let today = new Date();
let specificDate = new Date("2025-12-31");
let year = today.getFullYear();
let month = today.getMonth() + 1; // Meses começam do zero (0 = janeiro)

// RegExp - expressões regulares
let pattern = /^[a-z]+$/i;
let isOnlyLetters = pattern.test("JavaScript"); // true

// ----- Exemplos de uso no TaskMaster -----

// Estrutura de dados para uma tarefa
const createTask = (title, description, priority, dueDate) => {
    return {
        id: Date.now(), // ID baseado no timestamp
        title: title,
        description: description,
        priority: priority,
        dueDate: dueDate ? new Date(dueDate) : null,
        createdAt: new Date(),
        completed: false,

        // Métodos
        complete() {
            this.completed = true;
        },

        isOverdue() {
            if (!this.dueDate) return false;
            return !this.completed && this.dueDate < new Date();
        },

        toString() {
            return `${this.title} (${this.completed ? 'Concluída' : 'Pendente'})`;
        }
    };
};

// Criando algumas tarefas de exemplo
let task1 = createTask(
    "Estudar JavaScript",
    "Aprender sobre variáveis e tipos de dados",
    "alta",
    "2025-06-15"
);

let task2 = createTask(
    "Preparar apresentação",
    "Slides sobre arrays em JavaScript",
    "média",
    "2025-06-20"
);

// Array de tarefas
let taskList = [task1, task2];

// Demonstrando uso
console.log("---- Tarefas do TaskMaster ----");
console.log(task1.toString());
console.log(`Tarefa atrasada? ${task1.isOverdue() ? 'Sim' : 'Não'}`);

// Concluindo uma tarefa
task2.complete();
console.log(task2.toString());

// ----- Desafios para os alunos -----

/*
1. Modifique a função createTask para adicionar um valor padrão para o parâmetro priority ("média")

Resolução:
const createTask = (title, description, priority = "média", dueDate) => {
    return {
        id: Date.now(), // ID baseado no timestamp
        title: title,
        description: description,
        priority: priority,
        dueDate: dueDate ? new Date(dueDate) : null,
        createdAt: new Date(),
        completed: false,

        // Métodos
        complete() {
            this.completed = true;
        },

        isOverdue() {
            if (!this.dueDate) return false;
            return !this.completed && this.dueDate < new Date();
        },

        toString() {
            return `${this.title} (${this.completed ? 'Concluída' : 'Pendente'})`;
        }
    };
};

2. Crie uma função simples que verifica se uma tarefa tem prazo definido

Resolução:
const hasDeadline = (task) => {
    return task.dueDate !== null;
};

// Exemplo de uso:
console.log(`A tarefa tem prazo? ${hasDeadline(task1) ? 'Sim' : 'Não'}`);

3. Modifique o método toString() para incluir a prioridade da tarefa

Resolução:
// No objeto retornado pela função createTask:
toString() {
    return `${this.title} (${this.completed ? 'Concluída' : 'Pendente'}) - Prioridade: ${this.priority}`;
}

4. Crie uma função que recebe uma tarefa e retorna uma string dizendo se ela está concluída ou pendente

Resolução:
const getTaskStatus = (task) => {
    if (task.completed) {
        return "A tarefa está concluída!";
    } else {
        return "A tarefa ainda está pendente.";
    }
};

// Exemplo de uso:
console.log(getTaskStatus(task1));
console.log(getTaskStatus(task2));
*/