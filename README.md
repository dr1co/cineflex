# Cineflex

Para ler em português, [clique aqui](#ptbr)

## Description (EN)

Hi, my name is Adriano, an undergraduate in Software Engineering in Brazil that likes web development, and this is Cineflex, a mobile app for ordering movie tickets.

This project was firstly bootstrapped with [Create React App (CRA)](https://github.com/facebook/create-react-app), but since CRA is now deprecated, I rewrote this project using Vite!

This is my third project involving the use of React, where I used proper routing for the first time. Note that this project is entirely in Portuguese, and I don't plan on translating it to English in a future update.

### Features

The app flow is straightforward. The app connects to an API to gather all the movies, sessions and seats available. The user then can select the movie desired to watch, and then the app changes to the page of sessions.

In the page of sessions, the user can select which session to watch the movie, the desired date and time for the session. The app then proceeds to the seats' page.

In the page of seats, the user can choose how many seats they want, keeping in mind that the more seats he choose, the more credentials he has to input in order to complete their reservation. Once the user filled all the credentials and chose all the seats he wants, he can request the reservation.

By clicking the button, the app redirects the user to the final page, where all the information is gathered as a remark to which movie, session and seats the user made the order. He then can proceed to the home page by clicking the home button.

Some details to include are the use of modals to help direct the user to use the app properly and the `go back` button to... well, go back to the previous page.

### Deployment

If you want to try the app out but don't want to clone the repo and install all it's dependencies, you can check the deployment [here](https://cineflex-nu-nine.vercel.app/)

### Dependencies

As mentioned before, this project was made using <span style="color: #66DAFB">React</span> and <span style="color: #FFB509">Vite</span>, this time with <span style="color: #DE7496">Styled Components</span> for estilization and <span style="color: #6519ff">React Router-DOM</span> for routing. To properly run this project, you'll need to install it's dependencies with the following script:

#### `npm install`

### Available Scripts

In the project directory, you can run the one and most important one to view the project:

#### `npm run dev`

This script runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

The page will reload if you make edits in the code.

### Learn More

If you want to learn more about Vite, check it's documentation [here](https://vitejs.dev/guide/).

To learn React, the essential stuff, check out the [React documentation](https://reactjs.org/).

## <a id="ptbr"> Descrição (PT-BR) </a>

## Descrição (PT)

Oi, meu nome é Adriano, sou graduando em Engenharia de Software no Brasil e gosto de desenvolvimento web. Este é o Cineflex, um aplicativo móvel para compra de ingressos de cinema.

Este projeto foi inicialmente iniciado com [Create React App (CRA)](https://github.com/facebook/create-react-app), mas como o CRA agora está obsoleto, reescrevi este projeto usando Vite!

Este é meu terceiro projeto envolvendo o uso de React, onde usei roteamento adequado pela primeira vez. Note que este projeto está inteiramente em português, e não pretendo traduzi-lo para o inglês em uma atualização futura.

### Funcionalidades

O fluxo do aplicativo é simples. O app se conecta a uma API para obter todos os filmes, sessões e assentos disponíveis. O usuário pode então selecionar o filme desejado para assistir, e o app muda para a página de sessões.

Na página de sessões, o usuário pode selecionar qual sessão assistir ao filme, a data e hora desejadas para a sessão. O app então segue para a página de assentos.

Na página de assentos, o usuário pode escolher quantos assentos deseja, lembrando que quanto mais assentos ele escolher, mais credenciais ele terá que inserir para completar sua reserva. Uma vez que o usuário preencheu todas as credenciais e escolheu todos os assentos desejados, ele pode solicitar a reserva.

Ao clicar no botão, o app redireciona o usuário para a página final, onde todas as informações são reunidas como um resumo do filme, sessão e assentos que o usuário reservou. Ele pode então voltar para a página inicial clicando no botão home.

Alguns detalhes a incluir são o uso de modais para ajudar a direcionar o usuário a utilizar o app corretamente e o botão `voltar` para... bem, voltar para a página anterior.

### Implantação

Se você quiser experimentar o app, mas não pretende clonar o repositório e instalar todas as dependências, você pode conferir a implantação deste projeto [aqui](https://cineflex-nu-nine.vercel.app/).

### Dependências

Como mencionado anteriormente, este projeto foi feito usando <span style="color: #66DAFB">React</span> e <span style="color: #FFB509">Vite</span>, desta vez com <span style="color: #DE7496">Styled Components</span> para estilização e <span style="color: #6519ff">React Router-DOM</span> para roteamento. Para rodar este projeto corretamente, você precisará instalar as dependências com o seguinte script:

#### `npm install`

### Scripts Disponíveis

No diretório do projeto, você pode executar o mais importante para visualizar o projeto:

#### `npm run dev`

Este script executa o aplicativo no modo de desenvolvimento.\
Abra [http://localhost:5173](http://localhost:5173) para visualizá-lo no navegador.

A página será recarregada se você fizer edições no código.

### Saiba Mais

Se você quiser saber mais sobre o Vite, confira a documentação [aqui](https://vitejs.dev/guide/).

Para aprender React, o essencial, confira a [documentação do React](https://reactjs.org/).
