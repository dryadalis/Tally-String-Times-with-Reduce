// timeNodes is not an array ! is node List
const timeNodes = Array.from(document.querySelectorAll('[data-time]')); //turn this drom a node list into array 

const seconds = timeNodes
    .map(node => node.dataset.time) // make array of strings 
    .map(timeCode => {
        const [mins, secs] = timeCode.split(':').map(parseFloat); /* when we spilt a string we will get still string,
                                                                    so we have to convert strings into numbers
                                                                    using parseFloat function */
        return (mins * 60) + secs; // get full number of seconds of each video duration
    })
    .reduce((total, vidSeconds) => total + vidSeconds); // total number of sec for every single video added together

    // chop down total number of sec into the hours minutes and seconds

    let secondsLeft = seconds; // let is used because we need to reassing this value over and over
    const hours = Math.floor(secondsLeft / 3600); // round to lower limit
    secondsLeft = secondsLeft % 3600; /* What % does is it says "How many are left after
                                        they've been evenly distributed?
                                        We have 11 M&Ms and 5 kids. 11 % 5 = 1
                                        There's going to be 1 M&M left*/
    const minutes = Math.floor(secondsLeft / 60);
    secondsLeft = secondsLeft % 60;

    console.log(hours, minutes, secondsLeft);

    document.getElementById('result').innerHTML = "The duration of all videos is: "  + hours + ":" + minutes + ":" + secondsLeft;
            

    