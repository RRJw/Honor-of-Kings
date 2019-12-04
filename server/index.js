const express = require('express')

const app = express()

app.set('secret', 'qweasd') //jwt验证

app.use(require('cors')())
app.use(express.json())
app.use('/upload', express.static(__dirname + '/uploads'))
app.use('/admin', express.static(__dirname + '/admin'))
app.use('/', express.static(__dirname + '/web')) //将后台的静态资源挂载到服务端

require('./plugins/db')(app)
require('./routes/admin/index')(app)
require('./routes/web/index')(app)

app.listen(3000, () => {
  console.log('server is already...');
})