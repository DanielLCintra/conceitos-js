/**
 * TaskMaster - Demonstração de Armazenamento Local
 * Aulas 27-28: LocalStorage e SessionStorage
 */

// ===== AULA 27: LOCALSTORAGE =====
console.log("===== LOCALSTORAGE =====");

// Verificando disponibilidade
if (typeof (Storage) !== "undefined") {
    console.log("LocalStorage está disponível!");
} else {
    console.log("Seu navegador não suporta LocalStorage.");
}

// ----- Métodos básicos do localStorage -----

// setItem: armazena um item no localStorage
localStorage.setItem("usuario", "Maria");
localStorage.setItem("tema", "claro");
localStorage.setItem("ultimoAcesso", new Date().toISOString());

// getItem: recupera um item do localStorage
const usuarioSalvo = localStorage.getItem("usuario");
console.log("Usuário salvo:", usuarioSalvo);

const temaSalvo = localStorage.getItem("tema");
console.log("Tema salvo:", temaSalvo);

// Recuperando um item que não existe retorna null
const configInexistente = localStorage.getItem("configuracaoInexistente");
console.log("Item inexistente:", configInexistente);

// removeItem: remove um item específico do localStorage
localStorage.removeItem("ultimoAcesso");
console.log("Último acesso após remoção:", localStorage.getItem("ultimoAcesso"));

// clear: remove todos os itens do localStorage
// localStorage.clear(); // Comentado para não afetar outros exemplos

// Armazenando objetos e arrays
// Objetos e arrays precisam ser convertidos para string com JSON.stringify
const preferenciasUsuario = {
    notificacoes: true,
    tamanhoFonte: "grande",
    coresPersonalizadas: {
        fundo: "#f5f5f5",
        texto: "#333333",
        destaque: "#3498db"
    }
};

// Salvando objeto como string JSON
localStorage.setItem("preferencias", JSON.stringify(preferenciasUsuario));

// Recuperando e convertendo de volta para objeto
const preferenciasRecuperadas = JSON.parse(localStorage.getItem("preferencias"));
console.log("Preferências recuperadas:", preferenciasRecuperadas);
console.log("Tamanho da fonte:", preferenciasRecuperadas.tamanhoFonte);
console.log("Cor de destaque:", preferenciasRecuperadas.coresPersonalizadas.destaque);

// Armazenando arrays
const tarefasRecentes = [
    "Estudar JavaScript",
    "Criar projeto TaskMaster",
    "Aprender sobre localStorage"
];

localStorage.setItem("tarefasRecentes", JSON.stringify(tarefasRecentes));

// Recuperando array
const tarefasRecentesRecuperadas = JSON.parse(localStorage.getItem("tarefasRecentes"));
console.log("Tarefas recentes recuperadas:", tarefasRecentesRecuperadas);
console.log("Primeira tarefa:", tarefasRecentesRecuperadas[0]);

// ----- Acessando localStorage como objeto -----

// Também podemos usar notação de objeto
localStorage.contador = "10";
console.log("Contador (notação de objeto):", localStorage.contador);

// Removendo com operador delete
delete localStorage.contador;
console.log("Contador após delete:", localStorage.contador);

// ----- Verificando número de itens e iterando -----

console.log("Número de itens no localStorage:", localStorage.length);

// Iterando sobre todos os itens
console.log("\nTodos os itens no localStorage:");
for (let i = 0; i < localStorage.length; i++) {
    const chave = localStorage.key(i);
    const valor = localStorage.getItem(chave);
    console.log(`${chave}: ${valor}`);
}

// ----- Limitações e Boas Práticas -----
console.log("\n----- Limitações e Boas Práticas -----");

// 1. Limite de armazenamento (geralmente 5-10MB)
console.log("O localStorage tem limite de armazenamento, geralmente entre 5-10MB por domínio.");

// 2. Armazena apenas strings
console.log("localStorage só armazena strings. Objetos e arrays devem ser convertidos com JSON.");

// 3. Sem expiração automática
console.log("Dados no localStorage não expiram automaticamente.");

// 4. Sincronização entre abas
console.log("Alterações no localStorage são visíveis em todas as abas do mesmo domínio.");

// 5. Bloqueante (síncrono)
console.log("Operações de localStorage são síncronas e podem bloquear a thread principal.");

// 6. Não é seguro para dados sensíveis
console.log("Não armazene dados sensíveis (senhas, tokens) no localStorage.");

// 7. Use prefixos para evitar colisões de nomes
localStorage.setItem("tm_usuario", "João"); // Prefixo 'tm_' para TaskMaster
console.log("Usando prefixo para evitar colisões:", localStorage.getItem("tm_usuario"));

