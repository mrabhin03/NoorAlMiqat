(function ($) {
    "use strict";

    $.fn.extend({ 

      countdown100: function(options) {
        var defaults = {
          timeZone: "",
          endtimeYear: 0,
          endtimeMonth: 0,
          endtimeDate: 0,
          endtimeHours: 0,
          endtimeMinutes: 0,
          endtimeSeconds: 0,
        }

        var options =  $.extend(defaults, options);

        return this.each(function() {
          var obj = $(this);
          initializeClock();

          function getTimeRemaining(targetDate) {
            const currentDate = new Date();
            let target = new Date(targetDate);
            
            if (isNaN(target.getTime())) {
              return "Invalid Date";
            }
            
            let diffInMilliseconds = target - currentDate;
            
            let isPast = diffInMilliseconds < 0;
            diffInMilliseconds = Math.abs(diffInMilliseconds);
            
            let seconds = Math.floor((diffInMilliseconds / 1000) % 60);
            let minutes = Math.floor((diffInMilliseconds / (1000 * 60)) % 60);
            let hours = Math.floor((diffInMilliseconds / (1000 * 60 * 60)) % 24);
            let days = Math.floor((diffInMilliseconds / (1000 * 60 * 60 * 24)) % 30);
            let months = Math.floor((diffInMilliseconds / (1000 * 60 * 60 * 24 * 30)) % 12);
            let years = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24 * 365));
            
            return {
              'years': years,
                'months': months,
                'days': days,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
            };
        }
        
        function initializeClock() {
            var endtime="2025-01-01T00:00:00" 
            var yearsSpan = $(obj).find('.years'); // Add selector for years
            var monthsSpan = $(obj).find('.months'); // Add selector for months
            var daysSpan = $(obj).find('.days');
            var hoursSpan = $(obj).find('.hours');
            var minutesSpan = $(obj).find('.minutes');
            var secondsSpan = $(obj).find('.seconds');
        
            function updateClock() { 
                var t = getTimeRemaining(endtime);
        
                yearsSpan.html(t.years);
                monthsSpan.html(('0' + t.months).slice(-2));
                daysSpan.html(('0' + t.days).slice(-2));
                hoursSpan.html(('0' + t.hours).slice(-2));
                minutesSpan.html(('0' + t.minutes).slice(-2));
                secondsSpan.html(('0' + t.seconds).slice(-2));
        
                if (t.total <= 0) {
                    clearInterval(timeinterval);
                }
            }
        
            updateClock();
            var timeinterval = setInterval(updateClock, 1000);
        }
        

          


        });
      }
    });

    

})(jQuery);