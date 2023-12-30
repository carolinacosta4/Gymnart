<template>

  <!-- Edit Username Modal -->

  <div class="modal" id="usernameModal">
    <div class="modal-content">
      <div class="titleAndXbtn">
        <p class="modalTitle">Edit your Username</p>
        <span class="close">&times;</span>
      </div>
      <div class="data">
        <div class="curData">
          <p class="label">Current Username:</p>
          <p class="regular fontSize24">Username Placeholder</p>
        </div>
        <div class="newData">
          <label class="label" for="newUsername">New Username:</label>
          <br/>
          <input placeholder="Type here..." id="newUsername"/>
        </div>
      </div>
      <br />
      <div class="btnsBottom">
        <button class="btnCancel">Cancel</button>
        <button class="btnSave">
          Save
        </button>
      </div>
    </div>
  </div>

  <!-- Edit Name Modal -->

  <div class="modal" id="nameModal">
    <div class="modal-content">
      <div class="titleAndXbtn">
        <p class="modalTitle">Edit your Name</p>
        <span class="close">&times;</span>
      </div>
      <div class="data">
        <div class="curData">
          <p class="label">Current Name:</p>
          <p class="regular fontSize24">Name Placeholder</p>
        </div>
        <div class="newData">
          <label class="label" for="newName">New name:</label>
          <br />
          <input placeholder="Type here..." id="newName" />
        </div>
      </div>
      <br />
      <div class="btnsBottom">
        <button class="btnCancel">Cancel</button>
        <button class="btnSave">
          Save
        </button>
      </div>
    </div>
  </div>

  <!-- Edit Email Modal -->

  <div class="modal" id="emailModal">
    <div class="modal-content">
      <div class="titleAndXbtn">
        <p class="modalTitle">Edit your Email</p>
        <span class="close">&times;</span>
      </div>
      <div class="data">
        <div class="curData">
          <p class="label">Current Email:</p>
          <p class="regular fontSize24">Email Placeholder</p>
        </div>
        <div class="newData">
          <label class="label" for="newEmail">New Email:</label>
          <br/>
          <input placeholder="Type here..." id="newEmail" />
        </div>
      </div>
      <br/>
      <div class="btnsBottom">
        <button class="btnCancel">Cancel</button>
        <button class="btnSave">
          Save
        </button>
      </div>
    </div>
  </div>

  <!-- Edit Password Modal -->

  <div class="modal" id="passwordModal">
    <div class="modal-content">
      <div class="titleAndXbtn">
        <p class="modalTitle">Edit your Password</p>
        <span class="close">&times;</span>
      </div>
      <div class="data">
        <div class="curData">
          <p class="label">Current Password:</p>
          <input type="password" placeholder="Type here..."/>
        </div>
        <div class="newData">
          <label class="label" for="newPassword">New Password:</label>
          <br/>
          <input placeholder="Type here..." id="newPassword"/>
        </div>
      </div>
      <br />
      <div class="btnsBottom">
        <button class="btnCancel">Cancel</button>
        <button class="btnSave">
          Save
        </button>
      </div>
    </div>
  </div>

  <!-- Add Athlete Modal -->

  <div class="modal" id="addAthleteModal">
    <div class="modal-content">
      <div class="titleAndXbtn">
        <p class="modalTitle">Add Athlete</p>
        <span class="close">&times;</span>
      </div>

      <div class="inputs">
        <div class="inputsCol">
          <!-- Athlete Name -->

          <div>
            <label for="txtAthleteName" class="label">Name:</label>
            <input type="text" placeholder="Type here..." id="txtAthleteName" />
          </div>

          <!-- Team Acronym -->

          <div>
            <label for="txtAthleteTeamAcronym" class="label">Team Acronym:</label>
            <input type="text" placeholder="Type here..." id="txtAthleteTeamAcronym" />
          </div>

          <!-- Description -->

          <div>
            <label for="txtAthleteDescription" class="label">Description:</label>
            <input type="text" placeholder="Type here..." id="txtAthleteDescription"/>
          </div>

          <!-- Curiosities -->

          <div>
            <label for="txtAthleteCuriosities" class="label">Curiosities:</label>
            <input type="text" placeholder="Type here..." id="txtAthleteCuriosities"/>
          </div>

          <!-- Last Result -->

          <div>
            <label for="txtLastResult" class="label">Last Result:</label>
            <input type="text" placeholder="Type here..." id="txtLastResult" />
          </div>

          <!-- Athlete Picture Url -->

          <div>
            <label for="txtAthletePicUrl" class="label">Picture Url:</label>
            <input type="text" placeholder="Type here..." id="txtAthletePicUrl" />
          </div>
        </div>

        <div class="inputsCol">
          <!-- Team -->

          <div>
            <label for="txtTeam" class="label">Team:</label><br>
            <input type="text" placeholder="Choose Team..." id="txtTeam" />
          </div>

          <!-- Age -->

          <div>
            <label for="numAge" class="label">Age:</label><br>
            <input type="number" placeholder="Type here..." id="numAge" />
          </div>

          <!-- Gold Medals -->

          <div>
            <label for="numGoldMedalsAthlete" class="label">Gold Medals:</label>
            <input type="number" placeholder="Type here..." id="numGoldMedalsAthlete"/>
          </div>

          <!-- Silver Medals -->

          <div>
            <label for="numSilverMedalsAthlete" class="label">Silver Medals:</label>
            <input type="number" placeholder="Type here..." id="numSilverMedalsAthlete"/>
          </div>

          <!-- Bronze Medals -->

          <div>
            <label for="numBronzeMedalsAthlete" class="label">Bronze Medals:</label>
            <input type="number" placeholder="Type here..." id="numBronzeMedalsAthlete"/>
          </div>

          <!-- Thumbnail Picture Url -->

          <div>
            <label for="txtThumbPicUrl" class="label">Thumbnail Picture Url:</label>
            <input type="text" placeholder="Type here..." id="txtThumbPicUrl" />
          </div>
        </div>
      </div>

      <br />

      <div class="btnsBottom">
        <button class="btnCancel">Cancel</button>
        <button class="btnSave">
          Save
        </button>
      </div>
    </div>
  </div>

  <!-- Add Team Modal -->

  <div class="modal" id="addTeamModal">
    <div class="modal-content">
      <div class="titleAndXbtn">
        <p class="modalTitle">Add Team</p>
        <span class="close">&times;</span>
      </div>

      <div class="inputsTeam">
        <div class="inputsCol">

          <!-- Team Name -->

          <div>
            <label for="txtTeamName" class="label">Name:</label>
            <input type="text" placeholder="Type here..." id="txtTeamName" />
          </div>

          <!-- Flag Icon Url -->
          
          <div>
            <label for="txtFlagIcon" class="label">Flag Icon Url:</label>
            <input type="text" placeholder="Type here..." id="txtFlagIcon"/>
          </div>

          <!-- Team Picture Url -->
          
          <div>
            <label for="txtTeamPic" class="label">Team Picture Url:</label>
            <input type="text" placeholder="Type here..." id="txtTeamPic"/>
          </div>

          <!-- Coaches List -->

          <div>
            <label for="txtCoaches" class="label">Coaches:</label>
            <input type="text" placeholder="Type here..." id="txtCoaches" />
          </div>
        </div>

        <div class="inputsCol">
          <!-- Team Acronym -->

          <div>
            <label for="txtTeamAcronym" class="label">Team Acronym:</label>
            <input type="text" placeholder="Type here..." id="txtTeamAcronym" />
          </div>

          <!-- Gold Medals -->

          <div>
            <label for="numGoldMedalsTeam" class="label">Gold Medals:</label>
            <input type="number" placeholder="Type here..." id="numGoldMedalsTeam"/>
          </div>

          <!-- Silver Medals -->

          <div>
            <label for="numSilverMedalsTeam" class="label">Silver Medals:</label>
            <input type="number" placeholder="Type here..." id="numSilverMedalsTeam"/>
          </div>

          <!-- Bronze Medals -->

          <div>
            <label for="numBronzeMedalsTeam" class="label">Bronze Medals:</label>
            <input type="number" placeholder="Type here..." id="numBronzeMedalsTeam"/>
          </div>
        </div>
      </div>

      <br />

      <div class="btnsBottom">
        <button class="btnCancel">Cancel</button>
        <button class="btnSave">
          Save
        </button>
      </div>
    </div>
  </div>

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



<script>

</script>

<style lang="css" scoped>
  @import '../assets/modals.css';
</style>
