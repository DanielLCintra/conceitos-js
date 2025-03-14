/**
 * TaskMaster - Aula sobre Estruturas de Decisão
 * Este arquivo demonstra as diferentes estruturas condicionais em JavaScript
 */

// ========================================
// AULA 9-10: ESTRUTURAS DE DECISÃO
// ========================================

// ----- Estrutura if simples -----
console.log("---- Estrutura if simples ----");

let tarefaConcluida = true;

if (tarefaConcluida) {
    console.log("A tarefa foi concluída com sucesso!");
}

// ----- Estrutura if/else -----
console.log("\n---- Estrutura if/else ----");

let statusTarefa = "pendente";

if (statusTarefa === "concluída") {
    console.log("Parabéns por concluir a tarefa!");
} else {
    console.log("A tarefa ainda está pendente.");
}

// ----- Estrutura if/else if/else -----
console.log("\n---- Estrutura if/else if/else ----");

let prioridade = 2; // 1: baixa, 2: média, 3: alta

if (prioridade === 1) {
    console.log("Esta tarefa tem baixa prioridade.");
} else if (prioridade === 2) {
    console.log("Esta tarefa tem média prioridade.");
} else if (prioridade === 3) {
    console.log("Esta tarefa tem alta prioridade.");
} else {
    console.log("Prioridade desconhecida.");
}

// ----- Condicionais aninhados -----
console.log("\n---- Condicionais aninhados ----");

let tarefa = {
    titulo: "Estudar JavaScript",
    concluida: false,
    prazo: new Date("2025-12-31"),
    prioridade: "alta"
};

let hoje = new Date();

if (!tarefa.concluida) {
    console.log(`A tarefa "${tarefa.titulo}" está pendente.`);

    if (tarefa.prazo < hoje) {
        console.log("ATENÇÃO: O prazo já expirou!");
    } else {
        let diasRestantes = Math.floor((tarefa.prazo - hoje) / (1000 * 60 * 60 * 24));

        if (diasRestantes <= 7) {
            console.log(`ALERTA: Faltam apenas ${diasRestantes} dias para o prazo.`);
        } else {
            console.log(`Você ainda tem ${diasRestantes} dias para concluir.`);
        }
    }
} else {
    console.log(`A tarefa "${tarefa.titulo}" já foi concluída.`);
}

// ----- Operador ternário -----
console.log("\n---- Operador ternário ----");

let pontos = 85;
let resultado = pontos >= 60 ? "Aprovado" : "Reprovado";
console.log(`Resultado: ${resultado}`);

// Operador ternário com múltiplas condições
let faixaEtaria = idade => {
    return idade < 12 ? "Criança"
        : idade < 18 ? "Adolescente"
            : idade < 60 ? "Adulto"
                : "Idoso";
};

console.log(`Faixa etária (16 anos): ${faixaEtaria(16)}`);
console.log(`Faixa etária (42 anos): ${faixaEtaria(42)}`);

// Ternário para atribuição de valores
let mensagem = tarefa.concluida
    ? "Tarefa já concluída!"
    : `Tarefa pendente. Prioridade: ${tarefa.prioridade}`;
console.log(mensagem);

// ----- Switch case -----
console.log("\n---- Switch case ----");

let diaSemana = new Date().getDay(); // 0: Domingo, 1: Segunda, ...

switch (diaSemana) {
    case 0:
        console.log("Hoje é Domingo");
        break;
    case 1:
        console.log("Hoje é Segunda-feira");
        break;
    case 2:
        console.log("Hoje é Terça-feira");
        break;
    case 3:
        console.log("Hoje é Quarta-feira");
        break;
    case 4:
        console.log("Hoje é Quinta-feira");
        break;
    case 5:
        console.log("Hoje é Sexta-feira");
        break;
    case 6:
        console.log("Hoje é Sábado");
        break;
    default:
        console.log("Dia inválido");
        break;
}

// Switch sem break (cuidado!)
console.log("\n---- Switch sem break ----");

