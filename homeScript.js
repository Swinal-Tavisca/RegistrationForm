var f=0;
function firstName()
{
    
    var empt = document.getElementById("first-name").value;
    if (empt === "")
    {
        document.getElementById("fname-display").value="   *Name Required";
        return false;
    }
    else if(!isNaN(empt))
    {
        document.getElementById("fname-display").value="   *Name can not have a number";
        return false;   
    }
    else 
    {
        f++;
        document.getElementById("fname-display").value="";
        return true; 
    }
}
function lastName()
{
    var empt = document.getElementById("last-name").value;
    if (empt === "")
    {
        document.getElementById("lname-display").value="   *Name Required";
        return false;
    }
    else if(!isNaN(empt))
    {
        document.getElementById("lname-display").value="   *Name can not have a number";
        return false;   
    }
    else if(empt==(document.getElementById("first-name").value))
    {
        document.getElementById("lname-display").value="   *Last name can not be equal to First name";
        return false;  
    }
    else 
    {
        f++;
        document.getElementById("lname-display").value="";
        return true; 
    }
}
function phoneNumber()
{
    var empt = document.getElementById("phone").value;
    if (empt === "")
    {
        document.getElementById("phone-display").value="   *Phone Number Required";
        return false;
    }
    else if(isNaN(empt))
    {
        document.getElementById("phone-display").value="   *Should be Number";
        return false;   
    }
    else if(empt.length<10)
    {
        document.getElementById("phone-display").value="   *Size should be 10";
        return false;
    }
    else 
    {
        f++;
        document.getElementById("phone-display").value="";
        return true; 
    }
    
}
function email()
{
    var empt = document.getElementById("mailId").value;
    if (empt === "")
    {
        document.getElementById("email-display").value="   *E-Mail Required";
        return false;
    }
    else 
    {
        f++;
        document.getElementById("email-display").value="";
        return true; 
    }
}
function Address()
{
    var empt = document.getElementById("address").value;
    if (empt === "")
    {
        document.getElementById("add-display").value="   *Address Required";
        return false;
    }
    else 
    {
        f++;
        document.getElementById("add-display").value="";
        return true; 
    }
}
function cityss()
{
    var empt = document.getElementById("city").value;
    var s="Select";
    if (empt === s)
    {
        document.getElementById("display").value="   *Select City";
        return false;
    }
    else 
    {
        f++;
        document.getElementById("display").value="";
        return true; 
    }
}
function validate()
{   firstName();
    lastName();
    phoneNumber();
    email();
    Address();
    cityss();
    if(f>=6)
    {
        return true;
    }
    else
    {
        return false;
    }
    
}