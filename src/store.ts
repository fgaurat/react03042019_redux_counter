const initInc = {count:3};

export const reducerCount = (state=initInc,action:any ) =>{
    
    console.log('reducer',state,action);

    switch(action.type){
        case 'INCREMENT':
            const obj = {...state,count:state.count+1};
            console.log("action.type INCREMENT",obj);
            return obj;
            break;
        case 'DECREMENT':
            const obj1 = {...state,count:state.count-1};
            console.log("action.type DECREMENT",obj1);
            return obj1
            break;
        default:
        return state;
    }
}


