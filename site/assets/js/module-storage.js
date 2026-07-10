// That ONE Team — Training Hub :: student code persistence
//
// A module's code editor is just a <textarea> — nothing about it survives
// closing the tab unless we save it somewhere. This helper:
//   - autosaves the textarea to localStorage (namespaced per module) and
//     silently restores it the next time the page loads, so work isn't
//     lost between sessions without the student having to do anything
//   - adds a "Download" button that saves the current code to a real
//     .java file on disk, and a "Load file" button that reads one back in
//     (useful for backups, or moving work between machines)
//
// Usage: call TotModuleStorage.attach({...}) once the module's default
// starter code has already been placed in the textarea. See
// /site/README.md for the full option list and a worked example.
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

  function makeFileInput(onFile) {
    var input = document.createElement('input');
    input.type = 'file';
    input.accept = '.java,.txt,text/plain';
    input.style.display = 'none';
    input.addEventListener('change', function () {
      if (input.files[0]) onFile(input.files[0]);
      input.value = '';
    });
    return input;
  }

  function attach(opts) {
    var key = opts.key;
    var textarea = opts.textarea;
    var fileName = key + '.java';
    var indicator = opts.indicatorId ? document.getElementById(opts.indicatorId) : null;

    function setIndicator(text, saved) {
      if (!indicator) return;
      indicator.textContent = text;
      indicator.className = 'tot-save-indicator' + (saved ? ' tot-save-indicator--saved' : '');
    }

    function save() {
      var ok = writeLocal(key, textarea.value);
      setIndicator(ok ? '✓ Saved' : 'Could not save (storage unavailable)', ok);
      if (restoreBtn) restoreBtn.disabled = !ok;
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

    var saveBtn = opts.saveButtonId ? document.getElementById(opts.saveButtonId) : null;
    var restoreBtn = opts.restoreButtonId ? document.getElementById(opts.restoreButtonId) : null;

    if (saveBtn) {
      // Reuse an existing Save/Restore UI — just add Download / Load file next to it.
      var dlBtn = makeButton('Download .java');
      dlBtn.addEventListener('click', download);
      saveBtn.insertAdjacentElement('afterend', dlBtn);

      var loadBtn = makeButton('Load file');
      var fileInput = makeFileInput(loadFromFile);
      loadBtn.addEventListener('click', function () { fileInput.click(); });
      dlBtn.insertAdjacentElement('afterend', loadBtn);
      loadBtn.insertAdjacentElement('afterend', fileInput);
    } else {
      saveBtn = makeButton('Save');
      restoreBtn = makeButton('Restore');
      var dlBtn2 = makeButton('Download .java');
      dlBtn2.addEventListener('click', download);
      var loadBtn2 = makeButton('Load file');
      var fileInput2 = makeFileInput(loadFromFile);
      loadBtn2.addEventListener('click', function () { fileInput2.click(); });

      if (!indicator) {
        indicator = document.createElement('span');
        indicator.className = 'tot-save-indicator';
        indicator.id = key + '-save-indicator';
      }

      var mount = opts.toolbarId ? document.getElementById(opts.toolbarId) : null;
      if (mount) {
        [saveBtn, restoreBtn, dlBtn2, loadBtn2, fileInput2, indicator].forEach(function (el) {
          mount.appendChild(el);
        });
      } else {
        var row = document.createElement('div');
        row.className = 'tot-code-toolbar';
        row.style.borderTop = '1px solid var(--border)';
        row.style.borderBottom = 'none';
        [saveBtn, restoreBtn, dlBtn2, loadBtn2, fileInput2, indicator].forEach(function (el) {
          row.appendChild(el);
        });
        textarea.insertAdjacentElement('afterend', row);
      }
    }

    saveBtn.addEventListener('click', save);
    restoreBtn.addEventListener('click', function () { restore(false); });

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
