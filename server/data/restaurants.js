// restaurants.js
let restaurantData = [
    {
        id:0,
        name: "Mom Can Cook Thai Kitchen",
        phone: "(661) 251-8103",
        address: "18358 Soledad Canyon Rd, Santa Clarita, CA 91387",
        photo: "/images/download.jpeg"
    },
    {
        id:1,
        name: "Toppers Pizza",
        phone: "(661) 222-7888",
        address: "8417 Soledad Canyon Rd, Santa Clarita, CA 91387",
        photo: "/images/toppers.jpeg"
    },
    {
        id:2,
        name: "Gyromania",
        phone: "(661) 252-4976",
        address: "20655 Soledad Canyon Rd, Santa Clarita, CA 91351",
        photo: "/images/gyro.jpeg"
    },
    {
        id:3,
        name: "The Stand",
        phone: "(661) 339-2333",
        address: "24201 Valencia Blvd Suite 3260, Valencia, CA 91355",
        photo: "/images/stand.jpeg"
    },
    {
        id: 4,
        name: "Charcoal Korean BBQ",
        phone: "(661) 251-9292",
        address: "19158 Soledad Canyon Rd, Canyon Country, CA 91351",
        photo: "/images/charcoal2.jpg"
    },
    {
        id: 5,
        name: "Marston's Restaurant",
        phone: "(661) 253-9910",
        address: "24011 Newhall Ranch Rd, Valencia, CA 91355",
        photo: "/images/martsons3.jpeg"
    },
    {
        id: 6,
        name: "Chi-Chi's Pizza",
        phone: "(661) 252-4405",
        address: "27117 Sierra Hwy, Canyon Country, CA 91351",
        photo: "/images/chi.jpeg"
    },
    {
        id: 7,
        name: "IN-N-Out Burger",
        phone: "(800) 786-1000",
        address: "28368 Sand Canyon Rd, Santa Clarita, CA 91351",
        photo: "/images/out3.jpeg"
    },
    {
        id: 8,
        name: "Bonsai Sushi Garden",
        phone: "(661) 251-9008",
        address: "19358 Soledad Canyon Rd, Santa Clarita, CA 91351",
        photo: "/images/bonsai.jpg"
    }
];

let lastId = restaurantData.length -1 ;

const getNextId = () => {
    lastId += 1;
    return lastId;
}

// Get a list of restaurants
const getRestaurants = () => {
    return restaurantData;
};


// Get a restaurant by id
const getRestaurant = (id) => {
    return restaurantData.find(restaurant => restaurant.id === id);
};

// Create a new restaurant entry
const createRestaurant = (newRestaurant) => {
    const newRest = {
        id: getNextId(),
        ...newRestaurant
    }
    restaurantData.push(newRest);
    return newRest;
};

const updateRestaurant = (id, data) => {
    let restaurantToUpdate = restaurantData.find(restaurant => restaurant.id === id);

    // Update the restaurant data
    restaurantData = restaurantData.map(restaurant => {
        if (restaurant.id !== id) {
            return restaurant; // Return the restaurant unchanged if it's not the one we're updating
        }

        let updatedRestaurant = {
            ...restaurantToUpdate, // Keep the existing restaurant data
            ...data                // Merge it with the new data
        };
        return updatedRestaurant; // Return the updated restaurant
    });

    // Find the updated restaurant to return
    let updatedRestaurant = restaurantData.find(restaurant => restaurant.id === id);
    return updatedRestaurant;
};



// Delete a restaurant by id
const deleteRestaurant = (id) => {
    const restToDelete = restaurantData.find(restaurant => restaurant.id === id);
    if(!restToDelete){
        throw Error(`restaurant ${id} not found!`);
    }
    restaurantData = restaurantData.filter(restaurant => restaurant.id !== id);
    return restToDelete;
};

export { getRestaurants, getRestaurant, createRestaurant, deleteRestaurant, updateRestaurant };