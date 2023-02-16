// let start = moment("2022-12-20")
// let end = moment("2024-01-01")
// let days = (end.diff(start,'days')/7)

    let projectCreatedAt = "2022-12-20"
    let dat2a = moment("2022-12-20").startOf('month')
    let datafinal = moment("2022-12-20").startOf('month')
    let datafinalyear = moment("2022-12-20").startOf('month')

    let resultDates = []; // array to hold day names?
    const current = dat2a; // current date
    let n = 7; // days to go back
    while (n > 0) {
      resultDates.push(current.format("dd")) // get day n and push it to array
      current.add(1, "day") // subtract a day
      n--;
    }
    console.log("222222222222",resultDates);

//     this.startOfMonth = []
//     this.startOfLowerMonth = []
//     for (let i = 0; i <= 60; i++) {
//       if (datafinalyear.year() > moment().year()) {
//         break
//       } else {
//         let val = datafinal.toString()
//         let obj = {
//           from: val,
//           to: moment(val).add(6, 'days').toString(),
//           days: resultDates
//         }
//         let obj1 = {
//           from: val,
//           to: moment(val).add(6, 'days').toString(),
//           week_width: 70,
//           days: resultDates
//         }
//         this.startOfMonth.push(obj)
//         this.startOfLowerMonth.push(obj1)
//         datafinal.add(7, 'days')
//       }
//     }

//     console.log("this.startOfMonth****", this.startOfMonth);
//     console.log("this.startOfMonth****", this.startOfLowerMonth);





    let start = moment(this.projectCreatedAt)
    let end = moment("2024-01-01")
    let days = (end.diff(start, 'days') / 7)
    this.startOfMonth = []
    this.startOfLowerMonth = []
    for (let i = 0; i <= days; i++) {
      if (datafinalyear.year() > moment().year()) {
        break
      } else {
        let val = datafinal.toString()
        let obj = {
          from: val,
          to: moment(val).add(6, 'days').toString(),
          days: resultDates
        }
        let obj1 = {
          from: val,
          to: moment(val).add(6, 'days').toString(),
          week_width: 70,
          days: resultDates
        }
        this.startOfMonth.push(obj)
        this.startOfLowerMonth.push(obj1)
        datafinal.add(7, 'days')
      }
    }

    console.log("this.startOfMonth****", this.startOfMonth);
















// var date = new Date("2022-12-20");
// var month = moment().year();

// // date.setDate(1);
// console.log("datweeeee",date);
// if(moment(date).year() <= month){
//     console.log("ewewrewrkj");
// }
// var all_days = [];
// while (moment(date).year() <= month) {
//     console.log("ssssssssssss",moment(date).year());
//   var d = date.getFullYear() + '-' + (date.getMonth() + 1).toString().padStart(2, '0') + '-' + date.getDate().toString().padStart(2, '0');
//   all_days.push(d);
//   date.setDate(date.getDate() + 1);
// }
// console.log("helllllllo",all_days);

// let start = moment("2022-11-07");
// let end = moment("2024-01-01");
// let days = end.diff(start, "days") / 30;

// this.mainMonthArray = [];
// let firstMon = moment("2022-11-07");
// console.log("daaaaaaa", firstMon);
// let k = days;
// while (k > 0) {
//   let obj = {
//     month: firstMon.format("MMMM"),
//     mon_width: firstMon.daysInMonth() * 10,
//     week: "dfdsf",
//   };
//   this.mainMonthArray.push(obj);
//   firstMon.add(1, "M");
//   k--;
// }
// console.log("list of month", this.mainMonthArray);

// var startDate = moment('2022-12-20');
// var endDate = moment('2023-02-05')
// console.log("heeeeeeeeee",endDate.diff(startDate, 'days'));
// var listOfYears = [];
// listOfMonth = []
// console.log("aaaaaa",startDate.year());
// console.log("aaaaaa",startDate);
// while(startDate.year() <= moment().year()){
//     listOfYears.push(startDate.year())
//     var data = moment.monthsShort()
//     console.log("sssss0",data);
//     listOfMonth.push(...data)
//     startDate.add(1,'y')
// }

// console.log("listOfYears",listOfYears);
// console.log("listOfMonth",listOfMonth);
