#!/bin/bash

# ===================================================
# Roteiro de Aula: Introdução ao Git
# ===================================================

# ===================================================
# 1. História e Conceitos Básicos do Git
# ===================================================

# Origem e criação
# - Criado por Linus Torvalds em 2005 para o desenvolvimento do kernel Linux
# - Sistema de controle de versão distribuído (DVCS)
# - Alternativa a sistemas centralizados como SVN e CVS

# Conceitos fundamentais
# - Repositório: armazenamento de arquivos e histórico de mudanças
# - Commit: snapshot do projeto em um momento específico
# - Branch: linha independente de desenvolvimento
# - Merge: combinar alterações de diferentes branches
# - Clone: cópia completa de um repositório
# - Pull/Push: sincronização de mudanças

# - Demonstração do funcionamento da versionamento com git no quadro.

# ===================================================
# 1.1 - Criar conta no github
# ===================================================

# ===================================================
# 1.2 - Adicionar chave ssh
# ===================================================

# ===================================================
# 1.3 - Criar repositório no github
# ===================================================

# ===================================================
# 2. Configuração Inicial do Git
# ===================================================

# Configurar nome de usuário
git config --global user.name "Seu Nome"

# Configurar email
git config --global user.email "seu.email@exemplo.com"

# Verificar configurações
git config --list

# ===================================================
# 3. Comandos Básicos do Git
# ===================================================

# Iniciando um Repositório
# ------------------------

# Criar um novo repositório
git init

# Verificar status do repositório
git status

# Adicionando e Commitando Arquivos
# ---------------------------------

# Adicionar arquivo específico para área de staging
git add arquivo.txt

# Adicionar todos os arquivos modificados
git add .

# Realizar commit das mudanças
git commit -m "Mensagem descritiva do commit"

# Verificar histórico de commits
git log

# Branches
# -------

# Listar branches
git branch

# Criar novo branch
git branch nome-do-branch

# Mudar para outro branch
git checkout nome-do-branch

# Criar e mudar para novo branch (atalho)
git checkout -b nome-do-branch

# Merge e Resolução de Conflitos
# -----------------------------

# Integrar mudanças de um branch para outro
git merge nome-do-branch

# Caso haja conflitos, resolver manualmente e depois:
git add arquivo-com-conflito
git commit -m "Resolução de conflitos"

# ===================================================
# 4. Trabalhando com Repositórios Remotos
# ===================================================

# Clonar repositório existente
git clone https://github.com/usuario/repositorio.git

# Adicionar repositório remoto
git remote add origin https://github.com/usuario/repositorio.git

# Enviar alterações para repositório remoto
git push origin nome-do-branch

# Obter atualizações do repositório remoto
git pull origin nome-do-branch

# Listar repositórios remotos configurados
git remote -v

# ===================================================
# 5. Fluxo de Trabalho Básico
# ===================================================

# 1. Verificar status
git status

# 2. Atualizar repositório local
git pull

# 3. Criar branch para nova feature
git checkout -b feature/nova-funcionalidade

# 4. Fazer alterações nos arquivos
# (Edição manual dos arquivos do projeto)

# 5. Adicionar arquivos modificados
git add .

# 6. Commitar alterações
git commit -m "Implementa nova funcionalidade"

# 7. Enviar alterações para o repositório remoto
git push origin feature/nova-funcionalidade

# ===================================================
# 6. Gitignore e Boas Práticas
# ===================================================

# Criar arquivo .gitignore
touch .gitignore

# Editar .gitignore para ignorar arquivos/diretórios
# Exemplo de conteúdo:
# node_modules/
# .env
# *.log

# ===================================================
# 7. Ferramentas e Plataformas
# ===================================================

# - GitHub: hospedagem de repositórios, colaboração, issues, pull requests
# - GitLab: alternativa ao GitHub com CI/CD integrado
# - Bitbucket: opção com integração com produtos Atlassian
# - Interfaces gráficas: GitKraken, SourceTree, GitHub Desktop, VSCode Git

# ===================================================
# Exercício Prático: TaskMaster com Controle de Versão
# ===================================================

# Objetivo: Implementar controle de versão para o projeto TaskMaster.

# Instruções:

# 1. Inicialize um repositório Git na pasta do projeto TaskMaster
git init

# 2. Crie um arquivo .gitignore apropriado para projetos web
cat > .gitignore << EOL
# Dependências
node_modules/
package-lock.json

# Arquivos de ambiente
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Arquivos de build
/dist
/build

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*
*.log

# Arquivos do sistema
.DS_Store
Thumbs.db

