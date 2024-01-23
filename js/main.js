// Alert Notification//
let box = document.getElementById('box');
let down = false;

function toggleNotifi(){
    if(down){
        box.style.height='0px';
        box.style.display='none';
        down = false;
    }else{
        box.style.height ='350px';
        box.style.display = 'block';
        box.style.opacity = 1;
        box.style.zIndex = 2;
        down = true;
       
    }
}
/* Alert Message Line */
const alertLine = document.getElementById('alertLine');
alertLine.addEventListener("click", e=>{
    const alert = e.target;
    if(alert.classList.contains("Alert_close")){
      alertLine.style.display ="none";
    }
});



const selectChart = new Chart(document.getElementById("displayChart")
    ,{
      type: 'line',
      data: {
        labels: ['1', '2', '3', '4', '5','6', '7', '8', '9', '10', '11', '12'],
        datasets: [{
          
          data: [180, 175, 360, 185, 287, 165, 190, 108, 100, 175, 183, 160, ],
          
          fill:true,
          borderWidth: 1
        }]
      },
      options: {
        aspectRatio: 16/5, 
        maintainAspectRatio: true,
        scales: {
          y: {
            beginAtZero: true
          }
        },
        plugins: {
            legend: {
                display: false,
            }    
        },
        legend:{display: false},
      }
    });


//Traffic charts: press radio button to change//
//Hourly, Weekly, Monthly and Yearly button is selected//
//Display 

function drawChart(chartType) {
  if (window.result) {
    result.innerHTML="";
    let canvas = document.createElement("canvas");
   
canvas.id = "displayChart";
document.getElementById("result").appendChild(canvas);
  }
  
  if (chartType === "Hourly") {
    
    let selectChart = new Chart(document.getElementById("displayChart")
    ,{
      type: 'line',
      data: {
        labels: ['1', '2', '3', '4', '5','6', '7', '8', '9', '10', '11', '12'],
        datasets: [{
          
          data: [180, 175, 360, 185, 287, 165, 190, 108, 100, 175, 183, 160, ],
          
          fill:true,
          borderWidth: 1
        }]
      },
      options: {
        aspectRatio: 16/5, 
        scales: {
          y: {
            beginAtZero: true
          }
        },
        plugins: {
            legend: {
                display: false,
            }    
        },
        legend:{display: false},
      }
    });
  } 
  else if (chartType === "Weekly") {
    
    if (window.result) {
      result.innerHTML="";
      const canvas = document.createElement("canvas");
      canvas.id = "displayChart";
      document.getElementById("result").appendChild(canvas);
    }
    
    let selectChart = new Chart(document.getElementById("displayChart")
    , {
      type: 'line',
      data: {
        labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        datasets: [{
          
          data: [200, 400, 600, 800, 300, 1400, 1600, 900, 2000, 2200, 2400],
          
          fill:true,
          borderWidth: 1
        }]
      },
      options: {
        aspectRatio: 16/5, 
        scales: {
          y: {
            beginAtZero: true
          }
        },
        plugins: {
            legend: {
                display: false,
            }    
        },
        legend:{display: false},
      }
    });  
  } else if (chartType === "Monthly") {
    
    if (window.result) {
      result.innerHTML="";
      let canvas = document.createElement("canvas");
      canvas.id = "displayChart";
      document.getElementById("result").appendChild(canvas);
    }
    
    let selectChart = new Chart(document.getElementById("displayChart")
    , {
      type: 'line',
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
    "Aug", "Sep", "Oct", "Nov", 'Dec'],
        datasets: [{
          
          data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500, 3500],
          backgroundColor: 'rgba(116, 119, 191, .3)',
          fill:true,
          borderWidth: 1
        }]
      },
      options: {
        aspectRatio: 16/5,
        scales: {
          y: {
            beginAtZero: true
          }
        },
        plugins: {
            legend: {
                display: false,
            }    
        },
        legend:{display: false},
      }
    });    
  } else if (chartType === "Yearly") {
    
    if (window.result) {
      result.innerHTML="";
      let canvas = document.createElement("canvas");
      canvas.id = "displayChart";
      document.getElementById("result").appendChild(canvas);
            
    }
    
    let selectChart = new Chart(document.getElementById("displayChart")
    , {
      type: 'line',
      data: {
        labels: ["2010", "2011", "2012", "2013", "2014", "2015", "2016",
    "2017", "2018", "2019", "2020"],
        datasets: [{
          
          data: [1750, 2250, 3000, 3200, 2500, 3450, 4250, 5250, 6250, 7500, 8100],
          backgroundColor: 'rgba(116, 119, 191, .3)',
          fill:true,
          borderWidth: 1
        }]
      },
      options: {
        aspectRatio: 16/5,
        scales: {
          y: {
            beginAtZero: true
          }
        },
        plugins: {
            legend: {
                display: false,
            }    
        },
        legend:{display: false},
      }
    });      
  }
}

