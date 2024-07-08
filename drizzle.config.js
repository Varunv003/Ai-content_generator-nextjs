/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://ai_db_owner:6JETwGRt9YsN@ep-holy-snowflake-a5mtkm80.us-east-2.aws.neon.tech/ai_db?sslmode=require',
    }
  };