-- 8 kyu
-- Find all active students
-- https://www.codewars.com/kata/5809b9ef88b750ab180001ec

-- DESCRIPTION:
-- Create a simple SELECT query to display student information of all ACTIVE students.

-- students TABLE STRUCTURE:
-- Id | FirstName |	LastName |	IsActive

SELECT *
FROM students
WHERE isActive = 1;
