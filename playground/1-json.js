const fs = require('fs')
const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON=dataBuffer.toString()
const data=JSON.parse(dataJSON)
data.title="Bahubali"
data.author="Rajmouli"
const updateData=JSON.stringify(data)
fs.writeFileSync('1-json.json',updateData)
