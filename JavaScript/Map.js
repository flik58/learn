class ShoppingCart {
    constructor() {
        this.items = new Map();
    }

    addItem(item) {
        const count = this.items.get(item) ?? 0;
        this.items.set(item, count + 1);
    }

    getTotalPrice() {
        return Array.from(this.items).reduce((total, [item, count]) => {
            return total + item.price * count;
        }, 0);
    }

    toString() {
        return Array.from(this.items).map(([item, count]) => {
            return `${item.name}:${count}`;
        }).join(",");
    }
}

const shoppingCart = new ShoppingCart();

const shopItems = [
    {name: "mikan", price: 100},
    {name: "ringo", price: 200},
];

shoppingCart.addItem(shopItems[0]);
shoppingCart.addItem(shopItems[0]);
shoppingCart.addItem(shopItems[1]);

console.log(shoppingCart.getTotalPrice());
console.log(shoppingCart.toString());
