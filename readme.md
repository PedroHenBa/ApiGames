<h1>Node Rest Api + JWT token</h1>

- A small api written in TypeScript
- Routes can be protected with JWT tokens.

<h1>installation</h1>

```bash
git clone https://github.com/PedroHenBa/ApiGames.git
```
- Install dependencies

```bash
npm install
```

<h1>Setting</h1>

- open .env.example
- fill the fields with your data
- rename .env.example to .env

- now, make sure your mysql service is turned on

- Run

```bash
npm run dev
```

<h1>Getting start</h1>

<h2>Create a user</h2>

you can create a user, seding a post to the `http://localhost:3000/user/register`

```bash
{
    "name" : "example",
    "email" : "example@email.com",
    "password": "example"
}
```
<h2>Get a token</h2>

to get a token you need first authenticate the user you created, send a post to `http://localhost:3000/user/auth`

```bash
{
    "email": "example@email.com",
    "password" : "example"
}
```

after that, you should get a token

```bash
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJtYXJpYUBlbWFpbC5jb20iLCJpYXQiOjE2MzExMTAwMjYsImV4cCI6MTYzMTExNzIyNn0.1ZPQwBzmI_HTss5oCSpXtZKHuKtmDTyagCst0x4-GCY"
}
```

<h1>Acessing protected routes</h1>

To access routes that are protected by jwt, in every resquet to this routes you need to pass the token

```bash
Content-Type: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJtYXJpYUBlbWFpbC5jb20iLCJpYXQiOjE2MzExMTAwMjYsImV4cCI6MTYzMTExNzIyNn0.1ZPQwBzmI_HTss5oCSpXtZKHuKtmDTyagCst0x4-GCY
```

<h1>Creating a game</h1>

Send a post to `http://localhost:3000/game`

```bash
{
    "title": "raibow six",
    "year": 2000,
    "price": 30
}
```
<h1>Get a post</h1>

Send a get to this route `http://localhost:3000/game/1`, this route is not protected so you don't need to pass a token

you should get

```bash
{
    "id": 1,
    "title": "raibow six",
    "year": 2000,
    "price": 30,
    "createdAt": "2021-09-05T03:22:06.000Z",
    "updatedAt": "2021-09-05T03:22:06.000Z"
}
```

you can also

- delete `http://localhost:3000/game/1`(DELETE)
- update `http://localhost:3000/game/1`(PUT)
