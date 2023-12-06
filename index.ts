#! /usr/bin/env bun
import { Erica, todos} from '.'
import { json, error } from 'itty-router';

const erica: Erica = new Erica()
const router = erica.getRouter()

router.get('/x', () => todos)
    .get('/todos/:id',
      (request: IRequest) => `${request.params.id}`
    )

Bun.serve({
  port: 3000,
  fetch(request) {
    return router
      .handle(request)
      .then(json) // send as JSON
      .catch(error) // catch errors
  },
})
