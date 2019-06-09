// Definition

class Todo extends HTMLElement {
  set todo(todo) {
    this.innerHTML = `<a class="collection-item">${todo.id}. ${
      todo.title
    } <span class="badge">${todo.completed.toString().toUpperCase()}</span></a>`
  }
}

// Register to Browser

customElements.define("todo-element", Todo)
