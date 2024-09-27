var stores ={"agg@gmail.com":"12345678","echu@gmail.com":"912345678"};

function lakew (){
  var sender = document.getElementById("name").value;
  var senderi = document.getElementById("number").value;
  var receiver = document.getElementById("tekebay").value;
  var receiveri = document.getElementById("receiver").value;
  var hisab = document.getElementById("amount").value;

  var signature = prompt("Please verify the transaction information below with your name signature" + "\n" + "Sender: " + sender + "\n" + "Sender Account Number: " + senderi + "\n" + "Receiver: " + receiver + "\n" + "Receiver Account Number: " + receiveri + "\n" + "Amount: " + hisab);

  alert("Transaction on process. Please Enter Ok")
  alert("Transaction complete. Please download the transaction verification receipt.")

  console.log(signature);

  store(sender,senderi,receiver,receiveri,hisab);
  
}


function store(send,sende,receiver,receiveri,hisab){
  var data=[];
  data.push(`Sender: ${send}`, `Sender Account: ${sende}`, `Receiver: ${receiver}`, `Receiver Account: ${receiveri}`, `Amount: ${hisab}`);
  
  var datastring = data.join("\n");
  var blob = new Blob([datastring], { type: 'text/plain' });

  // Create a download link and click it
  var link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'transaction.txt';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  saver(datastring);
}

function login(){
  var email = document.getElementById("eadd").value;
  var pass = document.getElementById("password").value;
  var gif = document.getElementById("gif");

  var password = String(pass)

  if (stores[email] == password){
    alert("Login Sucessful, Redirecting to main site...");
    gif.src = 'webgif.webp';
    gif.style.display = 'block';
    setTimeout(function(){
    window.location.href="first.html";
    },2000);
  }else{
    alert("Wrong Email or Password, please try again");
  }
}


function sign(){
  var si = prompt("Please Enter a Suitable Email to sign up");
  var gn = prompt("Please Enter a Suitable Password to sign up");
  stores[si]=gn;
  alert("Sign Up is now succesful, You may proceed to login");
  alert(stores);
  alert("Did you saw stores");
  
}
