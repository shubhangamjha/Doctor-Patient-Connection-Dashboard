# Doctor-Patient-Connection-Dashboard
This test scenario describes an application that we will be creating at Formulo. Interview Scenario: Doctor-Patient Connect Dashboard. This test scenario describes an application that we will be creating at Formulo. Our team includes doctors who want to connect with their patients, follow up on upcoming appointments, and view communication history with their patients. The requirement of this interview step is to create two applications: a UI and a backend to display the aforementioned data. The data for these doctors is stored in MongoDB; the connection string is shared at the bottom of the page. Perform the following tasks:
## Backend
1. Create a server-side single API using a Python Flask or Django application to connect to the database and render a response.
2. The API should take 2 parameters:
  ● 1 optional request parameter: Patient Name.
  ● If the name of the patient is specified, get the data for that particular patient.
  ● If the name is not specified, get data for all the patients.
3. The response should return the data from the collection filtered on the basis of the parameters provided as part of the request. The response format should be:
    {code: 200, status: "Success", data: <data from API>}
4. Note: Perform appropriate validations for the mandatory parameters.

## Frontend
1. Create a single web page using a JavaScript MVC framework: either React, Angular, or Vue, to
connect to the server and call the API created in step 1.
2. Create cards/tiles inspired by Material UI to show patients. Each card should consist of:
  ● The patient's picture (any picture)
  ● The patient's name
  ● The next appointment time of the patient
3. There should be a date selector. When a date is selected, display only the patients who have an appointment on that particular date.
4. When a card is clicked, show a modal containing the chat history for that patient. DB connection string:
    <href=mongodb+srv://assesment_user:uYdY!7f9C-HnX%40Y@cluster0.vcxxyf3.mongodb.net/Formulo_assesment>


## How to run?

### Step 1: 
Install Node js v20.14.0(LTS)

### Step 2:
Read the README.md file in Doctor-Patient-Dashboard Folder

### Step 3: 
Run the app.py file and npm start in command promt together

### The App is ready to go
