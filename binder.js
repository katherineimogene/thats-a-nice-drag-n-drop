GroceryApp.Binder = function(dragClass,dropDiv){
  this.dragClass = dragClass
  this.dropDiv = dropDiv
}

GroceryApp.Binder.prototype = {
  bindDrag: function(){
    this.dragClass.draggable({opacity: 0.7, helper: 'clone'})
  },

  bindDrop: function(){
    this.dropDiv.droppable({
      drop: function(event, ui){
        var listItem = ui.draggable[0].cloneNode(true)
        controller.view.appendDroppedItem(listItem)
        controller.updateGroceryList(listItem)
      }
    })
  }
}