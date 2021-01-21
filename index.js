function leapyear(year)
{
return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}


if (year = 0){
    console.log('This is a Leap Year')
} else {
    console.log(' This is Not a Leap Year ')
}

console.log(leapyear(1700));