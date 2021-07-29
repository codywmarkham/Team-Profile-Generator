const inquirer = require("inquirer");
const fs = require("fs");
let jobSpecific;
let newHires = [];
var detailObject;


function addEmployee() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'nameSelect',
                message: 'New employee\'s name?',
            },
            {
                type: 'rawlist',
                name: 'roleSelect',
                message: 'Employees position?',
                choices: ['Manager', 'Engineer', 'Intern',],
            },
            {
                type: 'input',
                name: 'idSelect',
                message: 'New employee\'s ID number?',
            },
            {
                type: 'input',
                name: 'emailSelect',
                message: 'New employee\'s email?',
            },
        ])
        .then ((data) => {
            jobSpecific = ""
            switch (data.roleSelect) {
                case 'Manager':
                    jobSpecific = 'office number'
                    break;

                    case 'Engineer':
                    jobSpecific = 'Github Repo'
                    break;

                    case 'Intern':
                    jobSpecific = 'school'
                    break;
            
                default:
                    break;
            }
            inquirer.prompt([{
                message: `Enter new employee's ${jobSpecific}`,
                name: 'roleOption'
            },
            {
                type: 'rawlist',
                message: 'Would you like to add more team members?',
                choices: ['yes','no'],
                name: "moreMembers"
            }])
            .then((data2) => {
                let dataFull = {
                    ...data,
                    ...data2,
                };
                newHires.push(dataFull);


                if (data2.moreMembers === "yes"){
                    addEmployee();
                } else {

                 const writeHtml = generateHtml();
                
                fs.writeFile('new-hires.html', writeHtml, (err) => err ? console.log(err) : console.log('Success!')
                );    
                };

           
            });
        });
        




};

function makeCards(newHires) {
    let cardHtml = "";
    for (let i = 0; i < newHires.length; i++) {
        detailObject = "";
        switch (newHires[i].roleSelect) {
            case 'Manager':
                detailObject = 'Office number: '
            break;
            case 'Intern':
                detailObject = 'School: '
            
            break; 
            case 'Engineer':
                detailObject = 'GitHub: '
            break;
        default:
            break;
        }
        cardHtml +=`
        <div>
            <h2>${newHires[i].nameSelect}</h2>
            <p>${newHires[i].roleSelect}</p>
            <p>ID: ${newHires[i].idSelect}</p>
            <p>Email:
            <a href="mailto: ${newHires[i].emailSelect}">${newHires[i].emailSelect}</a> </p>
            <p>${detailObject} ${newHires[i].roleOption}</p>
        </div>
        `       
    }
    return cardHtml;

}

const generateHtml = () => 
    `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    <title>The Team</title>

<style>
    h2 {
    font-size: medium;
    background-color:blue;
    color: white;
    }

</style>   
</head>

<body>

    <header class="container-fluid bg-danger text-light mb-5 p-3">
        <div class="d-flex align-items-center justify-content-center">
        <h1>The Team</h1>
        </div>
        </header>
            <div class="col-12 col-md-9">
                <section id="hireList" class="row justify-content-around">
            ${makeCards(newHires)}        
                </section>

</div>
</body>

</html>
`
addEmployee();

