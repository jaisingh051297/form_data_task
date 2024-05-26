import {DataSource} from "typeorm";
export const AppDataSource=new DataSource({
type:"postgres",
host:"localhost",
port:5432,
username:"postgres",
password:"postgres",
database:"temp_db",
entities:["src/entity/*{.ts,.js}"],
synchronize:true,
//logging:true
});