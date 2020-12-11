const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const team = [];


const render = require("./lib/htmlRenderer");
const employee = require("./lib/Employee");

const managerquest = [
    {
            type: 'input',
            message: 'What is your name?',
            name: 'managername',

    },
    {
            type: 'input',
            message: 'What is your email?.',
            name: 'manageremail',
        },

     
        {
            type: 'input',
            message: 'What is your office number?',
            name: 'manageroffice',
        },
    {
            type: 'input',
            message: 'What is your ID?',
            name: 'managerId',
    }
    
]

const engineerquest = [
    {
            type: 'input',
            message: 'What is your name?',
            name: 'engineername',

    },
    {
            type: 'input',
            message: 'What is your email?.',
            name: 'engineeremail',
        },

     
        {
            type: 'input',
            message: 'What is your gitHub account name?',
            name: 'engineergithub',
        },
    {
            type: 'input',
            message: 'What is your ID?',
            name: 'engineerId',
    }
    
]

const internquest = [
    {
            type: 'input',
            message: 'What is your name?',
            name: 'internname',

    },
     {
            type: 'input',
            message: 'What is your email?.',
            name: 'internemail',
        },

    {
            type: 'input',
            message: 'What University did you attend?.',
            name: 'internschool',
        },

     
    {
            type: 'input',
            message: 'What is your ID?',
            name: 'internid',
    }
    
]


const addrole =[{  type: 'list',
            message: 'Which employee would you like to add next?',
            name: 'role',
            choices: ['Manager', 'Intern', 'Engineer', 'I do not want to add further employees'] }]

function runApp() {
    inquirer.prompt(addrole)
        .then(
            anwsers => {
                
                if (anwsers.role === "Manager") {
                    managerQ()
                }
                     if (anwsers.role === "Engineer") {
                   engineerqQ()
                }
                
                     if (anwsers.role === "Intern") {
                         internQ()
                         
                }

                     else if (anwsers.role === "I do not want to add further employees") {
                         console.log(team)
                        endProgram(team) 
                }
            }
            
          
    )
}

runApp()

function managerQ() { 
    inquirer.prompt(managerquest)  
        .then(
            anwsers => { 
                const manager = new Manager(anwsers.managername, anwsers.manageremail, anwsers.manageroffice, anwsers.managerId)
                team.push(manager)
                runApp()
                
            }

            
    )

}

function engineerqQ() { 
    inquirer.prompt(engineerquest)  
        .then(
            anwsers => { 
                const engineer = new Engineer(anwsers.engineername, anwsers.engineeremail, anwsers.engineergithub,anwsers.engineerId)
                team.push(engineer)
                runApp()
           
            }

            
    )

}

function internQ() {
    inquirer.prompt(internquest)
        .then(
            anwsers => {
                const intern = new Intern(anwsers.internname, anwsers.internemail, anwsers.internschool, anwsers.internid)
                team.push(intern)
                runApp()
            
            }
    
        )
}
        
function endProgram(team) {
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(team),"utf-8")

 
    
}



    

 
    



