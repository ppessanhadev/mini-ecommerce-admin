
# Mini ecommerce - Admin

Essa aplicação tem como objetivo ser a parte visual de gerenciamento de um projeto voltado para ser um mini ecommerce.
Aqui possuí tudo o que você precisa para criar, alterar ou deletar um novo produto da aplicação.

A projeto de gerenciamento de produtos recebe um deploy na [Vercel](https://vercel.com) e pode ser acessado por ~~[esse link]()~~

## Overview
Durante o desenvolvimento, utilizei boa parte dos padrões e conceitos disponibilizados pela documentação do [Nuxt 3](https://nuxt.com/docs/guide/directory-structure/nuxt), ferramenta principal que utilizei para desenvolver esse projeto.

A aplicação se comunica diretamente com a API desenvolvida para esse projeto ([repositório](https://github.com/ppessanhadev/mini-ecommerce-api)) e ela foi desenvolvida da maneira mais simples e descomplicada possível, deixando toda lógica e regras de negocio voltado para o backend.

#### Tecnologias
Utilizei as seguintes principais ferramentas:

- [tailwind](https://docs.nestjs.com/techniques/mongodb) para estilização geral de toda a aplicação e facilitar a parte de responsividade.
- [prettier](https://prettier.io) e [eslint](https://eslint.org) para consistência e padronização de código

#### Páginas

Com intuíto de deixar a parte de administração o mais simples possível, esse projeto conta apenas com 3 páginas, elas são:

| Página                | Auth | Descrição                                                                                                                                                    |
|-----------------------|:----:|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| /admin                |  Não | Página voltada para login registrado no banco de dados assim, garantindo segurança para adição, modificação ou remoção do produto.                        |
| /admin/products       |  Sim | Página voltada para listagem de todos os produtos existentes, possuí registro de token gerado pelo login, e apenas realiza as operações caso seja valido. |
| /{qualquer_parametro} |  Não | Página "not found", caso tente acessar uma outra página que não existe, lhe dá a opção de ser redirecionado para o login de administrador                 |

#### Como rodar o projeto

A partir da raiz do projeto em seu terminal, siga os próximos passos para rodar localmente:

**Rodando localmente com pnpm**

O projeto em si foi desenvolvido utilizado o gerenciador de pacote [pnpm](https://pnpm.io), para instalar, no seu terminal execute o comando `npm i -g pnpm`, e siga os próximos passos:

1. `cp .env.example .env`
2. `pnpm install`
2. `pnpm dev`


>> A aplicação estará rodando em: http://localhost:3000
