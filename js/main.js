let form = document.getElementById("form")
let input = document.getElementById("input")
let msg = document.getElementById("msg")
let posts = document.getElementById("posts")

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    console.log("button clicked")
    formValidation()
})

let formValidation = ()=>{
    if(input.value === ""){
        msg.innerHTML = "Post cannot be blank"
        console.log("Failure")
    }
    else{
        console.log("Success")
        msg.innerHTML = ""
        acceptData()
    }
}

let data = {}
let acceptData = ()=>{
    data["text"] = input.value
    console.log(data)
    createPost()
}

let createPost = ()=>{
    posts.innerHTML += `
    <div>
    <p>${data.text}</p>
    <span class="options">
        <i onclick="editPost(this)" class="fa-solid fa-pen-to-square"></i>
        <i onclick="deletePost(this)" class="fa-solid fa-trash-can"></i>
    </span>
    </div>
    `
    input.value = ""
}

let deletePost = (e)=>{
    e.parentElement.parentElement.remove()
}

let editPost = ()=>{
    input.innerHTML = e.parentElement.previousElementSibling.innerHTML
    e.parentElement.parentElement.remove()
}