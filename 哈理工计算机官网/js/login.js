const btn = document.getElementById('btn');

btn.onclick = () => {
    const name = document.getElementById('name').value;
    const pwd = document.getElementById('pwd').value;
    const users = JSON.parse(localStorage.getItem('userlist'));
    let flag = false;
    for (let i = 0; i < users.length; i++) {
        let user = users[i];
        if (user.lname === name) {
            flag = true;
            if (user.lpwd === pwd) {
                alert("登录成功");
                console.log(`${user.lname}登陆成功`);
                window.location.href = "./index.html";
            } else {
                alert("密码错误！");
            }
        }
    }
    if (!flag) {
        alert("未注册！");
        window.location.href = "./register.html";
    }
}