--Load CSV Files Into DB Tables
-- \COPY products FROM ./myCSV/product.csv DELIMITER ',' CSV HEADER;
-- \COPY features FROM ./myCSV/features.csv DELIMITER ',' CSV HEADER;

-- \COPY styles FROM ./myCSV/styles.csv DELIMITER ',' csv NULL AS 'null' HEADER;
-- UPDATE styles SET sale_price=0 WHERE sale_price IS NULL;

-- \COPY skus FROM ./myCSV/skus.csv DELIMITER ',' CSV HEADER;

-- \COPY photos FROM ./myCSV/photos.csv DELIMITER ',' CSV HEADER;

--TO VIEW CSV FILES
  -- cd into csvFiles
  -- $ HEAD product.csv to view first 10 lines

  --if sale_price is null make it 0
  --UPDATE TABLE value sale_price from null to 0