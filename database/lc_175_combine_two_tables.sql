# https://leetcode.com/problems/combine-two-tables/

SELECT p.FirstName, p.LastName, a.City, a.State from Person p left join Address a on p.PersonId = a.PersonId;

