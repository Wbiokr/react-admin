import {Provider} from 'react-redux'
import '@/utils/config'
import '@/stylus/APP'
import Login from '@/screens/index/login'
import Index from '@/screens/index/app'
import store from '@/redux/'

let App=!!sessionStorage.token ? Index : Login;


const render=()=>{
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector('#root')
  )
}

render()

let unscribe = store.subscribe(()=>{
  render()
})

unscribe()
