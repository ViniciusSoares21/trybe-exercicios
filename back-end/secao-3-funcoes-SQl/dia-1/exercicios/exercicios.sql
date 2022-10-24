/*
1.
SELECT MAX(salary) FROM hr.employees;

2.
SELECT MAX(salary) - MIN(salary) FROM hr.employees;

3.
SELECT job_id, AVG(salary) FROM hr.employees
GROUP BY job_id ORDER BY AVG(salary) DESC;

4.
SELECT SUM(salary)
FROM hr.employees;

5.
SELECT MAX(salary), MIN(salary), SUM(salary), ROUND(AVG(salary), 2) FROM hr.employees;

10.
SELECT department_id, ROUND(AVG(salary), 2), COUNT(first_name) FROM hr.employees
GROUP BY department_id
HAVING COUNT(first_name) > 10;

11.
ESTÀ ERRADO, troquei totas as informações que iniciavam com 515 e bustitui por 777  
SET SQL_SAFE_UPDATES = 0;
UPDATE hr.employees
SET phone_number = '777'
WHERE phone_number LIKE '515%';

CORRETO A SE FAZER, troquei apenas o numero 515 por 777 e manteve o resto da informação 
UPDATE hr.employees
SET phone_number = REPLACE(phone_number, '515', '777')
WHERE phone_number LIKE '515%';

14.
SELECT employee_id, first_name, DAY(hire_date) FROM hr.employees;

18.
SELECT first_name, last_name, DATEDIFF(CURRENT_DATE() , hire_date)  FROM hr.employees;
*/

SELECT * FROM hr.employees;










