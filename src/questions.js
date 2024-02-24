const questions = { 
    questionsManager: [
        {
            type : 'input',
            name : 'name',
            message : 'What is the name of the manager?',
            // Name Validation
            validate: async (name) => {
            if (name) {
                return true;
            } else {
                return 'Please enter a valid name';
            }
        },
        },
        {
            type : 'input',
            name : 'id',
            message : 'What is the ID of the manager?',                 
            // Id Validation
            validate: async (id) => {
                if (id) {
                    return true;
                } else {
                    return 'Please enter a valid name';
                }
            },
        },
        {
            type : 'input',
            name : 'email',
            message : 'What is the email of the manager?',
            // Email validation with RegEx
            validate: async (email) => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log("Please enter a valid email")
                    return false;
                }
            },
        },
        {
            type : 'input',
            name : 'officeNumber',
            message : 'What is the office number of the manager?',                 
            // Id Validation
            validate: async (officeNumber) => {
                if (officeNumber) {
                    return true;
                } else {
                    return 'Please enter a valid office number';
                }
            },
        },
    ],

    questionsEngineer : [
        {
            type : 'input',
            name : 'name',
            message : 'What is the name of the engineer?',
            // Name Validation
            validate: async (name) => {
                if (name) {
                    return true;
                } else {
                    return 'Please enter a valid name';
                }
            },
        },
        {
            type : 'input',
            name : 'id',
            message : 'What is the ID of the engineer?',              
            // Id Validation
            validate: async (id) => {
                if (id) {
                    return true;
                } else {
                    return 'Please enter a valid name';
                }
            },
        },
        {
            type : 'input',
            name : 'email',
            message : 'What is the email of the engineer?',
            // Email validation with RegEx
            validate: async (email) => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log("Please enter a valid email")
                    return false;
                }
            },
        },
        {
            type : 'input',
            name : 'github',
            message : 'What is the Github username of the engineer',           
            // Id Validation
            validate: async (github) => {
                if (github) {
                    return true;
                } else {
                    return 'Please enter a valid github username';
                }
            },
        },
    ],

    questionsIntern : [
        {
            type : 'input',
            name : 'name',
            message : 'What is the name of the intern?', 
            // Name Validation
            validate: async (name) => {
                if (name) {
                    return true;
                } else {
                    return 'Please enter a valid name';
                }
            },
        },
        {
            type : 'input',
            name : 'id',
            message : 'What is the ID of the intern?', 
            // Id Validation
            validate: async (id) => {
                if (id) {
                    return true;
                } else {
                    return 'Please enter a valid name';
                }
            },
        },
        {
            type : 'input',
            name : 'email',
            message : 'What is the email of the intern?',
            // Email validation with RegEx
            validate: async (email) => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log("Please enter a valid email")
                    return false;
                }
            },
        },
        {
            type : 'input',
            name : 'school',
            message : 'What is the school of the intern?',                
            // School Validation
            validate: async (school) => {
                if (school) {
                    return true;
                } else {
                    return 'Please enter a school name';
                }
            },
        },
    ],

    questionsTeammember : [
        {
            type : 'list',
            name : 'type',
            message : 'Would you like to add an Enginner or Intern?',
            choices : ['Engineer','Intern','None' ]
        },
    ]
}
module.exports = questions;