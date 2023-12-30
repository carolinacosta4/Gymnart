<template>
    <div id="header">
        <RouterLink :to="{ name: 'account', params:{id: user.username}  }" class="text"><img src="../assets/iconsNav/user.svg" alt="user icon" class="icon"></RouterLink>
        <span class="pr-3"></span>
        <div id="mainIcons">
            <RouterLink :to="{ name: 'search' }" class="text" ><img src="../assets/iconsNav/search.svg" alt="console icon outlined" id="search" class="icon" @click="addToList('search')"></RouterLink>
            <span class="pr-3"></span>
            <RouterLink :to="{ name: 'home' }" class="text"><img src="../assets/iconsNav/home.svg" alt="home icon outlined" id="home" class="icon" @click="addToList('home')"></RouterLink>
            <span class="pr-3"></span>
            <RouterLink :to="{name: 'dashboard'}" class="text"><img src="../assets/iconsNav/dashboard.svg" alt="dashboard icon outlined" id="dashboard" class="icon" @click="addToList('dashboard')"></RouterLink>
            <span class="pr-3"></span>
            <RouterLink :to="{ name: 'favorites' }" class="text"><img src="../assets/iconsNav/favorites.svg" alt="heart icon outlined" id="favorites" class="icon" @click="addToList('favorites')"></RouterLink>
            <span class="pr-3"></span>
            <RouterLink :to="{ name: 'calendar' }" class="text"><img src="../assets/iconsNav/calendar.svg" alt="calendar icon outlined" id="calendar" class="icon" @click="addToList('calendar')"></RouterLink>
            <span class="pr-3"></span>
            <RouterLink :to="{ name: 'quiz' }" class="text"><img src="../assets/iconsNav/quiz.svg" alt="console icon outlined" class="icon" id="quiz" @click="addToList('quiz')"></RouterLink>
            <span class="pr-3"></span>
        </div>
        <RouterLink :to="{ name: 'landingPage' }" class="text" @click="logout()"><img src="../assets/iconsNav/logout.svg" alt="logout icon outlined" class="icon"></RouterLink>
    </div>
</template>

<script>
import { RouterLink } from "vue-router";
import { useUserStore } from "@/stores/users";

export default {
    data() {
        return {
            store: useUserStore(),
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
        },
        addToList(idIcon){
            if (clickedIcon.length > 0){
                let previousId = clickedIcon[0]
                this.changeIcon(previousId, 'blank')
                
                clickedIcon = []
                clickedIcon.push(idIcon)
                this.changeIcon(idIcon, 'filled')
            }
            else {
                clickedIcon.push(idIcon)
                this.changeIcon(idIcon, 'blank')
            }
            
        },
        changeIcon(idIcon, option){
            let icon = document.getElementById(idIcon)
            if (option === 'blank'){
                icon.src = ` http://localhost:4000/src/assets/iconsNav/${idIcon}.svg`
            }
            else if (option === 'filled'){
                icon.src = `http://localhost:4000/src/assets/iconsNav/${idIcon}Filled.svg`
            }

        }

    },
}
let clickedIcon = []  

</script>


<style lang="css" scoped>
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
    margin-bottom: 1em;
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
}
</style>