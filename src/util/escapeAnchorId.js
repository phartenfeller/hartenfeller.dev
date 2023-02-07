export default function escapeAnchorId(text) {
  return text
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/'/g, '')
    .replace(/"/g, '')
    .replace(/:/g, '')
    .replace(/\//g, '');
}
