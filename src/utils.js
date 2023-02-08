/**
 * @method convertTruncateText - add "..." with a limitation
 * @param {*} source
 * @param {*} size
 */
const convertTruncateText = (source, size) => {
  if (source !== null || source !== undefined) {
    return source.length > size ? source.slice(0, size - 1) + "…" : source;
  } else return source;
};

const formatDate = (date) => {
  const handleDate = new Date(date);

  const dateTimeFormat = new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric"
  });
  return dateTimeFormat.format(handleDate);
};

export { formatDate, convertTruncateText };