// 8. Tratamento de erros
try {
    localStorage.setItem("teste", "valor");
    console.log("Item salvo com sucesso!");
} catch (e) {
    console.error("Erro ao salvar no localStorage:", e);
}

// ----- Exemplo Prático: Persistência de Tarefas -----
console.log("\n----- Persistência de Tarefas -----");

// Classe TaskManager para gerenciar tarefas com persistência
class TaskManager {
    constructor() {
        // Inicializa tarefas do localStorage ou array vazio
        this.tarefas = this.carregarTarefas();
    }

    // Carrega tarefas do localStorage
    carregarTarefas() {
        try {
            const tarefasSalvas = localStorage.getItem('taskmaster_tarefas');
            return tarefasSalvas ? JSON.parse(tarefasSalvas) : [];
        } catch (erro) {
            console.error("Erro ao carregar tarefas:", erro);
            return [];
        }
    }

    // Salva tarefas no localStorage
    salvarTarefas() {
        try {
            localStorage.setItem('taskmaster_tarefas', JSON.stringify(this.tarefas));
            console.log("Tarefas salvas com sucesso!");
        } catch (erro) {
            console.error("Erro ao salvar tarefas:", erro);
        }
    }

    // Adiciona uma nova tarefa
    adicionarTarefa(titulo, descricao = "", prioridade = "média") {
        const novaTarefa = {
            id: Date.now(), // Timestamp como ID único
            titulo,
            descricao,
            prioridade,
            concluida: false,
            criada: new Date().toISOString()
        };

        this.tarefas.push(novaTarefa);
        this.salvarTarefas();

        return novaTarefa;
    }

    // Obtém todas as tarefas
    obterTarefas() {
        return this.tarefas;
    }

    // Obtém uma tarefa específica
    obterTarefa(id) {
        return this.tarefas.find(tarefa => tarefa.id === id);
    }

    // Atualiza uma tarefa existente
    atualizarTarefa(id, atualizacoes) {
        const indice = this.tarefas.findIndex(tarefa => tarefa.id === id);

        if (indice === -1) return false;

        this.tarefas[indice] = {
            ...this.tarefas[indice],
            ...atualizacoes,
            id // Garante que o ID não mude
        };

        this.salvarTarefas();
        return true;
    }

    // Remove uma tarefa
    removerTarefa(id) {
        const tarefasOriginais = this.tarefas.length;
        this.tarefas = this.tarefas.filter(tarefa => tarefa.id !== id);

        if (tarefasOriginais !== this.tarefas.length) {
            this.salvarTarefas();
            return true;
        }

        return false;
    }

    // Marca uma tarefa como concluída
    marcarComoConcluida(id) {
        return this.atualizarTarefa(id, { concluida: true });
    }

    // Limpa todas as tarefas
    limparTarefas() {
        this.tarefas = [];
        this.salvarTarefas();
    }
}

// Demonstração do TaskManager
const gerenciador = new TaskManager();

// Verifica se já existem tarefas salvas
const tarefasExistentes = gerenciador.obterTarefas();
console.log("Tarefas existentes:", tarefasExistentes);

// Se não houver tarefas, adiciona algumas para demonstração
if (tarefasExistentes.length === 0) {
    console.log("Adicionando tarefas de demonstração...");

    gerenciador.adicionarTarefa("Estudar localStorage", "Entender métodos e limitações", "alta");
    gerenciador.adicionarTarefa("Implementar persistência", "Salvar tarefas no navegador");
    gerenciador.adicionarTarefa("Testar funcionamento", "Verificar se os dados persistem");
}

// Demonstrando operações
console.log("\nLista de tarefas:");
gerenciador.obterTarefas().forEach((tarefa, index) => {
    console.log(`${index + 1}. ${tarefa.titulo} (${tarefa.concluida ? 'Concluída' : 'Pendente'})`);
});

// Atualizando uma tarefa
if (gerenciador.obterTarefas().length > 0) {
    const primeiroId = gerenciador.obterTarefas()[0].id;
    gerenciador.marcarComoConcluida(primeiroId);
    console.log("\nApós marcar a primeira tarefa como concluída:");
    console.log(gerenciador.obterTarefa(primeiroId));
}

// ===== AULA 28: SESSIONSTORAGE =====
console.log("\n===== SESSIONSTORAGE =====");

// SessionStorage funciona de forma muito similar ao localStorage,
// mas os dados só persistem durante a sessão do navegador

// Verificando disponibilidade
if (typeof (sessionStorage) !== "undefined") {
    console.log("SessionStorage está disponível!");
} else {
    console.log("Seu navegador não suporta SessionStorage.");
}

// ----- Métodos do sessionStorage (idênticos ao localStorage) -----

// setItem: armazena item na sessão atual
sessionStorage.setItem("sessaoUsuario", "session_123456");
sessionStorage.setItem("ultimaAcao", "login");
sessionStorage.setItem("timestamp", Date.now().toString());

