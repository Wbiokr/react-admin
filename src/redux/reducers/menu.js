const initState = {
  menuFather:[
    {
      title:'过程控制',
      value:'pcs'
    },
    {
      title:'工艺管理',
      value:'qc'
    },
    {
      title:'质量管理',
      value:'hr'
    },
  ],
  menuChild:[
    
  ]
}

export default function(state=initState,action){
  switch(action.type){
    case 'menu_update':
      return Object.assign({},state,{
        menuChild:action.list
      })
    default:
      return state;
  }
}