const express = require('express');
const router = express.Router();

const Course = require('../../models/Course');

//get all the course
router.get('/', (req, res) => {
    Course.find()
        .then(courses => res.json(courses))
        .catch(err => res.status(404).json(`Error : ${error}`))
})

//get one course with its id
router.get('/:id', (req, res) => {
    Course.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.json(`Error: ${err}`))
})

router.post('/create',(req,res)=>{
    const {body} = req;
    const {name,teacher,location,description,maximumRegister} = body;
    let {duration} = body;

    if (!name) {
        return res.json({
            success: false,
            message: 'Error: Name can not be blank'
        })
    }
    if (!teacher) {
        return res.json({
            success: false,
            message: 'Error: Teacher can not be blank'
        })
    }
    if (!location) {
        return res.json({
            success: false,
            message: 'Error: Location can not be blank'
        })
    }
    if (!description) {
        return res.json({
            success: false,
            message: 'Error: Description can not be blank'
        })
    }
    if (!duration) {
        return res.json({
            success: false,
            message: 'Error: Duration can not be blank'
        })
    }
    if (!maximumRegister) {
        return res.json({
            success: false,
            message: 'Error: Maximum Register can not be blank'
        })
    }

    Course.find({
        name
    }, (err, previousCourses) => {
        if (err) {
            return res.json({
                success: false,
                message: 'Error: Server error'
            })
        }
        else if (previousCourses.length > 0) {
            return res.json({
                success: false,
                message: 'Error: Course already exists.'
            });
        }
        else {
            const newCourses = new Course();

            newCourses.name = name;
            newCourses.teacher = teacher;
            newCourses.location = location;
            newCourses.description = description;
            newCourses.maximumRegister = maximumRegister;
            newCourses.duration = Number(duration);

            newCourses.save()
                .then(() => res.json({
                    success: true,
                    courseID: newCourses._id,
                    message: `Create course success`
                }))
                .catch(err => res.json(`Error: ${err} `));
        }
    });
});

module.exports = router;