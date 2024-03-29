const utils = require('../utils');

const dessert = {
  variety() {
    return utils.draw(["Cake", "Cookie", "Pie", "Ice Cream", "Pudding", "Sweet Bread", "Cupcake", "Cheesecake", "Brownie", "Cobbler", "Ice Cream Cake", "Doughnut", "Frozen Yogurt", "Parfait", "Sundae", "Trifle", "Cake Pop", "Fruit Cake", "Coffee Cake", "Key Lime Pie", "Upside Down Pineapple Cake"])
  },
  topping() {
    return utils.draw(["Rainbow Sprinkles", "Chocolate Chips", "Whipped Cream", "Frosting", "Peanut Butter", "Gummy Bears", "Mocha Drizzle", "Caramel", "Bacon", "Chocolate Syrup", "Chocolate Sprinkles", "Cookie Dough", "Peanuts", "Butterscotch Syrup", "Marshmallows", "Cheesecake Bites", "Walnuts", "Granola", "Toffee Bits", "Berry Compote", "Glaze", "Powdered Sugar", "Cinnamon"])
  },
  flavor() {
    return utils.draw(["Vanilla", "Chocolate", "Strawberry", "Birthday Cake", "Salted Caramel", "Banana", "Butter Pecan", "Cookies 'n Cream", "Caramel", "Apple", "Butterscotch", "Mint Chocolate Chip", "Espresso", "Butter Pecan", "Cherry", "Coconut", "Chocolate Chip Cookie Dough", "French Vanilla", "Neapolitan", "Pistachio", "Rocky Road", "Peanut Butter", "Almond", "Green Tea", "Cheesecake", "Funfetti", "Lemon", "Oatmeal", "Pumpkin", "Red Velvet", "Blondie"])
  },
};

module.exports = dessert