let nivelPermissao = 2; // 1: básico, 2: intermediário, 3: administrador
let permissoes = [];

switch (nivelPermissao) {
    case 3:
        permissoes.push("Excluir usuários");
    // Sem break, executa o case abaixo também
    case 2:
        permissoes.push("Criar projetos");
    // Sem break, executa o case abaixo também
    case 1:
        permissoes.push("Ver tarefas");
        permissoes.push("Editar próprias tarefas");
        break;
    default:
        permissoes.push("Acesso negado");
}

console.log("Permissões:", permissoes);

// Switch com múltiplos cases
console.log("\n---- Switch com múltiplos cases ----");

let mes = new Date().getMonth(); // 0: Janeiro, 1: Fevereiro, ...
let estacao;

switch (mes) {
    case 11:
    case 0:
    case 1:
        estacao = "Verão";
        break;
    case 2:
    case 3:
    case 4:
        estacao = "Outono";
        break;
    case 5:
    case 6:
    case 7:
        estacao = "Inverno";
        break;
    case 8:
    case 9:
    case 10:
        estacao = "Primavera";
        break;
    default:
        estacao = "Mês inválido";
}

console.log(`Estamos no(a) ${estacao}.`);

// ----- Avaliação de curto-circuito -----
console.log("\n---- Avaliação de curto-circuito ----");

// OR (||) como condicional - retorna o primeiro valor verdadeiro
let nomeUsuario = ""; // Valor falsy
let nomeExibicao = nomeUsuario || "Usuário Anônimo";
console.log(`Nome de exibição: ${nomeExibicao}`);

// AND (&&) como condicional - retorna o último valor se todos forem verdadeiros
let usuarioLogado = true;
let exibirMensagem = usuarioLogado && "Bem-vindo de volta!";
console.log(exibirMensagem);

// Combinação de operadores lógicos
let usuario = {
    nome: "João",
    admin: false
};

let mensagemAdmin = usuario.admin && "Você tem acesso administrativo" || "Acesso limitado";
console.log(mensagemAdmin);

// ----- Exemplos Práticos no TaskMaster -----
console.log("\n---- Exemplos Práticos no TaskMaster ----");

// Exemplo 1: Validação de dados de uma tarefa
const validarTarefa = (tarefa) => {
    // Verifica se título está presente e tem tamanho adequado
    if (!tarefa.titulo) {
        return "Erro: O título da tarefa é obrigatório.";
    } else if (tarefa.titulo.length < 3) {
        return "Erro: O título deve ter pelo menos 3 caracteres.";
    } else if (tarefa.titulo.length > 50) {
        return "Erro: O título deve ter no máximo 50 caracteres.";
    }

    // Verifica prioridade
    if (tarefa.prioridade) {
        let prioridadesValidas = ["baixa", "média", "alta"];

        if (!prioridadesValidas.includes(tarefa.prioridade.toLowerCase())) {
            return "Erro: Prioridade inválida. Use 'baixa', 'média' ou 'alta'.";
        }
    }

    // Verifica prazo (se existir)
    if (tarefa.prazo) {
        let dataPrazo = new Date(tarefa.prazo);

        if (isNaN(dataPrazo.getTime())) {
            return "Erro: Data do prazo inválida.";
        }

        let hoje = new Date();

        if (dataPrazo < hoje) {
            return "Alerta: O prazo definido está no passado.";
        }
    }

    // Se passar em todas as validações
    return "Tarefa válida";
};

console.log(validarTarefa({ titulo: "Es" }));
console.log(validarTarefa({ titulo: "Estudar JavaScript", prioridade: "URGENTE" }));
console.log(validarTarefa({ titulo: "Estudar JavaScript", prioridade: "alta", prazo: "2023-01-01" }));
console.log(validarTarefa({ titulo: "Estudar JavaScript", prioridade: "alta", prazo: "2025-12-31" }));

