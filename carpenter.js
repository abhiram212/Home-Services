
var addToCartButtons = document.querySelectorAll('.add-to-cart');
let b = [];

 var cartItemsList = document.querySelector('.cart-items');
 var cartItemsListLeft = document.querySelector('.cart-left');
let total=0;
addToCartButtons.forEach(function(button) {
  button.addEventListener('click', function(event) {
    var product = event.target.parentNode.parentNode.parentNode;
    var productName = product.querySelector('h6').textContent;
    var productPrice = product.querySelector('p').textContent;
    
    let sum=0;
    for(let i = 1;i<productPrice.length;i++) 
    {
        
        sum=(sum*10)+(productPrice.charAt(i)-'0');
        
    }
    if(button.textContent==="Add") 
    {
      total+=sum;
      button.innerHTML="Remove"
    }
    else 
    {
      total-=sum
      button.innerHTML="Add"
    }
    
    document.getElementById("amount").innerHTML="₹"+total;
    var cartItem = document.createElement('li');
    if(!b.includes(productName + ' -  ' + productPrice + ' x '+ 1))cartItem.textContent = productName + ' -  ' + productPrice ;

    if(!b.includes(cartItem)) 
    {
        // cartItemsListLeft.appendChild(cartItem)
        b.push(cartItem.innerHTML);
    }
    else
    {
      cartItemsListLeft.remove(cartItem)
      b.remove(cartItem)
    }
  });
});

console.log(document.getElementsByClassName("butn"));
function fun()
{
    document.getElementById("remove").remove("button");

}