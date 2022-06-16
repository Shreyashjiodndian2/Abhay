const initialvalue = null;

export const rentreducer = (state = initialvalue ,action)=>{

    console.log("form in rentreducer",action)
    switch(action.type){
        case "rentaction" : return action.payload
        case "rentempty" : return null
        default : return state
    }
}