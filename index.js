const inquirer = require("inquirer");
const { Pool } = require('pg');
// Connect to database
const pool = new Pool(
    {
      // Enter PostgreSQL username
      user: ' ',
      // Enter PostgreSQL password
      password: ' ',
      host: 'localhost',
      database: 'courses_db'
  },
  console.log('Connected to the courses_db database!')
  )
inquirer.prompt([
    {
      type: "list",
      name: "name",
      message: "What would you like to do?",
      choices: [
        "Add Employee",
        "View all departments",
        "View all roles",
        "view all employees",
        "add a department",
        "add a role",
        "add an employee",
        "update an employee role",
        "Exit",
      ],
    },
  ])
  .then((response) => {
    switch (response.options) {
      case "Add Employee":
        addEmployee();
        break;

      case "View all departments":
       viewAllDepartments();
        break;
      case "View all roles":
        viewallroles();
        break;
      case "view all employees":
        viewallemployees();
        break;
      case "add a department":
        addadepartment();
        break;
      case "add a role":
        addarole();
        break;
      case "add an employee":
        addanemployee();
        break;
      case "update an employee role":
        updateanemployeerole();
        break;
     
      default:
    }
  });

  function addanemployee() {
    console.log("addanemployee");
    inquirer.prompt([
        {
            type: 'input',
            message: 'Enter employee first name',
            name: 'firstname'
        },
        {
            type: 'input',
            message: 'Enter employee last name',
            name: 'lastname'
        },
        {
            type: 'input',
            message: 'Enter employee role',
            name: 'role'
        },
        {
            type: 'input',
            message: 'Enter employee manager',
            name: 'manager'
        }
    ]).then((answers) => {
        // Handle the answers here
        console.log('Employee Details:', answers);
    });
}