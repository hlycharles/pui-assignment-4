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
       img: "blackberry-single.png",
   },
   OriginalGF: {
       isGlutenFree: true,
       name: "Original",
       categories: [Category.Original],
   },
   OriginalV: {
       isVegan: true,
       name: "Original",
       categories: [Category.Original],
   },
   MapleApplePecan: {
       name: "Maple Apple Pecan",
       categories: [Category.Fruit],
   },
   CaramelPecan: {
       name: "Caramel Pecan",
       categories: [Category.Special],
   },
   Bacon: {
       name: "Bacon",
       categories: [Category.Special],
   },
   Walnut: {
       name: "Walnut",
       categories: [Category.Nut],
   },
   PumpkinSpice: {
       name: "Pumpkin Spice",
       categories: [Category.Veggie],
   },
   StrawberryRhubarb: {
       name: "Strawberry Rhubarb",
       categories: [Category.Fruit],
   },
   Buttermilk: {
       name: "Old Fashioned Buttermilk",
       categories: [Category.Special],
   },
   Blackberry: {
       name: "Blackberry",
       categories: [Category.Fruit],
       img: "blackberry-single.png",
   },
   Cranberry: {
       name: "Cranberry",
       categories: [Category.Fruit],
   },
   LemonLavender: {
       name: "Lemon Lavender",
       categories: [Category.Fruit],
   },
   CarrotCake: {
       name: "Carrot Cake",
       categories: [Category.Veggie, Category.Cake],
   },
   BirthdayCake: {
       name: "Birthday Cake",
       categories: [Category.Cake],
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
