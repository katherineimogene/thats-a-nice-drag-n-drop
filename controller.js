GroceryApp.Controller = function(){
  var controller = this
  this.groceryList = new GroceryApp.GroceryList
}

GroceryApp.Controller.prototype = {
  registerView: function(myView) {
    this.view = myView
  },

  registerBinder: function(myBinder) {
    this.binder = myBinder
    this.binder.bindDrag()
    this.binder.bindDrop()
  },

  getItemName: function(tableItem){
    return tableItem.children[0].innerText
  },

  getItemPrice: function(tableItem){
    return parseFloat(tableItem.children[1].innerText)
  },

  addToList: function(item){
    this.groceryList.itemList.push(item)
  },

  newItem: function(listItem){
    var itemName = this.getItemName(listItem)
    var itemPrice = this.getItemPrice(listItem)
    var groceryItem = new GroceryApp.Item(itemName,itemPrice)
    return groceryItem
  },

  updateGroceryList: function(listItem){
    var groceryItem = this.newItem(listItem)
    this.addToList(groceryItem)
    var newTotal = this.groceryList.getTotal()
    this.view.updateTotal(newTotal)
  }

}