const initState=[ {
  id:123,
  title:'THe title goes here',
  content:'the content Goes here the content Goes here the content Goes here the content Goes here',
  answer:'These is the answer to 123'
},
{
  id:126,
  title:'THe title goes here',
  content:'the content Goes here',
  answer:'These is the answer to 126'
},
{
  id:127,
  title:'THe title goes here',
  content:'the content Goes here',
  answer:'These is the answer to 127'
},
{
  id:128,
  title:'THe title goes here',
  content:'the content Goes here',
  answer:'These is the answer to 128'
},
{
  id:129,
  title:'THe title goes here',
  content:'the content Goes here',
  answer:'These is the answer to 129'
},
{
  id:130,
  title:'THe title goes here',
  content:'the content Goes here',
  answer:''
},
{
  id:131,
  title:'THe title goes here',
  content:'the content Goes here',
  answer:''
}
]
export default function(state=initState,action){
  switch (action.type) {
    case 'QUESTION_ADDED':
         return [...state,action.payload]
        default:
          return state;
        
}
}