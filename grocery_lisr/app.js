// ****** select items **********

const form = document.querySelector(".grocery-form");
const alert = document.querySelector(".alert");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");
// edit option
let editElement;
let editFlag = false;
let editID = "";


let arrayData = [];
let size = 0;
// ****** event listeners **********
const Qtybtn = document.createElement("title2");
Qtybtn.addEventListener("click", editQty);
// submit form
form.addEventListener("submit", addItem);
// clear list
// clearBtn.addEventListener("click", clearItems);
// display items onload
//window.addEventListener("DOMContentLoaded", setupItems);

// ****** functions **********

// add item
function addItem(e) {
    e.preventDefault();
    const value = grocery.value;
    //  const id = new Date().getTime().toString();

    if (value !== "" && !editFlag) {
        arrayData.push(value);
        size++;




        const element = document.createElement("article");
        let attr = document.createAttribute("data-id");
        attr.value = size - 1;
        element.setAttributeNode(attr);
        element.classList.add("grocery-item");
        element.innerHTML = `<p class="title">${value}</p>
        <div>
             <p class="title2">Qty: <span class="qty">1</span></p>
                        </div>
            <div class="btn-container">
              <!-- edit btn -->
              <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <!-- delete btn -->
              <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>
          `;

        const delall = document.querySelector(".clear-btn");

        if (size > 0) {
            delall.style.visibility = "visible";
        }

        delall.addEventListener("click", function() {
            delall.style.visibility = "hidden";

            // dlete all in array
            arrayData = [];
            size = 0;
            list.innerHTML = "";
            // add the clear button back to gocery list
            const newButton = document.createElement("button");
            newButton.classList.add("clear-btn");
            newButton.textContent = "Clear All";
            list.appendChild(newButton);
        });

        // add event listeners to both buttons;
        const deleteBtn = element.querySelector(".delete-btn");
        deleteBtn.addEventListener("click", deleteItem);
        const editBtn = element.querySelector(".edit-btn");
        editBtn.addEventListener("click", editItem);

        // const Qtybtn = element.querySelector(".title2");
        // Qtybtn.addEventListener("click", editQty);

        // append child
        list.appendChild(element);

        displayAlert("item added to the list", "success");

        setBackToDefault();
    } else if (value !== "" && editFlag) {
        editElement.innerHTML = value;
        displayAlert("value changed", "success");

        arrayData[editID] = value;

        setBackToDefault();
        // set the color back to default
        editElement.parentElement.style.backgroundColor = "white";
        // set the color back to default
        editElement.parentElement.querySelector(".title").style.color = "black";

    } else {
        displayAlert("please enter value", "danger");
    }
}
// display alert
function displayAlert(text, action) {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);
    // remove alert
    setTimeout(function() {
        alert.textContent = "";
        alert.classList.remove(`alert-${action}`);
    }, 1000);
}

// clear items
// function clearItems() {
//     const items = document.querySelectorAll(".grocery-item");
//     if (items.length > 0) {
//         items.forEach(function(item) {
//             list.removeChild(item);
//         });
//     }
//     container.classList.remove("show-container");
//     displayAlert("empty list", "danger");
//     setBackToDefault();
//     localStorage.removeItem("list");
// }

// delete item

function deleteItem(e) {

    const element = e.currentTarget.parentElement.parentElement;

    const id = element.dataset.id;
    console.log(e);
    // go into the html search for the element that has the data-id attribute
    // then remove 

    list.removeChild(element);

    arrayData.splice(id, 1);

    displayAlert("item removed", "danger");

    setBackToDefault();
    // scoll to top
    window.scrollTo(0, 0);

}
// edit item
function editItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    editElement = e.currentTarget.parentElement.parentElement.querySelector(".title");


    grocery.value = editElement.innerHTML;
    editFlag = true;
    editID = element.dataset.id;
    //
    submitBtn.textContent = "edit";
    element.style.backgroundColor = "black";
    element.querySelector(".title").style.color = "white";
    window.scrollTo(0, 0);

}

function editQty(e) {
    if (e.currentTarget.querySelector("input") === null) {
        const input = document.createElement("input");
        input.type = "number";
        var save = e.currentTarget.querySelector(".qty");
        save.innerHTML = "";



        input.addEventListener("keyup", function(e) {
            if (e.keyCode === 13) {
                save.innerHTML = input.value;
                input.remove();
            }
        });
        e.currentTarget.appendChild(input);

    } else {
        return;




    }
}
// set backt to defaults
function setBackToDefault() {
    grocery.value = "";
    editFlag = false;
    editID = "";
    submitBtn.textContent = "submit";
}