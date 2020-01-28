window.Shop = {
    API_BASE_URL: "http://localhost:8085",

    getProducts: function () {
        $.ajax({
            url: Shop.API_BASE_URL + "/products"
            //default ajax method: "GET"
        }).done(function (response) {
            console.log(response);
            Shop.displayProduct(response.content);

        })
    },

    getProductHtml: function (product) {
        return `<div class="col-sm-4">
            <div class="product-image-wrapper">
            <div class="single-products">
            <div class="productinfo text-center">
            <img src="images/shop/product12.jpg" alt="" />
            <h2>$${product.price}</h2>
            <p>${product.name}</p>
        <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a>
        </div>
        <div class="product-overlay">
            <div class="overlay-content">
            <h2>$${product.price}</h2>
            <p>${product.name}</p>
        <a class="btn btn-default add-to-cart" data-quantity="1" data-product_sku="" data-product_id="${product.id}" rel="nofollow" href="#""><i class="fa fa-shopping-cart"></i>Add to cart</a>
        </div>
        </div>
        </div>
        <div class="choose">
            <ul class="nav nav-pills nav-justified">
            <li><a href=""><i class="fa fa-plus-square"></i>Add to wishlist</a></li>
        <li><a href=""><i class="fa fa-plus-square"></i>Add to compare</a></li>
        </ul>
        </div>
        </div>
        </div>`

    },

    displayProduct: function (products) {
        let productsHtml = "";

        products.forEach(product => productsHtml += Shop.getProductHtml(product));

        $(".container .features_items").html(productsHtml);

    },


    addProductToCart: function (productId) {
        let request= {
            customerId: 5,
            productId: productId
        };
        $.ajax({
            url: Shop.API_BASE_URL + "/carts",
            method: "PUT",
            contentType: "application/json",
            data: JSON.stringify(request)
        }).done(function () {
            window.location.replace("cart.html");
        });

    },

    bindEvents: function () {

        $(".container").delegate(".add-to-cart", "click", function (event) {
            event.preventDefault();

            let productId = $(this).data("product_id");

            Shop.addProductToCart(productId);
        });



    }
};


Shop.getProducts();
Shop.bindEvents();