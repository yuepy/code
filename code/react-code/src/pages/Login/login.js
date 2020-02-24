import React, {Component} from 'react';
import '../../css/login.less';
export default class Login extends Component {
    render() {
        return (
            <div id='login'>
                <div className='login-loginIn'>
                    <h1>用户登录</h1>
                    <input type='text' placeholder='用户名' className='user entry'/>
                    <input type='password' placeholder='密码' className='pwd entry' />
                    <button>登录</button>
                    <div className='slip'>
                        <div>
                            <input type='radio' />
                            <span>记住密码</span>
                        </div>
                        <div>
                            <span>忘记密码?</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}