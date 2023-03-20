let carts = document.querySelectorAll('.add-cart');

let= products = [
	{
		name : 'Lokman',
		tag:'Lokman',
		price: 19,
		inCart:0
	},
	{
		name : 'sarwati',
		tag:'sarwati',
		price: 25,
		inCart:0
	},
	{
		name : 'sujata',
		tag:'sujata',
		price: 23,
		inCart:0
	},
	{
		name : 'Black wheat',
		tag:'Blackwheat',
		price: 30,
		inCart:0
	},
	{
		name : 'Red wheat',
		tag:'Redwheat',
		price: 22,
		inCart:0
	},
	{
		name : '318',
		tag:'318',
		price: 23,
		inCart:0
	},
	{
		name : 'Pusa',
		tag:'Pusa',
		price: 18,
		inCart:0
	},
	{
		name : 'tejas',
		tag:'tejas',
		price: 31,
		inCart:0
	},
	

]

for (let i=0; i < carts.length; i++){
	carts[i].addEventListener('click', () => {
       cartNumbers(products[i]);
	   totalCost(products[i])
	})
}

function onLoadcartNumbers(){
	let productNumbers = localStorage.getItem('cartNumbers');

	if(productNumbers){
		document.querySelector('.cart span').textContent = productNumbers;
	}
}

function cartNumbers(product) {
	
	let productNumbers = localStorage.getItem('cartNumbers');
	
	

	productNumbers= parseInt(productNumbers);

	console.log(productNumbers)

	if(productNumbers) {
		localStorage.setItem('cartNumbers', productNumbers + 1);
		document.querySelector('.cart span').textContent = productNumbers + 1;
	} else{
		localStorage.setItem('cartNumbers', 1);
		document.querySelector('.cart span').textContent = 1;
	}
	setItems(product);
}
	function setItems(product){
		let cartItems = localStorage.getItem('productsInCart');
		cartItems =  JSON.parse(cartItems);
		

		if(cartItems !=null) {
		  
			if(cartItems[product.tag] == undefined){
              cartItems = {
				...cartItems,
				[product.tag]: product
			  }
			}
          cartItems[product.tag].inCart += 1;
		} else {
			product.inCart= 1;
			cartItems= {
			[product.tag]:product
		    }
		
		}
		
		localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

  function totalCost(product){
let cartCost = localStorage.getItem('totalCost');

console.log("my cartCost is", cartCost);
console.log(typeof cartCost);

if(cartCost !=null){
	cartCost = parseInt(cartCost);
      localStorage.setItem("totalCost",cartCost + product.price);
}else {
	localStorage.setItem("totalCost",product.price);
}


}

function displayCart(){
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  let productcontainer = document.querySelector(".products");
  let cartCost = localStorage.getItem('totalCost');

  console.log(cartItems);
  if(cartItems && productcontainer){
	productcontainer.innerHTML = '';
	Object.values(cartItems).map(item =>{
     productcontainer.innerHTML += `
	 <div class="product">
	 <ion-icon name="close-circle-outline"></ion-icon>
	  <img src=".//wheat/${item.tag}.png">
	  <span>${item.name}</span>
	  </div>
	  <div class="price">
	   INR ${item.price}
	  </div>
	  <div class="quantity">
	  <ion-icon name="caret-back-outline"></ion-icon>
	   <span>${item.inCart}</span>
	   <ion-icon name="caret-forward-outline"></ion-icon> 
	  </div>
	  <div class="total">
	    INR ${item.inCart * item.price},00
	  </div>
	 `;


	});

	productcontainer.innerHTML +=`
	  <div class="basketTotalContainer">
	   <h4 class="basketTotalTitle">
	     Basket total
		 </h4>
		 <h4 class="basketTotal">
           INR ${cartCost},00
		 </h4>
	`
  }
}

onLoadcartNumbers();
displayCart();