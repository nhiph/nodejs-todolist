npm init
in package.json, set up start for file main
"start": "node app/index.js", 
npm start

nodemon for watching changes
npm install --save-dev nodemon
"^2.0.15" : dau ^ se auto update package
in package.json, set up watcing changes
"dev": "nodemon app/index.js"
npm run dev

devDependencies: exist in dev environment
dependencies: exist in all environments (Dev, staging, production)

FLOW WEBSITE
dev: branch for developers code
staging: branch for testor test UI & features
production: branch for users do experiences

yargs for use command line in terminal to work with json
npm i yargs

chalk to notify beauty

Import 
const xxx= require('dev_name') (es5)