const db = require('./modules/connect-mysql')
const express = require('express')
const app = express()

app.get('/staffs', async function (req, res) {
	let sortColumn = req.query.sortColumn || 'staffNo'
	let order = req.query.order || 'asc'
	let pageCount = req.query.pageCount || 5
	let pageNumber = req.query.pageNumber || 1
	const sql = `SELECT * FROM staff order by ${sortColumn} ${order} LIMIT ${
		pageCount * (pageNumber - 1)
	},${pageCount};`
	const [total] = await db.query(sql)
	res.json(total)
})
app.get('/dept', async function (req, res) {
	let where = 'where 1'
	if (req.query.staffNo) {
		where += ` AND staffNo = ${req.query.staffNo}`
	}
	const sql = `SELECT  dept.*  FROM staff JOIN dept ON deptId = dept.id ${where} ;`
	const [total] = await db.query(sql)
	res.json(total)
})

app.listen(9988, () => {
	console.log(new Date().toLocaleString())
	console.log(`App running on port 9988...😊 `)
})
