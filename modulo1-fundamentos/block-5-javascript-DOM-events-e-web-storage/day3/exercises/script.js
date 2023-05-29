function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  const value = document.getElementById('days');
    let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

        for (index = 0; index < decemberDaysList.length; index +=1){
        let creatdays = document.createElement('li');
        creatdays.classList.add('day')
        value.appendChild(creatdays);
        
        
        
      }
      const holiday1 = document.getElementsByClassName('day')[24];
      const holiday2 = document.getElementsByClassName('day')[25];
      const holiday3 = document.getElementsByClassName('day')[31];
      holiday1.classList.add('holiday');
      holiday2.classList.add('holiday');
      holiday3.classList.add('holiday');

      const friday4 = document.getElementsByClassName('day')[4];
      const friday8 = document.getElementsByClassName('day')[8];
      const friday18 = document.getElementsByClassName('day')[18];
      const friday25 = document.getElementsByClassName('day')[25];

      friday4.classList.add('friday');
      friday8.classList.add('friday');
      friday18.classList.add('friday');
      friday25.classList.add('friday');
     
