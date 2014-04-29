GroceryApp.Item = function(name, price){
  this.name = name
  this.price = price
}

GroceryApp.GroceryList = function(){
  this.itemList = []
}

GroceryApp.GroceryList.prototype = {
  getTotal: function(){
    var total = 0
    for(i=0; i<this.itemList.length; i++){
      total += this.itemList[i].price
    }
    total = total.toFixed(2)
    return total
  }
}