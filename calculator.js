let products = [
    { name: "Shirt", price: 10, stock: 5 },
    { name: "Pants", price: 20, stock: 3 },
    { name: "Shoes", price: 30, stock: 2 }
  ];
  let cart = [];
  let isRunning = true;
  
  function displayProducts() {
    console.log("Available Products:");
    products.forEach(p => console.log(`${p.name} - $${p.price} - Stock: ${p.stock}`));
  }
  
  function addProductToCart(productName, quantity) {
    let product = findProduct(productName);
    if (product && product.stock >= quantity) {
      cart.push({ name: product.name, price: product.price, quantity });
      product.stock -= quantity;
      console.log(`${quantity} ${product.name}(s) added to cart.`);
    } else {
      console.log("Product not found or insufficient stock.");
    }
  }
  
  function viewCart() {
    console.log("Your Cart:");
    cart.forEach(item => console.log(`${item.quantity}x ${item.name} - $${item.price * item.quantity}`));
  }
  
  function applyDiscount(total) {
    return total > 50 ? total * 0.9 : total;  // 10% discount if over $50
  }
  
  function checkout() {
    let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    total = applyDiscount(total);
    console.log(`Total: $${total.toFixed(2)}`);
    cart = [];
  }
  
  function findProduct(productName) {
    return products.find(product => product.name.toLowerCase() === productName.toLowerCase());
  }
  
  while (isRunning) {
    console.log("1. View Products");
    console.log("2. Add Product to Cart");
    console.log("3. View Cart");
    console.log("4. Checkout");
    console.log("5. Exit");
  
    let choice = prompt("Enter your choice:");
  
    switch (choice) {
      case '1':
        displayProducts();
        break;
      case '2':
        let product = prompt("Enter product name:");
        let quantity = parseInt(prompt("Enter quantity:"));
        addProductToCart(product, quantity);
        break;
      case '3':
        viewCart();
        break;
      case '4':
        checkout();
        break;
      case '5':
        isRunning = false;
        console.log("Thank you for shopping!");
        break;
      default:
        console.log("Invalid option.");
    }
  }
  