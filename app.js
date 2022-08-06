// https://calculator.swiftutors.com/instantaneous-velocity-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const v4 = document.getElementById('v4');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const instantaneousVelocityRadio = document.getElementById('instantaneousVelocityRadio');
const initialDisplacementRadio = document.getElementById('initialDisplacementRadio');
const finalDisplacementRadio = document.getElementById('finalDisplacementRadio');
const initialTimeRadio = document.getElementById('initialTimeRadio');
const finalTimeRadio = document.getElementById('finalTimeRadio');

let instantaneousVelocity;
let initialDisplacement = v1;
let finalDisplacement = v2;
let initialTime = v3;
let finalTime = v4;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');
const variable4 = document.getElementById('variable4');

instantaneousVelocityRadio.addEventListener('click', function() {
  variable1.textContent = '(x1) Initial Displacement (m)';
  variable2.textContent = '(x2) Final Displacement (m)';
  variable3.textContent = '(t1) Initial Time (sec)';
  variable4.textContent = '(t2) Final Time (sec)';
  initialDisplacement = v1;
  finalDisplacement = v2;
  initialTime = v3;
  finalTime = v4;
  result.textContent = '';
});

initialDisplacementRadio.addEventListener('click', function() {
  variable1.textContent = '(V) Instantaneous Velocity (m/s)';
  variable2.textContent = '(x2) Final Displacement (m)';
  variable3.textContent = '(t1) Initial Time (sec)';
  variable4.textContent = '(t2) Final Time (sec)';
  instantaneousVelocity = v1;
  finalDisplacement = v2;
  initialTime = v3;
  finalTime = v4;
  result.textContent = '';
});

finalDisplacementRadio.addEventListener('click', function() {
  variable1.textContent = '(V) Instantaneous Velocity (m/s)';
  variable2.textContent = '(x1) Initial Displacement (m)';
  variable3.textContent = '(t1) Initial Time (sec)';
  variable4.textContent = '(t2) Final Time (sec)';
  instantaneousVelocity = v1;
  initialDisplacement = v2;
  initialTime = v3;
  finalTime = v4;
  result.textContent = '';
});

initialTimeRadio.addEventListener('click', function() {
  variable1.textContent = '(V) Instantaneous Velocity (m/s)';
  variable2.textContent = '(x1) Initial Displacement (m)';
  variable3.textContent = '(x2) Final Displacement (m)';
  variable4.textContent = '(t2) Final Time (sec)';
  instantaneousVelocity = v1;
  initialDisplacement = v2;
  finalDisplacement = v3;
  finalTime = v4;
  result.textContent = '';
});

finalTimeRadio.addEventListener('click', function() {
  variable1.textContent = '(V) Instantaneous Velocity (m/s)';
  variable2.textContent = '(x1) Initial Displacement (m)';
  variable3.textContent = '(x2) Final Displacement (m)';
  variable4.textContent = '(t1) Initial Time (sec)';
  instantaneousVelocity = v1;
  initialDisplacement = v2;
  finalDisplacement = v3;
  initialTime = v4;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(instantaneousVelocityRadio.checked)
    result.textContent = `Instantaneous Velocity = ${computeInstantaneousVelocity().toFixed(2)} m/s`;

  else if(initialDisplacementRadio.checked)
    result.textContent = `Initial Displacement = ${computeInitialDisplacement().toFixed(2)} m`;

  else if(finalDisplacementRadio.checked)
    result.textContent = `Final Displacement = ${computeFinalDisplacement().toFixed(2)} m`;

  else if(initialTimeRadio.checked)
    result.textContent = `Initial Time = ${computeInitialTime().toFixed(2)} sec`;

  else if(finalTimeRadio.checked)
    result.textContent = `Final Time = ${computeFinalTime().toFixed(2)} sec`;
})

// calculation

function computeInstantaneousVelocity() {
  return (Number(finalDisplacement.value) - Number(initialDisplacement.value)) / (Number(finalTime.value) - Number(initialTime.value));
}

function computeInitialDisplacement() {
  return Number(finalDisplacement.value) - (Number(instantaneousVelocity.value) * (Number(finalTime.value) - Number(initialTime.value)));
}

function computeFinalDisplacement() {
  return (Number(instantaneousVelocity.value) * (Number(finalTime.value) - Number(initialTime.value))) + Number(initialDisplacement.value);
}

function computeInitialTime() {
  return Number(finalTime.value) - ((Number(finalDisplacement.value) - Number(initialDisplacement.value)) / Number(instantaneousVelocity.value));
}

function computeFinalTime() {
  return ((Number(finalDisplacement.value) - Number(initialDisplacement.value)) / Number(instantaneousVelocity.value)) + Number(initialTime.value);
}