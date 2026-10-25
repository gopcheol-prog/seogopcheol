/* Display compatibility for profile data saved before the name change.
   This function does not write to the database. */
function normalizeSiteIdentity(profile) {
  const result = Object.assign({}, profile || {});
  const name = String(result['info-name'] || '').trim();
  const fandom = String(result['info-fandom'] || '').trim();
  if (!name || /^서곱철\s*(?:[♥♡❤🩷]\uFE0F?)?$/u.test(name)) result['info-name'] = '서리원♥';
  if (!fandom || fandom === '단골' || fandom.toUpperCase() === 'DANGOL') result['info-fandom'] = '31';
  ['msg', 'quote'].forEach(function(key) {
    if (typeof result[key] === 'string') {
      result[key] = result[key].replace(/서곱철/g, '서리원♥').replace(/단골/g, '31');
    }
  });
  return result;
}
