// Base URL
let apiKey = "194f506dc2904b0ea10cd942deb63b14";
const baseUrl = `https://api.rawg.io/api/games?key=${apiKey}`;

// Get Month
const GetCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  return month < 10 ? `0${month}` : month;
};

// Get Date
const GetCurrentDay = () => {
  const getCurrDay = new Date().getDate();
  return getCurrDay < 10 ? `0${getCurrDay}` : getCurrDay;
};

// Get Year
const GetCurrentYear = new Date().getFullYear();
const currentMonth = GetCurrentMonth();
const currentDay = GetCurrentDay();

// Date Formats
const currentIdenticalDates = `${GetCurrentYear}-${currentMonth}-${currentDay}`;
const previousIdenticalDates = `${
  GetCurrentYear - 1
}-${currentMonth}-${currentDay}`;

const popularGames = `${baseUrl}&dates=${previousIdenticalDates},${currentIdenticalDates}&ordering=-rating&page_size=10`;

export const popularGamesUrl = () => popularGames;
