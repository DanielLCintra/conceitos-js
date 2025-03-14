/**
 * TaskMaster - Demonstração de Funções
 * Aulas 24-26: Declaração, arrow functions, escopo, funções de ordem superior e padrões funcionais
 */

// ===== AULA 24: DECLARAÇÃO E CHAMADA DE FUNÇÕES =====
console.log("===== DECLARAÇÃO E CHAMADA DE FUNÇÕES =====");

// Declaração de função (function declaration)
function saudar(nome) {
    return `Olá, ${nome}! Bem-vindo ao TaskMaster.`;
}

// Chamada da função
const mensagem = saudar("Maria");
console.log(mensagem);

// Expressão de função (function expression)
const despedir = function (nome) {
    return `Até logo, ${nome}! Volte sempre ao TaskMaster.`;
};

console.log(despedir("João"));

// Diferença entre declaração e expressão: hoisting
console.log(somarDeclarada(5, 3)); // Funciona devido ao hoisting

function somarDeclarada(a, b) {
    return a + b;
}

// A linha abaixo geraria erro se não estivesse comentada
// console.log(somarExpressao(5, 3)); // ReferenceError: não pode acessar antes da inicialização

const somarExpressao = function (a, b) {
    return a + b;
};

console.log(somarExpressao(5, 3)); // Funciona após a declaração

// ===== PARÂMETROS E ARGUMENTOS =====
console.log("\n===== PARÂMETROS E ARGUMENTOS =====");

// Parâmetros básicos
function exibirTarefa(id, titulo, prioridade) {
    console.log(`Tarefa #${id}: ${titulo} (Prioridade: ${prioridade})`);
}

exibirTarefa(1, "Estudar JavaScript", "alta");

// Parâmetros com valores padrão
function criarTarefa(titulo, descricao = "Sem descrição", prioridade = "média", concluida = false) {
    return {
        id: Date.now(),
        titulo,
        descricao,
        prioridade,
        concluida,
        criada: new Date()
    };
}

const tarefa1 = criarTarefa("Estudar funções");
console.log("Tarefa com valores padrão:", tarefa1);

const tarefa2 = criarTarefa("Implementar TaskMaster", "Criar aplicativo de tarefas", "alta");
console.log("Tarefa com alguns valores personalizados:", tarefa2);

// Parâmetro REST (...)
function criarProjetoComTarefas(nomeProjeto, responsavel, ...tarefas) {
    return {
        nome: nomeProjeto,
        responsavel,
        tarefas,
        totalTarefas: tarefas.length
    };
}

const projetoWeb = criarProjetoComTarefas(
    "Site Institucional",
    "Maria",
    { titulo: "Design da página inicial", prioridade: "alta" },
    { titulo: "Implementar formulário de contato", prioridade: "média" },
    { titulo: "Otimizar para SEO", prioridade: "baixa" }
);

console.log("Projeto com múltiplas tarefas:", projetoWeb);

// Objeto arguments
function imprimirArgumentos() {
    console.log("Total de argumentos:", arguments.length);
    for (let i = 0; i < arguments.length; i++) {
        console.log(`Argumento ${i}: ${arguments[i]}`);
    }
}

console.log("Demonstração do objeto arguments:");
imprimirArgumentos("TaskMaster", 1.0, true, { tipo: "aplicação" });

// ===== RETORNO DE VALORES =====
console.log("\n===== RETORNO DE VALORES =====");

// Retorno simples
function multiplicar(a, b) {
    return a * b;
}

console.log("5 × 7 =", multiplicar(5, 7));

// Retorno de múltiplos valores via array
function calcularEstatisticas(numeros) {
    const soma = numeros.reduce((total, num) => total + num, 0);
    const media = soma / numeros.length;
    const min = Math.min(...numeros);
    const max = Math.max(...numeros);

    return [soma, media, min, max];
}

const [soma, media, min, max] = calcularEstatisticas([5, 10, 15, 20, 25]);
console.log("Estatísticas:", { soma, media, min, max });

// Retorno de múltiplos valores via objeto
function analisarTarefas(tarefas) {
    const total = tarefas.length;
    const concluidas = tarefas.filter(t => t.concluida).length;
    const pendentes = total - concluidas;
    const percentualConcluido = (concluidas / total) * 100;

    return {
        total,
        concluidas,
        pendentes,
        percentualConcluido: percentualConcluido.toFixed(1) + '%'
    };
}

const tarefasExemplo = [
    { id: 1, titulo: "Tarefa 1", concluida: true },
    { id: 2, titulo: "Tarefa 2", concluida: false },
    { id: 3, titulo: "Tarefa 3", concluida: true },
    { id: 4, titulo: "Tarefa 4", concluida: false }
];

const analise = analisarTarefas(tarefasExemplo);
console.log("Análise de tarefas:", analise);

// Retorno antecipado (early return)
function verificarIdade(idade) {
    if (idade < 0) {
        return "Idade inválida";
    }

    if (idade < 18) {
        return "Menor de idade";
    }

    if (idade < 60) {
        return "Adulto";
    }

    return "Idoso";
}

console.log("Categorias de idade:");
console.log("-5 anos:", verificarIdade(-5));
console.log("16 anos:", verificarIdade(16));
console.log("30 anos:", verificarIdade(30));
console.log("70 anos:", verificarIdade(70));

// ===== FUNÇÕES REUTILIZÁVEIS =====
console.log("\n===== FUNÇÕES REUTILIZÁVEIS =====");

