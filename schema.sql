DROP DATABASE IF EXISTS productdb;

CREATE DATABASE productdb;

\c productdb;

CREATE TABLE products (
 id BIGSERIAL PRIMARY KEY,
 "name" VARCHAR,
 slogan VARCHAR,
 "description" VARCHAR,
 category VARCHAR,
 default_price DECIMAL
);

CREATE INDEX id_idx ON products (id);


-- ALTER TABLE products ADD CONSTRAINT products_pkey PRIMARY KEY (id);

CREATE TABLE features (
 id BIGSERIAL PRIMARY KEY,
 product_id INTEGER,
 feature VARCHAR(100),
 "value" VARCHAR(100)
);



-- ALTER TABLE features ADD CONSTRAINT features_pkey PRIMARY KEY (id);

-- CREATE TABLE styles (
--  id BIGSERIAL PRIMARY KEY,
--  productId INTEGER,
--  "name" VARCHAR,
--  sale_price DECIMAL,
--  original_price DECIMAL,
--  default_style BYTEA
-- );


-- ALTER TABLE styles ADD CONSTRAINT styles_pkey PRIMARY KEY (id);

-- CREATE TABLE photos (
--  id BIGSERIAL PRIMARY KEY,
--  styleId INTEGER,
--  "url" VARCHAR,
--  thumbnail_url VARCHAR
-- );


-- ALTER TABLE photos ADD CONSTRAINT photos_pkey PRIMARY KEY (id);

-- CREATE TABLE skus (
--  id BIGSERIAL PRIMARY KEY,
--  styleId INTEGER,
--  size VARCHAR,
--  quantity INTEGER
-- );


-- ALTER TABLE skus ADD CONSTRAINT skus_pkey PRIMARY KEY (id);

-- CREATE TABLE related (
--  id BIGSERIAL PRIMARY KEY,
--  current_product_id INTEGER,
--  related_product_id INTEGER
-- );


-- ALTER TABLE related ADD CONSTRAINT related_pkey PRIMARY KEY (id);

ALTER TABLE features ADD CONSTRAINT features_product_id_fkey FOREIGN KEY (product_id) REFERENCES products(id);
-- ALTER TABLE styles ADD CONSTRAINT styles_productId_fkey FOREIGN KEY (productId) REFERENCES products(id);
-- ALTER TABLE photos ADD CONSTRAINT photos_styleId_fkey FOREIGN KEY (styleId) REFERENCES styles(id);
-- ALTER TABLE skus ADD CONSTRAINT skus_styleId_fkey FOREIGN KEY (styleId) REFERENCES styles(id);
-- ALTER TABLE related ADD CONSTRAINT related_current_product_id_fkey FOREIGN KEY (current_product_id) REFERENCES products(id);
CREATE INDEX product_id_idx ON features (product_id);
