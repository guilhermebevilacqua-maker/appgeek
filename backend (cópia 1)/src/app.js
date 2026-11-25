import express from "express";
// variavel pára acessar os metodos express
const app = express();
// ativa o leitor json
app.use(express.json())
// simula um banco de dados
let usuario = [];
//rota saida de dados 
app.get('/usuarios',(req, res)=>{
   const nomeBusca = req.query.nome;
   if(nomeBusca){
       const nomes = usuario.filter( (i)=> {
            return i.nome.toLowerCase().includes(nomeBusca.toLowerCase());
       } )
       return res.status(200).json(nomes);
   }
    res.json([...usuario]);
})

app.post('/usuarios', (req, res)=> {
   console.log(req.body);
    usuario.push(req.body);
   res.status(201).json({mensagem:"Cliente Cadastro"})

})




app.listen(3000, ()=>{
    console.log("servidor rodando! ")
})
// http://localhost:3000