# artS.ave
 ArtS.ave é um sistema para salvar links de artigos de tecnologia. 

![Peek 16-02-2023 17-38](https://user-images.githubusercontent.com/8356862/219483364-a188472c-ad63-456e-b927-e344b7e471b7.gif)
![Peek 16-02-2023 17-42](https://user-images.githubusercontent.com/8356862/219483865-6711de6f-648e-45f8-b05f-0c3cc8131058.gif)


## Back-End
No diretório _art.ave.backend_ temos a API.

### Dependências
- *express* = Para a criação da API
- *cors* = Para ter acesso da pagina para o servidor;
- *nodemon* = Fica ouvindo o servidor, podendo fazer mudanças sem parar o servidor;

Para instalar as dependências e iniciar o servidor:
- Acessar o diretório `~ cd art.ave.backend`
- Instalar as dependências `npm install`
- Executar o servidor `npm start`

Está ouvindo na porta 3003 _listen(3003)_

-Acesso: *http://localhost:3003/links*


## Front-End
No diretório _arts.save.frontend_ temos a o sistema, realizado em react.

### Dependências 
- *uuid* = Gerador de ID; 
- *eslint* = Para padronizar o codigo;
- *typescript* = Para realizar a tipagem;
- *vite* = Para criar o projeto em react;

Para instalar as dependências e iniciar o servidor:
- Acessar o diretório `~ cd arts.ave.frontend`
- Instalar as dependências `~ npm install`
- Executar o projeto `npm run dev`
