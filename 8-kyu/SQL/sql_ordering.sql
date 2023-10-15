-- 8 kyu
-- Easy SQL - Ordering
-- https://www.codewars.com/kata/593ed37c93350098d600001d

-- DESCRIPTION:
-- Your task is to sort the information in the provided table 'companies' by number of employees (high to low). 
-- Returned table should be in the same format as provided:

-- Companies table schema
-- id
-- ceo
-- motto
-- employees

SELECT *
FROM companies
ORDER BY employees DESC;
