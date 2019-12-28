## This repository is for a practicing making server using Node.js and Express.js

## Technoligy
JavaScript, Express.js, Node.js, PostgreSQL


## What is Express?

[Express](http://expressjs.com/) is a framework of Node.js.



## Usage
1: Make new repositroy

2: ```yarn init```  to create package.json

3: Add .gitignore file. I used an extension.

<img width="583" alt="Screen Shot 2019-12-27 at 18 09 29" src="https://user-images.githubusercontent.com/45124890/71510991-16dd4880-28d4-11ea-97f9-cc080072727b.png">

4: Create database.json for using migration manually.
   
5: Create database.
 
 ```db-migrate db:create <your database name> -e dev```

You might need to install 'db-migrate' command globally.

```yarn global add db-migrate```


6: Create migration file.
``` db-migrate creat <your table name>```

Migrations folder and file will create automatically!

7: Create table using the migration file.
Modified the function in migration file like below.

``` exports.up = function(db) {
  return db.createTable("pizzas", {
    id: { type: "int", primaryKey: true },
    name: "string",
    price: "int",
    image: "string",
    created_at: {
      type: "timestamp",
      notNull: true,
      defaultValue: new String("CURRENT_TIMESTAMP"),
    },
    updated_at: {
      type: "timestamp",
      notNull: true,
      defaultValue: new String("CURRENT_TIMESTAMP"),
    },
  });
};
```

Then, run this command in your terminal.
``` db-migrate up ```



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
