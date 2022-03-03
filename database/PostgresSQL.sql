-- Create PostgreSQL Data Model
-- const postgres = require('postgres');

DROP DATABASE IF EXISTS product_info;

CREATE DATABASE product_info;

\c product_info;

CREATE TABLE IF NOT EXISTS product_meta(
  id SERIAL PRIMARY KEY,
  campus VARCHAR(10),
  name VARCHAR(100),
  slogan VARCHAR(250),
  description VARCHAR(400),
  category VARCHAR(25),
  default_price INT,
  features VARCHAR(250)
);

CREATE TABLE IS NOT EXISTS product_features (
  id SERIAL PRIMARY KEY,
  FOREIGN KEY (id)
    REFERENCES product_meta (id),
  feature VARCHAR (250),
  value VARCHAR(250)
);

CREATE TABLE IS NOT EXISTS product_styles (
  style_id SERIAL PRIMARY KEY,
  id SERIAL,
  FOREIGN KEY (id)
    REFERENCES product_meta (id),
  name VARCHAR(100),
  original_price INT,
  sale_price INT,
  default_price BOOLEAN,
  photos VARCHAR(250);
);

CREATE TABLE IF NOT EXISTS skus (
  sku_id SERIAL PRIMARY,
  style_id SERIAL UNIQUE,
  FOREIGN KEY (Style_id)
    REFERENCES product_styles (style_id)
);