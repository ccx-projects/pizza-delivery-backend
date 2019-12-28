## This repository is for a practicing making server using Node.js and Express.js

## Technoligy
JavaScript, Express.js, Node.js, PostgreSQL


## What is Express?

[Express](http://expressjs.com/) is a framework of Node.js.



## STEPS 
1: make new repositroy

2: ```yarn init```  to create package.json

3: add .gitignore file. I used an extension.

<img width="583" alt="Screen Shot 2019-12-27 at 18 09 29" src="https://user-images.githubusercontent.com/45124890/71510991-16dd4880-28d4-11ea-97f9-cc080072727b.png">

4: 'create database <database_name>' in terminal using postgreSQL. 

5: create table using migration file.
added two packages pg, db-migrate-pg


## Express Architecture

```
project/
  controllers/
    index.js
  models/
    index.js
  routes/
    index.js
    router.js
  tests/git a
    spec.js
  .gitignore
  app.js
  package.json
  .eslintrc
  .prettirerc
```


## HTTP Request

```
GET /pizzas
GET /pizzas/:id

POST /pizzas

PATCH /pizzas/:id

DELETE /pizzas/:id
```
