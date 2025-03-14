/**
 * TaskMaster - Demonstração do Objeto Date
 * Aula 17: Criação, manipulação e cálculos com datas
 */

// ===== CRIAÇÃO DE DATAS =====
console.log("===== CRIAÇÃO DE DATAS =====");

// Data atual
const hoje = new Date();
console.log("Data atual:", hoje);
console.log("Data atual (string):", hoje.toString());

// Criação a partir de timestamp (milissegundos desde 01/01/1970)
const timestamp = 1672531200000; // 01/01/2023 00:00:00 UTC
const dataTimestamp = new Date(timestamp);
console.log("Data a partir de timestamp:", dataTimestamp);

// Criação a partir de string
const dataString = new Date("2025-06-15T10:30:00");
console.log("Data a partir de string ISO:", dataString);

const dataStringBr = new Date("2025/06/15 10:30:00");
console.log("Data a partir de string BR:", dataStringBr);

// Criação a partir de componentes (ano, mês, dia, hora, minuto, segundo, milissegundo)
// Nota: mês começa do 0 (janeiro) até 11 (dezembro)
const dataComponentes = new Date(2025, 5, 15, 10, 30, 0); // 15/06/2025 10:30:00
console.log("Data a partir de componentes:", dataComponentes);

// ===== OBTENÇÃO DE COMPONENTES =====
console.log("\n===== OBTENÇÃO DE COMPONENTES =====");

// Métodos "get" para obter componentes específicos
console.log("Ano:", hoje.getFullYear()); // ex: 2025
console.log("Mês (0-11):", hoje.getMonth()); // 0 = Janeiro, 11 = Dezembro
console.log("Dia do mês (1-31):", hoje.getDate());
console.log("Dia da semana (0-6):", hoje.getDay()); // 0 = Domingo, 6 = Sábado
console.log("Horas (0-23):", hoje.getHours());
console.log("Minutos (0-59):", hoje.getMinutes());
console.log("Segundos (0-59):", hoje.getSeconds());
console.log("Milissegundos (0-999):", hoje.getMilliseconds());
console.log("Timestamp (ms desde 1970):", hoje.getTime());

// Formatação de data em formato legível
function formatarData(data) {
    const dia = data.getDate().toString().padStart(2, '0');
    const mes = (data.getMonth() + 1).toString().padStart(2, '0'); // +1 porque mês começa em 0
    const ano = data.getFullYear();

    return `${dia}/${mes}/${ano}`;
}

console.log("Data formatada:", formatarData(hoje));

// Obter nome do mês
function obterNomeMes(data) {
    const meses = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];

    return meses[data.getMonth()];
}

console.log("Nome do mês atual:", obterNomeMes(hoje));

// Obter nome do dia da semana
function obterNomeDiaSemana(data) {
    const diasSemana = [
        'Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira',
        'Quinta-feira', 'Sexta-feira', 'Sábado'
    ];

    return diasSemana[data.getDay()];
}

console.log("Dia da semana atual:", obterNomeDiaSemana(hoje));

// ===== MODIFICAÇÃO DE DATAS =====
console.log("\n===== MODIFICAÇÃO DE DATAS =====");

// Criando uma cópia da data atual
const dataModificavel = new Date(hoje);
console.log("Data original:", formatarData(dataModificavel));

// Métodos "set" para modificar componentes
dataModificavel.setFullYear(2026);
console.log("Após setFullYear(2026):", formatarData(dataModificavel));

dataModificavel.setMonth(11); // Dezembro (índice 11)
console.log("Após setMonth(11):", formatarData(dataModificavel));

dataModificavel.setDate(25);
console.log("Após setDate(25):", formatarData(dataModificavel));

dataModificavel.setHours(10);
dataModificavel.setMinutes(30);
dataModificavel.setSeconds(0);
console.log("Após modificar horário (10:30:00):", dataModificavel.toLocaleString());

// Adicionar dias a uma data
function adicionarDias(data, dias) {
    const novaData = new Date(data);
    novaData.setDate(data.getDate() + dias);
    return novaData;
}

const amanha = adicionarDias(hoje, 1);
console.log("Amanhã:", formatarData(amanha));

const proximaSemana = adicionarDias(hoje, 7);
console.log("Próxima semana:", formatarData(proximaSemana));

// ===== CÁLCULOS COM DATAS =====
console.log("\n===== CÁLCULOS COM DATAS =====");

