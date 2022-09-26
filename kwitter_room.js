
const firebaseConfig = {
      apiKey: "AIzaSyCssiSjMZufwFcVH4crAwHAwyehKT_QiHE",
      authDomain: "kwitterproject-a0869.firebaseapp.com",
      projectId: "kwitterproject-a0869",
      storageBucket: "kwitterproject-a0869.appspot.com",
      messagingSenderId: "196128794246",
      appId: "1:196128794246:web:3ba8e2821dfb06763a1307"
    };
    
firebase.initializeApp(firebaseConfig);

function addRoom() 
{
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update(
        {
            purpose: "adding room name"
        }
    );
}
      firebase.database().ref("/").child
      {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      }
getData();
