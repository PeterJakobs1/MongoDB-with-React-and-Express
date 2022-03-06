import express from 'express';


const app = express();

app.use(express.static("../client/dist/"));


const server = app.listen(process.env.PORT || 3000, () => {
    console.log(`server started on http://localhost:${server.address().port}`);
});

// heroku login   git remote    heroku git:remote -a lecture-7
// heroku kommandoer = heroku login & heroku git:remote
// git remote