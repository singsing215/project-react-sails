# comp7270-project-sails-app-singsing215
comp7270-project-sails-app-singsing215 created by GitHub Classroom

Author: GUO Fusheng 19413238

System admins: { username: "admin", password: 123456 }

Clients: { username: "kenny", password: 123456 }

# IMPORTANT NOTE
After installing node modules from package.json, you need to delete '.columnName' from 
```
project-sails\project1\node_modules\waterline\lib\waterline\utils\query\forge-stage-three-query.js:591:49
```

Otherwise, you will see the error that 
```
Cannot read property 'columnName' of undefined
```

the specific code in line 591 should be
```js
var columnName = model.schema[attrName];
```
