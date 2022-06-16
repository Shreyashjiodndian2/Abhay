const initialvalue = null;

export const formreducer = (state = initialvalue ,action)=>{

    console.log("form in formreducer",action)
    switch(action.type){
        case "formaction" : return action.payload
        case "formempty" : return null
        default : return state
    }
}
