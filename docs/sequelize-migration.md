```bash
npx sequelize-cli model:generate --name User --attributes email:string,password:string,status:integer

npx sequelize-cli db:migrate
```