<template>
  <header>
    <div class="menu-esquerdo">
      <span> <RouterLink to="/">Home</RouterLink> </span>
      <span>|</span>
      <span> <RouterLink to="/livros">Livros</RouterLink> </span>
      <span>|</span>
      <span> <RouterLink to="/autores">Autores</RouterLink> </span>
      <span>|</span>
      <span> <RouterLink to="/editoras">Editoras</RouterLink> </span>
      <span>|</span>
      <span> <RouterLink to="/categorias">Categorias</RouterLink> </span>
    </div>
  </header>
</template>

<style>
header span {
  padding: 0 20px;
}

header {
  background-size: 100%;
  height: 17%;
  font-size: 1.6rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>