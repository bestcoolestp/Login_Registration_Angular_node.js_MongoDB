const studentModel = require('./studentModel');
const key = 'secretKey123456789';
var encryptor = require('simple-encryptor')(key);

function createStudentDBService(studentDetails) {
    const studentModelData = new studentModel();

    studentModelData.firstName = studentDetails.firstName;
    studentModelData.lastName = studentDetails.lastName;
    studentModelData.email = studentDetails.email;
    studentModelData.password = encryptor.encrypt(studentDetails.password);

    return studentModelData.save()
        .then(result => {
            return result; // Resolve with the saved student data
        })
        .catch(err => {
            throw err; // Throw the error to be caught by the calling function
        });
}

async function loginStudentDBService(studentDetails) {
    try {
        console.log("Searching for student with email:", studentDetails.email);

        // Performing a case-insensitive search for the email
        const result = await studentModel.findOne({ 
            email: { $regex: new RegExp(`^${studentDetails.email}$`, 'i') } 
        });

        console.log("Fetched student:", result);

        if (result) {
            const decrypted = encryptor.decrypt(result.password);
            if (decrypted === studentDetails.password) {
                return { status: true, msg: "Student Validated Successfully" };
            } else {
                return { status: false, msg: "Student Validated failed" };
            }
        } else {
            return { status: false, msg: "Student Error Details" };
        }
    } catch (error) {
        console.log("Database error:", error); // Logging the exact error
        throw { status: false, msg: "Invalid Data" };
    }
}






module.exports = { createStudentDBService, loginStudentDBService};
