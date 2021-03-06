import express from 'express';
import bodyParser from 'body-parser';

import ownerRoutes from './routes/ownerRoute';
import petRoute from './routes/petRoute';


// Instantiate express
const app = express();

// Set our port
const port = process.env.PORT || 8000;

// Configure app to user bodyParser
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

// Register our routes in app
app.use('/owner',ownerRoutes)
app.use('/pet',petRoute)
app.get("*",(req,res)=>{
    res.status(200).json({
        message:"Express REST API"
    })
})

// Start our server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

// Export our app for testing purposes
export default app;