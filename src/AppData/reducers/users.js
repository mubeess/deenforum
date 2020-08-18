const initState=[ {
    id: Date.now(),
    user_name:'mubees',
    password:'12345',
    loggedIn:false

    
  },
  {
    id: Date.now(),
    user_name:'harun',
    password:'123111',
    loggedIn:false
    
  },
  {
    id: Date.now(),
    user_name:'admin',
    password:'123000',
    loggedIn:false
    
  }
  ]
  export default function(state=initState,action){
    switch (action.type) {
      case 'USER_ADDED':
           console.log(state)
           break
      case 'USER_AUTH':
        const presentUser=action.payload;
        state.filter(user=>{
          if (presentUser.id==user.id) {
            user=presentUser;
           alert(`logged In By ${user.user_name}`)
          }
        })
          default:
            return state;
          
  }
  }