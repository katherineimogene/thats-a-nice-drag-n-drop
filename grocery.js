window.onload = function(){
  controller = new GroceryApp.Controller()
  view = new GroceryApp.View('.item','#grocery_list','#total_cost')
  binder = new GroceryApp.Binder(view.storeList,view.groceryList)
  controller.registerView(view)
  controller.registerBinder(binder)
}