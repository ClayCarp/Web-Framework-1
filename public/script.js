// Array of random meal suggestions
const meals = [
    "Pizza",
    "Sushi",
    "Pasta",
    "Burger",
    "Tacos",
    "Salad",
    "Steak",
    "Chicken Curry",
    "Vegetarian Stir Fry",
    "Burritos"
  ];
  
  // Mock restaurants for each meal type in Conway, AR
  const restaurantSuggestions = {
    "Pizza": [
      { name: "Papa John's Pizza", address: "1110 S Donaghey Ave, Conway, AR", phone: "+1 501-329-4666" },
      { name: "Little Caesars Pizza", address: "2250 Dave Ward Dr, Conway, AR", phone: "+1 501-327-1080" },
      { name: "Pizza Hut", address: "1710 S Highway 64, Conway, AR", phone: "+1 501-329-3434" }
    ],
    "Sushi": [
      { name: "Sushi King", address: "3705 Prince St, Conway, AR", phone: "+1 501-327-3663" },
      { name: "Hibachi Grill & Supreme Buffet", address: "825 S Amity Rd, Conway, AR", phone: "+1 501-358-4949" }
    ],
    "Pasta": [
      { name: "Olive Garden Italian Restaurant", address: "1335 S Amity Rd, Conway, AR", phone: "+1 501-329-2825" },
      { name: "The Pasta Grill", address: "1424 S Donaghey Ave, Conway, AR", phone: "+1 501-358-2427" }
    ],
    "Burger": [
      { name: "McDonald's", address: "1600 E Oak St, Conway, AR", phone: "+1 501-329-8539" },
      { name: "Five Guys", address: "2350 Donaghey Ave, Conway, AR", phone: "+1 501-358-0200" },
      { name: "Whataburger", address: "1780 Dave Ward Dr, Conway, AR", phone: "+1 501-329-2000" }
    ],
    "Tacos": [
      { name: "Taco Bell", address: "1003 S Harkrider St, Conway, AR", phone: "+1 501-327-8400" },
      { name: "Taco Bueno", address: "1015 S Amity Rd, Conway, AR", phone: "+1 501-358-4444" }
    ],
    "Salad": [
      { name: "Sweetgreen", address: "1304 S Donaghey Ave, Conway, AR", phone: "+1 501-329-5400" },
      { name: "Zoe's Kitchen", address: "3010 Prince St, Conway, AR", phone: "+1 501-358-2900" }
    ],
    "Steak": [
      { name: "Texas Roadhouse", address: "2500 Dave Ward Dr, Conway, AR", phone: "+1 501-329-3555" },
      { name: "Outback Steakhouse", address: "3800 Prince St, Conway, AR", phone: "+1 501-329-4472" }
    ],
    "Chicken Curry": [
      { name: "Indian Kitchen", address: "3015 Prince St, Conway, AR", phone: "+1 501-327-3007" },
      { name: "Curry Kitchen", address: "1201 S Donaghey Ave, Conway, AR", phone: "+1 501-358-5454" }
    ],
    "Vegetarian Stir Fry": [
      { name: "Thai Garden", address: "2050 S Donaghey Ave, Conway, AR", phone: "+1 501-358-2929" },
      { name: "Chinese Express", address: "2501 Prince St, Conway, AR", phone: "+1 501-329-8888" }
    ],
    "Burritos": [
      { name: "Chipotle Mexican Grill", address: "1241 S Donaghey Ave, Conway, AR", phone: "+1 501-358-3090" },
      { name: "QDOBA Mexican Eats", address: "2500 Dave Ward Dr, Conway, AR", phone: "+1 501-358-1910" }
    ]
  };
  
  // Function to generate a random meal suggestion
  function getRandomMeal() {
    const randomIndex = Math.floor(Math.random() * meals.length);
    return meals[randomIndex];
  }
  
  // Function to display restaurants for a specific meal
  function displayRestaurants(meal) {
    const restaurantList = document.getElementById('restaurantList');
    restaurantList.innerHTML = ''; // Clear previous results
  
    const restaurants = restaurantSuggestions[meal];
    if (!restaurants || restaurants.length === 0) {
      restaurantList.innerHTML = 'No restaurants found for that meal.';
    } else {
      restaurants.forEach((restaurant) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
          <strong>${restaurant.name}</strong><br>
          Address: ${restaurant.address}<br>
          Phone: ${restaurant.phone}
        `;
        restaurantList.appendChild(listItem);
      });
    }
  }
  
  // Event listener for button click
  document.getElementById('rngButton').addEventListener('click', function() {
    const meal = getRandomMeal();
    document.getElementById('mealSuggestion').textContent = `${meal}!`;
  
    // Display restaurants for the random meal
    displayRestaurants(meal);
  });
  