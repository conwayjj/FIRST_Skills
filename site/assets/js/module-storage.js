// That ONE Team — Training Hub :: student code persistence
//
// A module's code editor is just a <textarea> — nothing about it survives
// closing the tab unless we save it somewhere. This helper:
//   - autosaves the textarea to localStorage (namespaced per module) and
//     silently restores it the next time the page loads, so work isn't
//     lost between sessions without the student having to do anything
//   - builds a small Save / Restore / Download / Load file row (every
//     module gets the identical row, so the UI is consistent site-wide)
//
// Usage: call TotModuleStorage.attach({ key, textarea }) once the module's
// default starter code has already been placed in the textarea. Pass
// toolbarId to append the row into an existing toolbar element instead of
// inserting a new row right after the textarea. See /site/README.md for
// the full option list and a worked example.
(function () {
  var PREFIX = 'tot-code:';

  function readLocal(key) {
    try { return localStorage.getItem(PREFIX + key); } catch (e) { return null; }
  }
  function writeLocal(key, value) {
    try { localStorage.setItem(PREFIX + key, value); return true; } catch (e) { return false; }
  }

  function downloadText(filename, text) {
    var blob = new Blob([text], { type: 'text/plain' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  function readTextFile(file, onDone) {
    var reader = new FileReader();
    reader.onload = function () { onDone(String(reader.result)); };
    reader.readAsText(file);
  }

  function makeButton(label) {
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'tot-btn tot-btn--sm tot-btn--ghost';
    btn.textContent = label;
    return btn;
  }

  function attach(opts) {
    var key = opts.key;
    var textarea = opts.textarea;
    var fileName = key + '.java';

    function setIndicator(text, saved) {
      indicator.textContent = text;
      indicator.className = 'tot-save-indicator' + (saved ? ' tot-save-indicator--saved' : '');
    }

    function save() {
      var ok = writeLocal(key, textarea.value);
      setIndicator(ok ? '✓ Saved' : 'Could not save (storage unavailable)', ok);
      restoreBtn.disabled = !ok;
      return ok;
    }

    function restore(silent) {
      var saved = readLocal(key);
      if (saved === null) {
        if (!silent) setIndicator('No save yet', false);
        return false;
      }
      textarea.value = saved;
      textarea.dispatchEvent(new Event('input'));
      setIndicator('Restored your saved code', true);
      if (opts.onRestore) opts.onRestore(saved);
      return true;
    }

    function download() { downloadText(fileName, textarea.value); }

    function loadFromFile(file) {
      readTextFile(file, function (text) {
        textarea.value = text;
        textarea.dispatchEvent(new Event('input'));
        save();
        setIndicator('Loaded ' + file.name, true);
      });
    }

    var saveBtn = makeButton('Save');
    var restoreBtn = makeButton('Restore');
    var downloadBtn = makeButton('Download .java');
    var loadBtn = makeButton('Load file');
    var indicator = document.createElement('span');
    indicator.className = 'tot-save-indicator';

    var fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.java,.txt,text/plain';
    fileInput.style.display = 'none';
    fileInput.addEventListener('change', function () {
      if (fileInput.files[0]) loadFromFile(fileInput.files[0]);
      fileInput.value = '';
    });

    saveBtn.addEventListener('click', save);
    restoreBtn.addEventListener('click', function () { restore(false); });
    downloadBtn.addEventListener('click', download);
    loadBtn.addEventListener('click', function () { fileInput.click(); });

    var mount = opts.toolbarId ? document.getElementById(opts.toolbarId) : null;
    if (!mount) {
      mount = document.createElement('div');
      mount.className = 'tot-code-toolbar';
      mount.style.borderTop = '1px solid var(--border)';
      mount.style.borderBottom = 'none';
      textarea.insertAdjacentElement('afterend', mount);
    }
    [saveBtn, restoreBtn, downloadBtn, loadBtn, fileInput, indicator].forEach(function (el) {
      mount.appendChild(el);
    });

    var hasSave = readLocal(key) !== null;
    restoreBtn.disabled = !hasSave;

    var restored = opts.autoRestore === false ? false : restore(true);
    if (!restored) setIndicator(hasSave ? 'No save yet' : 'Not saved yet', false);

    var timer = null;
    textarea.addEventListener('input', function () {
      clearTimeout(timer);
      timer = setTimeout(save, 800);
      setIndicator('Unsaved changes', false);
    });

    return { save: save, restore: restore, download: download };
  }

  window.TotModuleStorage = { attach: attach, save: writeLocal, load: readLocal, downloadText: downloadText };
})();