// Diferença entre datas (em milissegundos)
const dataInicial = new Date(2025, 0, 1); // 01/01/2025
const dataFinal = new Date(2025, 11, 31); // 31/12/2025
const diferencaMs = dataFinal - dataInicial; // Resultado em milissegundos
console.log("Diferença em milissegundos:", diferencaMs);

// Converter para dias
const diferencaDias = Math.ceil(diferencaMs / (1000 * 60 * 60 * 24));
console.log("Diferença em dias:", diferencaDias);

// Verificar se uma data é passado, presente ou futuro
function verificarTempoRelativo(data) {
    const agora = new Date();

    // Remover horário para comparar apenas as datas
    const dataComparar = new Date(data);
    dataComparar.setHours(0, 0, 0, 0);

    const hojeComparar = new Date(agora);
    hojeComparar.setHours(0, 0, 0, 0);

    if (dataComparar.getTime() < hojeComparar.getTime()) {
        return "passado";
    } else if (dataComparar.getTime() > hojeComparar.getTime()) {
        return "futuro";
    } else {
        return "presente";
    }
}

console.log("01/01/2025 é:", verificarTempoRelativo(new Date(2025, 0, 1)));
console.log("Hoje é:", verificarTempoRelativo(hoje));
console.log("31/12/2023 é:", verificarTempoRelativo(new Date(2023, 11, 31)));

// Calcular idade a partir de data de nascimento
function calcularIdade(dataNascimento) {
    const hoje = new Date();

    let idade = hoje.getFullYear() - dataNascimento.getFullYear();
    const mHoje = hoje.getMonth();
    const mNascimento = dataNascimento.getMonth();

    // Se ainda não chegou no mês de aniversário, diminui 1 da idade
    if (mNascimento > mHoje) {
        idade--;
    } else if (mNascimento === mHoje) {
        // Se estamos no mês do aniversário, verificar o dia
        const dHoje = hoje.getDate();
        const dNascimento = dataNascimento.getDate();

        if (dNascimento > dHoje) {
            idade--;
        }
    }

    return idade;
}

const dataNascimento = new Date(2000, 5, 15); // 15/06/2000
console.log("Idade:", calcularIdade(dataNascimento));

// ===== EXEMPLOS PRÁTICOS PARA O TASKMASTER =====
console.log("\n===== EXEMPLOS PRÁTICOS PARA O TASKMASTER =====");

// 1. Estrutura de tarefa com datas
const tarefa = {
    id: 1,
    titulo: "Implementar objeto Date",
    descricao: "Adicionar manipulação de datas no TaskMaster",
    criada: new Date(), // Data atual
    prazo: adicionarDias(new Date(), 7), // Prazo de 7 dias
    concluida: false,
    prioridade: "alta"
};

console.log("Tarefa com datas:");
console.log("- Título:", tarefa.titulo);
console.log("- Criada em:", formatarData(tarefa.criada));
console.log("- Prazo:", formatarData(tarefa.prazo));

// 2. Verificar tarefas atrasadas
function verificarTarefaAtrasada(tarefa) {
    if (!tarefa.prazo || tarefa.concluida) return false;

    const hoje = new Date();
    return tarefa.prazo < hoje;
}

// Tarefa com prazo no passado
const tarefaAtrasada = {
    id: 2,
    titulo: "Tarefa atrasada",
    prazo: new Date(2023, 0, 1), // 01/01/2023
    concluida: false
};

console.log("\nTarefa 1 está atrasada?", verificarTarefaAtrasada(tarefa));
console.log("Tarefa 2 está atrasada?", verificarTarefaAtrasada(tarefaAtrasada));

// 3. Calcular dias restantes até o prazo
function calcularDiasRestantes(tarefa) {
    if (!tarefa.prazo) return null;
    if (tarefa.concluida) return 0;

    const hoje = new Date();

    // Remover horário para comparar apenas as datas
    const prazoSemHora = new Date(tarefa.prazo);
    prazoSemHora.setHours(0, 0, 0, 0);

    const hojeSemHora = new Date(hoje);
    hojeSemHora.setHours(0, 0, 0, 0);

    // Calcular diferença em dias
    const diffTempo = prazoSemHora - hojeSemHora;
    const diffDias = Math.ceil(diffTempo / (1000 * 60 * 60 * 24));

    return diffDias;
}

