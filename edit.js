function extensionSuggestions(q, cb) {
  $.get("extension-suggest.php?q=" + q).then(function(results) {
    var out = [];
    JSON.parse(results).forEach(function(extension) {
      out.push(extension.extension + "@" + extension.domain_name);
    });
    console.log(out);
    cb(out);
  });
}

$('.extension').typeahead({
  hint: true,
  highlight: true,
  minLength: 1
}, {
  name: 'extensions',
  source: extensionSuggestions
});
