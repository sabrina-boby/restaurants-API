// import mongoose from "mongoose";
// import validator from "validator";

// const reservationSchema = new mongoose.Schema({
//     firstName:{
//         type:String,
//         require:true,
//         minLength:[3,"first name must contain at least 3 char"],
//         maxLength:[30,"first name must contain at least 3 char"]
//     },
//     lastName:{
//         type:String,
//         require:true,
//         minLength:[3,"last name must contain at least 3 char"],
//         maxLength:[30,"last name must contain at least 3 char"]
//     },
//     email:{
//         type:String,
//         require:true,
//         validate: [validator.isEmail,"provide a valid mail"]
//     },
//     phone:{
//         type:String,
//         require:true,
//         minLength:[11,"phone number must contain at least 11 digit"],
//         maxLength:[11,"phone number contain at least 11 digit"]
//     },
// })

// export const Reservation = mongoose.model("Reservation",reservationSchema);


import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [3, "First name must contain at least 3 characters"],
        maxLength: [30, "First name must contain no more than 30 characters"]
    },
    lastName: {
        type: String,
        required: true,
        minLength: [3, "Last name must contain at least 3 characters"],
        maxLength: [30, "Last name must contain no more than 30 characters"]
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Provide a valid email"]
    },
    phone: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /^[0-9]{11}$/.test(v);  // Ensures exactly 11 digits
            },
            message: "Phone number must contain exactly 11 digits"
        }
    }
});

export const Reservation = mongoose.model("Reservation", reservationSchema);
