// Run after the production static export: node apply-page-seo.cjs release-out
const fs = require('node:fs');
const path = require('node:path');
const root = process.argv[2];
if (!root) throw new Error('Supply the static export directory.');
const origin = 'https://www.elitehomecarenursing.com';
const pages = new Map();
pages.set('/', ['Elite Home Care & Nursing Services | Trichy & Madurai', 'Contact our Trichy office about home nursing, elderly care and patient attendants. Ask about home care availability in Trichy, Madurai and your locality.']);
const cityDescriptions = {
  Trichy: 'Contact our Trichy office for a patient attendant, elderly care or home nursing. Discuss the care needed at home, duty hours and availability.',
  Madurai: 'Arrange home care in Madurai through our Trichy office. Ask about patient attendants, home nursing, elder care and support for your family.',
  Salem: 'Explore elderly care, patient attendants and nursing support at home in Salem. Contact Elite to discuss your locality and the help your family needs.',
  Thanjavur: 'Explore home care after discharge, elderly care and baby care in Thanjavur. Ask Elite about suitable support and available duty hours.',
  Pudukkottai: 'Find out about home care for elderly relatives, patients and babies in Pudukkottai. Discuss your household’s care needs and local availability with Elite.'
};
const services = {
  'home-care': ['Home Care Services', 'Discuss day-to-day support at home for your family'],
  'home-nursing': ['Home Nursing', 'Ask about nursing support at home after a hospital stay'],
  'patient-care': ['Patient Care at Home', 'Ask about a patient attendant for daily routines and bedside assistance'],
  'elder-care': ['Elder Care at Home', 'Discuss help for an elderly relative with daily routines and companionship']
};
for (const [city, description] of Object.entries(cityDescriptions)) {
  const slug = city.toLowerCase();
  pages.set('/home-care-' + slug, ['Home Care in ' + city + ' | Patient Attendants & Nursing', description]);
  if (city === 'Trichy' || city === 'Madurai') {
    for (const [service, [title, intro]] of Object.entries(services)) {
      pages.set('/services/' + service + '-' + slug, [title + ' in ' + city + ' | Elite Home Care', intro + ' in ' + city + '. Contact Elite to check local availability and duty options.']);
    }
  }
}
const escape = value => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');
const changes = [];
for (const [route, [title, description]] of pages) {
  const base = path.join(root, route.slice(1));
  const file = (route === '/' ? [path.join(root, 'index.html')] : [base + '.html', path.join(base, 'index.html')]).find(fs.existsSync);
  if (!file) throw new Error('Missing export for ' + route);
  const html = fs.readFileSync(file, 'utf8');
  if (!/<head\b[^>]*>[\s\S]*?<\/head>/i.test(html)) throw new Error('Missing head in ' + route);
  const next = html.replace(/(<head\b[^>]*>)([\s\S]*?)(<\/head>)/i, (_, open, head, close) => {
    const kept = head.replace(/<title\b[^>]*>[\s\S]*?<\/title>/gi, '').replace(/<(?:meta|link)\b[^>]*>/gi, tag =>
      /\bname\s*=\s*["']description["']/i.test(tag) || /\brel\s*=\s*["']canonical["']/i.test(tag) ? '' : tag);
    return open + kept + '<title>' + escape(title) + '</title><meta name="description" content="' + escape(description) + '"><link rel="canonical" href="' + origin + route + '">' + close;
  });
  changes.push([file, next]);
}
for (const [file, html] of changes) fs.writeFileSync(file, html);
console.log('Updated search metadata for ' + changes.length + ' pages.');
