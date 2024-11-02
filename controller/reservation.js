import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js";

// Existing sendReservation function
export const sendReservation = async (req, res, next) => {
  const { firstName, lastName, email, phone } = req.body;
  if (!firstName || !lastName || !email || !phone) {
    return next(new ErrorHandler("Please fill full reservation form!", 400));
  }
  try {
    const newReservation = await Reservation.create({
      firstName,
      lastName,
      email,
      phone,
    }); // Correct the object format
    res.status(200).json({
      success: true,
      message: "Reservation sent successfully",
      // data: newReservation,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      // Fix the typo: error.Aname -> error.name
      const validationError = Object.values(error.errors).map(
        (err) => err.message
      );
      return next(new ErrorHandler(validationError.join(","), 400));
    }
    return next(error); // Pass other errors to the global error handler
  }
};

// New getReservations function
export const getReservations = async (req, res, next) => {
  try {
    const reservations = await Reservation.find();
    res.status(200).json({
      success: true,
      data: reservations,
    });
  } catch (error) {
    return next(new ErrorHandler("Failed to retrieve reservations", 500));
  }
};