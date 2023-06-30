import React, { useState } from 'react'
import PanelHeader from '../../components/PanelHeader'
import CustomInput from '../../components/CustomInput'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLock,  faUser } from '@fortawesome/free-solid-svg-icons'
import PanelContainer from '../../components/PanelContainer'
import Button from '../../components/Button'

library.add(faUser, faLock)



const LoginPage = () => {
    const [loginInfo, setLoginInfo] = useState({
                                                    admin : "",
                                                    password : ""    
                                                })

    const onChange = (e)=> {
        const update = {...loginInfo}
        update[e.target.name] = e.target.value
        setLoginInfo(update)
    }
  return (
    <div className='login-page'>
        <form action='/'>
            <PanelContainer>
            <PanelHeader  title={"Login Admin"} />
            <CustomInput cls={"login-admin"}
                          required={"required"}
                         icon={"fa-user"}
                         type={"email"}
                         name={"admin"}
                         onChange={onChange}
                         element={"text-input"}
                         placeholder={"user name"} />
            <CustomInput cls={"login-admin-psw"}
                         icon={"fa-lock"}
                         name={"password"}
                         required={"required"}
                         onChange={onChange}
                         element={"text-input"}
                         type={"password"}
                         placeholder={"password"} />
            <Button clName={"login-btn"} 
                      type={"submit"}
                      href={"/"}
                      bgCol={"#5C59E8"} 
                      txtCol={"white"} 
                      wdh={"60px"} 
                      hgt={"30px"}>
                  Login
            </Button>
            </PanelContainer>
        </form>
    </div>
  )
}

export default LoginPage
