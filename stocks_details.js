// Input
// [
//   {
//     id: "p1",
//     name: "Cotton T‑Shirt",
//     variants: [
//       { sku: "TS-RED-M", color: "red", size: "M", price: 499, stock: 10 },
//       { sku: "TS-RED-L", color: "red", size: "L", price: 499, stock:  0 }
//     ]
//   },
//   {
//     id: "p2",
//     name: "Cotton T‑Shirt",
//     variants: [
//       { sku: "TS-BLK-M", color: "black", size: "M", price: 549, stock: 2 },
//       { sku: "TS-RED-M", color: "red",  size: "M", price: 499, stock: 5 }
//     ]
//   }
// ]


// Output
// {
//   bySku: {
//     "TS-RED-M": {
//       sku: "TS-RED-M",
//       productId: ["p1","p2"], // may track provenance as array
//       name: "Cotton T‑Shirt",
//       attributes: { color: "red", size: "M" },
//       price: 499,
//       stock: 15
//     },
//     "TS-RED-L": { /* ... */ },
//     "TS-BLK-M": { /* ... */ }
//   },
//   stats: { totalSkus: 3, deduped: 1, invalid: 0 }
// }


function findStocksDetails(userInput) {
  if (!Array.isArray(userInput)) {
    return { bySku: {}, stats: { totalSkus: 0, deduped: 0, invalid: 1 } };
  }

  var bySku = {};
  var totalSkusCount = 0;
  var invalidCount = 0;

  for (var i = 0; i < userInput.length; i++) {
    var product = userInput[i];

    if (
      !product ||
      typeof product !== "object" ||
      typeof product.id !== "string" ||
      typeof product.name !== "string" ||
      !Array.isArray(product.variants)
    ) {
      invalidCount++;
      continue;
    }

    for (var j = 0; j < product.variants.length; j++) {
      var variant = product.variants[j];

      if (
        !variant ||
        typeof variant !== "object" ||
        typeof variant.sku !== "string" ||
        typeof variant.price !== "number" ||
        typeof variant.stock !== "number" ||
        typeof variant.color !== "string" ||
        typeof variant.size !== "string"
      ) {
        invalidCount++;
        continue;
      }

      var skuKey = variant.sku;
      totalSkusCount++;

      if (!bySku[skuKey]) {
        bySku[skuKey] = {
          sku: skuKey,
          productId: [product.id],
          name: product.name,
          attributes: {
            color: variant.color,
            size: variant.size,
          },
          price: variant.price,
          stock: variant.stock,
        };
      } else {
        var pidList = bySku[skuKey].productId;
        var foundProductId = false;
        for (var k = 0; k < pidList.length; k++) {
          if (pidList[k] === product.id) {
            foundProductId = true;
            break;
          }
        }
        if (!foundProductId) {
          pidList.push(product.id);
        }
        bySku[skuKey].stock += variant.stock;
      }
    }
  }

  var dedupedCount = 0;
  for (var skuKey in bySku) {
    if (bySku[skuKey].productId.length > 1) {
      dedupedCount++;
    }
  }

  return {
    bySku: bySku,
    stats: {
      totalSkus: totalSkusCount,
      deduped: dedupedCount,
      invalid: invalidCount,
    },
  };
}


var inputProducts = [
  {
    id: "p1",
    name: "Cotton T-Shirt",
    variants: [
      { sku: "TS-RED-M", color: "red", size: "M", price: 499, stock: 10 },
      { sku: "TS-RED-L", color: "red", size: "L", price: 499, stock: 0 },
    ],
  },
  {
    id: "p2",
    name: "Cotton T-Shirt",
    variants: [
      { sku: "TS-BLK-M", color: "black", size: "M", price: 549, stock: 2 },
      { sku: "TS-RED-M", color: "red", size: "M", price: 499, stock: 5 },
    ],
  },
];

var result = findStocksDetails(inputProducts);
console.log(JSON.stringify(result, null, 3));

