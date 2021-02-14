var deviceWidth = document.documentElement.clientWidth;
/*alert(deviceWidth); */
/*求设备宽度*/
if (deviceWidth > 750)
    deviceWidth = 750;
document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px';

var year = document.getElementById('year');
var hours = document.getElementById('hours');
var minute = document.getElementById('minute');
var second = document.getElementById('second');

function show() {
    var dateStar = new Date('2020-9-7').getTime();
    var dateStar = new Date('2020/9/7').getTime();
    var dateNow = new Date().getTime();
    var dateS_N = dateNow - dateStar;
    var datePut = Math.floor(dateS_N / (24 * 3600 * 1000));
    var dateHours = new Date().getHours();
    var dateMinute = new Date().getMinutes();
    var dateSecond = new Date().getSeconds();

    year.innerHTML = datePut;
    hours.innerHTML = dateHours;
    minute.innerHTML = dateMinute;
    second.innerHTML = dateSecond;
    var timeID = setTimeout(show, 1000);
}