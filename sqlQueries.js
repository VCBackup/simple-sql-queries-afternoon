/*## PERSON
1. Create a table called Person that records a person's Name, Age, Height, City, FavoriteColor, and Id.  Id should be an auto-incrementing id/primary key.  
CREATE TABLE Person(
  Id INTEGER PRIMARY KEY AUTOINCREMENT,
  Name varchar(255),
  Age int,
  Height varchar(255),
  City varchar(255),
  FavoriteColor varchar(255)
);

2. Add 5 different people into the Person database.  Remember to not include the Id because it should auto-increment.
INSERT INTO Person(Name, Age, Height, City, FavoriteColor)
VALUES ('Mary', 32, '5ft 2in', 'New York', 'White')

3. List the people in the Person table by Height from tallest to shortest (descending)
SELECT * FROM Person ORDER BY Height DESC

(For this database to create an auto incrementing field set it's type to INTEGER PRIMARY KEY AUTOINCREMENT)

  * List the people in the Person table by Height from shortest to tallest (ascending)
  SELECT * FROM Person ORDER BY Height DESC

  * List all the people in the Person table by oldest first
  SELECT * FROM Person ORDER BY Age DESC

  * List all the people in the Person table older than age 25.
  SELECT * FROM Person WHERE Age > 25

  * List all the people in the Person table that are exactly 25.
  SELECT * FROM Person WHERE Age = 25

  * List all Person that are less than 27 and older than 32.
  SELECT * FROM Person WHERE Age > 32 OR Age < 27

  * List all Person that are not 27 (Use not equals)
  SELECT * FROM Person WHERE Age != 27

  * List all Person where their favorite color is not blue
  SELECT * FROM Person WHERE FavoriteColor != 'Blue'

  * List all Person where their favorite color is not green or blue
  SELECT * FROM Person WHERE FavoriteColor != 'Blue' AND FavoriteColor != 'Green'

  * List all Person where their favorite color is blue or pink
  SELECT * FROM Person WHERE FavoriteColor = 'Blue' OR FavoriteColor = 'Pink'

  * List all Person where their favorite color is white, pink or blue (use IN)
  SELECT * FROM Person WHERE FavoriteColor IN('Blue', 'Pink', 'White')

  * List all Person where their favorite color is white or purple
  SELECT * FROM Person WHERE FavoriteColor IN('Purple', 'White')

## ORDER 
4. Create a table called Orders that records the productName, productPrice, Quantity, and personId
CREATE TABLE Orders(
  productName varchar(255),
  productPrice currency,
  Quantity int,
  personId int
);  

5. Add 5 Orders to Order table
INSERT INTO Orders(productName, productPrice, Quantity, personId)
VALUES ('Aerosol Can', 5.50, 203, 33)

6. Select all the records from the Order table

  * Calculate the total number of products Ordered
  SELECT SUM(quantity) FROM Orders 

  * Calculate the total Order Price
  SELECT SUM(productPrice) FROM Orders 

  * Calculate the total Order Price By personId (If you only made orders for 1 person, go add more for the other people)
  SELECT SUM(productPrice) FROM Orders GROUP BY personId

## Artists
7. Add 3 new Artists to the Artist table
INSERT INTO Artist(ArtistId, Name)
VALUES (280, 'Elven Heirarchy')

 * Select the top 10 artists in reverse alphabetical order
 * SELECT * FROM Artist ORDER BY Name DESC LIMIT 10
 * 
 * Select the top 5 artists in alphabetical order
 * SELECT * FROM Artist ORDER BY Name LIMIT 5
 * 
 * Select all artists that start with the word Black
 * SELECT * FROM Artist WHERE Name LIKE 'Black%'
 * 
 * Select all artists that contain the word Black
 *SELECT * FROM Artist WHERE Name LIKE '%Black%'

## Employee
8. Add 2 new Employees to the Employee table
INSERT INTO Employee(EmployeeId, LastName, FirstName, Title, ReportsTo, BirthDate, HireDate, Address, City, State, Country, PostalCode, Phone, Fax, Email)
VALUES (10, 'Salsman', 'Zell', 'Sales Manager', null, 1955-10-01, 1999-08-01, '1374 S 1440 E', 'Spanish Fork', 'NH', 'USA', '15434', '45634773', '86579879', 'somespecial@email.com')

* List all Employee first and last names only that live in Calgary

* Find the first and last name for the youngest employee

* Find the first and last name for the oldest employee

* Find everyone that reports to Nancy Edwards (Use the ReportsTo column)

* Count how many people live in Lethbridge


## Invoice 
9. Use the Invoice table for the following

* Count how many orders were made from the USA
* Find the largest order total amount
* Find the smallest order total amount
* Find all orders bigger than $5
* Count how many orders were smaller than $5
* Count how many orders were in CA, TX, or AZ (use IN)
* Get the average total of the orders
* Get the total sum of the orders*/