// Exemplo 2: Classificação de tarefas por prioridade e prazo
const classificarTarefa = (tarefa) => {
    let hoje = new Date();
    let prazo = tarefa.prazo ? new Date(tarefa.prazo) : null;
    let diasRestantes = prazo ? Math.floor((prazo - hoje) / (1000 * 60 * 60 * 24)) : null;

    // Se já está concluída
    if (tarefa.concluida) {
        return "Concluída";
    }

    // Se o prazo já passou
    if (prazo && diasRestantes < 0) {
        return "Atrasada";
    }

    // Classificação baseada na prioridade e prazo
    switch (tarefa.prioridade.toLowerCase()) {
        case "alta":
            if (diasRestantes !== null && diasRestantes <= 3) {
                return "Crítica";
            }
            return "Urgente";

        case "média":
            if (diasRestantes !== null && diasRestantes <= 2) {
                return "Urgente";
            } else if (diasRestantes !== null && diasRestantes <= 7) {
                return "Importante";
            }
            return "Normal";

        case "baixa":
            if (diasRestantes !== null && diasRestantes <= 1) {
                return "Importante";
            }
            return "Rotineira";

        default:
            return "Não classificada";
    }
};

let tarefas = [
    { titulo: "Reunião com cliente", concluida: false, prioridade: "alta", prazo: "2025-06-05" },
    { titulo: "Entregar relatório", concluida: false, prioridade: "média", prazo: "2025-06-15" },
    { titulo: "Atualizar documentação", concluida: false, prioridade: "baixa", prazo: "2025-06-30" },
    { titulo: "Preparar apresentação", concluida: true, prioridade: "alta", prazo: "2025-06-02" }
];

tarefas.forEach(tarefa => {
    console.log(`${tarefa.titulo}: ${classificarTarefa(tarefa)}`);
});

// Exemplo 3: Sistema de permissões baseado em função do usuário
const verificarPermissao = (usuario, acao) => {
    // Define as permissões baseadas na função
    const permissoesPorFuncao = {
        admin: ["criar", "ler", "atualizar", "deletar", "gerenciar_usuarios"],
        gerente: ["criar", "ler", "atualizar", "deletar"],
        editor: ["criar", "ler", "atualizar"],
        autor: ["criar", "ler", "atualizar_proprios"],
        leitor: ["ler"]
    };

    // Verifica se a função do usuário existe
    if (!permissoesPorFuncao[usuario.funcao]) {
        return false;
    }

    // Verifica se a função tem permissão para a ação
    return permissoesPorFuncao[usuario.funcao].includes(acao);
};

let usuarioAdmin = { nome: "Alice", funcao: "admin" };
let usuarioLeitor = { nome: "Bob", funcao: "leitor" };

console.log(`${usuarioAdmin.nome} pode deletar? ${verificarPermissao(usuarioAdmin, "deletar") ? "Sim" : "Não"}`);
console.log(`${usuarioLeitor.nome} pode deletar? ${verificarPermissao(usuarioLeitor, "deletar") ? "Sim" : "Não"}`);
console.log(`${usuarioLeitor.nome} pode ler? ${verificarPermissao(usuarioLeitor, "ler") ? "Sim" : "Não"}`);

// ----- Exercícios para os Alunos -----
/*
EXERCÍCIO 1:
Crie uma função que verifique se uma pessoa é maior de idade.
A função deve receber a idade como parâmetro e retornar true ou false.

Resolução:
function verificarMaiorIdade(idade) {
    if (idade >= 18) {
        return true;
    } else {
        return false;
    }
    
    // Versão simplificada:
    // return idade >= 18;
}

console.log("15 anos é maior de idade?", verificarMaiorIdade(15)); // false
console.log("18 anos é maior de idade?", verificarMaiorIdade(18)); // true
console.log("25 anos é maior de idade?", verificarMaiorIdade(25)); // true
*/

