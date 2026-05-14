function getTimestamp() {
  const date = new Date();
  const timestamp = date.toLocaleString("th-TH");
  return timestamp;
}

export default getTimestamp;