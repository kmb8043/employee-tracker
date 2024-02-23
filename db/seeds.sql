   
USE employees_db;

INSERT INTO department(name)
VALUES  ("Sales"),
        ("Legal"),
        ("Finance"),
        ("Engineering");

INSERT INTO role(title, salary,department_id)
VALUES  ("Sales Lead", 70000, 1),
        ("Salesperson", 60000, 1),
        ("Lead Engineer", 140000, 4),
        ("Software Engineer", 110000, 4),
        ("Account Manager", 130000, 3),
        ("Accountant", 80000, 3),
        ("Legal Team Lead", 100000, 2),
        ("Lawyer", 180000, 2);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES 
    ("John", "DOE", 3, NULL),
    ("Peter", "La Fleur", 1, 1),
    ("Marty", "McFly", 3, 2), 
    ("Sarah", "Connor", 4, 1),
    ("Samwise", "Gamgee", 2, 2);