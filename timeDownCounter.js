/*
*  Js File Contain Count Down Timer
*  
*  @dev Anees Hikmat
*  @dev-email: aneeshikmat@gmail.com
*/

// Global timeDownCounter Object
var timeDownCounter = function (options) {
    var contDownOver = "EXPIRED";
    var countDownIdSelector = 'time-down-counter';
    var countDownReturnData;// returned data from from-days, from-hours, from-minutes, def value from days
    var countDownResSperator = '<span class="timeDownSperator">:</span>';
    var addSpanForResult = false;
    var addSpanForEachNum = false;
    // Set the date we're counting down to
    var countDownDate = new Date().getTime();
    var getTemplateResult = 0;

    // Update init options value by user
    if(options){
        Object.keys(options).map(function(objectKey, index) {
            var value = options[objectKey];
            eval(objectKey + "='" + value + "'");
        });
    }

    function get2D( num ) {
        return ( num.toString().length < 2 ? "0"+num : num ).toString();
    }

    // Update the count down every 1 second
    return {
        startCountDown: function () {
            var start = setInterval(function () {

                // Get todays date and time
                var now = new Date().getTime();

                // Find the distance between now an the count down date
                var distance = countDownDate - now;

                // Time calculations for days, hours, minutes and seconds
                var timerData = [];
                timerData[0]  = get2D(Math.floor(distance / (1000 * 60 * 60 * 24)));
                timerData[1]  = get2D(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
                timerData[2]  = get2D(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
                timerData[3]  = get2D(Math.floor((distance % (1000 * 60)) / 1000));
                
                // Add span for each item number in timer data
                if(addSpanForEachNum){
                    for(var i = 0; i < timerData.length; i++){
                        var tempTimerData = timerData[i].toString().split('');
                        tempTimerData = tempTimerData.map(function(a, i) { return "<span class='inner-item-counter-down inner-item-counter-down-"+i+"'>" + a + "</span>"; });
                        timerData[i] = tempTimerData.join('');
                    }
                }

                // Add span for each item in timer data
                if(addSpanForResult){
                    timerData = timerData.map(function(a, i) { return "<span class='item-counter-down item-counter-down-"+i+"'>" + a + "</span>"; });
                }

                var countDownReturnDataResult = timerData.join(countDownResSperator);
                if (countDownReturnData == 'from-hours') {
                    timerData.splice(0, 1);
                    countDownReturnDataResult = timerData.join(countDownResSperator);
                } else if (countDownReturnData == 'from-minutes') {
                    timerData.splice(0, 2);
                    countDownReturnDataResult = timerData.join(countDownResSperator);
                }

                // Return Code Template Result
                if(getTemplateResult && getTemplateResult != '0'){
                    clearInterval(start);
                    if(getTemplateResult == '2'){
                        document.getElementById(countDownIdSelector).textContent = '<div id="'+countDownIdSelector+'">' + countDownReturnDataResult + '</div>';
                    }else{
                        document.getElementById(countDownIdSelector).innerHTML = countDownReturnDataResult;
                    }
                    return;
                }
                
                // Output the result in an element with id="demo"
                document.getElementById(countDownIdSelector).innerHTML = countDownReturnDataResult;

                // If the count down is over, write some text
                if (distance < 0) {
                    clearInterval(start);
                    document.getElementById(countDownIdSelector).innerHTML = contDownOver;
                }
            }, 1000);
        }
    };
};