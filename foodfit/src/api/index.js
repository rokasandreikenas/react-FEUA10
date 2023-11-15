// const mealKitFakeData = {
//   imageUrl:
//     "https://api.cityrush.lt/storage/mealKits/images/1070x500/310012023pL1vhvDHXDacGkv2eSyk.png",
//   mealCount: 5,
//   title: "Sportui",
//   price: 16,
// };

// const mealKitFakeData1 = {
//   imageUrl:
//     "https://api.cityrush.lt/storage/mealKits/images/1070x500/210012023FStFMPUCVM6rFzVzJWlJ.png",
//   mealCount: 3,
//   title: "Subalansuotas",
//   price: 15,
// };

// const mealKitFakeData2 = {
//   imageUrl:
//     "https://api.cityrush.lt/storage/individualOrderSettings/images/110012023u5Eh7hSzAIH6JG9uqw3c.png",
//   mealCount: 1,
//   title: "Kartas per dieną",
//   price: 12,
// };

// GET
export const fetchMealKits = () => {
  const mealKits = JSON.parse(localStorage.getItem("mealKits")) ?? [];

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mealKits);
    }, 1000);
  });
};

// POST
export const createMealKit = (mealKit) => {
  const mealKits = JSON.parse(localStorage.getItem("mealKits")) ?? []; // jeigu neranda mealKits localstorage tai naudoja []
  const updatedArray = JSON.stringify([...mealKits, mealKit]);
  localStorage.setItem("mealKits", updatedArray);
};

// GET
export const fetchCart = () => {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) ?? [];

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cartItems);
    }, 1000);
  });
};

// PUT
export const updateCart = (mealKit) => {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) ?? []; // istraukiam duomenis

  // patikrinam ar jau egzistuoja
  const foundItem = cartItems.find((item) => item.mealKit.id === mealKit.id); // {quantity: ..., mealKit {...}} arba undefined
  let updatedArray = cartItems;
  if (foundItem) {
    // update quantity
    const updatedQuantity = cartItems.map((item) =>
      item.mealKit.id === mealKit.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    updatedArray = JSON.stringify(updatedQuantity);
  } else {
    // add item to cart if item not found
    updatedArray = JSON.stringify([...cartItems, { quantity: 1, mealKit }]);
  }

  localStorage.setItem("cartItems", updatedArray);
};

export const fetchPosts = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts").then((response) =>
    response.json()
  );
};
