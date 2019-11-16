const express = require('express')

const app = express()

app.set('secret', 'qweasd')

app.use(require('cors')())
app.use(express.json())
app.use('/upload', express.static(__dirname + '/uploads'))

require('./plugins/db')(app)
require('./routes/admin/index')(app)
require('./routes/web/index')(app)

app.listen(3000, () => {
  console.log('server is already...');
})