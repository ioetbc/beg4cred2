export const standardizeClassName = string => {
  return string.replace(/[^a-zA-Z ]/g, '').toLowerCase()
}
