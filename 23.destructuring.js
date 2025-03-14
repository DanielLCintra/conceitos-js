/**
 * TaskMaster - Demonstração de Desestruturação
 * Aula 23: Desestruturação de arrays e objetos
 */

// ===== DESESTRUTURAÇÃO DE ARRAYS =====
console.log("===== DESESTRUTURAÇÃO DE ARRAYS =====");

// Array de prioridades
const prioridades = ["baixa", "média", "alta"];

// Desestruturação básica de array
const [baixa, media, alta] = prioridades;
console.log("Prioridades desestruturadas:");
console.log("Baixa:", baixa);
console.log("Média:", media);
console.log("Alta:", alta);

// Array de estatísticas
const estatisticasMensais = [42, 28, 14]; // [total, concluídas, pendentes]

// Desestruturação com nomes significativos
const [totalTarefas, tarefasConcluidas, tarefasPendentes] = estatisticasMensais;
console.log("\nEstatísticas desestruturadas:");
console.log("Total de tarefas:", totalTarefas);
console.log("Tarefas concluídas:", tarefasConcluidas);
console.log("Tarefas pendentes:", tarefasPendentes);

// Ignorando elementos com espaços vazios
const dadosUsuario = ["Maria", "Silva", 32, "Desenvolvedora"];

// Pegando apenas nome e profissão
const [nome, , , profissao] = dadosUsuario;
console.log("\nDados do usuário (ignorando alguns):");
console.log("Nome:", nome);
console.log("Profissão:", profissao);

// Utilizando rest pattern (...) para capturar o restante dos elementos
const categorias = ["Trabalho", "Estudo", "Pessoal", "Saúde", "Finanças"];

// Pegando a primeira categoria e agrupando o resto
const [categoriaPrincipal, ...outrasCategorias] = categorias;
console.log("\nCategorias com rest pattern:");
console.log("Categoria principal:", categoriaPrincipal);
console.log("Outras categorias:", outrasCategorias);

// Valores padrão para caso de elementos ausentes
const configuracoes = ["claro"];

// Configurando tema e idioma (com valor padrão para idioma)
const [tema, idioma = "pt-BR"] = configuracoes;
console.log("\nConfigurações com valor padrão:");
console.log("Tema:", tema);
console.log("Idioma:", idioma); // Usa o valor padrão "pt-BR"

// Troca de variáveis usando desestruturação
let a = "primeiro";
let b = "segundo";
console.log("\nAntes da troca:", a, b);

// Troca de valores sem variável temporária
[a, b] = [b, a];
console.log("Depois da troca:", a, b);

// Desestruturação de arrays retornados por funções
function obterDimensoes() {
    return [1920, 1080]; // largura, altura
}

const [largura, altura] = obterDimensoes();
console.log("\nDimensões desestruturadas de função:");
console.log(`${largura}x${altura}`);

// ===== DESESTRUTURAÇÃO DE OBJETOS =====
console.log("\n===== DESESTRUTURAÇÃO DE OBJETOS =====");

// Objeto de tarefa
const tarefa = {
    id: 1,
    titulo: "Aprender desestruturação",
    descricao: "Estudar desestruturação em JavaScript",
    prioridade: "alta",
    concluida: false,
    prazo: new Date(2025, 5, 15), // 15/06/2025
    tags: ["javascript", "estudo"]
};

// Desestruturação básica de objeto
const { titulo, prioridade, concluida } = tarefa;
console.log("Propriedades desestruturadas:");
console.log("Título:", titulo);
console.log("Prioridade:", prioridade);
console.log("Concluída:", concluida);

// Desestruturação com nomes de variáveis diferentes (renomeação)
const { titulo: nomeTarefa, prioridade: nivelPrioridade, concluida: estaCompleta } = tarefa;
console.log("\nPropriedades renomeadas:");
console.log("Nome da tarefa:", nomeTarefa);
console.log("Nível de prioridade:", nivelPrioridade);
console.log("Está completa:", estaCompleta);

