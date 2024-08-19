DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

\c courses_db;

CREATE TABLE department (
  id SERIAL PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);

CREATE TABLE ROLE(
  id SERIAL PRIMARY KEY,
  title VARCHAR(30) UNIQUE NOT NULL
  Salary DECIMAL NOT NULL
  department_id INTEGER NOT NULL ,
  CONTRAINT CK_ID0 foreign key (department_id) REFERENCES(  DEPARTMENT_ID)


)
CREATE TABLE employee(
  id SERIAL PRIMARY KEY
  first_name VARCHAR(30) NOT NULL
  last_name VARCHAR(30) NOT NULL
  role_id INTEGER NOT NULL
  manager_id INTEGER
  CONSTRAINT CK_ID0 foreign key (role_id) REFERENCES ROLE(id)

)

