export const calculateAge = (birthdayString: string) => {
  const birthday = new Date(birthdayString);
  const today = new Date();

  let age = today.getFullYear() - birthday.getFullYear();
  const currentMonth = today.getMonth();
  const birthdayMonth = birthday.getMonth();
  const currentDay = today.getDate();
  const birthdayDay = birthday.getDate();

  /** 생일이 지났는지 확인 */
  if (
    currentMonth < birthdayMonth ||
    (currentMonth === birthdayMonth && currentDay < birthdayDay)
  ) {
    age--;
  }
  return age;
};
