Express-validator is a middleware library for Express.js used to validate and sanitize incoming request data before processing it in your backend.

It helps ensure that users send valid data through API requests.

For example:
- Email should have a valid email format.
- Password should have a minimum length.
- Age should be a number.
- Name should not be empty.

Notice the difference:
- Validation: Checks whether the data is valid.
- Sanitization: Modifies or cleans the data.

body("name").trim()
Removes unnecessary whitespace from the beginning and end.