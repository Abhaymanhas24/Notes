## Exercise 1 — Tasks

1. Find the title of each film ✓
   ```sql
   SELECT title FROM MOVIES;
   ```
2. Find the director of each film ✓

   ```sql
   SELECT DIRECTOR FROM MOVIES;
   ```

3. Find the title and director of each film
   ```sql
   SELECT title,DIRECTOR FROM MOVIES;
   ```
4. Find the title and year of each film
   ```sql
    SELECT title,year FROM MOVIES;
   ```
5. Find all the information about each film

   ```sql
    SELECT * FROM MOVIES;
   ```

   ![alt text](https://i.imgur.com/JWnlYN0.png)

## Exercise 2 — Tasks

1. Find the movie with a row id of 6
   ```sql
    SELECT * FROM movies where id=6;
   ```
2. Find the movies released in the years between 2000 and 2010
   ```sql
   SELECT * FROM movies where year between 2000 and 2010;
   ```
3. Find the movies not released in the years between 2000 and 2010
   ```sql
   SELECT * FROM movies where year not between 2000 and 2010;
   ```
4. Find the first 5 Pixar movies and their release year

   ```sql
   SELECT * FROM movies where id<=5 ;
   ```

   ![alt text](https://i.imgur.com/8smCnud.png)

## Exercise 3 — Tasks

1. Find all the Toy Story movies ✓
   ```sql
   SELECT *
   FROM movies
   where title like "Toy Story%";
   ```
2. Find all the movies directed by John Lasseter
   ```sql
    SELECT *
    FROM movies
    where director like "john lasseter";
   ```
3. Find all the movies (and director) not directed by John Lasseter
   ```sql
    SELECT *
    FROM movies
    where director not like "john lasseter";
   ```
4. Find all the WALL-\* movies

   ```sql
    SELECT *
    FROM movies
    where title like "wall-%";
   ```

   ![alt text](https://i.imgur.com/o3GnN5N.png)

## Exercise 4 — Tasks

1. List all directors of Pixar movies (alphabetically), without duplicates
   ```sql
   SELECT DISTINCT director FROM movies  order by director asc ;
   ```
2. List the last four Pixar movies released (ordered from most recent to least)
   ```sql
   select *
   from  movies
   order by year desc
   limit 4;
   ```
3. List the first five Pixar movies sorted alphabetically
   ```sql
    select *
    from movies
    order by title
    limit 5;
   ```
4. List the next five Pixar movies sorted alphabetically

   ```sql
    select *
    from movies
    order by title
    limit 5 offset 5 ;
   ```

   ![alt text](https://i.imgur.com/oPKYHJu.png)

## Review 1 — Tasks

1. List all the Canadian cities and their populations
   ```sql
    SELECT city,population
    FROM north_american_cities
    where country like "canada";
   ```
2. Order all the cities in the United States by their latitude from north to south
   ```sql
   select city
   from North_american_cities
   where country like "united states"
   order by latitude desc;
   ```
3. List all the cities west of Chicago, ordered from west to east
   ```sql
      select city
      from North_american_cities
      order by longitude asc
      limit 6;
   ```
4. List the two largest cities in Mexico (by population)
   ```sql

   ```
5. List the third and fourth largest cities (by population) in the United States and their population
   ```sql

   ```
