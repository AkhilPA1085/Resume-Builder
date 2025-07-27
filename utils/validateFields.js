import { validationSchemas } from "./validationSchema"

export const validateFields = (data,type)=>{
    const validate = validationSchemas[type];

    if(!validate){
        console.warn(`${type} is not defined`);
        return;
    }

    return validate(data)
}
