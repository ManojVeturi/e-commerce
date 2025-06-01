const main = document.getElementById('card');

fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        showProducts(data);
    });

function showProducts(data) {
    main.innerHTML = '';
    data.forEach(product => {
        const { image, title, price, rating } = product;
        const productEl = document.createElement('div');
        productEl.classList.add('product');
        productEl.innerHTML = `
            <div class="image">
                <img src="${image}" alt="${title}">
            </div>
            <div class="info">
                <h3>${title}</h3>
                <h4>$${price}</h4>
                <span class="rating">Rating: ${rating.rate} (${rating.count})</span>
                <button class="wishlist" onclick="addToWishlist('${title}', ${price}, '${image}')">Add to Wishlist</button>
            </div>
        `;
        main.appendChild(productEl);
    });
}

function addToWishlist(name, price, image) {
    alert(`Added to Wishlist: ${name} - $${price}`);
}
