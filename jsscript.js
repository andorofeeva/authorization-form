//Обновление часов
function updateClock() {
    var now = new Date();
    var dname = now.getDay(),
        mo = now.getMonth(),
        dnum = now.getDate(),
        yr = now.getFullYear(),
        hou = now.getHours(),
        min = now.getMinutes(),
        sec = now.getSeconds();

        
        var months = ["Январь", "Февраль", "Март", "Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];
        var week = ["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"];
        var ids = ["dayname","month","daynum","year","hour","minute","seconds"];
        var values = [week[dname], months[mo], dnum, yr, hou, min, sec];
        for(var i = 0; i < ids.length; i++)
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
  }
  
//Создание часов
  function initClock() {
    updateClock();
    window.setInterval("updateClock()", 1000);
  }

