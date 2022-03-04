-- Create PostgreSQL Data Model
-- const postgres = require('postgres');

DROP DATABASE IF EXISTS product_info;

CREATE DATABASE product_info;

--USE product_info;
\c product_info;

DROP TABLE IF EXISTS products, features, styles, skus, photos;

--id,name,slogan,description,category,default_price
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  slogan VARCHAR(250) NOT NULL,
  description VARCHAR NOT NULL,
  category VARCHAR(25) NOT NULL,
  default_price INT NOT NULL
);

--id,product_id,feature,value
CREATE TABLE features (
  id SERIAL PRIMARY KEY,
  product_id INT REFERENCES products (id),
  feature VARCHAR (250) NOT NULL,
  value VARCHAR(250) NOT NULL
);

--id,productId,name,sale_price,original_price,default_style
CREATE TABLE styles (
  id SERIAL PRIMARY KEY,
  productId INT REFERENCES products (id),
  name VARCHAR(100) NOT NULL,
  sale_price INT,
  original_price INT NOT NULL,
  default_style BOOLEAN NOT NULL
);

--id,styleId,size,quantity
CREATE TABLE skus (
  id SERIAL PRIMARY KEY,
  styleId INT REFERENCES styles (id),
  size VARCHAR(10) NOT NULL,
  quantity INT NOT NULL
);

--id,styleId,url,thumbnail_url
CREATE TABLE photos (
  id SERIAL PRIMARY KEY,
  styleId INT REFERENCES styles (id),
  url VARCHAR(250) NOT NULL,
  thumbnail_url VARCHAR NOT NULL
);

--Load CSV Files Into DB Tables
\COPY products FROM ./myCSV/product.csv DELIMITER ',' CSV HEADER;
\COPY features FROM ./myCSV/features.csv DELIMITER ',' CSV HEADER;

\COPY styles FROM ./myCSV/styles.csv DELIMITER ',' csv NULL AS 'null' HEADER;
UPDATE styles SET sale_price=0 WHERE sale_price IS NULL;

\COPY skus FROM ./myCSV/skus.csv DELIMITER ',' CSV HEADER;

\COPY photos FROM ./myCSV/photos.csv DELIMITER ',' CSV HEADER;

--TO VIEW CSV FILES
  -- cd into csvFiles
  -- $ HEAD product.csv to view first 10 lines

-- list all databases in the current PostgreSQL database server, you use $ \l

-- list all tables in the current database, you use $ \dt

--list all data in a specific table \d table_name

--list all schemas \dn

--list all functions currectly avail in db \df

--display command history \s

--To execute commands from a file, you use $ \i file_name

--To get help on specific PostgreSQL statement, you use the \h followed by the command ALTER TABLE

--\timing to check query timing