let radios = document.querySelectorAll('input[type=radio][name="abcd"]');
radios.forEach(function(radio) {
  radio.addEventListener('change', function() {  
    drawChart(this.value);
  });
});




  // Daily Traffic Chart
  const daily = document.getElementById('dailyChart');

  new Chart(daily, {
    type: 'bar',
    data: {
      labels: ['S', 'M', 'T', 'W', 'T','F', 'S'],
      datasets: [{
        
        data: [65, 115, 175, 125, 225, 200, 100],
        backgroundColor:['blue','blue','blue','blue','blue','blue','blue',],   
        hoverBorderColor: 'white',
        hoverBorderWidth: 2,   
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      },
      plugins: {
          legend: {
              display: false,
          }    
      },
      legend:{
        display: false,
      }
    }
  });

  // Mobile Users section
  const mobileUsers = document.getElementById('mobileChart');

new Chart(mobileUsers, {
  type: 'doughnut',
  data: {
    labels: ['Desktop', 'Tablet', 'Phones'],
    datasets: [{
      
      data: [65, 15, 20,],
      backgroundColor:['red', 'green', 'blue'],
            
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    },
    plugins: {
        legend: {
            display: true,
        }    
    },
    legend:{
      display:false,
    }
  }
});
/* || MESSAGE USER */
const search=document.getElementById('search');
const message_user=document.getElementById('message_user');
const send=document.getElementById('send');

send.addEventListener('click', (e)=> {
    e.preventDefault();
    if(search.value =='' && message_user.value !==''){
      alert('Search field is empty');
    }
    else if(message_user.value =='' && search.value !==''){
      alert('Text field is empty');
    }
    else if(search.value =='' && message_user.value ==''){
      alert('Search and Text field are both empties');
    }
    else{
      alert('Message sent');
    }
});



/* || SETTINGS */
const notice=document.getElementById('notice');
const profile=document.getElementById('profile');
const timezone=document.getElementById('timezone');

let localSetting_notice=localStorage.getItem('notice');
let localSetting_profile=localStorage.getItem('profile');
let localSetting_timezone=localStorage.getItem('timezone');

if(localSetting_notice ==='off'){
  notice.checked=false;
}else{
  notice.checked=true;
}

if(localSetting_profile ==='off'){
  profile.checked=false;
}else{
  profile.checked=true;
}

if(localSetting_timezone){
 const index =Array.from(timezone.options).findIndex(
  option => option.value ===localSetting_timezone
 );
 timezone.selectdIndex =index;
 }

 const saveBtn = document.getElementById('save');
 const cancelBtn = document.getElementById('cancel');

 saveBtn.addEventListener('click', () => {
  const timezoneOption = timezone[timezone.selectedIndex].textContent;



  localStorage.setItem('notice', notice.checked ? 'on' : 'off');
  localStorage.setItem('profile', profile.checked ? 'on' : 'off');
  if (timezoneOption !== 'Select a Timezone') {
    localStorage.setItem('timezone', timezoneOption);
  }
  //  Alert the user to notify that settings have been saved
   alert('Settings Saved');
});




cancelBtn.addEventListener('click', () => {
  localStorage.removeItem('notice');
  localStorage.removeItem('profile');
  localStorage.removeItem('timezone');

  alert('Settings Reset, Please refresh page');
});