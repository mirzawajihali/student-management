const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

require('dotenv').config();




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
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");



    // jobs related apis 
    const jobsCollection = client.db('studentManagement').collection('jobs');
    const jobApplicationsCollection = client.db('studentManagement').collection('jobApplications');

    app.get("/jobs", async(req, res)=>{
      const email = req.query.email;
      let query = {};
      if(email){
        query = {hr_email: email};
      }
      const cursor = jobsCollection.find(query);
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

    app.get('/job-applications', async(req, res)=>{
        const email = req.query.email;
        const query = {email: email};
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

  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Student Management System');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});