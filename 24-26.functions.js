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