// Exclusivo do typescript, nao existe no js
// similar ao uso do java

interface User {
    nome: string,
    email: string,
    address?: string
}

function getUser() : User{
    return {
        nome: 'Teste',
        email: 'teste@gmail.com'
    }
}

function setUser(usuario : User) {
    // ...
}