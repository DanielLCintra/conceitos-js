/**
 * TaskMaster - Aula sobre Operadores
 * Este arquivo demonstra os diferentes tipos de operadores em JavaScript
 */

// ========================================
// AULA 7-8: OPERADORES EM JAVASCRIPT
// ========================================

// ----- Operadores Aritméticos -----
console.log("---- Operadores Aritméticos ----");

let a = 10;
let b = 3;

// Operações básicas
let soma = a + b;         // 13
let subtracao = a - b;    // 7
let multiplicacao = a * b; // 30
let divisao = a / b;      // 3.3333...
let modulo = a % b;       // 1 (resto da divisão)
let exponenciacao = a ** b; // 1000 (10³)

console.log(`Soma: ${soma}`);
console.log(`Subtração: ${subtracao}`);
console.log(`Multiplicação: ${multiplicacao}`);
console.log(`Divisão: ${divisao}`);
console.log(`Módulo: ${modulo}`);
console.log(`Exponenciação: ${exponenciacao}`);

// ----- Operadores de Incremento e Decremento -----
console.log("\n---- Operadores de Incremento e Decremento ----");

let contador = 0;

// Pré-incremento: incrementa e depois retorna
let preIncremento = ++contador; // contador = 1, preIncremento = 1
console.log(`Pré-incremento: contador = ${contador}, resultado = ${preIncremento}`);

// Pós-incremento: retorna e depois incrementa
contador = 0; // Resetando contador
let posIncremento = contador++; // posIncremento = 0, contador = 1
console.log(`Pós-incremento: contador = ${contador}, resultado = ${posIncremento}`);

// Pré-decremento: decrementa e depois retorna
contador = 2; // Definindo contador
let preDecremento = --contador; // contador = 1, preDecremento = 1
console.log(`Pré-decremento: contador = ${contador}, resultado = ${preDecremento}`);

// Pós-decremento: retorna e depois decrementa
contador = 2; // Resetando contador
let posDecremento = contador--; // posDecremento = 2, contador = 1
console.log(`Pós-decremento: contador = ${contador}, resultado = ${posDecremento}`);

// ----- Operadores de Atribuição -----
console.log("\n---- Operadores de Atribuição ----");

let x = 10;
console.log(`Valor inicial: ${x}`);

x += 5;  // x = x + 5 -> 15
console.log(`Após x += 5: ${x}`);

x -= 3;  // x = x - 3 -> 12
console.log(`Após x -= 3: ${x}`);

x *= 2;  // x = x * 2 -> 24
console.log(`Após x *= 2: ${x}`);

x /= 4;  // x = x / 4 -> 6
console.log(`Após x /= 4: ${x}`);

x %= 4;  // x = x % 4 -> 2
console.log(`Após x %= 4: ${x}`);

x **= 3; // x = x ** 3 -> 8
console.log(`Após x **= 3: ${x}`);

// ----- Operadores Relacionais (Comparação) -----
console.log("\n---- Operadores Relacionais ----");

a = 10;
b = 5;
let c = "10";

// Operadores de comparação tradicionais
console.log(`a > b: ${a > b}`);   // true
console.log(`a < b: ${a < b}`);   // false
console.log(`a >= b: ${a >= b}`); // true
console.log(`a <= b: ${a <= b}`); // false

// Operadores de igualdade
console.log(`a == b: ${a == b}`);   // false (valores diferentes)
console.log(`a == c: ${a == c}`);   // true (valores iguais, tipos diferentes)
console.log(`a === c: ${a === c}`); // false (valores iguais, mas tipos diferentes)
console.log(`a != b: ${a != b}`);   // true (valores diferentes)
console.log(`a !== c: ${a !== c}`); // true (mesmo valor, mas tipos diferentes)

// ----- Operadores Lógicos -----
console.log("\n---- Operadores Lógicos ----");

let verdadeiro = true;
let falso = false;

// AND lógico (&&): retorna true se ambos os operandos forem true
console.log(`verdadeiro && verdadeiro: ${verdadeiro && verdadeiro}`); // true
console.log(`verdadeiro && falso: ${verdadeiro && falso}`);          // false
console.log(`falso && falso: ${falso && falso}`);                    // false

