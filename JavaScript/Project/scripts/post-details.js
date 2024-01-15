import {createNode} from "./functions.js";

let containerNode = document.getElementById("PostContainer")
let post = JSON.parse((new URL(location.href).searchParams.get("post")))
containerNode.appendChild(createNode("h4", ["border-box", "margin1vw"], `<b><i>Title</i></b> : ${post["title"]}`))
let containerID = createNode("div", ["border-box", "margin1vw", "flex"],)
containerNode.appendChild(containerID)
containerID.appendChild(createNode("div", ["border-box", "margin1vw", "item"], `<b><i>Post ID</i></b> : ${post["id"]}`))
containerID.appendChild(createNode("div", ["border-box", "margin1vw", "item"], `<b><i>User ID</i></b> : ${post["userId"]}`))
containerNode.appendChild(createNode("div", ["border-box", "margin1vw"], `<b><i>Post</i></b> : ${post["body"]}`))
let commentsContainer = createNode("div", ["border-box", "margin1vw", "container"], "")
document.body.appendChild(createNode("h2", null, "Comments"))
fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        data.map((comment) => {
            let commentBlock = createNode("div", ["comment", "border-box", "margin1vw"])
            commentBlock.appendChild(createNode("h4", ["border-box", "margin1vw"], comment.name))
            commentBlock.appendChild(createNode("div", ["border-box", "margin1vw"], comment.body))
            let commentFooter = createNode("div", ["border-box", "margin1vw", "flex", "footer"], null)
            commentFooter.appendChild(createNode("div", ["border-box", "margin1vw"], `commentID: ${comment.id}`))
            commentFooter.appendChild(createNode("div", ["border-box", "margin1vw"], `commentID: ${comment.email}`))
            commentBlock.appendChild(commentFooter)
            commentsContainer.appendChild(commentBlock)

        })
        document.body.appendChild(commentsContainer)

    })
    .catch(function (error) {
        console.error(`Download error: ${error.message}`, error)
    })