// Import Mongoose
import mongoose from "mongoose";
// Logging
import Logger from "./Logger";
// Properties
import properties from "../properties.js";

// Start Import Models

import CourseModel from "../models/Sgela_db/CourseModel";
import InstructorModel from "../models/Sgela_db/InstructorModel";
import StudentModel from "../models/Sgela_db/StudentModel";
import UserModel from "../models/Sgela_db/UserModel";

// End Import Models

class Database {
  constructor() {}

  /**
   * Init database
   */
  async init() {
    await this.authenticate();
    Logger.info("MongoDB connected at: " + properties.Sgela_db_dbUrl);

    // Start Init Models

		CourseModel.init();
		InstructorModel.init();
		StudentModel.init();
		UserModel.init();
 // End Init Models
  }

  /**
   * Start database connection
   */
  async authenticate() {
    Logger.info("Authenticating to the databases...");
    try {
      this.dbConnection_Sgela_db = await mongoose.connect(
        "mongodb://" + properties.Sgela_db_dbUrl,
        { useNewUrlParser: true }
      );
    } catch (err) {
      Logger.error(`Failed connection to the DB: ${err.message}`);
      Logger.error(err);
      await new Promise(resolve => setTimeout(resolve, 5000));
      await this.authenticate();
    }
  }

  /**
   * Get connection db
   */
  getConnection() {
    return this.dbConnection_Sgela_db;
  }
}

export default new Database();
