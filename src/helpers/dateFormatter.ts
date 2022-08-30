const addZero = (num: number) => {
  if (num >= 0 && num <= 9) {
    return "0" + num;
  } else {
    return num;
  }
};

export const dateFormatter = (date: Date) => {
  const hours = date.getHours();
  const ampm = hours >= 12 ? "pm" : "am";
  return date.toLocaleDateString("en-us") +
    " " + addZero(hours) + ":" + addZero(date.getMinutes()) + " " + ampm;
};
