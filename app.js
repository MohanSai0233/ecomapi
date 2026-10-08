async function fetchproducts(){
  let res= await fetch("https://desistore.stackrel.com/products")
  let products=await res.json()
  let box=document.getElementById('box').innerHTML=products.map((p)=>`<div>
 <img height=${250}   width=${250} src=${p.image} alt="">
 <p>${p.title}</p>
<p>${p.price}</p>
</div>`).join('')
}
fetchproducts();
