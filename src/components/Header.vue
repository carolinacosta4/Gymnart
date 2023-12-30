<template>
    <div id="header">
        <RouterLink :to="{ name: 'account', params:{id: user.username}  }" class="text"><img src="../assets/iconsNav/user.svg" alt="user icon" class="icon" id="user" @click="addToList('user')"></RouterLink>
        <span class="pr-3"></span>
        <div id="mainIcons">
            <div class="divHover">
                <RouterLink :to="{ name: 'search' }" class="text" ><img src="../assets/iconsNav/search.svg" alt="console icon outlined" id="search" class="icon" @click="addToList('search')"></RouterLink>
                <img src="../assets/iconsNav/searchHover.svg" class="hover" alt="" id="searchHover">
                <span class="pr-3"></span>
            </div>

            <div class="divHover">
                <RouterLink :to="{ name: 'home' }" class="text"><img src="../assets/iconsNav/home.svg" alt="home icon outlined" id="home" class="icon" @click="addToList('home')"></RouterLink>
                <img src="../assets/iconsNav/homeHover.svg" class="hover" alt="" id="homeHover">
                <span class="pr-3"></span>
            </div>

            <div class="divHover">
                <RouterLink :to="{name: 'dashboard'}" class="text"><img src="../assets/iconsNav/dashboard.svg" alt="dashboard icon outlined" id="dashboard" class="icon" @click="addToList('dashboard')"></RouterLink>
                <img src="../assets/iconsNav/dashboardHover.svg" class="hover" alt="" id="dashboardHover">
                <span class="pr-3"></span>
            </div>

            <div class="divHover">
                <RouterLink :to="{ name: 'favorites' }" class="text"><img src="../assets/iconsNav/favorites.svg" alt="heart icon outlined" id="favorites" class="icon" @click="addToList('favorites')"></RouterLink>
                <img src="../assets/iconsNav/favoritesHover.svg" class="hover" alt="" id="favoritesHover">
                <span class="pr-3"></span>
            </div>

            <div class="divHover">
                <RouterLink :to="{ name: 'calendar' }" class="text"><img src="../assets/iconsNav/calendar.svg" alt="calendar icon outlined" id="calendar" class="icon" @click="addToList('calendar')"></RouterLink>
                <img src="../assets/iconsNav/calendarHover.svg" class="hover" alt="" id="calendarHover">
                <span class="pr-3"></span>
            </div>

            <div class="divHover">
                <RouterLink :to="{ name: 'quiz' }" class="text"><img src="../assets/iconsNav/quiz.svg" alt="console icon outlined" class="icon" id="quiz" @click="addToList('quiz')"></RouterLink>
                <img src="../assets/iconsNav/quizHover.svg" class="hover" alt="" id="quizHover">
                <span class="pr-3"></span>
            </div>
        </div>
        <img src="../assets/iconsNav/logout.svg" @click="openLogOutModal()" alt="logout icon outlined" class="icon">
    </div>

    <!-- Confirm Log Out Pop Up -->

    <div v-if="showModal" class="modal" id="logOutModal">
        <div class="modal-content">
          <span @click="closeLogoutModal()" class="close">&times;</span> 
          <p class="modalTitle">Sign Out</p> 
          <p class="logOutPrompt">Are you sure you want to sign out?</p>
          <br/>
          <div class="btnsBottom">
            <button @click="logout()" class="btnYes">YES</button>
            <button @click="closeLogoutModal()" class="btnNo">NO</button>
          </div>
        </div>
    </div>

</template>

<script>
import { RouterLink } from "vue-router";
import { useUserStore } from "@/stores/users";

export default {
    data() {
        return {
            store: useUserStore(),
            showModal: false,
        }
    },
    computed: {
        isUser(){
            return this.store.isUser
        },
        
        user(){
            return this.store.getUser
        }
    },
    mounted() {  
        this.addToList('home');
    },
    methods: {
        logout() {
            this.store.logout();
            this.$router.push({ name: "landingPage" });
        },
        addToList(idIcon){
            if (idIcon === 'user'){
                let previousId = clickedIcon[0]
                this.changeIcon(previousId, 'blank')
                clickedIcon = []
            }
            else if (clickedIcon.length > 0 && idIcon !== 'user'){
                let previousId = clickedIcon[0]
                this.changeIcon(previousId, 'blank')
                
                clickedIcon = []
                clickedIcon.push(idIcon)
                this.changeIcon(idIcon, 'filled')
            }
            else if (clickedIcon = []){
                this.changeIcon(idIcon, 'filled')
                clickedIcon.push(idIcon)
            }
        },
        changeIcon(idIcon, option){
            let icon = document.getElementById(idIcon)
            if (option === 'blank'){
                icon.src = `src/assets/iconsNav/${idIcon}.svg`
            }
            else if (option === 'filled'){
                icon.src = `src/assets/iconsNav/${idIcon}Filled.svg`
            }

        },
        openLogOutModal() {
            this.showModal = true;
        },
         closeLogoutModal(){
            this.showModal = false;
        },


    },
}
let clickedIcon = []  

</script>


<style lang="css" scoped>
@import '../assets/logOutModalStyle.css';

#header {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: #4857a0;
    position: fixed;
    top: 0;
    left: 0;
    width: 6em;
    padding-bottom: 2em;
    padding-top: 2em;
} 
.text {
    color: #fcf3f3;
}

.icon{
    height: auto;
    width: 2em;
}

.icon:hover{
    background-color: #4857a0;
    text-decoration: none;
    transition: none;
    box-shadow: none;
}

#mainIcons{
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: -6em;
    margin-left: 1em;
    row-gap: 1em;
}

.divHover{
    position: relative;
    display: inline-block;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.hover {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  margin-left: 2.5em;
  width: 9em;
}

.divHover:hover .hover {
  display: block;
}
</style>