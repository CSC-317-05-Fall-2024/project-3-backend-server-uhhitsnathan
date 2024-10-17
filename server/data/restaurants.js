// restaurants.js
export const restaurants = [
    {
        name: "Mom Can Cook Thai Kitchen",
        phone: "(661) 251-8103",
        address: "18358 Soledad Canyon Rd, Santa Clarita, CA 91387",
        photo: "/images/download.jpeg"
    },
    {
        name: "Toppers Pizza",
        phone: "(661) 222-7888",
        address: "8417 Soledad Canyon Rd, Santa Clarita, CA 91387",
        photo: "/images/toppers.jpeg"
    },
    {
        name: "Gyromania",
        phone: "(661) 252-4976",
        address: "20655 Soledad Canyon Rd, Santa Clarita, CA 91351",
        photo: "/images/gyro.jpeg"
    },
    {
        name: "The Stand",
        phone: "(661) 339-2333",
        address: "24201 Valencia Blvd Suite 3260, Valencia, CA 91355",
        photo: "/images/stand.jpeg"
    },
    {
        name: "Charcoal Korean BBQ",
        phone: "(661) 251-9292",
        address: "19158 Soledad Canyon Rd, Canyon Country, CA 91351",
        photo: "/images/charcoal2.jpg"
    },
    {
        name: "Marston's Restaurant",
        phone: "(661) 253-9910",
        address: "24011 Newhall Ranch Rd, Valencia, CA 91355",
        photo: "/images/martsons3.jpeg"
    },
    {
        name: "Chi-Chi's Pizza",
        phone: "(661) 252-4405",
        address: "27117 Sierra Hwy, Canyon Country, CA 91351",
        photo: "/images/chi.jpeg"
    },
    {
        name: "IN-N-Out Burger",
        phone: "(800) 786-1000",
        address: "28368 Sand Canyon Rd, Santa Clarita, CA 91351",
        photo: "/images/out3.jpeg"
    },
    {
        name: "Bonsai Sushi Garden",
        phone: "(661) 251-9008",
        address: "19358 Soledad Canyon Rd, Santa Clarita, CA 91351",
        photo: "/images/bonsai.jpg"
    }
];

let restaurantData = [

];

let lastId = restaurantData.length;

const getNextId = () => {
    lastId += 1;
    return lastId;
}

// Get a list of restaurants
const getRestaurants = () => {
};


// Get a restaurant by id
const getRestaurant = (id) => {
};

// Create a new restaurant entry
const createRestaurant = (newRestaurant) => {
};

// Delete a restaurant by id
const deleteRestaurant = (id) => {
};

export { getRestaurants, getRestaurant, createRestaurant, deleteRestaurant };