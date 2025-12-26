//1)	Change the name of the student with ssn = 746897816 to Scott
MATCH (s:students)
where s.ssn = 746897816
SET s.name = "Scott";

//2)	Change the major of the student with ssn = 746897816 to Computer Science, Master. 
MATCH (:students {ssn: 746897816}) - [m1:major] -> (:degree)
DELETE m1;
MATCH (s:students {ssn: 746897816})
MATCH (d:degree {dname: "Computer Science" , level: "MS"})
CREATE (s) - [:major] -> (d);

//3)	Delete all registration records that were in “Spring2021”,
MATCH (:students) - [r1:register {rtime: "Spring2021"}] -> (:courses)
DELETE r1;