// Valores padrão para propriedades ausentes
const tarefaIncompleta = {
    titulo: "Tarefa sem todas as propriedades",
    prioridade: "média"
};

// Definindo valores padrão para propriedades ausentes
const {
    titulo: tituloTarefa,
    descricao = "Sem descrição",
    categoria = "Geral",
    concluida: finalizada = false
} = tarefaIncompleta;

console.log("\nPropriedades com valores padrão:");
console.log("Título:", tituloTarefa);
console.log("Descrição:", descricao); // Usa o valor padrão
console.log("Categoria:", categoria); // Usa o valor padrão
console.log("Finalizada:", finalizada); // Usa o valor padrão

// Combinando renomeação e valores padrão
const {
    prazo: dataLimite = new Date(),
    tags: etiquetas = []
} = tarefaIncompleta;

console.log("\nRenomeação com valores padrão:");
console.log("Data limite:", dataLimite); // Usa o valor padrão
console.log("Etiquetas:", etiquetas); // Usa o valor padrão

// Desestruturação de objetos aninhados
const projetoComplexo = {
    nome: "TaskMaster",
    versao: "1.0",
    desenvolvedor: {
        nome: "Maria Silva",
        email: "maria@exemplo.com",
        cargo: "Desenvolvedora Frontend"
    },
    tecnologias: ["JavaScript", "HTML", "CSS"],
    prazos: {
        inicio: new Date(2025, 0, 15),
        fim: new Date(2025, 5, 30)
    }
};

// Extraindo propriedades de objetos aninhados
const {
    nome: nomeProjeto,
    desenvolvedor: { nome: nomeDesenvolvedor, email },
    tecnologias: [linguagemPrincipal],
    prazos: { inicio, fim }
} = projetoComplexo;

console.log("\nDesestruturação de objetos aninhados:");
console.log("Nome do projeto:", nomeProjeto);
console.log("Nome do desenvolvedor:", nomeDesenvolvedor);
console.log("Email do desenvolvedor:", email);
console.log("Linguagem principal:", linguagemPrincipal);
console.log("Data de início:", inicio.toLocaleDateString());
console.log("Data de fim:", fim.toLocaleDateString());

// Combinando desestruturação de objetos com rest pattern
const { id, ...detalhes } = tarefa;
console.log("\nDesestruturação com rest pattern:");
console.log("ID:", id);
console.log("Detalhes:", detalhes);

// ===== USO DE DESESTRUTURAÇÃO EM PARÂMETROS DE FUNÇÃO =====
console.log("\n===== DESESTRUTURAÇÃO EM PARÂMETROS DE FUNÇÃO =====");

// Função que recebe objeto e usa desestruturação nos parâmetros
function exibirTarefa({ titulo, prioridade, concluida, prazo = "Sem prazo" }) {
    console.log(`Tarefa: ${titulo}`);
    console.log(`Prioridade: ${prioridade}`);
    console.log(`Status: ${concluida ? "Concluída" : "Pendente"}`);
    console.log(`Prazo: ${prazo instanceof Date ? prazo.toLocaleDateString() : prazo}`);
}

console.log("Exibindo tarefa com desestruturação:");
exibirTarefa(tarefa);

// Função que recebe array e usa desestruturação
function processarDadosUsuario([nome, sobrenome, idade, ...habilidades]) {
    console.log(`\nNome completo: ${nome} ${sobrenome}`);
    console.log(`Idade: ${idade}`);
    console.log(`Habilidades: ${habilidades.join(", ")}`);
}

const dadosJoao = ["João", "Santos", 28, "JavaScript", "React", "Node.js"];
console.log("\nProcessando dados do usuário:");
processarDadosUsuario(dadosJoao);

// ===== REFATORAÇÃO DE CÓDIGO USANDO DESESTRUTURAÇÃO =====
console.log("\n===== REFATORAÇÃO DE CÓDIGO USANDO DESESTRUTURAÇÃO =====");

