function recursiveObjKeys(obj, parentULElement) {
    for (const objKey in obj) {
        let liElement = document.createElement("li")
        if (typeof (obj[objKey]) === "object") {
            liElement.innerHTML = `<b>${objKey}:</b>`
            let ulElement = document.createElement("ul")
            liElement.appendChild(ulElement)
            recursiveObjKeys(obj[objKey], ulElement)
        } else {
            liElement.innerHTML = `<b><i>${objKey} </i></b>: ${obj[objKey]}`
        }
        parentULElement.appendChild(liElement)
    }
    document.getElementById("UserContainer").appendChild(rootUlElement)
}

let user = JSON.parse((new URL(location.href).searchParams.get("userdata")))
document.title = ` User details: ${user.name}`
document.getElementsByTagName("h1")[0].innerText = document.title
let rootUlElement = document.createElement("ul")
recursiveObjKeys(user, rootUlElement)
document.getElementsByTagName("button")[0].addEventListener("click", () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            data.map((post) => {

                let postsBlock = document.createElement('div')
                postsBlock.classList.add("post", "border-box", "margin1vw")
                let postTitle = document.createElement('h4')
                let btnMore = document.createElement('button')
                btnMore.role = "link"
                btnMore.innerText = " More..."
                btnMore.addEventListener("click", () => {
                    location.href = "post-details.html?post=" + JSON.stringify(post)
                })
                postTitle.innerHTML = post.title;
                postsBlock.append(postTitle, btnMore);
                document.getElementById("PostsContainer").appendChild(postsBlock);

            })

        })
        .catch(function (error) {
            console.error(`Download error: ${error.message}`, error)
        })
})