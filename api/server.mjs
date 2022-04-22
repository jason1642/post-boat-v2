import app from './app.mjs'
import 'dotenv/config';
import db from './database.mjs';
const port =  3820; 
db.connect()
app.listen(3820, () => console.log('listening on port ' + port));
 