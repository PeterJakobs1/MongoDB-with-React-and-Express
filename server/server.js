import express from 'express';


const app = express();


const server = app.listen(process.env.PORT || 3000, () => {
    console.log(`server started on http://localhost:${server.address().port}`);
});

// heroku login   git remote    heroku git:remote -a lecture-7