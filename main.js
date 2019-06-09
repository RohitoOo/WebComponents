// import './todo-element.js';

class NavBar extends HTMLElement {
  constructor(){
    super()
    this.attachShadow({mode: "open"})

    this.shadowRoot.innerHTML = `<h2>Hellooo! I'm a Web Component...</h2>`

    const main = document.querySelector("main")

    // this.shadowRoot.appendChild()
    // this.shadowRoot.appendChild(main) 

  
  }
  connectedCallBack(){
    console.log("Connect To The DOM")
  }
}

window.customElements.define('nav-bar', NavBar)



// window.addEventListener("load", () => {
//     fetchTodo()
//   })

//   async function fetchTodo() {
//     let json = await fetch("https://jsonplaceholder.typicode.com/todos")
//     let todoList = await json.json()


//     todoList.map(todo => {
//       let el = document.createElement("todo-element")

//       console.log(el)

//     //   el.todo = `<a class="collection-item">${todo.id}. ${
//     //     todo.title
//     //   } <span class="badge">${todo.completed
//     //     .toString()
//     //     .toUpperCase()}</span></a>`
//       main.appendChild(el)
//     })
//   }


