// =======================================================================
// AULA: INTEGRAÇÃO DE JAVASCRIPT COM BACKEND USANDO MOCKAPI
// Duração: 1 hora e 40 minutos
// =======================================================================

// =======================================================================
// PARTE 1: INTRODUÇÃO ÀS APIS RESTFUL (15 minutos)
// =======================================================================

// O que são APIs e para que servem?
// ---------------------------------------------------------------------
// - API (Application Programming Interface) é um conjunto de regras que permite 
//   que diferentes aplicações se comuniquem entre si
// - As APIs web permitem que aplicações front-end se comuniquem com servidores back-end
// - Permitem separar a interface do usuário (frontend) da lógica de negócios e dados (backend)
// - Facilitam a integração entre sistemas diferentes

// Arquitetura cliente-servidor
// ---------------------------------------------------------------------
// - Cliente: aplicação que faz requisições (navegador, app móvel)
// - Servidor: sistema que processa as requisições e responde
// - O cliente e o servidor se comunicam através de um protocolo (geralmente HTTP)
// - Esta separação permite desenvolver frontend e backend independentemente

// Princípios REST e padrões de comunicação
// ---------------------------------------------------------------------
// - REST (Representational State Transfer) é um estilo de arquitetura
// - Uma API RESTful segue certos princípios:
//   * Utiliza URLs (endpoints) para identificar recursos
//   * Usa métodos HTTP para definir ações
//   * É stateless (sem estado) - cada requisição contém toda informação necessária
//   * Tem interfaces uniformes
//   * Geralmente usa JSON ou XML para transferência de dados

// Métodos HTTP e seus propósitos
// ---------------------------------------------------------------------
// - GET: Obter dados (leitura)
// - POST: Criar novos recursos
// - PUT: Atualizar recursos existentes (substituição completa)
// - PATCH: Atualizar recursos parcialmente
// - DELETE: Remover recursos

// Exemplos de endpoints em uma API RESTful para produtos:
// - GET /produtos - Lista todos os produtos
// - GET /produtos/123 - Obtém detalhes do produto com ID 123
// - POST /produtos - Cria um novo produto
// - PUT /produtos/123 - Atualiza completamente o produto 123
// - DELETE /produtos/123 - Remove o produto 123

// Códigos de status HTTP comuns
// ---------------------------------------------------------------------
// - 200 OK: Requisição bem-sucedida
// - 201 Created: Recurso criado com sucesso
// - 400 Bad Request: Erro na requisição do cliente
// - 401 Unauthorized: Autenticação necessária
// - 403 Forbidden: Cliente não tem permissão
// - 404 Not Found: Recurso não encontrado
// - 500 Internal Server Error: Erro no servidor

// Formato JSON para transferência de dados
// ---------------------------------------------------------------------
// - JSON (JavaScript Object Notation) é o formato mais comum para APIs modernas
// - É leve, fácil de ler e escrever tanto para humanos quanto para máquinas
// - Suportado nativamente pelo JavaScript
// - Estrutura similar a objetos JavaScript

// Exemplo de dados JSON:
const exampleJSON = `{
  "id": 1,
  "nome": "Smartphone XYZ",
  "preco": 1299.99,
  "estoque": 50,
  "categorias": ["eletrônicos", "celulares"],
  "especificacoes": {
    "tela": "6.5 polegadas",
    "processador": "Octa-core",
    "armazenamento": "128GB"
  }
}`;

// Convertendo entre JSON e objetos JavaScript:
const jsonString = '{"nome": "Produto", "preco": 29.99}';
const objetoJS = JSON.parse(jsonString); // Converte JSON para objeto
console.log(objetoJS.nome); // "Produto"

const objeto = { nome: "Novo Produto", preco: 49.99 };
const jsonStringNova = JSON.stringify(objeto); // Converte objeto para JSON
console.log(jsonStringNova); // '{"nome":"Novo Produto","preco":49.99}'

// =======================================================================
// PARTE 2: CONFIGURANDO O MOCKAPI (20 minutos)
// =======================================================================

// Introdução ao MockAPI
// ---------------------------------------------------------------------
// - MockAPI (https://mockapi.io/) é uma ferramenta para criar APIs falsas/simuladas
// - Permite criar endpoints RESTful sem precisar desenvolver um backend real
// - Ideal para aprendizado, prototipagem e testes
// - Gera dados falsos automaticamente
// - Suporta todas as operações CRUD (Create, Read, Update, Delete)

