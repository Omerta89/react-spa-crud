# SPA - single page app, Data manager (CRUD)

* Back - django serving requests (server) and DataBase manager.

* Front - react connected through fetch, implementing crud:(get_all, post, delete). returning text-box, button, map displaying data and a button alongside.

## containing react hooks:
* 'useeffect' that triggers upon boolean parameter change, the set method of boolean is defined to switch states by exclamation mark.

* 'useeffect' method inside is get all. uses state const as variable to remember the json list.

* addData method, through fetch with body of data i select. the value is a variable from user input value field. 'usestate''s set method informs react of value change.

* delData recieves parameter id from button method which recieves it from map function that iterates json list...( - up ahead explanation about origion of json list item) -

 ... (json list is recieved from set method from getData method, from fetch which recieves url to my django end point which returns json list items) ...

...map function that iterates json list... to child's and uses them to create a display, the display is two item properties and a button which onclick activates an instance of delData method by using id property as parameter.




* test.html - if it aint working in plain html live server then it wont work elsewhere.