// getItem: recupera item
const sessaoAtual = sessionStorage.getItem("sessaoUsuario");
console.log("Sessão atual:", sessaoAtual);

// removeItem: remove item específico
sessionStorage.removeItem("ultimaAcao");
console.log("Última ação após remoção:", sessionStorage.getItem("ultimaAcao"));

// clear: remove todos os itens
// sessionStorage.clear(); // Comentado para não interferir com outros exemplos

// Armazenando e recuperando objetos (assim como localStorage)
const estadoAtual = {
    pagina: "dashboard",
    filtros: {
        status: "todos",
        prioridade: "alta"
    },
    ordenacao: "data_desc"
};

sessionStorage.setItem("estadoAtual", JSON.stringify(estadoAtual));
const estadoRecuperado = JSON.parse(sessionStorage.getItem("estadoAtual"));
console.log("Estado recuperado:", estadoRecuperado);

// ----- Diferenças entre localStorage e sessionStorage -----
console.log("\n----- Diferenças entre localStorage e sessionStorage -----");

console.log("1. Persistência:");
console.log("   - localStorage: dados persistem mesmo após fechar o navegador");
console.log("   - sessionStorage: dados são apagados ao fechar a aba/janela");

console.log("\n2. Escopo:");
console.log("   - localStorage: compartilhado entre todas as abas do mesmo domínio");
console.log("   - sessionStorage: limitado à aba/janela específica que o criou");

console.log("\n3. Uso típico:");
console.log("   - localStorage: preferências de usuário, configurações, dados persistentes");
console.log("   - sessionStorage: estado temporário, dados de fluxo, formulários não enviados");

// ----- Quando usar cada um -----
console.log("\n----- Quando usar cada um -----");

console.log("Use localStorage para:");
console.log("- Preferências do usuário que devem persistir entre sessões");
console.log("- Dados do aplicativo que não são sensíveis");
console.log("- Cache local de informações que mudam pouco");
console.log("- Configurações de tema, idioma, etc.");

console.log("\nUse sessionStorage para:");
console.log("- Dados temporários durante uma única sessão");
console.log("- Estado de navegação dentro do aplicativo");
console.log("- Backup de formulários não enviados");
console.log("- Histórico de ações na sessão atual");
console.log("- Dados que não devem persistir entre sessões");

// ----- Exemplo Prático: Preferências de Usuário -----
console.log("\n----- Preferências de Usuário com SessionStorage -----");

// Classe para gerenciar preferências temporárias do usuário
class UserPreferences {
    constructor() {
        this.preferences = this.loadPreferences();
    }

    // Carrega preferências do sessionStorage
    loadPreferences() {
        try {
            const savedPrefs = sessionStorage.getItem('taskmaster_session_prefs');
            return savedPrefs ? JSON.parse(savedPrefs) : this.getDefaultPreferences();
        } catch (error) {
            console.error("Erro ao carregar preferências:", error);
            return this.getDefaultPreferences();
        }
    }

    // Preferências padrão
    getDefaultPreferences() {
        return {
            theme: 'light',
            fontSize: 'medium',
            sidebar: 'expanded',
            lastView: 'all',
            filters: {
                status: 'all',
                priority: 'all',
                search: ''
            },
            sortOrder: 'newest'
        };
    }

    // Salva preferências no sessionStorage
    savePreferences() {
        try {
            sessionStorage.setItem('taskmaster_session_prefs',
                JSON.stringify(this.preferences));
            console.log("Preferências da sessão salvas!");
        } catch (error) {
            console.error("Erro ao salvar preferências:", error);
        }
    }

    // Obtém uma preferência específica
    get(key, subKey = null) {
        if (subKey && this.preferences[key]) {
            return this.preferences[key][subKey];
        }
        return this.preferences[key];
    }

    // Define uma preferência
    set(key, value, subKey = null) {
        if (subKey) {
            if (!this.preferences[key]) {
                this.preferences[key] = {};
            }
            this.preferences[key][subKey] = value;
        } else {
            this.preferences[key] = value;
        }

        this.savePreferences();
        return true;
    }

    // Reinicia as preferências para os valores padrão
    reset() {
        this.preferences = this.getDefaultPreferences();
        this.savePreferences();
    }

    // Salva estado de visualização atual (para voltar após navegação)
    saveViewState(view, filters, sortOrder) {
        this.set('lastView', view);
        this.set('filters', filters);
        this.set('sortOrder', sortOrder);
    }

    // Restaura último estado de visualização
    getLastViewState() {
        return {
            view: this.get('lastView'),
            filters: this.get('filters'),
            sortOrder: this.get('sortOrder')
        };
    }
}

// Demonstração das preferências de usuário
const userPrefs = new UserPreferences();

