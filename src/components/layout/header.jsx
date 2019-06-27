import cxs from 'cxs'
import {connect} from 'react-redux'
import { FetchMenu } from '@/request/axios.layout.js'

const {
  Menu,
  Icon,
} = antd


class Header extends React.Component {
  state = {
    key:'0'
  }
  render(){
    return (
          <Menu 
            mode='horizontal' 
            theme='dark' 
            className={'f-1 '+ menu }
            defaultSelectedKeys={[this.state.key]}
            onClick={this.changeItem.bind(this)}
          >
            {/* <div className='whiteBar'></div> */}
            {
              this.props.menu.map((item,index)=>(
                <Menu.Item key={index}>
                  {item.title}
                </Menu.Item>
              ))
            }
          </Menu>
    )
  }
  async componentDidMount(){
    await this.props.getMenuList(this.props.menu[this.state.key].value)
    console.log(this)
  }
  changeItem(e){
    this.props.getMenuList(this.props.menu[e.key].value)
  }
  
}

const mapStateToProps = state => ({
  height:state.common.height,
  token:state.common.token,
  menu:state.menu.menuFather,
  list:state.menu.menuChild,
})
const mapDispatchToProps = dispatch => ({
  getMenuList:(subSystem)=>{
    FetchMenu({subSystem})
      .then(res=>{
        dispatch({
          type:'menu_update',
          list:res.result
        })
      })
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(Header)

const whiteBar = cxs({
  height:'100%',
  width:'200px',
  // background:'rgb(71, 119, 230)'
})


const menu = cxs({
  paddingLeft:'200px'
})