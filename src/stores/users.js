import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    isUserAuthenticated: false,
    userLogged: null,
    users: [
        { name:'Admin', username: "admin", email: 'admin@email.com', password: "1234", profilePicture: "../assets/maria.png", type:"admin", favoriteAthletes: [], favoriteTeams: [], medals: ["../assets/goldmedal.png"], isBlocked: false, lastSeenAthletes:[3, 5], lastSeenTeams:["PT", "ITLY"]},
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
            console.log(this.users)
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
        const existingMedal = this.userLogged.medals.find((medal) => medal === newMedal);
        if (!existingMedal) {
            this.userLogged.medals.push(newMedal);
            console.log(this.userLogged);
        }else{
            throw Error("Medal already added.");
        }
    },

    addRemoveFavorite(newFavorite, typeFavorites){        //Receives the Name of the Property That You Want to Add to or Remove from (favoriteAthletes or favoriteTeams)
        if (this.userLogged[typeFavorites].length <= 5) {
            const existingFavorite = this.userLogged[typeFavorites].includes(newFavorite);

            if (!existingFavorite) {
                this.userLogged[typeFavorites].push(newFavorite);
            }else{
                let index = this.userLogged[typeFavorites].indexOf(newFavorite)
                this.userLogged[typeFavorites].splice(index, 1);
            }
        }
    },
    
    addLastSeenAthletes(id){
        if(this.userLogged.lastSeenAthletes.includes){
            
        }
    },

    addLastSeenTeams(acronym){

    },
  },  
  persist: true,
});

// localStorage.clear()