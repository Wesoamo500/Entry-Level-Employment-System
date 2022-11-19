import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import jobRoutes from './Routers/JobRouters.js'
import emailRoutes from './Routers/emailRoutes.js'
import userRoutes from './Routers/userRoutes.js'
import applicationRoutes from './Routers/applicationRoutes.js'
import internshipRoutes from './Routers/internshipRouters.js'
import internRoutes from './Routers/internRoutes.js'

const app = express()

app.use(bodyParser.json({limit:'30mb',extended:'false'}))
app.use(bodyParser.urlencoded({limit:'30mb',extended:'false'}))
dotenv.config()
app.use(cors())
app.use(function(req, res, next) {
  req.setEncoding('utf-8')
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'my-header,X-Requested-With,content-type,Authorization,cache-control');
  //res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  
  res.setHeader( "Cache-Control"," private, max-age=1800, stale-while-revalidate=1800"); // HTTP 1.1.
  res.setHeader("Pragma", "no-cache"); // HTTP 1.0.
  res.setHeader("Expires", "0"); // Proxies.
  res.cookie('cookieName', 'cookieValue', { sameSite: 'none', secure: true})
  // Pass to next layer of middleware
  next();
});

app.get('/',(req,res)=>{
	res.cookie('cookieName','cookieValue',{sameSite:'none',secure:true})
	res.send('Welcome to Jobs API')
})
app.use('/post',jobRoutes)
app.use('/contact',emailRoutes)
app.use('/user',userRoutes)
app.use('/application',applicationRoutes)
app.use('/internships',internshipRoutes)
app.use('/intern',internRoutes)



mongoose.connect(process.env.MONGO_DB , {useNewUrlParser:true,useUnifiedTopology:true} )
	.then(()=>app.listen(process.env.PORT,()=>console.log(`server running on port ${process.env.PORT}`)))
	.catch((error)=>console.log(error.message))


