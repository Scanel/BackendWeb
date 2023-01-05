import "dotenv/config";
import { Connection, createConnection, createPool } from "mysql";

const conexion = createPool({
    // connectionLimit: 10,
    // host: "us-cdbr-east-06.cleardb.net",
    // user: "bdcc8965df360a",
    // password: "6a4b64b8",
    // database: "heroku_5f8cdd548b25305"

    host: "us-east.connect.psdb.cloud",
    user: "1mh113f8jy2y6cjexsdo",
    password: "pscale_pw_ENU9mmMC3D6sXMEwGLwIogq14aXwJ47qTUbnRO40Ds1",
    database: "virtschool",
    ssl: {
      rejectUnauthorized: false
    }
})

conexion.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
          console.error('Database connection was closed.')
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
          console.error('Database has too many connections.')
        }
        if (err.code === 'ECONNREFUSED') {
          console.error('Database connection was refused.')
        }
      }
    
      if (connection) connection.release()
    
      return
})



// async function dbConnect(): Promise<void>{
//     await conexion.connect();
// }

export {conexion};

// export default dbConnect;