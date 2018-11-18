// Hook in to `addEventListener` to track the mouse and display it as a circle
exports.onPageLoad = function () {
  return browser.executeScript(function () {
    (function () {
      var EventSniffer = function () {
        this.history = [];
        this.callbacks = {};
        this.minCacheSize = 100;
        this.maxCacheSize = 500;
      };

      EventSniffer.prototype.handle = function (name, e) {
        if (this.history.indexOf(e) > -1) return;

        this.addToHistory(e);
        this.trigger(name, e);
      };

      EventSniffer.prototype.trigger = function (name, e) {
        if (!this.callbacks[name]) return;

        this.callbacks[name].forEach(function (cb) {
          cb(e);
        });
      };

      EventSniffer.prototype.addToHistory = function (e) {
        if (this.history.length >= this.maxCacheSize) {
          this.history = this.history
            .slice(this.history.length - this.minCacheSize);
        }

        this.history.push(e);
      };

      EventSniffer.prototype.on = function (name, cb) {
        if (!this.callbacks[name]) {
          this.callbacks[name] = [];

          // Add a dummy event listener incase the page hasn't
          document.addEventListener(name, function () {
          });
        }

        this.callbacks[name].push(cb);
      };

      EventSniffer.prototype.install = function () {
        var proto = EventTarget.prototype;
        var oldAEL = proto.addEventListener;
        var self = this;

        proto.addEventListener = function (name) {
          // Add our own event listener first
          oldAEL.call(this, name, function (e) {
            self.handle(name, e);
          });

          // The add the users listener as normal
          return oldAEL.apply(this, arguments);
        };
      }

      var MouseTracker = function () {
        this.indicator = document.createElement('div');
        this.indicator.setAttribute('class', 'mouse-tracker');
        this.style = document.createElement('style');
        this.style.innerHTML = [
          '.mouse-tracker {',
          'width: 0.5em;',
          'height: 0.5em;',
          'background: orange;',
          'box-shadow: 0 0 0 1px white;',
          'border-radius: 50%;',
          'position: absolute;',
          'top: 0;',
          'left: 0;',
          'z-index: 100000;',
          'pointer-events: none;',
          'transform: translate(-50%, -50%);',
          'transition: background-color 0.2s linear;',
          '}',

          '.mouse-tracker.mousedown {',
          'background: rgba(0, 128, 0, 0.5);',
          '}',

          '@keyframes mouse-tracker-click {',
          'to {',
          'width: 5em;',
          'height: 5em;',
          'opacity: 0;',
          '}',
          '}',

          '.mouse-tracker .click {',
          'width: 0.5em;',
          'height: 0.5em;',
          'border: 1px solid rgba(128, 128, 128, 1);',
          'box-shadow: 0 0 0 1px rgba(256, 256, 256, 1);',
          'border-radius: 50%;',
          'position: absolute;',
          'top: 50%;',
          'left: 50%;',
          'pointer-events: none;',
          'transform: translate(-50%, -50%);',
          'animation: 1s mouse-tracker-click;',
          '}'
        ].join('\n');
      };

      MouseTracker.prototype.move = function (x, y) {
        this.indicator.style.left = x + 'px';
        this.indicator.style.top = y + 'px';
      };

      MouseTracker.prototype.click = function () {
        var click = document.createElement('div');

        click.setAttribute('class', 'click');
        click.addEventListener('animationend', function () {
          click.parentElement.removeChild(click);
        }, false);

        this.indicator.appendChild(click);
      };

      MouseTracker.prototype.mousedown = function () {
        this.indicator.classList.add('mousedown');
      };

      MouseTracker.prototype.mouseup = function () {
        this.indicator.classList.remove('mousedown');
      };

      MouseTracker.prototype.install = function () {
        document.body.appendChild(this.indicator);
        document.head.appendChild(this.style);
      }

      var tracker = new MouseTracker();
      var sniffer = new EventSniffer();

      sniffer.install();
      tracker.install();

      sniffer.on('click', function (e) {
        tracker.click();
      });
      sniffer.on('mousemove', function (e) {
        tracker.move(e.x, e.y);
      });
      sniffer.on('mousedown', function (e) {
        tracker.mousedown();
      });
      sniffer.on('mouseup', function (e) {
        tracker.mouseup();
      });
    })();
  });
};

// Slow things down a bit
exports.waitForCondition = function () {
  return browser.driver.sleep(100).then(function () {
    return true;
  });
};
