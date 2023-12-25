// Alert Notification//
const box=document.getElementById('box');
const down = false;

function toggleNotifi(){
    if(down){
        box.style.height='0px';
        box.style.opacity=0;
        down = false;
    }else{
        box.style.height ='350px';
        box.style.opacity = 1;
        down = true;
    }
}

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
        scales: {
          y: {
            beginAtZero: true
          }
        },
        plugins: {
            legend: {
                display: false,
            }    
        }
      }
    });


//Traffic charts: press radio button to change//
//Hourly, Weekly, Monthly and Yearly button is selected//
//Display 

function drawChart(chartType) {
  if (window.result) {
    result.innerHTML="";
    const canvas = document.createElement("canvas");
canvas.id = "displayChart";
document.getElementById("result").appendChild(canvas);
  }
  
  if (chartType === "Hourly") {
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
        scales: {
          y: {
            beginAtZero: true
          }
        },
        plugins: {
            legend: {
                display: false,
            }    
        }
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
    
    const selectChart = new Chart(document.getElementById("displayChart")
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
        scales: {
          y: {
            beginAtZero: true
          }
        },
        plugins: {
            legend: {
                display: false,
            }    
        }
      }
    });  
  } else if (chartType === "Monthly") {
    if (window.result) {
      result.innerHTML="";
      const canvas = document.createElement("canvas");
canvas.id = "displayChart";
document.getElementById("result").appendChild(canvas);
    }
    
    const selectChart = new Chart(document.getElementById("displayChart")
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
        scales: {
          y: {
            beginAtZero: true
          }
        },
        plugins: {
            legend: {
                display: false,
            }    
        }
      }
    });    
  } else if (chartType === "Yearly") {
    if (window.result) {
      result.innerHTML="";
      const canvas = document.createElement("canvas");
canvas.id = "displayChart";
document.getElementById("result").appendChild(canvas);
      
    }
    
    const selectChart = new Chart(document.getElementById("displayChart")
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
        scales: {
          y: {
            beginAtZero: true
          }
        },
        plugins: {
            legend: {
                display: false,
            }    
        }
      }
    });      
  }
}

const radios = document.querySelectorAll('input[type=radio][name="abcd"]');
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
    }
  }
});