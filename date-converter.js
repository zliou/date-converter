//timestamp in milliseconds
function convertTimestampToLocaleString(timestamp) {
  return new Date(timestamp).toLocaleString();
}

function convertTimestampToLocaleDateString(timestamp) {
  return new Date(timestamp).toLocaleDateString();
}

function convertTimestampToUTCString(timestamp) {
  return new Date(timestamp).toUTCString();
}

//date in string
function converToTimestamp(date) {
  return Date.parse(date);
} 

module.exports = {
  convertTimestampToLocaleString,  
  convertTimestampToLocaleDateString, 
  convertTimestampToUTCString, 
  converToTimestamp
};