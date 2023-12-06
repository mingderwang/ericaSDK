// client.ts
import { edenTreaty } from '@elysiajs/eden'
import type { App } from './server'

const app = edenTreaty<App>('http://localhost:3000')

app.signIn.post({
    username: 'saltyaom',
    password: 12345678
}).then(console.log)
