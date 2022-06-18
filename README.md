# Projeto: Cookenu
<br>

#### Projeto inicialmente desenvolvido em 18/05/2020 em parceria com: Danilo Mourelle

## _Escopo do Projeto_
Esse produto é  uma rede social, na qual os usuários podem dividir informações relevantes sobre comidas e receitas que tenham experimentado. Ela possui todas as funcionalidades mais comuns em redes sociais:

### Cadastro:
Como o projeto está no início, o usuário só precisa informar: o id, e-mail, nome a sua senha para realizar o cadastro. A senha tem uma regra: ela deve conter, no mínimo, 6 caracteres.

### Login:
Como o projeto está no início, o usuário só precisa informar: o id, e-mail, nome a sua senha para realizar o cadastro. A senha tem uma regra: ela deve conter, no mínimo, 6 caracteres.
<br>
### Informações do próprio perfil:
A partir do token de autenticação fornecido no login, o usuário deve ser capaz de ver as suas informações não sensíveis salvas no banco (vulgo, id e email).
<br>
### Criar receitas:
O usuário deve poder criar uma receita. A receita deve ter os seguintes atributos: título, descrição/modo de preparo e data de criação.
<br>
### Seguir usuário:
Um usuário deve poder seguir outros usuários. Para isso, ele deve fornecer o id do usuário que deseja seguir. Atente-se que essa funcionalidade se assemelha ao do instagram: um usuário seguir outro, não significa que "esse outro" está seguindo o primeiro.
<br>
### Feed:
Um usuário deve poder visualizar as receitas criadas pelos usuários que ele segue. As receitas devem estar ordenadas pela data de criação.
<br>
<br>

## Tecnologias/Ferramentas:
- Typescript
- SQL
- Git
- Typescript
- Node.js
- MVC
- Programação Orientada a Objeto
- MySQL
- Postman
<br>
<br>

## O que a plataforma é capaz de fazer 🏁

🏆 _Fornecer uma aplicação backend para um sistema de rede social voltada para o ambiente culinário._

🏆 _Coletar, verificar, armazenar os dados em banco de dados próprio para o sistema._

🏆 _Criar, ler, atualizar e deletar (CRUD) dados da aplicação._
<br>

## Linguagens e libs utilizadas 📚
- Typescript
- bcryptjs
- dotenv
- express
- jsonwebtoken
- knex
- mysql
- uuid


## Conhecimentos adquiridos durante o projeto 🎓
- Criação de projetos node com npm.init.
- Tranpilação de TS em JS.
- Integração com banco de dados externo e uso de variáveis de ambiente.
- Requisições HTTP / API Rest.
- Sistema de Autenticação e Autorização.
- Criptografia e geração de tokens de informações sensíveis.
<br>
<br>

### Como rodar a aplicação ▶️

No terminal, clone o projeto:

```
[git clone https://github.com/jaime-github/Projeto-IWFS-Cookenu_backend.git)
```
Navegue para dentro da raiz do projeto

```
cd Backend-Cookenu
```
Instale as dependências

```
npm i
```
**Crie um arquivo .env com as configurações do seu banco de dados** (preferencialmente MySQL, caso deseje utilizar outro, adaptações no código e dependências serão necessárias).

```
DB_HOST = seu_endereço_host
DB_USER = seu_usuário
DB_PASSWORD = sua_sehna
DB_DATABASE_NAME = seu_banco_de_dados
JWT_KEY = chave_para_jwt
JWT_EXPIRE_TIME = tempo_expiração (exemplo: 15 minutes)
BCRYPT_COST = cost_encriptação (idealmente um valor minimo de 12)
Execute a aplicação
```

```
npm start
```

Você poderá utilizar os endpoints através de um cliente HTTP (ex. Postman) tendo o endereço localhost:3003 como URL base para as requisições. Para informações de cada endpoint disponível conferir a documentação.


<br>
