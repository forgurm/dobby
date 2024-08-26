// src/utils.js
export function addDate(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }
  
  export function subtractDate(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() - days);
    return result;
  }
  
  export function addHours(date, hours) {
    const result = new Date(date);
    result.setHours(result.getHours() + hours);
    return result;
  }
  