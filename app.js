const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");


function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            message: "Enter your first name:",
            name: "name"
        }, {
            type: "input",
            message: "Enter your email address:",
            name: "email"
        }, {
            type: "input",
            message: "What's your role within the company?",
            name: "role",
            choices: ['engineer', 'intern', 'manager']
            //conditional statement about employment: intern ask for school, if manager ask for office number, if engineer ask for githubname
        },
        {
            type: "input",
            message: "Enter your github username:",
            name: "username"
        }, ]);
}

// let readyToConvert = false;
// promptUser()
//     .then(function ({ name, email, role, username }) {

//         const queryUrl = `https://api.github.com/users/${username}`;
//         axios
//             .get(queryUrl).then(function (res) {
//                 console.log(res);
//                 info = {
//                     color: faveColor,
//                     profilePic: res.data.avatar_url,
//                     name: res.data.login,
//                     location: res.data.location,
//                     profileUrl: res.data.html_url,
//                     blog: res.data.blog,
//                     bio: res.data.bio,
//                     company: res.data.company,
//                     repos: res.data.public_repos,
//                     followers: res.data.followers,
//                     following: res.data.following,
//                 }
//                 console.log(info);

//                 const newQueryUrl = `https://api.github.com/users/${username}/repos`;
//                 console.log(newQueryUrl);

//                 axios.get(newQueryUrl).then(function (res) {
//                     let starCount = 0;
//                     for (let index = 0; index < res.data.length; index++) {
//                         let count = res.data[index].stargazers_count;
//                         starCount = starCount + count;

//                     }
//                     console.log("Final star count for all repositories: " + starCount)
//                     info.starCount = starCount;
//                     const html = generateHTML(info);

//                     console.log(`${username}.html is ready to convert to PDF`);
//                     readyToConvert = true;

//                     // for testing the HTML file that gets written to disk
//                     fs.writeFileSync(`${username}.html`, html);

//                     // https://www.npmjs.com/package/html-pdf
//                     var options = { format: 'landscape' };
//                     pdf.create(html, options).toFile(`${username}.pdf`, function (err, res) {
//                         if (err) return console.log(err);
//                         console.log(res);
//                     });

//                 });
//             });

//     })
//     .catch(function (err) {
//         console.log(err);

//     });


// function generatePdf(html) {
//     let conversion = convertFactory({

//         converterPath: convertFactory.converters.PDF

//     });

//     conversion({
//         html: html,
//         waitForJs: true,
//         waitForJsVarName: readyToConvert,
//     },
//         function (err, result) {
//             if (err) {
//                 return console.log(err);
//             }

//             result.stream.pipe(fs.createWriteStream(`${username}.pdf`));

//             conversion.kill();

//             console.log(`${username}.pdf is now available in your current directory`);
//         });
// }