-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data
CREATE TABLE "items" (
    id SERIAL PRIMARY KEY,
    name VARCHAR(80) NOT NULL,
    quantity NUMERIC NOT NULL,
    unit VARCHAR(20),
    ispurchased BOOLEAN DEFAULT FALSE
);

INSERT INTO items (name, quantity, unit)
VALUES ('Milk', '5', 'Gallons'),
('Bread', '1', 'Loaf');