const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const app = express();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

require('dotenv').config();

// Middleware
app.use(cors({
  origin:[ 'http://localhost:5173', 'https://student-management-250a8.web.app', "https://student-management-250a8.firebaseapp.com"], // Vite's default port
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());


const logger = (req, res, next) => {
  console.log('inside the logger');
  next();
}

// Verify token middleware
const verifyToken = (req, res, next) => {
  console.log('inside verify token');
  console.log('cookies:', req.cookies);
  
  // Look for the specific token cookie, not username-localhost cookies
  const token = req.cookies.token;
  console.log('token:', token);

  if(!token){ 
    return res.status(401).send({message: 'Unauthorized access: No token provided'});
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if(err){
      return res.status(403).send({message: 'Forbidden: Invalid token'});
    }
    req.user = decoded;
    next();
  })
}

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.sk4ge.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    // console.log("Pinged your deployment. You successfully connected to MongoDB!");

    // jobs related apis 
    const jobsCollection = client.db('studentManagement').collection('jobs');
    const jobApplicationsCollection = client.db('studentManagement').collection('jobApplications');
    // token related apis
    const tokenCollection = client.db('studentManagement').collection('tokens');

    app.post('/jwt', async(req, res)=>{
      const user = req.body;
      const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '1h'});
      res
      .cookie('token', token, {
        httpOnly: true,
        secure:process.env.NODE_ENV === 'production',
        sameSite:process.env.NODE_ENV === 'production' ? 'none' : 'strict',
      })
      .send({success: true});
    })

    app.post('/logout', async(req, res)=>{
      res.clearCookie('token', {
        httpOnly: true,
        secure: false,
        secure:process.env.NODE_ENV === 'production',
        sameSite:process.env.NODE_ENV === 'production' ? 'none' : 'strict',

      });
      res.send({success: true});
    })

    app.get("/jobs", async(req, res)=>{
      const email = req.query?.email;
      const sort = req.query?.sort;
      const searchLocation = req.query?.searchLocation;
      const searchTitle = req.query?.searchTitle;
      let query = {};
      let sortQuery ={

      }
      if(email){
        query = {hr_email: email};
      }

      if(sort =="true"){
        sortQuery = {
            "salaryRange.min" : -1
        }
      }

      if(searchLocation){
        query.location = {
          $regex: searchLocation,
          $options: "i"
        }
      }

      if(searchTitle){
        query.title = {
          $regex: searchTitle,
          $options: "i"
        }
      }
      const cursor = jobsCollection.find(query).sort(sortQuery);
      const jobs = await cursor.toArray();
      res.send(jobs);
    })

    app.post("/jobs", async(req, res)=>{
        const job = req.body;
        const result = await jobsCollection.insertOne(job);
        res.send(result);
    })

    app.get("/jobs/:id", async(req, res)=>{
        const id = req.params.id;
        const query = {_id: new ObjectId(id)};
        const job = await jobsCollection.findOne(query);
        res.send(job);
    })

    app.get('/job-applications', verifyToken,  async(req, res)=>{
        const email = req.query.email;
        const query = {email: email};

        if(req.user.email !== email){
          return res.status(403).send({message: 'Forbidden: You are not authorized to access this resource'});
        }
       
        const result =await jobApplicationsCollection.find(query).toArray() ;

        for(const application of result){
            const jobQuery = {_id: new ObjectId(application.jobId)};
            const job = await jobsCollection.findOne(jobQuery);
           if(job){
           application.title = job.title;
           application.company = job.company;
           application.location = job.location;
           application.description = job.description;
           application.salaryRange = job.salaryRange;
           
           }
        }
      
        res.send(result);
    })

    app.post('/job-applications', async(req, res)=>{
        const jobApplication = req.body;
        const result = await jobApplicationsCollection.insertOne(jobApplication);

        const jobQuery = {_id: new ObjectId(jobApplication.jobId)};
        const job = await jobsCollection.findOne(jobQuery);
        let count =0;
        if(job.applicationCount){
            count = job.applicationCount +1;
        }

        else{
          count = 1;
        
        }
        const filter = {_id: new ObjectId(jobApplication.jobId)};
        const updateDoc = {
          $set: {
            applicationCount: count
          }
        }
        const result2 = await jobsCollection.updateOne(filter, updateDoc);
        res.send(result);
    })


    app.get('/job-applications/jobs/:jobId', async(req, res)=>{
      const jobId = req.params.jobId;
      const query = {jobId: jobId};
      const result = await jobApplicationsCollection.find(query).toArray();
      res.send(result);
    })

    // changing the status  


    app.patch('/job-applications/:id', async(req, res)=>{
      const id = req.params.id;
      const updateData = req.body;
      const filter = {_id: new ObjectId(id)};
      const updateDoc = {$set:{
        status: updateData.status
      } };
      const result = await jobApplicationsCollection.updateOne(filter, updateDoc);
      res.send(result);
    })

    // Token related APIs

    // Get all tokens
    app.get('/tokens', async(req, res) => {
      try {
        const tokens = await tokenCollection.find().toArray();
        res.send(tokens);
      } catch (error) {
        res.status(500).send({ message: error.message });
      }
    });

    // Get token by ID
    app.get('/tokens/:id', async(req, res) => {
      try {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };
        const token = await tokenCollection.findOne(query);
        
        if (!token) {
          return res.status(404).send({ message: 'Token not found' });
        }
        
        res.send(token);
      } catch (error) {
        res.status(500).send({ message: error.message });
      }
    });

    // Create a new token
    app.post('/tokens', async(req, res) => {
      try {
        const newToken = req.body;
        const result = await tokenCollection.insertOne(newToken);
        res.send(result);
      } catch (error) {
        res.status(500).send({ message: error.message });
      }
    });

    // Update a token (e.g., mark as sold)
    app.patch('/tokens/:id', async(req, res) => {
      try {
        const id = req.params.id;
        const updateData = req.body;
        const filter = { _id: new ObjectId(id) };
        const updateDoc = { $set: updateData };
        const result = await tokenCollection.updateOne(filter, updateDoc);
        
        if (result.matchedCount === 0) {
          return res.status(404).send({ message: 'Token not found' });
        }
        
        res.send(result);
      } catch (error) {
        res.status(500).send({ message: error.message });
      }
    });

    // Delete a token
    app.delete('/tokens/:id', async(req, res) => {
      try {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };
        const result = await tokenCollection.deleteOne(query);
        
        if (result.deletedCount === 0) {
          return res.status(404).send({ message: 'Token not found' });
        }
        
        res.send(result);
      } catch (error) {
        res.status(500).send({ message: error.message });
      }
    });

  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Student Management System');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});