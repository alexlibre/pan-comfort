import flatpickr from 'flatpickr';
import { Russian } from 'flatpickr/dist/l10n/ru';
import 'flatpickr/dist/themes/dark.css';

const initDateTimePicker = () => {
  let maxTime;
  let minTime;

  const dateOn = flatpickr('.js-datetimepicker', {
    dateFormat: "d M Y",
    defaultDate: [new Date()],
    minDate: "today",
    enableTime: false,
    locale: Russian,

    onChange: function (selectedDates, dateStr, instance) {
      const day = new Date(selectedDates).getDay();
      instance.config.maxTime = day === 0 || day === 6 ? "16:00" : "20:00";

      maxTime = instance.config.maxTime;
      // timeto.clear();
      // timefrom.clear();

      return maxTime;
    },
  });

  var timefrom = flatpickr('.js-datetimepicker-t-from', {
    time_24hr: true,
    noCalendar: true,
    enableTime: true,
    minTime: "09:00",
    defaultDate: ['09:00'],
    defaultHour: 9,
    defaultMinute: 0,
    onOpen: function (selectedDates, dateStr, instance) {
      minTime = instance.config.minTime;
      instance.config.maxTime = maxTime;
      return minTime;
    }
  });


  var timeto = flatpickr('.js-datetimepicker-t-to', {
    time_24hr: true,
    noCalendar: true,
    enableTime: true,
    minTime: minTime,
    defaultDate: ['10:00'],
    defaultHour: 10,
    defaultMinute: 0,
    onOpen: function (selectedDates, dateStr, instance) {
      instance.config.maxTime = maxTime
    }
  });
}

export default initDateTimePicker;
