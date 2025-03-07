/**
 * TaskMaster - Demonstração de Objetos
 * Aulas 21-22: Sintaxe de objetos, propriedades, métodos e iteração
 */

// ===== AULA 21: SINTAXE E CRIAÇÃO DE OBJETOS =====
console.log("===== SINTAXE E CRIAÇÃO DE OBJETOS =====");

// Sintaxe literal de objeto
const tarefa = {
    id: 1,
    titulo: "Aprender sobre objetos em JavaScript",
    descricao: "Estudar a sintaxe, métodos e propriedades de objetos",
    concluida: false,
    prioridade: "alta",
    dataCriacao: new Date()
};

console.log("Objeto tarefa:", tarefa);

// Criação de objeto usando construtor Object
const usuario = new Object();
usuario.id = 1;
usuario.nome = "Maria";
usuario.email = "maria@exemplo.com";
usuario.ativo = true;

console.log("Objeto criado com construtor:", usuario);

// Propriedades e métodos
const projetoTaskMaster = {
    // Propriedades (dados)
    nome: "TaskMaster",
    version: "1.0",
    autor: "Curso JavaScript",
    tarefas: [],

    // Métodos (funções)
    adicionarTarefa: function (titulo, prioridade = "média") {
        const novaTarefa = {
            id: this.tarefas.length + 1,
            titulo: titulo,
            prioridade: prioridade,
            concluida: false,
            criada: new Date()
        };

        this.tarefas.push(novaTarefa);
        console.log(`Tarefa "${titulo}" adicionada com sucesso!`);
        return novaTarefa;
    },

    listarTarefas: function () {
        console.log(`Projeto ${this.nome} - Lista de Tarefas:`);
        this.tarefas.forEach(tarefa => {
            console.log(`- ${tarefa.id}: ${tarefa.titulo} (${tarefa.prioridade})`);
        });
    }
};

// Uso dos métodos do objeto
projetoTaskMaster.adicionarTarefa("Estudar Objetos", "alta");
projetoTaskMaster.adicionarTarefa("Criar interface do TaskMaster");
projetoTaskMaster.listarTarefas();

// ===== ACESSO A PROPRIEDADES =====
console.log("\n===== ACESSO A PROPRIEDADES =====");

// Notação de ponto
console.log("Título da tarefa (notação de ponto):", tarefa.titulo);
console.log("Prioridade da tarefa (notação de ponto):", tarefa.prioridade);

// Notação de colchetes
console.log("Título da tarefa (notação de colchetes):", tarefa["titulo"]);
console.log("Prioridade da tarefa (notação de colchetes):", tarefa["prioridade"]);

// Vantagens da notação de colchetes - propriedades dinâmicas
const propriedade = "descricao";
console.log(`Valor da propriedade ${propriedade}:`, tarefa[propriedade]);

// Verificando se uma propriedade existe
console.log("'titulo' existe em tarefa?", "titulo" in tarefa); // true
console.log("'categoria' existe em tarefa?", "categoria" in tarefa); // false

console.log("'titulo' existe como propriedade própria?", tarefa.hasOwnProperty("titulo")); // true

// Propriedades com nomes especiais
const tarefaEspecial = {
    "nome da tarefa": "Tarefa com espaço no nome",
    "data-criacao": "2025-01-01"
};

// Acessando propriedades com nomes especiais (só funciona com notação de colchetes)
console.log("Propriedade com espaço:", tarefaEspecial["nome da tarefa"]);
console.log("Propriedade com hífen:", tarefaEspecial["data-criacao"]);

// ===== REFATORAÇÃO PARA OBJETOS =====
console.log("\n===== REFATORAÇÃO PARA OBJETOS =====");

// Antes: dados desconectados
let tarefaId = 1;
let tarefaTitulo = "Comprar mantimentos";
let tarefaDescricao = "Ir ao supermercado";
let tarefaConcluida = false;

// Depois: objeto organizado
const tarefaRefatorada = {
    id: tarefaId,
    titulo: tarefaTitulo,
    descricao: tarefaDescricao,
    concluida: tarefaConcluida,

    // Método para marcar como concluída
    marcarComoConcluida: function () {
        this.concluida = true;
        console.log(`Tarefa "${this.titulo}" marcada como concluída.`);
    },

    // Método para marcar como pendente
    marcarComoPendente: function () {
        this.concluida = false;
        console.log(`Tarefa "${this.titulo}" marcada como pendente.`);
    }
};

