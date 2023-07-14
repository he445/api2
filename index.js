require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDatabase = require('./src/database/database.js');
const userRoute = require('./src/routes/UserRouter.js');
const authRoute = require('./src/routes/auth.route.js');
const swaggerRoute = require('./src/routes/swagger.route.js');

const InfluencerRoute = require('./src/routes/Influencer.route.js');
const port = process.env.PORT || 3001;
const app = express();

connectDatabase();
app.use(cors());
app.use(express.json());

app.use('/auth', authRoute);
app.use('/influencers', InfluencerRoute);
app.use('/users', userRoute);
app.use('/api-docs', swaggerRoute);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
