// import './todo-element.js';

class NavBar extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: "open" })

    let fetchTodos = async () => {
      let json = await fetch("https://jsonplaceholder.typicode.com/todos")
      let todoList = await json.json()

      todoList.map(todo => {
        let a = document.createElement("a")
        a.setAttribute("class", "collection-item")

        a.innerHTML = `<div>${todo.id}. ${
          todo.title.toUpperCase()
        } - <span class="badge">${todo.completed
          .toString()
          .toUpperCase()}</span></div>`

        a.className = "collection-item"
        this.shadowRoot.appendChild(a)
      })
    }

    fetchTodos()

    const template = document.querySelector("template")
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    console.log(this.getAttribute("theme"))

  }

  static get observedAttributes(){
    return["theme"]
  }

  attributeChangedCallback(name, oldValue, newValue){

    console.table({name, oldValue, newValue})

  }


  connectedCallback() {
    console.log("Connect To The DOM")
  }
  disconnectedCallback() {
    console.log("Connect To The DOM")
  }
}

window.customElements.define("nav-bar", NavBar)

// class Todo extends HTMLElement {
//   constructor(){
//     super()
//     this.attachShadow({mode: "open"})

//     this.shadowRoot.innerHTML = `<h2>Hellooo! I'm a Web Component...</h2>`

//     const main = document.querySelector("main")

//     // this.shadowRoot.appendChild()
//     // this.shadowRoot.appendChild(main)

//   }
//   connectedCallBack(){
//     console.log("Connect To The DOM")
//   }
// }

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
