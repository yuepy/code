export const AJAX = function(url,method,params,isFrom,callback,error){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if((xhr.readyState == 4 && xhr.status >=200 && xhr.status <300) ||(xhr.status == 304)){
            callback(xhr.response);
        }else{
            error(xhr.response);
        }
    }
    xhr.timeout = function(){
        alert('当前请求已超时,是否刷新重试');
    }
    xhr.open(method,url);
    isFrom?xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded'):'';
    params?xhr.send(params):xhr.send();
}