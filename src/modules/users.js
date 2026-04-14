const fs = require('node:fs');
const path = require('node: path')

const getUsers = () => {
    const filePath = path.join(__dirname, '../data/users.json')
    return fs.readFileSync(filePath)
}

module.exports = getUsers;