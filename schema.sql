DROP DATABASE IF EXISTS productdb;

CREATE DATABASE productdb;

\c productdb;

CREATE TABLE products (
 id BIGSERIAL,
 name VARCHAR,
 slogan VARCHAR,
 description VARCHAR,
 category VARCHAR,
 default_price DECIMAL
);


ALTER TABLE products ADD CONSTRAINT products_pkey PRIMARY KEY (id);

CREATE TABLE features (
 id BIGSERIAL,
 feature VARCHAR(100),
 value VARCHAR(100),
 product_id INTEGER
);


ALTER TABLE features ADD CONSTRAINT features_pkey PRIMARY KEY (id);

CREATE TABLE styles (
 id BIGSERIAL,
 productId INTEGER,
 sale_price DECIMAL,
 default_style BYTEA
);


ALTER TABLE styles ADD CONSTRAINT styles_pkey PRIMARY KEY (id);

CREATE TABLE photos (
 id BIGSERIAL,
 thumbnail_url VARCHAR,
 url VARCHAR,
 styleId INTEGER
);


ALTER TABLE photos ADD CONSTRAINT photos_pkey PRIMARY KEY (id);

CREATE TABLE skus (
 id BIGSERIAL,
 styleId INTEGER,
 size VARCHAR,
 quantity INTEGER
);


ALTER TABLE skus ADD CONSTRAINT skus_pkey PRIMARY KEY (id);

CREATE TABLE related (
 id BIGSERIAL,
 current_product_id INTEGER,
 related_product_id INTEGER
);


ALTER TABLE related ADD CONSTRAINT related_pkey PRIMARY KEY (id);

ALTER TABLE features ADD CONSTRAINT features_product_id_fkey FOREIGN KEY (product_id) REFERENCES products(id);
ALTER TABLE styles ADD CONSTRAINT styles_productId_fkey FOREIGN KEY (productId) REFERENCES products(id);
ALTER TABLE photos ADD CONSTRAINT photos_styleId_fkey FOREIGN KEY (styleId) REFERENCES styles(id);
ALTER TABLE skus ADD CONSTRAINT skus_styleId_fkey FOREIGN KEY (styleId) REFERENCES styles(id);
ALTER TABLE related ADD CONSTRAINT related_current_product_id_fkey FOREIGN KEY (current_product_id) REFERENCES products(id);
