DROP DATABASE IF EXISTS ferment;

CREATE DATABASE ferment;

USE ferment;

CREATE TABLE templates (
  id int NOT NULL AUTO_INCREMENT,
  product varchar(50) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE recipes (
  id int NOT NULL AUTO_INCREMENT,
  product varchar(50) NOT NULL,
  PRIMARY KEY (id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u <USER> < schema.sql
 *    OR
 *    mysql -u <USER> -p < schema.sql
 *  For example, on a hack reactor pairing station, it'll be
 *    mysql -u student -p < schema.sql
 *  and then you'll have to enter the password, student
 *  On your personal computer, if you haven't set up
 *  a password, it'll be
 *    mysql -u root < schema.sql
*/
INSERT INTO templates (id, product) VALUES (1, "kombucha");



