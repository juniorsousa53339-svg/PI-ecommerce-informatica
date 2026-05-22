# PI-ecommerce-informatica

## Como Rodar:

### Passo 1: Abra 2 terminais

#### Terminal 1 - JSON-Server (Backend)

```bash
cd pi-ecommerce/backend
npm install -g json-server  # (se ainda não tiver instalado)
json-server --watch db.json --port 3000
```



### Como Admin (Acesso Completo)
- **Nome**: `admin`
- **Senha**: `12345`

### Como Usuário (Apenas Visualização)
- **Nome**: qualquer nome (menos "admin")
- **Senha**: `54321`
-
---

# executar na pasta backend/
json-server --watch db.json --port 3000 --cors
#ou
json-server --watcb backend/db.json --port 3000 --cors

