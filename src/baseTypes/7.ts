/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum DayOfWeek {
  Monday ,
  Tuesday,
  Wednesday,
  Thursday,
  Friday ,
  Saturday,
  Sunday 
}



function isWeekend(day: DayOfWeek): boolean {
// let restOrWorkDay = ''
return day === DayOfWeek.Saturday || day === DayOfWeek.Sunday 
}

console.log(isWeekend(DayOfWeek.Saturday));
