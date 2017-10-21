// list of roll categories
const Category = {
    Original: "Original",
    Fruit: "Fruit", 
    Nut: "Nut", 
    Veggie: "Veggie", 
    Special: "Special", 
    Cake: "Cake",
};

// list of roll options
const Roll = {
   Original: {
       name: "Original",
       categories: [Category.Original],
       // source: https://roadfood.com/restaurants/the-duffeyroll-cafe
       img: "original-single.jpg",
   },
   OriginalGF: {
       isGlutenFree: true,
       name: "Original",
       categories: [Category.Original],
       // source: https://www.bettycrocker.com/recipes/gluten-free-cinnamon-rolls/0ca833dd-7919-4a14-90e3-f40a9648b414
       img: "original-gf-single.jpg",
   },
   OriginalV: {
       isVegan: true,
       name: "Original",
       categories: [Category.Original],
       // source: http://ohsheglows.com/2017/05/09/vegan-cinnamon-rolls-with-make-ahead-option
       img: "original-v-single.jpg",
   },
   MapleApplePecan: {
       name: "Maple Apple Pecan",
       categories: [Category.Fruit],
       // source: http://carnaldish.com/recipes/dessert/maple-glazed-apple-pecan-cinnamon-rolls
       img: "maple-apple-pecan-single.jpg",
   },
   CaramelPecan: {
       name: "Caramel Pecan",
       categories: [Category.Special],
       // source: https://www.rhodesbread.com/blog/blog/microwave-caramel-pecan-cinnamon-rolls
       img: "caramel-pecan-single.jpg",
   },
   Bacon: {
       name: "Bacon",
       categories: [Category.Special],
       // source: https://www.pillsbury.com/recipes/bacon-cinnamon-rolls/be89e9ab-8ca3-49c7-a467-4cad1eab5776
       img: "bacon-single.jpg",
   },
   Walnut: {
       name: "Walnut",
       categories: [Category.Nut],
       // source: https://www.thelittleepicurean.com/2015/02/chocolate-walnut-cinnamon-rolls.html
       img: "walnut-single.jpg",
   },
   PumpkinSpice: {
       name: "Pumpkin Spice",
       categories: [Category.Veggie],
       // source: https://www.the-girl-who-ate-everything.com/2010/10/pumpkin-cinnamon-rolls-with-caramel.html
       img: "pumpkin-single.jpg",
   },
   StrawberryRhubarb: {
       name: "Strawberry Rhubarb",
       categories: [Category.Fruit],
       // source: http://www.eatdrinkshrink.com/sweets/strawberry-rhubarb-cinnamon-rolls
       img: "stawberry-rhubarb-single.jpg",
   },
   Buttermilk: {
       name: "Old Fashioned Buttermilk",
       categories: [Category.Special],
       // source: https://www.hy-vee.com/meal-solutions/recipes/Buttermilk-Cinnamon-Rolls-R6853.aspx
       img: "buttermilk-single.jpg",
   },
   Blackberry: {
       name: "Blackberry",
       categories: [Category.Fruit],
       // source: http://thesweetandsimplekitchen.com/category/recipes/breaky-fast
       img: "blackberry-single.png",
   },
   Cranberry: {
       name: "Cranberry",
       categories: [Category.Fruit],
       // source: http://tusrecetas.net/recetas-de-postres/receta-de-pionono.html
       img: "cranberry-single.jpg",
   },
   LemonLavender: {
       name: "Lemon Lavender",
       categories: [Category.Fruit],
       // source: https://food52.com/recipes/28347-lemon-lavender-sweet-rolls-with-lemon-mascarpone-frosting
       img: "lemon-lavender-single.jpg",
   },
   CarrotCake: {
       name: "Carrot Cake",
       categories: [Category.Veggie, Category.Cake],
       // source: http://www.recipe4living.com/recipes/cinnamon_carrot_cake.htm
       img: "carrot-cake-single.jpg",
   },
   BirthdayCake: {
       name: "Birthday Cake",
       categories: [Category.Cake],
       // source: https://www.pillsbury.com/recipes/double-stacked-cinnamon-roll-cake/df17f24c-3c35-4ed8-847c-8d09c59087fc
       img: "birthday-cake-single.jpg",
   },
};

const Pack = {
    "individual-pack": {
        name: "individual-pack",
        price: 3,
    },
    "6-pack": {
        name: "6-pack",
        price: 15,
    },
    "12-pack": {
        name: "12-pack",
        price: 28,
    },
};
