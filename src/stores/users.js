import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    isUserAuthenticated: false,
    user: null,
    users: [
        { name:'Admin', username: "admin", email: 'admin@email.com', password: "1234", type:"admin", favoriteAthletes: [], favoriteTeams: [], medals: []},
        { name:'Maria', username: "maria", email: 'maria@email.com', password: "1234", type:"guest", favoriteAthletes: [], favoriteTeams: [], medals: []},
      ],
  }),
  getters: {
    getUser: (state) => state.user,
    isUser: (state) => state.isUserAuthenticated,
  },
  actions: {
    login(username, password) {
        const user = this.users.find(
            (user) => user.username == username && user.password == password
        );
        if (user) {
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
                type:"guest", 
                favoriteAthletes: [], 
                favoriteTeams: [], 
                medals: [],
            };
            this.users.push(newUser);
            console.log(this.users)
            this.user = newUser;
            this.isUserAuthenticated = true;
            alert('account created')
        }
    }
  },  
  persist: true,
});