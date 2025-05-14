import mongoose from 'mongoose'
import { countConnections } from '../helpers/checkConnect'
import config from '../configs/config.mongodb'
console.log(`[MongoDB] Config: ${JSON.stringify(config)}`)

// Destructure config
const {
  db: { host, port, name }
} = config

// Kết nối MongoDB URI
const connectString: string = `mongodb://${host}:${port}/${name}`
console.log(`[MongoDB] URI: ${connectString}`)

class Database {
  private static instance: Database
  public static connectString: string = connectString

  private constructor() {
    this.connect()
  }

  private connect(type: string = 'mongodb'): void {
    mongoose
      .connect(connectString)
      .then(() => {
        console.log(`[MongoDB] ✅ Connected successfully`)
        countConnections() // gọi hàm đếm nếu có
      })
      .catch((err: Error) => {
        console.error(`[MongoDB] ❌ Connection failed: ${err.message}`)
      })
  }

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database()
    }
    return Database.instance
  }
}

// Gọi kết nối ngay khi import
const instanceMongodb = Database.getInstance()

export default instanceMongodb
