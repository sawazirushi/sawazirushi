document.addEventListener("DOMContentLoaded", function() {

    setTimeout(function() {
        document.getElementById('opening-layer').style.opacity = '0';
        setTimeout(function() {
            document.getElementById('opening-layer').style.display = 'none';
            document.getElementById('modal-window').style.display = 'flex';
        }, 3000);
    }, 1000);

    document.getElementById('close-modal-button').addEventListener('click', function() {
        document.getElementById('modal-window').style.display = 'none';
    });
});


document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
      document.getElementById('opening-layer').style.opacity = '0';
      setTimeout(function() {
          document.getElementById('opening-layer').style.display = 'none';
      }, 3000);
  }, 1000);
});

const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach(slide => {
      slide.style.display = 'none';
    });
    slides[index].style.display = 'block';
  }

  function nextSlide() {
    slides[currentSlide].style.display = 'none';
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function startSlider() {
    showSlide(currentSlide);
    setInterval(nextSlide, 5000);
  }

  startSlider();

  document.addEventListener('DOMContentLoaded', function() {
    const calendarBody = document.getElementById('calendar-body');
    const openingHoursDiv = document.getElementById('opening-hours');
  
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();

    const openingHoursMap = {
      1: '1日営業時間：10:00 - 24:00',
      2: '2日営業時間：10:00 - 24:00',
      3: '3日営業時間：10:00 - 24:00',
      4: '4日営業時間：10:00 - 24:00',
      5: '5日営業時間：10:00 - 24:00',
      6: '6日営業時間：10:00 - 24:00',
      7: '7日営業時間：10:00 - 24:00',
      8: '8日営業時間：10:00 - 24:00',
      9: '9日営業時間：10:00 - 24:00',
      10: '10日営業時間：10:00 - 24:00',
      11: '11日営業時間：10:00 - 24:00',
      12: '12日営業時間：10:00 - 24:00',
      13: '13日営業時間：10:00 - 24:00',
      14: '14日営業時間：10:00 - 24:00',
      15: '15日営業時間：10:00 - 24:00',
      16: '16日営業時間：10:00 - 24:00',
      17: '17日営業時間：10:00 - 24:00',
      18: '18日営業時間：16:10 - 24:00',
      19: '19日営業時間：16:10 - 24:00',
      20: '20日営業時間：15:10 - 24:00',
      21: '21日営業時間：10:00 - 24:00',
      22: '22日営業時間：10:00 - 24:00',
      23: '23日営業時間：10:00 - 24:00',
      24: '24日営業時間：12:00 - 24:00',
      25: '25日営業時間：12:00 - 24:00',
      26: '26日営業時間：12:00 - 24:00',
      27: '27日営業時間：12:00 - 24:00',
      28: '28日営業時間：10:00 - 24:00',
      29: '29日営業時間：10:00 - 24:00',
      30: '30日営業時間：12:00 - 24:00',
    };
  
    function generateCalendar(year, month) {
      const startDate = new Date(year, month, 1);
      const endDate = new Date(year, month + 1, 0);
      const daysInMonth = endDate.getDate();
      const startDay = startDate.getDay();
  
      let date = 1;
      let calendarHTML = '';
  
      for (let i = 0; i < 6; i++) {
        let row = '<tr>';
        for (let j = 0; j < 7; j++) {
          if (i === 0 && j < startDay) {
            row += '<td></td>';
          } else if (date > daysInMonth) {
            break;
          } else {
            const openingHours = openingHoursMap[date] || '営業時間：休業';
            row += `<td data-opening-hours="${openingHours}">${date}</td>`;
            date++;
          }
        }
        row += '</tr>';
        calendarHTML += row;
      }
  
      calendarBody.innerHTML = calendarHTML;
    }
  
    calendarBody.addEventListener('click', function(event) {
      const cell = event.target;
      if (cell.tagName === 'TD' && cell.innerHTML !== '') {
        openingHoursDiv.textContent = cell.getAttribute('data-opening-hours');
      }
    });
  
    generateCalendar(currentYear, currentMonth);
  });