document.addEventListener('DOMContentLoaded', function () {
    // Lista de productos con imágenes, nombres y precios
    const products = [
        { id: 1, name: "Televisor 4K", image: "producto1.jpg", price: "$500", category: "electronics" },
        { id: 2, name: "Camisa Casual", image: "producto2.jpg", price: "$20", category: "clothing" },
        { id: 3, name: "Cafetera Eléctrica", image: "producto3.jpg", price: "$40", category: "home" },
        { id: 4, name: "Perfume de Lujo", image: "producto1.jpg", price: "$60", category: "beauty" },
        { id: 5, name: "Laptop Gaming", image: "producto2.jpg", price: "$1000", category: "electronics" },
        { id: 6, name: "Sofa Moderno", image: "producto3.jpg", price: "$350", category: "home" }
    ];

    const productList = document.getElementById('product-list');
    const searchBar = document.getElementById('search-bar');
    const searchBtn = document.getElementById('search-btn');
    
    // Función para mostrar productos
    function displayProducts(productsToDisplay) {
        productList.innerHTML = ''; // Limpiar los productos actuales
        productsToDisplay.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('col-md-4', 'mb-4');
            productCard.innerHTML = `
                <div class="card">
                    <img src="${product.image}" alt="${product.name}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.price}</p>
                    </div>
                </div>
            `;
            productList.appendChild(productCard);
        });
    }

    // Mostrar todos los productos al inicio
    displayProducts(products);

    // Función de búsqueda
    searchBtn.addEventListener('click', function () {
        const query = searchBar.value.toLowerCase();
        const filteredProducts = products.filter(product => product.name.toLowerCase().includes(query));
        displayProducts(filteredProducts);
    });

    // Filtrado por categoría
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(button => {
        button.addEventListener('click', function () {
            const category = button.getAttribute('data-category');
            const filteredProducts = products.filter(product => product.category === category);
            displayProducts(filteredProducts);
        });
    });
});
