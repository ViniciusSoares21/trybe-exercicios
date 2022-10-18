/* EXERCICIOS BONUS */
/* 1. */
SELECT * FROM Scientists.Scientists
WHERE Name LIKE '%e%';

/* 2. */
SELECT Name FROM Scientists.Projects
WHERE Code LIKE 'A%' ORDER BY Name;

/* 3. */
SELECT Code, Name FROM Scientists.Projects
WHERE Code LIKE '%3%' ORDER BY Name;

/* 4. */
SELECT Scientist FROM Scientists.AssignedTo
WHERE Project in('AeH3', 'Ast3', 'Che1');

/* 5. */
SELECT * FROM Scientists.Projects
WHERE Hours > 500;

/* 6. */
SELECT * FROM Scientists.Projects
WHERE Hours BETWEEN 250 AND 800;

/* 7. */
SELECT Code, Name FROM Scientists.Projects
WHERE Name NOT LIKE 'A%';

/* 8. */
SELECT Name FROM Scientists.Projects
WHERE Code LIKE '%H%';
