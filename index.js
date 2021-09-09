const express = require ('express') // importando express

const server = express(); // Servidor

server.use(express.json()); // Reconhecer JSON

const post = ["Full Stack", "Dev Front-end", "Dev Back-end"]


//===========================CRUD==========================//


// Retorna um post - READ ONE

server.get('/post/:index',(req, res) => {
     const { index } = req.params;

     return res.json(post[index]);
})

// Retornar todos os posts - READ ALL

server.get('/post',(req, res) => {
    return res.json(post)
})


// Criar novo post - POST 

server.post('/post', (req, res) => {
    const { name } = req.body;
    post.push(name);

    return res.json(post);
});

// Atualizar post - UPDATE

server.put('/post/:index', (req, res)=> {
    const { index } = req.params;
    const { name } = req.body;

    post[index] = name;

    return res.json(post);
    
});

// Deletar post - DELETE

server.delete ('/post/:index', (req, res) => {
    const { index } = req.params

    post.splice(index, 1);
    return res.json({ message: "O post foi deletado "});

});









server.listen(5500); // Porta

