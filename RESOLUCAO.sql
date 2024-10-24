CRUD

C - CREATE - 
R - READ - LISTAGEM DE DADOS
U - UPDATE - FALTA FAZER
D - DELETE - FEITO


---------
REST FUL API
VERBOS http

URL + GET =  CONSULTAR DADOS
URL/ID + GET =  CONSULTAR UM REGISTRO
URL + DADOS + POST = CRIAR DADOS
URL/ID + PUT = ALTERAR DADOS
URL/ID + DELETE = DELETAR DADOS


EXECUTAR FRONTEND
npm install
npm run dev

DENTRO DA PASTA /backend

npm install -g json-server
npx json-server --watch db.json




Lista Produtos - GET - http://localhost:3000/produtos
Cria Produto - POST - http://localhost:3000/produtos
Atualiza Produto - PUT - http://localhost:3000/produtos/1
DEleta Produto - DELETE - http://localhost:3000/produtos/1