// Criação de um projeto e configuração de recursos
// ---------------------------------------------------------------------
// 1. Criar conta no MockAPI (https://mockapi.io/)
// 2. Criar um novo projeto (ex: "loja-virtual")
// 3. Criar um recurso "produtos" com os seguintes campos:
//    - id (gerado automaticamente)
//    - nome (string)
//    - descricao (string)
//    - preco (number)
//    - imagem (string - URL)
//    - estoque (number)

// A URL base da sua API será algo como:
// https://XXXXXXXXXXXX.mockapi.io/api/produtos

// Nota importante: Substitua a URL acima pela URL fornecida pelo MockAPI
// em seu projeto real durante a aula.

// Explorando os endpoints gerados
// ---------------------------------------------------------------------
// O MockAPI cria automaticamente endpoints RESTful:
//
// - GET /api/produtos - Lista todos os produtos
// - GET /api/produtos/:id - Busca um produto específico
// - POST /api/produtos - Cria um novo produto
// - PUT /api/produtos/:id - Atualiza um produto existente
// - DELETE /api/produtos/:id - Remove um produto

// =======================================================================
// PARTE 3: REQUISIÇÕES ASSÍNCRONAS COM JAVASCRIPT (25 minutos)
// =======================================================================

// Fundamentos de programação assíncrona
// ---------------------------------------------------------------------

// JavaScript é uma linguagem de programação single-threaded
// Para operações que levam tempo (como requisições HTTP), usamos padrões assíncronos

// 1. Callbacks (abordagem mais antiga)
// --------------------------------------
function buscarDadosCallback(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = function () {
        if (xhr.status === 200) {
            callback(null, JSON.parse(xhr.responseText));
        } else {
            callback(new Error(`Erro: ${xhr.status}`));
        }
    };
    xhr.onerror = function () {
        callback(new Error('Erro de rede'));
    };
    xhr.send();
}

// Exemplo de uso:
buscarDadosCallback('https://api.exemplo.com/produtos', function (erro, dados) {
    if (erro) {
        console.error('Ocorreu um erro:', erro);
    } else {
        console.log('Dados recebidos:', dados);
    }
});

// Problema dos callbacks: "Callback Hell" quando temos várias operações assíncronas aninhadas

// 2. Promises (abordagem moderna)
// -------------------------------
// Promises representam um valor que pode estar disponível agora, no futuro ou nunca
// Estados de uma Promise:
// - pending: estado inicial, nem cumprida nem rejeitada
// - fulfilled: operação concluída com sucesso
// - rejected: operação falhou

const minhaPromise = new Promise((resolve, reject) => {
    // Alguma operação assíncrona
    const sucesso = true;

    if (sucesso) {
        resolve('Dados obtidos com sucesso');
    } else {
        reject(new Error('Falha ao obter dados'));
    }
});

minhaPromise
    .then(resultado => {
        console.log(resultado); // Executado se a promise for resolvida
    })
    .catch(erro => {
        console.error(erro); // Executado se a promise for rejeitada
    })
    .finally(() => {
        console.log('Operação finalizada'); // Executado em ambos os casos
    });

// 3. Async/Await (abordagem moderna baseada em Promises)
// -----------------------------------------------------
// Sintaxe mais limpa para trabalhar com Promises

async function minhaFuncaoAsync() {
    try {
        // await "pausa" a execução até que a Promise seja resolvida
        const resultado = await minhaPromise;
        console.log(resultado);
        return resultado;
    } catch (erro) {
        console.error('Erro capturado:', erro);
        throw erro; // Re-lança o erro para ser tratado por quem chamou a função
    }
}

// Fetch API
// ---------------------------------------------------------------------
// Interface moderna para fazer requisições HTTP
// Retorna Promises, facilitando o uso de .then() e async/await

// 1. Requisição GET básica
fetch('https://api.exemplo.com/produtos')
    .then(response => {
        // Primeiro verificamos se a resposta está ok (status 200-299)
        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
        }
        // Depois convertemos a resposta para JSON
        return response.json();
    })
    .then(data => {
        console.log('Dados recebidos:', data);
    })
    .catch(error => {
        console.error('Erro na requisição:', error);
    });