/*
EXERCÍCIO 2:
Crie uma função que classifique uma nota de 0 a 10 como:
"Ruim" (0-4), "Regular" (5-6), "Bom" (7-8) ou "Excelente" (9-10).
Retorne "Nota inválida" para valores fora do intervalo 0-10.

Resolução:
function classificarNota(nota) {
    if (nota < 0 || nota > 10) {
        return "Nota inválida";
    } else if (nota >= 0 && nota <= 4) {
        return "Ruim";
    } else if (nota >= 5 && nota <= 6) {
        return "Regular";
    } else if (nota >= 7 && nota <= 8) {
        return "Bom";
    } else { // nota entre 9 e 10
        return "Excelente";
    }
}

console.log("Classificação da nota 3:", classificarNota(3));   // Ruim
console.log("Classificação da nota 5:", classificarNota(5));   // Regular
console.log("Classificação da nota 7:", classificarNota(7));   // Bom
console.log("Classificação da nota 10:", classificarNota(10)); // Excelente
console.log("Classificação da nota 12:", classificarNota(12)); // Nota inválida
*/

/*
EXERCÍCIO 3:
Crie uma função que, dado o dia da semana como número (1-7, onde 1 é segunda e 7 é domingo),
retorne o nome do dia em português.

Resolução:
function obterDiaSemana(dia) {
    switch (dia) {
        case 1:
            return "Segunda-feira";
        case 2:
            return "Terça-feira";
        case 3:
            return "Quarta-feira";
        case 4:
            return "Quinta-feira";
        case 5:
            return "Sexta-feira";
        case 6:
            return "Sábado";
        case 7:
            return "Domingo";
        default:
            return "Dia inválido";
    }
}

console.log("Dia 1:", obterDiaSemana(1)); // Segunda-feira
console.log("Dia 5:", obterDiaSemana(5)); // Sexta-feira
console.log("Dia 7:", obterDiaSemana(7)); // Domingo
console.log("Dia 9:", obterDiaSemana(9)); // Dia inválido
*/

/*
EXERCÍCIO 4:
Use o operador ternário para criar uma função que verifica se um usuário está logado
e retorna "Bem-vindo, [nome]" se estiver logado, ou "Faça login para continuar" caso contrário.

Resolução:
function mensagemBemVindo(usuario) {
    return usuario.logado ? `Bem-vindo, ${usuario.nome}` : "Faça login para continuar";
}

const usuario1 = { nome: "Maria", logado: true };
const usuario2 = { nome: "João", logado: false };

console.log(mensagemBemVindo(usuario1)); // Bem-vindo, Maria
console.log(mensagemBemVindo(usuario2)); // Faça login para continuar
*/

/*
EXERCÍCIO 5:
Crie uma função que verifica o status de uma tarefa baseado em duas propriedades:
concluida (booleano) e prazo (data).
A função deve retornar: "Concluída", "Atrasada", "Em dia" ou "Prazo não definido".

Resolução:
function verificarStatusTarefa(tarefa) {
    // Se não tem prazo definido
    if (!tarefa.prazo) {
        return "Prazo não definido";
    }
    
    // Se a tarefa já foi concluída
    if (tarefa.concluida) {
        return "Concluída";
    }
    
    // Verifica se está atrasada
    const hoje = new Date();
    const prazoDaTarefa = new Date(tarefa.prazo);
    
    if (prazoDaTarefa < hoje) {
        return "Atrasada";
    } else {
        return "Em dia";
    }
}

// Exemplos de uso
const tarefa1 = { titulo: "Estudar JS", concluida: true, prazo: "2025-06-01" };
const tarefa2 = { titulo: "Fazer exercícios", concluida: false, prazo: "2023-01-01" };
const tarefa3 = { titulo: "Revisar código", concluida: false, prazo: "2025-12-31" };
const tarefa4 = { titulo: "Organizar tarefas", concluida: false, prazo: null };

console.log("Status da tarefa 1:", verificarStatusTarefa(tarefa1)); // Concluída
console.log("Status da tarefa 2:", verificarStatusTarefa(tarefa2)); // Atrasada
console.log("Status da tarefa 3:", verificarStatusTarefa(tarefa3)); // Em dia
console.log("Status da tarefa 4:", verificarStatusTarefa(tarefa4)); // Prazo não definido
*/