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
                'countDownIdSelector': 'time-down-counter-3',
                'countDownDate':  new Date("Sep 5, 2018 15:37:25").getTime(),
                'countDownResSperator': '-'
                'countDownReturnData': 'from-hours',
                'addSpanForResult': true,
                'addSpanForEachNum': true,
                'contDownOver': 'Time is expired, and you can say hello now :P',
            }).startCountDown();
```
