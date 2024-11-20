import express from "express";

const posts = [
    {
        id: 1,
        descricao: "Uma foto teste",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 2,
        descricao: "Outro post com a mesma imagem",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 3,
        descricao: "Mais um post",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 4,
        descricao: "Post número 4",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 5,
        descricao: "Post número 5",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 6,
        descricao: "Último post",
        imagem: "https://placecats.com/millie/300/150"
    }
];

const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor escutando...");
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

function findPostById(id){
    return posts.findIndex((post) => {
        return post.id === Number(id);
    });
};

app.get("/posts/:id", (req, res) => {
    const index = findPostById(req.params.id);
    res.status(200).json(posts[index]);
});