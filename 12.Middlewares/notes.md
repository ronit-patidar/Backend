Middlewares
It is an intermediary
Request -> Middlewares -> Response
In Express,Middlewares are functions that comes into play after the server receives the request and before the response is sent to the client.

Common middleware functions
methodOverride
bodyParser
express.static
express.urlencoded

app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"/public)));

middlewares can access and modify req and res object.
End the req res cycle.
call the next middleware fuction in the stack.
chaining m1->m2->m3
can send a response

app.use([path],[callback]) if path is specified then callback is execute for that path else for all path.

what middleware can do?
1) can response 
2) can call next middleware

read articles 
using middlewares
5 Express middlewares libraries

The next middleware function is commonly denoted bya variable named next.
if the current middleware function does not end the request-response cycle,it must call next() to pass control to the next middleware function.

creating utility middleware
logger -> method , useful info,console print

middlewares are created at top of routes else doesn't work.

callback in middleware
1) a middleware function 
2) series of middleware func(seprated by commas)
3) a array of middleware
4) a combination of all above

API Token as query string
lets create a middleware for an api that checks if the access token was passed in the query string or not.
