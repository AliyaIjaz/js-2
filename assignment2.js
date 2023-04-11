// 1. Write a function that creates a closure and returns a 
//function that can add a specific number to any number passed to it. 
//For example, if the closure is created with 5, the returned function 
//should add 5 to any number passed to it.

function myfunc() {
    let num = 5;
    return function (n) {
        return n + num;

    }
}

const add5 = myfunc();
console.log(add5(40));

//**************************************************************************/
// 2. Write a recursive function that searches an array for a specific value. 
// The function should return true if the value is found, and false if it is 
// not. You can assume that the array is not nested.
//*************************************************************************** */

let arr = [3, 5, 7, 9, 0, 1, 6, 8];
let counter = 0;
let found = false;

function finding(ele) {
    if (arr[counter] === ele) {
        found = true;
        return;
    } else {
        if (counter === arr.length - 1) {
            return;
        } else {
            counter++;
            finding(ele);
        }
    }
    return;
}

finding(6);
console.log('Element found: ', found);
console.log('Position in array ', counter);


//******************************************************************** */
// 3. Write a function that adds a new paragraph element to the bottom of an 
// HTML document. The function should take a string argument that will 
// be used as the text content of the new paragraph element.
//********************************************************************** */

function addEle(text) {
    let para = document.createElement('p');
    document.body.appendChild(para);
    para.innerText = text;
}
addEle('Hello World!');


//******************************************************************** */
// 4. Write a function that adds a new list item to an unordered list in an HTML 
// document. The function should take a string argument that will be used as 
// the text content of the new list item.
//******************************************************************** */


function addListItem(listText) {
    let list = document.getElementById('todos');
    let newItem = document.createElement('li');
    newItem.innerText = listText;
    list.appendChild(newItem);
}
addListItem('Submit JS assignment2');

//******************************************************************** */
// 5. Write a function that changes the background color of an HTML element. 
// The function should take two arguments: the first argument is a reference 
// to the HTML element, and the second argument is a string representing the 
// new background color.
//******************************************************************** */


function changeBg(eleId, color) {
    let ele = document.getElementById(eleId);
    ele.style.backgroundColor = color;
}
changeBg('heading', 'yellow');
changeBg('todos', 'cyan');


//******************************************************************** */
// 6. Write a function that saves an object to localStorage. The function 
// should take two arguments: the first argument is a string representing 
// the key to use for storing the object, and the second argument is the
//  object to store.
//******************************************************************** */

function saveToLS(std, stdObj) {
    localStorage.setItem(std, JSON.stringify(stdObj));
}
student = {
    nm: prompt('Enter Your name..'),
    rollNo: prompt('Enter roll number..'),
    course: prompt('Enter your course name..'),
}
saveToLS('stdData', student);
console.log(student);


//********************************************************************/
// 7. Write a function that retrieves an object from localStorage. The function 
// should take one argument, which is a string representing the key used to store
//  the object. The function should return the object.
//********************************************************************/

function getData(objKey) {
    return localStorage.getItem(objKey);
}

const dt = getData('stdData');
console.log('JSON...', dt);
console.log('Object..', JSON.parse(dt));

//*****************************************************************************/
// 8. Write a function that takes an object and saves each property to localStorage 
// using the property name as the key and the property value as the value. The function 
// should also retrieve the object from localStorage and return it as a new object.
//*******************************************************************************/

let person = {
    nm: 'Ali',
    age: 30,
    qualification: 'MBBS',
    nationality: 'Pakistani'
}

function toLocalStorage(obj) {
    for (const item in obj) {
        console.log(item + ' ' + obj[item]);
        localStorage.setItem(item, obj[item]);
    }

    let newObj = {};
    newObj['nm'] = localStorage.getItem('nm');
    newObj['age'] = localStorage.getItem('age');
    newObj['qualification'] = localStorage.getItem('qualification');
    newObj['nationality'] = localStorage.getItem('nationality');
    console.log('new object..', newObj);

}
toLocalStorage(person);