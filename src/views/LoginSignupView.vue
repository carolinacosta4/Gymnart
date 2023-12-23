<template>
	<div id="bgContainer">
		<div class="container" id="container">

			<div class="form-container sign-up-container" id="formSignUp">
			<v-form @submit.prevent="signup">
				<h1>Sign up</h1>
				<v-text-field v-model="name" label="Name" class="textField" :rules='isRequired' hide-details="auto"></v-text-field>
				<v-text-field v-model="username" label="Username" class="textField" :rules='isRequired' hide-details="auto"></v-text-field>
				<v-text-field v-model="email" label="Email" class="textField" :rules='isRequired' hide-details="auto"></v-text-field>
				<v-text-field v-model="password" label="Password" class="textField" :rules='isRequired' hide-details="auto"></v-text-field>
				<v-text-field v-model="confirmPassword" label="Confirm Password" class="textField" :rules='isRequired' hide-details="auto"></v-text-field>
				<span id="messageSignUp"></span>

				<button id="accountCreated" type="submit">Sign Up</button>
				</v-form>
			</div>

			<div class="form-container log-in-container" id="formLogin">
				<v-form @submit.prevent="login">
				<h1>Log in</h1>
				<v-text-field v-model="usernameLogin" label="Username" class="textField" :rules='isRequired'></v-text-field>

				<v-text-field v-model="passwordLogin" label="Password" class="textField" :rules='isRequired'></v-text-field>
				<p id="textForgotPass">Forgot your password?</p>

				<button id="logBtn" type="submit">Log in</button>
				</v-form>
			</div>

			<div class="overlay-container">
				<div class="overlay">
					<div class="overlay-panel overlay-left">
						<h1 class="title">Welcome Back!</h1>
						<p class="descriptionOverlay">Login to know the latest results from your favorite athletes</p>
						<button class="ghost" id="logIn">Log In</button>
					</div>

					<div class="overlay-panel overlay-right">
						<h1 class="title">Hello, Fan!</h1>
						<p class="descriptionOverlay">Are you ready to join us in the adventure of the Olympics?</p>
						<button class="ghost" id="btnSignUp">Sign Up</button>
					</div>
				</div>
			</div>
		
		</div>
		<p @click="this.$router.push('/ladingPage')" id="btnBack">Go back</p>     
	</div>
</template>



<script>
import { useUserStore } from '@/stores/users';

	export default{
		data() {
			return {
				store: useUserStore(),
				name: '',
				username: '',
				email: '',
				password: '',
				confirmPassword: '',
				usernameLogin: '',
				passwordLogin: '',
			}
		},
		mounted(){
			const signUpButton = document.getElementById('btnSignUp');
			const logInButton = document.getElementById('logIn');

			signUpButton.addEventListener('click', () => { 
				container.classList.add("right-panel-active");
			});

			logInButton.addEventListener('click', () => {
				container.classList.remove("right-panel-active");
			});

			console.log(this.store.users)
		},
		computed: {
			isRequired(){
				return [
					value => !!value || 'Required',
				];
				
			}
		},
		methods: {
    		login() {
				try {
					const store = useUserStore()
					store.login(this.usernameLogin, this.passwordLogin)
					this.$router.push({ name: "home" });
					
				} catch (error) {
					alert(`Error: ${error.message}`); 
				}
			},
			signup(){
				try {
					const store = useUserStore()
					store.signup(this.name, this.username, this.email, this.password, this.confirmPassword)
				} catch (error) {
					alert(`Error: ${error.message}`);
				}
			}
  },
	}
</script>

<style  lang="css" scoped>


@font-face {
    font-family: LexendDecaBold;
    src: url(../assets/Lexend_Deca/LexendDeca-Bold.ttf);
}

@font-face {
    font-family: LexendDecaRegular;
    src: url(../assets/Lexend_Deca/LexendDeca-Regular.ttf);
}

@font-face {
    font-family: LexendDecaThin;
    src: url(../assets/Lexend_Deca/LexendDeca-Thin.ttf);
}

@font-face {
    font-family: Saphile;
    src: url(../assets/Saphile/Saphile-Regular.otf);
}

