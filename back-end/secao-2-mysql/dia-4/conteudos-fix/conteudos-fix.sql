/* INSERT*/
/* 1. */
/*
SELECT * FROM sakila.staff;

INSERT INTO sakila.staff 
	(first_name, last_name, address_id, email, store_id, active, username, password)
VALUES 
	('Vinicius', 'Soares', 21, 'Vinicius@Trybe.com', 2, 1, 'VJ', 'oiygvvgyiuevb');
*/

/* 2. */
/*
SELECT * FROM sakila.staff;

INSERT INTO sakila.staff 
	(first_name, last_name, address_id, email, store_id, active, username, password)
VALUES 
	('Gustavo', 'LIma', 8, 'Gustavo@Trybe.com', 1, 1, 'GUST', 'iuteryoiet3'),
    ('Marcelo', 'Oliveira', 7, 'Marcelo45@Trybe.com', 2, 1, 'MAC', '68g4refggr');
*/

/* 3. */
/*
SELECT * FROM sakila.actor;

INSERT INTO sakila.actor (first_name, last_name)
  SELECT first_name, last_name FROM sakila.customer
  LIMIT 5;
*/

/* 4. */
/*
SELECT * FROM sakila.category;

INSERT INTO sakila.category 
	(name)
VALUES 
	('vinicius'),
	('Gustavo'),
    ('Marcelo');
*/

/* 5. */
/*
SELECT * FROM sakila.store;

INSERT INTO sakila.store 
	(manager_staff_id, address_id)
VALUES 
	(3, 3),
	(4, 4),
    (5, 5);
*/

/* UPDATE*/
/* 1. */
/*
SELECT first_name FROM sakila.actor
WHERE first_name LIKE 'JULES%';

UPDATE sakila.actor
SET first_name = 'JULES'
WHERE first_name LIKE 'JULIA%';

SET SQL_SAFE_UPDATES = 0;
*/

/* 2. */
/*
SELECT * FROM sakila.category;

UPDATE sakila.category
SET name = 'Science Fiction'
WHERE name = 'Sci-fi';
*/

/* 3. */
/*
SELECT rental_rate, length, rating FROM sakila.film
WHERE length > 100 AND rating in('G', 'PG', 'PG-13');

UPDATE sakila.film
SET rental_rate = 25
WHERE length > 100
AND rating in('G', 'PG', 'PG-13')
AND replacement_cost > 20;
*/














