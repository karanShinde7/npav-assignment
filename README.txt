This is an application where you can get the total average score of a batsman against particular
country.
1. This application works in 2 modes :- Test mode and Server mode.
2. For Test Mode, the application will give you static data (hardcoded).
3. For Server Mode, the application will give you data from the server (dynamic data)
4. Users can enter the country name in the 2 text boxes.
5. If the country exists in the data, it will show you the average score against the country.
6. If the country name matches exactly to the country name mentioned in the data, then the application will show the progress bar of the average score of batsman against the entered country, otherwise, it will not.
7. Basically, to run this application you need to have a setup of React and Node.
8. After getting the code, open the terminal inside the application and use the 'npm i' command that will help you to install all packages/plugins which are required in this application.


--------
About Coding : 
1. Application coding starts from App.js.
2. HomeScreen : It is like a container, where I put all the components which are required. A  Radio button is provided to choose between Test mode and Server mode.
3. Inside components : 
    a. labelComponent : All labels or text, we are using in this application can be accessed using this particular component.
    b. searchComponent : We are using a search textbox to search the country.
    c. serverDataComponent : We are showing the data which contains the Country name, average score, and progress bar.
    d. scoreViewComponent : It is a class component that is basically used to glue all the components together. 
4. data : Static data for test mode is mentioned in a single js file called ‘data.js’.
5. services : Here I have called API to get the data, from the server which then can be used as dynamic content in the application.
6. app.css : All the styling which is related to the application are mentioned here.
