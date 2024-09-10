/**
* Deze functie zet de DateTime vanuit de database om naar een leesbare string.
* @param {string} datetime - De DateTime string afkomstig van de database.
* @returns {string} De geformatteerde leesbare DateTime string.
**/
export const formatDateTime = (datetime: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    timeZone: 'Europe/Brussels',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };

  const date = new Date(datetime);
  return new Intl.DateTimeFormat('nl-NL', options).format(date);
}

/**
 * Deze functie zet de DateTime vanuit een input om naar database DateTime value.
 * @param {Date} date - De DateTime string afkomstig van een input.
 * @returns {string} De geformatteerde DateTime string voor de database.
**/
export const formatCustomDateTime = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}:00`;
}

/**
 * Deze functie zet de DateTime vanuit een input om naar database Date value.
 * @param {Date} date - De DateTime string afkomstig van een input.
 * @returns {string} De geformatteerde Date string voor de database.
**/
export const formatCustomDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

/**
 * Deze functie controleert of een Date of die in het verleden ligt.
 * @param {Date} date - De DateTime string afkomstig van de database.
 * @returns {boolean} Of de DateTime in het verleden ligt.
 **/
export const isDateTimeInPast = (date: Date): boolean => {
  return date < new Date();
}

/**
 * Deze functie zet een Date om naar een leesbare date.
 * Bv. "Dinsdag 1 januari"
 * @param {Date} date - De database date string.
 * @returns {string} De geformatteerde input date string.
 * */
export const formatDate = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };

  return new Intl.DateTimeFormat('nl-NL', options).format(new Date(date));
};

/**
 * Deze functie zet een Date om naar een leesbare tijd.
 * Bv. "19u00"
 * @param {Date} date - De database date string.
 * @returns {string} De geformatteerde input time string.
 * */
export const formatTime = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: 'numeric',
  };

  return new Intl.DateTimeFormat('nl-NL', options).format(new Date(date));
};

/**
 * Deze functie zet een Date om naar een waarde voor een input.
 * @param {Date} date - De database date string.
 * @returns {string} De geformatteerde input time string.
 * */
export const formatDateToInputDateTime = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${year}-${month}-${day}T${hours}:${minutes}`;
};

/**
 * Deze functie zet een Date om naar een waarde voor een input.
 * @param {Date} date - De database date string.
 * @returns {string} De geformatteerde input date string.
 * */
export const formatDateToInputDate = (date: Date | null): string => {
  if(!date) return '';

  const year = String(date.getFullYear()).padStart(4, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};

/**
 * Deze functie zet een Date om naar een waarde voor een input.
 * @param {Date} date - De database date string.
 * @returns {string} De geformatteerde input date string.
 * */
export const formatDateToDate = (date: Date | null, includeTime?: boolean): string => {
  if(!date) return '';

  const year = String(date.getFullYear()).padStart(4, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  if(includeTime) {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${day}/${month}/${year} ${hours}:${minutes}`;
  }

  return `${day}/${month}/${year}`;
};