// Função para formatação de data
function formatarData(data, formato = 'curto') {
    if (!(data instanceof Date)) {
        data = new Date(data);
    }

    if (isNaN(data.getTime())) {
        return "Data inválida";
    }

    const dia = data.getDate().toString().padStart(2, '0');
    const mes = (data.getMonth() + 1).toString().padStart(2, '0');
    const ano = data.getFullYear();

    // Formatação curta: DD/MM/AAAA
    if (formato === 'curto') {
        return `${dia}/${mes}/${ano}`;
    }

    // Formatação longa: DD de MES de AAAA
    if (formato === 'longo') {
        const meses = [
            'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
            'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
        ];

        return `${dia} de ${meses[data.getMonth()]} de ${ano}`;
    }

    // Formatação para prazo: X dias (atraso/restantes)
    if (formato === 'prazo') {
        const hoje = new Date();
        const diffTempo = data - hoje;
        const diffDias = Math.ceil(diffTempo / (1000 * 60 * 60 * 24));

        if (diffDias < 0) {
            return `${Math.abs(diffDias)} dias em atraso`;
        } else if (diffDias === 0) {
            return "Vence hoje";
        } else {
            return `${diffDias} dias restantes`;
        }
    }

    return `${dia}/${mes}/${ano}`;
}

console.log("Exemplos de formatação de data:");
const dataExemplo = new Date(2025, 5, 15); // 15/06/2025
console.log("Formato curto:", formatarData(dataExemplo));
console.log("Formato longo:", formatarData(dataExemplo, 'longo'));
console.log("Formato prazo:", formatarData(dataExemplo, 'prazo'));

// Função para validar tarefa
function validarTarefa(tarefa) {
    const erros = [];

    // Validar título
    if (!tarefa.titulo) {
        erros.push("O título é obrigatório");
    } else if (tarefa.titulo.length < 3) {
        erros.push("O título deve ter pelo menos 3 caracteres");
    } else if (tarefa.titulo.length > 100) {
        erros.push("O título deve ter no máximo 100 caracteres");
    }

    // Validar prioridade
    const prioridadesValidas = ["baixa", "média", "alta"];
    if (tarefa.prioridade && !prioridadesValidas.includes(tarefa.prioridade)) {
        erros.push("Prioridade inválida. Use 'baixa', 'média' ou 'alta'");
    }

    // Validar data
    if (tarefa.prazo) {
        const dataPrazo = new Date(tarefa.prazo);
        if (isNaN(dataPrazo.getTime())) {
            erros.push("Data de prazo inválida");
        }
    }

    return {
        valido: erros.length === 0,
        erros
    };
}

console.log("\nValidação de tarefas:");
const tarefaValida = {
    titulo: "Implementar validação",
    prioridade: "alta",
    prazo: "2025-12-31"
};

const tarefaInvalida = {
    titulo: "A",
    prioridade: "urgente"
};

console.log("Tarefa válida:", validarTarefa(tarefaValida));
console.log("Tarefa inválida:", validarTarefa(tarefaInvalida));

// ===== AULA 25: FUNÇÕES ANÔNIMAS E ARROW FUNCTIONS =====
console.log("\n===== FUNÇÕES ANÔNIMAS E ARROW FUNCTIONS =====");

// Funções anônimas (sem nome)
const somar = function (a, b) {
    return a + b;
};

console.log("Soma com função anônima:", somar(10, 20));

// Função anônima como callback
const numeros = [1, 2, 3, 4, 5];

const dobrados = numeros.map(function (numero) {
    return numero * 2;
});

console.log("Números dobrados com função anônima:", dobrados);

// Arrow functions (sintaxe simplificada para funções anônimas)
const subtrair = (a, b) => {
    return a - b;
};

console.log("Subtração com arrow function:", subtrair(20, 5));

// Arrow function com retorno implícito
const multiplicar2 = (a, b) => a * b;
console.log("Multiplicação com arrow function simplificada:", multiplicar2(4, 6));

// Arrow function com um único parâmetro (parênteses opcionais)
const quadrado = n => n * n;
console.log("Quadrado de 8:", quadrado(8));

// Arrow function sem parâmetros (parênteses obrigatórios)
const saudacao = () => "Olá, bem-vindo ao TaskMaster!";
console.log(saudacao());

// Diferença entre função regular e arrow function no contexto de 'this'
const contador = {
    valor: 0,

    // Método com função regular
    incrementarTradicional: function () {
        setTimeout(function () {
            // 'this' aqui não se refere ao objeto contador
            // this.valor += 1; // Não funcionaria como esperado
            console.log("Valor após incremento tradicional (incorreto):", this.valor);
        }, 100);
    },

    // Método com arrow function
    incrementarArrow: function () {
        setTimeout(() => {
            // 'this' aqui preserva o contexto do objeto contador
            this.valor += 1;
            console.log("Valor após incremento com arrow function:", this.valor);
        }, 100);
    }
};

contador.incrementarTradicional(); // O 'this' será o objeto global (window) ou undefined
contador.incrementarArrow(); // O 'this' será o objeto contador

// ===== ESCOPO E CLOSURE =====
console.log("\n===== ESCOPO E CLOSURE =====");

// Escopo global
const mensagemGlobal = "Sou visível em todo o código";

function demonstrarEscopo() {
    // Escopo da função (local)
    const mensagemLocal = "Só sou visível dentro da função";

    console.log("Dentro da função:");
    console.log("- " + mensagemGlobal); // Acessa variável global
    console.log("- " + mensagemLocal); // Acessa variável local

    // Escopo de bloco (com let e const)
    if (true) {
        const mensagemBloco = "Só sou visível dentro deste bloco";
        let outraMensagemBloco = "Também sou visível apenas no bloco";
        var mensagemVar = "Sou visível em toda a função"; // var não respeita escopo de bloco

        console.log("Dentro do bloco:");
        console.log("- " + mensagemBloco);
        console.log("- " + outraMensagemBloco);
    }

    // As linhas abaixo gerariam erro se não estivessem comentadas
    // console.log(mensagemBloco); // ReferenceError
    // console.log(outraMensagemBloco); // ReferenceError

    console.log("- " + mensagemVar); // Funciona porque var não respeita o escopo de bloco
}

