const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const fs = require('fs');
const team = [];

function main() {
  function newManager() {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'managerName',
          message: 'What is your managers name?',
        },
        {
          type: 'input',
          name: 'managerId',
          message: 'What is your managers ID?',
        },
        {
          type: 'input',
          name: 'managerEmail',
          message: 'What is your managers email?',
        },
        {
          type: 'input',
          name: 'managerOfficeNumber',
          message: 'What is your managers office number?',
        },

      ])


      .then((response) => {
        const manager = new Manager(
          response.managerName,
          response.managerId,
          response.managerEmail,
          response.managerOfficeNumber
        );
        team.push(manager);
        newMember();
        // console.log(team)
      });
  }

  function newMember() {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'inputMember',
          message: 'Add another team member?',
          choices: [
            'Engineer',
            'Intern',
            "No more",
          ],
        },
      ])
      .then((newInput) => {
        switch (newInput.inputMember) {
          case 'Engineer':
            newEngineer();
            break;
          case 'Intern':
            newIntern();
            break;
          default:
            console.log(team);
        }
      });
  }





  function newEngineer() {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'engineerName',
          message: 'What is your engineers name?',
        },
        {
          type: 'input',
          name: 'engineerId',
          message: 'What is your engineers ID?',
        },
        {
          type: 'input',
          name: 'engineerEmail',
          message: 'What is your engineers email?',
        },
        {
          type: 'input',
          name: 'engineerGithub',
          message: 'What is your engineers GitHub username?',
        },

      ])
      .then((response) => {
        const engineer = new Engineer(
          response.engineerName,
          response.engineerId,
          response.engineerEmail,
          response.engineerGitHub
        );
        team.push(engineer);
        newMember();
        // console.log(team)
      });

  }
  function newIntern() {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'internName',
          message: 'What is your interns name?',
        },
        {
          type: 'input',
          name: 'internId',
          message: 'What is your interns ID?',
        },
        {
          type: 'input',
          name: 'internEmail',
          message: 'What is your interns email?',
        },
        {
          type: 'input',
          name: 'internSchool',
          message: 'What school does your intern attend?',
        },

      ])
      .then((response) => {
        const intern = new Intern(
          response.internName,
          response.internId,
          response.internEmail,
          response.internSchool,
        );
        team.push(intern);
        // console.log(team)
        newMember();
      });
  }
  newManager();

}
main();















