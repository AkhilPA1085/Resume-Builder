import {create} from "zustand"
 

type PersonalInfoState={
    name:string,
    title:string,
    phone:string,
    email:string
}

type State ={
    personalInfo:PersonalInfoState
}

type Action={
    updatePersonalInfo:(field:keyof State,value:string)=>void
}

export const resumeStore = create<State & Action>((set)=>({
    personalInfo:{name:"",title:"",phone:"",email:""},
    updatePersonalInfo:(field,value)=>set((state)=>({
        personalInfo:{...state.personalInfo,[field]:value}
    }))
}))