demonstrarEscopo();
console.log("No escopo global:");
console.log("- " + mensagemGlobal); // Acessa variável global

// As linhas abaixo gerariam erro se não estivessem comentadas
// console.log(mensagemLocal); // ReferenceError
// console.log(mensagemVar); // ReferenceError

// Closure: função que "lembra" o seu ambiente de criação
function criarContador() {
    let contador = 0; // Variável privada

    // Retorna uma função que tem acesso à variável contador
    return {
        incrementar: function () {
            contador++;
            return contador;
        },
        decrementar: function () {
            contador--;
            return contador;
        },
        valor: function () {
            return contador;
        }
    };
}

const meuContador = criarContador();
console.log("\nDemonstração de closure:");
console.log("Valor inicial:", meuContador.valor());
console.log("Após incrementar:", meuContador.incrementar());
console.log("Após incrementar novamente:", meuContador.incrementar());
console.log("Após decrementar:", meuContador.decrementar());

// Outro exemplo de closure: fábrica de funções
function criarMultiplicador(fator) {
    // Retorna uma função que "lembra" o fator
    return function (numero) {
        return numero * fator;
    };
}

const duplicar = criarMultiplicador(2);
const triplicar = criarMultiplicador(3);
const quadruplicar = criarMultiplicador(4);

console.log("\nFunções criadas por closure:");
console.log("Duplicar 5:", duplicar(5));
console.log("Triplicar 5:", triplicar(5));
console.log("Quadruplicar 5:", quadruplicar(5));

// ===== FILTROS COM CALLBACKS =====
console.log("\n===== FILTROS COM CALLBACKS =====");

// Lista de tarefas para exemplo
const tarefas = [
    { id: 1, titulo: "Estudar JavaScript", prioridade: "alta", concluida: false, prazo: new Date(2025, 5, 15) },
    { id: 2, titulo: "Criar projeto TaskMaster", prioridade: "média", concluida: true, prazo: new Date(2025, 4, 10) },
    { id: 3, titulo: "Implementar filtros", prioridade: "alta", concluida: false, prazo: new Date(2025, 6, 1) },
    { id: 4, titulo: "Testar aplicação", prioridade: "baixa", concluida: false, prazo: null },
    { id: 5, titulo: "Corrigir bugs", prioridade: "média", concluida: false, prazo: new Date(2025, 5, 20) }
];

// Função de filtro flexível usando callback
function filtrarTarefas(tarefas, callback) {
    return tarefas.filter(callback);
}

// Diferentes critérios de filtro implementados como callbacks

// 1. Tarefas pendentes
const tarefasPendentes = filtrarTarefas(tarefas, tarefa => !tarefa.concluida);
console.log("Tarefas pendentes:", tarefasPendentes.length);

// 2. Tarefas de alta prioridade
const tarefasAlta = filtrarTarefas(tarefas, tarefa => tarefa.prioridade === "alta");
console.log("Tarefas de alta prioridade:", tarefasAlta.length);

// 3. Tarefas com prazo para este mês (junho)
const tarefasJunho = filtrarTarefas(tarefas, tarefa => {
    if (!tarefa.prazo) return false;
    const mes = tarefa.prazo.getMonth();
    return mes === 5; // Junho (0-indexado)
});
console.log("Tarefas para junho:", tarefasJunho.length);

// 4. Combinando critérios: tarefas pendentes de alta prioridade
const tarefasUrgentes = filtrarTarefas(tarefas,
    tarefa => !tarefa.concluida && tarefa.prioridade === "alta"
);
console.log("Tarefas urgentes (pendentes e alta prioridade):", tarefasUrgentes.length);

// 5. Tarefas com dados específicos: contendo "JavaScript" no título
const tarefasJS = filtrarTarefas(tarefas,
    tarefa => tarefa.titulo.includes("JavaScript")
);
console.log("Tarefas relacionadas a JavaScript:", tarefasJS.length);

// Função de ordenação com callback
function ordenarTarefas(tarefas, callback) {
    return [...tarefas].sort(callback);
}

// Ordenando por prazo (mais próximo primeiro)
const tarefasPorPrazo = ordenarTarefas(tarefas, (a, b) => {
    // Tarefas sem prazo vão para o final
    if (!a.prazo) return 1;
    if (!b.prazo) return -1;
    return a.prazo - b.prazo;
});

console.log("\nTarefas ordenadas por prazo:");
tarefasPorPrazo.forEach(t => {
    console.log(`- ${t.titulo}: ${t.prazo ? formatarData(t.prazo, 'curto') : 'Sem prazo'}`);
});

// ===== AULA 26: FUNÇÕES DE ORDEM SUPERIOR =====
console.log("\n===== FUNÇÕES DE ORDEM SUPERIOR =====");

// Funções de ordem superior são funções que recebem ou retornam outras funções

// Função que retorna uma função (HOF)
function criarFiltro(criterio, valor) {
    switch (criterio) {
        case 'prioridade':
            return tarefa => tarefa.prioridade === valor;

        case 'status':
            return tarefa => {
                if (valor === 'pendente') return !tarefa.concluida;
                if (valor === 'concluida') return tarefa.concluida;
                return true; // 'todos'
            };

        case 'texto':
            return tarefa => tarefa.titulo.toLowerCase().includes(valor.toLowerCase()) ||
                (tarefa.descricao && tarefa.descricao.toLowerCase().includes(valor.toLowerCase()));

        default:
            return () => true; // Sem filtro
    }
}

// Utilizando a função de ordem superior
const filtroPrioridadeAlta = criarFiltro('prioridade', 'alta');
const filtroTarefasPendentes = criarFiltro('status', 'pendente');
const filtroBuscaImplementar = criarFiltro('texto', 'implementar');

