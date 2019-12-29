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
Modified the createTable method in migration file like below.

``` 
exports.up = function(db) {
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

You can see the table in your database!

Modified the dropTable method in migration file like below.

```
exports.down = function(db) {
  return db.dropTable("pizzas");
};
```

Then, run this command in your terminal.
``` db-migrate down ```

You will be able to delete the table in your database.


When you modify the table later, you need to 
```db-migrate down```
first, then modified inside the createTable method.

Then run
``` db-migrate up ```


## File Architecture

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


## FYI: MVC (Model, View, Controller) model
Model takes on a roll for processing parts.
e.g) Login process, Grabbing a lists of products from database, Culculating the total amout of price

View takes on a roll for showing something in browsers.
It doesn't do anything related to mofdifying data, info, and so on. 

Controller takes user inputs from View. Pass that over to the Model. Grab the contents from Model, then choose the proper view depends on Models info.


#### flow

1: A web browser sends a HTTP request to Web application.
2: Controller receive the request.
3: Controller look into the request and takes parameters.
4: Controller calls Model and passes over those parameters.
5: Model starts processing and passed back status of the processing(whether it is succeeded or not) to Controller
6: Controller chooses the proper View depends on the Model's response
7: View goes to the Model and grabs the info to show, then passes that as HTML to the web browser as HTTP response.




