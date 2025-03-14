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

// ----- Exercícios Práticos -----

/*
EXERCÍCIO 1:
Crie um objeto "calculadora" que possua métodos para as quatro operações básicas (soma, subtração, multiplicação e divisão).

Resolução:
const calculadora = {
    soma: function(a, b) {
        return a + b;
    },
    subtracao: function(a, b) {
        return a - b;
    },
    multiplicacao: function(a, b) {
        return a * b;
    },
    divisao: function(a, b) {
        if (b === 0) {
            return "Erro: Divisão por zero";
        }
        return a / b;
    },
    // Versão com arrow functions (alternativa)
    // soma: (a, b) => a + b,
    // subtracao: (a, b) => a - b,
    // multiplicacao: (a, b) => a * b,
    // divisao: (a, b) => b === 0 ? "Erro: Divisão por zero" : a / b
};

console.log("Soma:", calculadora.soma(10, 5));          // 15
console.log("Subtração:", calculadora.subtracao(10, 5)); // 5
console.log("Multiplicação:", calculadora.multiplicacao(10, 5)); // 50
console.log("Divisão:", calculadora.divisao(10, 5));    // 2
console.log("Divisão por zero:", calculadora.divisao(10, 0)); // Erro: Divisão por zero
*/

/*
EXERCÍCIO 2:
Crie um objeto "Tarefa" usando o construtor de objeto (new Object()) e adicione métodos para marcar como concluída e alterar descrição.

Resolução:
function criarTarefa(id, titulo, descricao) {
    const tarefa = new Object();
    
    // Propriedades
    tarefa.id = id;
    tarefa.titulo = titulo;
    tarefa.descricao = descricao;
    tarefa.concluida = false;
    tarefa.dataCriacao = new Date();
    tarefa.dataAtualizacao = null;
    
    // Métodos
    tarefa.marcarComoConcluida = function() {
        this.concluida = true;
        this.dataAtualizacao = new Date();
        return this;
    };
    
    tarefa.marcarComoPendente = function() {
        this.concluida = false;
        this.dataAtualizacao = new Date();
        return this;
    };
    
    tarefa.alterarDescricao = function(novaDescricao) {
        this.descricao = novaDescricao;
        this.dataAtualizacao = new Date();
        return this;
    };
    
    tarefa.resumo = function() {
        return `Tarefa ${this.id}: ${this.titulo} - ${this.concluida ? 'Concluída' : 'Pendente'}`;
    };
    
    return tarefa;
}

// Criando uma tarefa com a função
const tarefa1 = criarTarefa(1, "Estudar objetos", "Aprender sobre propriedades e métodos");
console.log("Tarefa criada:", tarefa1);

// Utilizando os métodos
tarefa1.marcarComoConcluida();
console.log("Após concluir:", tarefa1.resumo());

tarefa1.alterarDescricao("Estudar objetos em JavaScript em profundidade");
console.log("Após alterar descrição:", tarefa1);
*/

/*
EXERCÍCIO 3:
Desenvolva um sistema simples de gerenciamento de contatos que permita adicionar, listar e buscar contatos.

Resolução:
const gerenciadorContatos = {
    contatos: [],
    
    // Adicionar novo contato
    adicionar: function(nome, email, telefone) {
        const novoContato = {
            id: this.contatos.length + 1,
            nome: nome,
            email: email,
            telefone: telefone,
            dataCadastro: new Date()
        };
        
        this.contatos.push(novoContato);
        return novoContato;
    },
    
    // Listar todos os contatos
    listar: function() {
        return this.contatos;
    },
    
    // Buscar contato por ID
    buscarPorId: function(id) {
        return this.contatos.find(contato => contato.id === id);
    },
    
    // Buscar contatos por nome (parcial)
    buscarPorNome: function(termoBusca) {
        return this.contatos.filter(contato => 
            contato.nome.toLowerCase().includes(termoBusca.toLowerCase())
        );
    },
    
    // Remover contato
    remover: function(id) {
        const indice = this.contatos.findIndex(contato => contato.id === id);
        
        if (indice === -1) {
            return false; // Contato não encontrado
        }
        
        this.contatos.splice(indice, 1);
        return true; // Remoção bem-sucedida
    },
    
    // Estatísticas
    obterEstatisticas: function() {
        return {
            total: this.contatos.length,
            dominiosEmail: this.obterDominiosEmail()
        };
    },
    
    // Função auxiliar para contar domínios de email
    obterDominiosEmail: function() {
        const dominios = {};
        
        this.contatos.forEach(contato => {
            if (contato.email) {
                const partesEmail = contato.email.split('@');
                if (partesEmail.length === 2) {
                    const dominio = partesEmail[1];
                    dominios[dominio] = (dominios[dominio] || 0) + 1;
                }
            }
        });
        
        return dominios;
    }
};

// Testando o gerenciador de contatos
gerenciadorContatos.adicionar("Maria Silva", "maria@empresa.com", "11 98765-4321");
gerenciadorContatos.adicionar("João Santos", "joao@email.com", "11 91234-5678");
gerenciadorContatos.adicionar("Ana Oliveira", "ana@empresa.com", "21 99876-5432");

console.log("Lista de contatos:", gerenciadorContatos.listar());
console.log("Busca por 'Silva':", gerenciadorContatos.buscarPorNome("Silva"));
console.log("Estatísticas:", gerenciadorContatos.obterEstatisticas());
*/

