# timeDownCounter
JS countdown timer with options to styling and print timer in short time 

## Screenshot from normal result

![Yii2 timeDownCounter screenshot_t1](http://2nees.com/github/timeDownCounter/temp-0.png)

## Screenshot for templete 1

![Yii2 timeDownCounter screenshot_temp1](http://2nees.com/github/timeDownCounter/temp-1.png)

## Screenshot for templete 2

![Yii2 timeDownCounter screenshot_temo2](http://2nees.com/github/timeDownCounter/temp-2.png)

And you can custmize you'r template as yourr like, we give you an option to build and control your design or use our simple design and change color, distance ...etc as you like.

## Features

1. Countdown timer work with days, houres, minutes and seconds
2. Appilty to get timer html with fully html item container, or semi or none.(in other word you will get result dirctly or with html wrappring).
3. Countdown timer can be stop to custmize styling or to get template to init it as default value.
4. You have an option to determine the sperator for timer.
5. You can handling time over message.
6. You have an option to determind if timer will display d-h-m-s or h-m-s or m-s.
7. its an javascript functon and you dont need to include any other js/css lib.

## Decencies

Nothing.

## Installation:
The preferred way to install this extension is through [composer](https://getcomposer.org/).

Either run

`php composer.phar require --prefer-dist aneeshikmat/timeDownCounter "*@dev"`

or you can install function with examples from:
http://2nees.com/timeDownCounter.php

## Usage
To use this function you need to add this code to your html: 
```
<body>
............
<div id="time-down-counter"></div>
<script type="text/javascript" src="timeDownCounter.js"></script>
<script>
    // Run Default Counter option
    timeDownCounter({
        //options
    }).startCountDown();
</script>
</body>

```
As you see, its very simple, and now we will be explaning this code, and then go to display all option may be use to help us,
In prev code we call timeDownCounter function, **startCountDown()** is used to start count down timer.(if you write this syntax dirctly without determind any option, you will git time over message).

Now let's go to explain all possible option:

```
timeDownCounter({
                'countDownIdSelector': 'time-down-counter',
                'countDownDate':  new Date("Sep 5, 2018 15:37:25").getTime(),
                'countDownResSperator': '-'
                'countDownReturnData': 'from-hours',
                'addSpanForResult': true,
                'addSpanForEachNum': true,
                'contDownOver': 'Time is expired, and you can say hello now :P',
                'getTemplateResult': 0
            }).startCountDown();
```
1) countDownIdSelector: This option give you apilty to change default timer wrapper, its usfall if you have more than one timer in the same html page, default selctor value is 'time-down-counter', and this selector must be an ID.

2) countDownDate: This option will accept count down date in millisecond, if you keep it empty the default value will be current time so that the count down over message will be print.
Note: if you using **PHP** you can use strtotime('....') * 1000 like **strtotime("+1 day") * 1000;**.

3) countDownResSperator: This option give you apilty to change time Sperator, default sperator is **:** nested in <span> tag.
    
4) countDownReturnData: This option give you apilty to display full timer result (days, hours, minutes, seconds), or (hours, minutes, seconds) or (minutes, seconds), and accpet options is ('from-days' is default, 'from-hours', 'from-minutes').
Note: This option will kep timer work nomraly without removed any value, just hide / show option.

5) addSpanForResult: This option give you apilty to set each number groub in <span> tag contain general class called **item-counter-down**.
    
6) addSpanForEachNum: This option give you apilty to set each number in timer in <span> tag contain general class called **inner-item-counter-down**. 
    
## screenshot for html result for point 5 and 6: 

![Yii2 timeDownCounter screenshot_temo2](http://2nees.com/github/timeDownCounter/temp-3.png)

7) contDownOver: This option give you apilty to update message for count down over (when timer is finshed).

8) getTemplateResult: This option give you apilty to stop count down timer, the default value is **0** and thats mean timer work, **1** is mean stop timer and display timer result, **2** is mean stop timer and display html timer result.
These option give you abilty to design / styling timer on browser dirctly, since the timer is work depednace of Interval function, and second option is usfall when you need to get result to set default value in html, since js need some time to start timing.

example if we use **getTemplateResult: 2** :
```
<div id="time-down-counter">30<span class="timeDownSperator">:</span>23<span class="timeDownSperator">:</span>59<span class="timeDownSperator">:</span>58</div>
```
