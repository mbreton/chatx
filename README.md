# ChatX 😻

Deployed on Heroku here :
<https://chatx-mbr.herokuapp.com/index?roomId=1>

## Features :

Version 1: single chat room

- [x] User can read the last 10 messages of the room when entering.
- [x] User can read new messages from other users.
- [x] User can write and send new messages.

Version 2: multiple chat rooms

- [x] User can see a list of available chat rooms.
- [x] User can join and leave a chatroom.
- [x] User can see the list of users in a chat room.
- [ ] User can create a chat room by entering a name.

## ️️🏎️ Fast starting 🏎️

To easily start the app locally, you will need [docker](https://docs.docker.com/v17.12/install/) and just run :
`docker-compose up`

Then, open your browser on <http://localhost:3000>

## ️🚗 Getting started a little bit less faster 🚗

It's, of course, possible to run the app with your own instance of node (v10). Please, before ensure that your postgres database is up and the [environment variables](#environment-variables) are fulfilled, then run :

```
npm i
```

```
npm run buid
```

Following by :

```
npm run dev
```

The second command will initialize the `.next` directory and the third one start the app in development mode

## Architecture

As asked, this app is powered by ~~too much technologies~~ :

- NodeJS
- React
- Next.js
- Apollo (Client & Server)
- Sequelize
- Postgres

But also :

- [Envalid](https://github.com/af/envalid)
- [Winston](https://github.com/winstonjs/winston)
- [Semantic UI React](https://react.semantic-ui.com/)
- [Storybook](https://storybook.js.org)

### Environment variables

The app exposes the following environment variables :

```
PORT=3000
POSTGRES_PASSWORD=mysecretpassword
POSTGRES_USER=postgres
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_DATABASE=postgres
```

The environment variables names speak for themselves.

To easily pass them to the app when you run it on your workstation, just create a `.env` file in the root of the project and copy/paste the content above (according to your postgres credentials). If a mandatory environement variable is missing or malformed, [Envalid](https://github.com/af/envalid) will throw up an exception.

### Available scripts

Find here some interested npm scripts available on the project

To seed the database (use the credential provided in the env vars)

```
npm run seed
```

To start the App in dev mode (HMR, keep watching)

```
npm run dev
```

To initialize Next dist directory

```
npm run build
```

To start the App in production mode

```
npm run start
```

To start the Storybook

```
npm run storybook
```
