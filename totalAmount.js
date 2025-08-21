
function getTotalAmount(productsNeeded) {

    if (!(productsNeeded instanceof Object) || typeof productsNeeded.length !== 'number') {
        console.error("Input is not a valid array.");
        return 0;
    }

    let totalAmount = 0;
    let stockShortage = false;

    let stockAvailable = [
        { item: 'Jam - Apricot', quantity: 2, price: 100.10 },
        { item: 'Creamers - 10%', quantity: 1, price: 50 },
        { item: 'veg-pizza', quantity: 12, price: 150 },
        { item: 'cheese-sandwich', quantity: 100, price: 75 }
    ];

    for (let i = 0; i < productsNeeded.length; i++) {
        let prodcutTypeTool = productsNeeded[i];


        if (
            typeof prodcutTypeTool !== 'object' ||
            prodcutTypeTool === null ||
            typeof prodcutTypeTool.item !== 'string' ||
            typeof prodcutTypeTool.quantity !== 'number'
        ) {
            console.error("Input is Invalid at index " + i);
            return 0;
        }

        let eachProductNeededName = prodcutTypeTool.item;
        let eachproductNeededQuantity = prodcutTypeTool.quantity;

        for (let j = 0; j < stockAvailable.length; j++) {
            let eachStockAvailable = stockAvailable[j];

            if (
                eachStockAvailable.item === eachProductNeededName &&
                eachStockAvailable.quantity >= eachproductNeededQuantity
            ) {
                totalAmount += eachStockAvailable.price * eachproductNeededQuantity;
            } else if (
                eachStockAvailable.item === eachProductNeededName &&
                eachStockAvailable.quantity < eachproductNeededQuantity
            ) {
                totalAmount += eachStockAvailable.price * eachStockAvailable.quantity;
                stockShortage = true;
            }
        }
    }

    if (stockShortage) {
        console.error("Stock Available are less, Bill calculated Accordingly");
    }

    return totalAmount;
}

console.log(getTotalAmount([
    { item: 'Jam - Apricot', quantity: 1000 },
    { item: 'Creamers - 10%', quantity: 200 }
]));

// console.log(getTotalAmount([
//   { item: 'Jam - Apricot', quantity: 2 },
//   { item: 'Creamers - 10%', quantity: 1 }
// ]));

// console.log(getTotalAmount([
//   { "hi": 'invalid' },
//   [ {item:'Creamers - 10%', quantity: 1} ]
// ]));