// Código antes da refatoração
function exibirEstatisticasAntigo(estatisticas) {
    console.log("Total de tarefas: " + estatisticas.total);
    console.log("Tarefas concluídas: " + estatisticas.concluidas);
    console.log("Tarefas pendentes: " + estatisticas.pendentes);

    if (estatisticas.atrasadas !== undefined) {
        console.log("Tarefas atrasadas: " + estatisticas.atrasadas);
    } else {
        console.log("Tarefas atrasadas: 0");
    }
}

// Código após refatoração com desestruturação
function exibirEstatisticasNovo({ total, concluidas, pendentes, atrasadas = 0 }) {
    console.log(`Total de tarefas: ${total}`);
    console.log(`Tarefas concluídas: ${concluidas}`);
    console.log(`Tarefas pendentes: ${pendentes}`);
    console.log(`Tarefas atrasadas: ${atrasadas}`);
}

const estatisticas = {
    total: 10,
    concluidas: 6,
    pendentes: 4
};

console.log("Antes da refatoração:");
exibirEstatisticasAntigo(estatisticas);

console.log("\nApós refatoração com desestruturação:");
exibirEstatisticasNovo(estatisticas);

// Exemplo de refatoração para acessar propriedades aninhadas
// Antes:
function exibirProjetoAntigo(projeto) {
    console.log("Nome do projeto: " + projeto.nome);
    console.log("Versão: " + projeto.versao);
    console.log("Desenvolvedor: " + projeto.desenvolvedor.nome);
    console.log("Email: " + (projeto.desenvolvedor.email || "Não fornecido"));
    console.log("Data de início: " + projeto.prazos.inicio.toLocaleDateString());
}

// Depois:
function exibirProjetoNovo({
    nome,
    versao,
    desenvolvedor: { nome: nomeDesenvolvedor, email = "Não fornecido" },
    prazos: { inicio }
}) {
    console.log(`Nome do projeto: ${nome}`);
    console.log(`Versão: ${versao}`);
    console.log(`Desenvolvedor: ${nomeDesenvolvedor}`);
    console.log(`Email: ${email}`);
    console.log(`Data de início: ${inicio.toLocaleDateString()}`);
}

console.log("\nExibição de projeto antes da refatoração:");
exibirProjetoAntigo(projetoComplexo);

console.log("\nExibição de projeto após refatoração:");
exibirProjetoNovo(projetoComplexo);

// ===== APLICAÇÕES PRÁTICAS NO TASKMASTER =====
console.log("\n===== APLICAÇÕES PRÁTICAS NO TASKMASTER =====");

// Array de tarefas para exemplo
const tarefas = [
    { id: 1, titulo: "Estudar JavaScript", prioridade: "alta", concluida: true },
    { id: 2, titulo: "Criar projeto TaskMaster", prioridade: "média", concluida: false },
    { id: 3, titulo: "Testar aplicação", prioridade: "baixa", concluida: false }
];

// 1. Função para processar tarefas com desestruturação
function processarTarefas(tarefas) {
    // Inicializa contadores
    let totalAlta = 0, totalMedia = 0, totalBaixa = 0;

    // Processa cada tarefa com desestruturação
    tarefas.forEach(({ prioridade }) => {
        if (prioridade === "alta") totalAlta++;
        else if (prioridade === "média") totalMedia++;
        else if (prioridade === "baixa") totalBaixa++;
    });

    return { totalAlta, totalMedia, totalBaixa };
}

const contagemPrioridades = processarTarefas(tarefas);
console.log("Contagem de prioridades:", contagemPrioridades);

// 2. Filtragem e mapeamento com desestruturação
const tarefasPendentes = tarefas
    .filter(({ concluida }) => !concluida)
    .map(({ id, titulo, prioridade }) => ({
        id,
        titulo,
        prioridade,
        mensagem: `A tarefa "${titulo}" (${prioridade}) está pendente`
    }));

console.log("\nTarefas pendentes processadas:");
console.log(tarefasPendentes);

// 3. Agrupamento de tarefas por status
function agruparTarefasPorStatus(tarefas) {
    return tarefas.reduce((grupos, { concluida, ...resto }) => {
        const chave = concluida ? 'concluidas' : 'pendentes';
        grupos[chave].push({ concluida, ...resto });
        return grupos;
    }, { concluidas: [], pendentes: [] });
}