console.log("\nDias restantes para tarefa 1:", calcularDiasRestantes(tarefa));
console.log("Dias restantes para tarefa 2:", calcularDiasRestantes(tarefaAtrasada));

// 4. Agrupar tarefas por mês de prazo
function agruparTarefasPorMes(tarefas) {
    const tarefasPorMes = {};

    tarefas.forEach(tarefa => {
        if (!tarefa.prazo) {
            // Se não tiver prazo, agrupamos como "Sem prazo"
            if (!tarefasPorMes["Sem prazo"]) {
                tarefasPorMes["Sem prazo"] = [];
            }
            tarefasPorMes["Sem prazo"].push(tarefa);
            return;
        }

        const mes = obterNomeMes(tarefa.prazo);
        const ano = tarefa.prazo.getFullYear();
        const chave = `${mes}/${ano}`;

        if (!tarefasPorMes[chave]) {
            tarefasPorMes[chave] = [];
        }

        tarefasPorMes[chave].push(tarefa);
    });

    return tarefasPorMes;
}

// Lista de tarefas para exemplo
const tarefasExemplo = [
    {
        id: 1,
        titulo: "Tarefa 1",
        prazo: new Date(2025, 5, 15) // 15/06/2025
    },
    {
        id: 2,
        titulo: "Tarefa 2",
        prazo: new Date(2025, 5, 20) // 20/06/2025
    },
    {
        id: 3,
        titulo: "Tarefa 3",
        prazo: new Date(2025, 6, 10) // 10/07/2025
    },
    {
        id: 4,
        titulo: "Tarefa 4",
        prazo: null // Sem prazo
    }
];

const tarefasPorMes = agruparTarefasPorMes(tarefasExemplo);
console.log("\nTarefas agrupadas por mês:", tarefasPorMes);

// 5. Função para formatar prazo com mensagem amigável
function formatarPrazo(tarefa) {
    if (!tarefa.prazo) return "Sem prazo definido";
    if (tarefa.concluida) return "Tarefa concluída";

    const diasRestantes = calcularDiasRestantes(tarefa);

    if (diasRestantes < 0) {
        return `Atrasada em ${Math.abs(diasRestantes)} dias`;
    } else if (diasRestantes === 0) {
        return "Vence hoje";
    } else if (diasRestantes === 1) {
        return "Vence amanhã";
    } else if (diasRestantes <= 7) {
        return `Vence em ${diasRestantes} dias`;
    } else {
        return `Vence em ${formatarData(tarefa.prazo)}`;
    }
}

console.log("\nFormato amigável de prazos:");
tarefasExemplo.forEach(tarefa => {
    console.log(`- Tarefa ${tarefa.id}: ${formatarPrazo(tarefa)}`);
});

// 6. Criar lembretes para tarefas próximas do prazo
function gerarLembretes(tarefas) {
    const hoje = new Date();
    const lembretes = [];

    tarefas.forEach(tarefa => {
        if (!tarefa.prazo || tarefa.concluida) return;

        const diasRestantes = calcularDiasRestantes(tarefa);

        // Gerar lembretes para tarefas que vencem em até 3 dias
        if (diasRestantes >= 0 && diasRestantes <= 3) {
            lembretes.push({
                tarefaId: tarefa.id,
                titulo: tarefa.titulo,
                diasRestantes,
                mensagem: `A tarefa "${tarefa.titulo}" ${diasRestantes === 0 ? 'vence hoje' : `vence em ${diasRestantes} dias`}!`
            });
        }
    });

    return lembretes;
}

// Adicionar uma tarefa que vence em breve
tarefasExemplo.push({
    id: 5,
    titulo: "Tarefa urgente",
    prazo: adicionarDias(new Date(), 2), // Vence em 2 dias
    concluida: false
});

const lembretes = gerarLembretes(tarefasExemplo);
console.log("\nLembretes gerados:", lembretes);

// 7. Formatar data no padrão ISO para armazenamento
function formatarDataParaArmazenamento(data) {
    return data.toISOString();
}

// 8. Converter string ISO para objeto Date
function converterISOParaDate(isoString) {
    return new Date(isoString);
}

const dataParaArmazenar = formatarDataParaArmazenamento(new Date());
console.log("\nData formatada para armazenamento:", dataParaArmazenar);
console.log("Data convertida de volta:", converterISOParaDate(dataParaArmazenar));

