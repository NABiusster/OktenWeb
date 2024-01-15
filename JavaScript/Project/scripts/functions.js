export function createNode(tag, classes, innerHTML) {
    try {
        if (tag) {
            let node = document.createElement(tag)
            if (classes) {
                node.classList.add(...classes)
            }
            if (innerHTML) {
                node.innerHTML = innerHTML
            }
            return node
        }
    } catch (e) {
        console.log(e)
    }
}