// 2. Usando async/await com Fetch (mais limpo)
async function buscarProdutos() {
    try {
        const response = await fetch('https://api.exemplo.com/produtos');

        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
        }

        const produtos = await response.json();
        return produtos;
    } catch (error) {
        console.error('Erro ao buscar produtos:', error);
        throw error;
    }
}

// 3. Requisição POST (criar novo recurso)
async function criarProduto(dadosProduto) {
    try {
        const response = await fetch('https://api.exemplo.com/produtos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dadosProduto)
        });

        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
        }

        const produtoCriado = await response.json();
        return produtoCriado;
    } catch (error) {
        console.error('Erro ao criar produto:', error);
        throw error;
    }
}

// 4. Requisição PUT (atualizar recurso)
async function atualizarProduto(id, dadosProduto) {
    try {
        const response = await fetch(`https://api.exemplo.com/produtos/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dadosProduto)
        });

        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
        }

        const produtoAtualizado = await response.json();
        return produtoAtualizado;
    } catch (error) {
        console.error('Erro ao atualizar produto:', error);
        throw error;
    }
}

// 5. Requisição DELETE (remover recurso)
async function excluirProduto(id) {
    try {
        const response = await fetch(`https://api.exemplo.com/produtos/${id}`, {
            method: 'DELETE'
        });

        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
        }

        // Alguns endpoints retornam o recurso excluído, outros retornam vazio
        return await response.json().catch(() => ({}));
    } catch (error) {
        console.error('Erro ao excluir produto:', error);
        throw error;
    }
}

// Alternativa: Axios (biblioteca popular para requisições HTTP)
// ---------------------------------------------------------------------
// Vantagens sobre o Fetch:
// - Sintaxe mais simples
// - Tratamento automático de JSON
// - Interceptadores de requisições e respostas
// - Cancelamento de requisições
// - Melhor tratamento de erros

// Precisa ser incluído via CDN ou npm:
// <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

// Exemplo básico com Axios
async function buscarProdutosComAxios() {
    try {
        // Não precisa verificar response.ok nem converter para JSON
        const response = await axios.get('https://api.exemplo.com/produtos');
        return response.data; // Axios já converte a resposta para JSON
    } catch (error) {
        console.error('Erro ao buscar produtos:', error);
        throw error;
    }
}

// POST com Axios
async function criarProdutoComAxios(dadosProduto) {
    try {
        const response = await axios.post('https://api.exemplo.com/produtos', dadosProduto);
        return response.data;
    } catch (error) {
        console.error('Erro ao criar produto:', error);
        throw error;
    }
}

// Tratamento de erros em requisições
// ---------------------------------------------------------------------

async function exemploTratamentoErros() {
    try {
        const response = await fetch('https://api.exemplo.com/produtos');

        // Verificar o status da resposta
        if (response.status === 404) {
            console.error('Recurso não encontrado');
            // Tratar especificamente erro 404
        } else if (response.status === 401 || response.status === 403) {
            console.error('Problema de autenticação ou autorização');
            // Redirecionar para login, por exemplo
        } else if (!response.ok) {
            console.error(`Erro HTTP: ${response.status}`);
            // Tratar outros erros HTTP
        }

        const data = await response.json();
        return data;
    } catch (error) {
        // Erros de rede ou de parsing JSON cairão aqui
        if (error instanceof SyntaxError) {
            console.error('Erro ao parsear JSON:', error);
        } else if (error.name === 'AbortError') {
            console.error('Requisição cancelada');
        } else {
            console.error('Erro na requisição:', error);
        }

        // Exibir mensagem de erro amigável para o usuário
        mostrarErroNaInterface('Não foi possível completar a operação. Tente novamente mais tarde.');

        // Opcionalmente, registrar o erro em um serviço de log
        // logError(error);

        throw error; // Re-lançar para tratamento adicional, se necessário
    }
}

// EXERCÍCIO PRÁTICO:
// Realizar requisições GET para obter dados do MockAPI e exibir no console

// =======================================================================
// PARTE 4: INTEGRAÇÃO COM O FRONTEND (30 minutos)
// =======================================================================

// Estruturação do projeto
// ---------------------------------------------------------------------
// Arquivos necessários:
// - index.html: Interface do usuário
// - styles.css: Estilização
// - script.js: Lógica e requisições

