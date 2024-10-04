/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum DayOfWeek {
  Monday = 'Mon' ,
  Tuesday ="Tue",
  Wednesday = "Wed",
  Thursday = "Thu",
  Friday ="Fri" ,
  Saturday ="Sat",
  Sunday = "Sun"
}



function isWeekend(day: DayOfWeek): boolean {
return day === DayOfWeek.Saturday || day === DayOfWeek.Sunday 
}

console.log(isWeekend(DayOfWeek.Saturday));
