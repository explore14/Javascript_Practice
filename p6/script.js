let productRow=document.getElementById("product-row");
let user=document.getElementById("user-cart");
products.forEach(product=>{
 productRow.innerHTML+=`
 <div class="col-12 col-md-6 col-lg-4">
 <div class="card"">
                        <img src=${product.imgSrc} class="card-img-top" alt="...">
                        <div class="card-body">
                          <h5 class="card-title">${product.name}</h5>
                          <h6 class="display-6 fw-bold">$${product.price}</h6>
                          <p class="card-text">${product.description}</p>
                          <p class="card-text fw-bold text-danger">Stock -${product.instock}</p>
                          <button class="btn btn-primary" onclick="addToCart(${product.id})">Add to cart</button>
                        </div>
                      </div>
                      </div>
                      `

})
function addToCart(id){
    let product=products.find(product=>product.id==id);
    let cartItem=cart.find(item=>item.id==id);
    if(cartItem){
        cartItem.quantity+=1;
    }  
    }

    