# Arquivos de IDE/editores
.idea/
.vscode/
*.sublime-project
*.sublime-workspace
EOL

# 3. Adicione os arquivos iniciais (HTML, CSS, JS) e faça o primeiro commit
git add .
git commit -m "Commit inicial: estrutura básica do TaskMaster"

# 4. Crie um branch de desenvolvimento chamado `dev`
git checkout -b dev

# 5. No branch `dev`:
#    - Adicione funcionalidade para criar novas tarefas
#    - Faça commit das alterações
git add .
git commit -m "Adiciona funcionalidade para criar novas tarefas"

# 6. Crie um branch `feature/delete-task` a partir do `dev`
git checkout -b feature/delete-task

# 7. No branch `feature/delete-task`:
#    - Implemente a funcionalidade para excluir tarefas
#    - Faça commit das alterações
git add .
git commit -m "Implementa funcionalidade para excluir tarefas"

# 8. Volte para o branch `dev` e faça merge do branch `feature/delete-task`
git checkout dev
git merge feature/delete-task

# 9. Crie um repositório no GitHub
# (Criar manualmente através do site do GitHub)

# 10. Adicione o repositório remoto e envie todos os branches
git remote add origin https://github.com/seu-usuario/taskmaster.git
git push -u origin main
git push -u origin dev
git push -u origin feature/delete-task

# ===================================================
# Exercícios para os Alunos
# ===================================================

# Exercício 1: Inicializar um repositório e criar o primeiro commit
# 
# Objetivo: Praticar a criação de um repositório Git e o primeiro commit.
#
# Instruções:
# 1. Crie uma pasta para o projeto TaskMaster no seu computador
# 2. Abra o terminal (ou prompt de comando) nesta pasta
# 3. Inicialize um repositório Git
# 4. Crie um arquivo README.md com uma breve descrição do projeto
# 5. Adicione o arquivo ao staging
# 6. Faça o commit com uma mensagem descritiva
#
# Resolução:
# mkdir TaskMaster
# cd TaskMaster
# git init
# echo "# TaskMaster" > README.md
# echo "Um aplicativo de gerenciamento de tarefas desenvolvido para o curso de JavaScript." >> README.md
# git add README.md
# git commit -m "Adiciona arquivo README com descrição do projeto"

# ===================================================

# Exercício 2: Trabalhar com branches
#
# Objetivo: Praticar a criação e navegação entre branches.
#
# Instruções:
# 1. Partindo do repositório criado no exercício 1
# 2. Crie um arquivo index.html com uma estrutura HTML básica
# 3. Adicione e commit este arquivo
# 4. Crie um novo branch chamado "feature/estilo"
# 5. Mude para este branch
# 6. Crie um arquivo style.css vazio
# 7. Adicione e commit este arquivo
# 8. Volte para o branch principal (main ou master)
#
# Resolução:
# echo "<!DOCTYPE html>" > index.html
# echo "<html><head><title>TaskMaster</title></head><body><h1>TaskMaster</h1></body></html>" >> index.html
# git add index.html
# git commit -m "Adiciona estrutura HTML básica"
# git branch feature/estilo
# git checkout feature/estilo
# touch style.css
# git add style.css
# git commit -m "Adiciona arquivo CSS vazio"
# git checkout main

# ===================================================

# Exercício 3: Merge de branches
#
# Objetivo: Praticar a combinação de mudanças usando merge.
#
# Instruções:
# 1. Partindo do estado final do exercício 2
# 2. No branch "feature/estilo", adicione código CSS básico ao arquivo style.css
# 3. Adicione e commit esta alteração
# 4. Volte para o branch principal
# 5. Faça merge do branch "feature/estilo" para o branch principal
#
# Resolução:
# git checkout feature/estilo
# echo "body { font-family: Arial, sans-serif; margin: 0; padding: 20px; }" > style.css
# echo "h1 { color: #333; }" >> style.css
# git add style.css
# git commit -m "Adiciona estilos básicos"
# git checkout main
# git merge feature/estilo

# ===================================================

# Exercício 4: Configurar um repositório remoto
#
# Objetivo: Praticar a configuração e uso de um repositório remoto.
#
# Instruções:
# 1. Crie um novo repositório no GitHub (sem inicializar com README)
# 2. Conecte seu repositório local ao repositório remoto
# 3. Envie todos os seus commits para o repositório remoto
#
# Resolução:
# # Após criar o repositório no GitHub:
# git remote add origin https://github.com/seu-usuario/taskmaster.git
# git push -u origin main