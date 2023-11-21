
# Faro Energy Desafio Técnico React.js

Desafio técnico do candidato [Wallace Ferreira](https://www.linkedin.com/in/wallace-silva-ferreira/) para a vaga de Engenheiro de Software Front-end com foco em React.js.

## Tabela de conteúdos

 - [Demo](#demo)
 - [Requisitos](#requirements)
 - [Features](#features)
 - [Princípios e Paradigma](#principles-and-paradigm)
 - [Ferramentas](#tools)
 - [Ambiente](#enviroment)
 - [Rodando Localmente](#running-locally)
 - [Sobre mim](#about-me)

 ## [Demo](demo)

 A demo do desafio está disponível neste link: https://faro-energy-technical-challenge.vercel.app

 ## [Requisitos](requirements)

 Para ler os requisitos técnicos do desafio, [clique aqui](./REQUIREMENTS.md).

 ## [Features](features)

 - Foi adicionado um total de 50 usinas no servidor local usando a ferramenta [JSON Server](https://github.com/typicode/json-server). O endpoint é `/power-plants`.
 - Listagem de usinas com paginação.
 - Filtro de quantidade máxima de usinas exibidas.
 - É possível adicionar a página e o limite nos parâmetros query da URL. Exemplo: `/?page=1&limit=12`.
 - Tema com [Flowbite Admin](https://flowbite-admin-dashboard.vercel.app/layouts/sidebar/).
 - Exibição de gráficos com a ferramente `ApexCharts`.

 ## [Princípios e Paradigma](principles-and-paradigm)

 Foi seguido fortemente os princípios SOLID, DRY e o paradigma de programação funcional.

 ## [Ferramentas](tools)

 - [Vite.js](https://vitejs.dev/)
 - [React Query](https://tanstack.com/query/latest)
 - [TailwindCSS](https://tailwindcss.com/)
 - [JSON Server](https://github.com/typicode/json-server)
 - [Eslint](https://eslint.org/) + [Prettier](https://prettier.io/) + [Lint Staged](https://github.com/lint-staged/lint-staged) + [Husky](https://github.com/typicode/husky) + [Commitlint](https://github.com/conventional-changelog/commitlint)
 - [Flowbite](https://flowbite.com/)
 - [ApexCharts](https://apexcharts.com/)

## [Ambiente](enviroment)

O projeto foi desenvolvido usando:

- Node.js v18.16.0
- PNPM v8.6.5
- Ubuntu 22.04.3 LTS

## [Rodando Localmente](running-locally)

Clone o projeto

```bash
git clone https://github.com/wallace-sf/faro-energy-technical-challenge.git
```

Instale as dependências

```bash
pnpm install
```

Inicie a aplicação REST local

```
pnpm dev:server
```

Inicie a aplicação Web

```bash
pnpm dev
```

## [Sobre mim](about-me)

- [@wallace-sf](https://www.github.com/wallace-sf)
- [Linkedin](https://www.linkedin.com/in/wallace-silva-ferreira/)
