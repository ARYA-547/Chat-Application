import { Client, Databases, Account } from "appwrite";

export const PROJECT_ID = "66973ea50038698fdd2d";
export const DATABASE_ID = "66974021000bc33e7ee6";
export const COLLECTION_ID_MESSAGES = "66974039003401a77de4";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("66973ea50038698fdd2d");

export const databases = new Databases(client);
export const account = new Account(client);
export default client;
