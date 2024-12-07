




  
const button=document.getElementById("btn");
// document.getElementById("data").innerHTML='';

button.addEventListener("click",add)
const remove=document.getElementById("remove");

remove.addEventListener("click",function(){
  // data.remove();
  data.innerHTML='';
})


function add(){
    

const name=document.getElementById("name").value;
const id=document.getElementById("s-id").value;
const mail=document.getElementById("mail").value;
const contact=document.getElementById("contact").value;
const data=document.getElementById("data");

if (name === "" || id === "" || mail === "") {
  alert("Empty blanks are not accepted.");
  return;
   
}
if (!/^[A-Za-z\s]+$/.test(name)) {
  alert("Name can only contain letters and spaces.");
  return;
}
if (!/^\d+$/.test(id)) {
  alert("Student ID must be a number.");
  return;
}

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
if (!emailRegex.test(mail)) {
  alert("Please enter a valid email address.");
  return;
}

if (!/^\d+$/.test(contact)|| (contact.length<10 || contact.length>10)) {
  alert("Contact must be a number or enter valid number");
  return;
}









   //in user data variable that input field information is storing
    const userData = {
        name: name,
        id: id,
        mail: mail,
        contact: contact
      };
      console.log(userData)
      let storedata=JSON.parse(localStorage.getItem("userDatalist"))||[];
     //placing in localstorage
     storedata.push(userData);//pushing userdata into storedata

    //  console.log(storedata);
    console.log("Stored Data:", storedata);
    console.log(typeof(storedata))

      
     
    //  localStorage.setItem("userDatalist",JSON.stringify(userData));
    // Store the entire array of users, not just the last user
localStorage.setItem("userDatalist", JSON.stringify(storedata));

    console.log("reddy")
    // console.log(userDatalist);
    displaydata();//calling display function

  

    
    
   
    
document.getElementById("name").value="";
document.getElementById("s-id").value="";
document.getElementById("mail").value="";
document.getElementById("contact").value="";





}

    function displaydata(){
      const data = document.getElementById("data");
      // data.innerHTML='';
      const storedata=JSON.parse(localStorage.getItem("userDatalist")) // its convert to array from localstorage
      if (!Array.isArray(storedata)) {
        storedata = [];
        console.log("2")
        
      }
      // console.log(storedata)
      // console.log(userData)

    //using foreach loop that iterating through the user data
      storedata.forEach((userData) => {
        const div=document.createElement("div");
        const sname=document.createElement("p");
        const sid=document.createElement("p");
        const smail=document.createElement("p");
        const scontact=document.createElement("p");
        const rbtn=document.createElement("button");
        rbtn.addEventListener("click",function(){
          div.remove()
        })//delete the info 

        sname.innerHTML=`student_name:${userData.name}`;
        sid.innerHTML=`student_id:${userData.id}`;
        smail.innerHTML=`student_mail:${userData.mail}`;
        scontact.innerHTML=`student_con:${userData.contact}`;
        rbtn.innerHTML="Delete";
        rbtn.classList.add('delete');
        div.classList.add("div")
        const editButton = document.createElement("button");
        editButton.classList.add('edit')
    editButton.textContent = "Edit";
    editButton.addEventListener("click", () => editUserData(userData));
        div.append(sname,sid,smail,scontact,rbtn,editButton);
    
    
        data.append(div);

        
      });//editing the information 
    }
    window.onload=function(){
      displaydata();
    }
    function editUserData(userData) {
      // Pre-fill the form with the selected user's data
      document.getElementById("name").value = userData.name;
      document.getElementById("s-id").value = userData.id;
      document.getElementById("mail").value = userData.mail;
      document.getElementById("contact").value = userData.contact;
    }

    