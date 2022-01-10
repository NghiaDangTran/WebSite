// // ****** SELECT ITEMS **********

// // edit option

// // ****** EVENT LISTENERS **********

// // ****** FUNCTIONS **********

// // ****** LOCAL STORAGE **********

// // ****** SETUP ITEMS **********
var arraydata = [];
var size = 0;


// check the button box if it has data andclicked then add that value into the array
// after that show the delete button

const groceryForm = document.querySelector(".grocery-form");
const alert = document.querySelector(".alert");
const groceryList = document.querySelector(".grocery-list");
groceryForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = grocery.value;
    console.log(arraydata);
    if (data == "" || data[0] == " ") {
        displayAlert("Please enter a value", "danger");
    } else {

        arraydata.push(grocery.value);

        size++;
        displayAlert("Item added", "success");
        grocery.value = "";

        const element = document.createElement("article");
        element.classList.add("grocery-item");
        const attribute = document.createAttribute("data-id");

        attribute.value = size;
        element.setAttributeNode(attribute);
        element.innerHTML = `<p class="title">${data}</p>
        <div class="btn-container">
            <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i></button>
            <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
            </button>
        </div> `;

        groceryList.appendChild(element);

        const delall = document.querySelector(".clear-btn");

        if (size > 0) {
            delall.style.visibility = "visible";
        }


        delall.addEventListener("click", function() {
            arraydata.length = 0;
            size = 0;
            groceryList.innerHTML = "";
            // add the clear button back to gocery list
            const newButton = document.createElement("button");
            newButton.classList.add("clear-btn");
            newButton.textContent = "Clear All";
            groceryList.appendChild(newButton);
            delall.style.visibility = "hidden";
        });




        const deleteBtn = element.querySelector(".delete-btn");
        deleteBtn.addEventListener("click", () => {
            console.log((element.getAttribute("data-id")));

            // go to the div and delete the item
            deleteAt(parseInt(element.getAttribute("data-id")));
            // update grocery list
            groceryList.removeChild(element);
            grocery.value = "";
        });

        // if the user click the edit button then change the value of the item to the input box
        const editBtn = element.querySelector(".edit-btn");
        editBtn.addEventListener("click", () => {
            const input = document.createElement("input");
            input.type = "text";
            input.value = element.querySelector(".title").textContent;
            element.querySelector(".title").textContent = "";
            element.querySelector(".title").appendChild(input);
            input.focus();
            input.addEventListener("keyup", function(e) {
                // or user click the edit button then change the value of the item to the input box
                if (e.keyCode === 13) {

                    //key code of the enter key is 
                    //13
                    element.querySelector(".title").textContent = input.value;
                    arraydata[parseInt(element.getAttribute("data-id")) - 1] = input.value;
                    input.remove();

                }


            });

            console.log(arraydata);

        });
    }


    // var flag = 0;
    // const editBtn = element.querySelector(".edit-btn");
    // editBtn.addEventListener("click", () => {
    //     var saveat = parseInt(element.getAttribute("data-id")) - 1;
    //     const changesumbit = document.querySelector(".submit-btn");
    //     //change the inner
    //     changesumbit.innerHTML = "Change contain";
    //     var newData = grocery.value;
    //     flag = 1;
    //     if (flag == 1)
    //         changesumbit.onclick = function() {
    //             changesumbit.innerHTML = "Submit";
    //             arraydata[saveat] = grocery.value;
    //             console.log(element.querySelector(".title"));
    //             element.querySelector(".title").innerHTML = grocery.value;
    //             grocery.value = "";

    //             flag = 0;

    //         };

    // changesumbit.addEventListener("click", () => {

    //     console.log(grocery.value);

    //     changesumbit.innerHTML = "Submit";
    //     arraydata[saveat] = grocery.value;
    //     console.log(element.querySelector(".title"));
    //     element.querySelector(".title").innerHTML = grocery.value;
    //     grocery.value = "";
    //     /// deselecte the element and change the inner

    //     console.log("ok");


    //     // out this function
    //     changesumbit.removeEventListener("click", () => {
    //         console.log(grocery.value);

    //         changesumbit.innerHTML = "Submit";
    //     });
    //     //  grocery.focus();
    // });



});


function deleteAt(index) {
    arraydata.reduce
    arraydata.splice(index, 1);
};

function fixAt(index, value) {
    arraydata[index] = value;
}


function displayAlert(text, action) {
    alert.textContent = text;
    alert.classList.add("alert-" + action);



    setTimeout(function() {
        alert.textContent = "";
        alert.classList.remove("alert-" + action);
    }, 1000);
};



/****************a better way to do it**********/

// const alert = document.querySelector(".alert");
// const form = document.querySelector(".grocery-form");
// const grocery = document.querySelector(".grocery");
// const sumbitBtn = document.querySelector(".submit-btn");
// const container = document.querySelector(".grocery-container");
// const list = document.querySelector(".grocery-list");
// const clearBtn = document.querySelector(".clear-btn");
// let editElemnt;
// let editFlag = false;
// let editId = "";

// form.addEventListener("submit", addItem);


// clearBtn.addEventListener("click", clearAll);

// function addItem(e) {
//     e.preventDefault();
//     const value = grocery.value;
//     const id = new Date().getTime().toString();
//     if (editFlag === false && value !== '') {

//         const element = document.createElement("article");
//         element.classList.add("grocery-item");
//         const att = document.createAttribute("data-id");
//         att.value = id;
//         element.setAttributeNode(att);
//         element.innerHTML = `<p class="title" data-id="">${value}</p>
//         <div class="btn-container">
//             <button type="button" class="edit-btn">
//                 <i class="fas fa-edit"></i></button>
//             <button type="button" class="delete-btn">
//                 <i class="fas fa-trash"></i>
//             </button>
//         </div>`;

//         const delBtn = element.querySelector(".delete-btn");
//         delBtn.addEventListener("click", deleteItem);
//         const editBtn = element.querySelector(".edit-btn");
//         editBtn.addEventListener("click", editItem);
//         list.appendChild(element);
//         displayAlert("Item added", "success");
//         container.classList.add("show-container");
//     } else if (value !== "" && editFlag === true) {

//     } else {

//     }
// }

// function deleteItem(e) {
//     const select = e.currentTarget.parentElement.parentElement;
//     console.log(select);

// }

// function displayAlert(text, action) {
//     alert.textContent = text;
//     alert.classList.add("alert-" + action);
//     setTimeout(function() {
//         alert.textContent = "";
//         alert.classList.remove("alert-" + action);

//     }, 1000);
// };

// function clearItem() {

//     const items = document.querySelectorAll(".grocery-item");
//     if (items.length > 0) {
//         items.forEach(function(item) {
//             list.removeChild(item);
//         });
//     }
//     container.classList.remove("show-container");
//     displayAlert("All items deleted", "danger");
//     setBacktonormal();
//     localStorage.removeItem('list');
// }

// function setBacktonormal() {
//     grocery.value = "";
//     editFlag = false;
//     editId = "";
//     sumbitBtn.innerHTML = "Submit";
// }


// function addTolocal(id, value) {}