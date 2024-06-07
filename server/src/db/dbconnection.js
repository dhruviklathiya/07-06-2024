const mongoose = require("mongoose")

const connectDB = () => {
    mongoose.connect("mongodb+srv://dhruviklathiya:AND0wnf0LWfZsY0K@d49cluster.kb3sp66.mongodb.net/Zomato")
        .then((res) => {
            console.log("SERVER CONNECTED SUCCESSFULLY")
        })
        .catch((error) => {
            console.log(error.message);
        })
}
// const connectDB = () => {
//     mongoose.connect("mongodb://127.0.0.1:27017/")
//         .then((res) => {
//             console.log("SERVER CONNECTED SUCCESSFULLY")
//         })
//         .catch((error) => {
//             console.log(error.message);
//         })
// }

module.exports = connectDB