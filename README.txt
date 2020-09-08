Cric Score 

This is application is about getting the the total average score of batsman against particular
country.
1. This application is works in 2 modes test and server mode.
2. For test mode application will give you an data which is static(mentioned in code itself).
3. For server mode application will give you an data from the server(which can be dynamic data)
4. User can enter country name in text box.
5. If the country is present it will show you the average score against country.
6. If the country name matches exactly to the country name mentioned in data, then application will show progress bar of an average other wise it will not.
7. Basically to run this application you need to have setup of react, node.
8. After getting the code open terminal inside application and use 'npm i' command that will help you to install all packages/plugins which are required in this application.


About Coding : 
1. Application coding starts from App.js.
2. HomeScreen : It is like a container where i put all the component which are required. And Radio button choice to see Test data and server data.
3. Inside components : 
    a. labelComponent : Whichever labels or text we are using in the application can be accessible using this component.
    b. searchComponent : We are using search textbox to search the country.
    c. serverDataComponent : We are showing the data which comtaines Country name, average score and progress bar.
    d. scoreViewComponent : It is class component which is basically used to glued all the components together. 
4. data : Static data for test mode is mentioned in a one js file.
5. services : Here I called API to getting the data from the server which then can be used as a dynamic content in an application.
6. app.css : All the styling which is related to the application mentioned here