console.log("Tarefa refatorada:", tarefaRefatorada);
tarefaRefatorada.marcarComoConcluida();
console.log("Após marcar como concluída:", tarefaRefatorada);

// ===== AULA 22: OBJETOS ANINHADOS =====
console.log("\n===== OBJETOS ANINHADOS =====");

// Objeto com propriedades aninhadas
const tarefaDetalhada = {
    id: 2,
    titulo: "Preparar apresentação",
    concluida: false,

    // Objeto aninhado de categoria
    categoria: {
        id: 3,
        nome: "Trabalho",
        cor: "#ff9900"
    },

    // Objeto aninhado de prazo
    prazo: {
        data: new Date(2025, 6, 15), // 15/07/2025
        urgente: true,
        lembretes: [1, 3, 7] // Lembrar em 1, 3 e 7 dias antes
    },

    // Array de objetos para etapas
    etapas: [
        { id: 1, descricao: "Pesquisar conteúdo", concluida: true },
        { id: 2, descricao: "Criar slides", concluida: false },
        { id: 3, descricao: "Revisar apresentação", concluida: false }
    ]
};

// Acessando propriedades aninhadas
console.log("Nome da categoria:", tarefaDetalhada.categoria.nome);
console.log("Data do prazo:", tarefaDetalhada.prazo.data.toLocaleDateString());
console.log("Primeira etapa:", tarefaDetalhada.etapas[0].descricao);

// Modificando objetos aninhados
tarefaDetalhada.categoria.cor = "#ff0000"; // Atualiza a cor
tarefaDetalhada.etapas[0].concluida = true; // Marca a primeira etapa como concluída

console.log("Tarefa após modificações:", tarefaDetalhada);

// Adicionando uma nova etapa ao array
tarefaDetalhada.etapas.push({
    id: 4,
    descricao: "Ensaiar apresentação",
    concluida: false
});

console.log("Etapas após adicionar nova:", tarefaDetalhada.etapas);

// ===== ITERAÇÃO EM OBJETOS =====
console.log("\n===== ITERAÇÃO EM OBJETOS =====");

// for...in - itera sobre as propriedades enumeráveis de um objeto
console.log("Usando for...in para listar propriedades e valores:");
for (let propriedade in tarefa) {
    console.log(`${propriedade}: ${tarefa[propriedade]}`);
}

// Object.keys() - retorna um array com todas as chaves (propriedades) do objeto
const propriedadesTarefa = Object.keys(tarefa);
console.log("Propriedades da tarefa (Object.keys):", propriedadesTarefa);

// Object.values() - retorna um array com todos os valores do objeto
const valoresTarefa = Object.values(tarefa);
console.log("Valores da tarefa (Object.values):", valoresTarefa);

// Object.entries() - retorna um array de arrays [chave, valor]
const entradasTarefa = Object.entries(tarefa);
console.log("Entradas da tarefa (Object.entries):", entradasTarefa);

// Iterando com Object.entries() e destructuring
console.log("\nIterar com Object.entries() e destructuring:");
for (let [chave, valor] of Object.entries(tarefa)) {
    console.log(`${chave}: ${valor}`);
}

// ===== MÉTODOS DE OBJETO =====
console.log("\n===== MÉTODOS DE OBJETO =====");

// Object.assign() - copiar propriedades de objetos
const configuracoesPadrao = {
    tema: "claro",
    notificacoes: true,
    idioma: "pt-BR"
};

const preferenciasUsuario = {
    tema: "escuro",
    tamanhoFonte: "grande"
};

// Mesclando objetos (o primeiro é o destino)
const configuracoesFinais = Object.assign({}, configuracoesPadrao, preferenciasUsuario);
console.log("Configurações mescladas:", configuracoesFinais);

// Cópia superficial de objeto
const tarefaCopia = Object.assign({}, tarefa);
console.log("Cópia da tarefa:", tarefaCopia);

