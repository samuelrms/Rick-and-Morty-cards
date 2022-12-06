# Rick-and-Morty-cards

Olá pessoal, gostaria de mostrar para vocês um pouco do que utilizei neste projeto onde dei uma brincada com a API do Rick and Morty.

Neste documento vou falar sobre, como rodar o projeto e pontuar algumas das minhas decisões sobre o projeto que julgo válidas.

## Introdução

Desenvolvendo este projeto foquei nos seguintes pontos que julgo cruciais para todo projeto:

- Ter um versionamento bem documentado, com commits claros e explicativos.
- Desenvolver um código legível, organizado e de fácil manutenção seguindo boas práticas e padrões de código limpo.
- Buscando ter uma UI responsiva e uma UX fluída, acessível para todos os dispositivos.
- Criar um projeto escalável, bem componentizado e com uma boa estrutura de arquivos.

## Principais ferramentas utilizadas

- React.js
- Typescript
- Axios
- React Router Dom
- Styled components
- Lottie Animations

## Arquitetura

- Sobre arquitetura de pastas, o projeto segue uma estrutura básica, onde:
  - [cards](https://github.com/samuelrms/Rick-and-Morty-cards/tree/main/src/App/shared/Card): arquivo de cards, onde é feita a criação dos cards da aplicação.
  - [components](https://github.com/samuelrms/Rick-and-Morty-cards/tree/main/src/App/shared/Components): arquivos de componentes reutilizáveis.
  - [animation](https://github.com/samuelrms/Rick-and-Morty-cards/tree/main/src/App/shared/Components/Animation): todas as animações do projeto.
  - [size](https://github.com/samuelrms/Rick-and-Morty-cards/tree/main/src/App/shared/Components/size): arquivo de quebra de responsivodade.
  - [pages](https://github.com/samuelrms/Rick-and-Morty-cards/tree/main/src/App/Pages): páginas da aplicação.
  - [routes](https://github.com/samuelrms/Rick-and-Morty-cards/tree/main/src/App/Routes): todas as rotas, separadas em autenticadas e não autenticadas
  - [services](https://github.com/samuelrms/Rick-and-Morty-cards/tree/main/src/App/services): consumo da API.
  - [shared](https://github.com/samuelrms/Rick-and-Morty-cards/tree/main/src/App/shared): todos as pastas compartilhadas da aplicação.
  - [themes](https://github.com/samuelrms/Rick-and-Morty-cards/tree/main/src/App/styles): arquivos de tema.
  - [Interface](https://github.com/samuelrms/Rick-and-Morty-cards/tree/main/src/App/shared/Interface): arquivo que contém todas as interfaces.

## Rodando o projeto
```
yarn
```
**Para instalar as dependências do projeto.**

<br>


```
yarn start
```
**Para rodar o projeto em modo de desenvolvimento.**

<br>

```
yarn build
```
**Para fazer o build do projeto para produção.**

## Desenvolvimento 

Desenvolvi o projeto como uma brincadeira para poder utilizar a **___API___** do Rick and Morty, para a homepage utilizei uma animação em JSON do **___Lottie___**, o consumo da **___API___** utilizei o **___AXIOS___**, para estilização utilizei o **___Styled components___** e procurei utilizar o maximo possivel o **___Typescript___** porém ainda fiz utilização de alguns **___any___**.

### Link page

Projeto foi hospedado no Netlify sem nenhuma modificação apenas com a configuração padrão.

## https://resonant-sherbet-ed40a2.netlify.app


### Link repo APK

## https://github.com/danielbortoleti/rick-and-morty-app/tree/main

<details>

<summary>

# Desktop

</summary>

<summary>

## Home

</summary>

![](https://user-images.githubusercontent.com/92615688/179421370-225e4e45-4a68-4be8-86db-69d729e5a527.gif)

<summary>

## ListCards

</summary>

![](https://user-images.githubusercontent.com/92615688/179421471-39954420-2e77-433a-904b-1c4b5a9ddf38.gif)

</details>



---

<details>

<summary>

# Responsive

</summary>

![](https://user-images.githubusercontent.com/92615688/179421594-f27b58c5-dfe6-4cc5-b765-d496e606903d.gif)

</details>

---

<details>

<summary>

# Loading

</summary>

![](https://user-images.githubusercontent.com/92615688/179518172-eb5af718-d100-4e8d-bd44-d1448b5c7f93.gif)

</details>


## Conclusão

Gostaria de agradecer a você que leu até aqui! Espero que goste do projeto :)

Good coding!


