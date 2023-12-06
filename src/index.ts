import { RouterType, Router, IRequest } from 'itty-router';
// we'll start with some fake data
export const todos = [
  { id: '1', message: 'Pet the puppy' },
  { id: '2', message: 'Pet the kitty' },
]

export class Erica {
  private router: any;

  constructor() {
    // Create a new instance of the Router
    this.router = Router();

    // Define routes
    this.defaultRoutes();
  }

  private defaultRoutes() {
    // Define a route using the `.get()` method
    this.router.get('/hello', (request: IRequest) => {
      // Handle the request and return a response
      return new Response('Hello, Erica!', { status: 200 });
    })
    
    // this route will match *any* HTTP method, e.g. POST, PUT, GET
    .all('/foo', 
      (request: IRequest) => `Accessed via the ${request.method} HTTP method`
    )
}
  
  // Getter method to access the router instance
  getRouter(): RouterType {
    return this.router;
  }
}
