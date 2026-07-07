// That ONE Team — Training Hub :: shared module-page runtime scaffold
//
// Every interactive module (Inverse Kinematics, Filters, Swerve Drive, ...)
// wires a code panel + a simulation canvas the same way. This file provides
// that plumbing so a real module only has to supply:
//
//   - draw(ctx, state, dt)   -> render one simulation frame
//   - onRun(sourceText, state) -> called when the student clicks "Run".
//                                  This is the integration point for whatever
//                                  executes their Java: a client-side JVM
//                                  (e.g. CheerpJ/TeaVM/Doppio), a server-side
//                                  compile+run sandbox, or — for a pure-JS
//                                  module — a hand-written equivalent of the
//                                  lesson's algorithm.
//   - onReset(state)         -> restore the simulation to its initial state
//
// See /site/modules/template.html for a working example, and
// /site/README.md for the full "build a new module" walkthrough.
(function () {
  function log(consoleEl, text, cls) {
    var line = document.createElement('div');
    if (cls) line.className = 'tot-console__line--' + cls;
    line.textContent = text;
    consoleEl.appendChild(line);
    consoleEl.scrollTop = consoleEl.scrollHeight;
  }

  function init(opts) {
    var canvas = document.getElementById(opts.canvasId);
    var consoleEl = document.getElementById(opts.consoleId);
    var runBtn = document.getElementById(opts.runButtonId);
    var resetBtn = document.getElementById(opts.resetButtonId);
    var codeInput = document.getElementById(opts.codeInputId);
    var ctx = canvas.getContext('2d');
    var state = opts.initialState ? opts.initialState() : {};
    var last = performance.now();
    var running = true;

    function frame(now) {
      var dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      if (opts.step) opts.step(state, dt);
      if (opts.draw) opts.draw(ctx, state, dt, canvas);
      if (running) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);

    if (runBtn) {
      runBtn.addEventListener('click', function () {
        log(consoleEl, '> Run', 'muted');
        try {
          if (opts.onRun) opts.onRun(codeInput ? codeInput.value : '', state);
          log(consoleEl, 'OK — simulation updated.', 'ok');
        } catch (err) {
          log(consoleEl, 'Error: ' + err.message, null);
        }
      });
    }
    if (resetBtn) {
      resetBtn.addEventListener('click', function () {
        state = opts.initialState ? opts.initialState() : {};
        if (opts.onReset) opts.onReset(state);
        log(consoleEl, '> Reset', 'muted');
      });
    }

    return {
      getState: function () { return state; },
      stop: function () { running = false; },
    };
  }

  window.TotModuleRuntime = { init: init };
})();
