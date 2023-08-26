# To do list and ideas

[x] Add new items to shopping list ({items})
const variable = e.target 


[x] When form is submitted, a new item should be created and added to list of items

[x] Make all input fields for this form controlled inputs, so  all of form data can be accessed via state

[x] When setting the initial state for the <select> tag, use an initial value of "Produce" (since that's the first option in the list)

[] Handle the form's submit event, and use the data that you have saved in state to create a new item object with the following properties:

  const newItem = {
    id: uuid(), // the `uuid` library can be used to generate a unique id
    name: itemName,
    category: itemCategory,
  };

[] Add the new item to the list by updating state. To get the test passing, you'll need to use a prop called onItemFormSubmit as a callback and pass the new item to it.

[x] Note:NOTE: to add a new element to an array in state, it's a good idea to use the spread operator:

  function addElement(element) {
    setArray([...array, element]);
  }
The spread operator allows us to copy all the old values of an array into a new array, and then add new elements as well. When you're working with state, it's important to pass a new array to the state setter function instead of mutating the original array.
