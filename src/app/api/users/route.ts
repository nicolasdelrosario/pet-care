import { RowDataPacket } from 'mysql2'
import { NextResponse } from 'next/server'
import { connection } from 'app/app/api/connection'

export async function GET() {
	try {
		const query = ` SELECT * FROM users `

		const [result] = await connection.query<RowDataPacket[]>(query)

		const users = result.map(user => ({
			username: user.username,
			email: user.email,
		}))

		return NextResponse.json(users, { status: 200 })
	} catch (err: unknown) {
		return NextResponse.json({ error: err }, { status: 500 })
	}
}
