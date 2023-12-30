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
            <v-card class="modal-content modalTitle" title="Edit your Name">
              <!-- <span class="close" @click="isActive.value = false">&times;</span> -->
              <v-card-text class="data">
                <div class="curData">
                  <p class="label">Current Name:</p>
                  <p class="regular fontSize24">{{ user.name }}</p>
                </div>
                <div class="newData">
                  <label class="label" for="newName">New name:</label>
                  <br/>
                  <input type="text" v-model="newName" placeholder="Type here..." id="newName" />
                </div>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text="CANCEL" @click="isActive.value = false"></v-btn>
                <v-btn @click="editName">SAVE</v-btn>
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
          <v-dialog width="500">
            <template v-slot:activator="{ props }">
              <img src="../assets/edit.svg" v-bind="props">
            </template>
            <template v-slot:default="{ isActive }">
              <v-card class="modal-content modalTitle" title="Edit your Username">
                <!-- <span class="close" @click="isActive.value = false">&times;</span> -->
                <v-card-text class="data">
                  <div class="curData">
                    <p class="label">Current Username:</p>
                    <p class="regular fontSize24">{{ user.username }}</p>
                  </div>
                  <div class="newData">
                    <label class="label" for="newUsername">New Username:</label>
                    <br/>
                    <input type="text" v-model="newUsername" placeholder="Type here..." id="newUsername" />
                  </div>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn text="CANCEL" @click="isActive.value = false"></v-btn>
                  <v-btn @click="editUsername">SAVE</v-btn>
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
              <v-card class="modal-content modalTitle" title="Edit your Email">
                <!-- <span class="close" @click="isActive.value = false">&times;</span> -->
                <v-card-text class="data">
                  <div class="curData">
                    <p class="label">Current Email:</p>
                    <p class="regular fontSize24">{{ user.email }}</p>
                  </div>
                  <div class="newData">
                    <label class="label" for="newEmail">New Email:</label>
                    <br/>
                    <input type="text" v-model="newEmail" placeholder="Type here..." id="newEmail" />
                  </div>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn text="CANCEL" @click="isActive.value = false"></v-btn>
                  <v-btn @click="editEmail">SAVE</v-btn>
                </v-card-actions>
              </v-card>
            </template>
          </v-dialog>
        </div>
        <p class="fontLight">Password</p>
        <div class="edit4">
          <div id="password">
            <p class="lightRed" v-for="index in passwordUser.length">•</p>
          </div>
          <v-dialog width="500">
            <template v-slot:activator="{ props }">
              <img src="../assets/edit.svg" v-bind="props">
            </template>
            <template v-slot:default="{ isActive }">
              <v-card class="modal-content modalTitle" title="Edit your Password">
                <!-- <span class="close" @click="isActive.value = false">&times;</span> -->
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
                  <v-btn text="CANCEL" @click="isActive.value = false"></v-btn>
                  <v-btn @click="editPassword">SAVE</v-btn>
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
</template>

<script>
import { useUserStore } from '../stores/users';

  export default {
    data() {
      return {
        userStore: useUserStore(),
        newName: "",
        newUsername: "",
        newEmail: "",
        oldPassword: "",
        newPassword: ""
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
        this.$router.push({name: 'landingPage'})
        this.userStore.logout()
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
        if(this.oldPassword == this.user.password){
          this.userStore.editPassword(this.newPassword)
        }else{
          alert("Wrong password")
        }
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
  padding: 2rem;
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



<script>

</script>

<style lang="css" scoped>
  @import '../assets/modals.css';
</style>
