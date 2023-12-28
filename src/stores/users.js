import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    isUserAuthenticated: false,
    user: null,
    users: [
        { name:'Admin', username: "admin", email: 'admin@email.com', password: "1234", profilePicture: "../assets/maria.png", type:"admin", favoriteAthletes: [], favoriteTeams: [], medals: [], isBlocked: false},
        { name:'Maria', username: "maria", email: 'maria@email.com', password: "1234", profilePicture: "../assets/maria.png", type:"guest", favoriteAthletes: [], favoriteTeams: [], medals: [], isBlocked: false},
      ],
  }),
  getters: {
    getUser: (state) => state.user,
    getUsers: (state) => state.users,
    isUser: (state) => state.isUserAuthenticated,
    // isUserBlocked: (state) => state.user.isBlocked
  },
  actions: {
    login(username, password) {
        const user = this.users.find(
            (user) => user.username == username && user.password == password
        );
        if (user && !user.isBlocked) {
            this.isUserAuthenticated = true;
            this.user = user;
        } else {
            throw Error("User invalid!");
        }
    },
    logout() {
        this.isUserAuthenticated = false;
        this.user = null;
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
                isBlocked: false
            };
            this.users.push(newUser);
            console.log(this.users)
            this.user = newUser;
            this.isUserAuthenticated = true;
            alert('account created')
        }
    },

    editName(newName){
        let index = this.users.findIndex((user) => user.username == this.user.username)
        this.user = {name: newName, username: this.user.username, email: this.user.email, password: this.user.password, profilePicture: this.user.profilePicture, type: this.user.type, favoriteAthletes: this.user.favoriteAthletes, favoriteTeams: this.user.favoriteTeams, medals: this.user.medals, isBlocked: this.user.isBlocked}
        this.users.splice(index, 1, this.user)
    },

    editUsername(newUsername){
        let index = this.users.findIndex((user) => user.username == this.user.username)
        this.user = {name: this.user.name, username: newUsername, email: this.user.email, password: this.user.password, profilePicture: this.user.profilePicture, type: this.user.type, favoriteAthletes: this.user.favoriteAthletes, favoriteTeams: this.user.favoriteTeams, medals: this.user.medals, isBlocked: this.user.isBlocked}
        this.users.splice(index, 1, this.user)
    },

    editEmail(newEmail){
        let index = this.users.findIndex((user) => user.username == this.user.username)
        this.user = {name: this.user.name, username: this.user.username, email: newEmail, password: this.user.password, profilePicture: this.user.profilePicture, type: this.user.type, favoriteAthletes: this.user.favoriteAthletes, favoriteTeams: this.user.favoriteTeams, medals: this.user.medals, isBlocked: this.user.isBlocked}
        this.users.splice(index, 1, this.user)
    },

    editPassword(newPassword){
        let index = this.users.findIndex((user) => user.username == this.user.username)
        this.user = {name: this.user.name, username: this.user.username, email: this.user.email, password: newPassword, profilePicture: this.user.profilePicture, type: this.user.type, favoriteAthletes: this.user.favoriteAthletes, favoriteTeams: this.user.favoriteTeams, medals: this.user.medals, isBlocked: this.user.isBlocked}
        this.users.splice(index, 1, this.user)
    },

    blocked(username){
        let index = this.users.findIndex((user) => user.username == username)
        let user = this.users.find((user) => user.username == username)
        user = {name: user.name, username: user.username, email: user.email, password: user.password, profilePicture: user.profilePicture, type: user.type, favoriteAthletes: user.favoriteAthletes, favoriteTeams: user.favoriteTeams, medals: user.medals, isBlocked: !user.isBlocked}
        this.users.splice(index, 1, user)
    },

    delete(username){
        let index = this.users.findIndex((user) => user.username == username)
        this.users.splice(index, 1)
    }
  },  
  persist: true,
});

// localStorage.clear()