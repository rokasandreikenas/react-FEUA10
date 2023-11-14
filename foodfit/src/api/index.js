const mealKitFakeData = {
  url: "https://api.cityrush.lt/storage/mealKits/images/1070x500/310012023pL1vhvDHXDacGkv2eSyk.png",
  mealCount: 5,
  title: "Sportui",
  price: 16,
};

const mealKitFakeData1 = {
  url: "https://api.cityrush.lt/storage/mealKits/images/1070x500/210012023FStFMPUCVM6rFzVzJWlJ.png",
  mealCount: 3,
  title: "Subalansuotas",
  price: 15,
};

const mealKitFakeData2 = {
  url: "https://api.cityrush.lt/storage/individualOrderSettings/images/110012023u5Eh7hSzAIH6JG9uqw3c.png",
  mealCount: 1,
  title: "Kartas per dieną",
  price: 12,
};

export const fetchMealKits = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([mealKitFakeData, mealKitFakeData1, mealKitFakeData2]);
    }, 1000);
  });
};

export const fetchPosts = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts").then((response) =>
    response.json()
  );
};
