# Model Generation Commands

This file documents the `sequelize-cli` commands that were run to generate the base models and migrations for the project. 

> [!NOTE]
> These commands generate the initial boilerplate. Afterwards, the migration and model files were manually edited to add specific validations, UUID implementations, and table associations.

```bash
# 1. Branch Table
npx sequelize-cli model:generate --name Branch --attributes name:string --models-path src/models --migrations-path src/migrations

# 2. Department Table
npx sequelize-cli model:generate --name Department --attributes name:string --models-path src/models --migrations-path src/migrations

# 3. Shift Table
npx sequelize-cli model:generate --name Shift --attributes name:string --models-path src/models --migrations-path src/migrations

# 4. User Table
npx sequelize-cli model:generate --name User --attributes id:uuid,username:string,password:string,email:string,name:string,contact:string,shift_id:integer,image:string,dob:dateonly,gender:string,employee_id:string,joining_date:dateonly,status:string,qualification:string,specialization:string,department_id:integer,branch_id:integer --models-path src/models --migrations-path src/migrations

# 5. Department Permissions Table
npx sequelize-cli model:generate --name DepartmentPermission --attributes department_id:uuid,module_name:string,sub_module_name:string,is_permitted:boolean --models-path src/models --migrations-path src/migrations
```
