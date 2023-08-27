export default function slugify(str) {
  return str.toLowerCase().replace(/ /g, '-');
}
