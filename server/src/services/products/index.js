const products = [
  {
    id: 1,
    name: "Cheese Sticks",
    price: 480,
    description:
      "Freshly Baked Bread Filled with the Yummiest Cheese Blend to Satisfy your Cravings.      ",
    category_id: 1,
    image:
      "https://www.cheezious.com/_next/image?url=https%3A%2F%2Fem-cdn.eatmubarak.pk%2Frestaurant_new%2F%2F%2Fdish%2F16027793711771744869.jpg&w=256&q=90",
  },
  {
    id: 2,
    name: "Oven Baked Wings",
    price: 480,
    description: "Fresh Oven Baked Wings Served With Dip Sauce",
    category_id: 1,
    image:
      "https://www.cheezious.com/_next/image?url=https%3A%2F%2Fem-cdn.eatmubarak.pk%2Frestaurant_new%2F%2F%2Fdish%2F1602778646768992842.jpg&w=384&q=90",
  },
  {
    id: 3,
    name: "Flaming Wings",
    price: 450,
    description:
      "Fresh Oven Baked Wings Tossed In Hot Peri Peri Sauce and Served With Dip Sauce",
    category_id: 1,
    image:
      "https://www.cheezious.com/_next/image?url=https%3A%2F%2Fem-cdn.eatmubarak.pk%2Frestaurant_new%2F54946%2F54946%2Fdish%2F1612872495497065653.png&w=1080&q=90",
  },
  {
    id: 4,
    name: "Calzone Chunks",
    price: 800,
    description: "4 Pcs Stuffed Calzone Chunks Served with Sauce & Fries",
    category_id: 1,
    image:
      "https://www.cheezious.com/_next/image?url=https%3A%2F%2Fem-cdn.eatmubarak.pk%2Frestaurant_new%2F54946%2F54946%2Fdish%2F1612872495497065653.png&w=1080&q=90",
  },
  {
    id: 5,
    name: "Arabic Rolls",
    price: 500,
    description:
      "4 Pcs Arabic Rolls Stuffed with Yummiest Mix Served with Sauce",
    category_id: 1,
    image:
      "https://www.cheezious.com/_next/image?url=https%3A%2F%2Fem-cdn.eatmubarak.pk%2F54946%2Fdish_image%2F1628885324.png&w=1920&q=90",
  },
  {
    id: 6,
    name: "Behari Rolls",
    price: 500,
    description:
      "4 Pcs Behari Rolls Stuffed with Yummiest Mix Served with Sauce ",
    category_id: 1,
    image:
      "https://www.cheezious.com/_next/image?url=https%3A%2F%2Fem-cdn.eatmubarak.pk%2F54946%2Fdish_image%2F1628885324.png&w=1920&q=90",
  },
  {
    id: 7,
    name: "Sausage Pizza",
    price: 470,
    description:
      "Tender Chunks of Marinated Grilled Chicken with Savory Onion ",
    category_id: 2,
    image:
      "https://cheezious.com/_next/image?url=https%3A%2F%2Fem-cdn.eatmubarak.pk%2Frestaurant_new%2F54946%2F54946%2Fdish%2F16129593211519226473.jpg&w=1920&q=90",
  },
  {
    id: 8,
    name: "Chicken Fajita",
    price: 470,
    description:
      "An Authentic Taste of Fajita Marinated Chicken Onion and Bell Peppers. ",
    category_id: 2,
    image:
      "https://cheezious.com/_next/image?url=https%3A%2F%2Fem-cdn.eatmubarak.pk%2Frestaurant_new%2F54946%2F54946%2Fdish%2F16129588831247331510.jpg&w=1920&q=90",
  },
  {
    id: 9,
    name: "Chicken Lover",
    price: 470,
    description:
      "Extreme Quantity of Chicken and Onion with Rich Mozzarella Cheese",
    category_id: 2,
    image:
      "https://cheezious.com/_next/image?url=https%3A%2F%2Fem-cdn.eatmubarak.pk%2Frestaurant_new%2F%2F%2Fdish%2F16027813671864187338.jpg&w=1920&q=90",
  },
  {
    id: 10,
    name: "Chicken Tandoori",
    price: 470,
    description:
      "Our Traditionally Developed Tandoori Chicken with Onion, Olives, Jalapeno and Tomato Sauce",
    category_id: 2,
    image:
      "https://cheezious.com/_next/image?url=https%3A%2F%2Fem-cdn.eatmubarak.pk%2F54946%2Fdish_image%2F1629376979.jpg&w=1920&q=90",
  },
  {
    id: 11,
    name: "Special Roasted Platter",
    price: 800,
    description: "4 Pcs Behari Rolls, 6pcs Wings Served with Fries & Sauce",
    category_id: 1,
    image:
      "https://cheezious.com/_next/image?url=https%3A%2F%2Fem-cdn.eatmubarak.pk%2F54946%2Fdish_image%2F1628885597.jpg&w=1920&q=90",
  },
  {
    id: 12,
    name: "Mexican Sandwich",
    price: 650,
    description:
      "Mozzarella Dipped Chicken Topped with Garlic Sauce, Tomato’s Served in Baked Bread.",
    category_id: 3,
    image:
      "https://cheezious.com/_next/image?url=https%3A%2F%2Fem-cdn.eatmubarak.pk%2F54946%2Fdish_image%2F1632305191.jpg&w=1920&q=90",
  },
  {
    id: 13,
    name: "Pizza Stacker",
    price: 700,
    description:
      "A Unique Blend of Delicious Sauce, Crispy Chicken and Pizza Crust.",
    category_id: 3,
    image:
      "https://cheezious.com/_next/image?url=https%3A%2F%2Fem-cdn.eatmubarak.pk%2Frestaurant_new%2F%2F%2Fdish%2F16027847051721315201.jpg&w=1920&q=90",
  },
  {
    id: 14,
    name: "Euro Sandwich",
    price: 650,
    description:
      "Mozzarella Dipped Black Pepper Chicken Topped with Garlic Sauce, Pineapples and Tomato’s Served in Baked Bread.",
    category_id: 3,
    image:
      "https://cheezious.com/_next/image?url=https%3A%2F%2Fem-cdn.eatmubarak.pk%2F54946%2Fdish_image%2F1632305153.jpg&w=1920&q=90",
  },
  {
    id: 15,
    name: "Soft Drink",
    price: 60,
    description: "Pepsi 250ml",
    category_id: 4,
    image:
      "https://cheezious.com/_next/image?url=https%3A%2F%2Fem-cdn.eatmubarak.pk%2F54946%2Fdish_image%2F1628890050.jpg&w=1920&q=90",
  },
  {
    id: 16,
    name: "Juice",
    price: 60,
    description: "Fresh Mango juice",
    category_id: 4,
    image:
      "https://cheezious.com/_next/image?url=https%3A%2F%2Fem-cdn.eatmubarak.pk%2F54946%2Fdish_image%2F1628885996.jpg&w=1920&q=90",
  },
];
const getProducts = async (req, res) => {
  if (products) {
    res.status(201).json({ data: products });
  } else {
    res
      .status(500)
      .json({ message: "products not found", error: error.message });
  }
};

const getProductsBycat = async (req, res) => {
  const categoryId = req.params.id;

  const filteredProducts = products.filter(
    (product) => product.category_id == categoryId
  );
  if (filteredProducts) {
    res.status(201).json({ data: filteredProducts });
  } else {
    res
      .status(500)
      .json({ message: "products not found", error: error.message });
  }
};
module.exports = { getProducts, getProductsBycat };
