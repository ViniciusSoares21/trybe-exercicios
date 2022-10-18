/*2. */
SELECT * FROM sakila.customer
WHERE store_id = 2 AND first_name <> 'KENNETH' AND active IS false ORDER BY first_name;

/*3. */
SELECT title, description, release_year, replacement_cost, original_language_id FROM sakila.film 
WHERE rating <>'NC-17' AND replacement_cost >= 18.00 ORDER BY replacement_cost DESC, title LIMIT 100 ;

/*4. */
SELECT  COUNT(active IS TRUE) FROM sakila.customer
WHERE active = 1 AND store_id = 1;

/*5. */
SELECT * FROM sakila.customer
WHERE active = 0 AND store_id;

/*6. */
SELECT * FROM sakila.film 
WHERE rating = 'NC-17' ORDER BY rental_rate, title LIMIT 50 ;

/*LIKE */
/*1. */
SELECT * FROM sakila.film 
WHERE title LIKE '%ace%';

/*2. */
SELECT * FROM sakila.film 
WHERE description LIKE '%china';

/*3. */
SELECT * FROM sakila.film 
WHERE description LIKE '%girl%' AND title LIKE '%lord';

/*4. */
SELECT * FROM sakila.film 
WHERE title LIKE '___gon%' LIMIT 2;

/*5. */
SELECT * FROM sakila.film 
WHERE title LIKE '___gon%'  AND description LIKE '%Documentary%' LIMIT 1;

/*6. */
SELECT * FROM sakila.film 
WHERE title LIKE '%academy'  OR  title LIKE 'mosquito%' LIMIT 2;

/*7. */
SELECT * FROM sakila.film 
WHERE description LIKE '%monkey%' AND description LIKE '%sumo%' LIMIT 6;

/*IN e BETWEEN*/
/*1. */
SELECT first_name, last_name, email FROM sakila.customer
WHERE last_name in('hicks', 'crawford', 'henry', 'boyd', 'mason', 'morales', 'kennedy') ORDER BY first_name; 

/*2. */
SELECT email, address_id FROM sakila.customer
WHERE address_id in(172, 173, 174, 175, 176) ORDER BY email; 

/*3. */
SELECT COUNT(*) FROM sakila.payment
WHERE DATE(payment_date) between '2005-05-01' AND '2005-08-1' ;

/*4. */
SELECT title, release_year, rental_duration FROM sakila.film
WHERE rental_duration BETWEEN 3 AND 6 ORDER BY rental_duration DESC, title;

/*5. */
SELECT title, rating FROM sakila.film
WHERE rating in('G', 'PG', 'PG-13') ORDER BY title LIMIT 500;

/*Data e tempo*/
/*1. */
SELECT COUNT(*) FROM sakila.payment
WHERE DATE(payment_date) LIKE '2005-05-25' ;

/*2. */
SELECT COUNT(*) FROM sakila.payment
WHERE DATE(payment_date) between '2005-07-01' AND '2005-08-22' ;

/*3. */
SELECT DATE(rental_date) AS Data,
YEAR(rental_date) AS Ano ,
MONTH(rental_date) AS Mes,
DAY(rental_date) AS Dia,
HOUR(rental_date) AS Hora,
MINUTE(rental_date) AS Minuto,
SECOND(rental_date) AS Segundo FROM sakila.rental
WHERE rental_id = 10330;

/*4. */
SELECT * FROM sakila.payment
WHERE DATE(payment_date) = '2005-07-28' AND HOUR(payment_date) >= 22;

