const initState = {
  height:window.innerHeight,//浏览器高度
  width:window.innerWidth,//瀏覽器寬度
  token:sessionStorage.token||'',
}

export default function(state=initState,action){
  switch(action.type){
    case 'common_change_height':
      return Object.assign({},state,{height:action.height||window.innerHeight});
    case 'common_change_width':
      return Object.assign({},state,{width:actions.width||window.innerWidth});
    default:
      return state;
  }
}