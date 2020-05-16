For when you start your own react project for the sprint: :react:
Using create-react-app:
In whichever directory you want to create your project in, 
run the command 
npx create-react-app my-project-name 

- This will create a new directory called my-project-name , so you do not need to clone the northcoders repository from github, you can just create your own new project. (If you have already created a folder (e.g. react-project-todo-list) 

cd into that folder and run the command npx create-react-app . 

instead (this will make the current directory the react app, instead of creating a nested folder)

Once you have this project created, if you run npm start you will see the project template that has been created for you.

To start to build your own react app, remove the code from within src/App.js and start to build your own react website!

Remove the <React.StrictMode> tags from ./src/index.js !

FAQs
What is npx?
- this is not a typo of npm - npx will use the most recent version of the create-react-app package, without you having to run npm install

**What about all the other stuff in the folder?

- we have already see how public/index.html is the html document displayed in the browser, and that src/index.js is the file that renders our App.js component in the root div, most of the other files we can safely remove, e.g. src/App.test.js, src/setupTests.js, src/serviceWorker.js and logo.svg(for the last two you will also have to remove the references to them inside the src/index.js and src/App.js files