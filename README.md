# ForCA 2.0 - API
Projeto de API para o orCA 2.0 - Fórum Colaborativo de Avaliação Docente, uma plataforma para avaliação de professores e disciplinas dos cursos de computação da UFRGS.

A plataforma web do ForCA 2.0 pode ser encontrada [aqui](https://github.com/tiagomagnusss/forca-inf-frontend).

## Pré-requisitos

- [Typescript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)

## Instalação

```bash
$ yarn install
```

## Configuração do ambiente

### Requisitos
Um banco de dados MongoDB deve estar disponível para o servidor. O servidor pode ser executado localmente ou em um servidor remoto. Para executar o servidor localmente, é necessário ter o MongoDB instalado e executando. Para executar o servidor em um servidor remoto, é necessário ter uma conta no [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) e criar um cluster.

### Variáveis de ambiente

- `DATABASE_URI`: URI de conexão com o banco de dados. Exemplo: `mongodb+srv://localhost:27017/forca-inf`
- `JWT_SECRET`: Chave secreta para assinar o token JWT. Deve ser uma string aleatória.

## Execução

```bash
# desenvolvimento
$ yarn run start

# modo de observação
$ yarn run start:dev

# modo de produção
$ yarn run start:prod
```

## Suporte

- [NestJS](https://docs.nestjs.com/)
- [TypeORM](https://typeorm.io/#/)
- [MongoDB](https://docs.mongodb.com/)
- [MongoDB Atlas](https://docs.atlas.mongodb.com/)
- [Render](https://render.com/)

- ## Autores

- [Lorenzo Lopes Cernicchiaro](https://github.com/llcernicchiaro)
- [Giulia Giozza](https://github.com/giugiozza)
- [Tiago de Carvalho Magnus](https://github.com/tiagomagnusss)
- [Tobias Soares](https://github.com/TobiasSoares)

## Licença

[MIT licensed](LICENSE).

## Código de Conduta

[Contributor Covenant](CODE_OF_CONDUCT.md).
