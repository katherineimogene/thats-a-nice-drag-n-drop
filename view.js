GroceryApp.View = function(storeList,groceryList,totalDiv){
  this.storeList = $(storeList)
  this.groceryList = $(groceryList)
  this.totalDiv = $(totalDiv)
}

GroceryApp.View.prototype = {
  appendDroppedItem: function(item){
    this.groceryList.append($(item))
  },

  updateTotal: function(newTotal){
    this.totalDiv[0].innerText = newTotal
  }
}