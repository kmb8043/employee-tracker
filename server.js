const express = require('express');
const mysql= require('mysql2');
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
    console.log("\n Welcome to Employee Tracker \n");
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
            'View all roles',
            'View all departments',
            'Add a new department',
            'Delete a department',
            'Exit'
        ]
    }
])
.then((answer) => {

    switch(answer.mainMenu){
        case "view all employees":
            viewallEmp();
            break;
 
        case "View all roles":
            viewRoles();
            break;
        
        case "View all departments":
            viewDepart();
            break;

        case "Add a new department":
            addDep();
            break;
    
        case "Delete a department":
            deleteDep();
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
    var role = "SELECT role.id, role.title, department.name AS department FROM role INNER JOIN department ON role.department_id = department.id";
    db.query(role, (err, data) => {
        if(err) throw err;
        console.table(data);
        mainMenu();
    })
}


function viewallEmp() {
    var employee = "SELECT employee.first_name, employee.last_name, role.title, role.salary, department.name, CONCAT(e.first_name, ' ' ,e.last_name) AS Manager FROM employee INNER JOIN role on role.id = employee.role_id INNER JOIN department on department.id = role.department_id left join employee e on employee.manager_id = e.id;";
    db.query(employee, (err, data) => {
        if(err) throw err;
        console.table(data);
        mainMenu();
    })
};

function addDep(){

    inquirer.prompt({

            name: "deptName",
            type: "input",
            message: "Department Name: "
        }).then((answer) => {
            db.query(`INSERT INTO department (name)VALUES ("${answer.deptName}");`, (err, res) => {
                if(err) return err;
                console.log("DEPARTMENT ADDED");
                mainMenu();
            });

        });
}


function deleteDep() {
    inquirer.prompt({
        name: "deptName",
        type: "input",
        message: "Department name you would like to delete: "
    }).then((answer) => {
        db.query(`DELETE FROM department WHERE name = "${answer.deptName}";`, (err, res) => {
            if (err) {
                console.error("Error deleting department:", err);
                return;
            }
            console.log("DEPARTMENT REMOVED");
            mainMenu();
        });

    });
}