console.log("\nUsando filtros criados por HOF:");
console.log("Tarefas de alta prioridade:", tarefas.filter(filtroPrioridadeAlta).length);
console.log("Tarefas pendentes:", tarefas.filter(filtroTarefasPendentes).length);
console.log("Tarefas contendo 'implementar':", tarefas.filter(filtroBuscaImplementar).length);

// Combinando filtros
function combinarFiltros(...filtros) {
    return tarefa => filtros.every(filtro => filtro(tarefa));
}

const filtroTarefasUrgentes = combinarFiltros(
    filtroPrioridadeAlta,
    filtroTarefasPendentes
);

console.log("Tarefas urgentes (combinação de filtros):", tarefas.filter(filtroTarefasUrgentes).length);

// Função para ordenação flexível
function criarOrdenador(campo, ordem = 'asc') {
    return (a, b) => {
        let valorA, valorB;

        // Extrair valores com base no campo
        switch (campo) {
            case 'titulo':
                valorA = a.titulo.toLowerCase();
                valorB = b.titulo.toLowerCase();
                break;

            case 'prioridade':
                const pesos = { alta: 3, média: 2, baixa: 1 };
                valorA = pesos[a.prioridade] || 0;
                valorB = pesos[b.prioridade] || 0;
                break;

            case 'prazo':
                valorA = a.prazo ? a.prazo.getTime() : Infinity;
                valorB = b.prazo ? b.prazo.getTime() : Infinity;
                break;

            default:
                valorA = a[campo];
                valorB = b[campo];
        }

        // Ordenar de acordo com a ordem especificada
        if (ordem === 'asc') {
            return valorA < valorB ? -1 : valorA > valorB ? 1 : 0;
        } else {
            return valorA > valorB ? -1 : valorA < valorB ? 1 : 0;
        }
    };
}

// Exemplos de uso dos ordenadores
const ordenarPorTitulo = criarOrdenador('titulo');
const ordenarPorPrioridadeDesc = criarOrdenador('prioridade', 'desc');
const ordenarPorPrazo = criarOrdenador('prazo');

console.log("\nOrdenação com HOF:");
console.log("Tarefas ordenadas por título:");
const tarefasPorTitulo = [...tarefas].sort(ordenarPorTitulo);
tarefasPorTitulo.forEach(t => console.log(`- ${t.titulo}`));

console.log("\nTarefas ordenadas por prioridade (decrescente):");
const tarefasPorPrioridade = [...tarefas].sort(ordenarPorPrioridadeDesc);
tarefasPorPrioridade.forEach(t => console.log(`- ${t.titulo} (${t.prioridade})`));

// ===== RECURSÃO =====
console.log("\n===== RECURSÃO =====");

// Função recursiva para calcular fatorial
function fatorial(n) {
    // Caso base
    if (n === 0 || n === 1) {
        return 1;
    }

    // Caso recursivo
    return n * fatorial(n - 1);
}

console.log("Fatorial de 5:", fatorial(5));

// Função recursiva para processar estrutura de tarefas aninhadas
function processarEstruturaTarefas(tarefa, nivel = 0) {
    // Processa a tarefa atual
    const indentacao = '  '.repeat(nivel);
    console.log(`${indentacao}- ${tarefa.titulo}`);

    // Caso base: sem subtarefas ou subtarefas vazias
    if (!tarefa.subtarefas || tarefa.subtarefas.length === 0) {
        return;
    }

    // Caso recursivo: processar cada subtarefa
    tarefa.subtarefas.forEach(subtarefa => {
        processarEstruturaTarefas(subtarefa, nivel + 1);
    });
}

// Estrutura aninhada de tarefas para exemplo
const projetoAninhado = {
    titulo: "Desenvolvimento do TaskMaster",
    subtarefas: [
        {
            titulo: "Planejamento",
            subtarefas: [
                { titulo: "Definir requisitos" },
                { titulo: "Criar wireframes" }
            ]
        },
        {
            titulo: "Implementação",
            subtarefas: [
                { titulo: "Front-end" },
                {
                    titulo: "Back-end",
                    subtarefas: [
                        { titulo: "API de tarefas" },
                        { titulo: "Autenticação" }
                    ]
                }
            ]
        },
        { titulo: "Testes" }
    ]
};

console.log("Estrutura aninhada de tarefas:");
processarEstruturaTarefas(projetoAninhado);

// ===== FUNÇÕES CONSTRUTORAS =====
console.log("\n===== FUNÇÕES CONSTRUTORAS =====");

// Função construtora para criar tarefas
function Tarefa(titulo, descricao, prioridade) {
    // Propriedades
    this.id = Date.now();
    this.titulo = titulo;
    this.descricao = descricao || "";
    this.prioridade = prioridade || "média";
    this.concluida = false;
    this.criada = new Date();

    // Método para marcar como concluída
    this.concluir = function () {
        this.concluida = true;
        console.log(`Tarefa "${this.titulo}" concluída!`);
    };

    // Método para verificar se está atrasada
    this.estaAtrasada = function () {
        if (!this.prazo || this.concluida) return false;
        return new Date() > this.prazo;
    };
}

// Adicionar método ao protótipo (mais eficiente)
Tarefa.prototype.definirPrazo = function (data) {
    this.prazo = new Date(data);
    console.log(`Prazo da tarefa "${this.titulo}" definido para ${formatarData(this.prazo)}`);
};

// Criando instâncias usando a função construtora
const tarefa1Exemplo = new Tarefa("Estudar funções construtoras", "Aprender sobre construtores e protótipos", "alta");
console.log("Tarefa criada com construtor:", tarefa1Exemplo);

// Usando métodos
tarefa1Exemplo.definirPrazo("2025-12-31");
tarefa1Exemplo.concluir();

