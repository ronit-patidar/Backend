Web cookies
HTTP cookies are small blocks of data created by a web server while a user is a browsering a website and placed on the user's computer or other device by the user's web brower.
npm i cookie-parser
uses
cookies are stored in name value pair.
// saved cookie in browser and can access all routes
res.cookie("greet","hello sir")

it is not possible to parse req.cookies
cookie-parser
cp is a middleware,this property is an object that contains cookies sent by the request.
signed cookies
send signed cookies
verify signed cookies

1. What are cookies?
A cookie is a small piece of data that a website stores in your browser. The browser can send that data back to the server when making future requests.
Imagine you log in to a website. The server needs a way to recognize your browser when you visit another page.
A real-world example
Suppose you log in to a shopping website.
- You enter your email and password.
- The server verifies your credentials.
- The server sends a cookie to your browser.
- On later requests, the browser sends the cookie back.
- The server can use it to identify your session or authenticate you, depending on what the cookie contains.

2. How does Express.js send and receive cookies?
Express provides a built-in method to send a cookie, but it does not automatically parse incoming cookies into a convenient JavaScript object.
There are two important things to understand:
Method or package	Purpose
res.cookie()	Sends a cookie to the browser
cookie-parser	Parses incoming cookies so Express can access them through req.cookies
req.cookies	Contains parsed, ordinary cookies
req.signedCookies	Contains signed cookies whose signatures have been successfully verified

3. What is cookie-parser in Node.js?
cookie-parser is an Express middleware package that reads the Cookie header sent by the browser and converts it into an easy-to-use JavaScript object.
npm install cookie-parser
Cookie: username=ronit; theme=dark
Without cookie-parser, Express does not automatically populate req.cookies.
After using cookie-parser, you can access:
req.cookies.username  // "ronit"
req.cookies.theme     // "dark"
// if anyone tried to modify the signed cookie without the secret key brower rejects it.
