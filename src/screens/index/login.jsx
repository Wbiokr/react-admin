import {FetchLogin} from '@/request/axios.js'
import cxs from 'cxs'
import { connect } from 'react-redux'
import BGParticle from '@/utils/particle'

const { Form, Icon, Input, Button } = antd

const FormItem = Form.Item

class Login extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      dis: 'none'
    }

  }
  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div className={`login-page ${rule}`} style={{backgroundImage:'url('+require('../..//img/bg.jpg')+')'}} id='backgroundBox'>
        <Form onSubmit={this.handleSubmit} className={form}>
          <FormItem>
            {getFieldDecorator('loginName', {
              rules: [{ required: true, message: '请输入正确的用户名！' }]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="用户名"
                defaultValue={'dsd'}
              />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入正确的密码！' }]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                type="password"
                placeholder="密码"
                defaultValue={this.state.password}
              />
            )}
          </FormItem>
          
          <Button
            type="primary"
            htmlType="submit"
            style={{ width: '100%', marginTop: '10px' }}
          >
            登&nbsp;&nbsp;&nbsp;&nbsp;录
          </Button>
        </Form>
      </div>
    )
  }
  componentDidMount(){
    this.particle = new BGParticle('backgroundBox')
    this.particle.init()
  }
  changeCheckbox = e => {
    this.setState({ checked: e.target.checked })
  }
  handleSubmit = e => {
    e.preventDefault()
    e.stopPropagation()
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        FetchLogin({username:values.loginName,password:values.password})
          .then(res=>{

              sessionStorage.token = res.result;
              
              antd.notification.success({
                message: '恭喜',
                description:  '登录成功，即将为您跳转...'
              })
              setTimeout(()=>{
                location.reload()
              },500)
            

          })
      }
    })
  }
  
}

const LoginIndex = Form.create()(Login)

export default LoginIndex;

const rule = cxs({
  position: 'fixed',
  height: '100%',
  width: '100%',
  // background: 'url("./")',
  backgroundSize:'100% 100%',
  display: 'flex',
  'justify-content': 'center',
  'align-items': 'center',
  // animation: 'login linear 10s infinite forwards alternate',
  padding: '10px 50px'
})
const form = cxs({
  padding: '70px 50px',
  position:'fixed',
  zIndex:5,
  top:'50%',
  left:'50%',
  transform:'translate(-50%,-50%)',
  // background: 'rgba(0,0,0,.65)',
  background:'linear-gradient(230deg, rgba(53, 57, 74, 0) 0%, rgb(0, 0, 0) 100%)',
  'margin-top': '-80px',
  width: '360px',
  // 'box-shadow': '0 0 20px 2px rgba(250,250,250,.3)',
  boxShadow:'-2px 5px 15px 4px rgba(250,250,250,.3)',
  'border-radius': '8px',
  button: {
    width: '100%'
  }
})
