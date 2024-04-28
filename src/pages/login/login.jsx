import React, { useState } from 'react'
import './login.css'
import logo from '../../assets/scale_1200.jpg'
import MaterialInput from '../../components/input/MaterialInput'
import MaterialButton from '../../components/button/MaterialButton'

const Login = () => {

  const [error, setError] = useState( '')
  const [userInfo, setUserInfo] = useState( {})
  const [user, setUser] = useState( {
    username: '',
    password: ''
  })

  async function Auth () {
    try {
      const response = await axios.post( '' , user)
    } catch (e){
    }
  }

  return (
    <div className='login-wrap'>
        <div className='login-block'>
            <div className='logo-block'>
                <img src={logo} alt="" />
                </div> 
                <div className="inputs-block">
                  <MaterialInput
                  label='Логин'
                  type='text'
                  onChange={ (event) => setUsername(event.target.value)}
                  />
                  <MaterialInput
                  label='Пароль'
                  type='password'
                  onChange={ (event) => setPassword(event.target.value)}
                  />
                  <MaterialButton 
                  value='Отправить'
                  onClick={() => console.log('卐卐卐')}
                  />
                </div>
                <div className="result">
                  <div>
                    {error}
                  </div>
                  <div>
                    {userInfo}
                  </div>
                </div>
            </div>
    </div>
  )
}

export default Login