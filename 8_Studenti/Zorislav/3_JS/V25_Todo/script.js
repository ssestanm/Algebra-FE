(
  function(){

    function Todo() {

      var addButton = document.querySelector("#input-add");
      var input = document.querySelector("#input-text");
      var list = document.querySelector("ul");

      function addListItem(){

        var text = input.value;

        if(text.trim().length !==0){
          
          var newItem = createListItem(text);
          list.appendChild(newItem);
          input.value = "";
          console.log(text);
        }else{
          alert("Please enter todo!");
        }

      }

      function createListItem(text){

        var listItem = document.createElement("li");
        var div = document.createElement("div");
        var intDiv = document.createElement("div");
        intDiv.classList.add("li-container-int");
        div.classList.add("li-container");
        intDiv.innerText = text;
        addCheckBox(intDiv);
        div.appendChild(intDiv);
        addRemoveButton(div);
        listItem.appendChild(div);

        return listItem;
      }
      
      function addCheckBox(item){
        var checkBox = document.createElement("input");
        checkBox.setAttribute("type","checkbox");
        item.insertBefore(checkBox,item.firstChild);
      }

      function addRemoveButton(item){
        var removeButton = document.createElement("div");
        removeButton.innerText = "X";
        removeButton.className = "removeButton";
        item.appendChild(removeButton);
      }

      this.addListeners = function(){
        addButton.addEventListener("click",addListItem);
      }

    }

  var todo = new Todo();
  Todo.prototype.init = function() {
    this.addListeners();
  }
  
  window.addEventListener("load", todo.init());

  //document.addEventListener("DOMContentLoaded", ...);

})();