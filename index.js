const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;


app.use(cors());

const allCourse = require('./data/allCourse.json')
const courses = require('./data/courses.json')

app.get('/', (req, res) => {
    res.send("E-learning server is running");
})

// get All course
app.get('/all-course', (req, res) => {
    res.send(allCourse);
});



app.get('/courses', (req, res) => {
    res.send(courses)
})


app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const course_category = allCourse.filter(c => c.course_id === id)
    res.send(course_category)
})




app.get('/course/:id', (req, res) => {
    const id = req.params.id;

    const selectedCourse = allCourse.find(c => c.id === id)
    res.send(selectedCourse)

})


app.listen(port, () => {
    console.log('E-learning Server running on port', port);
})





