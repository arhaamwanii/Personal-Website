function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    
    // gets the menu links i.e stuff in side the hamburger
    // gets the hamburger icon - outer clickable - 

    menu.classList.toggle("open");
    icon.classList.toggle("open");

    //adds the open class to both of them

}


function updateTime() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
//   var seconds = now.getSeconds();

  // Format the time to add leading zeros if the value is less than 10
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
//   seconds = seconds < 10 ? '0' + seconds : seconds;

  // Display the time in 24-hour format (you can modify this according to your preference)
  var timeString = hours + ':' + minutes ;

  // Update the content of the div with id "time"
  document.getElementById("time").textContent = timeString;
}

// Call updateTime function initially to display the time immediately
updateTime();

// Call updateTime function every second to update the time every second
setInterval(updateTime, 1000);




// function updateTime() {
//     var now = new Date();
//     var hours = now.getHours();
//     var minutes = now.getMinutes();
//     var seconds = now.getSeconds();
  
//     // Format the time to add leading zeros if the value is less than 10
//     hours = hours < 10 ? '0' + hours : hours;
//     minutes = minutes < 10 ? '0' + minutes : minutes;
//     seconds = seconds < 10 ? '0' + seconds : seconds;
  
//     // Display the time in 24-hour format (you can modify this according to your preference)
//     var timeString = hours + ':' + minutes + ':' + seconds;
  
//     // Update the content of the div with id "time"
//     document.getElementById("time").textContent = timeString;
//   }
  
//   // Call updateTime function initially to display the time immediately
//   updateTime();
  
//   // Call updateTime function every second to update the time every second
//   setInterval(updateTime, 1000);
  