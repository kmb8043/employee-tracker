INSERT INTO department(name)
VALUES  ("Sales"),
        ("Legal"),
        ("Finance"),
        ("Engineering");

INSERT INTO role(title, salary)
VALUES  ("Sales Lead", 70000),
        ("Salesperson", 60000),
        ("Lead Engineer", 140000),
        ("Software Engineer", 110000),
        ("Account Manager", 130000),
        ("Accountant", 80000),
        ("Legal Team Lead", 100000),
        ("Lawyer", 180000);

INSERT INTO employee(first_name, last_name, manager_id)
VALUES 
    ("John", "DOE", 3),
    ("Peter", "La Fleur", 1),
    ("Marty", "McFly", NULL), 
    ("Sarah", "Connor", NULL),
    ("Samwise", "Gamgee", 2);
