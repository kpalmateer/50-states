module.exports = {
  "development": {
    "storage": "states.db",
    "dialect": "sqlite"
  },
  "production": {
    "username": "kylep",
    "password": process.env.DB_PASSWORD,
    "database": "fifty-states-visited-database",
    "host": "fifty-states-visited-database-server-kpalm.database.windows.net",
    "dialect": "mssql"
  }
}
