import React, {Component} from 'react';
import '../../css/login.less';
import * as AJAX from 'component/AJAX.js'
import * as utils from 'component/utils.js'
export default class Login extends Component {
    constructor(){
        super();
    }
    loginIn=(username,password)=>{
        debugger;
        AJAX.AJAX(utils.loginIn,'POST',"username="+username+"&password="+password+"",success,error);
    }
    success=(res)=>{
        debugger;
    }
    error=()=>{
        debugger
    }
    submit=(event)=>{
        debugger;
        var username = event.target.parentNode.querySelector('.user').value;
        var password = event.target.parentNode.querySelector('.pwd').value;
        if(!username){
            alert('用户名不能为空!');
            window.location.reload();
            return;
        }
        if(!password){
            alert('用户名不能为空!');
            window.location.reload();
            return;
        }
        loginIn(username,password);
    }
    render() {
        return (
            <div id='login'>
                <div className='login-loginIn'>
                    <h1>用户登录</h1>
                    <input type='text' placeholder='用户名' className='user entry'/>
                    <input type='password' placeholder='密码' className='pwd entry' />
                    <button onClick={(e)=>{alert('123')}>登录</button>
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