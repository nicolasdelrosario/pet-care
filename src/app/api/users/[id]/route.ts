import { RowDataPacket } from 'mysql2'
import { NextResponse } from 'next/server'
import { connection } from 'app/app/api/connection'

interface IParams {
	params: { id: string }
}

export async function GET(request: Request, { params }: IParams) {
	const id = params.id

	try {
		const query = ` SELECT * FROM users WHERE id = ? `

		const [result] = await connection.query<RowDataPacket[]>(query, [id])

		return NextResponse.json(result, { status: 200 })
	} catch (err: unknown) {
		return NextResponse.json({ error: err }, { status: 500 })
	}
}
