-- 6 kyu
-- SQL Basics: Simple HAVING
-- https://www.codewars.com/kata/58164ddf890632ce00000220

-- Description:

-- For this challenge you need to create a simple HAVING statement, you want to count how many people have the same age and return the groups with 10 or more people who have that age.
-- people table schema

-- id
-- name
-- age

-- return table schema

-- age
-- total_people


SELECT age, COUNT (*) AS total_people
FROM people
GROUP BY age
HAVING COUNT (*) >= 10;
