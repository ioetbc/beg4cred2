export const standardizeClassName = string => {
  return string.replace(/[^a-zA-Z0-9_]/g, '').toLowerCase()
}
