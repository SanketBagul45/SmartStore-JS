let products = JSON.parse(localStorage.getItem("products")) || [];
let cart = JSON.parse(localStorage.getItem("cart")) || [];
function addProduct(){
let product={
image:document.getElementById("url").value,
name:document.getElementById("name").value,
desc:document.getElementById("desc").value,
price:document.getElementById("price").value
};
products.push(product);
localStorage.setItem("products",
JSON.stringify(products));
showProducts();
}
function showProducts(){
let box=document.getElementById("products");
if(!box) return;
box.innerHTML="";
products.forEach((p,index)=>{
box.innerHTML += `
<div class="card">
<img src="${p.image}">
<h3>${p.name}</h3>
<p>${p.desc}</p>
<h4>${p.price}</h4>
<button onclick="viewMore(${index})">
View More
</button>
<button onclick="addCart(${index})">
Add To Cart
</button>

</div>
`;
});
}

function addCart(index){
cart.push(products[index]);
localStorage.setItem(
"cart",
JSON.stringify(cart)
);
alert("Product Added To Cart");

}
function showCart(){
let box=document.getElementById("cart");
if(!box) return;
box.innerHTML="";
cart.forEach((p,index)=>{
box.innerHTML +=`
<div class="card">
<img src="${p.image}">
<h3>${p.name}</h3>
<p>${p.desc}</p>
<h4>${p.price}</h4>
<button onclick="removeCart(${index})">
Remove
</button>
<button onclick="buyNow()">
Buy Now
</button>
</div>
`;
});
}
function removeCart(index){
cart.splice(index,1);
localStorage.setItem(
"cart",
JSON.stringify(cart)
);
showCart();
}
function buyNow(){
alert("Order Placed Successfully");
}
showProducts();
showCart();
function viewMore(index){
let p = products[index];
let modal = document.getElementById("productModal");
if(!modal){
modal = document.createElement("div");
modal.id = "productModal";
modal.className = "modal-overlay";
document.body.appendChild(modal);
}
modal.innerHTML = `
<div class="modal-box">
<span class="modal-close" onclick="closeModal()">&times;</span>
<img src="${p.image}">
<h3>${p.name}</h3>
<p>${p.desc}</p>
<h4>${p.price}</h4>
</div>
`;
modal.style.display = "flex";
}

function closeModal(){
let modal = document.getElementById("productModal");
if(modal) modal.style.display = "none";
}