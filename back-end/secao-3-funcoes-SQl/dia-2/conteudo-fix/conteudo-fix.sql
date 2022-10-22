/*
1.
SELECT A.actor_id, A.first_name,  F.film_id
FROM sakila.actor AS A
INNER JOIN sakila.film_actor AS F
ON A.actor_id = F.actor_id;

2.
SELECT S.first_name, S.last_name, AD.address
FROM sakila.staff AS S
INNER JOIN sakila.address AS AD
ON S.address_id = AD.address_id;

3.
SELECT C.customer_id, C.first_name, C.email, AD.address_ID, AD.address
FROM sakila.customer AS C
INNER JOIN sakila.address AS AD
ON C.address_id = AD.address_id
ORDER BY C.first_name DESC LIMIT 100;

4.
SELECT C.first_name, C.email,AD.address, AD.address_ID, AD.district
FROM sakila.customer AS C
INNER JOIN sakila.address AS AD
ON C.address_id = AD.address_id
WHERE AD.district = 'California' AND C.first_name LIKE '%rene%';

5.
SELECT C.first_name, COUNT(AD.address)
FROM sakila.customer AS C
INNER JOIN sakila.address AS AD
ON C.address_id = AD.address_id
WHERE C.active = 1 
GROUP BY C.customer_id ORDER BY C.first_name DESC;

6.
SELECT S.first_name, S.last_name, AVG(P.amount) FROM sakila.staff AS S 
	INNER JOIN sakila.payment AS P ON S.staff_id = P.staff_id
WHERE YEAR(P.payment_date) = 2006
GROUP BY S.staff_id;

7.
SELECT FAC.actor_id, A.first_name, FAC.film_id, F.title 
FROM sakila.film_actor AS FAC 
INNER JOIN sakila.actor AS A ON FAC.actor_id = A.actor_id
INNER JOIN sakila.film AS F ON FAC.film_id = F.film_id;
*/






