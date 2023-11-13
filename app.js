const express = require('express');
const authRoutes = require('./routes/authRoutes');
const app = express()

app.set('view engine', 'ejs');

//set up routes
app.use('/auth',authRoutes);

//home route
app.get('/', (req,res) => {
    res.render('home');
});

app.listen(3000, () => {
    console.log('app listening to port 3000')
});