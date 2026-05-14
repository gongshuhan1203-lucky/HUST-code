const btn = document.getElementById('btn');

btn.onclick = () => {
    const name = document.getElementById('name').value;
    const pwd = document.getElementById('pwd').value;
    let user_info = localStorage.getItem('userlist');
    let users;
    if (user_info) {
        users = JSON.parse(user_info);
    } else {
        users = [];
    }
    //创建新用户对象
    const newUser = {
        lname: name,
        lpwd: pwd
    };
    let flag = true;
    for (let i = 0; i < users.length; i++) {
        if (users[i].lname === name) {
            alert('用户名重复！请更换！');
            flag = false;
            break;
        }
    }
    if (flag) {
        users.push(newUser);
        localStorage.setItem('userlist', JSON.stringify(users));
        alert("注册成功");
        window.location.href = "./login.html";
    }
}