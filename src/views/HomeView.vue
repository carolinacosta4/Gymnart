<template>
  <div id="main">
    <img src="@/assets/gymnartHomepage.png" alt="">
    <p>Women's artistic gymnastics has a rich history of challenges and impressive achievements. Athletes like Nadia Comăneci and Olga Korbut broke barriers in the 1970s and 1980s with their grace and strength, inspiring future generations. Today, gymnasts continue to captivate audiences by pushing boundaries and striving for perfection.</p>
    <div id="btnGrid">
      <button><img src="@/assets/paralels.png" alt=""></button>
      <button><img src="@/assets/beam.png" alt=""></button>
      <button><img src="@/assets/solo.png" alt=""></button>
      <button><img src="@/assets/vault.png" alt=""></button>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="css">
#main{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

#main p{
  margin: 2em 3em 4em 3em;
  text-align: left;
  font-size: 16px;
}

#btnGrid{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  column-gap: 4em;
  row-gap: 2em;
}
</style>