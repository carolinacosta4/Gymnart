<template>
  <div id="main" v-if="userStore.isUser">
    <div id="account">
      <div class="edit">
        <h1>Hi, {{ user.name }}!</h1>
        <v-dialog width="500">
          <template v-slot:activator="{ props }">
            <img src="../assets/edit.svg" v-bind="props">
          </template>
          <template v-slot:default="{ isActive }">
            <v-card>
              <div id="head">
                <h1 class="modalTitle">Edit your Name</h1>
              </div>
              <v-card-text class="data">
                <div class="curData">
                  <p class="label">Current Name:</p>
                  <p class="regular fontSize22">{{ user.name }}</p>
                </div>
                <div class="newData">
                  <label class="label" for="newName">New name:</label>
                  <br/>
                  <input type="text" v-model="newName" placeholder="Type here..." id="newName" />
                </div>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text="CANCEL" @click="isActive.value = false" class="cancelBtn"></v-btn>
                <v-btn @click="editName" class="btnSave">SAVE</v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </div>
      <div v-if="user.medals.length > 0">
        <div id="medalsDisplay">
          <span v-for="medal in user.medals" :key="user.username">
            <img :src="`/src/assets/${medal}`" class="medal">
          </span>
        </div>
      </div>
      <div v-else>
        <span></span>
      </div>
      <div>
        <v-dialog width="500">
          <template v-slot:activator="{ props }">
            <img :src="`/src/assets/${user.profilePicture}`" id="maria" v-bind="props">
          </template>
          <template v-slot:default="{ isActive }">
            <v-card>
              <div id="head">
                <h1 class="modalTitle">Edit your Picture</h1>
              </div>
              <v-card-text class="data">
                <div class="avatars">
                  <input type="radio" name="avatar" id="avatar1" class="avatar" value="mario.png" v-model="selectedAvatar">
                  <label for="avatar1">
                    <img src="/src/assets/mario.png" style="width: 12em; background-color: #ED2E2F;"></label>
                  <input type="radio" name="avatar" id="avatar2" class="avatar" value="maria.png" v-model="selectedAvatar">
                  <label for="avatar2">
                    <img src="/src/assets/maria.png" style="width: 12em; background-color: #ED2E2F;">
                  </label>
                </div>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text="CANCEL" @click="isActive.value = false" class="cancelBtn"></v-btn>
                <v-btn @click="editAvatar" class="btnSave">SAVE</v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </div>
      <div>
        <p class="fontLight">Username</p>
        <div class="edit4">
          <p class="lightRed">{{ user.username }}</p>
          <v-dialog width="500">
            <template v-slot:activator="{ props }">
              <img src="../assets/edit.svg" v-bind="props">
            </template>
            <template v-slot:default="{ isActive }">
              <v-card>
                <div id="head">
                  <h1 class="modalTitle">Edit your Username</h1>
                </div>
                <v-card-text class="data">
                  <div class="curData">
                    <p class="label">Current Username:</p>
                    <p class="regular fontSize22">{{ user.username }}</p>
                  </div>
                  <div class="newData">
                    <label class="label" for="newUsername">New Username:</label>
                    <br/>
                    <input type="text" v-model="newUsername" placeholder="Type here..." id="newUsername" />
                  </div>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn text="CANCEL" @click="isActive.value = false" class="cancelBtn"></v-btn>
                  <v-btn @click="editUsername" class="btnSave">SAVE</v-btn>
                </v-card-actions>
              </v-card>
            </template>
        </v-dialog>
        </div>
        <p class="fontLight">Email</p>
        <div class="edit4">
          <p class="lightRed">{{ user.email }}</p>
          <v-dialog width="500">
            <template v-slot:activator="{ props }">
              <img src="../assets/edit.svg" v-bind="props">
            </template>
            <template v-slot:default="{ isActive }">
              <v-card>
                <div id="head">
                  <h1 class="modalTitle">Edit your Name</h1>
                </div>
                <v-card-text class="data">
                  <div class="curData">
                    <p class="label">Current Email:</p>
                    <p class="regular fontSize22">{{ user.email }}</p>
                  </div>
                  <div class="newData">
                    <label class="label" for="newEmail">New Email:</label>
                    <br/>
                    <input type="text" v-model="newEmail" placeholder="Type here..." id="newEmail" />
                  </div>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn text="CANCEL" @click="isActive.value = false" class="cancelBtn"></v-btn>
                  <v-btn @click="editEmail" class="btnSave">SAVE</v-btn>
                </v-card-actions>
              </v-card>
            </template>
          </v-dialog>
        </div>
        <p class="fontLight">Password</p>
        <div class="edit4">
          <div id="password">
            <p class="lightRed" v-for="index in passwordUser.length" :key="index">•</p>
          </div>
          <v-dialog width="500">
            <template v-slot:activator="{ props }">
              <img src="../assets/edit.svg" v-bind="props">
            </template>
            <template v-slot:default="{ isActive }">
              <v-card>
                <div id="head">
                  <h1 class="modalTitle">Edit your Name</h1>
                </div>
                <v-card-text class="data">
                  <div class="curData">
                    <p class="label">Current Password:</p>
                    <input type="password" placeholder="Type here..." v-model="oldPassword"/>
                  </div>
                  <div class="newData">
                    <label class="label" for="newPassword">New Password:</label>
                    <br/>
                    <input type="password" v-model="newPassword" placeholder="Type here..." id="newPassword" />
                  </div>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn text="CANCEL" @click="isActive.value = false" class="cancelBtn"></v-btn>
                  <v-btn @click="editPassword" class="btnSave">SAVE</v-btn>
                </v-card-actions>
              </v-card>
            </template>
          </v-dialog>
        </div>
      </div>
      <div>
        <button class="red" @click="logout()">Logout</button>
      </div>
    </div>
    <div v-if="user.type == 'admin'" id="manage">
      <button @click="this.$router.push({name: 'manageUsers'})">Manage Users</button>
      <button @click="this.$router.push({name: 'manageAthletes'})">Manage Athletes</button>
      <button @click="this.$router.push({name: 'manageTeams'})">Manage Teams</button>
    </div>
  </div>
  <img src="../assets/backgrounds/redWavesRigthBottom.svg" alt="" id="ondas">
