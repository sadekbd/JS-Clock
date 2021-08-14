
/*================ Digital Dynamic Clock setUp ============ */

function digitalClock() {
				let date = new Date();
				let hours = date.getHours();
				let minutes = date.getMinutes();
				let seconds = date.getSeconds();
				let timeFormat = 'AM';
				
				if (hours === 0 ){
								hours = 12;
				}else if(hours > 12){
								hours = hours - 12;
								timeFormat = 'PM';
				}
				
				/* if else statement Using ternary operator */
				
				hours = hours < 10 ? '0' + hours : hours;
				minutes = minutes < 10 ? '0' + minutes : minutes;
				seconds = seconds < 10 ? '0' + seconds : seconds;
				
				let finalTime =`${hours}:${minutes}:${seconds}`;
				
				document.getElementById('time').innerText = finalTime;
				document.querySelector('small').innerText = timeFormat;
	
	
				setInterval(digitalClock, 1000);
}

digitalClock();


/*======================== Dynamic calendar setUp ============== */

function dateFormat() {
				let date = new Date();
				let day = date.getDate();
				let month = date.getMonth()+1;
				let year = date.getFullYear();
				
				/* if else statement Using ternary operator */
				
				day = day < 10 ? '0' + day :day;
				month = month < 10 ?  '0' + month : month;
				
			// 	let finalDate = `${day}:${month}:${year}`;
				
			
				
				document.getElementById('day').innerText = day;
				document.getElementById('month').innerText = month;
				document.getElementById('year').innerText = year;
}

dateFormat();
