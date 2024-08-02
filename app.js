import express from 'express'
const servidor = express()

servidor.listen(5001, () => console.log("Ola"))

servidor.get('/calculadora/:numero1/:numero2', (req, resp) => {
    let numero1 = Number(req.params.numero1);
    let numero2 = Number(req.params.numero2);
    let soma = numero1 + numero2
    resp.send('A soma é .-+' + soma)
})