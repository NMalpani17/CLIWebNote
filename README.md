# CLIWebNote 

## Project Description

### This project involves building a CLI-based note-taking app and a simple website using Node.js. The app allows users to create, manage, and delete notes from the command line. The accompanying website demonstrates core Node.js concepts by serving web pages and handling HTTP requests, providing a comprehensive example of Node.js capabilities in a CLI environment. The application has been tested using Jest to ensure reliability and correctness.


### Tools used

1. Code Editor: Visual Studio Code (VS Code)
2. Version Control: Git
3. Technology: Node.js,Jest

### Installation

1. Clone this repository

```bash
git clone git@github.com:NMalpani17/CLIWebNote.git
```

2. Open the repository with Visual Studio or any other IDE.

3. Run the following command folder directory to install and add node modules 

```bash
npm install
```
### CLI Commands

Using the developed CLI, you can use the following commands
* Create a new note
 ```bash
 note new <note>
``` 
* Get all notes
```bash
note all
``` 
* Get matching notes
```bash
note find <filter>
```
* Remove a note by ID
```bash
note remove <id> 
```
* Launch the website to see notes
```bash
note web [port]
``` 
* Remove all notes
```bash
note clean
``` 
This set of commands allows for comprehensive management of notes directly from the command line, enhancing the functionality and usability of the note-taking app.