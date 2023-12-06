#! /usr/bin/env bun
import { Elysia, t } from 'elysia'

const PORT: number = +(Bun.env.PORT || 3000);
const NODE_ENV = Bun.env.NODE_ENV ?? "development";

const main = new Elysia()
    .get('/', () => 'Hello from Elysia')
    .post('/signIn', ({ body }) => signIn(body), {
        body: t.Object({
            username: t.String(),
            password: t.String()
        })
    })
    .listen(PORT)

console.log(`[${NODE_ENV}] Listening on port ${PORT}`);
