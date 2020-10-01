function printDate() {
    let count = 0;
    let timeOut = setInterval(() => {
      if (count < 5) {
        let date = String(new Date()).substring(4, 24);
        let final_date =
          date.substring(7, 11) +
          "-" +
          date.substring(0, 3) +
          "-" +
          date.substring(4, 6) +
          date.substring(11, date.length);
        console.log(final_date);
        count += 1;
      } else {
        clearInterval(timeOut);
        count = 0;
      }
    }, 5000);
  }

  printDate();