// Herança por protótipo
function TarefaRecorrente(titulo, descricao, prioridade, frequencia) {
    // Chama o construtor pai
    Tarefa.call(this, titulo, descricao, prioridade);

    // Adiciona propriedades específicas
    this.frequencia = frequencia;
    this.ultimaExecucao = null;
    this.execucoes = 0;

    // Substitui o método concluir
    this.concluir = function () {
        this.ultimaExecucao = new Date();
        this.execucoes++;
        console.log(`Tarefa recorrente "${this.titulo}" executada ${this.execucoes} vezes!`);
    };
}

// Herdar protótipo
TarefaRecorrente.prototype = Object.create(Tarefa.prototype);
TarefaRecorrente.prototype.constructor = TarefaRecorrente;

// Método adicional específico
TarefaRecorrente.prototype.proximaExecucao = function () {
    if (!this.ultimaExecucao) return new Date();

    const proxima = new Date(this.ultimaExecucao);

    switch (this.frequencia) {
        case 'diária':
            proxima.setDate(proxima.getDate() + 1);
            break;
        case 'semanal':
            proxima.setDate(proxima.getDate() + 7);
            break;
        case 'mensal':
            proxima.setMonth(proxima.getMonth() + 1);
            break;
        default:
            proxima.setDate(proxima.getDate() + 1);
    }

    return proxima;
};

// Criando instância da tarefa recorrente
const tarefaRecorrente = new TarefaRecorrente("Fazer backup", "Backup semanal dos dados", "média", "semanal");
console.log("\nTarefa recorrente:", tarefaRecorrente);

// Testando métodos
tarefaRecorrente.concluir(); // Método sobrescrito
console.log("Próxima execução:", formatarData(tarefaRecorrente.proximaExecucao())); // Método específico
tarefaRecorrente.definirPrazo("2025-12-31"); // Método herdado

// ===== PADRÕES FUNCIONAIS =====
console.log("\n===== PADRÕES FUNCIONAIS =====");

// 1. Composição de funções
const adicionarTaxa = x => x * 1.1; // Adiciona 10%
const formatarPreco = x => `R$ ${x.toFixed(2)}`;

// Compondo funções
const calcularPrecoFinal = x => formatarPreco(adicionarTaxa(x));
console.log("Preço final:", calcularPrecoFinal(100)); // R$ 110.00

// Função genérica para composição
function compor(...funcoes) {
    return (valor) => {
        return funcoes.reduceRight((acc, fn) => fn(acc), valor);
    };
}

const calcularPrecoFinal2 = compor(formatarPreco, adicionarTaxa);
console.log("Preço final (usando composição):", calcularPrecoFinal2(100)); // R$ 110.00

// 2. Currying - transforma uma função com múltiplos argumentos em uma sequência de funções com um único argumento
function filtrarPor(propriedade) {
    return function (valor) {
        return function (array) {
            return array.filter(item => item[propriedade] === valor);
        };
    };
}

const filtrarPorPropriedade = filtrarPor('prioridade');
const filtrarPorPrioridadeAlta = filtrarPorPropriedade('alta');
const tarefasPrioridadeAlta = filtrarPorPrioridadeAlta(tarefas);

console.log("\nTarefas filtradas usando currying:", tarefasPrioridadeAlta.length);

// 3. Partial Application - permite fixar alguns argumentos de uma função
function filtrarTarefasPor(array, propriedade, valor) {
    return array.filter(item => item[propriedade] === valor);
}

// Aplicação parcial manual
const filtrarTarefasArray = (propriedade, valor) => {
    return filtrarTarefasPor(tarefas, propriedade, valor);
};

// Utilizando aplicação parcial
const tarefasConcluidas = filtrarTarefasArray('concluida', true);
console.log("Tarefas concluídas usando aplicação parcial:", tarefasConcluidas.length);

// Função genérica para aplicação parcial
function aplicacaoParcial(fn, ...args) {
    return function (...maisArgs) {
        return fn(...args, ...maisArgs);
    };
}

const filtrarTarefasDoArray = aplicacaoParcial(filtrarTarefasPor, tarefas);
const tarefasBaixa = filtrarTarefasDoArray('prioridade', 'baixa');
console.log("Tarefas de baixa prioridade usando aplicação parcial genérica:", tarefasBaixa.length);

// 4. Memoization - cache de resultados para otimização
function memoize(fn) {
    const cache = {};

    return function (...args) {
        const key = JSON.stringify(args);

        if (cache[key]) {
            console.log('Usando resultado em cache');
            return cache[key];
        }

        const resultado = fn(...args);
        cache[key] = resultado;
        return resultado;
    };
}

// Função que será memoizada
function calcularFibonacci(n) {
    if (n <= 1) return n;
    return calcularFibonacci(n - 1) + calcularFibonacci(n - 2);
}

// Versão memoizada (muito mais eficiente)
const fibonacciMemoizado = memoize(function (n) {
    if (n <= 1) return n;
    return fibonacciMemoizado(n - 1) + fibonacciMemoizado(n - 2);
});

console.log("\nDemonstração de memoização:");
console.time('Fibonacci normal');
console.log("Fibonacci(30) normal:", calcularFibonacci(30));
console.timeEnd('Fibonacci normal');

console.time('Fibonacci memoizado');
console.log("Fibonacci(30) memoizado:", fibonacciMemoizado(30));
console.timeEnd('Fibonacci memoizado');

// Segunda chamada (usando cache)
console.time('Fibonacci memoizado 2');
console.log("Fibonacci(30) memoizado (segunda chamada):", fibonacciMemoizado(30));
console.timeEnd('Fibonacci memoizado 2');

// ----- Exercícios Práticos -----

