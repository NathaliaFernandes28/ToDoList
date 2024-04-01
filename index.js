function addElement() {
  /*criamos a função de acordo com o evento click que colocamos no button no código HTML*/
  const input =
    document.getElementById(
      "newInput"
    ).value; /*Aqui vamos pegar o valor do input que também colocamos no html*/
  if (input === "") {
    /*Aqui vamos usar a condição IF para informar que se o campo Input estiver vazio, irá aparecer um alert com a mensagem para inserir uma tarefa.*/
    alert("Insira uma tarefa!");
    return; /*Aqui vai retornar a função que criamos*/
  }

  const list =
    document.getElementById(
      "listaTarefas"
    ); /*Aqui vamos pegar o ID da lista que criamos para colocar os afazeres.*/
  const newTask =
    document.createElement("li"); /*Aqui vamos criar uma li dentro do ul.*/

  const textTask =
    document.createTextNode(
      input
    ); /*Aqui criamos um nó(input) dentro do li, ou seja, criamos um input dentro do li.*/
  newTask.onclick = function () {
    /*Aqui vamos criar a classe completed para mudarmos depois no css o estilo da tarefa que já foi concluida.*/
    this.classList.toggle("completed");
  };
  document.getElementById("newInput").value =
    ""; /*Vamos zerar o input de colocar as tarefas depois de colocarmos as tarefas.*/

  const deleteButton =
    document.createElement("button"); /*Aqui vamos criar um botão de delete.*/
  deleteButton.classList.add("delete-btn");

  deleteButton.textContent =
    "Excluir"; /*\aqui vamos criar um texto para colocar dentro do botão que vai deletar o nosso elemento da lista.*/
  deleteButton.onclick = function () {
    /*Aqui vamos criar um evento de clique dentro do botão de deletar o elemento li dentro do ul.*/
    this.parentNode.remove(); /*Aqui vamos usar o this junto com o parentNode que vai referenciar o nó que criamos(createTextNode), o input e depois vamos colocar o metodo remover() para remover o elemento do documento html. - "this.parentNode.remove()" - remove o elemento pai do botão DOM.*/
  };

  /*Aqui vamos adicionar todos os elementos criados dentro do elemento principal que é a lista(ul)*/

  list.appendChild(newTask); /*Vamos adicionar o li dentro do ul.*/
  newTask.appendChild(
    textTask
  ); /*Vamos adicionar o nó do input criado dentro do li*/
  newTask.appendChild(
    deleteButton
  ); /*Aqui vamos adicionar o delete button dentro de li*/
}
