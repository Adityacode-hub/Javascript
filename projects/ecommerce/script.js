//page loads then it is a event listener
document.addEventListener("DOMContentLoaded",()=>{
    const checkoutbutton=document.getElementById("checkout-btn");
    const productlist=document.getElementById("product-list");
    const cartitems=document.getElementById("cart-items");
    const emptycart=document.getElementById("empty-cart");
    const totalprice=document.getElementById("total-price");
    const totalcartitems=document.getElementById("cart-total");

    //this is the product section
    
    const products=[];
    const newproducts=
        [
            {
        id:Date.now()+Math.random(),
        name:"Product 1",
        price:29.99
            },
            {
        id:Date.now()+Math.random(),
        name:"Product 2",
        price:29.9
            },
            {
        id:Date.now()+Math.random(),
        name:"Product 3",
        price:29.99
            }
        ]
        products.push(...newproducts);//pushing into the array




       const cart=[]; //empty cart
       products.forEach(product => {
        const productdiv=document.createElement('div');//creating a div 
        productdiv.classList.add('product');// in the class adding css 
        //we do not want to add the things manually
        productdiv.innerHTML=`
        <span>${product.name} -$${product.price.toFixed(2)}</span>
       <button data-id="${product.id}">Add to Cart</button>

        `;
        productlist.appendChild(productdiv);
       });
       productlist.addEventListener('click',(e)=>{
        //    console.log(e.target.tagName);when we want to target the specific button then it is used
    if(e.target.tagName=="BUTTON")
    {
        // console.log("clicked");
        //when the button is clicked it will get data id in the integer as product id 
        const prodcutId=Number(e.target.getAttribute("data-id"));
        const product = products.find(p => p.id === prodcutId);
//   console.log(product);
        addtocart(product);
    }
       });
       function addtocart(product)
       {
        cart.push(product);
        rendercart(cart);
        
       }

       function rendercart()
       {
        cartitems.innerHTML="";
        let total=0;
        if(cart.length>0)
        {
             emptycart.classList.add('hidden');
              totalcartitems.classList.remove('hidden');
              cart.forEach((item,index)=>{
    total+=item.price
    const cartItem=document.createElement('div')
    cartItem.innerHTML=`
    ${item.name}-$${item.price}
    
    `
    cartitems.appendChild(cartItem);
    totalprice.textContent=`${total}`
              })
        }
        else
        {
            emptycart.classList.remove('hidden');
           totalprice.textContent=`0`
        }
       }
    
       checkoutbutton.addEventListener('click',()=>{
        cart.length=0
        alert("checkout successfully");
        rendercart();
       })
});