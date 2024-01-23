INSERT INTO department(department_name)
VALUES  ("Sales"),
        ("Legal"),
        ("Finance"),
        ("Engineering");

VALUES INTO role(title, department_name, salary)
VALUES  ("Sales Lead", "Sales", 70000),
        ("Salesperson", "Sales", 60000),
        ("Lead Engineer", "Engineering", 140000),
        ("Software Engineer", "Engineering", 110000),
        ("Account Manager", "Finance", 130000),
        ("Accountant", "Finance", 80000),
        ("Legal Team Lead", "Legal", 100000),
        ("Lawyer", "Legal", 180000);

VALUES INTO employee(first_name, last_name, role_title, department_name, role_salary, manager)
VALUES  ("John", "DOE", "Salesperson", "Sales", 60000, "Victoria Scarlet"),
        ("Peter", "La Fleur", "Lead Engineer", "Engineering", 140000, "Neville Longbottom"),
        ("Marty", "McFly", "Legal Team Lead", "Legal", 100000, "Null"),
        ("Sarah", "Connor", "Lawyer", "Legal", 180000,"Null"),
        ("Samwise", "Gamgee", "Account Manager", 130000, "Tom Allen");