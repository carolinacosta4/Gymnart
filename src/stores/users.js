import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    isUserAuthenticated: false,
    userLogged: null,
    users: [
        { name:'Admin', username: "admin", email: 'admin@email.com', password: "1234", profilePicture: "../assets/maria.png", type:"admin", favoriteAthletes: [], favoriteTeams: [], medals: [], isBlocked: false, lastSeenAthletes:[], lastSeenTeams:[]},
        { name:'Maria', username: "maria", email: 'maria@email.com', password: "1234", profilePicture: "../assets/maria.png", type:"guest", favoriteAthletes: [], favoriteTeams: [], medals: [], isBlocked: false, lastSeenAthletes:[], lastSeenTeams:[]},
      ],
  }),
  getters: {
    getUserLogged: (state) => state.userLogged,
    getUsers: (state) => state.users,
    isUser: (state) => state.isUserAuthenticated,
  },
  actions: {
    login(username, password) {
        const user = this.users.find(
            (user) => user.username == username && user.password == password
        );
        if (user && !user.isBlocked) {
            this.isUserAuthenticated = true;
            this.userLogged = user;
        } else {
            throw Error("User invalid!");
        }
    },
    logout() {
        this.isUserAuthenticated = false;
        this.userLogged = null;
    },

    signup(name, username, email, password, confirmPassword){
        const userName = this.users.find((user) => user.username == username);
        const userEmail = this.users.find((user) => user.email == email);
        
        if(userName){
            alert('Username already in use')
        }
        else if (userEmail){
            alert('email already linked to an account')
        }
        else if (name === '' || username === '' || email === '' || confirmPassword === '' || password === ''){
            alert('fill all fields to create your account')
        }
        else if (password != confirmPassword) {
            alert('passwords must match')
        }
        else {
            let newUser = { 
                name: name, 
                username: username, 
                email: email, 
                password: confirmPassword, 
                profilePicture: "../assets/maria.png",
                type:"guest", 
                favoriteAthletes: [], 
                favoriteTeams: [], 
                medals: [],
                isBlocked: false,
                lastSeenAthletes:[], 
                lastSeenTeams:[]
            };
            this.users.push(newUser);
            this.userLogged = newUser;
            this.isUserAuthenticated = true;
            alert('account created')
        }
    },

    editName(newName){
        let index = this.users.findIndex((user) => user.username == this.userLogged.username)
        this.userLogged = {name: newName, username: this.userLogged.username, email: this.userLogged.email, password: this.userLogged.password, profilePicture: this.userLogged.profilePicture, type: this.userLogged.type, favoriteAthletes: this.userLogged.favoriteAthletes, favoriteTeams: this.userLogged.favoriteTeams, medals: this.userLogged.medals, isBlocked: this.userLogged.isBlocked, lastSeenAthletes: this.userLogged.lastSeenAthletes, lastSeenTeams: this.userLogged.lastSeenTeams}
        this.users.splice(index, 1, this.userLogged)
    },

    editUsername(newUsername){
        let index = this.users.findIndex((user) => user.username == this.userLogged.username)
        this.userLogged = {name: this.userLogged.name, username: newUsername, email: this.userLogged.email, password: this.userLogged.password, profilePicture: this.userLogged.profilePicture, type: this.userLogged.type, favoriteAthletes: this.userLogged.favoriteAthletes, favoriteTeams: this.userLogged.favoriteTeams, medals: this.userLogged.medals, isBlocked: this.userLogged.isBlocked, lastSeenAthletes: this.userLogged.lastSeenAthletes, lastSeenTeams: this.userLogged.lastSeenTeams}
        this.users.splice(index, 1, this.userLogged)
    },

    editEmail(newEmail){
        let index = this.users.findIndex((user) => user.username == this.userLogged.username)
        this.userLogged = {name: this.userLogged.name, username: this.userLogged.username, email: newEmail, password: this.userLogged.password, profilePicture: this.userLogged.profilePicture, type: this.userLogged.type, favoriteAthletes: this.userLogged.favoriteAthletes, favoriteTeams: this.userLogged.favoriteTeams, medals: this.userLogged.medals, isBlocked: this.userLogged.isBlocked, lastSeenAthletes: this.userLogged.lastSeenAthletes, lastSeenTeams: this.userLogged.lastSeenTeams}
        this.users.splice(index, 1, this.userLogged)
    },

    editPassword(newPassword){
        let index = this.users.findIndex((user) => user.username == this.userLogged.username)
        this.userLogged = {name: this.userLogged.name, username: this.userLogged.username, email: this.userLogged.email, password: newPassword, profilePicture: this.userLogged.profilePicture, type: this.userLogged.type, favoriteAthletes: this.userLogged.favoriteAthletes, favoriteTeams: this.userLogged.favoriteTeams, medals: this.userLogged.medals, isBlocked: this.userLogged.isBlocked, lastSeenAthletes: this.userLogged.lastSeenAthletes, lastSeenTeams: this.userLogged.lastSeenTeams}
        this.users.splice(index, 1, this.userLogged)
    },

    blocked(username){
        let index = this.users.findIndex((user) => user.username == username)
        let user = this.users.find((user) => user.username == username)
        user = {name: user.name, username: user.username, email: user.email, password: user.password, profilePicture: user.profilePicture, type: user.type, favoriteAthletes: user.favoriteAthletes, favoriteTeams: user.favoriteTeams, medals: user.medals, isBlocked: !user.isBlocked, lastSeenAthletes: user.lastSeenAthletes, lastSeenTeams: user.lastSeenTeams}
        this.users.splice(index, 1, user)
    },

    delete(username){
        let index = this.users.findIndex((user) => user.username == username)
        this.users.splice(index, 1)
    },

    addMedal(newMedal) {
        let userIndex = this.users.findIndex((user) => user.username == this.userLogged.username)
        if(newMedal == 'goldMedal.svg'){
            const existingMedals = this.userLogged.medals.filter((medal) => medal === 'goldMedal.svg')
            if(existingMedals.length < 2){
                this.userLogged.medals.push(newMedal)
                this.users[userIndex].medals.push(newMedal)
                console.log(this.users);
            }
        }else{
            const existingMedal = this.userLogged.medals.find((medal) => medal === newMedal);
            if (!existingMedal) {
                this.userLogged.medals.push(newMedal);
                this.users[userIndex].medals.push(newMedal)
                console.log(this.users);
            }else{
                throw Error("Medal already added.");
            }
        }
    },

    addFavoriteAthlete(newFavorite) {
        console.log("aqui");
        if (this.userLogged.favoriteAthletes.length <= 4) {
            console.log(newFavorite);
            const index = this.userLogged.favoriteAthletes.findIndex(fav => fav == newFavorite);
            if (index == -1) {
                this.userLogged.favoriteAthletes.push(newFavorite);
                let userIndex = this.users.findIndex((user) => user.username == this.userLogged.username)
                this.users[userIndex].favoriteAthletes.push(newFavorite)
            }
            console.log(index);
            console.log(this.userLogged.favoriteAthletes);
        }
    },
    
    removeFavoriteAthlete(id) {
        let index = this.userLogged.favoriteAthletes.indexOf(id);
        if (index !== -1) {
            this.userLogged.favoriteAthletes.splice(index, 1);
        }
    },

    addFavoriteTeam(newFavorite) {
        console.log("aqui");
        if (this.userLogged.favoriteTeams.length <= 4) {
            console.log(newFavorite);
            const index = this.userLogged.favoriteTeams.findIndex(fav => fav == newFavorite);
            if (index == -1) {
                this.userLogged.favoriteTeams.push(newFavorite);
                let userIndex = this.users.findIndex((user) => user.username == this.userLogged.username)
                this.users[userIndex].favoriteTeams.push(newFavorite)
            }
            console.log(index);
            console.log(this.userLogged.favoriteTeams);
        }
    },
    
    removeFavoriteTeam(acronym) {
        let index = this.userLogged.favoriteTeams.indexOf(acronym);
        if (index != -1) {
            this.userLogged.favoriteTeams.splice(index, 1);
        }
    },
    
    addLastSeenAthletes(id){
        let userIndex = this.users.findIndex((user) => user.username == this.userLogged.username)
        if(this.userLogged.lastSeenAthletes.includes(id)){
            const index = this.userLogged.lastSeenAthletes.indexOf(id)
            this.userLogged.lastSeenAthletes.splice(index, 1)
        }

        if(this.userLogged.lastSeenAthletes.length >= 3){
            this.userLogged.lastSeenAthletes.shift()
        }

        this.userLogged.lastSeenAthletes.unshift(id)

        if(this.users[userIndex].lastSeenAthletes.includes(id)){
            const athleteIndex = this.users[userIndex].lastSeenAthletes.indexOf(id)
            this.users[userIndex].lastSeenAthletes.splice(athleteIndex, 1)
        }

        if(this.users[userIndex].lastSeenAthletes.length >= 3){
            this.users[userIndex].lastSeenAthletes.shift()
        }

        this.users[userIndex].lastSeenAthletes.unshift(id)            
    },

    addLastSeenTeams(acronym){
        let userIndex = this.users.findIndex((user) => user.username == this.userLogged.username)
        if(this.userLogged.lastSeenTeams.includes(acronym)){
            const index = this.userLogged.lastSeenTeams.indexOf(acronym)
            this.userLogged.lastSeenTeams.splice(index, 1)
        }

        if(this.userLogged.lastSeenTeams.length >= 3){
            this.userLogged.lastSeenTeams.shift()
        }

        this.userLogged.lastSeenTeams.unshift(acronym)

        if(this.users[userIndex].lastSeenTeams.includes(acronym)){
            const teamIndex = this.users[userIndex].lastSeenTeams.indexOf(acronym)
            this.users[userIndex].lastSeenTeams.splice(teamIndex, 1)
        }

        if(this.users[userIndex].lastSeenTeams.length >= 3){
            this.users[userIndex].lastSeenTeams.shift()
        }

        this.users[userIndex].lastSeenTeams.unshift(acronym)   
    },
  },  
  persist: true,
});

// localStorage.clear()