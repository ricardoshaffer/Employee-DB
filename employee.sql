/*

To run this file, we do the following in our Terminal:

1. Go to the directory of this sql file.

2. Get into our mysql console.

3. Run "source schema.sql"

*/

-- Drops the wishes_db if it already exists --
DROP DATABASE IF EXISTS employee_manager;

-- Create the database wishes_db and specified it for use.
CREATE DATABASE employee_manager;

USE employee_manager;

-- Create the table wishes.
CREATE TABLE employees (
  id int NOT NULL AUTO_INCREMENT,
  first_name varchar(30) NOT NULL,
  last_name varchar(30) NOT NULL,
  employee_ID INT NOT NULL,
  title varchar(30) NOT NULL,
  department ENUM('Sales Lead', 'Salesperson', 'Lead Engineer', 'Software Engineer', 'Account Manager', 'Accountant','Legal Team'),
  salary DECIMAL(8,2) NULL,
  PRIMARY KEY (id)
);

-- Insert a set of records.
INSERT INTO employees (first_name, last_name, employee_ID, title, department, salary)
VALUES ("Jimmy", "Johns", 12, "Sandwich Maker", 'Salesperson', 12000.00);

-- SELECT name, size FROM shirts WHERE size = 'medium';