// ----- Exercícios Práticos -----
/*
EXERCÍCIO 1:
Crie uma função que exiba a data atual no formato "DD/MM/AAAA".

Resolução:
function exibirDataAtual() {
    const hoje = new Date();
    
    // Obter componentes da data
    const dia = hoje.getDate().toString().padStart(2, '0');
    const mes = (hoje.getMonth() + 1).toString().padStart(2, '0'); // +1 porque mês começa em 0
    const ano = hoje.getFullYear();
    
    // Formatar a data
    return `${dia}/${mes}/${ano}`;
}

console.log("Data atual:", exibirDataAtual());
*/

/*
EXERCÍCIO 2:
Calcule quantos dias faltam para o Natal deste ano.

Resolução:
function diasAteNatal() {
    const hoje = new Date();
    
    // Criar data do Natal deste ano
    const natal = new Date(hoje.getFullYear(), 11, 25); // 25 de dezembro
    
    // Se o Natal já passou este ano, usar o Natal do próximo ano
    if (hoje > natal) {
        natal.setFullYear(natal.getFullYear() + 1);
    }
    
    // Cálculo da diferença em dias
    const diferencaMs = natal - hoje;
    const diferencaDias = Math.ceil(diferencaMs / (1000 * 60 * 60 * 24));
    
    return diferencaDias;
}

console.log("Dias até o Natal:", diasAteNatal());
*/

/*
EXERCÍCIO 3:
Crie uma função que determine se um ano informado é bissexto.

Resolução:
function verificarAnoBissexto(ano) {
    // Um ano é bissexto se for divisível por 4
    // Mas não é bissexto se for divisível por 100, a menos que seja divisível por 400
    if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log("2024 é bissexto?", verificarAnoBissexto(2024)); // true
console.log("2023 é bissexto?", verificarAnoBissexto(2023)); // false
console.log("2000 é bissexto?", verificarAnoBissexto(2000)); // true
console.log("1900 é bissexto?", verificarAnoBissexto(1900)); // false
*/

/*
EXERCÍCIO 4:
Crie uma função que retorne o nome do mês atual por extenso.

Resolução:
function obterNomeMesAtual() {
    const meses = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];
    
    const hoje = new Date();
    const indiceMes = hoje.getMonth(); // 0 a 11
    
    return meses[indiceMes];
}

console.log("Mês atual:", obterNomeMesAtual());
*/

/*
EXERCÍCIO 5:
Implemente uma função que calcule a diferença em dias entre duas datas.

Resolução:
function calcularDiferencaDias(data1, data2) {
    // Converter para objetos Date se forem strings
    if (typeof data1 === 'string') {
        data1 = new Date(data1);
    }
    
    if (typeof data2 === 'string') {
        data2 = new Date(data2);
    }
    
    // Remover as horas para comparar apenas os dias
    const data1SemHora = new Date(data1);
    data1SemHora.setHours(0, 0, 0, 0);
    
    const data2SemHora = new Date(data2);
    data2SemHora.setHours(0, 0, 0, 0);
    
    // Calcular a diferença em milissegundos
    const diferencaMs = Math.abs(data2SemHora - data1SemHora);
    
    // Converter para dias
    const diferencaDias = Math.round(diferencaMs / (1000 * 60 * 60 * 24));
    
    return diferencaDias;
}

const data1 = new Date(2025, 0, 1);  // 01/01/2025
const data2 = new Date(2025, 0, 15); // 15/01/2025

console.log(`Diferença entre ${formatarData(data1)} e ${formatarData(data2)}:`, 
            calcularDiferencaDias(data1, data2), "dias");
*/

/*
EXERCÍCIO 6:
Crie uma função que formata uma data no padrão "Dia da semana, DD de Mês de AAAA".
Exemplo: "Sexta-feira, 15 de Junho de 2025".

Resolução:
function formatarDataExtenso(data) {
    // Converter para objeto Date se for string
    if (typeof data === 'string') {
        data = new Date(data);
    }
    
    const diasSemana = [
        'Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira',
        'Quinta-feira', 'Sexta-feira', 'Sábado'
    ];
    
    const meses = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];
    
    const diaSemana = diasSemana[data.getDay()];
    const dia = data.getDate();
    const mes = meses[data.getMonth()];
    const ano = data.getFullYear();
    
    return `${diaSemana}, ${dia} de ${mes} de ${ano}`;
}

const dataExemplo = new Date(2025, 5, 15); // 15/06/2025
console.log("Data por extenso:", formatarDataExtenso(dataExemplo));
*/