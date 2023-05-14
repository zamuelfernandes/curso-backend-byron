const express = require('express')
const app = express()
const port = 5000

app.get('/hello', (req, res)=>{
    res.send('Hello World')

})

app.get('/laurinhagostosa', (req, res)=>{
    res.send('A LAURINHA É GOSTOSA PRA CARALHO!')

})

app.listen(port, () => {
    console.log('A nossa API está rodando na porta ' + port)
})