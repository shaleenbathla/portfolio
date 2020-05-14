const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()

//defining paths for express config
const incPath = path.join(__dirname,'../inc')
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

app.set('view engine','hbs')//set handlebars engine
app.set('views',viewsPath)//set views dir path
hbs.registerPartials(partialsPath)

//set static dir 
app.use(express.static(incPath))

app.get('',(req,res) => {
    res.render('index',{
        title : 'Weather app',
        name : 'Shaleen'
    })
})

app.get('/about',(req,res) => {
    res.render('about',{
        title : 'About Me',
        name : 'Shaleen'
    })
})

app.get('/help',(req,res) => {
    res.render('help',{
        helpText : 'This is some helpful text.',
        title : 'Help',
        name : 'Shaleen'
    })
})

app.get('/weather',(req,res) => {/* example.com/weather */
    if(!req.query.address){
        return res.send({
            error : 'You must provide an address!'
        })
    }
    geocode(req.query.address, (error,{latitude,longitude,location} = {}) => {
        if(error){
            return res.send({
                error
            })
        }
        forecast(latitude,longitude,(error,forecastData) => {
            if(error){
                return res.send({
                    error
                })
            }
            res.send({
                address : req.query.address,
                location,
                forecast : forecastData
            })
        })
    })
})

app.get('/products',(req,res) => {
    if(!req.query.search){
        return res.send({
            error : 'No search term provided!'
        })
    }
    console.log(req.query.search)
    res.send({
        products : []
    })
})

app.get('/help/*',(req,res) => {
    res.render('404',{
        title : 'ERROR 404',
        name : 'Shaleen',
        errorMessage : 'Help article not found.'
    })
})

app.get('*',(req,res) => {
    res.render('404',{
        title : 'ERROR 404',
        name : 'Shaleen',
        errorMessage : 'Page not found.'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})