// OR lógico (||): retorna true se pelo menos um operando for true
console.log(`verdadeiro || verdadeiro: ${verdadeiro || verdadeiro}`); // true
console.log(`verdadeiro || falso: ${verdadeiro || falso}`);          // true
console.log(`falso || falso: ${falso || falso}`);                    // false

// NOT lógico (!): inverte o valor de verdade
console.log(`!verdadeiro: ${!verdadeiro}`); // false
console.log(`!falso: ${!falso}`);          // true

// ----- Operador Ternário -----
console.log("\n---- Operador Ternário ----");

let idade = 18;
let status = idade >= 18 ? "Adulto" : "Menor de idade";
console.log(`Status baseado na idade: ${status}`);

// Exemplo aninhado (não recomendado - difícil leitura)
let faixaEtaria = idade < 12 ? "Criança" : idade < 18 ? "Adolescente" : idade < 60 ? "Adulto" : "Idoso";
console.log(`Faixa etária: ${faixaEtaria}`);

// ----- Operadores de Coalescência Nula (??) -----
console.log("\n---- Operador de Coalescência Nula ----");

// Retorna o valor à direita quando o valor à esquerda é null ou undefined
let valor1 = null;
let valor2 = undefined;
let valor3 = 0;  // 0 é um valor válido, não null nem undefined
let valor4 = "";  // String vazia é um valor válido
let valor5 = false;  // false é um valor válido

let resultado1 = valor1 ?? "Valor padrão"; // "Valor padrão"
let resultado2 = valor2 ?? "Valor padrão"; // "Valor padrão"
let resultado3 = valor3 ?? "Valor padrão"; // 0
let resultado4 = valor4 ?? "Valor padrão"; // ""
let resultado5 = valor5 ?? "Valor padrão"; // false

console.log(`valor1 ?? "Valor padrão": ${resultado1}`);
console.log(`valor2 ?? "Valor padrão": ${resultado2}`);
console.log(`valor3 ?? "Valor padrão": ${resultado3}`);
console.log(`valor4 ?? "Valor padrão": ${resultado4}`);
console.log(`valor5 ?? "Valor padrão": ${resultado5}`);

// ----- Operador de Encadeamento Opcional (?.) -----
console.log("\n---- Operador de Encadeamento Opcional ----");

// Permite ler propriedades aninhadas sem erro se alguma for undefined ou null
let usuario = {
    nome: "João",
    endereco: {
        rua: "Av. Principal",
        numero: 123
    }
};

let usuarioSemEndereco = {
    nome: "Maria"
};

// Com encadeamento opcional
let ruaJoao = usuario?.endereco?.rua; // "Av. Principal"
let ruaMaria = usuarioSemEndereco?.endereco?.rua; // undefined (sem erro)

console.log(`Rua do João: ${ruaJoao}`);
console.log(`Rua da Maria: ${ruaMaria}`);

// Sem encadeamento opcional causaria erro:
// let ruaMariaErro = usuarioSemEndereco.endereco.rua; // TypeError

// ----- Operador Spread (...) -----
console.log("\n---- Operador Spread ----");

// Em arrays
let numeros1 = [1, 2, 3];
let numeros2 = [4, 5, 6];
let todoNumeros = [...numeros1, ...numeros2]; // [1, 2, 3, 4, 5, 6]
console.log("Array combinado com spread:", todoNumeros);

// Cópia de arrays (cópia superficial)
let original = [1, 2, 3];
let copia = [...original];
copia.push(4); // Não afeta o array original
console.log("Original:", original);
console.log("Cópia modificada:", copia);

// Em objetos
let pessoa = {
    nome: "Ana",
    idade: 30
};

let pessoaComEndereco = {
    ...pessoa, // Copia todas as propriedades de pessoa
    endereco: "Rua das Flores, 123"
};

console.log("Objeto combinado com spread:", pessoaComEndereco);

// Substituição de propriedades
let configuracaoPadrao = {
    tema: "claro",
    fonte: "Arial",
    tamanho: 12
};

let preferenciasUsuario = {
    ...configuracaoPadrao,
    tema: "escuro" // Substitui o tema
};

console.log("Configuração com preferências:", preferenciasUsuario);

// ----- Operadores Bit a Bit -----
console.log("\n---- Operadores Bit a Bit ----");
// Menos comuns em desenvolvimento web frontend, mas úteis em alguns casos

let num1 = 5;  // 101 em binário
let num2 = 3;  // 011 em binário

