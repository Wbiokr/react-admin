import Bundle from './bundle';

const UserList = props => (<Bundle load={cb=>{require.ensure([],require=>{cb(require('@/screens/users/list').default)},'UserList')}}>{Com=><Com {...props} />}</Bundle>);
const Home = props => (<Bundle load={cb=>{require.ensure([],require=>{cb(require('@/screens/index/home').default)},'Home')}}>{Com=><Com {...props} />}</Bundle>);



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
]
