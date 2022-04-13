import app from './app.mjs'
import 'dotenv/config';
import db from './database.mjs';
const port = process.env.PORT || 3820; 
db.connect()
app.listen(port, () => console.log('listening on port ' + port));