</template>

<script>
import{useUserStore}from '../stores/users';export default{data(){return{userStore:useUserStore(),newName:"",newUsername:"",newEmail:"",oldPassword:"",newPassword:"",selectedAvatar:"",}},computed:{user(){return this.userStore.getUserLogged},passwordUser(){return this.userStore.getUserLogged.password.split('')},userMedals(){return this.user.medals}},methods:{logout(){this.$router.push({name:'landingPage'})
this.userStore.logout()},editName(){if(this.newName!=""){this.userStore.editName(this.newName)}},editAvatar(){if(this.selectedAvatar!=""){this.userStore.editAvatar(this.selectedAvatar)}},editUsername(){if(this.newUsername!=""){this.userStore.editUsername(this.newUsername)}},editEmail(){if(this.newEmail!=""){this.userStore.editEmail(this.newEmail)}},editPassword(){if(this.oldPassword==this.user.password){this.userStore.editPassword(this.newPassword)}else{alert("Wrong password")}},medals(){if(this.userMedals){}}},}
</script>

<style lang="css" scoped>
@import '../assets/modals.css';
@font-face {
  font-family: Saphile;
  src: url(../assets/Saphile/Saphile-Regular.otf);
  font-display: swap;
}

@font-face {
  font-family: Lexend Deca Regular;
  src: url(../assets/Lexend_Deca/LexendDeca-Regular.ttf);
  font-display: swap;
}

@font-face {
  font-family: Lexend Deca Light;
  src: url(../assets/Lexend_Deca/LexendDeca-Light.ttf);
  font-display: swap;
}

@font-face {
  font-family: Lexend Deca SemiBold;
  src: url(../assets/Lexend_Deca/LexendDeca-SemiBold.ttf);
  font-display: swap;
}

@font-face {
  font-family: Lexend Deca ExtraLight;
  src: url(../assets/Lexend_Deca/LexendDeca-ExtraLight.ttf);
  font-display: swap;
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
  padding: 2rem;
  margin-left: 6em;
  height: 40em;
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

.medal{
  width: 2em;
}

#medalsDisplay{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}

#ondas{
	position: absolute;
	display: flex;
	height: 30%;
	right: 0;
  bottom: 0;
}

input[type="radio"]{
  display: none;
}
</style>