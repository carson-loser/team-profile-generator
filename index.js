const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const fs = require('fs');


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
      name: 'managerEmail',
      message: 'What is your interns email?',
    },
    {
      type: 'input',
      name: 'internSchool',
      message: 'What school does your intern attend?',
    },

  ])
  .then((data) => {
    console.log(data);


  })

