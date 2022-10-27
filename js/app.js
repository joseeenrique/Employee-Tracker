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








  openingQuestions();