/*
EXERCÍCIO 1:
Implemente uma função chamada "criarGeradorID" que retorne uma função geradora de IDs sequenciais. Cada vez que a função retornada for chamada, ela deve gerar um novo ID sequencial, começando de um valor inicial fornecido.

Resolução:
function criarGeradorID(valorInicial = 1) {
    // Usar closure para manter o contador entre chamadas
    let contador = valorInicial;
    
    // Retornar uma função que incrementa e retorna o contador
    return function() {
        const id = contador;
        contador++;
        return id;
    };
}

// Exemplo de uso:
const gerarIDTarefa = criarGeradorID(100);
const gerarIDUsuario = criarGeradorID(1);

console.log("ID Tarefa 1:", gerarIDTarefa()); // 100
console.log("ID Tarefa 2:", gerarIDTarefa()); // 101
console.log("ID Tarefa 3:", gerarIDTarefa()); // 102

console.log("ID Usuário 1:", gerarIDUsuario()); // 1
console.log("ID Usuário 2:", gerarIDUsuario()); // 2

// Um novo gerador começa do valor inicial
const outroGeradorTarefa = criarGeradorID(500);
console.log("Outro ID Tarefa:", outroGeradorTarefa()); // 500
*/

/*
EXERCÍCIO 2:
Crie uma função "calcularTempoRestante" que recebe uma data final como parâmetro e retorna um objeto com o tempo restante em dias, horas, minutos e segundos. Se a data já passou, retorne um objeto indicando que o prazo expirou.

Resolução:
function calcularTempoRestante(dataFinal) {
    // Converter o parâmetro para objeto Date se for string
    if (typeof dataFinal === 'string') {
        dataFinal = new Date(dataFinal);
    }
    
    // Verificar se a data é válida
    if (!(dataFinal instanceof Date) || isNaN(dataFinal.getTime())) {
        return { erro: "Data inválida" };
    }
    
    // Obter o momento atual
    const agora = new Date();
    
    // Calcular a diferença em milissegundos
    const diferencaMs = dataFinal - agora;
    
    // Verificar se a data já passou
    if (diferencaMs <= 0) {
        return { 
            expirou: true, 
            mensagem: "O prazo expirou" 
        };
    }
    
    // Calcular os componentes de tempo
    const segundos = Math.floor((diferencaMs / 1000) % 60);
    const minutos = Math.floor((diferencaMs / (1000 * 60)) % 60);
    const horas = Math.floor((diferencaMs / (1000 * 60 * 60)) % 24);
    const dias = Math.floor(diferencaMs / (1000 * 60 * 60 * 24));
    
    // Retornar o objeto com o tempo restante
    return {
        dias,
        horas,
        minutos,
        segundos,
        total: diferencaMs,
        expirou: false,
        mensagem: `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos restantes`
    };
}

// Exemplo de uso:
// Data no futuro (ajuste o ano para um ano futuro)
const prazoFuturo = new Date();
prazoFuturo.setDate(prazoFuturo.getDate() + 10); // 10 dias no futuro
console.log("Tempo restante para o prazo:", calcularTempoRestante(prazoFuturo));

// Data no passado
const prazoPassado = new Date();
prazoPassado.setDate(prazoPassado.getDate() - 5); // 5 dias no passado
console.log("Tempo para prazo expirado:", calcularTempoRestante(prazoPassado));

// Data inválida
console.log("Tempo para data inválida:", calcularTempoRestante("data-invalida"));
*/

/*
EXERCÍCIO 3:
Desenvolva um sistema de filtragem para tarefas usando funções de ordem superior. Crie uma função "criarFiltradorTarefas" que retorna diferentes funções de filtro com base em um critério especificado.

Resolução:
// Função de ordem superior que retorna diferentes funções de filtro
function criarFiltradorTarefas(tipo) {
    // Filtrar por status (concluída/pendente)
    if (tipo === 'status') {
        return function(status) {
            return function(tarefas) {
                return tarefas.filter(tarefa => {
                    if (status === 'concluida') return tarefa.concluida;
                    if (status === 'pendente') return !tarefa.concluida;
                    return true; // 'todos'
                });
            };
        };
    }
    
    // Filtrar por prioridade
    if (tipo === 'prioridade') {
        return function(prioridade) {
            return function(tarefas) {
                return tarefas.filter(tarefa => 
                    tarefa.prioridade === prioridade
                );
            };
        };
    }
    
    // Filtrar por prazo (vencidas, hoje, futuras)
    if (tipo === 'prazo') {
        return function(periodo) {
            return function(tarefas) {
                const hoje = new Date();
                hoje.setHours(0, 0, 0, 0); // Início do dia atual
                
                const amanha = new Date(hoje);
                amanha.setDate(amanha.getDate() + 1);
                
                return tarefas.filter(tarefa => {
                    // Verificar se tem prazo definido
                    if (!tarefa.prazo) return periodo === 'sem-prazo';
                    
                    const prazo = new Date(tarefa.prazo);
                    prazo.setHours(0, 0, 0, 0); // Normalizar para início do dia
                    
                    if (periodo === 'vencidas') return prazo < hoje && !tarefa.concluida;
                    if (periodo === 'hoje') return prazo.getTime() === hoje.getTime();
                    if (periodo === 'futuras') return prazo >= amanha;
                    return true; // 'todas'
                });
            };
        };
    }
    
    // Filtrar por texto (busca em título e descrição)
    if (tipo === 'texto') {
        return function(termo) {
            return function(tarefas) {
                const termoBusca = termo.toLowerCase();
                return tarefas.filter(tarefa => 
                    tarefa.titulo.toLowerCase().includes(termoBusca) ||
                    (tarefa.descricao && tarefa.descricao.toLowerCase().includes(termoBusca))
                );
            };
        };
    }
    
    // Filtro padrão (retorna todas as tarefas)
    return function() {
        return function(tarefas) {
            return [...tarefas];
        };
    };
}

// Exemplo de uso:
const tarefas = [
    { id: 1, titulo: "Estudar JavaScript", descricao: "Aprender sobre funções", prioridade: "alta", concluida: false, prazo: new Date(2025, 3, 15) },
    { id: 2, titulo: "Fazer compras", descricao: "Comprar itens para a semana", prioridade: "média", concluida: true, prazo: new Date(2025, 2, 10) },
    { id: 3, titulo: "Preparar apresentação", descricao: "Slides sobre o projeto", prioridade: "alta", concluida: false, prazo: new Date() }, // hoje
    { id: 4, titulo: "Enviar relatório", descricao: "Relatório mensal", prioridade: "média", concluida: false, prazo: new Date(2024, 11, 31) }, // data no passado
    { id: 5, titulo: "Organizar arquivos", descricao: null, prioridade: "baixa", concluida: false } // sem prazo e sem descrição
];

// Criando diferentes filtradores
const filtrarPorStatus = criarFiltradorTarefas('status');
const filtrarPorPrioridade = criarFiltradorTarefas('prioridade');
const filtrarPorPrazo = criarFiltradorTarefas('prazo');
const filtrarPorTexto = criarFiltradorTarefas('texto');

// Utilizando os filtradores
const tarefasPendentes = filtrarPorStatus('pendente')(tarefas);
console.log("Tarefas pendentes:", tarefasPendentes.length);

const tarefasAlta = filtrarPorPrioridade('alta')(tarefas);
console.log("Tarefas de alta prioridade:", tarefasAlta.length);

const tarefasHoje = filtrarPorPrazo('hoje')(tarefas);
console.log("Tarefas para hoje:", tarefasHoje.length);

const tarefasJavaScript = filtrarPorTexto('javascript')(tarefas);
console.log("Tarefas relacionadas a JavaScript:", tarefasJavaScript.length);

// Combinando filtros (composição de funções)
function combinarFiltros(...filtros) {
    return function(tarefas) {
        return filtros.reduce((resultado, filtro) => filtro(resultado), tarefas);
    };
}

const filtroTarefasUrgentes = combinarFiltros(
    filtrarPorStatus('pendente')(tarefas),
    filtrarPorPrioridade('alta')(tarefas)
);

console.log("Tarefas urgentes (pendentes e alta prioridade):", filtroTarefasUrgentes.length);
*/

