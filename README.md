# artS.ave
 ArtS.ave é um sistema para salvar links de artigos de tecnologia. 

![Peek 16-02-2023 17-38](https://user-images.githubusercontent.com/8356862/219483364-a188472c-ad63-456e-b927-e344b7e471b7.gif)

## Back-End
No diretório _art.ave.backend_ temos a API.

### Dependências
- *express* = Para a criação da API
- *cors* = Para ter acesso da pagina para o servidor;
- *nodemon* = Fica ouvindo o servidor, podendo fazer mudanças sem parar o servidor;

Para instalar as dependências e iniciar o servidor:
- Acessar o diretório `~ cd/art.ave.backend`
- Instalar as dependências `npm install`
- Iniciar o servidor `npm init -y`
- Executar o servidor `npm start`

Está ouvindo na porta 3003 _listen(3003)_
*http://localhost:3003/links*


## Front-End
No diretório _arts.save.frontend_ temos a o sistema, realizado em react.

### Dependências 
- *uuid* = Gerador de ID; 
- *eslint* = Para padronizar o codigo;
- *typescript* = Para realizar a tipagem;
- *vite* = Para criar o projeto em react;

Para instalar as dependências e iniciar o servidor:
- Acessar o diretório `~ cd/arts.save.frontened`
- Instalar as dependências `~ npm install`
- Iniciar o projeto `npm init -y`
- Executar o projeto `npm run dev`
