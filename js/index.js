var listElement = document.querySelector('#app ul')
var inputelement = document.querySelector('#app input')
var buttonElement = document.querySelector('#app buton')

/*Todos padrão */
var todos = JSON.parse(localStorage.getItem('list_todos')) || []
// || []  -> caso esteja vazio, retornara uma array vazia

/*Percorrer a array todos e exibilos em tela */
renderTodos()

function renderTodos() {
    listElement.innerHTML = ''

    for (todo of todos) {
        let todoElement = document.createElement('li')
        let todoText = document.createTextNode(todo)
        let linkElement = document.createElement('button')
        let linkText = document.createTextNode('Excluir')

        linkElement.setAttribute('href', '#')

        //setando a posicao para poder usar para identificar o todo na hora da deleção
        var pos = todos.indexOf(todo)
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')')

        linkElement.appendChild(linkText)
        todoElement.appendChild(todoText)
        listElement.appendChild(todoElement)
        listElement.appendChild(linkElement)
    }
}

/*Recuperar value do input e add */
function addTodo() {
    let todoText = inputelement.value

    if (todoText == '' || todoText.length == 0 || todoText == null) {
        alert('[ERROR] Adicione algo')
    } else {
        //Add o value na array 
        todos.push(todoText)
        inputelement.value = ''

        renderTodos()
        saveToStorage()
    }


}

/*Pegar o index do todo selecionado e excluir, removendo-o da array */
function deleteTodo(pos) {
    //apartir da posição passada por parâmetro, remova o primeiro item
    todos.splice(pos, 1)
    renderTodos()
    saveToStorage()
}

/*Função para add com a tecla ENTER */
addEnter()

function addEnter() {
    let input = document.getElementById('entrada')

    input.addEventListener('keydown', function (event) {
        if (event.keyCode === 13) {
            addTodo()
        }
    })
}
/*Add dados no LocalStorage */
function saveToStorage() {
    //Convertendo vetor em JSON, pois o localStorage não suporta array, apenas String
    localStorage.setItem('list_todos', JSON.stringify(todos))
}