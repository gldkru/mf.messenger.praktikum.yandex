const express = require('express')
const path = require('path')

const app = express()
const PORT = 4000

app.use(express.static(path.join(__dirname, 'dist')))

app.use('/static', express.static(path.join(__dirname, 'public')))

app.listen(PORT, function() {
	console.log(`Example app listening on port ${PORT}!`)
})
