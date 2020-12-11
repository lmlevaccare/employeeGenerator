const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const team = [];
const id =[];

const render = require("./lib/htmlRenderer");

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
            name: 'managerofficeNumber',
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


function mangerQ() { 
    inquirer.prompt(managerquest)  
        .then(
            anwsers => { 
                const manager = new Manager(anwsers.managername, anwsers.manageremail, anwsers.engineergithub, anwsers.engineerId)
                team.push(manager)
                id.push(anwsers.managerid)
            }

            
    )

}

function engineerqQ() { 
    inquirer.prompt(engineerquest)  
        .then(
            anwsers => { 
                const engineer = new Engineer(anwsers.engineername, anwsers.engineeremail, anwsers.engineergithub,anwsers.engineerId)
                team.push(engineer)
                id.push(anwsers.engineerid)
            }

            
    )

}

function internQ() { 
    inquirer.prompt(engineerquest)  
        .then(
            anwsers => { 
                const intern = new Intern(anwsers.internname, anwsers.internemail, anwsers.internscool,anwsers.internId)
                team.push(intern)
                id.push(anwsers.internid)
            }

            
    )

}
        
function endProgram(team) {
    fs.writeFileSync(outputPath,render(team))
    
}


endProgram()
        

    // After the user has input all employees desired, call the `render` function (required
    // above) and pass in an array containing all employee objects; the `render` function will
    // generate and return a block of HTML including templated divs for each employee!
 
    



// render()
// .console.log(Reflect.get(Employee, 'Manager'));
// console.log(Reflect.get(Employee, 'Engineer'));
// console.log(Reflect.get(Employee, 'Intern'));






if (target instanceof Components.interfaces.nsIRDFResource)
  return target.Value;
if (target instanceof Components.interfaces.nsIRDFLiteral)
  return target.Value;
return null;
   



function generateEmp(input) {

    // let output = [];
    // for (let i = 0; i < input.length; i++) {
    //     if (input[i]) {
    //         output.push(input[i]) = JSON.stringify(input[i])
    //         console.log(input[i])
        
        
            return `

        ${input.name}


        <h2>${input.email}</h2>


        ${input.officeNumber}


        ${input.github}


        ${input.role}

        `;
   
        }
//     }
// }



promptNewEmp()
    .then((input => writeFileAsync(path.join(__dirname, '/templates', 'manager.html'), generateEmp(input))
        .then(() => console.log('Success!'))
        .catch((err) => console.error(err))

    )
    )


