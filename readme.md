# Article API with MVC
This app is a representation about how to use MVC pattern in basic web application

## Preparation
### Sequelize CLI
This project is using sequelize-cli, if you don't have it (check by running `npm list -g --depth=0`) then install it by:
```bash
npm install -g sequelize-cli
```

### Environment variable
Please edit the [example.env](example.env) and insert your database credential & desired port to run this app

After that, copy the file & rename it to `.env`


## Steps to make this project
1. `git init`
2. `npm init`
3. `npm install express dotenv ejs pg sequelize`
4. Duplicate `example.env` and edit the duplicated file with desired database credential, then rename it to `.env`
5. Create .gitignore with:
   1. node_modules
   2. package-lock.json
   3. .env
6. `sequelize init`
7. Rename `config.json` -> `config.js`
   1. use `dotenv` to use environment variable in sequelize conifg
8. Change `model/index.js` config variable require to changed `config.js`
9. `sequelize db:create`
10. `sequelize model:create --name Articles --attributes content:text`
11. `sequelize db:migrate`
12. create `index.js`
    1.  Initiate express.js
    2.  Change view engine to ejs
13. Create views folder and a file called `index.ejs` inside it
    1.  Fill it with basic html structure
14. Create start & dev script in `package.json`
15. Create controller folder with a file called `articleController.js` inside it
   1. Fill it with methods for handling requests
16. Modify `index.js` to use the controller