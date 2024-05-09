import{defineStore}from 'pinia'
import*as api from '../api/api'
const API_BASE_URL="http://localhost:4000"
export const useAthleteStore=defineStore('athlete',{state:()=>({athletes:[]}),getters:{getAthletes:(state)=>state.athletes,getAthlete:(state)=>(id)=>state.athletes.find((athlete)=>athlete.id==id)},actions:{async fetchAthletes(){try{const data=await api.get(API_BASE_URL,'athletes')
this.athletes=data}catch(error){throw error}},delete(id){let index=this.athletes.findIndex((athlete)=>athlete.id==id)
this.athletes.splice(index,1)},add(name,acronym,description,curiosities,lastResult,teamName,age,gold,silver,bronze,picture,firstOlympics,height,birth){let id=this.athletes[this.athletes.length-1].id+1
this.athletes.push({id:id,name:name,age:age,description:description,teamName:teamName,teamAcronym:acronym,gold:gold,silver:silver,bronze:bronze,lastResult:lastResult,curiosities:curiosities,picturePath:picture,thumbnailPath:"",firstOlympics:firstOlympics,height:height,location:birth,isLive:!1})
console.log(this.athletes)}},})