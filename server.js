const express = require('express');
const mysql= require('mysql2');
const consoleTable = require('console.table');
const inquirer = require('inquirer');
//const { Connection } = require('mysql2/typings/mysql/lib/Connection');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'Chancho',
      database: 'employees_db'
    },
    console.log(`Connected to the employees database.`)
  );

  db.connect(err => {
    if(err) throw err;
    mainMenu();
  })

function mainMenu(){
     inquirer.prompt([
    {
        type: 'list',
        message: 'What would you like to do?',
        name: 'mainMenu',
        choices: [
            'View all employees',
            'Add a new employee',
            'Delete an employee',
            'View all roles',
            'View all departments'
        ]
    }
])
.then((answer) => {

    switch(answer.mainMenu){
        case "view all employees":
            viewallEmp();
            break;

        case "Add a new employee":
            addEmp();
            break;
    
        case "Delete an employee":
            delEmp();
            break;

        case "View all roles":
            viewRoles();
            break;
        
        case "View all departments":
            viewDepart();
            break;
            
        case "Exit":
            Connection.end();
            break;
    };
});
}

function viewDepart(){
    var dept = "SELECT * FROM department";
    db.query(dept, (err, data) => {
        if(err) throw err;
        console.table(data);
        mainMenu();
    })
}


function viewRoles(){
    var role = "SELECT role.id, role.title, department.name AS department, role.salary FROM role INNER JOIN department ON role.department_id = department.id";
    db.query(role, (err, data) => {
        if(err) throw err;
        console.table(data);
        mainMenu();
    })
}


function viewallEmp(){
    var emp = "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, manager.id FROM employee LEFT JOIN role ON employee.rold_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee manager ON manager.id = employee.manager.id";
    db.query(emp, (err, data) => {
        if(err) throw err;
        console.table(data);
        mainMenu();
    })
}