/*
EXERCÍCIO 4:
Implemente uma função construtora "Tarefa" e uma função construtora "Projeto" que herda de "Tarefa". Adicione métodos específicos a cada uma e demonstre como a herança de protótipos funciona.

Resolução:
// Função construtora para Tarefa
function Tarefa(titulo, descricao, prioridade = "média") {
    // Propriedades da tarefa
    this.id = Date.now() + Math.floor(Math.random() * 1000);
    this.titulo = titulo;
    this.descricao = descricao || "";
    this.prioridade = prioridade;
    this.concluida = false;
    this.dataCriacao = new Date();
    this.dataConclusao = null;
}

// Métodos no protótipo de Tarefa
Tarefa.prototype.concluir = function() {
    this.concluida = true;
    this.dataConclusao = new Date();
    return `Tarefa "${this.titulo}" marcada como concluída em ${this.dataConclusao.toLocaleDateString()}`;
};

Tarefa.prototype.reabrir = function() {
    this.concluida = false;
    this.dataConclusao = null;
    return `Tarefa "${this.titulo}" reaberta`;
};

Tarefa.prototype.atualizarPrioridade = function(novaPrioridade) {
    this.prioridade = novaPrioridade;
    return `Prioridade da tarefa "${this.titulo}" atualizada para ${novaPrioridade}`;
};

Tarefa.prototype.obterDetalhes = function() {
    return {
        id: this.id,
        titulo: this.titulo,
        descricao: this.descricao,
        prioridade: this.prioridade,
        status: this.concluida ? "Concluída" : "Pendente",
        criacao: this.dataCriacao.toLocaleDateString(),
        conclusao: this.dataConclusao ? this.dataConclusao.toLocaleDateString() : "N/A"
    };
};

// Função construtora para Projeto (herda de Tarefa)
function Projeto(titulo, descricao, prioridade, dataInicio, dataFim) {
    // Chamar o construtor pai
    Tarefa.call(this, titulo, descricao, prioridade);
    
    // Propriedades específicas de Projeto
    this.dataInicio = dataInicio ? new Date(dataInicio) : new Date();
    this.dataFim = dataFim ? new Date(dataFim) : null;
    this.tarefas = []; // Array para armazenar subtarefas do projeto
    this.progresso = 0; // Percentual de conclusão (0-100)
}

// Herdar os métodos de Tarefa
Projeto.prototype = Object.create(Tarefa.prototype);
Projeto.prototype.constructor = Projeto;

// Métodos específicos para Projeto
Projeto.prototype.adicionarTarefa = function(titulo, descricao, prioridade) {
    const novaTarefa = new Tarefa(titulo, descricao, prioridade);
    this.tarefas.push(novaTarefa);
    this.atualizarProgresso();
    return novaTarefa;
};

Projeto.prototype.removerTarefa = function(idTarefa) {
    const indice = this.tarefas.findIndex(t => t.id === idTarefa);
    if (indice === -1) return false;
    
    this.tarefas.splice(indice, 1);
    this.atualizarProgresso();
    return true;
};

Projeto.prototype.atualizarProgresso = function() {
    if (this.tarefas.length === 0) {
        this.progresso = 0;
    } else {
        const tarefasConcluidas = this.tarefas.filter(t => t.concluida).length;
        this.progresso = Math.round((tarefasConcluidas / this.tarefas.length) * 100);
    }
    return this.progresso;
};

// Sobrescrever o método obterDetalhes para incluir informações do projeto
Projeto.prototype.obterDetalhes = function() {
    // Obter detalhes básicos da classe pai
    const detalhesBasicos = Tarefa.prototype.obterDetalhes.call(this);
    
    // Adicionar detalhes específicos do projeto
    return {
        ...detalhesBasicos,
        tipo: "Projeto",
        dataInicio: this.dataInicio.toLocaleDateString(),
        dataFim: this.dataFim ? this.dataFim.toLocaleDateString() : "Em aberto",
        progresso: `${this.progresso}%`,
        quantidadeTarefas: this.tarefas.length,
        tarefasConcluidas: this.tarefas.filter(t => t.concluida).length
    };
};

// Exemplo de uso:
// Criando uma tarefa simples
const tarefa = new Tarefa(
    "Estudar JavaScript", 
    "Aprender sobre funções construtoras e protótipos", 
    "alta"
);
console.log("Tarefa criada:", tarefa);
console.log(tarefa.concluir());
console.log("Detalhes da tarefa:", tarefa.obterDetalhes());

// Criando um projeto
const projeto = new Projeto(
    "Desenvolvimento do TaskMaster",
    "Sistema de gerenciamento de tarefas",
    "alta",
    "2025-01-15",
    "2025-06-30"
);
console.log("Projeto criado:", projeto);

// Adicionando tarefas ao projeto
projeto.adicionarTarefa("Análise de requisitos", "Levantar requisitos do sistema", "alta");
projeto.adicionarTarefa("Design da interface", "Criar wireframes e protótipos", "média");
projeto.adicionarTarefa("Desenvolvimento do backend", "Implementar API", "alta");

// Concluindo algumas tarefas
projeto.tarefas[0].concluir();

// Verificando o progresso
console.log("Progresso do projeto:", projeto.atualizarProgresso() + "%");

// Obtendo detalhes completos do projeto
console.log("Detalhes do projeto:", projeto.obterDetalhes());
*/

