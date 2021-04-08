import { ADD_TODO, TOGGLE_TODO,DELETE_TODO,EDIT_TODO } from "../actiontype";

const initialstate={
    alltodos:[],
    todosbyID:[]
}

export default function(state=initialstate,action){
    console.log(state,action.type)
    switch(action.type){
        case ADD_TODO:{
            const { id, value } = action.payload;
            return{
                ...state,
                alltodos:[...state.alltodos,id],
                todosbyID:{
                    ...state.todosbyID,
                    [id]:{
                        value,
                        completed:false
                    }
                }
            };
        }
        
       case TOGGLE_TODO:{
           const {id}=action.payload;
           return{
               ...state,
               todosbyID:{
                   ...state.todosbyID,
                   [id]:{
                       ...state.todosbyID[id],
                       completed:!state.todosbyID[id].completed
                   }
               }
           };
       }
       case EDIT_TODO:{
        const {id,value}=action.payload;
        return{
            ...state,
            todosbyID:{
                ...state.todosbyID,
                [id]:{
                    ...state.todosbyID[id],
                    completed:false,
                    value:value
                }
            }
        };
    }
       case DELETE_TODO:{
           console.log("delete")
        const {id}=action.payload;
//         var array = [...this.state.todosbyID];
//         if (index !== -1) {
//     array.splice(index, 1);
//     this.setState({people: array});
//   }
        // state.todosbyID.remove(id);
        return {
            ...state,
            todosbyID:state.todosbyID.splice(0,id),
            state
        };
       }
      
       default:
           console.log("aas"+state)
           return state;
           
    }
}