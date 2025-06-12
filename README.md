# TrashTracker Backend

API REST para gerenciamento de pontos críticos de lixo urbano, desenvolvida com Node.js, Express e MongoDB.


## 🚀 Tecnologias

- **Node.js** - Runtime JavaScript
- **Express** - Framework web
- **MongoDB** - Banco de dados NoSQL
- **Mongoose** - ODM para MongoDB
- **CORS** - Middleware para Cross-Origin Resource Sharing

## 📋 Funcionalidades

- ✅ Cadastro de pontos críticos de lixo
- ✅ Listagem de pontos cadastrados
- ✅ Armazenamento de imagens em base64
- ✅ Coordenadas GPS (latitude/longitude)
- ✅ Tipos de coleta (manual/caminhão)

## 🛠️ Instalação e Configuração

### Pré-requisitos

- Node.js (versão 14 ou superior)
- MongoDB (local ou MongoDB Atlas)
- npm ou yarn

### Passo a passo

1. **Clone o repositório**
```bash
git clone https://github.com/ronipassion/trashtracker-backend.git
cd trashtracker-backend
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure as variáveis de ambiente**
Crie um arquivo `.env` na raiz do projeto:
```env
MONGODB_URI=mongodb://localhost:27017/trashtracker
PORT=3000
NODE_ENV=development
```

4. **Execute o servidor**
```bash
# Desenvolvimento
npm run dev

# Produção
npm start
```

## 📡 Endpoints da API

### Base URL: `http://localhost:3000/api`

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `GET` | `/trash-points` | Lista todos os pontos críticos |
| `POST` | `/trash-points` | Cadastra um novo ponto crítico |

### Exemplo de Requisição POST

```json
{
  "title": "Lixo acumulado na esquina",
  "photoBase64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABA...",
  "latitude": -8.0476,
  "longitude": -34.877,
  "collectionType": "manual - segunda a sábado"
}
```

### Exemplo de Resposta

```json
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "title": "Lixo acumulado na esquina",
    "photoURL": "data:image/jpeg;base64,/9j/4AAQSkZJRgABA...",
    "latitude": -8.0476,
    "longitude": -34.877,
    "collectionType": "manual - segunda a sábado",
    "createdAt": "2024-01-20T10:30:00.000Z"
  }
}
```

## 📁 Estrutura do Projeto

```
├── src/
│   ├── controllers/
│   │   └── trashPointController.js
│   ├── models/
│   │   └── TrashPoint.js
│   ├── routes/
│   │   └── trashPointRoutes.js
│   └── config/
│       └── database.js
├── .env.example
├── .gitignore
├── package.json
├── server.js
└── README.md
```

## 🔧 Scripts Disponíveis

```bash
# Iniciar servidor em desenvolvimento (com nodemon)
npm run dev

# Iniciar servidor em produção
npm start

# Verificar sintaxe do código
npm run lint
```

## 🌍 Deploy

### Railway / Render / Heroku

1. Configure as variáveis de ambiente na plataforma
2. Configure `MONGODB_URI` para seu MongoDB Atlas
3. Deploy automático via GitHub

### Variáveis de Ambiente para Produção

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/trashtracker
PORT=3000
NODE_ENV=production
```

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Add: nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👥 Autor

- Roni Paixão - [@ronipassion](https://github.com/ronipassion/)

## 🔗 Links Relacionados

- [TrashTracker Mobile App](https://github.com/ronipassion/TrashTrackk.git)
