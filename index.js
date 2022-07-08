
let myWords = []

const inputWordEl = document.getElementById('input-word-el');
const inputWordClsEl = document.getElementById('input-word-cls-el');
const inputDesEl = document.getElementById('input-des-el');
const saveBtn = document.getElementById('save-btn');
const removeBtn = document.getElementById('remove-btn');

const wordEl = document.getElementById('input-word-el');
const clsEl = document.getElementById('input-word-cls-el');
const desEl = document.getElementById('input-des-el');

const tbEl = document.getElementById('tb-el');

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myWords"))

if (leadsFromLocalStorage) {
    myWords = leadsFromLocalStorage
    render(myWords)
}

saveBtn.addEventListener("click", function () {
    if(inputWordEl.value){
        myWords.push({
            word: inputWordEl.value,
            class: inputWordClsEl.value,
            description: inputDesEl.value
        })

        inputWordEl.value =''
        inputDesEl.value =''
        localStorage.setItem("myWords", JSON.stringify(myWords))
    }
    render(myWords)
});

// removeBtn.addEventListener("click", function () {
//     console.log("hello")
// });

function removeItem (num) {
    myWords.splice(num, 1);
    localStorage.setItem("myWords", JSON.stringify(myWords))
    render(myWords)
}

function render(words) {
    let listItems = ""
    for(let i = 0; i < words.length; i++) {
        listItems +=
        `
        <tr>
            <th scope="row">${i+1}</th>
            <td id="word-el">${words[i].word}</td>
            <td id="word-cls-el">${words[i].class}</td>
            <td id="des-el">${words[i].description}</td>
            <td>
                <button onclick="removeItem()">Remove</button>
            </td>
        </tr>
        `
    }
    tbEl.innerHTML = listItems
}