/*
EXERCÍCIO 4:
Crie um objeto "Produto" que tenha propriedades como nome, preço e estoque, e implemente métodos para calcular o valor total do estoque, adicionar e remover itens do estoque.

Resolução:
const produto = {
    nome: "Smartphone Galaxy",
    preco: 1999.99,
    estoque: 15,
    estoqueMinimo: 5,
    estoqueMaximo: 50,
    
    // Cálculo do valor total do estoque
    valorTotalEstoque: function() {
        return this.preco * this.estoque;
    },
    
    // Adicionar itens ao estoque
    adicionarEstoque: function(quantidade) {
        if (quantidade <= 0) {
            return {
                sucesso: false,
                mensagem: "A quantidade deve ser maior que zero",
                estoque: this.estoque
            };
        }
        
        if (this.estoque + quantidade > this.estoqueMaximo) {
            return {
                sucesso: false,
                mensagem: `Limite máximo de estoque excedido (máximo: ${this.estoqueMaximo})`,
                estoque: this.estoque
            };
        }
        
        this.estoque += quantidade;
        return {
            sucesso: true,
            mensagem: `${quantidade} unidades adicionadas ao estoque`,
            estoque: this.estoque
        };
    },
    
    // Remover itens do estoque
    removerEstoque: function(quantidade) {
        if (quantidade <= 0) {
            return {
                sucesso: false,
                mensagem: "A quantidade deve ser maior que zero",
                estoque: this.estoque
            };
        }
        
        if (this.estoque < quantidade) {
            return {
                sucesso: false,
                mensagem: "Estoque insuficiente",
                estoque: this.estoque
            };
        }
        
        this.estoque -= quantidade;
        
        // Verificar se estoque está abaixo do mínimo
        let mensagem = `${quantidade} unidades removidas do estoque`;
        if (this.estoque < this.estoqueMinimo) {
            mensagem += `. ATENÇÃO: Estoque abaixo do mínimo (${this.estoqueMinimo})`;
        }
        
        return {
            sucesso: true,
            mensagem: mensagem,
            estoque: this.estoque
        };
    },
    
    // Resumo do produto
    resumo: function() {
        return {
            nome: this.nome,
            preco: this.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
            estoque: this.estoque,
            valorTotal: this.valorTotalEstoque().toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
            status: this.estoque <= this.estoqueMinimo ? "Estoque baixo" : "Estoque normal"
        };
    }
};

// Testes do objeto Produto
console.log("Produto criado:", produto);
console.log("Valor total em estoque:", produto.valorTotalEstoque().toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));

// Adicionar ao estoque
console.log(produto.adicionarEstoque(10));  // Adiciona 10 unidades
console.log("Após adicionar:", produto.resumo());

// Remover do estoque
console.log(produto.removerEstoque(20));    // Remove 20 unidades
console.log("Após remover:", produto.resumo());

// Tentar remover mais que o estoque disponível
console.log(produto.removerEstoque(10));    // Tentativa de remover mais que o disponível
*/

