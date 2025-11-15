import {disconnectDatabase, databasetype} from "./utils/database.js";
import * as api from "./utils/api.js";

api.getDataFromApi();
disconnectDatabase();
