const studentService = require('./studentService.js');

const createStudentControllerFn = async (req, res) => {
    try {
        const status = await studentService.createStudentDBService(req.body);
        console.log(status);

        if(status) {
            res.send( {"status": true, "message": "Student created successfully"})
        }else {
            res.send( {"status": false, "message": "Error! Student creation failed"})
        }

        
    } catch (err) {
        console.log(err);
        
    }
};

const loginStudentControllerFn = async (req, res) => {
    try {
        const result = await studentService.loginStudentDBService(req.body);
        console.log(result);

        if(result.status) {
            res.send( {"status": true, "message": "Student logged in successfully"})
        } else {
            res.send( {"status": false, "message": result.msg})
        }
    } catch (err) {
        console.log(err);
    }
};


module.exports = {createStudentControllerFn, loginStudentControllerFn};