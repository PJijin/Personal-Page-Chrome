/** 
/* Function to get inspiration words 🔥 
**/
function getInspiration(){ 
    const inspiration = [
        "Never Give Up",
        "Be Awesome",
        "Be Clear",
        "Be Brave",
        "Be Happy",
        "Keep Calm",
        "Think!",
        "Focus",
        "Explore",
        "Take A Deep Breath",
        "Rise Above It",
        "Stay Positive",
        "Think Outside",
        "You Can Do Anything!",
        "Do Something Great",
        "Believe In Yourself",
        "Do More",
        "You Can",
        "Make It Happen",
        "Work Hard Dream Big",
        "Just Dont Quit",
        "Nothing Is Impossible",
        "Opportunity Ahead",
        "No Pain No Gain",
        "Stop Dreaming Start Doing"
    ];
    
    let randInspire = inspiration[Math.floor(Math.random() * inspiration.length)];
    document.getElementById('quote').innerHTML = randInspire;
    
}
 
/** 
/* Function to insert 0 in the time if < 10  🕗 
**/
function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
}
  
/** 
/* Show current time on page 🕚 
**/
function startTime() {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let ampm = h >= 12 ? 'pm' : 'am';

    hours = h % 12;
    hours = hours ? hours : 12;

    // add a zero in front of numbers<10
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML = hours + ":" + m + " "+ampm ;
     
}

/** 
/* Function to get welcome message based on time 🔥 
**/
function welcomeMsg(){ 
    let today = new Date()
    let curHr = today.getHours()

    if (curHr < 12) {
        heading= "Good Morning";
    } else if (curHr < 18) {
        heading= "Good Afternoon";
    } else {
        heading= "Good Evening";
    }
    document.getElementById('welcome').innerHTML  = heading;

}

getInspiration();
startTime();
welcomeMsg();