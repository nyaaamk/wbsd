let inventory = [];

const findProductIndex = (productName) => {
  const lowerName = productName.toLowerCase();
  return inventory.findIndex(item => item.name === lowerName);
};

const addProduct = (product) => {
  const productToAdd = {
    name    : product.name.toLowerCase(),
    quantity: product.quantity
  };

  const index = findProductIndex(product.name);

  if (index !== -1) {
    inventory[index].quantity += productToAdd.quantity;
    console.log(productToAdd.name + " quantity updated");
  } else {
    inventory.push(productToAdd);
    console.log(productToAdd.name + " added to inventory");
  }
};

const removeProduct = (productName, quantity) => {
  const index = findProductIndex(productName);

  if (index === -1) {
    console.log(productName.toLowerCase() + " not found");
    return;
  }

  const currentQuantity = inventory[index].quantity;

  if (currentQuantity < quantity) {
    console.log("Not enough " + inventory[index].name + " available, remaining pieces: " + currentQuantity);
    return;
  }

  inventory[index].quantity -= quantity;

  console.log("Remaining " + inventory[index].name + " pieces: " + inventory[index].quantity);

  if (inventory[index].quantity === 0) {
    inventory.splice(index, 1);
  }
};