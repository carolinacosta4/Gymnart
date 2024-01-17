<template>
    <div id="container">
        <div id="mainDiv">
            <img src="../assets/sadFace.svg" alt="Sad face icon" id="iconSadFace">
            <div>
                <h1>Oops...</h1>
                <p>Looks like this page does not exist!</p>
                <button @click="this.$router.push('/')"> Go back home </button>
            </div>
        </div>
        <img src="../assets/backgrounds/redWavesRigthBottom.svg" id="redWaves">
    </div>
</template>

<script setup>
</script>

<style lang="css" scoped>

@font-face {
    font-family: LexendDecaRegular;
    src: url(../assets/Lexend_Deca/LexendDeca-Regular.ttf);
}

@font-face {
    font-family: Saphile;
    src: url(../assets/Saphile/Saphile-Regular.otf);
}

#container{
  padding: 2rem;
}

h1{
    font-family: Saphile;
    color: #ed2e2f;
    font-size: 5em;
}

p{
    font-family: LexendDecaRegular;
    color: #4857a0;
    font-size: 2em;
    margin-top: 0.5em;
}

button{
    color: #4857a0;
    font-family: LexendDecaRegular;
    font-size: 1.5em;
    border: 2px solid #4857a0;
    border-radius: 0.6em;
    padding-left: 1.5em;
    padding-right: 1.5em;
    margin-top: 2em;
}

#mainDiv{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: left;
}

#iconSadFace{
    width: auto;
    height: 15em;
}

#redWaves{
    position: fixed;
    width: auto;
    height: 20em;
    margin: -1em;
    bottom: 0;
    right: 0;
}

#container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50em;

}

</style>