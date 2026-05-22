# Projeto Integrador - E-commerce de Tecnologia

Sistema de e-commerce desenvolvido em Angular com login de usuário e admin, CRUD de produtos consumindo dados do JSON-Server.

## Funcionalidades

### Sistema de Login
- **Admin**: Nome: `admin` | Senha: `12345`
  - Acesso completo ao CRUD de produtos
  - Gerenciamento de estoque
  
- **Usuário Comum**: Nome: qualquer (exceto "admin") | Senha: `54321`
  - Visualização apenas de produtos
  - Sem acesso ao gerenciamento

### Operações de Produtos
- **Listar produtos**: Visualização em grid com informações principais
- **Criar produtos** (admin): Formulário completo com validação
- **Editar produtos** (admin): Atualizar informações de produtos existentes
- **Deletar produtos** (admin): Remover produtos do catálogo

## Como Executar o Projeto

### 1. Instalar dependências
```bash
cd pi-ecommerce
npm install
```

### 2. Iniciar o JSON-Server (Backend Mock)

Em um **novo terminal**, execute:
```bash
npm install -g json-server

# Na pasta backend/
json-server --watch db.json --port 3000
```

Ou se receber erro de CORS:
```bash
json-server --watch db.json --port 3000 --cors
```

### 3. Iniciar o servidor Angular

Em outro **terminal**, na pasta `pi-ecommerce`:
```bash
ng serve
```

Ou:
```bash
npm start
```

### 4. Acessar a aplicação

Abra o navegador em: `http://localhost:4200`

## Credenciais de Teste

### Login como Admin
- Nome: `admin`
- Senha: `12345`
- Acesso: Gerenciar Produtos (CRUD completo)

### Login como Usuário
- Nome: `João` (ou qualquer nome que não seja "admin")
- Senha: `54321`
- Acesso: Apenas visualização de produtos

## Estrutura do Projeto

```
src/
├── app/
│   ├── core/
│   │   ├── services/
│   │   │   ├── auth.service.ts       # Autenticação
│   │   │   └── produto.service.ts    # CRUD de produtos
│   │   ├── guards/
│   │   │   ├── auth.guard.ts         # Proteção de rotas
│   │   │   └── admin.guard.ts        # Proteção admin
│   │   └── types/
│   │       └── types.ts               # Tipos de dados
│   ├── pages/
│   │   ├── login/                    # Tela de login
│   │   ├── produtos/                 # Listagem de produtos
│   │   └── gerenciar-produtos/       # CRUD de produtos (admin)
│   ├── shared/
│   │   └── navbar/                   # Barra de navegação
│   └── app.routes.ts                 # Rotas da aplicação
├── backend/
│   ├── db.json                       # Base de dados JSON-Server
│   └── JSON-SERVER-SETUP.md          # Instruções do JSON-Server
```

## Tecnologias Utilizadas

- **Angular 19.2.25**
- **TypeScript 5.7.2**
- **JSON-Server** (para simular API)
- **RxJS 7.8.0**

## Observações Importantes

1. **JSON-Server obrigatório**: A aplicação precisa do JSON-Server rodando em `http://localhost:3000`
2. **LocalStorage**: Dados de autenticação são salvos em localStorage
3. **Validação de formulários**: Implementada no componente
4. **Persistência**: Produtos são salvos no JSON-Server, não no localStorage

## Endpoints da API

```
GET    /produtos              # Listar todos
GET    /produtos/:id          # Buscar por ID
POST   /produtos              # Criar novo
PUT    /produtos/:id          # Atualizar
DELETE /produtos/:id          # Deletar
```

## Troubleshooting

### Erro: "Cannot GET /produtos"
- Verifique se o JSON-Server está rodando em `http://localhost:3000`
- Tente usar o comando com `--cors`: `json-server --watch db.json --port 3000 --cors`

### Login não funciona
- Verifique se o nome de usuário e senha estão corretos
- Senha de admin é `12345` (não 1234)
- Senha de usuário é `54321` (não 5432)

### Produtos não carregam
- Confirme que o JSON-Server está em execução
- Abra `http://localhost:3000/produtos` no navegador para validar


```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
