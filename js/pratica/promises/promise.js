// criando um promise com fetch

function userGit() {
  fetch("https://api.github.com/users/LucasDamascenoo")
    .then((require) => {
      require.json().then((data) => {
        console.log(data);
      });
    })
    .catch((err) => {
      console.log("error", err);
    });
}

// criando uma funcao async

async function userGit2() {
  const result = await fetch("https://api.github.com/users/LucasDamascenoo");
}

userGit2();

// async cria uma funcao retornar uma promessa
// await faz a funcao esperar por uma promessa

// try (utilizado para chamadas sem erro)
// catch (utilizado para chamadas com erro)