const tarefasAgrupadas = agruparTarefasPorStatus(tarefas);
console.log("\nTarefas agrupadas por status:");
console.log(tarefasAgrupadas);

// 4. Extraindo informações para relatório
function gerarRelatorioPrioridades(tarefas) {
    return tarefas.reduce((relatorio, { prioridade, concluida }) => {
        // Cria a chave de prioridade se não existir
        if (!relatorio[prioridade]) {
            relatorio[prioridade] = { total: 0, concluidas: 0, pendentes: 0 };
        }

        // Incrementa contadores
        relatorio[prioridade].total++;

        if (concluida) {
            relatorio[prioridade].concluidas++;
        } else {
            relatorio[prioridade].pendentes++;
        }

        return relatorio;
    }, {});
}

const relatorioPrioridades = gerarRelatorioPrioridades(tarefas);
console.log("\nRelatório de prioridades:");
console.log(relatorioPrioridades);

// 5. Sintaxe simplificada para criar objetos
function criarTarefa(titulo, descricao, prioridade = "média") {
    // Utilizando property shorthand quando a variável
    // tem o mesmo nome da propriedade
    return {
        id: Date.now(),
        titulo,  // Equivalente a titulo: titulo
        descricao, // Equivalente a descricao: descricao
        prioridade, // Equivalente a prioridade: prioridade
        concluida: false,
        criada: new Date()
    };
}

const novaTarefa = criarTarefa("Aprender desestruturação", "Estudar sintaxe e aplicações", "alta");
console.log("\nNova tarefa criada com shorthand properties:");
console.log(novaTarefa);

// ----- Exercícios Práticos -----

/*
EXERCÍCIO 1:
Crie uma função chamada extrairInfoTarefa que receba um objeto tarefa e use desestruturação para extrair e retornar apenas o título, a prioridade e o status de conclusão.

Resolução:
function extrairInfoTarefa(tarefa) {
    // Usando desestruturação para extrair apenas as propriedades desejadas
    const { titulo, prioridade, concluida } = tarefa;
    
    // Retornando um novo objeto com as propriedades extraídas
    return { titulo, prioridade, concluida };
}

// Exemplo de uso
const tarefa = {
    id: 1,
    titulo: "Estudar JavaScript",
    descricao: "Aprofundar conhecimentos em JS",
    prioridade: "alta",
    concluida: false,
    criador: "João",
    dataCriacao: new Date(2025, 3, 15)
};

const infoResumida = extrairInfoTarefa(tarefa);
console.log("Informações extraídas da tarefa:", infoResumida);
// Saída: { titulo: "Estudar JavaScript", prioridade: "alta", concluida: false }
*/

/*
EXERCÍCIO 2:
Crie uma função formatarUsuario que receba um array com dados de um usuário na ordem [nome, email, idade, cidade] e utilize desestruturação para retornar um objeto formatado.

Resolução:
function formatarUsuario(dadosUsuario) {
    // Desestruturação do array com valores padrão
    const [nome, email, idade = 'Não informada', cidade = 'Não informada'] = dadosUsuario;
    
    // Retornando um objeto formatado usando property shorthand
    return {
        nome,
        email,
        idade,
        cidade,
        resumo: `${nome}, ${idade} anos, mora em ${cidade}`
    };
}

// Exemplos de uso
const usuario1 = ["Maria Silva", "maria@email.com", 28, "São Paulo"];
console.log("Usuário 1:", formatarUsuario(usuario1));
// Saída completa com todos os dados

const usuario2 = ["João Santos", "joao@email.com"]; // Sem idade e cidade
console.log("Usuário 2:", formatarUsuario(usuario2));
// Saída usando valores padrão para idade e cidade
*/

