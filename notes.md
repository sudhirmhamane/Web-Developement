# Backend folder Structure:

## **public:**

### in this folder the images comes.

## **src:**

### 1. controller:

#### All the function logic come here.

### 2. db:

#### In this folder the connection to the database comes or disconnection everthing related to the database funtionality created here.

### 3. middlewares:

#### here the request from the client and response from the server operations happens.

#### Basically it works in between the request and response.

### 4. models:

#### in this folder how we structure and organize the data in the database.

### 5. routes:

#### Routing means going one page to other.

#### Ro the routing logics are written here.

### 6.utils:

#### In this folder the resued code/logic is written like sending the emails etc.

#### It is also called as helper folder.

### 7.validators

#### We can validate the data of our project here.

---

# Express:

## Express is basically a node.js web application framework.

### Express is the Fast, Unopinionated, minimalist web framework for Node.js

---

# Postman API Testing

## What is Postman?

#### A popular tool for testing APIs (REST, GraphQL, etc.).

#### Helps send HTTP requests (GET, POST, PUT, DELETE…) and view responses.

## Key Features

#### Create & Send Requests: Test endpoints easily.

#### Collections: Save and organize multiple API requests.

#### Environment Variables: Store values like baseURL or API_KEY to reuse.

Pre-request Scripts: Run JavaScript code before sending a request.

#### Tests Tab: Write JavaScript to verify response data automatically.

#### Import/Export: Share API requests with your team.

---

## Why we write

1.  const app = express();
    is basically creating our application instance — the object that will handle HTTP requests, define routes, use middleware, and start your server.

2.  const app.use();

- is used to register middleware functions or mount route handlers in your application.

- Middleware is code that runs between a request coming in and a response going out.app.use() can apply middleware to:

- Parse JSON

- Enable CORS

- Log requests

- Authenticate users

---

# JWT: (Json Web Token)

- It comes in use when user sends so request form the web browser to the server.

- So every time user send a request so JWT token insures that this user is a valid user and respond him.

- for the user validation or authentication this jwt token is used.

---

# access token and refresh token:

- access tokens are avilable for few minites and refresh tokens are avilable for more times like 10days(for ex).

- access tokens are never send or stored in the server or database.

- refresh tokens are stored in the database and server.

- after the expire of the access token this refresh token is used to get new access token.
- token are mainly two types "with data" and "without data".
