COPY products
FROM '/HR/repos/yoshi-logistics/PRODUCTS_API/csv/product.csv'
DELIMITER ',' CSV HEADER;

COPY features
FROM '/HR/repos/yoshi-logistics/PRODUCTS_API/csv/features.csv'
DELIMITER ',' CSV HEADER;

-- COPY styles
-- FROM '/HR/repos/yoshi-logistics/PRODUCTS_API/csv/styles.csv'
-- WITH NULL AS 'null'
-- DELIMITER ',' CSV HEADER;

-- COPY photos
-- FROM '/HR/repos/yoshi-logistics/PRODUCTS_API/csv/photos.csv'
-- DELIMITER ',' CSV HEADER;

-- COPY skus
-- FROM '/HR/repos/yoshi-logistics/PRODUCTS_API/csv/skus.csv'
-- DELIMITER ',' CSV HEADER;

-- COPY related
-- FROM '/HR/repos/yoshi-logistics/PRODUCTS_API/csv/related.csv'
-- DELIMITER ',' CSV HEADER;