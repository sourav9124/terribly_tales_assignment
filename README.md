# terribly_tales_assignment
This assgnment contains an application in which whenever a user put a value in a input box and click on submit button. Then it makes a backend http request and fetch a text file hosted at another link in which it has to read that file and perform work counter function and finally display the N most frequerntly occuring words in a tablubar format.

==================================================================================================================================================================================

Technology Used in builind the application 

1.React.js -- for frontend development
2.Node.js  -- for backend development


==================================================================================================================================================================================
Code Explanation

For React.js Front end 

1. User.js file in the project contains code of a functional component where the a simple input form is designed and a button to send the value to the node.js backend using a query parameter and export is being user to send the the functional component where it is used.

2.App.js imports that User.js file and save it in a variable and display the designed component using return keyword.


For Node.js Backend

1. Server.js - performs a get request and recieves the the value from the url which we get from the frontend user input and then fetch a file from the url hosted at another link and read it.

2. counter.js - performs a words counter operation where the function returns the frequency of the words in a descending order.

3.App.js - imports that counter.js file and save it in a variable and use it as a component and display it on the frontend .

=================================================================================================================================================================================

Styling used from materialize.com website


