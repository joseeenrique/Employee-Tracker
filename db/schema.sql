--drop db
DROP DATABASE IF EXISTS department_db;
--create db
CREATE DATABASE department_db;

USE department_db;

CREATE TABLE departments(
    id INT PRIMARY KEY,
    name VARCHAR(30)

);

CREATE TABLE roles (
id INT PRIMARY KEY,
title VARCHAR(30),
salary: DECIMAL,
department_id: INT,
)

CREATE TABLE employee (
    id INT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id: INT,
    manager_id: INT
)