import mysql from 'mysql2/promise'
import { env } from 'app/config/env'

export const connection = mysql.createPool({
	host: env.DB_HOST,
	port: env.DB_PORT as number | undefined,
	database: env.DB_DATABASE,
	user: env.DB_USERNAME,
	password: env.DB_PASSWORD,
})
