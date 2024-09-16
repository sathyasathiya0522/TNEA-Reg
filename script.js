function register()
{
       
    let stname = document.getElementById("stname").value;
    let scname = document.getElementById("scname").value;
    let hscno = document.getElementById("hscno").value;
    let dob = document.getElementById("dob").value;
    let address = document.getElementById("address").value;
    let pnumber = document.getElementById("pnumber").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let cpassword = document.getElementById("cpassword").value;
    let checkbox = document.getElementById("agree").value;
    if(stname == ""){
        alert("please enter the student name");
    }
    else if(scname == ""){
        alert("please enter the school name");
    }
    else if(hscno == ""){
        alert("please enter the valid HSC-Register-Number");
    }
    else if(dob == ""){
        alert("please enter Date-Of-Birth");
    }
    else if(address == ""){
        alert("please enter valid Address");
    }
    else if(pnumber == ""){
        alert("please enter the valid Phone-Number");
    }
    else if(email == ""){
        alert("please enter the valid Email ID");
    }
    else if(password == ""){
        alert("please enter the Password");
    }
    else if(cpassword != password){
        alert("password does not match to Confirm password");
    }
    else if(checkbox == ""){
        alert("please click to agree our terms and conditions");

    }
    else{
        alert("your Registration is complete successfully")
    
    }
}