// Object.freeze() - impede a modificação do objeto
const configFixa = Object.freeze({
    versao: "1.0.0",
    apiUrl: "https://api.exemplo.com",
    timeout: 5000
});

try {
    configFixa.timeout = 10000; // Isso não terá efeito em modo estrito
    console.log("Após tentativa de modificação:", configFixa);
} catch (error) {
    console.error("Erro ao modificar objeto congelado:", error);
}

// Object.seal() - permite modificar valores existentes, mas não adicionar/remover propriedades
const usuarioSelado = Object.seal({
    id: 2,
    nome: "João",
    email: "joao@exemplo.com"
});

// Modificação permitida
usuarioSelado.nome = "João Silva";

// Adição não permitida (não terá efeito)
usuarioSelado.telefone = "123456789";

console.log("Usuário selado após modificações:", usuarioSelado);

// ===== ESTATÍSTICAS E RELATÓRIOS =====
console.log("\n===== ESTATÍSTICAS E RELATÓRIOS (PRÁTICA) =====");

// Lista de tarefas para estatísticas
const tarefasParaEstatisticas = [
    { id: 1, titulo: "Estudar JavaScript", categoria: "estudo", prioridade: "alta", concluida: true },
    { id: 2, titulo: "Criar projeto", categoria: "trabalho", prioridade: "média", concluida: false },
    { id: 3, titulo: "Fazer exercícios", categoria: "saúde", prioridade: "média", concluida: true },
    { id: 4, titulo: "Ler livro", categoria: "estudo", prioridade: "baixa", concluida: false },
    { id: 5, titulo: "Preparar reunião", categoria: "trabalho", prioridade: "alta", concluida: false }
];

// Objeto para gerar estatísticas
const estatisticasTarefas = {
    tarefas: tarefasParaEstatisticas,

    // Total de tarefas
    obterTotal: function () {
        return this.tarefas.length;
    },

    // Tarefas concluídas
    obterConcluidas: function () {
        return this.tarefas.filter(tarefa => tarefa.concluida).length;
    },

    // Tarefas pendentes
    obterPendentes: function () {
        return this.tarefas.filter(tarefa => !tarefa.concluida).length;
    },

    // Tarefas por categoria
    obterPorCategoria: function () {
        const categorias = {};

        for (let tarefa of this.tarefas) {
            if (!categorias[tarefa.categoria]) {
                categorias[tarefa.categoria] = 0;
            }

            categorias[tarefa.categoria]++;
        }

        return categorias;
    },

    // Tarefas por prioridade
    obterPorPrioridade: function () {
        const prioridades = {};

        for (let tarefa of this.tarefas) {
            if (!prioridades[tarefa.prioridade]) {
                prioridades[tarefa.prioridade] = 0;
            }

            prioridades[tarefa.prioridade]++;
        }

        return prioridades;
    },

    // Gerar relatório completo
    gerarRelatorio: function () {
        const total = this.obterTotal();
        const concluidas = this.obterConcluidas();
        const percentualConcluido = (concluidas / total * 100).toFixed(1);

        return {
            resumo: {
                total: total,
                concluidas: concluidas,
                pendentes: this.obterPendentes(),
                percentualConcluido: percentualConcluido + "%"
            },
            distribuicao: {
                categorias: this.obterPorCategoria(),
                prioridades: this.obterPorPrioridade()
            }
        };
    }
};

// Gerando e exibindo o relatório
const relatorio = estatisticasTarefas.gerarRelatorio();
console.log("Relatório de tarefas:", relatorio);

// Exibição formatada
console.log("\nRelatório Formatado:");
console.log(`Total de tarefas: ${relatorio.resumo.total}`);
console.log(`Concluídas: ${relatorio.resumo.concluidas} (${relatorio.resumo.percentualConcluido})`);
console.log(`Pendentes: ${relatorio.resumo.pendentes}`);

console.log("\nDistribuição por categoria:");
for (let [categoria, quantidade] of Object.entries(relatorio.distribuicao.categorias)) {
    console.log(`- ${categoria}: ${quantidade}`);
}

console.log("\nDistribuição por prioridade:");
for (let [prioridade, quantidade] of Object.entries(relatorio.distribuicao.prioridades)) {
    console.log(`- ${prioridade}: ${quantidade}`);
}