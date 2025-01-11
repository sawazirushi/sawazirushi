$('#wrapper').multiscroll({
    sectionsColor: ['#333', '#444', '#555','#333', '#444', '#555'],
	anchors: ['area1', 'area2', 'area3','area4','area5','area6'],
	menu: '#menu',
	navigation: true,
	navigationTooltips:['Area1', 'Area2', 'Area3','Area4','Area5','Area6'],
	loopTop: true,
	loopBottom: true,
});

document.addEventListener('DOMContentLoaded', function() { 
    const calendarBody = document.getElementById('calendar-body');
    const openingHoursDiv = document.getElementById('opening-hours');

    const openingHoursMap = {
        1: '',
        2: '',
        3: '',
        4: '4日営業時間：12:00 - 24:00',
        5: '5日営業時間：12:00 - 24:00',
        6: '6日営業時間：12:00 - 24:00',
        7: '7日営業時間：12:00 - 24:00',
        8: '8日営業時間：16:10 - 24:00',
        9: '9日営業時間：16:10 - 24:00',
        10: '10日営業時間：16:10 - 24:00',
        11: '',
        12: '12日営業時間：12:00 - 24:00',
        13: '13日営業時間：12:00 - 24:00',
        14: '14日営業時間：12:00 - 24:00',
        15: '15日営業時間：12:00 - 24:00',
        16: '16日営業時間：12:00 - 24:00',
        17: '17日営業時間：12:00 - 24:00',
        18: '18日営業時間：12:00 - 24:00',
        19: '19日営業時間：12:00 - 24:00',
        20: '20日営業時間：12:00 - 24:00',
        21: '21日営業時間：12:00 - 24:00',
        22: '22日営業時間：12:00 - 24:00',
        23: '23日営業時間：12:00 - 24:00',
        24: '24日営業時間：12:00 - 24:00',
        25: '25日営業時間：12:00 - 24:00',
        26: '26日営業時間：12:00 - 24:00',
        27: '27日営業時間：12:00 - 24:00',
        28: '28日営業時間：12:00 - 24:00',
        29: '29日営業時間：12:00 - 24:00',
        30: '30日営業時間：12:00 - 24:00',
        31: '31日営業時間：12:00 - 24:00'
    };
    

    function generateCalendar(year, month) {
        const daysInMonth = 31;
        const startDay = 3;

        let date = 1;
        let calendarHTML = '';

        for (let i = 0; i < 5; i++) {
            let row = '<tr>';
            for (let j = 0; j < 7; j++) {
                if (i === 0 && j < startDay) {
                    row += '<td></td>';
                } else if (date > daysInMonth) {
                    row += '<td></td>';
                } else {
                    const openingHours = openingHoursMap[date] || '定休日';
                    row += `<td data-opening-hours="${openingHours}">${date}</td>`;
                    date++;
                }
            }
            row += '</tr>';
            calendarHTML += row;
        }

        calendarBody.innerHTML = calendarHTML;
    }

    const today = new Date();
    generateCalendar(today.getFullYear(), today.getMonth());

    calendarBody.addEventListener('click', function(event) {
        const cell = event.target;
        if (cell.tagName === 'TD' && cell.innerHTML !== '') {
            openingHoursDiv.textContent = cell.getAttribute('data-opening-hours');
        }
    });
});
