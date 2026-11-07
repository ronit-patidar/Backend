Express Rate Limiter is an Express.js middleware used to limit how many requests a client can send to your backend within a specific time period.

It protects your backend from:
- Brute-force login attacks.
- OTP request abuse.
- API spam.
- Excessive requests from a single IP address.
- Certain types of denial-of-service attacks.
The popular npm package is express-rate-limit.

1. Why do we need it?
Imagine you have a login API:
POST /api/login


An attacker could send 10,000 login requests to guess someone's password.

Without rate limiting, your server may process all those requests.

With rate limiting, you can restrict the number of requests.

For example:
Example: Login API rate limit
5
Allowed requests

6th
Request blocked


Illustrative limit: 5 requests per 15 minutes per IP.