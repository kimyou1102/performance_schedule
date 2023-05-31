export const getDate = (type, year, month, day) => {
    switch (type) {
      case "last":
        return `${month !== 1 ? year : year - 1}.${
          month === 1 ? 12 : month < 10 ? `0${month - 1}` : month - 1
        }.${day > 9 ? day : `0${day}`}`;

      case "current":
        return `${year}.${String(month).padStart(2, 0)}.${
          day > 9 ? day : `0${day}`
        }`;

      case "next":
        return `${month === 12 ? year + 1 : year}.${
          month === 12 ? 1 : month < 10 ? `0${month + 1}` : month + 1
        }.${day > 9 ? day : `0${day}`}`;
      default:
        break;
    }
  };