const yaml = require('js-yaml');
const fs   = require('fs');

// Get document, or throw exception on error
try {
  const doc = yaml.load(fs.readFileSync('pubspec.yaml', 'utf8'));
  console.log(doc);
} catch (e) {
  console.log(e);
}