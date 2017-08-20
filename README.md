# Sequelize Our Previous MVC Burger App

Previous Github project: [https://github.com/davesrose/burger](https://github.com/davesrose/burger)

We're tasked to take our previous Burger App, which uses the traditional MVC model.  This time we were supposed to install the sequelize ORM, and convert our previous model to the sequelize convention.  I have deleted the orm.js and connection.js to use the config.json file.  The developer section includes my local mySQL settings, and the production includes JAWSDB settings on my heroku deployment.

The burgers table is now defined with the burger.js model: that has burger_name, devoured, and description columns (as well as sequelize's default id, modified, and created datestamps).  Instead of a controller, there is one routes (burger-routes.js) file that handles the query calls to the node server.  It has sequelize findAll, create, and update methods.  In the handlebars index file, objects are passed by an argument in the findAll method: which renders our index page with "burger_data" taken from the returned burger objects.

Live website can be found here:

[https://davesrose-sequelized-burger.herokuapp.com](https://davesrose-sequelized-burger.herokuapp.com)


## File structure used:

```
.
├── config
│   └── config.json
│ 
├── models
│   ├── burger.js
│   └── index.js
│
├── node_modules
│
├── public
│   ├── assets
│   │   ├── css
│   │   │   └── burger_style.css
│   │   └── img
│   │       └── logo.gif
│   │       └── food.gif
│   └── test.html
│
├── routes
│   └── burger-routes.js
│
├── views
│   ├── index.handlebars
│   └── layouts
│       └── main.handlebars
│
├─ server.js
```

- - -