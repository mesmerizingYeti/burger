DROP DATABASE IF EXISTS burger_db;
CREATE DATABASE burger_db;

USE burger_db;
CREATE TABLE burgers(
  id INT(10) AUTO_INCREMENT NOT NULL,
  name VARCHAR(255) NOT NULL,
  devoured BOOL NOT NULL DEFAULT 0,
  PRIMARY KEY(id)
);