import Res from "../models/Reserv.js"


//Alloting  the reservation
const resMain = async (req, res, next) => {
    try {
        const Reservation = await Res.create(req.body)
        console.log(Reservation)
        res.status(200).json({
            success: true,
            Reservation
        })

    } catch (error) {
        console.log(error)
    }


}


//Getting all the reservations
const getRes = async (req, res, next) => {
    const Reseravtions = await Res.find();
    res.status(200).json({

        successs: true,
        Reseravtions

    })


}

export { getRes, resMain }