/*
EXERCÍCIO 3:
Refatore a função analisarProjeto para usar desestruturação de objetos aninhados, extraindo nome do projeto, status, nome do responsável e prazo.

Resolução:
// Versão original da função, sem desestruturação
function analisarProjetoAntigo(projeto) {
    const nomeProjeto = projeto.nome;
    const statusProjeto = projeto.status || "Em andamento";
    const nomeResponsavel = projeto.responsavel ? projeto.responsavel.nome : "Não atribuído";
    const emailResponsavel = projeto.responsavel ? projeto.responsavel.email : "N/A";
    const prazoFinal = projeto.prazos && projeto.prazos.final ? projeto.prazos.final : "Indefinido";
    
    return {
        projeto: nomeProjeto,
        status: statusProjeto,
        responsavel: nomeResponsavel,
        email: emailResponsavel,
        prazo: prazoFinal
    };
}

// Versão refatorada usando desestruturação
function analisarProjeto({
    nome,
    status = "Em andamento",
    responsavel: { nome: nomeResponsavel = "Não atribuído", email: emailResponsavel = "N/A" } = {},
    prazos: { final: prazoFinal = "Indefinido" } = {}
}) {
    return {
        projeto: nome,
        status,
        responsavel: nomeResponsavel,
        email: emailResponsavel,
        prazo: prazoFinal
    };
}

// Exemplos de uso
const projeto1 = {
    nome: "TaskMaster Web",
    status: "Em desenvolvimento",
    responsavel: {
        nome: "Ana Carolina",
        email: "ana@empresa.com"
    },
    prazos: {
        inicio: new Date(2025, 0, 15),
        final: new Date(2025, 5, 30)
    }
};

console.log("Análise do projeto 1:", analisarProjeto(projeto1));

// Projeto com dados incompletos para testar valores padrão
const projeto2 = {
    nome: "API TaskMaster",
    responsavel: {
        nome: "Carlos Eduardo"
        // sem email
    }
    // sem prazo
};

console.log("Análise do projeto 2:", analisarProjeto(projeto2));

// Projeto com mínimo de dados
const projeto3 = {
    nome: "TaskMaster Mobile"
    // sem status, responsável ou prazos
};

console.log("Análise do projeto 3:", analisarProjeto(projeto3));
*/

/*
EXERCÍCIO 4:
Implemente uma função processarTarefas que receba um array de tarefas e utilize desestruturação em conjunto com métodos de array para gerar estatísticas.

Resolução:
function processarTarefas(tarefas) {
    // Usar map com desestruturação para extrair apenas o que precisamos
    const resumos = tarefas.map(({ id, titulo, prioridade, concluida, prazo }) => {
        // Verificar se prazo está definido e se já passou
        const hoje = new Date();
        const temPrazo = prazo instanceof Date;
        const atrasada = temPrazo && prazo < hoje && !concluida;
        
        return {
            id,
            titulo,
            prioridade,
            status: concluida ? "Concluída" : atrasada ? "Atrasada" : "Pendente",
            diasRestantes: temPrazo ? Math.ceil((prazo - hoje) / (1000 * 60 * 60 * 24)) : null
        };
    });
    
    // Usar reduce com desestruturação para gerar estatísticas
    const estatisticas = tarefas.reduce((stats, { prioridade, concluida, prazo }) => {
        // Atualizar contagem por prioridade
        stats.porPrioridade[prioridade] = (stats.porPrioridade[prioridade] || 0) + 1;
        
        // Atualizar contagem por status
        if (concluida) {
            stats.concluidas++;
        } else {
            stats.pendentes++;
            
            // Verificar se está atrasada
            if (prazo instanceof Date && prazo < new Date()) {
                stats.atrasadas++;
            }
        }
        
        return stats;
    }, {
        concluidas: 0,
        pendentes: 0,
        atrasadas: 0,
        porPrioridade: {}
    });
    
    return {
        resumos,
        estatisticas
    };
}

// Exemplo de uso
const tarefas = [
    { 
        id: 1, 
        titulo: "Estudar JavaScript", 
        descricao: "Aprender desestruturação", 
        prioridade: "alta", 
        concluida: true, 
        prazo: new Date(2025, 2, 10)
    },
    { 
        id: 2, 
        titulo: "Preparar apresentação", 
        descricao: "Slides sobre TaskMaster", 
        prioridade: "média", 
        concluida: false, 
        prazo: new Date(2025, 3, 15)
    },
    { 
        id: 3, 
        titulo: "Fazer exercícios", 
        descricao: "Práticas de desestruturação", 
        prioridade: "alta", 
        concluida: false, 
        prazo: new Date(2024, 0, 1) // Data no passado para testar atraso
    },
    { 
        id: 4, 
        titulo: "Revisar código", 
        descricao: "Verificar qualidade", 
        prioridade: "baixa", 
        concluida: false 
        // Sem prazo definido
    }
];

const resultados = processarTarefas(tarefas);
console.log("Resumos das tarefas:", resultados.resumos);
console.log("Estatísticas:", resultados.estatisticas);
*/

