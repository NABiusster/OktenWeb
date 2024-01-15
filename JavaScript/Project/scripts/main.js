const urlUsers = 'https://jsonplaceholder.typicode.com/users';
import {createNode} from "./functions.js";

fetch(urlUsers)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        data.map((user) => {
            let userBlock = createNode("div", ["item", "border-box", "margin1vw"], null)
            userBlock.appendChild(createNode("h2", null, `${user.id}: ${user.name}`))
            let btnMore = document.createElement('button')
            btnMore.role = "link"
            btnMore.innerText = " More..."
            btnMore.onclick = function () {
                location.href = "user-details.html?userdata=" + JSON.stringify(user)
            }
            userBlock.appendChild(btnMore);
            document.getElementById("UsersContainer").appendChild(userBlock);
        });

    })
    .catch(function (error) {
        console.error(`Download error: ${error.message}`, error)
    });
