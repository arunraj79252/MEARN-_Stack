class Bank {
    static getAccountDetails() {
        var accountdetails = {
            1000: { accno: 1000, name: "userone", balance: 6000, password: "user1" },
            1001: { accno: 1001, name: "usertwo", balance: 9000, password: "user2" },
            1002: { accno: 1002, name: "usertwo", balance: 5000, password: "user3" }

        }
        return accountdetails;
    }
    static authenticateUser(accno2, password) {
        let data = Bank.getAccountDetails();
        // alert(data);
        if (accno2 in data) {
            if (password == data[accno2]["password"]) { return 1; }

            else {
                return 0;

            }
        }
        else {
            return -1;

        }

    }


    static login() {
        let accno = document.querySelector("#accno").value;
        
        let pd = document.querySelector("#pwd").value;
        var data = Bank.getAccountDetails();
        if (accno in data) {
            if (data[accno]["password"] == pd) {
                alert("Authentication Successful");
                window.location.href = "home.html";
            }
            else {
                alert("Invalid username or password")
            }
        } else {
            alert("not exist")
        }


    }
    static deposite() {
        let accno2 = document.querySelector("#accno1").value;
        console.log(accno2);
        let password = document.querySelector("#pwd1").value;
        let amount = document.querySelector("#amt").value;
        let data = Bank.getAccountDetails();
        let user = Bank.authenticateUser(accno2, password);
        // alert(user);
        if (user == 1) {
            data[accno2]["balance"] += Number(amount);
            alert("Available balance " + data[accno2]["balance"])
        }
        else if (user == 0) {
            alert("Invalid Password");
        }
        else if (user == -1) {
            alert("Invalid user");
        }



    }
    static withdraw() {
        let accno = document.querySelector("#accno1").value;
        let password = document.querySelector("#pwd1").value;
        let amount = document.querySelector("#amt").value;
        let data = Bank.getAccountDetails();
        let user = Bank.authenticateUser(accno, password);
        if (user == 1) {
            if (amount >= data[accno][balnce]) {
                data[accno]["balance"] -= Number(amount);
            }
            else {
                alert("Insufficient balance" + " Available balnce" + data[accno]["balance"]);
            }
        }
        else if (user == 0) {
            alert("Invalid Password");
        }
        else {
            alert("Invalid user");
        }



    }
}