/*
EXERCÍCIO 5:
Implemente uma função "memoizarFuncao" que utiliza o padrão de memoização para otimizar funções pesadas. Demonstre seu uso com uma função de cálculo da sequência de Fibonacci e uma função para encontrar tarefas.

Resolução:
// Função para memoização
function memoizarFuncao(fn) {
    // Cache para armazenar resultados
    const cache = new Map();
    
    // Retorna uma função que verifica o cache antes de executar a função original
    return function(...args) {
        // Criar uma chave única para os argumentos
        const chave = JSON.stringify(args);
        
        // Verificar se o resultado já está no cache
        if (cache.has(chave)) {
            console.log("Resultado recuperado do cache");
            return cache.get(chave);
        }
        
        // Calcular o resultado (chamando a função original)
        const resultado = fn.apply(this, args);
        
        // Armazenar no cache para uso futuro
        cache.set(chave, resultado);
        console.log("Resultado calculado e armazenado no cache");
        
        return resultado;
    };
}

// Exemplo 1: Função Fibonacci (sem memoização é muito ineficiente)
function calcularFibonacci(n) {
    if (n <= 1) return n;
    return calcularFibonacci(n - 1) + calcularFibonacci(n - 2);
}

// Versão memoizada do Fibonacci
const fibonacciMemoizado = memoizarFuncao(function(n) {
    if (n <= 1) return n;
    return fibonacciMemoizado(n - 1) + fibonacciMemoizado(n - 2);
});

// Exemplo 2: Função para buscar tarefas (simulando busca em um banco de dados)
function buscarTarefasPorStatus(tarefas, status) {
    console.log(`Executando busca de tarefas com status "${status}"...`);
    
    // Simulando uma operação demorada
    // Em um caso real, isso poderia ser uma consulta ao banco de dados
    const resultado = tarefas.filter(tarefa => {
        if (status === 'concluidas') return tarefa.concluida;
        if (status === 'pendentes') return !tarefa.concluida;
        return true; // 'todas'
    });
    
    return resultado;
}

// Versão memoizada da busca de tarefas
const buscarTarefasMemoizado = memoizarFuncao(buscarTarefasPorStatus);

// Demonstração de uso
console.log("--- Demonstração de Fibonacci ---");
console.time("Fibonacci normal (n=35)");
const resultadoNormal = calcularFibonacci(35);
console.timeEnd("Fibonacci normal (n=35)");
console.log("Resultado:", resultadoNormal);

console.time("Fibonacci memoizado (n=35) - primeira chamada");
const resultadoMemoizado1 = fibonacciMemoizado(35);
console.timeEnd("Fibonacci memoizado (n=35) - primeira chamada");
console.log("Resultado:", resultadoMemoizado1);

console.time("Fibonacci memoizado (n=35) - segunda chamada");
const resultadoMemoizado2 = fibonacciMemoizado(35);
console.timeEnd("Fibonacci memoizado (n=35) - segunda chamada");
console.log("Resultado:", resultadoMemoizado2);

// Demonstração com busca de tarefas
console.log("\n--- Demonstração de Busca de Tarefas ---");
const tarefas = [
    { id: 1, titulo: "Tarefa 1", concluida: true },
    { id: 2, titulo: "Tarefa 2", concluida: false },
    { id: 3, titulo: "Tarefa 3", concluida: true },
    { id: 4, titulo: "Tarefa 4", concluida: false },
    { id: 5, titulo: "Tarefa 5", concluida: true }
];

console.log("Primeira busca de tarefas concluídas:");
const tarefasConcluidas1 = buscarTarefasMemoizado(tarefas, 'concluidas');
console.log(`Encontradas ${tarefasConcluidas1.length} tarefas concluídas`);

console.log("\nSegunda busca de tarefas concluídas (deve usar o cache):");
const tarefasConcluidas2 = buscarTarefasMemoizado(tarefas, 'concluidas');
console.log(`Encontradas ${tarefasConcluidas2.length} tarefas concluídas`);

console.log("\nBusca de tarefas pendentes (nova busca, não está no cache):");
const tarefasPendentes = buscarTarefasMemoizado(tarefas, 'pendentes');
console.log(`Encontradas ${tarefasPendentes.length} tarefas pendentes`);
*/