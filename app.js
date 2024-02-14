fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const productList = document.getElementById('product-list');

        data.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('card', 'mb-3');

            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body');

            const productName = document.createElement('h5');
            productName.classList.add('card-title');
            productName.textContent = product.name;

            const productDescription = document.createElement('p');
            productDescription.classList.add('card-text');
            productDescription.textContent = product.description;

            const productPrice = document.createElement('p');
            productPrice.classList.add('card-text');
            productPrice.textContent = `Price: ₱${product.price}`;

            const productImage = document.createElement('img');
            productImage.classList.add('card-img-top');
            productImage.setAttribute('src', product.image);
            productImage.setAttribute('alt', product.name);

            cardBody.appendChild(productName);
            cardBody.appendChild(productDescription);
            cardBody.appendChild(productPrice);

            productCard.appendChild(productImage);
            productCard.appendChild(cardBody);

            productList.appendChild(productCard);
        });
    })
    .catch(error => {
        console.error('Error fetching products:', error);
    });
