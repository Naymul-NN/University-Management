import { NextFunction, Request, Response } from "express"
import { UserServices } from "./user.service"

const createStudent = async (req: Request, res: Response,next: NextFunction) => {
    try {
        const {password, student: studentdata } = req.body
// do validation with zod
//   const zodparsedData = studentvalidationSchema.parse(studentdata)

        const result = await UserServices.createStudentIntoBb(password,studentdata)
        res.status(200).json({
            success: true,
            message: 'Student is created successfully',
            data: result
        })
    
    } catch (err) {
        next(err)
    }
}

export const userController ={
       createStudent
}