/*
EXERCÍCIO 5:
Crie uma função que simule a extração de informações de um banco de dados, utilizando desestruturação para transformar os resultados em objetos formatados.

Resolução:
// Simulação de resultados de consulta ao banco de dados
const resultadosConsulta = [
    ["T1", "Implementar login", "Carlos", "alta", "2025-04-15", null],
    ["T2", "Corrigir bugs da API", "Ana", "média", "2025-03-20", "2025-03-18"],
    ["T3", "Atualizar documentação", "Mariana", "baixa", "2025-05-10", null],
    ["T4", "Refatorar módulo de usuários", "Pedro", "alta", "2025-04-02", "2025-04-01"]
];

function formatarResultadosConsulta(resultados) {
    return resultados.map(resultado => {
        // Desestruturar o array de resultados
        const [codigo, descricao, responsavel, prioridade, prazoStr, conclusaoStr] = resultado;
        
        // Converter strings de data para objetos Date
        const prazo = prazoStr ? new Date(prazoStr) : null;
        const conclusao = conclusaoStr ? new Date(conclusaoStr) : null;
        
        // Calcular status baseado nas datas
        let status;
        if (conclusao) {
            status = "concluída";
        } else if (prazo && prazo < new Date()) {
            status = "atrasada";
        } else {
            status = "pendente";
        }
        
        // Calcular dias até o prazo ou desde a conclusão
        let diasInfo;
        if (conclusao) {
            const diasDesdeConlusao = Math.ceil((new Date() - conclusao) / (1000 * 60 * 60 * 24));
            diasInfo = `Concluída há ${diasDesdeConlusao} dias`;
        } else if (prazo) {
            const diasAtePrazo = Math.ceil((prazo - new Date()) / (1000 * 60 * 60 * 24));
            diasInfo = diasAtePrazo > 0 ? 
                `Faltam ${diasAtePrazo} dias` : 
                `Atrasada em ${Math.abs(diasAtePrazo)} dias`;
        } else {
            diasInfo = "Sem prazo definido";
        }
        
        // Retornar objeto formatado usando property shorthand
        return {
            codigo,
            descricao,
            responsavel,
            prioridade,
            prazo, // Objeto Date ou null
            conclusao, // Objeto Date ou null
            status,
            diasInfo
        };
    });
}

// Uso da função
const tarefasFormatadas = formatarResultadosConsulta(resultadosConsulta);
console.log("Tarefas formatadas a partir da consulta:");

// Exibir cada tarefa formatada
tarefasFormatadas.forEach(tarefa => {
    const { codigo, descricao, responsavel, status, diasInfo } = tarefa;
    console.log(`${codigo}: ${descricao} (${responsavel}) - ${status} - ${diasInfo}`);
});

// Também podemos agrupar por status usando desestruturação no reduce
const tarefasPorStatus = tarefasFormatadas.reduce((grupos, { status, ...resto }) => {
    // Verificar se o grupo já existe, se não, criar um array vazio
    if (!grupos[status]) {
        grupos[status] = [];
    }
    
    // Adicionar a tarefa ao grupo correspondente
    grupos[status].push({ status, ...resto });
    
    return grupos;
}, {});

console.log("\nTarefas agrupadas por status:", tarefasPorStatus);
*/