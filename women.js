document.addEventListener('DOMContentLoaded', function () {
    const filterInputs = document.querySelectorAll('.filters input[type="checkbox"]');
    const products = document.querySelectorAll('.product');
    const categories = document.querySelectorAll('.category');

    products.forEach(product => {
        product.style.display = 'inline-block';
    });

  
    categories.forEach(category => {
        category.addEventListener('click', function () {
            const selectedCategory = this.getAttribute('data-type');

            products.forEach(product => {
                const productType = product.getAttribute('data-type');
                if (productType === selectedCategory) {
                    product.style.display = 'inline-block';
                } else {
                    product.style.display = 'none'; 
                }
            });

           
            filterInputs.forEach(input => {
                input.checked = false;
            });
        });
    });

    filterInputs.forEach(input => {
        input.addEventListener('change', function () {
            const selectedTypes = Array.from(filterInputs)
                .filter(i => i.checked)
                .map(i => i.parentElement.textContent.trim());

            products.forEach(product => {
                const productType = product.getAttribute('data-type');
                const productPrice = product.getAttribute('data-price');
                const productBrand = product.getAttribute('data-brand');
                const productSize = product.getAttribute('data-size');
                const productMovement = product.getAttribute('data-movement');

                const matchesFilters = selectedTypes.length === 0 ||
                    selectedTypes.includes(productType) ||
                    selectedTypes.includes(productPrice) ||
                    selectedTypes.includes(productBrand) ||
                    selectedTypes.includes(productSize) ||
                    selectedTypes.includes(productMovement);

                if (matchesFilters) {
                    product.style.display = 'inline-block'; 
                } else {
                    product.style.display = 'none';
                }
            });
        });
    });
});

//
document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItems = document.querySelector('.cart-items');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const product = this.closest('.product');
            const productName = product.querySelector('p').innerText;
            const productPrice = product.querySelectorAll('p')[1].innerText;
            const productImage = product.querySelector('img').src;

     
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <img src="${productImage}" alt="${productName}">
                <p>${productName}</p>
                <p>${productPrice}</p>
            `;

           
            cartItems.appendChild(cartItem);
        });
    });
});
function addToCart(product) {
    const button = event.target;
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

  
    cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image_url || product.url 
    });

  
    button.innerHTML = 'Added to Cart';
    button.style.backgroundColor = '#964b00';
    button.style.color = 'white';

    console.log('Product added to cart:', product);


    localStorage.setItem('cart', JSON.stringify(cart));
}
//
function toggleWishList(element, name, price ,image_url) {
 
    element.classList.toggle('active'); 

    const wishList = JSON.parse(localStorage.getItem('wishList')) || [];
    
    if (element.classList.contains('active')) {
        wishList.push({ name, price ,image_url});
        localStorage.setItem('wishList', JSON.stringify(wishList));
        alert('The product has been added to your wishlist!');
    } else {
      
        for (let i = 0; i < wishList.length; i++) {
            if (wishList[i].name === name) {
                wishList.splice(i, 1);
                localStorage.setItem('wishList', JSON.stringify(wishList));
                alert('The product has been removed from the wishlist!');
                break;
            }
        }
    }
}
///