// Mostrar preferências atuais (padrão ou já salvas)
console.log("Preferências iniciais:", userPrefs.preferences);

// Configurar algumas preferências
userPrefs.set('theme', 'dark');
userPrefs.set('filters', 'priority', 'high');
userPrefs.set('lastView', 'calendar');

// Verificar mudanças
console.log("\nApós alterações:");
console.log("- Tema:", userPrefs.get('theme'));
console.log("- Filtro de prioridade:", userPrefs.get('filters', 'priority'));
console.log("- Última visualização:", userPrefs.get('lastView'));

// Simulando navegação e salvando estado
const currentState = {
    filters: {
        status: 'pending',
        priority: 'all',
        search: 'javascript'
    },
    sortOrder: 'priority_desc'
};

userPrefs.saveViewState('list', currentState.filters, currentState.sortOrder);
console.log("\nEstado de visualização salvo!");

// Recuperando o estado salvo (útil quando o usuário volta para a página)
const lastState = userPrefs.getLastViewState();
console.log("Estado de visualização recuperado:", lastState);

// ----- Combinando localStorage e sessionStorage -----
console.log("\n----- Combinando localStorage e sessionStorage -----");

// Cenário: Sistema com configurações persistentes (localStorage) e estado de sessão (sessionStorage)
console.log("Criando sistema com persistência em camadas:");

// 1. Configurações duradouras (localStorage)
localStorage.setItem('tm_settings', JSON.stringify({
    notificationsEnabled: true,
    autoSave: true,
    language: 'pt-BR',
    defaultPriority: 'medium'
}));

// 2. Estado de sessão (sessionStorage)
sessionStorage.setItem('tm_session', JSON.stringify({
    currentProject: 'TaskMaster',
    openTabs: ['tarefas', 'estatisticas'],
    lastAction: 'edit_task',
    unsavedChanges: true
}));

// 3. Função para carregar configurações completas
function loadConfiguration() {
    // Carrega configurações persistentes
    const settings = JSON.parse(localStorage.getItem('tm_settings') || '{}');

    // Carrega estado da sessão
    const session = JSON.parse(sessionStorage.getItem('tm_session') || '{}');

    // Combina os dois
    return {
        settings,
        session
    };
}

const configuration = loadConfiguration();
console.log("Configuração completa:", configuration);

// 4. Simulando início de uma nova sessão (apenas o localStorage persistiria)
function simulateNewSession() {
    console.log("\nSimulando nova sessão (reinício do navegador)...");
    // sessionStorage seria limpo automaticamente
    // Simulando isso limpando manualmente
    sessionStorage.removeItem('tm_session');

    // Carregando novamente
    const newConfig = loadConfiguration();
    console.log("Nova sessão - configuração:", newConfig);
    console.log("- Configurações persistentes mantidas:", !!newConfig.settings.language);
    console.log("- Estado de sessão perdido:", !newConfig.session.currentProject);
}

// Descomentar para simular
// simulateNewSession();

// ----- Considerações de Segurança -----
console.log("\n----- Considerações de Segurança -----");

console.log("1. Dados Sensíveis:");
console.log("   - Nunca armazene senhas ou tokens de autenticação permanentes no storage");
console.log("   - O storage é acessível por qualquer JavaScript no mesmo domínio");

console.log("\n2. XSS (Cross-Site Scripting):");
console.log("   - Sempre valide e sanitize dados antes de armazenar");
console.log("   - Nunca execute código armazenado (evite eval())");

console.log("\n3. Alternativas para dados sensíveis:");
console.log("   - Cookies HttpOnly para autenticação");
console.log("   - Tokens de curta duração");
console.log("   - IndexedDB com validação de origem");

// Exemplo: armazenamento seguro de tokens temporários
function saveTemporaryToken(token, expirationMinutes = 30) {
    const expirationMs = expirationMinutes * 60 * 1000;
    const expiresAt = new Date().getTime() + expirationMs;

    // Armazena token com data de expiração
    sessionStorage.setItem('auth_token', JSON.stringify({
        value: token,
        expires: expiresAt
    }));
}

function getToken() {
    try {
        const tokenData = JSON.parse(sessionStorage.getItem('auth_token'));

        if (!tokenData) return null;

        // Verifica se expirou
        if (new Date().getTime() > tokenData.expires) {
            // Token expirado, remover
            sessionStorage.removeItem('auth_token');
            return null;
        }

        return tokenData.value;
    } catch (error) {
        console.error("Erro ao recuperar token:", error);
        return null;
    }
}

// Demonstração
console.log("\nDemonstrando armazenamento seguro de token:");
saveTemporaryToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...", 30);
console.log("Token salvo com expiração de 30 minutos");
console.log("Token recuperado:", getToken());