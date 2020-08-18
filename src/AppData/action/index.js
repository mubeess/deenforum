export const QuestionAdded=(question)=>{
return (dispatch,getState,{getFirebase,getFirestore})=>{
// make an asyn call
    dispatch({
    type:'QUESTION_ADDED',
    payload:question
})
}
};
export const UserAuth=(user)=>{
    return {
        type:'USER_AUTH',
        payload:user
    }
    };
    