* {
	box-sizing: border-box;
}
#btnBack {
	color: #fcf3f3;
    margin-top: 4em;
    text-align: right;
	width: 52vw;
}

#textForgotPass{
	margin-top: 1em;
}
#btnBack:hover, #textForgotPass:hover{
	cursor: pointer;
}

#bgContainer {
	background: #4857a0;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	font-family: LexendDecaRegular;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

#formLogin, #formSignUp{
  background-color: #fcf3f3;
  max-height: fit-content;
}

h2 {
	text-align: center;
}

.textField{
  color: #4857a0;
  background-color: #fcf3f3;
  font-size: 2em;
  margin-bottom: 10%;
}

span {
	font-size: 7px;
}

.descriptionOverlay {
	width: 20em;
	margin-top: 1em;
}

button, #logBtn, #accountCreated {
	border-radius: 11px;
	border: 1px solid;
	background-color: #4857a0;
	color: #fcf3f3;
	font-size: 15px;
	height: 40px;
	width: 160px;
	transition: transform 80ms ease-in;
	font-family: LexendDecaRegular;
	margin-top: 20px;
	cursor: pointer;
	margin-top: 2em;
}

#logIn, #btnSignUp {
	margin-top: 3em;
}


button.ghost {
	background-color: transparent;
	border-color: #4857a0;
	color: #4857a0;
	font-family: LexendDecaRegular;
}

form {
	background-color: #fcf3f3;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	height: 100%;
	text-align: center;
}

h1{
	color: #4857a0;
	margin-bottom: 0.5em;
}

.container {
	background-color: #fcf3f3;
	border-radius: 25px;
  	box-shadow: 0 14px 28px rgba(0,0,0,0.25), 
			0 10px 10px rgba(0,0,0,0.22);
	position: relative;
	overflow: hidden;
	width: 55vw;
	height: 65vh;
	top: 5%;
	color: #4857a0;
}

.form-container {
	position: absolute;
	top: 0;
	height: 100%;
	transition: all 0.6s ease-in-out;
}

.log-in-container {
	width: 50%;
	z-index: 2;
}

.container.right-panel-active .log-in-container {
	transform: translateX(100%);
}

.sign-up-container {
	width: 50%;
	opacity: 0;
	z-index: 1;
}

.container.right-panel-active .sign-up-container {
	transform: translateX(100%);
	opacity: 1;
	z-index: 5;
	animation: show 0.6s;
}

@keyframes show {
	0%, 49.99% {
		opacity: 0;
		z-index: 1;
	}
	
	50%, 100% {
		opacity: 1;
		z-index: 5;
	}
}

.overlay-container {
	position: absolute;
	top: 0;
	left: 50%;
	width: 50%;
	height: 100%;
	overflow: hidden;
	transition: transform 0.6s ease-in-out;
	z-index: 100;
}

.container.right-panel-active .overlay-container{
	transform: translateX(-100%);
}

.overlay {
	background: #f8e2d6;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: 0 0;
	color: #4857a0;
	position: relative;
	left: -100%;
	height: 100%;
	width: 200%;
  	transform: translateX(0);
	transition: transform 0.6s ease-in-out;
}

.container.right-panel-active .overlay {
  	transform: translateX(50%);
}

.overlay-panel {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 50px;
	text-align: center;
	top: 0;
	height: 100%;
	width: 50%;
	transform: translateX(0);
	transition: transform 0.6s ease-in-out;
}

.overlay-left {
	transform: translateX(-20%);
}

.container.right-panel-active .overlay-left {
	transform: translateX(0);
}

.overlay-right {
	right: 0;
	transform: translateX(0);
}

.title{
	font-family: Saphile;
	color: #4857a0;
	margin-bottom: 1em;
}

.title2{
	font-family: LexendDecaSemiBold;
	margin-bottom: 40px;
}

.v-text-field {
  width: 100%;
  max-width: 300px; 
  max-height: 60px;
  margin: 10px; 
  font-size: 1px;

}

.container.right-panel-active .overlay-right {
	transform: translateX(20%);
}
</style>