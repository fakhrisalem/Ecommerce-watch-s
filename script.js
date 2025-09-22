document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navLinks = document.getElementById('nav-links');

    if (hamburgerMenu) {
        hamburgerMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    const updateNav = () => {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser) {
            if (navLinks) {
                if (currentUser.is_admin) {
                    navLinks.innerHTML = `
                        <li><a href="dashboard_admin.html">Dashboard</a></li>
                        <li><a href="add_book.html">Add Book</a></li>
                        <li><a href="#" id="logout-link">Logout</a></li>
                    `;
                } else {
                    navLinks.innerHTML = `
                        <li><a href="dashboard_user.html">Dashboard</a></li>
                        <li><a href="my_borrowed.html">My Borrowed</a></li>
                        <li><a href="#" id="logout-link">Logout</a></li>
                    `;
                }
            }
        } else {
            if (navLinks) {
                navLinks.innerHTML = `
                  
                `;
            }
        }
    };
    updateNav();

    document.addEventListener('click', (e) => {
        if (e.target && e.target.id === 'logout-link') {
            localStorage.removeItem('currentUser');
            alert('Logged out successfully.');
            window.location.href = 'index.html';
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const carousel = new bootstrap.Carousel(document.getElementById('heroCarousel'), {
        interval: 4000, 
        pause: "hover"  
    });

  
    document.querySelector('.carousel-control-prev').addEventListener('click', function () {
        carousel.prev();
    });

    document.querySelector('.carousel-control-next').addEventListener('click', function () {
        carousel.next();
    });
});
//

document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper('.events-slider', {
        speed: 600,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        slidesPerView: 1, // Show one slide at a time
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        on: {
            slideChangeTransitionStart: function () {
                const slides = document.querySelectorAll('.swiper-slide');
                slides.forEach(slide => {
                    slide.classList.remove('fade-in');
                    slide.classList.add('fade-out');
                });
            },
            slideChangeTransitionEnd: function () {
                const activeSlide = this.slides[this.activeIndex];
                activeSlide.classList.remove('fade-out');
                activeSlide.classList.add('fade-in');
            }
        }
    });

   
    const firstSlide = swiper.slides[swiper.activeIndex];
    firstSlide.classList.add('fade-in');
});
// login
function showLogin() {
    document.getElementById('loginContainer').style.display = 'block'; 
}

function handleLogin(event) {
    event.preventDefault();
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('successMessage').style.display = 'block';
    setTimeout(() => {
        document.getElementById('loginContainer').style.display = 'none';
        window.location.href = 'home.html';
    }, 2000);
}

///next
let slides3 = document.querySelector('.slides3');
let slide4 = document.querySelectorAll('.slide4');

let index = 0;

function nextSlide() {
  index++;
  if (index + 5 > slide4.length) {
    index = 0;
    slides3.style.transition = 'none';
    setTimeout(() => {
      slides3.style.transition = 'transform 0.5s ease';
    });
  }
  updateSlidePosition();
}

function updateSlidePosition() {
  let slideWidth = slide4[index].clientWidth;
  slides3.style.transform = `translateX(${-slideWidth * index}px)`;
}

setInterval(nextSlide, 3000);
//

const productImage = document.getElementById('productImage1');
let position = 0;
let direction = 1;

function moveImage() {
  const imageWidth = productImage.clientWidth;
  const containerWidth = productImage.parentElement.clientWidth;

  if (position <= -imageWidth + containerWidth) {
    direction = 1;
  } else if (position >= 0) {
    direction = -1;
  }

  position += 1 * direction;
  productImage.style.transform = `translateX(${position}px)`;
}

function returnImage() {
  productImage.style.transform = 'translateX(0)';
  position = 0;
}

setInterval(moveImage, 10); 
setInterval(returnImage, 4000); 
//

//new arriv
let currentIndex = 0;
const totalImages = 8; 
const images = [
    {
        src: "https://citizenwatch.widen.net/content/qbbzx4c509/png/Rolan.png?u=41zuoe&width=500&height=625&quality=80&crop=false&keep=c&color=FFFFFF00",
        name: "PCAT from Citizen",
        price: "$521.25"
        
    },
    {
        src: "https://timex.com/cdn/shop/files/TW2W63900.png?v=1727800403&width=640",
        name: "Leather Strap Watch",
        price: "$109.00"
    },
    {
        src: "https://guesswatches.com/cdn/shop/files/GW0769L4_Q.png?v=1728917694&width=640",
        name: "GUESS Ladies Watch",
        price: "$140.00"
    },
    {
        src: "https://fossil.scene7.com/is/image/FossilPartners/FS6042_main?$sfcc_fos_large$",
        name: "Sport Tourer Chronograph Brown Leather Watch",
        price: "$195.00"
    },
    {
        src: "https://us.danielwellington.com/cdn/shop/files/DW00100752_Quadro_Mini_Crystal_Zodiac_Evergold_angle_1.png?v=1728563020",
        name: "Quadro Mini Crystal Zodiac",
        price: "$209"
    },
    {
      src: "https://justcavalliwatches.com/wp-content/uploads/2024/09/JC1L322M0045.webp",
      name: "Unica Snake Rose Gold Blu",
      price: "$229"
  },
  {
    src: "https://www.aldaham.com/image/cache/wp/gp/0177/%D8%B31%D8%B31/WKKHR1756G01-1000x1000.webp",
    name: "Daniel Klein Premium Women",
    price: "$129"
},
    {
        src: "https://michaelkors.scene7.com/is/image/MichaelKors/MK4844-0201_1?$large$",
        name: "Petite Lexington Pavé Espresso-Tone Watch",
        price: "EGP 20,600"
    }
];

function updateImages() {
    const imagesContainer = document.querySelector('.images');
    imagesContainer.innerHTML = `
        <div class="image-container">
            <img src="${images[currentIndex].src}" alt="${images[currentIndex].name}">
            <div class="product-name">${images[currentIndex].name}</div>
            <div class="product-price">${images[currentIndex].price}</div>
            <button class="add-to-bag">Add to Bag</button>
        </div>
        <div class="image-container">
            <img src="${images[(currentIndex + 1) % totalImages].src}" alt="${images[(currentIndex + 1) % totalImages].name}">
            <div class="product-name">${images[(currentIndex + 1) % totalImages].name}</div>
            <div class="product-price">${images[(currentIndex + 1) % totalImages].price}</div>
            <button class="add-to-bag">Add to Bag</button>
        </div>
        <div class="image-container">
            <img src="${images[(currentIndex + 2) % totalImages].src}" alt="${images[(currentIndex + 2) % totalImages].name}">
            <div class="product-name">${images[(currentIndex + 2) % totalImages].name}</div>
            <div class="product-price">${images[(currentIndex + 2) % totalImages].price}</div>
            <button class="add-to-bag">Add to Bag</button>
        </div>
    `;
}

function moveSlide(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = totalImages - 1; 
    } else if (currentIndex >= totalImages) {
        currentIndex = 0; 
    }
    updateImages();
}

window.onload = updateImages;
//
function addToCart(product) {
    const button = event.target;
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image_url || product.url 
    });

  
    button.innerHTML = 'Added to Bag';
    button.style.backgroundColor = ' #f8c796';
    button.style.color = 'white ';

    console.log('Product added to cart:', product);

    localStorage.setItem('cart', JSON.stringify(cart));
}
