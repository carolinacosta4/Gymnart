<template>
  <div id="main">
    <div id="account">
      <div class="edit">
        <h1>Hi, {{ user.name }}!</h1>
        <v-dialog width="500">
          <template v-slot:activator="{ props }">
            <img src="../assets/edit.svg" v-bind="props">
          </template>
          <template v-slot:default="{ isActive }">
            <v-card title="Dialog">
              <v-card-text>
                <input type="text" v-model="newName" style="background-color: aqua;">
              </v-card-text>

              <v-card-actions>
                <v-btn @click="editName">SAVE</v-btn>
                <v-spacer></v-spacer>

                <v-btn
                  text="Close Dialog"
                  @click="isActive.value = false"
                ></v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </div>
      <div>
        <p>Badge</p>
      </div>
      <div>
        <img src="../assets/maria.png" id="maria">
      </div>
      <div>
        <p class="fontLight">Username</p>
        <div class="edit4">
          <p class="lightRed">{{ user.username }}</p>
          <img src="../assets/edit.svg" alt="">
        </div>
        <p class="fontLight">Email</p>
        <div class="edit4">
          <p class="lightRed">{{ user.email }}</p>
          <img src="../assets/edit.svg" alt="">
        </div>
        <p class="fontLight">Password</p>
        <div class="edit4">
          <div id="password">
            <p class="lightRed" v-for="index in passwordUser.length">•</p>
          </div>
          <img src="../assets/edit.svg" alt="">
        </div>
      </div>
      <div>
        <button class="red" @click="logout">Logout</button>
      </div>
    </div>
    <div v-if="user.type == 'admin'" id="manage">
      <button @click="this.$router.push({name: 'manageUsers'})">Manage Users</button>
      <button @click="this.$router.push({name: 'manageAthletes'})">Manage Athletes</button>
      <button @click="this.$router.push({name: 'manageTeams'})">Manage Teams</button>
    </div>
  </div>
</template>

<script>
import { useUserStore } from '../stores/users';

  export default {
    data() {
      return {
        userStore: useUserStore(),
        newName: ""
      }
    },

    computed: {
      user() {
        return this.userStore.getUser
      },

      passwordUser(){
        return this.userStore.getUser.password.split('')
      }
    },

    methods: {
      logout() {
        this.userStore.logout()
        this.$router.push({name: 'landingPage'})
      },

      editName() {
        this.userStore.editName(this.newName)
      },

      editUsername() {
        this.userStore.editUsername(this.newUsername)
      },

      editEmail() {
        this.userStore.editEmail(this.newEmail)
      },

      editPassword() {
        this.userStore.editPassword(this.newPassword)
      },
    },
  }
</script>

<style lang="css" scoped>
@font-face {
  font-family: Saphile;
  src: url(../assets/Saphile/Saphile-Regular.otf);
}

@font-face {
  font-family: Lexend Deca Regular;
  src: url(../assets/Lexend_Deca/LexendDeca-Regular.ttf);
}

@font-face {
  font-family: Lexend Deca Light;
  src: url(../assets/Lexend_Deca/LexendDeca-Light.ttf);
}

@font-face {
  font-family: Lexend Deca SemiBold;
  src: url(../assets/Lexend_Deca/LexendDeca-SemiBold.ttf);
}

@font-face {
  font-family: Lexend Deca ExtraLight;
  src: url(../assets/Lexend_Deca/LexendDeca-ExtraLight.ttf);
}    

#password{
  display: flex;
  flex-direction: row;
}

#main{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

#account{
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr 4fr 1fr;
  column-gap: 2em;
  width: 60%;
}

.lightRed{
  color: #F16A64;
  font-family: Lexend Deca SemiBold;
  font-size: 22px;
}

h1{
  color: #F16A64;
  font-family: Lexend Deca SemiBold;
  font-size: 30px;
}

.red{
  color: #ED2E2F;
  text-decoration: underline;
  font-family: Lexend Deca SemiBold;
}

.fontLight{
  font-family: Lexend Deca Light;
  font-size: 18px;
}

.edit, .edit4{
  display: grid;
  grid-template-columns: 1fr 1em;
  justify-content: center;
  align-items: center;
}

.edit4{
  margin-bottom: 2em;
}

.edit img, .edit4 img{
  width: 1em;
}

.edit{
  margin-bottom: 1em;
}

#maria{
  width: 16em;
  border-radius: 15px;
}

#manage{
  display: flex;
  flex-direction: row;
  column-gap: 6em;
}

#manage button{
  background-color: #F16A64;
  border-radius: 10px;
  height: 2.6em;
  width: 10em;
  font-size: 18px;
  color: #FCF3F3;
  font-family: Lexend Deca ExtraLight;
}
</style>
