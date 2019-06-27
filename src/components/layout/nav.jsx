import cxs from 'cxs'
import {connect} from 'react-redux'

const { Menu } = antd ;
const { SubMenu } = Menu ;

class Nav extends React.Component {
  state = {
    openKeys:[]
  }
  render(){
    return (
      <nav className={nav}>
        <Menu
          style={{ width: 200 }}
          defaultSelectedKeys={['1']}
          openKeys={this.state.openKeys}
          mode="inline"
          className={menu}
          onOpenChange={this.openChange.bind(this)}
        >
          {
            this.props.menu.map((item,index)=>(
              item.children?
              <SubMenu
                key={`sub-${index}`}
                title={
                  <span><span>{item.name}</span></span>
                }
              >
                {
                  item.children.map((unit,$i)=>(
                    <Menu.Item key={`item-${index}-${$i}`}>{unit.name}</Menu.Item>
                  ))
                }
              </SubMenu>:
              <Menu.Item key={`sub-${$i}`}>{item.name}</Menu.Item>
            ))
          }
        </Menu>
      </nav>
    )
  }
  openChange(e){
    console.log(e)
    this.setState({
      openKeys:e
    })
  }
}

const mapStateToProps = state => ({
  height:state.common.height,
  token:state.common.token,
  menu:state.menu.menuChild,
})
const mapDispatchToProps = dispatch => ({
  
})

export default connect(mapStateToProps,mapDispatchToProps)(Nav)

const nav = cxs({
  background:'#fff',
  height:'100%',
  overflowY:'auto',
  overflowX:'hidden'
})

const menu = cxs({
  border:'none!important'
})