import Bundle from './bundle';

const UserList = props => (<Bundle load={cb=>{require.ensure([],require=>{cb(require('@/screens/users/list').default)},'UserList')}}>{Com=><Com {...props} />}</Bundle>);
const Home = props => (<Bundle load={cb=>{require.ensure([],require=>{cb(require('@/screens/index/home').default)},'Home')}}>{Com=><Com {...props} />}</Bundle>);


const NotFound = ()=>{
  return <h1>404, NOT FOUND</h1>
}

export default [
  {
    path:'/user/list',
    exact:true,
    component:UserList
  },
  {
    path:'/',
    exact:true,
    component:Home
  },
  // {
  //   path:'*',
  //   redirect:
  //   // component:<NotFound />
  // }
]
