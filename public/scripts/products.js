function Product(name, description, image, id){
    this.name = name;
    this.description = description;
    this.image = image;
    this.id = id;
};

var roboChair_desc = "RoboChair is an exoskeleton with one degree of freedown (DOF) - the knee. It is designed to provide assistive motion for users with limited mobility in Sit-to-Stand and Stand-to-Sit (STS) needs.";
var roboChair = new Product("RoboChair", roboChair_desc, 'images/RoboChairBlankBackground.png', "robochair");

var exollent_desc = "Exollent is a POC system which is intented for initial testing of gait dynamics, structural strength, system's stability, user's comfort, environmental loads, and motion control.";
var exollent = new Product("Exollent", exollent_desc, 'images/ExollentConcept.png', "exollent");

var products = [roboChair, exollent];

function populateProduct(products){
    $.each(products, function(index, product) {
        var $container = $('#' + product.id);
        
        var $image = $('<img>', {
            src: product.image,
            alt: 'Product image',
            class: 'prod-img'
        });
        $container.append($image);
        
        var $heading = $('<h2>').text(product.name);
        $container.append($heading);
        
        var $para = $('<p>').text(product.description);
        $container.append($para);
    });
}

populateProduct(products);