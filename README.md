# SDC
Replace the previously provided, underperforming API used for the FEC Project. Rebuild a service within the API from scratch, focusing on optimizing performance and accommodating web traffic.

Project Title: System Design Capstone

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white "NodeJS")
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white "Express")
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)

How to start the project: CD into the project directory and in the command line interface run npm install to run the app on localhost:3000 in a web browser.

Table of Contents:
1. Database
2. Server
3. Testing

File Structure:
  - Database:
    - This folder is where the database design schemas live. As you can see the database used for this project was PostgresSQL, however in the early stages of this project a secondary NRDBM was on the table, name a Mongoose schema.

  - Sever:
    - This folder includes the server index file which starts an instance of the server, as well as a model and controller folder to separate concerns. The controller folder is where the server receives from and responds to the client after consulting the model. The model is where the server queries the database depending on the request.

  - Testing:
    - The testing folder consists of two main files including the K6 stress testing file, as well as the app.test Jest/Supertest file. Both files are critical to this project as the stress testing framework K6 offers enabled our team of developers to understand and optimize request metrics including iterations, thresholds, HTTP success rate/error rate, execution time etc... On a similar note the jest and supertest framework enabled us to have 100% testing coverage by unit testing certain functions. Testing back end frameworks is important because it can be difficult to tell where certain errors occur and what potential flaws may be slowing everything down.

Team Members:
Justin Greer
Waylon Marble
Jack Durham

Roadmap:
What future enhancements are planned?
What is the current status of the project?
Is it being actively maintained?

License: If open source, state how the project is licensed.

Usage:
--Further details on how the project is meant to be used
--If using a library framework outline how to use the library within another project

Folder Structure: MVC

Optional/Other:
--Related projects
--Git workflow steps

