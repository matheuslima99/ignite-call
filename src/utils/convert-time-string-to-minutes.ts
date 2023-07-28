export function convertTimeStringToMinutes(timeString: string) {
  const [hours, minutes] = timeString.split(":");

  return Number(hours) * 60 + Number(minutes);
}
