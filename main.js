
// document.getElementById('sa').innerHTML="saad tayel saad mohamed";
// console.log("hallo consol");
// var useeName ="saad tayel";
// var userAge =21;
// var saad = false
// var mariem = null
// console.log (typeof(useeName))
// console.log (typeof(userAge))
// console.log (typeof(saad))
// console.log (typeof(mariem))

// var x=window.prompt("enter your age")

// if(x>=21){
//     console.log(" welcome in grop")
// }
// else{
//    console.log("sorry, donot age low")
// }


// var user =window.prompt("ENTER YOUR DOMAIN")

// if(user=="admin"){
//     console.log("ADD USER, DELETE USER,MODIFY")
// }
// else if (user=="user"){
//     console.log("shoping,buy,contant")
// }
// else if(user=='manger'){
//     console.log("collecion,prossing")
// }
// else{
//     console.log('sorry,donot finde')
// }
// switch(user){
//     case('admin'):
//         console.log("ADD USER, DELETE USER,MODIFY")
    
//     break;
//     case('user'):
//         console.log("shoping,buy,contant")
//     break;
//     case('manger'):
//     console.log("collecion,prossing")
//     break;
//     default:
//         console.log('sorry,donot finde')
//         break;
// }
// var cartona="";
// for( i=0;i<100;i++){
//     cartona+=`
//     <div class="item">
//     <h1>SA3D TAYEL</h1>
   
// </div>
//     `
// }

// document.getElementById('demo').innerHTML= cartona;

// function getAvrg (num1,num2){
//     var sum=num1+num2
// var result = sum /2
// return result;

// }
// var num1=Number(window.prompt('Enter First Number')) 
// var num2=Number(window.prompt('Enter Second Number'))
// var avg = getAvrg(num1,num2)


// function getprodect (price,ads,tx,profit){
//     var price1=price+ads;
//     var result = price1-(price1*tx);
//     var finelresult = result +profit;
//     console.log(finelresult)
// }
// getprodect(100,20,0.2,avg)





// var x =window.prompt('ENTER YOUR NUMBER')

// if(x%3==0 && x%4==0){

//     document.getElementById('demo').innerHTML=(' output yes')
// }
// else{
//     document.getElementById('demo').innerHTML=(' output no')
  
// }


// var x =window.prompt('ENTER YOUR FIRST NUMBER')
// var y =window.prompt('ENTER YOUR SECOND NUMBER')
// if(x>y){
//     console.log(x)
// }
// else{
//     console.log(y)
// }


// var peodect={
//     name:'saad tayel saad',
//     age:21,
//     wife:'mariem',
// };
// console.log(peodect.wife)


// var frindes=['saad','ahmed','mostfa','mohamed','elsayed']
// for(i=0;i<frindes.length;i++){

//     console.log(frindes[i])

// }

//////////////////////////////////////////first project////////////////////////////////////

// var userName= document.getElementById('fname')
// var userAge= document.getElementById('fage')
// var userPlace= document.getElementById('fplace')
// var userCollage= document.getElementById('fcollage')

// var infoUser
// if(localStorage.getItem('infoperson') != null){
//     infoUser=JSON.parse(localStorage.getItem('infoperson'));
//   displayInfo(infoUser)
// }
// else{
//     infoUser=[];
// }

// function send(){
// var user ={name:userName.value,age:userAge.value,place:userPlace.value, collage:userCollage.value}
// infoUser.push(user);
// localStorage.setItem('infoperson',JSON.stringify(infoUser))
// console.log(infoUser)
// clearData()
// displayInfo(infoUser)

// }


// function clearData(){
//     userName.value="";
//     userAge.value="";
//     userPlace.value="";
//     userCollage.value="";
// }

// function displayInfo(listIfno){
//     var cartona=``;
//     for( var i=0;i<listIfno.length;i++){
//         cartona+=`
//          <tr >
//       <td style="padding-top: 20px;">`+listIfno[i].name+`</td>
//       <td style="padding-top: 20px;">`+listIfno[i].age+`</td>
//       <td style="padding-top: 20px;">`+listIfno[i].place+`</td>
//       <td style="padding-top: 20px;">`+listIfno[i].collage+`</td>
//       <td style="padding-top: 20px;"><button  style="display: inline-block;width: 90px;height: 25px;background-color: blue;color: white;border-radius: 5px;border: none;cursor: pointer;">Update</button></td>
//       <td style="padding-top: 20px;"><button  style="display: inline-block;width: 90px;height: 25px;background-color: blue;color: white;border-radius: 5px;border: none;cursor: pointer;">Delete</button></td>
//     </tr>
//         `
//     }
//     document.getElementById('bodyText').innerHTML = cartona;
// }
// function searchProdact(searchterm){
//     var searchResult=[]
//     for (var i=0;i<infoUser.length;i++){
//         if(infoUser[i].name.toLowerCase().includes(searchterm.toLowerCase()) == true){
//             searchResult.push(infoUser[i])
//         }
//     }
//     displayInfo(searchResult)
// }


var userName = document.getElementById('fname')
var userage = document.getElementById('fage')
var userplace = document.getElementById('fplace')
var usercollage = document.getElementById('fcollage')
var infoUser;
var add =document.getElementById('butom');
var updateBtn=document.getElementById('updateBtn');

if(localStorage.getItem('iformation')!=null){
    infoUser=JSON.parse(localStorage.getItem('iformation'));
    displayInfo(infoUser)
}
else{
    infoUser=[];
}


function send(){
   
    var user={  name:userName.value, age:userage.value, place:userplace.value, collage:usercollage.value }
    infoUser.push(user)
    localStorage.setItem('iformation',JSON.stringify(infoUser));
    console.log(infoUser)
    clear()
    displayInfo(infoUser)
}
function clear(){
    userName.value="";
    userage.value="";
    userplace.value="";
    usercollage.value="";
}

function displayInfo(list)
{
    var container=``;
    for(var i=0;i<list.length;i++){
        container+=`
         <tr >
    <td style="padding-top: 20px;">`+list[i].name+`</td>
       <td style="padding-top: 20px;">`+list[i].age+`</td>
       <td style="padding-top: 20px;">`+list[i].place+`</td>
       <td style="padding-top: 20px;">`+list[i].collage+`</td>
       <td style="padding-top: 20px;"><button onclick="displayUpdate(${i})" id="butomtable" >Update</button></td>
       <td style="padding-top: 20px;"><button onclick="deleteInfo(${i})" id="butomtable" >Delete</button></td>
     </tr>
         `
    }
    document.getElementById('bodyText').innerHTML=container;
}
function searchProdact(searchterm){
    var searchResult=[];
    for(var i=0;i<infoUser.length;i++){
if(infoUser[i].name.toLowerCase().includes(searchterm.toLowerCase()) == true)
    {
        searchResult.push(infoUser[i])
    }
    }
    displayInfo(searchResult)
}
function deleteInfo(valueDelete){
    infoUser.splice(valueDelete,1)
    localStorage.setItem('iformation',JSON.stringify(infoUser));
    displayInfo(infoUser)

}
function displayUpdate(updateInfo){
    userName.value=infoUser[updateInfo].name;
    userage.value=infoUser[updateInfo].age;
    userplace.value=infoUser[updateInfo].place;
    usercollage.value=infoUser[updateInfo].collage;
   updateBtn.classList.replace('d-none','d-inline-block')
   add.classList.replace('d-inline-block','d-none')
    
}
function displayShowUpdate(){
   
    displayInfo(infoUser)
}