// Substituir este valor pela URL da sua API no MockAPI
const API_URL = 'https://XXXXXXXXXXXX.mockapi.io/api/produtos';

// Elementos do DOM que serão utilizados
// (supondo que existem no HTML)
let productsList;
let productForm;
let loadingIndicator;

// Função de inicialização
function init() {
    // Selecionar elementos do DOM
    productsList = document.getElementById('productsList');
    productForm = document.getElementById('productForm');
    loadingIndicator = document.getElementById('loadingIndicator');

    // Carregar produtos iniciais
    loadProducts();

    // Configurar eventos
    setupEventListeners();
}

// Exibir/ocultar indicador de carregamento
function showLoading() {
    if (loadingIndicator) {
        loadingIndicator.style.display = 'block';
    }
}

function hideLoading() {
    if (loadingIndicator) {
        loadingIndicator.style.display = 'none';
    }
}

// Implementação das operações CRUD
// ---------------------------------------------------------------------

// 1. READ: Buscar e exibir produtos
async function loadProducts() {
    showLoading();
    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
        }

        const products = await response.json();
        displayProducts(products);
    } catch (error) {
        console.error('Erro ao carregar produtos:', error);
        showError('Não foi possível carregar os produtos. Tente novamente mais tarde.');
    } finally {
        hideLoading();
    }
}

