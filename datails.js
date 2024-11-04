const urlParams = new URLSearchParams(window.location.search);
const productName = urlParams.get('name');
const productPrice = urlParams.get('price');
const productImage = urlParams.get('image_url');
const productMaterial = urlParams.get('material');
const productMovement = urlParams.get('movement'); 
const productType = urlParams.get('type'); 
const productDescription = urlParams.get('description');

document.getElementById('product-name').innerText = productName;
document.getElementById('product-price').innerText = 'Price: ' + productPrice + ' EGP';
document.getElementById('product-image').src = productImage;
document.getElementById('product-material').innerText = 'Material: ' + productMaterial;
document.getElementById('product-movement').innerText = 'Movement: ' + productMovement; 
document.getElementById('product-type').innerText = 'Type: ' + productType; 
document.getElementById('product-description').innerText = 'Description: ' + productDescription;


function addToCart() {
    const cartItem = {
        name: productName,
        price: productPrice,
        image: productImage
    };

   let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
   cart.push(cartItem);
    
 localStorage.setItem('cart', JSON.stringify(cart));
    
toastr.success(`${productName} added to cart!`, 'Success', {
        timeOut: 3000 
    });
}

