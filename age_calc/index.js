const btnEl=document.getElementById("btn");
const birthdayEl=document.getElementById("birthday");
const resultEl=document.getElementById("result");

function calculateAge()
{
    const bd=birthdayEl.value;
    if(bd==="")
    {
        alert("Please Enter your birthdate");
    }
    else{
        const age=getAge(bd);
        resultEl.innerText=`Your age is ${age.year} ${age>1 ? "Years":"Year"} and ${age.month} Months`;
    }
}

function getAge(bd)
{
    const newDate=new Date();
    const temp=new Date(bd);
    let year=newDate.getFullYear()-temp.getFullYear();
    let month=newDate.getMonth()-temp.getMonth();
    let date=newDate.getDate()-temp.getDate();
    if(month<0||
        (month===0 && date<0)
    )
    year--;
    if(month<0)
    {
        month=12-Math.abs(month);
    }
    return {year,month};

}


btnEl.addEventListener("click",calculateAge);