import Card from './components/Card' 
import './App.css'
import store from './redux/store'
import { Provider } from 'react-redux'
function App() {
  
let users= [1,2,3,4,5,6,7,8,9,10]
console.log(users.slice(0,5))
  return (
    <Provider store={store}>
      {console.log(store.getState())}
      <div className='container'>
      <div className='d-flex justify-content-between align-items-center mb-4'>
        {users.slice(0,5).map(user=><Card user={user}/>)}
        <Card/>
      </div>
      <div className='d-flex justify-content-between align-items-center'>
        {users.slice(5,10).map(user=><Card  className="col-2"/>)}
        <Card/>
      </div>
      {console.log(store)}
    </div>
    </Provider>
    
  )
}

export default App
