
export const formaction= (form)=>{
    console.log("action = ",form)
    return {
        type : 'formaction',
        payload : form
    }

}
export const rentaction= (form)=>{
    console.log("action = ",form)
    return {
        type : 'rentaction',
        payload : form
    }

}