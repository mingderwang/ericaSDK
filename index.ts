#! /usr/bin/env bun
import { Erica, t } from '@muzamint/erica'

const PORT: number = +(Bun.env.PORT || 3000);
const NODE_ENV = Bun.env.NODE_ENV ?? "development";

const main = new Erica()
    .get('/', () => 'Hello from Erica')
    .post('/signIn', ({ body }) => signIn(body), {
        body: t.Object({
            username: t.String(),
            password: t.String()
        })
    })
    .listen(PORT)

console.log(`[${NODE_ENV}] Listening on port ${PORT}`);