console.log(`AND bit a bit (5 & 3): ${num1 & num2}`);   // 1 (001 em binário)
console.log(`OR bit a bit (5 | 3): ${num1 | num2}`);    // 7 (111 em binário)
console.log(`XOR bit a bit (5 ^ 3): ${num1 ^ num2}`);   // 6 (110 em binário)
console.log(`NOT bit a bit (~5): ${~num1}`);            // -6 (inverte todos os bits e soma 1)
console.log(`Deslocamento à esquerda (5 << 1): ${num1 << 1}`); // 10 (1010 em binário)
console.log(`Deslocamento à direita (5 >> 1): ${num1 >> 1}`);  // 2 (010 em binário)

// ----- Exemplos Práticos no TaskMaster -----
console.log("\n---- Exemplos Práticos no TaskMaster ----");

// 1. Calculando estatísticas de tarefas
let tarefas = [
    { id: 1, titulo: "Estudar JavaScript", concluida: true, prioridade: 3 },
    { id: 2, titulo: "Criar projeto", concluida: false, prioridade: 2 },
    { id: 3, titulo: "Preparar apresentação", concluida: false, prioridade: 1 },
    { id: 4, titulo: "Revisar código", concluida: true, prioridade: 3 }
];

// Contando tarefas concluídas
let totalTarefas = tarefas.length;
let tarefasConcluidas = tarefas.filter(tarefa => tarefa.concluida).length;
let percentualConcluido = (tarefasConcluidas / totalTarefas) * 100;

console.log(`Total de tarefas: ${totalTarefas}`);
console.log(`Tarefas concluídas: ${tarefasConcluidas}`);
console.log(`Percentual concluído: ${percentualConcluido.toFixed(1)}%`);

// 2. Verificação de tarefas atrasadas
let hoje = new Date();
let dataLimite = new Date("2025-06-30");
let diasRestantes = Math.floor((dataLimite - hoje) / (1000 * 60 * 60 * 24));
let status = diasRestantes < 0 ? "Atrasada" : diasRestantes === 0 ? "Vence hoje" : `${diasRestantes} dias restantes`;

console.log(`Status da tarefa: ${status}`);

// 3. Mesclando dados de tarefas
let tarefaOriginal = {
    id: 5,
    titulo: "Implementar autenticação",
    descricao: "Adicionar login e registro",
    prioridade: 2
};

let atualizacoes = {
    descricao: "Implementar login, registro e recuperação de senha",
    responsavel: "Carlos",
    prazo: "2025-07-15"
};

let tarefaAtualizada = {
    ...tarefaOriginal,
    ...atualizacoes,
    ultimaAtualizacao: new Date()
};

console.log("Tarefa mesclada:", tarefaAtualizada);

// 4. Filtrando tarefas por critérios
let filtrarTarefas = (tarefas, { concluida, prioridadeMinima } = {}) => {
    return tarefas.filter(tarefa => {
        // Se concluida é undefined, não filtra por esse critério
        let passaConcluida = concluida === undefined || tarefa.concluida === concluida;

        // Se prioridadeMinima é undefined, não filtra por esse critério
        let passaPrioridade = prioridadeMinima === undefined || tarefa.prioridade >= prioridadeMinima;

        return passaConcluida && passaPrioridade;
    });
};

let tarefasImportantes = filtrarTarefas(tarefas, { prioridadeMinima: 3 });
let tarefasPendentes = filtrarTarefas(tarefas, { concluida: false });
let tarefasImportantesPendentes = filtrarTarefas(tarefas, { concluida: false, prioridadeMinima: 2 });

console.log("Tarefas importantes:", tarefasImportantes);
console.log("Tarefas pendentes:", tarefasPendentes);
console.log("Tarefas importantes pendentes:", tarefasImportantesPendentes);

// ----- Desafios para os Alunos -----
/*
1. Escreva uma função que calcula a prioridade média das tarefas.
2. Implemente uma função para ordenar tarefas por prioridade (decrescente) e, em caso de empate, por título (alfabético).
3. Crie uma função que use operadores lógicos para verificar se uma tarefa precisa de atenção (não concluída e alta prioridade ou prazo próximo).
4. Implemente uma função que use o operador spread para mesclar várias listas de tarefas, garantindo que IDs duplicados sejam resolvidos.
*/