/*
EXERCÍCIO 5:
Crie um objeto representando um "Aluno" com informações acadêmicas e métodos para calcular a média, verificar aprovação e gerar relatório de desempenho.

Resolução:
const aluno = {
    // Dados pessoais
    nome: "Carlos Oliveira",
    matricula: "2023001",
    curso: "Desenvolvimento Web",
    
    // Notas das disciplinas no formato: {nome: string, nota: number}
    disciplinas: [
        { nome: "JavaScript", nota: 8.5 },
        { nome: "HTML e CSS", nota: 9.0 },
        { nome: "Banco de Dados", nota: 7.8 },
        { nome: "Frameworks", nota: 8.2 }
    ],
    
    // Configurações
    notaMinimaAprovacao: 7.0,
    
    // Adicionar disciplina
    adicionarDisciplina: function(nome, nota) {
        this.disciplinas.push({ nome, nota });
        return this.disciplinas;
    },
    
    // Alterar nota
    alterarNota: function(nomeDisciplina, novaNota) {
        const disciplina = this.disciplinas.find(d => d.nome === nomeDisciplina);
        
        if (!disciplina) {
            return {
                sucesso: false,
                mensagem: `Disciplina '${nomeDisciplina}' não encontrada`
            };
        }
        
        disciplina.nota = novaNota;
        return {
            sucesso: true,
            mensagem: `Nota de ${nomeDisciplina} atualizada para ${novaNota}`
        };
    },
    
    // Calcular média geral
    calcularMedia: function() {
        if (this.disciplinas.length === 0) {
            return 0;
        }
        
        const somaNotas = this.disciplinas.reduce((soma, disciplina) => {
            return soma + disciplina.nota;
        }, 0);
        
        return somaNotas / this.disciplinas.length;
    },
    
    // Verificar aprovação em uma disciplina
    verificarAprovacaoDisciplina: function(nomeDisciplina) {
        const disciplina = this.disciplinas.find(d => d.nome === nomeDisciplina);
        
        if (!disciplina) {
            return {
                sucesso: false,
                mensagem: `Disciplina '${nomeDisciplina}' não encontrada`
            };
        }
        
        const aprovado = disciplina.nota >= this.notaMinimaAprovacao;
        return {
            sucesso: true,
            aprovado: aprovado,
            disciplina: disciplina.nome,
            nota: disciplina.nota,
            mensagem: aprovado ? "Aprovado" : "Reprovado"
        };
    },
    
    // Verificar aprovação geral
    verificarAprovacaoGeral: function() {
        const media = this.calcularMedia();
        const aprovado = media >= this.notaMinimaAprovacao;
        
        return {
            media: media.toFixed(1),
            aprovado: aprovado,
            mensagem: aprovado ? "Aprovado" : "Reprovado"
        };
    },
    
    // Gerar relatório de desempenho
    gerarRelatorio: function() {
        const disciplinasOrdenadas = [...this.disciplinas]
            .sort((a, b) => b.nota - a.nota);
        
        const melhorDisciplina = disciplinasOrdenadas[0];
        const piorDisciplina = disciplinasOrdenadas[disciplinasOrdenadas.length - 1];
        
        const disciplinasAprovadas = this.disciplinas
            .filter(d => d.nota >= this.notaMinimaAprovacao);
        
        const disciplinasReprovadas = this.disciplinas
            .filter(d => d.nota < this.notaMinimaAprovacao);
        
        return {
            aluno: {
                nome: this.nome,
                matricula: this.matricula,
                curso: this.curso
            },
            desempenho: {
                media: this.calcularMedia().toFixed(1),
                status: this.calcularMedia() >= this.notaMinimaAprovacao ? "Aprovado" : "Reprovado",
                disciplinasMatriculadas: this.disciplinas.length,
                disciplinasAprovadas: disciplinasAprovadas.length,
                disciplinasReprovadas: disciplinasReprovadas.length
            },
            destaques: {
                melhorDisciplina: melhorDisciplina ? {
                    nome: melhorDisciplina.nome,
                    nota: melhorDisciplina.nota
                } : null,
                piorDisciplina: piorDisciplina ? {
                    nome: piorDisciplina.nome,
                    nota: piorDisciplina.nota
                } : null
            }
        };
    }
};

// Testando o objeto aluno
console.log("Média geral:", aluno.calcularMedia().toFixed(1));
console.log("Verificação de aprovação em JavaScript:", aluno.verificarAprovacaoDisciplina("JavaScript"));
console.log("Relatório de desempenho:", aluno.gerarRelatorio());

// Alterando uma nota
aluno.alterarNota("Banco de Dados", 9.5);
console.log("Após alterar nota:", aluno.gerarRelatorio());
*/