import cxs from 'cxs'
import {connect} from 'react-redux'
import Routes from '@/route/'
import {Route,HashRouter} from 'react-router-dom'
import Header from '@/components/layout/header'
import Nav from '@/components/layout/nav'

class App  extends  React.Component {
  state = {

  }
  render(){
    return (
      <div className={'w-per-100 '+layout} style={{height:this.props.height+"px"}}>
        <Header />
        <main className='d-f' style={{height:this.props.height-46+"px"}}>
          <Nav />
          <HashRouter basename='/'>
            <article className={'f-1 '+article}>
              <div>
                {
                  Routes.map((item,index)=>(
                    <Route 
                    path={item.path}
                    exact={item.exact}
                    component={item.component}
                    key={index}
                    />
                    ))
                }
              </div>
            </article>
          </HashRouter>       
        </main>
      </div>
    )
  }
  componentDidMount(){
    window.addEventListener('resize',()=>{

        this.props.$calHeight()
        this.props.$calWidth()
      
      }
    )
  }
}

const mapStateToProps = state => ({
  width:state.common.width,
  height:state.common.height,
})

const mapDispatchToProps = dispatch => ({
  $calHeight(height){
    dispatch({
      type:'common_change_height',
      height:height||window.innerHeight
    })
  },
  $calWidth(width){
    dispatch({
      type:'common_change_width',
      width:width||window.innerWidth
    })
  }
})

export default connect (mapStateToProps,mapDispatchToProps)(App);

const layout = cxs({
  overflow:'hidden',
  background:'#f6f6f6',
})

const article = cxs({
  padding:'20px',
  overflowY:'auto',
  height:'100%',
  ' >div':{
    padding:'20px',
    minHeight:'100%',
    background:'#fff',
    borderRadius:'2px',
    boxShadow:'0 0 3px 1px rgba(0,0,0,.1)'
  }
})