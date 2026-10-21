rolde based authentication one is user who can listen music and one i artist who can  upload a music file.
Authentication,Autorization,Middlewares

npm init -y
npm i mongoose express jsonwebtoken  dotenv cookie-parser bcryptjs cors multer

auth routes -> jitni files authentication related rahengi wo saari auth routes me rahengi
app.js -> server create and contains middlewares
models folder  -> kese data ko store karna hai uska schema define karenge
db folder -> database liked and connection
constrollers folder -> business logic
$or operator -> multiple conditions ko check karne ke liye use hota hai
why password hasing is important -> security purpose, agar database hack ho jaye to password ko decrypt karna mushkil ho jata hai
how hashing works -> hashing is a one way function, it takes input and generates a fixed length string, it is irreversible, even if you change one character in the input, the output will be completely different
do check md5hashgenerator.com

middlewares
request ke andar jo bhi data ata he wo sab read kar sakte he
request ke andar jo bhi data ata he use modify bhi kar sakte he 
response bhi send kar sakte he