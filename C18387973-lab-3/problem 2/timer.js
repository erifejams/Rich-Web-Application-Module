const {
  Observable,
  fromEvent,
  timer
} = rxjs;

//const { interval, take } = rxjs

 //to get input for the hour, minute and seconds
var getMinuteInput = document.getElementById('minuteInput');
var getHourInput = document.getElementById('hourInput');
var getSecondsInput = document.getElementById('secondsInput');

//event stream for the start countdown button click
const startTimer$ = fromEvent(startCountdown, 'click');


function timerFunction() {
	//const getHourInput = document.getElementById('hourInput');
  //trying to get the time to go down
 	getSecondsInput = getSecondsInput - 1;

	if(getSecondsInput == 0)
	{
		getSecondsInput = 0;
		getMinuteInput = getMinuteInput - 1;

		if( getMinuteInput == 0)
		{
			getMinuteInput=0;
			getHourInput = getHourInput - 1;

			if( getHourInput == 0)
			{
				getHourInput = 0
			}
		}
	}
	
	//to make the timing display cause it was hidden
  document.getElementById('Timerboxed').style.display = 'block';
  const displayBox = document.getElementById("display");
  //ReactDOM.render(element, document.getElementById('Timerboxed'));
  
  ReactDOM.render(document.getElementById("display").innerHTML = getHourInput  + " : "+ getMinuteInput + " : " + getSecondsInput);
  
  //to start the timer 
  return (
        <div className="timerFunction">
            <button onClick={displayBox}  id = "startCountdown">Start Countdown</button>
        </div>
    )
}

//where it will display
//const displayBox = document.getElementById("Timerboxed");
//setInterval(tick, 1000);
ReactDOM.render(<timerFunction />, displayBox);
//const countDownEl = document.querySelector("#countdown");
