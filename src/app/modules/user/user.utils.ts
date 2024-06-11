import { TAcademicSesmester } from "../academicSesmester/academicSemester.interface"
import { User } from "./user.model";


const findLastStudentId = async () => {
    const lastStudent = await User.findOne({
        role: 'student',
    },
        {
            id: 1,
            _id: 0
        },

    )
        .sort({
            createdAt: -1,
        })

        .lean()
    return lastStudent?.id ? lastStudent.id : undefined
}

export const generateStudentId = async (payload: TAcademicSesmester) => {
    // frist time
    let currentId = (0).toString(); // default 0000

    const lastStudentId = await findLastStudentId();
    const lastStudentSemesterCode = lastStudentId?.substring(4, 6);
    const lastStudentSemesterYear = lastStudentId?.substring(0, 4);
    const currentSemesterCode = payload.code;
    const currentSemesterYear = payload.year;


    if (lastStudentId && lastStudentSemesterCode === currentSemesterCode && lastStudentSemesterYear === currentSemesterYear) {
        currentId = lastStudentId.substring(6)
    }


    let incremetId = (Number(currentId) + 1).toString().padStart(4, '0');

    incremetId = `${payload.year}${payload.code}${incremetId}`
    return incremetId;
}
// find last faculty id
export const findLastFacultyId = async () => {
    const lastFaculty = await User.findOne(
      {
        role: 'faculty',
      },
      {
        id: 1,
        _id: 0,
      },
    )
      .sort({
        createdAt: -1,
      })
      .lean();
  
    return lastFaculty?.id ? lastFaculty.id.substring(2) : undefined;
  };


// generateFacultyId

export const generateFacultyId = async () => {
    let currentId = (0).toString();
    const lastFacultyId = await findLastFacultyId();
  
    if (lastFacultyId) {
      currentId = lastFacultyId.substring(2);
    }
  
    let incrementId = (Number(currentId) + 1).toString().padStart(4, '0');
  
    incrementId = `F-${incrementId}`;
  
    return incrementId;
  };

  export const findLastAdminId = async () => {
    const lastAdmin = await User.findOne(
      {
        role: 'admin',
      },
      {
        id: 1,
        _id: 0,
      },
    )
      .sort({
        createdAt: -1,
      })
      .lean();
  
    return lastAdmin?.id ? lastAdmin.id.substring(2) : undefined;
  };
  
  export const generateAdminId = async () => {
    let currentId = (0).toString();
    const lastAdminId = await findLastAdminId();
  
    if (lastAdminId) {
      currentId = lastAdminId.substring(2);
    }
  
    let incrementId = (Number(currentId) + 1).toString().padStart(4, '0');
  
    incrementId = `A-${incrementId}`;
    return incrementId;
  };