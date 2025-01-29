# file-directory-handel

File directory handel system

# Importent note

1. npm i //For install all package

2. setup the url in .env for mongoDB connection

3. Run the Server use 'npm start'

# Access the API

- http://localhost:5000 by default.
- create file or folder POST http://localhost:5000/api/directories/create
  - request : {
    "name":"DIR_TEST_1",
    "type":"folder", //'file', 'folder'
    "parent": null //It will be the id of parrent
    }
  - response :{
    "name": "DIR_TEST_1",
    "type": "folder",
    "parent": null,
    "\_id": "679979f5b70b1b65a22aee99",
    "\_\_v": 0
    }
- List of file and folder GET http://localhost:5000/api/directories/
- Update file or folder: http://localhost:5000/api/directories/rename/:id
  _ request : {"name": "DIR_TEST_2"}
  _ response :{
  "\_id": "679979f5b70b1b65a22aee99",
  "name": "DIR_TEST_2",
  "type": "folder",
  "parent": null,
  "\_\_v": 0
  }
* Delete file or folder: http://localhost:5000/api/directories/delete/:id
    * request: {"message": "Deleted successfully"}
    * 