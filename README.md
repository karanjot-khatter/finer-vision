How to run the local enviroment? 
1) Clone the repository from github. (run command 'git clone https://github.com/karanjot-khatter/finer-vision.git' in terminal)
2) Make sure you are on the master branch (run 'git checkout master' in terminal)
3) The 'node_modules' folder should be missing, so to retrieve this we must execute the following command in the finer-vision folder:
npm install
4) Install the latest version of node and npm (as this is a react app).
5) Express:
- Go into the 'server' folder and type 'npm run devStart' - make sure to keep this running
6) MySQL:
- Create a database called 'finer_vision'
- Execute the following query in the finer-vision database:

CREATE TABLE Users (
    id int NOT NULL AUTO_INCREMENT,
    first_name varchar(255) NOT NULL,
    surname varchar(255) NOT NULL,
    email_address varchar(255) NOT NULL,
    telephone_number varchar(255) NOT NULL,
    gender char(1) NOT NULL,
    dob DATE NOT NULL,
    comments varchar(255) NOT NULL,
    PRIMARY KEY (id)
);

7) In the 'finer-vision' directory run the command 'npm start' and this should open up the project.
8) You can go to http://localhost:3000/users to see the list of users in the database, but after a form submission it should take you to that page anyway.

ERRORS:
- When you enter all the information in the steps and then click 'next' - the acordion headers need two clicks to function correctly. This is an jquery problem.

REFERENCES:

https://react-bootstrap.github.io/components/accordion/ - create accordion
https://www.youtube.com/watch?v=re3OIOr9dJI - inserting data into database 
