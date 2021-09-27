var firebaseConfig = {
  apiKey: "AIzaSyD5ym8A4VriJlyA4cmxpfzdOpETGx1OOpM",
  authDomain: "kwitterproject-53b37.firebaseapp.com",
  databaseURL: "https://kwitterproject-53b37-default-rtdb.firebaseio.com",
  projectId: "kwitterproject-53b37",
  storageBucket: "kwitterproject-53b37.appspot.com",
  messagingSenderId: "1061048990765",
  appId: "1:1061048990765:web:fdbfb418169bc41baa8ca4",
  measurementId: "G-ZH5LMF1FHM"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);



user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
  room_name = document.getElementById("RoomName").value;

  firebase.database().ref("/").child(room_name).update({

    purpose: "Adding Room Name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";

  document.getElementById("RoomName").innerHTML = room_name;
}

function getData() {
  firebase.database().ref("/").on('value',
    function (snapshot) {
      document.getElementById("output").innerHTML =
        "";
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        Room_names = childKey;
        //Start code

        //End code
      });
    });
}

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

getData();

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");

  window.location = "index.html";
}