// Função para exibir produtos no DOM
function displayProducts(products) {
    if (!productsList) return;

    productsList.innerHTML = '';

    if (products.length === 0) {
        productsList.innerHTML = '<p>Nenhum produto encontrado.</p>';
        return;
    }

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
      <img src="${product.imagem || 'https://via.placeholder.com/150'}" 
           alt="${product.nome}" 
           class="product-image">
      <div class="product-info">
        <h3 class="product-name">${product.nome}</h3>
        <p class="product-price">R$ ${product.preco.toFixed(2)}</p>
        <p class="product-stock">Estoque: ${product.estoque} unidades</p>
        <div class="product-actions">
          <button class="edit-btn" data-id="${product.id}">Editar</button>
          <button class="delete-btn" data-id="${product.id}">Excluir</button>
        </div>
      </div>
    `;

        productsList.appendChild(productCard);
    });

    // Adicionar event listeners aos botões
    setupProductButtons();
}

// 2. CREATE: Adicionar novo produto
async function createProduct(productData) {
    showLoading();
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productData)
        });

        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
        }

        const newProduct = await response.json();
        console.log('Produto criado:', newProduct);

        // Recarregar lista de produtos
        await loadProducts();

        // Limpar formulário
        resetForm();

        // Mostrar mensagem de sucesso
        showMessage('Produto adicionado com sucesso!');
    } catch (error) {
        console.error('Erro ao criar produto:', error);
        showError('Não foi possível adicionar o produto. Tente novamente.');
    } finally {
        hideLoading();
    }
}

// 3. UPDATE: Atualizar produto existente
async function updateProduct(id, productData) {
    showLoading();
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productData)
        });

        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
        }

        const updatedProduct = await response.json();
        console.log('Produto atualizado:', updatedProduct);

        // Recarregar lista de produtos
        await loadProducts();

        // Limpar formulário
        resetForm();

        // Mostrar mensagem de sucesso
        showMessage('Produto atualizado com sucesso!');
    } catch (error) {
        console.error('Erro ao atualizar produto:', error);
        showError('Não foi possível atualizar o produto. Tente novamente.');
    } finally {
        hideLoading();
    }
}

// 4. DELETE: Remover produto
async function deleteProduct(id) {
    // Confirmar antes de excluir
    if (!confirm('Tem certeza que deseja excluir este produto?')) {
        return;
    }

    showLoading();
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE'
        });

        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
        }

        console.log('Produto excluído:', id);

        // Recarregar lista de produtos
        await loadProducts();

        // Mostrar mensagem de sucesso
        showMessage('Produto excluído com sucesso!');
    } catch (error) {
        console.error('Erro ao excluir produto:', error);
        showError('Não foi possível excluir o produto. Tente novamente.');
    } finally {
        hideLoading();
    }
}

// Funções auxiliares para manipulação do DOM
// ---------------------------------------------------------------------

// Configurar event listeners
function setupEventListeners() {
    // Event listener para o formulário
    if (productForm) {
        productForm.addEventListener('submit', handleFormSubmit);
    }

    // Botão de cancelar edição
    const cancelButton = document.getElementById('cancelButton');
    if (cancelButton) {
        cancelButton.addEventListener('click', resetForm);
    }

    // Botão de busca
    const searchButton = document.getElementById('searchButton');
    if (searchButton) {
        searchButton.addEventListener('click', handleSearch);
    }

    // Input de busca (Enter)
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleSearch();
            }
        });
    }

    // Paginação
    setupPaginationButtons();
}

// Configurar botões para cada produto
function setupProductButtons() {
    // Botões de edição
    document.querySelectorAll('.edit-btn').forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.getAttribute('data-id');
            editProduct(productId);
        });
    });

    // Botões de exclusão
    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.getAttribute('data-id');
            deleteProduct(productId);
        });
    });
}

// Configurar botões de paginação
function setupPaginationButtons() {
    const prevPageButton = document.getElementById('prevPage');
    const nextPageButton = document.getElementById('nextPage');

    if (prevPageButton) {
        prevPageButton.addEventListener('click', () => {
            // Implementação da paginação...
        });
    }

    if (nextPageButton) {
        nextPageButton.addEventListener('click', () => {
            // Implementação da paginação...
        });
    }
}

// Manipular envio do formulário
function handleFormSubmit(event) {
    event.preventDefault();

    // Obter dados do formulário
    const productId = document.getElementById('productId').value;
    const productData = {
        nome: document.getElementById('productName').value.trim(),
        descricao: document.getElementById('productDescription').value.trim(),
        preco: parseFloat(document.getElementById('productPrice').value),
        imagem: document.getElementById('productImage').value.trim(),
        estoque: parseInt(document.getElementById('productStock').value)
    };

    // Validar dados
    if (!productData.nome || isNaN(productData.preco) || isNaN(productData.estoque)) {
        showError('Por favor, preencha todos os campos obrigatórios corretamente.');
        return;
    }

    // Criar ou atualizar produto
    if (productId) {
        updateProduct(productId, productData);
    } else {
        createProduct(productData);
    }
}

// Manipular busca de produtos
function handleSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput ? searchInput.value.trim() : '';

    // Implementação da busca...
    console.log('Buscando por:', searchTerm);
}

// Preparar formulário para edição
async function editProduct(id) {
    showLoading();
    try {
        const response = await fetch(`${API_URL}/${id}`);

        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
        }

        const product = await response.json();

        // Preencher formulário com dados do produto
        document.getElementById('productId').value = product.id;
        document.getElementById('productName').value = product.nome;
        document.getElementById('productDescription').value = product.descricao;
        document.getElementById('productPrice').value = product.preco;
        document.getElementById('productImage').value = product.imagem || '';
        document.getElementById('productStock').value = product.estoque;

        // Atualizar título e botões do formulário
        document.getElementById('formTitle').textContent = 'Editar Produto';
        document.getElementById('saveButton').textContent = 'Atualizar';
        document.getElementById('cancelButton').style.display = 'block';

        // Rolar para o formulário
        document.querySelector('.form-section').scrollIntoView({ behavior: 'smooth' });
    } catch (error) {
        console.error('Erro ao buscar produto para edição:', error);
        showError('Não foi possível carregar os dados do produto.');
    } finally {
        hideLoading();
    }
}

// Resetar formulário
function resetForm() {
    if (!productForm) return;

    productForm.reset();
    document.getElementById('productId').value = '';
    document.getElementById('formTitle').textContent = 'Adicionar Novo Produto';
    document.getElementById('saveButton').textContent = 'Salvar';
    document.getElementById('cancelButton').style.display = 'none';
}

// Exibir mensagem de sucesso
function showMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.className = 'message success';
    messageElement.textContent = message;

    const container = document.querySelector('.form-section');
    if (container) {
        container.prepend(messageElement);

        // Remover mensagem após alguns segundos
        setTimeout(() => {
            messageElement.remove();
        }, 3000);
    }
}

// Exibir mensagem de erro
function showError(message) {
    const errorElement = document.createElement('div');
    errorElement.className = 'error';
    errorElement.textContent = message;

    const container = document.querySelector('.form-section');
    if (container) {
        container.prepend(errorElement);

        // Remover mensagem após alguns segundos
        setTimeout(() => {
            errorElement.remove();
        }, 5000);
    }
}

// =======================================================================
// PARTE 5: IMPLEMENTANDO FUNCIONALIDADES AVANÇADAS (15 minutos)
// =======================================================================

// Paginação de resultados
// ---------------------------------------------------------------------
let currentPage = 1;
const ITEMS_PER_PAGE = 6;

// Função para buscar produtos com paginação
async function loadProductsWithPagination(page = 1) {
    showLoading();
    try {
        const response = await fetch(`${API_URL}?page=${page}&limit=${ITEMS_PER_PAGE}`);

        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
        }

        const products = await response.json();

        // Obter contagem total de produtos (depende da API suportar)
        const totalCount = parseInt(response.headers.get('X-Total-Count') || '0');
        const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);

        // Atualizar informações de paginação
        updatePaginationInfo(page, totalPages);

        // Exibir produtos
        displayProducts(products);
    } catch (error) {
        console.error('Erro ao carregar produtos:', error);
        showError('Não foi possível carregar os produtos.');
    } finally {
        hideLoading();
    }
}

// Atualizar informações de paginação na interface
function updatePaginationInfo(currentPage, totalPages) {
    const pageInfo = document.getElementById('pageInfo');
    const prevButton = document.getElementById('prevPage');
    const nextButton = document.getElementById('nextPage');

    if (pageInfo) {
        pageInfo.textContent = `Página ${currentPage} de ${totalPages || 1}`;
    }

    if (prevButton) {
        prevButton.disabled = currentPage <= 1;
    }

    if (nextButton) {
        nextButton.disabled = currentPage >= totalPages;
    }
}

// Filtragem e busca de produtos
// ---------------------------------------------------------------------
async function searchProducts(searchTerm) {
    showLoading();
    try {
        // Note: A implementação exata depende do suporte da API
        // Alguns backends suportam parâmetros como ?nome_like=termo
        const response = await fetch(`${API_URL}?nome_like=${encodeURIComponent(searchTerm)}`);

        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
        }

        const products = await response.json();
        displayProducts(products);
    } catch (error) {
        console.error('Erro ao buscar produtos:', error);
        showError('Não foi possível realizar a busca.');
    } finally {
        hideLoading();
    }
}

// Feedback para o usuário (loading states)
// ---------------------------------------------------------------------
// (Já implementado nas funções showLoading e hideLoading)

// Validação de dados antes do envio
// ---------------------------------------------------------------------
function validateProductData(productData) {
    const errors = [];

    if (!productData.nome || productData.nome.length < 3) {
        errors.push('Nome do produto deve ter pelo menos 3 caracteres.');
    }

    if (!productData.descricao || productData.descricao.length < 10) {
        errors.push('Descrição deve ter pelo menos 10 caracteres.');
    }

    if (isNaN(productData.preco) || productData.preco <= 0) {
        errors.push('Preço deve ser um número positivo.');
    }

    if (isNaN(productData.estoque) || productData.estoque < 0) {
        errors.push('Estoque deve ser um número não-negativo.');
    }

    return errors;
}

// Função para validar dados do formulário
function validateForm() {
    const productData = {
        nome: document.getElementById('productName').value.trim(),
        descricao: document.getElementById('productDescription').value.trim(),
        preco: parseFloat(document.getElementById('productPrice').value),
        imagem: document.getElementById('productImage').value.trim(),
        estoque: parseInt(document.getElementById('productStock').value)
    };

    const errors = validateProductData(productData);

    if (errors.length > 0) {
        // Exibir erros na interface
        showError(errors.join('<br>'));
        return false;
    }

    return true;
}

// Otimizações de desempenho
// ---------------------------------------------------------------------

// 1. Debounce para busca
// Evita realizar várias requisições enquanto o usuário digita
function debounce(func, delay = 300) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

// Exemplo de uso:
const debouncedSearch = debounce((term) => {
    searchProducts(term);
}, 500);

// 2. Memoização para dados frequentemente acessados
const cache = new Map();

async function cachedFetch(url, options = {}) {
    // Só aplica cache para GETs
    if (options.method && options.method !== 'GET') {
        return fetch(url, options);
    }

    const cacheKey = url;

    // Verificar se temos os dados em cache e se ainda são válidos
    if (cache.has(cacheKey)) {
        const { data, timestamp } = cache.get(cacheKey);
        const cacheAge = Date.now() - timestamp;

        // Cache válido por 5 minutos (300000ms)
        if (cacheAge < 300000) {
            console.log('Usando dados em cache para:', url);
            return {
                ok: true,
                json: () => Promise.resolve(data),
                // Simular outros métodos/propriedades conforme necessário
            };
        }
    }

    // Se não está em cache ou expirou, buscar da rede
    const response = await fetch(url, options);

    if (response.ok) {
        // Clonar a resposta para não consumir o body
        const clonedResponse = response.clone();
        const data = await clonedResponse.json();

        // Armazenar em cache
        cache.set(cacheKey, {
            data,
            timestamp: Date.now()
        });
    }

    return response;
}

// =======================================================================
// PARTE 6: ENCERRAMENTO E DESAFIOS (10 minutos)
// =======================================================================

// Revisão dos conceitos principais
// ---------------------------------------------------------------------
// - APIs RESTful: interface para comunicação entre cliente e servidor
// - Operações CRUD: Create (POST), Read (GET), Update (PUT), Delete (DELETE)
// - Requisições assíncronas: callbacks, Promises, async/await
// - Fetch API e Axios: ferramentas para fazer requisições HTTP
// - Manipulação do DOM: integração dos dados da API com a interface
// - Paginação, busca e filtragem: funcionalidades avançadas
// - Tratamento de erros e feedback ao usuário

// Problemas comuns e soluções
// ---------------------------------------------------------------------

// 1. CORS (Cross-Origin Resource Sharing)
// --------------------------------------
// Problema: O navegador bloqueia requisições para domínios diferentes
// Solução no backend: Configurar cabeçalhos CORS adequados
// Solução temporária: Usar proxies CORS ou extensões para desenvolvimento

// 2. Tratamento de erros
// ---------------------
// Problema: Erros não tratados quebram a aplicação
// Solução: Implementar try/catch em todas as operações assíncronas
//          Fornecer feedback visual ao usuário

// 3. Estado de carregamento
// -----------------------
// Problema: Usuário não sabe se a requisição está em andamento
// Solução: Implementar indicadores de loading e estados de UI

// 4. Cache e performance
// --------------------
// Problema: Requisições desnecessárias
// Solução: Implementar cache local, debounce para busca

// Próximos passos para estudo
// ---------------------------------------------------------------------
// - Autenticação e autorização: tokens JWT, OAuth
// - GraphQL: alternativa ao REST com consultas mais flexíveis
// - WebSockets: comunicação em tempo real
// - Service Workers: melhorar performance offline
// - Frameworks de UI: React, Vue, Angular para interfaces mais complexas

// Desafios adicionais para prática
// ---------------------------------------------------------------------

// Desafio 1: Implementar autenticação simulada
// - Criar recurso "usuarios" no MockAPI
// - Adicionar tela de login
// - Implementar token de autenticação simulado (localStorage)
// - Proteger rotas que exigem autenticação

// Desafio 2: Expandir funcionalidades
// - Adicionar categorias para produtos
// - Implementar um carrinho de compras
// - Adicionar sistema de avaliações para produtos
// - Implementar favoritos/lista de desejos

// Desafio 3: Melhorias de UX
// - Adicionar animações de transição
// - Implementar tema claro/escuro
// - Melhorar responsividade para diferentes dispositivos
// - Adicionar drag-and-drop para reordenar itens

// Inicialização da aplicação
// ---------------------------------------------------------------------
// Quando o DOM estiver completamente carregado, iniciar a aplicação
document.addEventListener('DOMContentLoaded', init);

// =======================================================================
// RECURSOS ADICIONAIS
// =======================================================================

// Documentação recomendada:
// - MDN Web Docs (JavaScript, Fetch API): https://developer.mozilla.org
// - MockAPI: https://mockapi.io/docs
// - JSON Placeholder (alternativa ao MockAPI): https://jsonplaceholder.typicode.com
// - Axios: https://axios-http.com/docs/intro
// - HTTPStatusDogs (memória visual para códigos de status): https://httpstatusdogs.com