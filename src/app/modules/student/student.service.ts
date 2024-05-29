import { Student } from "./student.model";
// import { TStudent } from "./student.interface";

// const createStudentIntoBb = async(studentData: TStudent)=>{

//     if(await Student.isUserExists(studentData.id)){
//         throw new Error ('User already exists')
//     }
//    const result = await Student.create(studentData)
// //    static method



// // const student = new Student(studentData); // create an instance
// // if(await student.isUserExits(studentData.id)){
   
// // throw new Error('User already exists')
// // }
// //  const result = await student.save() //built in instance mathod
  
// return result;
// }

const getAllstudentsFromDb = async()=>{
    const result = await Student.find()
    return result
}

const getSingleStudentFromDB = async (id: string) => {
    // const result = await Student.findOne({id});
    const result = await Student.aggregate([
        {$match: {id: id}}
    ])
    return result;
}

const deleteSingleStudentFromDB = async (id: string) => {
    const result = await Student.updateOne({id}, {isDeleted: true});
    return result;
}

export const Studentservices = {
    // createStudentIntoBb,
    getAllstudentsFromDb,
    getSingleStudentFromDB,
    deleteSingleStudentFromDB

}