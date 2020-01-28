window.Cart={

    API_BASE_URL: "http://localhost:8085",

    getCart: function(){

        let customerId=5;

        $.ajax({
            url: Cart.API_BASE_URL + "/carts" + customerId

        }).done(function (response) {
            console.log(response);
            Cart.displayProducts(response.products)

        })
    },

    getProductHtml: function (product) {
        return  `<tr>
            <td class="cart_product">
            <a href=""><img src="images/cart/one.jpg" alt=""></a>
            </td>
            <td class="cart_description">
            <h4><a href="">${product.name}</a></h4>
        <p>Product ID: ${product.id}</p>
        </td>
        <td class="cart_price">
            <p>$${product.price}</p>
            </td>
            <td class="cart_quantity">
            <div class="cart_quantity_button">
            <a class="cart_quantity_up" href=""> + </a>
            <input class="cart_quantity_input" type="text" name="quantity" value="1" autocomplete="off" size="2">
            <a class="cart_quantity_down" href=""> - </a>
            </div>
            </td>
            <td class="cart_total">
            <p class="cart_total_price">$${product.price}</p>
            </td>
            <td class="cart_delete">
            <a class="cart_quantity_delete" href=""><i class="fa fa-times"></i></a>
        </td>
        </tr>`

    },


    displayProducts: function (products) {
        let productsHtml = "";
        products.forEach(product => productsHtml += Cart.getProductHtml(product));
        $(".table.table-condensed tbody").html(productsHtml);

    },


};
Cart.getCart();