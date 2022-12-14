const inquirer = require('inquirer');
const table = require('console.table');

const connection = require('./db/database');

const { getDepartments, getEmployees, getRoles } = require('./db/query.js')

function openingQuestions() {
  inquirer
  .prompt({
    type: "list",
    name: "search",
    message: "Please select?",
    choices: [
      "View departments",
      "View roles",
      "View employees",
      "Add department",
      "Add role",
      "Add employee",
      "Update employee",
      "Exit"
  ]


  }).then (function (answer) {

    switch (answer.search) {

          case "View departments":
            viewDepartments();

            break;

            case "View roles":
                viewRoles();

            break;

            case "View employees":
                viewEmployees();

            break;

            case "Add department":
                addDepartment();

            break;

            case "Add role":
                addRole();

            break;

            case "Add employee":
                    addRole();

            break;
    
            case "Exit":
              console.log("Bye!");
              connection.end();

              break

        }
    })
  };

//add viewDepartments function
function viewDepartments(){
  const query = connection.query("SELECT * FROM departments", function (err, res) {
    if (err) throw err
    console.log("departments");
}

//Add viewRoles function


//Add viewEmployees function



//Add addDepartment function


//Add addrole function


//Add addEmployee function



// add inquirer prompts for user to navigate table

// add inquirer prompts for user to fill out information for department

// add inquirer prompts for user to fill out information for role

// add inquirer prompts for user to fill out information for employee

  openingQuestions();