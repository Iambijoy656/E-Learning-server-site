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


app.get('/all-course', (req, res) => {
    res.send(allCourse);
});



app.get('/courses', (req, res) => {
    res.send(courses)
})



app.listen(port, () => {
    console.log('E-learning Server running on port', port);
})





