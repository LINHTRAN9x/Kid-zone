function productContructor(img , name, price, id){
    var product = new Object();

    product.img = img;
    product.name = name;
    product.price = price;

    if(id != null){
        product.id = id;
    }else{
        product.id = createID();
    }
    

    // product.calcProductPrice = function () {
    //     var price = price * this.price;
    //     return price;
    // }

    product.toJson = function(){
        var json = JSON.stringify(this);
        return json;
    }

    product.fromJson = function(json){
        var fullObject = new Object();

        var doiTuong = JSON.parse(json);

        var fullObject = productContructor(doiTuong.img, doiTuong.name,doiTuong.price)

        return fullObject;

    }

    return product;
}

// Chuyen danh sach object sang html
function convertListObjectProductToHTML(e){
   var HTMLListProduct = '<div class="item-allProducts-container">';
  
    var htmlProduct = convertObjectProductToHTML();
    HTMLListProduct = HTMLListProduct + htmlProduct;
   

   HTMLListProduct = HTMLListProduct + '</div>';

   return HTMLListProduct;
}

//chuyen object sang html
function convertObjectProductToHTML(e){
    var html = '';
    html+= '<div ng-repeat="product in products | filter:testfilter" class="item container align-items-center d-flex flex-column gap-3">'
    html+= '<img src={{product.img}} alt="">'
    html+= '<div class="d-flex justify-content-center align-items-center gap-3">'
    // html+=    '<div class="item-color red color-selection"></div>'
    // html+=    '<div class="item-color blue color-nonselection"></div>'
    // html+=    '<div class="item-color gray color-nonselection"></div>'
    // html+=    '<div class="item-color yellow color-nonselection"></div>'
    // html+=    '<div class="item-color gray color-nonselection"></div>'
    html+= '</div>'
    html+= '<h4 class="text-center">{{product.name}}</h4>'
    html+= '<div class="text-center fs-4"><p>${{product.price}}</p><button ng-click="addToCart(product.id)">+<i class="fa-solid fa-cart-arrow-down"></i></button></div>'
    html+= '</div>'

    return html;
}

function getProductOnId(id){
    var product = new Object();
    var jsonListProduct = localStorage.getItem('listProduct');
    var listProduct = JSON.parse(jsonListProduct);

    for (var i = 0; i < listProduct.length; i++){
        var currentProduct = listProduct[i];
        if (currentProduct.id == id){
            return currentProduct;
        }
    }
    var listItemCart = getListItemCartOnLocalStorage();
    for (var i = 0; i < listItemCart.length; i++){
        var currentProduct = listItemCart[i];
        if (currentProduct.id == id){
            product = currentProduct;
        }
    }

    product = productContructor(product.img, product.name, product.price, product.id);

    return product;
}

function getListItemCartOnLocalStorage(){
    var jsonListItemCart = localStorage.getItem('listItemCart');
    var listItemCart = JSON.parse(jsonListItemCart);

    return listItemCart;
}
