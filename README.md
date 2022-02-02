How to run the local enviroment? 
1) Clone the repository from github.
2) The 'node_modules' folder should be missing, so to retrieve this we must execute the following command:
npm install
3) Install the latest version of node and npm (as this is a react app).
4) MySQL:
- Create a database called finer_vision
- Execute the following query: 

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

5) In the current directory run the command 'npm start' and this should open up the project.

REFERENCES:

https://react-bootstrap.github.io/components/accordion/

ERRORS:
- When you enter all the information in the first step and second step and then click 'next' - the acordion headers need two clicks to function correctly. This is an jquery problem.