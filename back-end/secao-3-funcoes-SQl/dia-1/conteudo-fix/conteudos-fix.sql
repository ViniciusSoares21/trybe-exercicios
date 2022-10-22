/*
1. MANIPULAÇÃO DE STRINGS

SELECT UCASE('Trybe');

SELECT REPLACE('Você já ouviu falar do DuckDuckGo?', 'DuckDuckGo', 'Google');

SELECT CHAR_LENGTH('Uma frase qualquer');

SELECT SUBSTRING('A linguagem JavaScript está entre as mais usadas', 13, 10);

SELECT LCASE('RUA NORTE 1500, SÃO PAULO, BRASIL');
*/

/*
2. CONDICIONAIS

SELECT * FROM sakila.film;
SELECT film_id, title, IF(title = 'ACE GOLDFINGER', 'Já assisti a esse filme', 'Não conheço o filme') 
AS 'conheço o filme?'
FROM sakila.film;

SELECT title, rating, 
	CASE 
		WHEN rating = 'G' THEN 'Livre para todos'
        WHEN rating = 'PG' THEN 'Não recomendado para menores de 10 anos'
        WHEN rating = 'PG-13' THEN 'Não recomendado para menores de 13 anos'
        WHEN rating = 'R' THEN 'Não recomendado para menores de 17 anos'
        ELSE 'Proibido para menores de idade'
	END AS 'público-alvo'
FROM sakila.film;
*/

/*
3. FUNÇÕES MATEMATICAS

DESAFIO DIV e MOD
SELECT IF( 15 MOD 2 = 0, 'Par', 'Ímpar') AS 'Par ou Ímpar';

SELECT 220 DIV 12;

SELECT IF(220 MOD 12 = 0, 'NÃO', CONCAT('SIM, ', 220 MOD 12));

SELECT FLOOR(15 + (RAND() * 5));

SELECT ROUND( 15.7515971);

SELECT FLOOR (39.494);

SELECT CEIL( 85.234);
*/

/*
4. TRABALHANDO COM DATAS

SELECT DATEDIFF('2030-01-20', CURRENT_DATE());

SELECT TIMEDIFF('10:25:45', '11:00:00');
*/

/*5. FUNÇÃO DE AGREGAÇÃO

SELECT * FROM sakila.film;

SELECT 
	AVG(length) AS 'Média de Duração',
	MIN(length) AS 'Duração Mínima',
    MAX(length) AS 'Duração Máxima',
    SUM(length) AS 'Tempo de Exibição Total',
    COUNT(*) AS 'Filmes Registrados'
FROM sakila.film;
*/

/*6. GROUP BY e HAVING*/

SELECT * FROM sakila.customer;
SELECT active, COUNT(*) FROM sakila.customer
GROUP BY active;

SELECT store_id, active, COUNT(*) FROM sakila.customer
GROUP BY store_id, active;

SELECT AVG(rental_duration) AS 'media de duração dos aluguel', rating FROM sakila.film
GROUP BY rating
ORDER BY 'media de duração dos aluguel' DESC;

SELECT district, COUNT(*) FROM sakila.address
GROUP BY district
ORDER BY COUNT(*) DESC;

SELECT rating, AVG(length) AS media_duration
FROM sakila.film
GROUP BY rating
HAVING media_duration BETWEEN 115.0 AND 121.50
ORDER BY media_duration DESC;

SELECT rating, SUM(replacement_cost) AS total_custo_substituicao
FROM sakila.film
GROUP by rating
HAVING total_custo_substituicao > 3950.50
ORDER BY total_custo_substituicao;





