# iCalendar
Simple iPhone styled Vanilla JavaScript Calendar Library

Include CSS and JS files.
```html
<script src="..js/iCalendar.css"></script>
<script src="..js/iCalendar.es5.js"></script>

<div id="calendar"></div>
```
Include in your script tag.
```javascript
var iCal = new iCalendar('calendar');
iCal.render();

//Listen to calendar date selected event
document.addEventListener('iCalendarDateSelected', function(event) {
            console.log(iCal.selectedDate);
});
```
