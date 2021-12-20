"use strict";
(self["webpackChunksocail_network"] = self["webpackChunksocail_network"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/tailwindcss/tailwind.css":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/tailwindcss/tailwind.css ***!
  \*******************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n! tailwindcss v3.0.2 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */ /* 3 */\n  tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr[title] {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse;  /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;  /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/*\nEnsure the default browser behavior of the `hidden` attribute.\n*/\n\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  --tw-border-opacity: 1;\n  border-color: rgb(229 231 235 / var(--tw-border-opacity));\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n}\n\n.fixed {\n  position: fixed;\n}\n\n.relative {\n  position: relative;\n}\n\n.inset-1\\/2 {\n  top: 50%;\n  right: 50%;\n  bottom: 50%;\n  left: 50%;\n}\n\n.right-0 {\n  right: 0px;\n}\n\n.z-10 {\n  z-index: 10;\n}\n\n.mx-4 {\n  margin-left: 1rem;\n  margin-right: 1rem;\n}\n\n.ml-4 {\n  margin-left: 1rem;\n}\n\n.mt-24 {\n  margin-top: 6rem;\n}\n\n.ml-6 {\n  margin-left: 1.5rem;\n}\n\n.mt-6 {\n  margin-top: 1.5rem;\n}\n\n.inline-block {\n  display: inline-block;\n}\n\n.flex {\n  display: flex;\n}\n\n.h-screen {\n  height: 100vh;\n}\n\n.h-96 {\n  height: 24rem;\n}\n\n.h-20 {\n  height: 5rem;\n}\n\n.h-14 {\n  height: 3.5rem;\n}\n\n.h-12 {\n  height: 3rem;\n}\n\n.h-128 {\n  height: 32rem;\n}\n\n.h-8 {\n  height: 2rem;\n}\n\n.h-16 {\n  height: 4rem;\n}\n\n.h-6 {\n  height: 1.5rem;\n}\n\n.w-full {\n  width: 100%;\n}\n\n.w-4\\/5 {\n  width: 80%;\n}\n\n.w-12 {\n  width: 3rem;\n}\n\n.w-72 {\n  width: 18rem;\n}\n\n.w-64 {\n  width: 16rem;\n}\n\n.w-40 {\n  width: 10rem;\n}\n\n.w-6 {\n  width: 1.5rem;\n}\n\n.max-w-full {\n  max-width: 100%;\n}\n\n.shrink {\n  flex-shrink: 1;\n}\n\n.shrink-0 {\n  flex-shrink: 0;\n}\n\n.grow {\n  flex-grow: 1;\n}\n\n.grow-0 {\n  flex-grow: 0;\n}\n\n.basis-72 {\n  flex-basis: 18rem;\n}\n\n.-translate-y-1\\/2 {\n  --tw-translate-y: -50%;\n  transform: var(--tw-transform);\n}\n\n.-translate-x-1\\/2 {\n  --tw-translate-x: -50%;\n  transform: var(--tw-transform);\n}\n\n.cursor-pointer {\n  cursor: pointer;\n}\n\n.flex-row {\n  flex-direction: row;\n}\n\n.flex-col {\n  flex-direction: column;\n}\n\n.items-center {\n  align-items: center;\n}\n\n.justify-between {\n  justify-content: space-between;\n}\n\n.overflow-y-auto {\n  overflow-y: auto;\n}\n\n.truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.rounded {\n  border-radius: 0.25rem;\n}\n\n.rounded-lg {\n  border-radius: 0.5rem;\n}\n\n.border {\n  border-width: 1px;\n}\n\n.border-2 {\n  border-width: 2px;\n}\n\n.border-black {\n  --tw-border-opacity: 1;\n  border-color: rgb(0 0 0 / var(--tw-border-opacity));\n}\n\n.border-indigo-500\\/100 {\n  border-color: rgb(99 102 241 / 1);\n}\n\n.border-b-gray-200 {\n  --tw-border-opacity: 1;\n  border-bottom-color: rgb(229 231 235 / var(--tw-border-opacity));\n}\n\n.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\n\n.bg-slate-200 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(226 232 240 / var(--tw-bg-opacity));\n}\n\n.bg-slate-300 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(203 213 225 / var(--tw-bg-opacity));\n}\n\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n\n.pl-4 {\n  padding-left: 1rem;\n}\n\n.pr-4 {\n  padding-right: 1rem;\n}\n\n.pl-2 {\n  padding-left: 0.5rem;\n}\n\n.text-xs {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n\n.text-base {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n\n.font-semibold {\n  font-weight: 600;\n}\n\n.font-bold {\n  font-weight: 700;\n}\n\n.tracking-widest {\n  letter-spacing: 0.1em;\n}\n\n.tracking-wide {\n  letter-spacing: 0.025em;\n}\n\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n\n.text-slate-400 {\n  --tw-text-opacity: 1;\n  color: rgb(148 163 184 / var(--tw-text-opacity));\n}\n\n.text-slate-600 {\n  --tw-text-opacity: 1;\n  color: rgb(71 85 105 / var(--tw-text-opacity));\n}\n\n.shadow-\\[0_10px_50px_rgba\\(230\\2c 230\\2c 230\\2c 0\\.5\\)\\] {\n  --tw-shadow: 0 10px 50px rgba(230,230,230,0.5);\n  --tw-shadow-colored: 0 10px 50px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.shadow-\\[0_0_20px_rgba\\(230\\2c 230\\2c 230\\2c 0\\.5\\)\\] {\n  --tw-shadow: 0 0 20px rgba(230,230,230,0.5);\n  --tw-shadow-colored: 0 0 20px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n", "",{"version":3,"sources":["webpack://./node_modules/tailwindcss/tailwind.css","webpack://./node_modules/tailwindcss/%3Cinput%20css%20LcC1RW%3E","<no source>"],"names":[],"mappings":"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AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA,uBAAA;EAAA;AFImB;;AAAnB;EEJA,uBAAA;EAAA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA,iBAAA;EAAA,wBAAA;EAAA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA,uBAAA;EAAA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA,uBAAA;EAAA;AFImB;;AAAnB;EEJA,mBAAA;EAAA;AFImB;;AAAnB;EEJA,mBAAA;EAAA;AFImB;;AAAnB;EEJA,mBAAA;EAAA;AFImB;;AAAnB;EEJA,mBAAA;EAAA;AFImB;;AAAnB;EEJA,oBAAA;EAAA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA,mBAAA;EAAA;AFImB;;AAAnB;EEJA,gBAAA;EAAA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA,qBAAA;EAAA;AFImB;;AAAnB;EEJA,qBAAA;EAAA;AFImB;;AAAnB;EEJA,qBAAA;EAAA;AFImB;;AAAnB;EEJA,+CAAA;EAAA,wDAAA;EAAA;AFImB;;AAAnB;EEJA,4CAAA;EAAA,qDAAA;EAAA;AFImB","sourcesContent":["@tailwind base;\n\n@tailwind components;\n\n@tailwind utilities;\n","/*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  tab-size: 4; /* 3 */\n  font-family: theme('fontFamily.sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"); /* 4 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr[title] {\n  text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: theme('fontFamily.mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace); /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse;  /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;  /* 1 */\n  color: theme('colors.gray.400', #9ca3af); /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/*\nEnsure the default browser behavior of the `hidden` attribute.\n*/\n\n[hidden] {\n  display: none;\n}\n",null],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Main/sideBarLeft/sideBarLeft.module.scss":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Main/sideBarLeft/sideBarLeft.module.scss ***!
  \**************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".src-components-Main-sideBarLeft-sideBarLeft-module__spacingSideBar--kpiq3 {\n  height: calc(100% - 6rem);\n}\n\n.src-components-Main-sideBarLeft-sideBarLeft-module__scrollSideBar--pzVmp::-webkit-scrollbar {\n  background-color: rgba(102, 101, 101, 0.596);\n  width: 8px;\n  border-radius: 10px;\n}\n.src-components-Main-sideBarLeft-sideBarLeft-module__scrollSideBar--pzVmp::-webkit-scrollbar-thumb {\n  background-color: #e6e6e6;\n  width: 90%;\n  border-radius: 10px;\n}", "",{"version":3,"sources":["webpack://./src/components/Main/sideBarLeft/sideBarLeft.module.scss"],"names":[],"mappings":"AAAA;EACI,yBAAA;AACJ;;AAEI;EACI,4CAAA;EACA,UAAA;EACA,mBAAA;AACR;AACI;EACI,yBAAA;EACA,UAAA;EACA,mBAAA;AACR","sourcesContent":[".spacingSideBar{\r\n    height: calc(100% - 6rem);\r\n}\r\n.scrollSideBar{\r\n    &::-webkit-scrollbar{\r\n        background-color: rgba(102, 101, 101, 0.596);\r\n        width: 8px;\r\n        border-radius: 10px;\r\n    }\r\n    &::-webkit-scrollbar-thumb{\r\n        background-color: rgb(230, 230, 230);\r\n        width:90% ;\r\n        border-radius: 10px;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"spacingSideBar": "src-components-Main-sideBarLeft-sideBarLeft-module__spacingSideBar--kpiq3",
	"scrollSideBar": "src-components-Main-sideBarLeft-sideBarLeft-module__scrollSideBar--pzVmp"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/tailwindcss/tailwind.css":
/*!***********************************************!*\
  !*** ./node_modules/tailwindcss/tailwind.css ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_tailwind_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../css-loader/dist/cjs.js!../postcss-loader/dist/cjs.js!./tailwind.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/tailwindcss/tailwind.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_tailwind_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_tailwind_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_tailwind_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_tailwind_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Main/sideBarLeft/sideBarLeft.module.scss":
/*!*****************************************************************!*\
  !*** ./src/components/Main/sideBarLeft/sideBarLeft.module.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_sass_loader_dist_cjs_js_sideBarLeft_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./sideBarLeft.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Main/sideBarLeft/sideBarLeft.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_sass_loader_dist_cjs_js_sideBarLeft_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_sass_loader_dist_cjs_js_sideBarLeft_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_sass_loader_dist_cjs_js_sideBarLeft_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_sass_loader_dist_cjs_js_sideBarLeft_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/Javascript/base.js":
/*!********************************!*\
  !*** ./src/Javascript/base.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseInput": () => (/* binding */ BaseInput),
/* harmony export */   "BaseLabel": () => (/* binding */ BaseLabel),
/* harmony export */   "BaseButton": () => (/* binding */ BaseButton)
/* harmony export */ });
/* harmony import */ var _tool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tool */ "./src/Javascript/tool.js");


class BaseInput{
    constructor(type, name, id){
        this.input = (0,_tool__WEBPACK_IMPORTED_MODULE_0__.New)('input')
        this.event = _tool__WEBPACK_IMPORTED_MODULE_0__.Event
        ;(0,_tool__WEBPACK_IMPORTED_MODULE_0__.SetAtt)(this.input, 'type', type)
        ;(0,_tool__WEBPACK_IMPORTED_MODULE_0__.SetAtt)(this.input, 'name', name)
        ;(0,_tool__WEBPACK_IMPORTED_MODULE_0__.SetAtt)(this.input, 'id', id)
    }
    render(){
        return this.input
    }
}

class BaseLabel{
    constructor(name, title){
        this.label = (0,_tool__WEBPACK_IMPORTED_MODULE_0__.New)('label')
        this.label.textContent = title
        ;(0,_tool__WEBPACK_IMPORTED_MODULE_0__.SetAtt)(this.label, 'for', name)
    }
    render(){
        return this.label
    }
}

class BaseButton{
    constructor(text){
        this.button = (0,_tool__WEBPACK_IMPORTED_MODULE_0__.New)('button')
        this.button.textContent = text
    }
    render(){
        return this.button
    }
}



/***/ }),

/***/ "./src/Javascript/tool.js":
/*!********************************!*\
  !*** ./src/Javascript/tool.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tailwindAdd": () => (/* binding */ tailwindAdd),
/* harmony export */   "tailwindRemove": () => (/* binding */ tailwindRemove),
/* harmony export */   "tailwindToggle": () => (/* binding */ tailwindToggle),
/* harmony export */   "Element": () => (/* binding */ Element),
/* harmony export */   "Elements": () => (/* binding */ Elements),
/* harmony export */   "New": () => (/* binding */ New),
/* harmony export */   "AddChild": () => (/* binding */ AddChild),
/* harmony export */   "Event": () => (/* binding */ Event),
/* harmony export */   "SetAtt": () => (/* binding */ SetAtt),
/* harmony export */   "RemoveEvent": () => (/* binding */ RemoveEvent)
/* harmony export */ });
const Element = document.querySelector.bind(document)
const Elements = document.querySelectorAll.bind(document)
function tailwindAdd(arrayStyle, point){
    point.classList.add(...arrayStyle)
}
function tailwindRemove(arrayStyle, point){
    point.classList.remove(...arrayStyle)
}
function tailwindToggle(arrayStyle, point){
    point.classList.toggle(...arrayStyle)
}

function New(string){
   return document.createElement(string)
}
function AddChild(parentNode, childNode){
    parentNode.appendChild(childNode)
}
function Event(string, point, callback){
    point.addEventListener(string, callback)
}
function RemoveEvent(string, point, callback){
    point.removeEventListener(string,callback)
}
function SetAtt(node, nameAttribue, value){
    node.setAttribute(nameAttribue, value)
}


/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Main_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Main/main */ "./src/components/Main/main.js");
/* harmony import */ var _Javascript_tool__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Javascript/tool */ "./src/Javascript/tool.js");
/* harmony import */ var _components_SignIn_SignUp_SignInAndSignUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/SignIn&SignUp/SignInAndSignUp */ "./src/components/SignIn&SignUp/SignInAndSignUp.js");




class App {
    constructor(){
        this.box = (0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_1__.New)('div')
        this.signIn_SignUp_box = new _components_SignIn_SignUp_SignInAndSignUp__WEBPACK_IMPORTED_MODULE_2__["default"]()
        this.mainApp = new _components_Main_main__WEBPACK_IMPORTED_MODULE_0__["default"]()

        this.boxStyle = ['w-full', 'h-screen']

        ;(0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_1__.tailwindAdd)(this.boxStyle, this.box)
    }
    render(){
        (0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_1__.AddChild)(this.box, this.signIn_SignUp_box.render())
        return this.box
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);


/***/ }),

/***/ "./src/components/Main/header/SearchBar/searchBar.js":
/*!***********************************************************!*\
  !*** ./src/components/Main/header/SearchBar/searchBar.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Javascript_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../Javascript/base */ "./src/Javascript/base.js");
/* harmony import */ var _Javascript_tool__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../Javascript/tool */ "./src/Javascript/tool.js");



class SearchBar {
    constructor(){
        this.box = (0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_1__.New)('div')
        this.SearchBar = new _Javascript_base__WEBPACK_IMPORTED_MODULE_0__.BaseInput('text', 'searchBar', 'searchBar')
        

        this.boxStyle = ['relative', 'w-64','max-w-full']
        this.SearchBarStyle = ['w-full', 'bg-slate-200', 'text-white', 'rounded-lg', 'pl-4', 'h-8']

        ;(0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_1__.SetAtt)(this.SearchBar.input, 'placeholder', 'Search')

        ;(0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_1__.tailwindAdd)(this.boxStyle, this.box)
        ;(0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_1__.tailwindAdd)(this.SearchBarStyle, this.SearchBar.input)
    }
    render(){
        (0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_1__.AddChild)(this.box, this.SearchBar.render())
        return this.box
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchBar);

/***/ }),

/***/ "./src/components/Main/header/header.js":
/*!**********************************************!*\
  !*** ./src/components/Main/header/header.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Javascript_tool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Javascript/tool */ "./src/Javascript/tool.js");
/* harmony import */ var _asset_image_Logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../asset/image/Logo.png */ "./src/asset/image/Logo.png");
/* harmony import */ var _SearchBar_searchBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchBar/searchBar */ "./src/components/Main/header/SearchBar/searchBar.js");
/* harmony import */ var _asset_image_Null_Avatar_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../asset/image/Null Avatar.jpg */ "./src/asset/image/Null Avatar.jpg");





class Header {
    constructor(){
        this.box = (0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_0__.New)('div')
        this.image = (0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_0__.New)('img')
        this.childBox = (0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_0__.New)('div')
        this.settingButton = (0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_0__.New)('img')
        this.searchBar = new _SearchBar_searchBar__WEBPACK_IMPORTED_MODULE_2__["default"]()

        ;(0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_0__.SetAtt)(this.settingButton, 'src', _asset_image_Null_Avatar_jpg__WEBPACK_IMPORTED_MODULE_3__)
        ;(0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_0__.SetAtt)(this.image, 'src', _asset_image_Logo_png__WEBPACK_IMPORTED_MODULE_1__)
        ;(0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_0__.AddChild)(this.childBox, this.searchBar.render())
        ;(0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_0__.AddChild)(this.childBox, this.settingButton)

        this.boxStyle = ['w-full', 'h-20', 'border', 'border-b-gray-200', 'flex', 'flex-row', 'items-center', 'justify-between', 'fixed', 'bg-white']
        this.imageStyle = ['h-14', 'ml-4']
        this.settingButtonStyle = ['w-12', 'h-12', 'border-2', 'border-indigo-500/100', 'rounded', 'mx-4']
        this.childBoxStyle = ['flex', 'flex-row', 'items-center']

        ;(0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_0__.tailwindAdd)(this.boxStyle, this.box)
        ;(0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_0__.tailwindAdd)(this.imageStyle, this.image)
        ;(0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_0__.tailwindAdd)(this.settingButtonStyle, this.settingButton)
        ;(0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_0__.tailwindAdd)(this.childBoxStyle, this.childBox)
    }
    render(){
        (0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_0__.AddChild)(this.box, this.image)
        ;(0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_0__.AddChild)(this.box, this.childBox)
        return this.box
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/components/Main/main.js":
/*!*************************************!*\
  !*** ./src/components/Main/main.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Javascript_tool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Javascript/tool */ "./src/Javascript/tool.js");
/* harmony import */ var _header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header */ "./src/components/Main/header/header.js");
/* harmony import */ var _mainContent_mainContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mainContent/mainContent */ "./src/components/Main/mainContent/mainContent.js");
/* harmony import */ var _sideBarLeft_sideBarLeft__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sideBarLeft/sideBarLeft */ "./src/components/Main/sideBarLeft/sideBarLeft.js");
/* harmony import */ var _sideBarRight_sideBarRight__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sideBarRight/sideBarRight */ "./src/components/Main/sideBarRight/sideBarRight.js");






class Main {
    constructor(){
        this.box = (0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_0__.New)('div')
        this.header = new _header_header__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.sideBarLeft = new _sideBarLeft_sideBarLeft__WEBPACK_IMPORTED_MODULE_3__["default"]();
        this.sideBarRight = new _sideBarRight_sideBarRight__WEBPACK_IMPORTED_MODULE_4__["default"]();
        this.mainContent = new _mainContent_mainContent__WEBPACK_IMPORTED_MODULE_2__["default"]();

        this.boxStyle = ['w-full', 'flex', 'flex-row']
        
        ;(0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_0__.tailwindAdd)(this.boxStyle, this.box)
    }
    render(){
        (0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_0__.AddChild)(this.box, this.header.render())
        ;(0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_0__.AddChild)(this.box, this.sideBarLeft.render())
        ;(0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_0__.AddChild)(this.box, this.mainContent.render())
        ;(0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_0__.AddChild)(this.box, this.sideBarRight.render())
        return this.box
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);

/***/ }),

/***/ "./src/components/Main/mainContent/mainContent.js":
/*!********************************************************!*\
  !*** ./src/components/Main/mainContent/mainContent.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Javascript_tool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Javascript/tool */ "./src/Javascript/tool.js");


class MainContent {
    constructor(){
        this.box = (0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_0__.New)('div')
        this.box.textContent = 'sss'
        this.boxStyle = ['grow', 'shrink', 'h-128', 'mt-24', 'inline-block']
        ;(0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_0__.tailwindAdd)(this.boxStyle, this.box)
    }
    render(){
        return this.box
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainContent);

/***/ }),

/***/ "./src/components/Main/sideBarLeft/Avatar/avatar.js":
/*!**********************************************************!*\
  !*** ./src/components/Main/sideBarLeft/Avatar/avatar.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Javascript_tool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../Javascript/tool */ "./src/Javascript/tool.js");


class Avatar {
    constructor(){
        this.box = (0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_0__.New)('div')
        this.avatar = (0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_0__.New)('img')
        this.title = (0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_0__.New)('div')
        this.firstTitle = (0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_0__.New)('p')
        this.secondTitle = (0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_0__.New)('p')

        this.firstTitle.textContent = 'Đào Duy Hưng'
        this.secondTitle.textContent = 'daoduyhung0000@gmail.com'
        this.firstTitle.title = this.firstTitle.textContent
        this.secondTitle.title = this.secondTitle.textContent

        this.boxStyle = ['w-full', 'h-16', 'shadow-[0_10px_50px_rgba(230,230,230,0.5)]', 'rounded' , 'flex', 'flex-row', 'items-center', 'cursor-pointer']
        this.avatarStyle = ['w-12', 'h-12', 'border', 'mx-4', 'grow-0', 'shrink-0']
        this.firstTitleStyle = ['font-semibold', 'w-40' , 'truncate', 'inline-block']
        this.secondTitleStyle = ['text-xs', 'text-slate-400', 'w-40' , 'truncate', 'tracking-widest']
        this.titleStyle = ['grow']

        ;(0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_0__.tailwindAdd)(this.boxStyle, this.box)
        ;(0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_0__.tailwindAdd)(this.avatarStyle, this.avatar)
        ;(0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_0__.tailwindAdd)(this.titleStyle,this.title)
        ;(0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_0__.tailwindAdd)(this.firstTitleStyle, this.firstTitle)
        ;(0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_0__.tailwindAdd)(this.secondTitleStyle, this.secondTitle)

        ;(0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_0__.Event)('mouseenter', this.box, this.mouseEnterHandle.bind(this))
        ;(0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_0__.Event)('mouseleave', this.box, this.mouseOutHandle.bind(this))
    }
    mouseEnterHandle(e){
        (0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_0__.tailwindAdd)(['bg-slate-300'], e.target)
    }
    mouseOutHandle(e){
        (0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_0__.tailwindRemove)(['bg-slate-300'], e.target)
    }
    render(){
        (0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_0__.AddChild)(this.box, this.avatar)
        ;(0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_0__.AddChild)(this.title, this.firstTitle)
        ;(0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_0__.AddChild)(this.title, this.secondTitle)
        ;(0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_0__.AddChild)(this.box, this.title)
        return this.box
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Avatar);

/***/ }),

/***/ "./src/components/Main/sideBarLeft/sideBarLeft.js":
/*!********************************************************!*\
  !*** ./src/components/Main/sideBarLeft/sideBarLeft.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Javascript_tool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Javascript/tool */ "./src/Javascript/tool.js");
/* harmony import */ var _Avatar_avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Avatar/avatar */ "./src/components/Main/sideBarLeft/Avatar/avatar.js");
/* harmony import */ var _toolBar_toolBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toolBar/toolBar */ "./src/components/Main/sideBarLeft/toolBar/toolBar.js");
/* harmony import */ var _sideBarLeft_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sideBarLeft.module.scss */ "./src/components/Main/sideBarLeft/sideBarLeft.module.scss");




class SideBarLeft {
    constructor(){
        this.box = (0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_0__.New)('div')
        this.content = (0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_0__.New)('div')
        this.avatar = new _Avatar_avatar__WEBPACK_IMPORTED_MODULE_1__["default"]()
        this.toolBar = new _toolBar_toolBar__WEBPACK_IMPORTED_MODULE_2__["default"]()
        this.boxStyle = ['grow-0','shrink-0', 'basis-72','inline-block', 'mt-24']
        this.contentStyle = ['w-72', 'fixed', 'pl-4', _sideBarLeft_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].spacingSideBar , 'overflow-y-auto', 'z-10', _sideBarLeft_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].scrollSideBar]

        ;(0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_0__.tailwindAdd)(this.boxStyle, this.box)
        ;(0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_0__.tailwindAdd)(this.contentStyle, this.content)
    }
    render(){
        (0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_0__.AddChild)(this.box, this.content)
        ;(0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_0__.AddChild)(this.content, this.avatar.render())
        ;(0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_0__.AddChild)(this.content, this.toolBar.render())
        return this.box
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SideBarLeft);

/***/ }),

/***/ "./src/components/Main/sideBarLeft/toolBar/ButtonStyle.js":
/*!****************************************************************!*\
  !*** ./src/components/Main/sideBarLeft/toolBar/ButtonStyle.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "boxStyle": () => (/* binding */ boxStyle),
/* harmony export */   "iconStyle": () => (/* binding */ iconStyle),
/* harmony export */   "titleStyle": () => (/* binding */ titleStyle)
/* harmony export */ });
const boxStyle = ['flex', 'flex-row', 'items-center', 'pl-2', 'w-full', 'h-16']
const iconStyle = ['ml-4','w-6', 'h-6']
const titleStyle = ['ml-6', 'text-base', 'font-bold', 'text-slate-600', 'tracking-wide']



/***/ }),

/***/ "./src/components/Main/sideBarLeft/toolBar/Photos/photos.js":
/*!******************************************************************!*\
  !*** ./src/components/Main/sideBarLeft/toolBar/Photos/photos.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Javascript_tool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../Javascript/tool */ "./src/Javascript/tool.js");
/* harmony import */ var _profile_profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../profile/profile */ "./src/components/Main/sideBarLeft/toolBar/profile/profile.js");
/* harmony import */ var _asset_image_photo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../asset/image/photo.png */ "./src/asset/image/photo.png");




class Photos extends _profile_profile__WEBPACK_IMPORTED_MODULE_1__["default"]{
    constructor(){
        super()
        ;(0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_0__.SetAtt)(this.icon, 'src', _asset_image_photo_png__WEBPACK_IMPORTED_MODULE_2__)
        this.title.textContent = 'Photos'
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Photos);

/***/ }),

/***/ "./src/components/Main/sideBarLeft/toolBar/friends/friends.js":
/*!********************************************************************!*\
  !*** ./src/components/Main/sideBarLeft/toolBar/friends/friends.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Javascript_tool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../Javascript/tool */ "./src/Javascript/tool.js");
/* harmony import */ var _profile_profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../profile/profile */ "./src/components/Main/sideBarLeft/toolBar/profile/profile.js");
/* harmony import */ var _asset_image_friends_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../asset/image/friends.png */ "./src/asset/image/friends.png");




class Friends extends _profile_profile__WEBPACK_IMPORTED_MODULE_1__["default"]{
    constructor(){
        super()
        ;(0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_0__.SetAtt)(this.icon, 'src', _asset_image_friends_png__WEBPACK_IMPORTED_MODULE_2__)
        this.title.textContent = 'Friends'
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Friends);

/***/ }),

/***/ "./src/components/Main/sideBarLeft/toolBar/groups/groups.js":
/*!******************************************************************!*\
  !*** ./src/components/Main/sideBarLeft/toolBar/groups/groups.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Javascript_tool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../Javascript/tool */ "./src/Javascript/tool.js");
/* harmony import */ var _profile_profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../profile/profile */ "./src/components/Main/sideBarLeft/toolBar/profile/profile.js");
/* harmony import */ var _asset_image_group_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../asset/image/group.png */ "./src/asset/image/group.png");




class Groups extends _profile_profile__WEBPACK_IMPORTED_MODULE_1__["default"]{
    constructor(){
        super()
        ;(0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_0__.SetAtt)(this.icon, 'src', _asset_image_group_png__WEBPACK_IMPORTED_MODULE_2__)
        this.title.textContent = 'Groups'
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Groups);

/***/ }),

/***/ "./src/components/Main/sideBarLeft/toolBar/profile/profile.js":
/*!********************************************************************!*\
  !*** ./src/components/Main/sideBarLeft/toolBar/profile/profile.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Javascript_tool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../Javascript/tool */ "./src/Javascript/tool.js");
/* harmony import */ var _asset_image_account_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../asset/image/account.png */ "./src/asset/image/account.png");
/* harmony import */ var _ButtonStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ButtonStyle */ "./src/components/Main/sideBarLeft/toolBar/ButtonStyle.js");



class Profile{
    constructor(){
        this.box = (0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_0__.New)('div')
        this.icon = (0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_0__.New)('img')
        this.title = (0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_0__.New)('p')

        ;(0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_0__.SetAtt)(this.icon, 'src', _asset_image_account_png__WEBPACK_IMPORTED_MODULE_1__)
        this.title.textContent = 'Profile'

        this.boxStyle = _ButtonStyle__WEBPACK_IMPORTED_MODULE_2__.boxStyle
        this.iconStyle = _ButtonStyle__WEBPACK_IMPORTED_MODULE_2__.iconStyle
        this.titleStyle = _ButtonStyle__WEBPACK_IMPORTED_MODULE_2__.titleStyle
        ;(0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_0__.tailwindAdd)(this.boxStyle, this.box)
        ;(0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_0__.tailwindAdd)(this.iconStyle, this.icon)
        ;(0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_0__.tailwindAdd)(this.titleStyle, this.title)
    }
    render(){
        (0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_0__.AddChild)(this.box, this.icon)
        ;(0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_0__.AddChild)(this.box, this.title)
        return this.box
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Profile);

/***/ }),

/***/ "./src/components/Main/sideBarLeft/toolBar/save/save.js":
/*!**************************************************************!*\
  !*** ./src/components/Main/sideBarLeft/toolBar/save/save.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Javascript_tool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../Javascript/tool */ "./src/Javascript/tool.js");
/* harmony import */ var _profile_profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../profile/profile */ "./src/components/Main/sideBarLeft/toolBar/profile/profile.js");
/* harmony import */ var _asset_image_save_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../asset/image/save.png */ "./src/asset/image/save.png");




class Save extends _profile_profile__WEBPACK_IMPORTED_MODULE_1__["default"]{
    constructor(){
        super()
        ;(0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_0__.SetAtt)(this.icon, 'src', _asset_image_save_png__WEBPACK_IMPORTED_MODULE_2__)
        this.title.textContent = 'Saved'
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Save);

/***/ }),

/***/ "./src/components/Main/sideBarLeft/toolBar/toolBar.js":
/*!************************************************************!*\
  !*** ./src/components/Main/sideBarLeft/toolBar/toolBar.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Javascript_tool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../Javascript/tool */ "./src/Javascript/tool.js");
/* harmony import */ var _save_save__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./save/save */ "./src/components/Main/sideBarLeft/toolBar/save/save.js");
/* harmony import */ var _friends_friends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./friends/friends */ "./src/components/Main/sideBarLeft/toolBar/friends/friends.js");
/* harmony import */ var _groups_groups__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./groups/groups */ "./src/components/Main/sideBarLeft/toolBar/groups/groups.js");
/* harmony import */ var _Photos_photos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Photos/photos */ "./src/components/Main/sideBarLeft/toolBar/Photos/photos.js");
/* harmony import */ var _profile_profile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile/profile */ "./src/components/Main/sideBarLeft/toolBar/profile/profile.js");







class ToolBar {
    constructor(){
        this.box = (0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_0__.New)('div')
        this.profile = new _profile_profile__WEBPACK_IMPORTED_MODULE_5__["default"]()
        this.friends = new _friends_friends__WEBPACK_IMPORTED_MODULE_2__["default"]()
        this.photos = new _Photos_photos__WEBPACK_IMPORTED_MODULE_4__["default"]()
        this.groups = new _groups_groups__WEBPACK_IMPORTED_MODULE_3__["default"]()
        this.saved = new _save_save__WEBPACK_IMPORTED_MODULE_1__["default"]()
        this.boxStyle = ['flex', 'flex-col', 'w-full', 'mt-6', 'shadow-[0_0_20px_rgba(230,230,230,0.5)]', 'rounded-lg']

        ;(0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_0__.tailwindAdd)(this.boxStyle, this.box)
    }
    render(){
        (0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_0__.AddChild)(this.box, this.profile.render())
        ;(0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_0__.AddChild)(this.box, this.friends.render())
        ;(0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_0__.AddChild)(this.box, this.photos.render())
        ;(0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_0__.AddChild)(this.box, this.groups.render())
        ;(0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_0__.AddChild)(this.box, this.saved.render())
        return this.box
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToolBar);

/***/ }),

/***/ "./src/components/Main/sideBarRight/sideBarRight.js":
/*!**********************************************************!*\
  !*** ./src/components/Main/sideBarRight/sideBarRight.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Javascript_tool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Javascript/tool */ "./src/Javascript/tool.js");


class SideBarRight {
    constructor(){
        this.box = (0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_0__.New)('div')
        this.content = (0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_0__.New)('div')

        this.boxStyle = ['grow-0','shrink-0', 'basis-72', 'inline-block', 'mt-24']
        this.contentStyle = ['w-72', 'pr-4', 'fixed', 'right-0' ,'z-10']

        ;(0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_0__.tailwindAdd)(this.boxStyle, this.box)
        ;(0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_0__.tailwindAdd)(this.contentStyle, this.content)
    }
    render(){
        (0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_0__.AddChild)(this.box, this.content)
        return this.box
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SideBarRight);

/***/ }),

/***/ "./src/components/SignIn&SignUp/Sign UP/SignUp.js":
/*!********************************************************!*\
  !*** ./src/components/SignIn&SignUp/Sign UP/SignUp.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Javascript_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Javascript/base */ "./src/Javascript/base.js");
/* harmony import */ var _Javascript_tool__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Javascript/tool */ "./src/Javascript/tool.js");



class SignUp {
     constructor(){
          this.box = (0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_1__.New)('div');
          this.fistline = (0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_1__.New)('h1');
          this.fistline.textContent = "REGISTER NOW";
          this.firsttitle = (0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_1__.New)('p');
          this.firsttitle.textContent = "SIGN UP FOR FREE";
          this.thirdline = (0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_1__.New)('p');
          this.thirdline.textContent ="Already have an account?";

          this.link = (0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_1__.New)('a');
          this.link.textContent = "SIGN IN ";

          this.usernameLabel = new _Javascript_base__WEBPACK_IMPORTED_MODULE_0__.BaseLabel("username","UserName");
          this.emailLabel = new _Javascript_base__WEBPACK_IMPORTED_MODULE_0__.BaseLabel("email","Email");
          this.passwordLabel = new _Javascript_base__WEBPACK_IMPORTED_MODULE_0__.BaseLabel("password","Password");

          this.usernameInput = new _Javascript_base__WEBPACK_IMPORTED_MODULE_0__.BaseInput("text","username","username");
          this.emailInput = new _Javascript_base__WEBPACK_IMPORTED_MODULE_0__.BaseInput("text","email","email");
          this.passwordInput = new _Javascript_base__WEBPACK_IMPORTED_MODULE_0__.BaseInput("text","password","password");     

          this.btnSignUp = new _Javascript_base__WEBPACK_IMPORTED_MODULE_0__.BaseButton("SIGN UP");

          (0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_1__.AddChild)(this.thirdline , this.link);
          
      }
      render(){
          (0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_1__.AddChild)(this.box, this.fistline);
          (0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_1__.AddChild)(this.box, this.firsttitle);
          (0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_1__.AddChild)(this.box, this.thirdline);
          (0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_1__.AddChild)(this.box, this.link);
          (0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_1__.AddChild)(this.box, this.usernameLabel.render());
          (0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_1__.AddChild)(this.box, this.emailLabel.render());
          (0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_1__.AddChild)(this.box, this.passwordLabel.render());
          (0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_1__.AddChild)(this.box, this.usernameInput.render());
          (0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_1__.AddChild)(this.box, this.emailInput.render());
          (0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_1__.AddChild)(this.box, this.passwordInput.render());
          (0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_1__.AddChild)(this.box, this.btnSignUp.render());

          return this.box
      }}
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignUp);

/***/ }),

/***/ "./src/components/SignIn&SignUp/SignInAndSignUp.js":
/*!*********************************************************!*\
  !*** ./src/components/SignIn&SignUp/SignInAndSignUp.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Javascript_tool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Javascript/tool */ "./src/Javascript/tool.js");
/* harmony import */ var _Sign_UP_SignUp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sign UP/SignUp */ "./src/components/SignIn&SignUp/Sign UP/SignUp.js");




class SignInAndSignUp {
    constructor(){
        this.box = (0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_0__.New)('div')
        this.child = (0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_0__.New)('div')
        this.signUp = new _Sign_UP_SignUp__WEBPACK_IMPORTED_MODULE_1__["default"]()
        this.boxStyle = ['w-4/5', 'h-96', 'border', 'border-black', 'relative', 'inset-1/2', '-translate-y-1/2', '-translate-x-1/2'] 
        this.childStyle = ['px-4', 'py-2']

        ;(0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_0__.tailwindAdd)(this.boxStyle, this.box)
        ;(0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_0__.tailwindAdd)(this.childStyle, this.child)
        ;(0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_0__.AddChild)(this.child, this.signUp.render())
    }
    render(){
        (0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_0__.AddChild)(this.box, this.child)
        
        return this.box
    }
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignInAndSignUp);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tailwindcss/tailwind.css */ "./node_modules/tailwindcss/tailwind.css");
/* harmony import */ var _Javascript_tool__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Javascript/tool */ "./src/Javascript/tool.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app */ "./src/app.js");




let currentApp = new _app__WEBPACK_IMPORTED_MODULE_2__["default"]();
(()=>{
    (0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_1__.AddChild)((0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_1__.Element)('#root'), currentApp.render())
})()
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (currentApp);

/***/ }),

/***/ "./src/asset/image/Logo.png":
/*!**********************************!*\
  !*** ./src/asset/image/Logo.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "asset/image/3c3faae2fc85fea20481.png";

/***/ }),

/***/ "./src/asset/image/Null Avatar.jpg":
/*!*****************************************!*\
  !*** ./src/asset/image/Null Avatar.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "asset/image/f4eb2a3e60816c38ad88.jpg";

/***/ }),

/***/ "./src/asset/image/account.png":
/*!*************************************!*\
  !*** ./src/asset/image/account.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "asset/image/f48e52371b217de9fcd6.png";

/***/ }),

/***/ "./src/asset/image/friends.png":
/*!*************************************!*\
  !*** ./src/asset/image/friends.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "asset/image/0824802ac589544761df.png";

/***/ }),

/***/ "./src/asset/image/group.png":
/*!***********************************!*\
  !*** ./src/asset/image/group.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "asset/image/ca11a49480da65c06bf7.png";

/***/ }),

/***/ "./src/asset/image/photo.png":
/*!***********************************!*\
  !*** ./src/asset/image/photo.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "asset/image/a3be9080cd6d03ca33c6.png";

/***/ }),

/***/ "./src/asset/image/save.png":
/*!**********************************!*\
  !*** ./src/asset/image/save.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "asset/image/a83b63d1f2859019e355.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVEsTUFBTSxLQUFLLHFCQUFxQixxQkFBcUIsdUJBQXVCLFFBQVEsTUFBTSxNQUFNLEtBQUssYUFBYSxhQUFhLFFBQVEsTUFBTSxNQUFNLFVBQVUsYUFBYSxhQUFhLE9BQU8sTUFBTSxNQUFNLEtBQUssV0FBVyxZQUFZLE9BQU8sTUFBTSxNQUFNLE1BQU0sYUFBYSxPQUFPLE9BQU8sTUFBTSxRQUFRLHVCQUF1QixxQkFBcUIsT0FBTyxNQUFNLE1BQU0sS0FBSyxXQUFXLE9BQU8sTUFBTSxNQUFNLE1BQU0sV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssV0FBVyxPQUFPLFFBQVEsTUFBTSxLQUFLLHFCQUFxQix1QkFBdUIsdUJBQXVCLFFBQVEsUUFBUSxNQUFNLFNBQVMsdUJBQXVCLHFCQUFxQix1QkFBdUIscUJBQXFCLHFCQUFxQixxQkFBcUIsT0FBTyxNQUFNLE1BQU0sTUFBTSxhQUFhLE9BQU8sT0FBTyxNQUFNLFFBQVEsdUJBQXVCLHVCQUF1Qix1QkFBdUIsUUFBUSxNQUFNLE1BQU0sS0FBSyxXQUFXLE9BQU8sTUFBTSxNQUFNLEtBQUssYUFBYSxPQUFPLE1BQU0sTUFBTSxLQUFLLGFBQWEsT0FBTyxNQUFNLE1BQU0sTUFBTSxXQUFXLE9BQU8sT0FBTyxNQUFNLEtBQUssdUJBQXVCLHVCQUF1QixRQUFRLE1BQU0sTUFBTSxLQUFLLGFBQWEsT0FBTyxPQUFPLE1BQU0sS0FBSyx1QkFBdUIscUJBQXFCLE9BQU8sTUFBTSxNQUFNLEtBQUssYUFBYSxPQUFPLE1BQU0sTUFBTSxpQkFBaUIsV0FBVyxPQUFPLEtBQUssV0FBVyxVQUFVLE9BQU8sS0FBSyxXQUFXLE9BQU8sT0FBTyxhQUFhLFdBQVcsVUFBVSxPQUFPLE1BQU0sTUFBTSxLQUFLLGFBQWEsT0FBTyxPQUFPLE1BQU0sTUFBTSxxQkFBcUIsc0JBQXNCLFFBQVEsTUFBTSxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sS0FBSyxLQUFLLFdBQVcsT0FBTyxRQUFRLE1BQU0sWUFBWSxxQkFBcUIsdUJBQXVCLFFBQVEsTUFBTSxNQUFNLE1BQU0sV0FBVyxVQUFVLE9BQU8sTUFBTSxNQUFNLEtBQUssV0FBVyxPQUFPLEtBQUssV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sS0FBSyxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxXQUFXLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLFdBQVcsS0FBSyxPQUFPLE1BQU0sV0FBVyxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxXQUFXLFdBQVcsS0FBSyxPQUFPLE1BQU0sS0FBSyxPQUFPLE1BQU0sS0FBSyxPQUFPLE1BQU0sS0FBSyxPQUFPLE1BQU0sS0FBSyxPQUFPLE1BQU0sV0FBVyxLQUFLLE9BQU8s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REFBUTtBQUNoQjtBQUNBO0FBQ0EsUUFBUSwwREFBUTtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QmtCO0FBQ29CO0FBQzlCO0FBQ3ZCO0FBQ0EscUJBQXFCLDRDQUFHO0FBQ3hCO0FBQ0EsSUFBSSwwREFBUSxDQUFDLHlEQUFPO0FBQ3BCLENBQUM7QUFDRCxpRUFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL3NvY2FpbC1uZXR3b3JrLy4vbm9kZV9tb2R1bGVzL3RhaWx3aW5kY3NzL3RhaWx3aW5kLmNzcyIsIndlYnBhY2s6Ly9zb2NhaWwtbmV0d29yay8uL3NyYy9jb21wb25lbnRzL01haW4vc2lkZUJhckxlZnQvc2lkZUJhckxlZnQubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vc29jYWlsLW5ldHdvcmsvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3NvY2FpbC1uZXR3b3JrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vc29jYWlsLW5ldHdvcmsvLi9ub2RlX21vZHVsZXMvdGFpbHdpbmRjc3MvdGFpbHdpbmQuY3NzP2ZiYjkiLCJ3ZWJwYWNrOi8vc29jYWlsLW5ldHdvcmsvLi9zcmMvY29tcG9uZW50cy9NYWluL3NpZGVCYXJMZWZ0L3NpZGVCYXJMZWZ0Lm1vZHVsZS5zY3NzPzgwNzYiLCJ3ZWJwYWNrOi8vc29jYWlsLW5ldHdvcmsvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vc29jYWlsLW5ldHdvcmsvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3NvY2FpbC1uZXR3b3JrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3NvY2FpbC1uZXR3b3JrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3NvY2FpbC1uZXR3b3JrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vc29jYWlsLW5ldHdvcmsvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9zb2NhaWwtbmV0d29yay8uL3NyYy9KYXZhc2NyaXB0L2Jhc2UuanMiLCJ3ZWJwYWNrOi8vc29jYWlsLW5ldHdvcmsvLi9zcmMvSmF2YXNjcmlwdC90b29sLmpzIiwid2VicGFjazovL3NvY2FpbC1uZXR3b3JrLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly9zb2NhaWwtbmV0d29yay8uL3NyYy9jb21wb25lbnRzL01haW4vaGVhZGVyL1NlYXJjaEJhci9zZWFyY2hCYXIuanMiLCJ3ZWJwYWNrOi8vc29jYWlsLW5ldHdvcmsvLi9zcmMvY29tcG9uZW50cy9NYWluL2hlYWRlci9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vc29jYWlsLW5ldHdvcmsvLi9zcmMvY29tcG9uZW50cy9NYWluL21haW4uanMiLCJ3ZWJwYWNrOi8vc29jYWlsLW5ldHdvcmsvLi9zcmMvY29tcG9uZW50cy9NYWluL21haW5Db250ZW50L21haW5Db250ZW50LmpzIiwid2VicGFjazovL3NvY2FpbC1uZXR3b3JrLy4vc3JjL2NvbXBvbmVudHMvTWFpbi9zaWRlQmFyTGVmdC9BdmF0YXIvYXZhdGFyLmpzIiwid2VicGFjazovL3NvY2FpbC1uZXR3b3JrLy4vc3JjL2NvbXBvbmVudHMvTWFpbi9zaWRlQmFyTGVmdC9zaWRlQmFyTGVmdC5qcyIsIndlYnBhY2s6Ly9zb2NhaWwtbmV0d29yay8uL3NyYy9jb21wb25lbnRzL01haW4vc2lkZUJhckxlZnQvdG9vbEJhci9CdXR0b25TdHlsZS5qcyIsIndlYnBhY2s6Ly9zb2NhaWwtbmV0d29yay8uL3NyYy9jb21wb25lbnRzL01haW4vc2lkZUJhckxlZnQvdG9vbEJhci9QaG90b3MvcGhvdG9zLmpzIiwid2VicGFjazovL3NvY2FpbC1uZXR3b3JrLy4vc3JjL2NvbXBvbmVudHMvTWFpbi9zaWRlQmFyTGVmdC90b29sQmFyL2ZyaWVuZHMvZnJpZW5kcy5qcyIsIndlYnBhY2s6Ly9zb2NhaWwtbmV0d29yay8uL3NyYy9jb21wb25lbnRzL01haW4vc2lkZUJhckxlZnQvdG9vbEJhci9ncm91cHMvZ3JvdXBzLmpzIiwid2VicGFjazovL3NvY2FpbC1uZXR3b3JrLy4vc3JjL2NvbXBvbmVudHMvTWFpbi9zaWRlQmFyTGVmdC90b29sQmFyL3Byb2ZpbGUvcHJvZmlsZS5qcyIsIndlYnBhY2s6Ly9zb2NhaWwtbmV0d29yay8uL3NyYy9jb21wb25lbnRzL01haW4vc2lkZUJhckxlZnQvdG9vbEJhci9zYXZlL3NhdmUuanMiLCJ3ZWJwYWNrOi8vc29jYWlsLW5ldHdvcmsvLi9zcmMvY29tcG9uZW50cy9NYWluL3NpZGVCYXJMZWZ0L3Rvb2xCYXIvdG9vbEJhci5qcyIsIndlYnBhY2s6Ly9zb2NhaWwtbmV0d29yay8uL3NyYy9jb21wb25lbnRzL01haW4vc2lkZUJhclJpZ2h0L3NpZGVCYXJSaWdodC5qcyIsIndlYnBhY2s6Ly9zb2NhaWwtbmV0d29yay8uL3NyYy9jb21wb25lbnRzL1NpZ25JbiZTaWduVXAvU2lnbiBVUC9TaWduVXAuanMiLCJ3ZWJwYWNrOi8vc29jYWlsLW5ldHdvcmsvLi9zcmMvY29tcG9uZW50cy9TaWduSW4mU2lnblVwL1NpZ25JbkFuZFNpZ25VcC5qcyIsIndlYnBhY2s6Ly9zb2NhaWwtbmV0d29yay8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKlxcbiEgdGFpbHdpbmRjc3MgdjMuMC4yIHwgTUlUIExpY2Vuc2UgfCBodHRwczovL3RhaWx3aW5kY3NzLmNvbVxcbiovLypcXG4xLiBQcmV2ZW50IHBhZGRpbmcgYW5kIGJvcmRlciBmcm9tIGFmZmVjdGluZyBlbGVtZW50IHdpZHRoLiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy80KVxcbjIuIEFsbG93IGFkZGluZyBhIGJvcmRlciB0byBhbiBlbGVtZW50IGJ5IGp1c3QgYWRkaW5nIGEgYm9yZGVyLXdpZHRoLiAoaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kY3NzL3RhaWx3aW5kY3NzL3B1bGwvMTE2KVxcbiovXFxuXFxuKixcXG46OmJlZm9yZSxcXG46OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIGJvcmRlci13aWR0aDogMDsgLyogMiAqL1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDsgLyogMiAqL1xcbiAgYm9yZGVyLWNvbG9yOiBjdXJyZW50Q29sb3I7IC8qIDIgKi9cXG59XFxuXFxuOjpiZWZvcmUsXFxuOjphZnRlciB7XFxuICAtLXR3LWNvbnRlbnQ6ICcnO1xcbn1cXG5cXG4vKlxcbjEuIFVzZSBhIGNvbnNpc3RlbnQgc2Vuc2libGUgbGluZS1oZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbjIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbjMuIFVzZSBhIG1vcmUgcmVhZGFibGUgdGFiIHNpemUuXFxuNC4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBgc2Fuc2AgZm9udC1mYW1pbHkgYnkgZGVmYXVsdC5cXG4qL1xcblxcbmh0bWwge1xcbiAgbGluZS1oZWlnaHQ6IDEuNTsgLyogMSAqL1xcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovIC8qIDMgKi9cXG4gIHRhYi1zaXplOiA0OyAvKiAzICovXFxuICBmb250LWZhbWlseTogdWktc2Fucy1zZXJpZiwgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgQXJpYWwsIFxcXCJOb3RvIFNhbnNcXFwiLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIiwgXFxcIk5vdG8gQ29sb3IgRW1vamlcXFwiOyAvKiA0ICovXFxufVxcblxcbi8qXFxuMS4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbjIuIEluaGVyaXQgbGluZS1oZWlnaHQgZnJvbSBgaHRtbGAgc28gdXNlcnMgY2FuIHNldCB0aGVtIGFzIGEgY2xhc3MgZGlyZWN0bHkgb24gdGhlIGBodG1sYCBlbGVtZW50LlxcbiovXFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qXFxuMS4gQWRkIHRoZSBjb3JyZWN0IGhlaWdodCBpbiBGaXJlZm94LlxcbjIuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIG9mIGJvcmRlciBjb2xvciBpbiBGaXJlZm94LiAoaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTkwNjU1KVxcbjMuIEVuc3VyZSBob3Jpem9udGFsIHJ1bGVzIGFyZSB2aXNpYmxlIGJ5IGRlZmF1bHQuXFxuKi9cXG5cXG5ociB7XFxuICBoZWlnaHQ6IDA7IC8qIDEgKi9cXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxuICBib3JkZXItdG9wLXdpZHRoOiAxcHg7IC8qIDMgKi9cXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4qL1xcblxcbmFiYnJbdGl0bGVdIHtcXG4gIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XFxufVxcblxcbi8qXFxuUmVtb3ZlIHRoZSBkZWZhdWx0IGZvbnQgc2l6ZSBhbmQgd2VpZ2h0IGZvciBoZWFkaW5ncy5cXG4qL1xcblxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2IHtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xcbn1cXG5cXG4vKlxcblJlc2V0IGxpbmtzIHRvIG9wdGltaXplIGZvciBvcHQtaW4gc3R5bGluZyBpbnN0ZWFkIG9mIG9wdC1vdXQuXFxuKi9cXG5cXG5hIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xcbn1cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBFZGdlIGFuZCBTYWZhcmkuXFxuKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKlxcbjEuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgYG1vbm9gIGZvbnQgZmFtaWx5IGJ5IGRlZmF1bHQuXFxuMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuY29kZSxcXG5rYmQsXFxuc2FtcCxcXG5wcmUge1xcbiAgZm9udC1mYW1pbHk6IHVpLW1vbm9zcGFjZSwgU0ZNb25vLVJlZ3VsYXIsIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcXFwiTGliZXJhdGlvbiBNb25vXFxcIiwgXFxcIkNvdXJpZXIgTmV3XFxcIiwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuc21hbGwge1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qXFxuUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbnN1YixcXG5zdXAge1xcbiAgZm9udC1zaXplOiA3NSU7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3ViIHtcXG4gIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuc3VwIHtcXG4gIHRvcDogLTAuNWVtO1xcbn1cXG5cXG4vKlxcbjEuIFJlbW92ZSB0ZXh0IGluZGVudGF0aW9uIGZyb20gdGFibGUgY29udGVudHMgaW4gQ2hyb21lIGFuZCBTYWZhcmkuIChodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05OTkwODgsIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0yMDEyOTcpXFxuMi4gQ29ycmVjdCB0YWJsZSBib3JkZXIgY29sb3IgaW5oZXJpdGFuY2UgaW4gYWxsIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTM1NzI5LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTk1MDE2KVxcbjMuIFJlbW92ZSBnYXBzIGJldHdlZW4gdGFibGUgYm9yZGVycyBieSBkZWZhdWx0LlxcbiovXFxuXFxudGFibGUge1xcbiAgdGV4dC1pbmRlbnQ6IDA7IC8qIDEgKi9cXG4gIGJvcmRlci1jb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgIC8qIDMgKi9cXG59XFxuXFxuLypcXG4xLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4yLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuMy4gUmVtb3ZlIGRlZmF1bHQgcGFkZGluZyBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMSAqL1xcbiAgbWFyZ2luOiAwOyAvKiAyICovXFxuICBwYWRkaW5nOiAwOyAvKiAzICovXFxufVxcblxcbi8qXFxuUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlIGFuZCBGaXJlZm94LlxcbiovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLypcXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbjIuIFJlbW92ZSBkZWZhdWx0IGJ1dHRvbiBzdHlsZXMuXFxuKi9cXG5cXG5idXR0b24sXFxuW3R5cGU9J2J1dHRvbiddLFxcblt0eXBlPSdyZXNldCddLFxcblt0eXBlPSdzdWJtaXQnXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IC8qIDIgKi9cXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5Vc2UgdGhlIG1vZGVybiBGaXJlZm94IGZvY3VzIHN0eWxlIGZvciBhbGwgZm9jdXNhYmxlIGVsZW1lbnRzLlxcbiovXFxuXFxuOi1tb3otZm9jdXNyaW5nIHtcXG4gIG91dGxpbmU6IGF1dG87XFxufVxcblxcbi8qXFxuUmVtb3ZlIHRoZSBhZGRpdGlvbmFsIGA6aW52YWxpZGAgc3R5bGVzIGluIEZpcmVmb3guIChodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9nZWNrby1kZXYvYmxvYi8yZjllYWNkOWQzZDk5NWM5MzdiNDI1MWE1NTU3ZDk1ZDQ5NGM5YmUxL2xheW91dC9zdHlsZS9yZXMvZm9ybXMuY3NzI0w3MjgtTDczNylcXG4qL1xcblxcbjotbW96LXVpLWludmFsaWQge1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSBhbmQgRmlyZWZveC5cXG4qL1xcblxcbnByb2dyZXNzIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLypcXG5Db3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBTYWZhcmkuXFxuKi9cXG5cXG46Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLypcXG4xLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4yLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4qL1xcblxcblt0eXBlPSdzZWFyY2gnXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5SZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuKi9cXG5cXG46Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKlxcbjEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiovXFxuXFxuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxufVxcblxcbi8qXFxuUmVtb3ZlcyB0aGUgZGVmYXVsdCBzcGFjaW5nIGFuZCBib3JkZXIgZm9yIGFwcHJvcHJpYXRlIGVsZW1lbnRzLlxcbiovXFxuXFxuYmxvY2txdW90ZSxcXG5kbCxcXG5kZCxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5ocixcXG5maWd1cmUsXFxucCxcXG5wcmUge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5maWVsZHNldCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5sZWdlbmQge1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxub2wsXFxudWwsXFxubWVudSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLypcXG5QcmV2ZW50IHJlc2l6aW5nIHRleHRhcmVhcyBob3Jpem9udGFsbHkgYnkgZGVmYXVsdC5cXG4qL1xcblxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogdmVydGljYWw7XFxufVxcblxcbi8qXFxuMS4gUmVzZXQgdGhlIGRlZmF1bHQgcGxhY2Vob2xkZXIgb3BhY2l0eSBpbiBGaXJlZm94LiAoaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kbGFicy90YWlsd2luZGNzcy9pc3N1ZXMvMzMwMClcXG4yLiBTZXQgdGhlIGRlZmF1bHQgcGxhY2Vob2xkZXIgY29sb3IgdG8gdGhlIHVzZXIncyBjb25maWd1cmVkIGdyYXkgNDAwIGNvbG9yLlxcbiovXFxuXFxuaW5wdXQ6OnBsYWNlaG9sZGVyLFxcbnRleHRhcmVhOjpwbGFjZWhvbGRlciB7XFxuICBvcGFjaXR5OiAxOyAgLyogMSAqL1xcbiAgY29sb3I6ICM5Y2EzYWY7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5TZXQgdGhlIGRlZmF1bHQgY3Vyc29yIGZvciBidXR0b25zLlxcbiovXFxuXFxuYnV0dG9uLFxcbltyb2xlPVxcXCJidXR0b25cXFwiXSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qXFxuTWFrZSBzdXJlIGRpc2FibGVkIGJ1dHRvbnMgZG9uJ3QgZ2V0IHRoZSBwb2ludGVyIGN1cnNvci5cXG4qL1xcbjpkaXNhYmxlZCB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbi8qXFxuMS4gTWFrZSByZXBsYWNlZCBlbGVtZW50cyBgZGlzcGxheTogYmxvY2tgIGJ5IGRlZmF1bHQuIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0KVxcbjIuIEFkZCBgdmVydGljYWwtYWxpZ246IG1pZGRsZWAgdG8gYWxpZ24gcmVwbGFjZWQgZWxlbWVudHMgbW9yZSBzZW5zaWJseSBieSBkZWZhdWx0LiAoaHR0cHM6Ly9naXRodWIuY29tL2plbnNpbW1vbnMvY3NzcmVtZWR5L2lzc3Vlcy8xNCNpc3N1ZWNvbW1lbnQtNjM0OTM0MjEwKVxcbiAgIFRoaXMgY2FuIHRyaWdnZXIgYSBwb29ybHkgY29uc2lkZXJlZCBsaW50IGVycm9yIGluIHNvbWUgdG9vbHMgYnV0IGlzIGluY2x1ZGVkIGJ5IGRlc2lnbi5cXG4qL1xcblxcbmltZyxcXG5zdmcsXFxudmlkZW8sXFxuY2FudmFzLFxcbmF1ZGlvLFxcbmlmcmFtZSxcXG5lbWJlZCxcXG5vYmplY3Qge1xcbiAgZGlzcGxheTogYmxvY2s7IC8qIDEgKi9cXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5Db25zdHJhaW4gaW1hZ2VzIGFuZCB2aWRlb3MgdG8gdGhlIHBhcmVudCB3aWR0aCBhbmQgcHJlc2VydmUgdGhlaXIgaW50cmluc2ljIGFzcGVjdCByYXRpby4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvMTQpXFxuKi9cXG5cXG5pbWcsXFxudmlkZW8ge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKlxcbkVuc3VyZSB0aGUgZGVmYXVsdCBicm93c2VyIGJlaGF2aW9yIG9mIHRoZSBgaGlkZGVuYCBhdHRyaWJ1dGUuXFxuKi9cXG5cXG5baGlkZGVuXSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4qLCA6OmJlZm9yZSwgOjphZnRlciB7XFxuICAtLXR3LXRyYW5zbGF0ZS14OiAwO1xcbiAgLS10dy10cmFuc2xhdGUteTogMDtcXG4gIC0tdHctcm90YXRlOiAwO1xcbiAgLS10dy1za2V3LXg6IDA7XFxuICAtLXR3LXNrZXcteTogMDtcXG4gIC0tdHctc2NhbGUteDogMTtcXG4gIC0tdHctc2NhbGUteTogMTtcXG4gIC0tdHctdHJhbnNmb3JtOiB0cmFuc2xhdGVYKHZhcigtLXR3LXRyYW5zbGF0ZS14KSkgdHJhbnNsYXRlWSh2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XFxuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMjI5IDIzMSAyMzUgLyB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xcbiAgLS10dy1yaW5nLW9mZnNldC1zaGFkb3c6IDAgMCAjMDAwMDtcXG4gIC0tdHctcmluZy1zaGFkb3c6IDAgMCAjMDAwMDtcXG4gIC0tdHctc2hhZG93OiAwIDAgIzAwMDA7XFxuICAtLXR3LXNoYWRvdy1jb2xvcmVkOiAwIDAgIzAwMDA7XFxufVxcblxcbi5maXhlZCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxufVxcblxcbi5yZWxhdGl2ZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5pbnNldC0xXFxcXC8yIHtcXG4gIHRvcDogNTAlO1xcbiAgcmlnaHQ6IDUwJTtcXG4gIGJvdHRvbTogNTAlO1xcbiAgbGVmdDogNTAlO1xcbn1cXG5cXG4ucmlnaHQtMCB7XFxuICByaWdodDogMHB4O1xcbn1cXG5cXG4uei0xMCB7XFxuICB6LWluZGV4OiAxMDtcXG59XFxuXFxuLm14LTQge1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcblxcbi5tbC00IHtcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbn1cXG5cXG4ubXQtMjQge1xcbiAgbWFyZ2luLXRvcDogNnJlbTtcXG59XFxuXFxuLm1sLTYge1xcbiAgbWFyZ2luLWxlZnQ6IDEuNXJlbTtcXG59XFxuXFxuLm10LTYge1xcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xcbn1cXG5cXG4uaW5saW5lLWJsb2NrIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLmZsZXgge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmgtc2NyZWVuIHtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi5oLTk2IHtcXG4gIGhlaWdodDogMjRyZW07XFxufVxcblxcbi5oLTIwIHtcXG4gIGhlaWdodDogNXJlbTtcXG59XFxuXFxuLmgtMTQge1xcbiAgaGVpZ2h0OiAzLjVyZW07XFxufVxcblxcbi5oLTEyIHtcXG4gIGhlaWdodDogM3JlbTtcXG59XFxuXFxuLmgtMTI4IHtcXG4gIGhlaWdodDogMzJyZW07XFxufVxcblxcbi5oLTgge1xcbiAgaGVpZ2h0OiAycmVtO1xcbn1cXG5cXG4uaC0xNiB7XFxuICBoZWlnaHQ6IDRyZW07XFxufVxcblxcbi5oLTYge1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxufVxcblxcbi53LWZ1bGwge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi53LTRcXFxcLzUge1xcbiAgd2lkdGg6IDgwJTtcXG59XFxuXFxuLnctMTIge1xcbiAgd2lkdGg6IDNyZW07XFxufVxcblxcbi53LTcyIHtcXG4gIHdpZHRoOiAxOHJlbTtcXG59XFxuXFxuLnctNjQge1xcbiAgd2lkdGg6IDE2cmVtO1xcbn1cXG5cXG4udy00MCB7XFxuICB3aWR0aDogMTByZW07XFxufVxcblxcbi53LTYge1xcbiAgd2lkdGg6IDEuNXJlbTtcXG59XFxuXFxuLm1heC13LWZ1bGwge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uc2hyaW5rIHtcXG4gIGZsZXgtc2hyaW5rOiAxO1xcbn1cXG5cXG4uc2hyaW5rLTAge1xcbiAgZmxleC1zaHJpbms6IDA7XFxufVxcblxcbi5ncm93IHtcXG4gIGZsZXgtZ3JvdzogMTtcXG59XFxuXFxuLmdyb3ctMCB7XFxuICBmbGV4LWdyb3c6IDA7XFxufVxcblxcbi5iYXNpcy03MiB7XFxuICBmbGV4LWJhc2lzOiAxOHJlbTtcXG59XFxuXFxuLi10cmFuc2xhdGUteS0xXFxcXC8yIHtcXG4gIC0tdHctdHJhbnNsYXRlLXk6IC01MCU7XFxuICB0cmFuc2Zvcm06IHZhcigtLXR3LXRyYW5zZm9ybSk7XFxufVxcblxcbi4tdHJhbnNsYXRlLXgtMVxcXFwvMiB7XFxuICAtLXR3LXRyYW5zbGF0ZS14OiAtNTAlO1xcbiAgdHJhbnNmb3JtOiB2YXIoLS10dy10cmFuc2Zvcm0pO1xcbn1cXG5cXG4uY3Vyc29yLXBvaW50ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZmxleC1yb3cge1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuLmZsZXgtY29sIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5pdGVtcy1jZW50ZXIge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmp1c3RpZnktYmV0d2VlbiB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5vdmVyZmxvdy15LWF1dG8ge1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLnRydW5jYXRlIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi5yb3VuZGVkIHtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxufVxcblxcbi5yb3VuZGVkLWxnIHtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG59XFxuXFxuLmJvcmRlciB7XFxuICBib3JkZXItd2lkdGg6IDFweDtcXG59XFxuXFxuLmJvcmRlci0yIHtcXG4gIGJvcmRlci13aWR0aDogMnB4O1xcbn1cXG5cXG4uYm9yZGVyLWJsYWNrIHtcXG4gIC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxuICBib3JkZXItY29sb3I6IHJnYigwIDAgMCAvIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5KSk7XFxufVxcblxcbi5ib3JkZXItaW5kaWdvLTUwMFxcXFwvMTAwIHtcXG4gIGJvcmRlci1jb2xvcjogcmdiKDk5IDEwMiAyNDEgLyAxKTtcXG59XFxuXFxuLmJvcmRlci1iLWdyYXktMjAwIHtcXG4gIC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxuICBib3JkZXItYm90dG9tLWNvbG9yOiByZ2IoMjI5IDIzMSAyMzUgLyB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xcbn1cXG5cXG4uYmctd2hpdGUge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSAyNTUgMjU1IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG5cXG4uYmctc2xhdGUtMjAwIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjYgMjMyIDI0MCAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuXFxuLmJnLXNsYXRlLTMwMCB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAzIDIxMyAyMjUgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcblxcbi5weC00IHtcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxufVxcblxcbi5weS0yIHtcXG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG4ucGwtNCB7XFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxufVxcblxcbi5wci00IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxufVxcblxcbi5wbC0yIHtcXG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xcbn1cXG5cXG4udGV4dC14cyB7XFxuICBmb250LXNpemU6IDAuNzVyZW07XFxuICBsaW5lLWhlaWdodDogMXJlbTtcXG59XFxuXFxuLnRleHQtYmFzZSB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBsaW5lLWhlaWdodDogMS41cmVtO1xcbn1cXG5cXG4uZm9udC1zZW1pYm9sZCB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uZm9udC1ib2xkIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi50cmFja2luZy13aWRlc3Qge1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xcbn1cXG5cXG4udHJhY2tpbmctd2lkZSB7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wMjVlbTtcXG59XFxuXFxuLnRleHQtd2hpdGUge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiKDI1NSAyNTUgMjU1IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcblxcbi50ZXh0LXNsYXRlLTQwMCB7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiByZ2IoMTQ4IDE2MyAxODQgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuXFxuLnRleHQtc2xhdGUtNjAwIHtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IHJnYig3MSA4NSAxMDUgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuXFxuLnNoYWRvdy1cXFxcWzBfMTBweF81MHB4X3JnYmFcXFxcKDIzMFxcXFwyYyAyMzBcXFxcMmMgMjMwXFxcXDJjIDBcXFxcLjVcXFxcKVxcXFxdIHtcXG4gIC0tdHctc2hhZG93OiAwIDEwcHggNTBweCByZ2JhKDIzMCwyMzAsMjMwLDAuNSk7XFxuICAtLXR3LXNoYWRvdy1jb2xvcmVkOiAwIDEwcHggNTBweCB2YXIoLS10dy1zaGFkb3ctY29sb3IpO1xcbiAgYm94LXNoYWRvdzogdmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1yaW5nLXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctc2hhZG93KTtcXG59XFxuXFxuLnNoYWRvdy1cXFxcWzBfMF8yMHB4X3JnYmFcXFxcKDIzMFxcXFwyYyAyMzBcXFxcMmMgMjMwXFxcXDJjIDBcXFxcLjVcXFxcKVxcXFxdIHtcXG4gIC0tdHctc2hhZG93OiAwIDAgMjBweCByZ2JhKDIzMCwyMzAsMjMwLDAuNSk7XFxuICAtLXR3LXNoYWRvdy1jb2xvcmVkOiAwIDAgMjBweCB2YXIoLS10dy1zaGFkb3ctY29sb3IpO1xcbiAgYm94LXNoYWRvdzogdmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1yaW5nLXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctc2hhZG93KTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vbm9kZV9tb2R1bGVzL3RhaWx3aW5kY3NzL3RhaWx3aW5kLmNzc1wiLFwid2VicGFjazovLy4vbm9kZV9tb2R1bGVzL3RhaWx3aW5kY3NzLyUzQ2lucHV0JTIwY3NzJTIwTGNDMVJXJTNFXCIsXCI8bm8gc291cmNlPlwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Q0FBYyxDQUFkOzs7Q0FBYzs7QUFBZDs7O0VDUUUsc0JBQXNCLEVBQUUsTUFBTTtFQUM5QixlQUFlLEVBQUUsTUFBTTtFQUN2QixtQkFBbUIsRUFBRSxNQUFNO0VBQzNCLDBCQUEwQixFQUFFLE1BQU07QURYdEI7O0FBQWQ7O0VDZ0JFLGdCQUFnQjtBRGhCSjs7QUFBZDs7Ozs7Q0FBYzs7QUFBZDtFQzJCRSxnQkFBZ0IsRUFBRSxNQUFNO0VBQ3hCLDhCQUE4QixFQUFFLE1BQU0sRUFDcEIsTUFBTTtFQUN4QixXQUFXLEVBQUUsTUFBTTtFQUNuQiw0TkFBc1AsRUFBRSxNQUFNO0FEL0JsUDs7QUFBZDs7O0NBQWM7O0FBQWQ7RUN3Q0UsU0FBUyxFQUFFLE1BQU07RUFDakIsb0JBQW9CLEVBQUUsTUFBTTtBRHpDaEI7O0FBQWQ7Ozs7Q0FBYzs7QUFBZDtFQ21ERSxTQUFTLEVBQUUsTUFBTTtFQUNqQixjQUFjLEVBQUUsTUFBTTtFQUN0QixxQkFBcUIsRUFBRSxNQUFNO0FEckRqQjs7QUFBZDs7Q0FBYzs7QUFBZDtFQzZERSx5Q0FBaUM7VUFBakMsaUNBQWlDO0FEN0RyQjs7QUFBZDs7Q0FBYzs7QUFBZDs7Ozs7O0VDMEVFLGtCQUFrQjtFQUNsQixvQkFBb0I7QUQzRVI7O0FBQWQ7O0NBQWM7O0FBQWQ7RUNtRkUsY0FBYztFQUNkLHdCQUF3QjtBRHBGWjs7QUFBZDs7Q0FBYzs7QUFBZDs7RUM2RkUsbUJBQW1CO0FEN0ZQOztBQUFkOzs7Q0FBYzs7QUFBZDs7OztFQ3lHRSwrR0FBeUksRUFBRSxNQUFNO0VBQ2pKLGNBQWMsRUFBRSxNQUFNO0FEMUdWOztBQUFkOztDQUFjOztBQUFkO0VDa0hFLGNBQWM7QURsSEY7O0FBQWQ7O0NBQWM7O0FBQWQ7O0VDMkhFLGNBQWM7RUFDZCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHdCQUF3QjtBRDlIWjs7QUFBZDtFQ2tJRSxlQUFlO0FEbElIOztBQUFkO0VDc0lFLFdBQVc7QUR0SUM7O0FBQWQ7Ozs7Q0FBYzs7QUFBZDtFQ2dKRSxjQUFjLEVBQUUsTUFBTTtFQUN0QixxQkFBcUIsRUFBRSxNQUFNO0VBQzdCLHlCQUF5QixHQUFHLE1BQU07QURsSnRCOztBQUFkOzs7O0NBQWM7O0FBQWQ7Ozs7O0VDZ0tFLG9CQUFvQixFQUFFLE1BQU07RUFDNUIsZUFBZSxFQUFFLE1BQU07RUFDdkIsb0JBQW9CLEVBQUUsTUFBTTtFQUM1QixjQUFjLEVBQUUsTUFBTTtFQUN0QixTQUFTLEVBQUUsTUFBTTtFQUNqQixVQUFVLEVBQUUsTUFBTTtBRHJLTjs7QUFBZDs7Q0FBYzs7QUFBZDs7RUM4S0Usb0JBQW9CO0FEOUtSOztBQUFkOzs7Q0FBYzs7QUFBZDs7OztFQzBMRSwwQkFBMEIsRUFBRSxNQUFNO0VBQ2xDLDZCQUE2QixFQUFFLE1BQU07RUFDckMsc0JBQXNCLEVBQUUsTUFBTTtBRDVMbEI7O0FBQWQ7O0NBQWM7O0FBQWQ7RUNvTUUsYUFBYTtBRHBNRDs7QUFBZDs7Q0FBYzs7QUFBZDtFQzRNRSxnQkFBZ0I7QUQ1TUo7O0FBQWQ7O0NBQWM7O0FBQWQ7RUNvTkUsd0JBQXdCO0FEcE5aOztBQUFkOztDQUFjOztBQUFkOztFQzZORSxZQUFZO0FEN05BOztBQUFkOzs7Q0FBYzs7QUFBZDtFQ3NPRSw2QkFBNkIsRUFBRSxNQUFNO0VBQ3JDLG9CQUFvQixFQUFFLE1BQU07QUR2T2hCOztBQUFkOztDQUFjOztBQUFkO0VDK09FLHdCQUF3QjtBRC9PWjs7QUFBZDs7O0NBQWM7O0FBQWQ7RUN3UEUsMEJBQTBCLEVBQUUsTUFBTTtFQUNsQyxhQUFhLEVBQUUsTUFBTTtBRHpQVDs7QUFBZDs7Q0FBYzs7QUFBZDtFQ2lRRSxrQkFBa0I7QURqUU47O0FBQWQ7O0NBQWM7O0FBQWQ7Ozs7Ozs7Ozs7Ozs7RUNxUkUsU0FBUztBRHJSRzs7QUFBZDtFQ3lSRSxTQUFTO0VBQ1QsVUFBVTtBRDFSRTs7QUFBZDtFQzhSRSxVQUFVO0FEOVJFOztBQUFkOzs7RUNvU0UsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxVQUFVO0FEdFNFOztBQUFkOztDQUFjOztBQUFkO0VDOFNFLGdCQUFnQjtBRDlTSjs7QUFBZDs7O0NBQWM7O0FBQWQ7O0VDd1RFLFVBQVUsR0FBRyxNQUFNO0VBQ25CLGNBQXdDLEVBQUUsTUFBTTtBRHpUcEM7O0FBQWQ7O0NBQWM7O0FBQWQ7O0VDa1VFLGVBQWU7QURsVUg7O0FBQWQ7O0NBQWM7QUFBZDtFQ3lVRSxlQUFlO0FEelVIOztBQUFkOzs7O0NBQWM7O0FBQWQ7Ozs7Ozs7O0VDMFZFLGNBQWMsRUFBRSxNQUFNO0VBQ3RCLHNCQUFzQixFQUFFLE1BQU07QUQzVmxCOztBQUFkOztDQUFjOztBQUFkOztFQ29XRSxlQUFlO0VBQ2YsWUFBWTtBRHJXQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQzZXRSxhQUFhO0FEN1dEOztBRUFkO0VBQUEsb0JBQUE7RUFBQSxvQkFBQTtFQUFBLGVBQUE7RUFBQSxlQUFBO0VBQUEsZUFBQTtFQUFBLGdCQUFBO0VBQUEsZ0JBQUE7RUFBQSxpTkFBQTtFQUFBLHVCQUFBO0VBQUEsMERBQUE7RUFBQSxtQ0FBQTtFQUFBLDRCQUFBO0VBQUEsdUJBQUE7RUFBQTtDQUFBOztBRklBO0VFSkE7QUZJbUI7O0FBQW5CO0VFSkE7QUZJbUI7O0FBQW5CO0VFSkEsU0FBQTtFQUFBLFdBQUE7RUFBQSxZQUFBO0VBQUE7QUZJbUI7O0FBQW5CO0VFSkE7QUZJbUI7O0FBQW5CO0VFSkE7QUZJbUI7O0FBQW5CO0VFSkEsa0JBQUE7RUFBQTtBRkltQjs7QUFBbkI7RUVKQTtBRkltQjs7QUFBbkI7RUVKQTtBRkltQjs7QUFBbkI7RUVKQTtBRkltQjs7QUFBbkI7RUVKQTtBRkltQjs7QUFBbkI7RUVKQTtBRkltQjs7QUFBbkI7RUVKQTtBRkltQjs7QUFBbkI7RUVKQTtBRkltQjs7QUFBbkI7RUVKQTtBRkltQjs7QUFBbkI7RUVKQTtBRkltQjs7QUFBbkI7RUVKQTtBRkltQjs7QUFBbkI7RUVKQTtBRkltQjs7QUFBbkI7RUVKQTtBRkltQjs7QUFBbkI7RUVKQTtBRkltQjs7QUFBbkI7RUVKQTtBRkltQjs7QUFBbkI7RUVKQTtBRkltQjs7QUFBbkI7RUVKQTtBRkltQjs7QUFBbkI7RUVKQTtBRkltQjs7QUFBbkI7RUVKQTtBRkltQjs7QUFBbkI7RUVKQTtBRkltQjs7QUFBbkI7RUVKQTtBRkltQjs7QUFBbkI7RUVKQTtBRkltQjs7QUFBbkI7RUVKQTtBRkltQjs7QUFBbkI7RUVKQTtBRkltQjs7QUFBbkI7RUVKQTtBRkltQjs7QUFBbkI7RUVKQTtBRkltQjs7QUFBbkI7RUVKQTtBRkltQjs7QUFBbkI7RUVKQTtBRkltQjs7QUFBbkI7RUVKQTtBRkltQjs7QUFBbkI7RUVKQSx1QkFBQTtFQUFBO0FGSW1COztBQUFuQjtFRUpBLHVCQUFBO0VBQUE7QUZJbUI7O0FBQW5CO0VFSkE7QUZJbUI7O0FBQW5CO0VFSkE7QUZJbUI7O0FBQW5CO0VFSkE7QUZJbUI7O0FBQW5CO0VFSkE7QUZJbUI7O0FBQW5CO0VFSkE7QUZJbUI7O0FBQW5CO0VFSkE7QUZJbUI7O0FBQW5CO0VFSkEsaUJBQUE7RUFBQSx3QkFBQTtFQUFBO0FGSW1COztBQUFuQjtFRUpBO0FGSW1COztBQUFuQjtFRUpBO0FGSW1COztBQUFuQjtFRUpBO0FGSW1COztBQUFuQjtFRUpBO0FGSW1COztBQUFuQjtFRUpBLHVCQUFBO0VBQUE7QUZJbUI7O0FBQW5CO0VFSkE7QUZJbUI7O0FBQW5CO0VFSkEsdUJBQUE7RUFBQTtBRkltQjs7QUFBbkI7RUVKQSxtQkFBQTtFQUFBO0FGSW1COztBQUFuQjtFRUpBLG1CQUFBO0VBQUE7QUZJbUI7O0FBQW5CO0VFSkEsbUJBQUE7RUFBQTtBRkltQjs7QUFBbkI7RUVKQSxtQkFBQTtFQUFBO0FGSW1COztBQUFuQjtFRUpBLG9CQUFBO0VBQUE7QUZJbUI7O0FBQW5CO0VFSkE7QUZJbUI7O0FBQW5CO0VFSkE7QUZJbUI7O0FBQW5CO0VFSkE7QUZJbUI7O0FBQW5CO0VFSkEsbUJBQUE7RUFBQTtBRkltQjs7QUFBbkI7RUVKQSxnQkFBQTtFQUFBO0FGSW1COztBQUFuQjtFRUpBO0FGSW1COztBQUFuQjtFRUpBO0FGSW1COztBQUFuQjtFRUpBO0FGSW1COztBQUFuQjtFRUpBO0FGSW1COztBQUFuQjtFRUpBLHFCQUFBO0VBQUE7QUZJbUI7O0FBQW5CO0VFSkEscUJBQUE7RUFBQTtBRkltQjs7QUFBbkI7RUVKQSxxQkFBQTtFQUFBO0FGSW1COztBQUFuQjtFRUpBLCtDQUFBO0VBQUEsd0RBQUE7RUFBQTtBRkltQjs7QUFBbkI7RUVKQSw0Q0FBQTtFQUFBLHFEQUFBO0VBQUE7QUZJbUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQHRhaWx3aW5kIGJhc2U7XFxuXFxuQHRhaWx3aW5kIGNvbXBvbmVudHM7XFxuXFxuQHRhaWx3aW5kIHV0aWxpdGllcztcXG5cIixcIi8qXFxuMS4gUHJldmVudCBwYWRkaW5nIGFuZCBib3JkZXIgZnJvbSBhZmZlY3RpbmcgZWxlbWVudCB3aWR0aC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvNClcXG4yLiBBbGxvdyBhZGRpbmcgYSBib3JkZXIgdG8gYW4gZWxlbWVudCBieSBqdXN0IGFkZGluZyBhIGJvcmRlci13aWR0aC4gKGh0dHBzOi8vZ2l0aHViLmNvbS90YWlsd2luZGNzcy90YWlsd2luZGNzcy9wdWxsLzExNilcXG4qL1xcblxcbiosXFxuOjpiZWZvcmUsXFxuOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBib3JkZXItd2lkdGg6IDA7IC8qIDIgKi9cXG4gIGJvcmRlci1zdHlsZTogc29saWQ7IC8qIDIgKi9cXG4gIGJvcmRlci1jb2xvcjogY3VycmVudENvbG9yOyAvKiAyICovXFxufVxcblxcbjo6YmVmb3JlLFxcbjo6YWZ0ZXIge1xcbiAgLS10dy1jb250ZW50OiAnJztcXG59XFxuXFxuLypcXG4xLiBVc2UgYSBjb25zaXN0ZW50IHNlbnNpYmxlIGxpbmUtaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4yLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXG4zLiBVc2UgYSBtb3JlIHJlYWRhYmxlIHRhYiBzaXplLlxcbjQuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgYHNhbnNgIGZvbnQtZmFtaWx5IGJ5IGRlZmF1bHQuXFxuKi9cXG5cXG5odG1sIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7IC8qIDEgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbiAgLW1vei10YWItc2l6ZTogNDsgLyogMyAqL1xcbiAgdGFiLXNpemU6IDQ7IC8qIDMgKi9cXG4gIGZvbnQtZmFtaWx5OiB0aGVtZSgnZm9udEZhbWlseS5zYW5zJywgdWktc2Fucy1zZXJpZiwgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgQXJpYWwsIFxcXCJOb3RvIFNhbnNcXFwiLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIiwgXFxcIk5vdG8gQ29sb3IgRW1vamlcXFwiKTsgLyogNCAqL1xcbn1cXG5cXG4vKlxcbjEuIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXG4yLiBJbmhlcml0IGxpbmUtaGVpZ2h0IGZyb20gYGh0bWxgIHNvIHVzZXJzIGNhbiBzZXQgdGhlbSBhcyBhIGNsYXNzIGRpcmVjdGx5IG9uIHRoZSBgaHRtbGAgZWxlbWVudC5cXG4qL1xcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwOyAvKiAxICovXFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKlxcbjEuIEFkZCB0aGUgY29ycmVjdCBoZWlnaHQgaW4gRmlyZWZveC5cXG4yLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBvZiBib3JkZXIgY29sb3IgaW4gRmlyZWZveC4gKGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTE5MDY1NSlcXG4zLiBFbnN1cmUgaG9yaXpvbnRhbCBydWxlcyBhcmUgdmlzaWJsZSBieSBkZWZhdWx0LlxcbiovXFxuXFxuaHIge1xcbiAgaGVpZ2h0OiAwOyAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgYm9yZGVyLXRvcC13aWR0aDogMXB4OyAvKiAzICovXFxufVxcblxcbi8qXFxuQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuKi9cXG5cXG5hYmJyW3RpdGxlXSB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XFxufVxcblxcbi8qXFxuUmVtb3ZlIHRoZSBkZWZhdWx0IGZvbnQgc2l6ZSBhbmQgd2VpZ2h0IGZvciBoZWFkaW5ncy5cXG4qL1xcblxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2IHtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xcbn1cXG5cXG4vKlxcblJlc2V0IGxpbmtzIHRvIG9wdGltaXplIGZvciBvcHQtaW4gc3R5bGluZyBpbnN0ZWFkIG9mIG9wdC1vdXQuXFxuKi9cXG5cXG5hIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xcbn1cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBFZGdlIGFuZCBTYWZhcmkuXFxuKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKlxcbjEuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgYG1vbm9gIGZvbnQgZmFtaWx5IGJ5IGRlZmF1bHQuXFxuMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuY29kZSxcXG5rYmQsXFxuc2FtcCxcXG5wcmUge1xcbiAgZm9udC1mYW1pbHk6IHRoZW1lKCdmb250RmFtaWx5Lm1vbm8nLCB1aS1tb25vc3BhY2UsIFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXFxcIkxpYmVyYXRpb24gTW9ub1xcXCIsIFxcXCJDb3VyaWVyIE5ld1xcXCIsIG1vbm9zcGFjZSk7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qXFxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5zbWFsbCB7XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLypcXG5QcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuc3ViLFxcbnN1cCB7XFxuICBmb250LXNpemU6IDc1JTtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5zdWIge1xcbiAgYm90dG9tOiAtMC4yNWVtO1xcbn1cXG5cXG5zdXAge1xcbiAgdG9wOiAtMC41ZW07XFxufVxcblxcbi8qXFxuMS4gUmVtb3ZlIHRleHQgaW5kZW50YXRpb24gZnJvbSB0YWJsZSBjb250ZW50cyBpbiBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTk5OTA4OCwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTIwMTI5NylcXG4yLiBDb3JyZWN0IHRhYmxlIGJvcmRlciBjb2xvciBpbmhlcml0YW5jZSBpbiBhbGwgQ2hyb21lIGFuZCBTYWZhcmkuIChodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05MzU3MjksIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTUwMTYpXFxuMy4gUmVtb3ZlIGdhcHMgYmV0d2VlbiB0YWJsZSBib3JkZXJzIGJ5IGRlZmF1bHQuXFxuKi9cXG5cXG50YWJsZSB7XFxuICB0ZXh0LWluZGVudDogMDsgLyogMSAqL1xcbiAgYm9yZGVyLWNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyAgLyogMyAqL1xcbn1cXG5cXG4vKlxcbjEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcbjIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4zLiBSZW1vdmUgZGVmYXVsdCBwYWRkaW5nIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAxICovXFxuICBtYXJnaW46IDA7IC8qIDIgKi9cXG4gIHBhZGRpbmc6IDA7IC8qIDMgKi9cXG59XFxuXFxuLypcXG5SZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UgYW5kIEZpcmVmb3guXFxuKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHtcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKlxcbjEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuMi4gUmVtb3ZlIGRlZmF1bHQgYnV0dG9uIHN0eWxlcy5cXG4qL1xcblxcbmJ1dHRvbixcXG5bdHlwZT0nYnV0dG9uJ10sXFxuW3R5cGU9J3Jlc2V0J10sXFxuW3R5cGU9J3N1Ym1pdCddIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgLyogMiAqL1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTsgLyogMiAqL1xcbn1cXG5cXG4vKlxcblVzZSB0aGUgbW9kZXJuIEZpcmVmb3ggZm9jdXMgc3R5bGUgZm9yIGFsbCBmb2N1c2FibGUgZWxlbWVudHMuXFxuKi9cXG5cXG46LW1vei1mb2N1c3Jpbmcge1xcbiAgb3V0bGluZTogYXV0bztcXG59XFxuXFxuLypcXG5SZW1vdmUgdGhlIGFkZGl0aW9uYWwgYDppbnZhbGlkYCBzdHlsZXMgaW4gRmlyZWZveC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL2dlY2tvLWRldi9ibG9iLzJmOWVhY2Q5ZDNkOTk1YzkzN2I0MjUxYTU1NTdkOTVkNDk0YzliZTEvbGF5b3V0L3N0eWxlL3Jlcy9mb3Jtcy5jc3MjTDcyOC1MNzM3KVxcbiovXFxuXFxuOi1tb3otdWktaW52YWxpZCB7XFxuICBib3gtc2hhZG93OiBub25lO1xcbn1cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lIGFuZCBGaXJlZm94LlxcbiovXFxuXFxucHJvZ3Jlc3Mge1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKlxcbkNvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIFNhZmFyaS5cXG4qL1xcblxcbjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG46Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKlxcbjEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcbjIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiovXFxuXFxuW3R5cGU9J3NlYXJjaCddIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xcbn1cXG5cXG4vKlxcblJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXG4qL1xcblxcbjo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qXFxuMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4yLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxuKi9cXG5cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXFxuICBmb250OiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qXFxuQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuKi9cXG5cXG5zdW1tYXJ5IHtcXG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcXG59XFxuXFxuLypcXG5SZW1vdmVzIHRoZSBkZWZhdWx0IHNwYWNpbmcgYW5kIGJvcmRlciBmb3IgYXBwcm9wcmlhdGUgZWxlbWVudHMuXFxuKi9cXG5cXG5ibG9ja3F1b3RlLFxcbmRsLFxcbmRkLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbmhyLFxcbmZpZ3VyZSxcXG5wLFxcbnByZSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmZpZWxkc2V0IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmxlZ2VuZCB7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5vbCxcXG51bCxcXG5tZW51IHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKlxcblByZXZlbnQgcmVzaXppbmcgdGV4dGFyZWFzIGhvcml6b250YWxseSBieSBkZWZhdWx0LlxcbiovXFxuXFxudGV4dGFyZWEge1xcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcXG59XFxuXFxuLypcXG4xLiBSZXNldCB0aGUgZGVmYXVsdCBwbGFjZWhvbGRlciBvcGFjaXR5IGluIEZpcmVmb3guIChodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRsYWJzL3RhaWx3aW5kY3NzL2lzc3Vlcy8zMzAwKVxcbjIuIFNldCB0aGUgZGVmYXVsdCBwbGFjZWhvbGRlciBjb2xvciB0byB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgZ3JheSA0MDAgY29sb3IuXFxuKi9cXG5cXG5pbnB1dDo6cGxhY2Vob2xkZXIsXFxudGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcXG4gIG9wYWNpdHk6IDE7ICAvKiAxICovXFxuICBjb2xvcjogdGhlbWUoJ2NvbG9ycy5ncmF5LjQwMCcsICM5Y2EzYWYpOyAvKiAyICovXFxufVxcblxcbi8qXFxuU2V0IHRoZSBkZWZhdWx0IGN1cnNvciBmb3IgYnV0dG9ucy5cXG4qL1xcblxcbmJ1dHRvbixcXG5bcm9sZT1cXFwiYnV0dG9uXFxcIl0ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKlxcbk1ha2Ugc3VyZSBkaXNhYmxlZCBidXR0b25zIGRvbid0IGdldCB0aGUgcG9pbnRlciBjdXJzb3IuXFxuKi9cXG46ZGlzYWJsZWQge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4vKlxcbjEuIE1ha2UgcmVwbGFjZWQgZWxlbWVudHMgYGRpc3BsYXk6IGJsb2NrYCBieSBkZWZhdWx0LiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy8xNClcXG4yLiBBZGQgYHZlcnRpY2FsLWFsaWduOiBtaWRkbGVgIHRvIGFsaWduIHJlcGxhY2VkIGVsZW1lbnRzIG1vcmUgc2Vuc2libHkgYnkgZGVmYXVsdC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9qZW5zaW1tb25zL2Nzc3JlbWVkeS9pc3N1ZXMvMTQjaXNzdWVjb21tZW50LTYzNDkzNDIxMClcXG4gICBUaGlzIGNhbiB0cmlnZ2VyIGEgcG9vcmx5IGNvbnNpZGVyZWQgbGludCBlcnJvciBpbiBzb21lIHRvb2xzIGJ1dCBpcyBpbmNsdWRlZCBieSBkZXNpZ24uXFxuKi9cXG5cXG5pbWcsXFxuc3ZnLFxcbnZpZGVvLFxcbmNhbnZhcyxcXG5hdWRpbyxcXG5pZnJhbWUsXFxuZW1iZWQsXFxub2JqZWN0IHtcXG4gIGRpc3BsYXk6IGJsb2NrOyAvKiAxICovXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAvKiAyICovXFxufVxcblxcbi8qXFxuQ29uc3RyYWluIGltYWdlcyBhbmQgdmlkZW9zIHRvIHRoZSBwYXJlbnQgd2lkdGggYW5kIHByZXNlcnZlIHRoZWlyIGludHJpbnNpYyBhc3BlY3QgcmF0aW8uIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0KVxcbiovXFxuXFxuaW1nLFxcbnZpZGVvIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLypcXG5FbnN1cmUgdGhlIGRlZmF1bHQgYnJvd3NlciBiZWhhdmlvciBvZiB0aGUgYGhpZGRlbmAgYXR0cmlidXRlLlxcbiovXFxuXFxuW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCIsbnVsbF0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuc3JjLWNvbXBvbmVudHMtTWFpbi1zaWRlQmFyTGVmdC1zaWRlQmFyTGVmdC1tb2R1bGVfX3NwYWNpbmdTaWRlQmFyLS1rcGlxMyB7XFxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDZyZW0pO1xcbn1cXG5cXG4uc3JjLWNvbXBvbmVudHMtTWFpbi1zaWRlQmFyTGVmdC1zaWRlQmFyTGVmdC1tb2R1bGVfX3Njcm9sbFNpZGVCYXItLXB6Vm1wOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwMiwgMTAxLCAxMDEsIDAuNTk2KTtcXG4gIHdpZHRoOiA4cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4uc3JjLWNvbXBvbmVudHMtTWFpbi1zaWRlQmFyTGVmdC1zaWRlQmFyTGVmdC1tb2R1bGVfX3Njcm9sbFNpZGVCYXItLXB6Vm1wOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xcbiAgd2lkdGg6IDkwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL01haW4vc2lkZUJhckxlZnQvc2lkZUJhckxlZnQubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSx5QkFBQTtBQUNKOztBQUVJO0VBQ0ksNENBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUFDUjtBQUNJO0VBQ0kseUJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUFDUlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuc3BhY2luZ1NpZGVCYXJ7XFxyXFxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNnJlbSk7XFxyXFxufVxcclxcbi5zY3JvbGxTaWRlQmFye1xcclxcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhcntcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTAyLCAxMDEsIDEwMSwgMC41OTYpO1xcclxcbiAgICAgICAgd2lkdGg6IDhweDtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWJ7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMwLCAyMzAsIDIzMCk7XFxyXFxuICAgICAgICB3aWR0aDo5MCUgO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJzcGFjaW5nU2lkZUJhclwiOiBcInNyYy1jb21wb25lbnRzLU1haW4tc2lkZUJhckxlZnQtc2lkZUJhckxlZnQtbW9kdWxlX19zcGFjaW5nU2lkZUJhci0ta3BpcTNcIixcblx0XCJzY3JvbGxTaWRlQmFyXCI6IFwic3JjLWNvbXBvbmVudHMtTWFpbi1zaWRlQmFyTGVmdC1zaWRlQmFyTGVmdC1tb2R1bGVfX3Njcm9sbFNpZGVCYXItLXB6Vm1wXCJcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RhaWx3aW5kLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi90YWlsd2luZC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zaWRlQmFyTGVmdC5tb2R1bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zaWRlQmFyTGVmdC5tb2R1bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBOZXcsIFNldEF0dCwgRXZlbnR9IGZyb20gXCIuL3Rvb2xcIjtcclxuXHJcbmNsYXNzIEJhc2VJbnB1dHtcclxuICAgIGNvbnN0cnVjdG9yKHR5cGUsIG5hbWUsIGlkKXtcclxuICAgICAgICB0aGlzLmlucHV0ID0gTmV3KCdpbnB1dCcpXHJcbiAgICAgICAgdGhpcy5ldmVudCA9IEV2ZW50XHJcbiAgICAgICAgU2V0QXR0KHRoaXMuaW5wdXQsICd0eXBlJywgdHlwZSlcclxuICAgICAgICBTZXRBdHQodGhpcy5pbnB1dCwgJ25hbWUnLCBuYW1lKVxyXG4gICAgICAgIFNldEF0dCh0aGlzLmlucHV0LCAnaWQnLCBpZClcclxuICAgIH1cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlucHV0XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIEJhc2VMYWJlbHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHRpdGxlKXtcclxuICAgICAgICB0aGlzLmxhYmVsID0gTmV3KCdsYWJlbCcpXHJcbiAgICAgICAgdGhpcy5sYWJlbC50ZXh0Q29udGVudCA9IHRpdGxlXHJcbiAgICAgICAgU2V0QXR0KHRoaXMubGFiZWwsICdmb3InLCBuYW1lKVxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGFiZWxcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgQmFzZUJ1dHRvbntcclxuICAgIGNvbnN0cnVjdG9yKHRleHQpe1xyXG4gICAgICAgIHRoaXMuYnV0dG9uID0gTmV3KCdidXR0b24nKVxyXG4gICAgICAgIHRoaXMuYnV0dG9uLnRleHRDb250ZW50ID0gdGV4dFxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYnV0dG9uXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgICBCYXNlSW5wdXQsXHJcbiAgICBCYXNlTGFiZWwsXHJcbiAgICBCYXNlQnV0dG9uXHJcbn0iLCJjb25zdCBFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvci5iaW5kKGRvY3VtZW50KVxyXG5jb25zdCBFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwuYmluZChkb2N1bWVudClcclxuZnVuY3Rpb24gdGFpbHdpbmRBZGQoYXJyYXlTdHlsZSwgcG9pbnQpe1xyXG4gICAgcG9pbnQuY2xhc3NMaXN0LmFkZCguLi5hcnJheVN0eWxlKVxyXG59XHJcbmZ1bmN0aW9uIHRhaWx3aW5kUmVtb3ZlKGFycmF5U3R5bGUsIHBvaW50KXtcclxuICAgIHBvaW50LmNsYXNzTGlzdC5yZW1vdmUoLi4uYXJyYXlTdHlsZSlcclxufVxyXG5mdW5jdGlvbiB0YWlsd2luZFRvZ2dsZShhcnJheVN0eWxlLCBwb2ludCl7XHJcbiAgICBwb2ludC5jbGFzc0xpc3QudG9nZ2xlKC4uLmFycmF5U3R5bGUpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIE5ldyhzdHJpbmcpe1xyXG4gICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHJpbmcpXHJcbn1cclxuZnVuY3Rpb24gQWRkQ2hpbGQocGFyZW50Tm9kZSwgY2hpbGROb2RlKXtcclxuICAgIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoY2hpbGROb2RlKVxyXG59XHJcbmZ1bmN0aW9uIEV2ZW50KHN0cmluZywgcG9pbnQsIGNhbGxiYWNrKXtcclxuICAgIHBvaW50LmFkZEV2ZW50TGlzdGVuZXIoc3RyaW5nLCBjYWxsYmFjaylcclxufVxyXG5mdW5jdGlvbiBSZW1vdmVFdmVudChzdHJpbmcsIHBvaW50LCBjYWxsYmFjayl7XHJcbiAgICBwb2ludC5yZW1vdmVFdmVudExpc3RlbmVyKHN0cmluZyxjYWxsYmFjaylcclxufVxyXG5mdW5jdGlvbiBTZXRBdHQobm9kZSwgbmFtZUF0dHJpYnVlLCB2YWx1ZSl7XHJcbiAgICBub2RlLnNldEF0dHJpYnV0ZShuYW1lQXR0cmlidWUsIHZhbHVlKVxyXG59XHJcbmV4cG9ydCB7XHJcbiAgICB0YWlsd2luZEFkZCxcclxuICAgIHRhaWx3aW5kUmVtb3ZlLFxyXG4gICAgdGFpbHdpbmRUb2dnbGUsXHJcbiAgICBFbGVtZW50LFxyXG4gICAgRWxlbWVudHMsXHJcbiAgICBOZXcsXHJcbiAgICBBZGRDaGlsZCxcclxuICAgIEV2ZW50LFxyXG4gICAgU2V0QXR0LFxyXG4gICAgUmVtb3ZlRXZlbnRcclxufSIsImltcG9ydCBNYWluIGZyb20gXCIuL2NvbXBvbmVudHMvTWFpbi9tYWluXCI7XHJcbmltcG9ydCB7IEFkZENoaWxkLCBOZXcsIHRhaWx3aW5kQWRkIH0gZnJvbSBcIi4vSmF2YXNjcmlwdC90b29sXCI7XHJcbmltcG9ydCBTaWduSW5BbmRTaWduVXAgZnJvbSBcIi4vY29tcG9uZW50cy9TaWduSW4mU2lnblVwL1NpZ25JbkFuZFNpZ25VcFwiO1xyXG5cclxuY2xhc3MgQXBwIHtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5ib3ggPSBOZXcoJ2RpdicpXHJcbiAgICAgICAgdGhpcy5zaWduSW5fU2lnblVwX2JveCA9IG5ldyBTaWduSW5BbmRTaWduVXAoKVxyXG4gICAgICAgIHRoaXMubWFpbkFwcCA9IG5ldyBNYWluKClcclxuXHJcbiAgICAgICAgdGhpcy5ib3hTdHlsZSA9IFsndy1mdWxsJywgJ2gtc2NyZWVuJ11cclxuXHJcbiAgICAgICAgdGFpbHdpbmRBZGQodGhpcy5ib3hTdHlsZSwgdGhpcy5ib3gpXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBBZGRDaGlsZCh0aGlzLmJveCwgdGhpcy5zaWduSW5fU2lnblVwX2JveC5yZW5kZXIoKSlcclxuICAgICAgICByZXR1cm4gdGhpcy5ib3hcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwXHJcbiIsImltcG9ydCB7IEJhc2VJbnB1dCwgQmFzZUxhYmVsIH0gZnJvbSBcIi4uLy4uLy4uLy4uL0phdmFzY3JpcHQvYmFzZVwiO1xyXG5pbXBvcnQgeyBBZGRDaGlsZCwgTmV3LCBTZXRBdHQsIHRhaWx3aW5kQWRkIH0gZnJvbSBcIi4uLy4uLy4uLy4uL0phdmFzY3JpcHQvdG9vbFwiO1xyXG5cclxuY2xhc3MgU2VhcmNoQmFyIHtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5ib3ggPSBOZXcoJ2RpdicpXHJcbiAgICAgICAgdGhpcy5TZWFyY2hCYXIgPSBuZXcgQmFzZUlucHV0KCd0ZXh0JywgJ3NlYXJjaEJhcicsICdzZWFyY2hCYXInKVxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICB0aGlzLmJveFN0eWxlID0gWydyZWxhdGl2ZScsICd3LTY0JywnbWF4LXctZnVsbCddXHJcbiAgICAgICAgdGhpcy5TZWFyY2hCYXJTdHlsZSA9IFsndy1mdWxsJywgJ2JnLXNsYXRlLTIwMCcsICd0ZXh0LXdoaXRlJywgJ3JvdW5kZWQtbGcnLCAncGwtNCcsICdoLTgnXVxyXG5cclxuICAgICAgICBTZXRBdHQodGhpcy5TZWFyY2hCYXIuaW5wdXQsICdwbGFjZWhvbGRlcicsICdTZWFyY2gnKVxyXG5cclxuICAgICAgICB0YWlsd2luZEFkZCh0aGlzLmJveFN0eWxlLCB0aGlzLmJveClcclxuICAgICAgICB0YWlsd2luZEFkZCh0aGlzLlNlYXJjaEJhclN0eWxlLCB0aGlzLlNlYXJjaEJhci5pbnB1dClcclxuICAgIH1cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIEFkZENoaWxkKHRoaXMuYm94LCB0aGlzLlNlYXJjaEJhci5yZW5kZXIoKSlcclxuICAgICAgICByZXR1cm4gdGhpcy5ib3hcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoQmFyIiwiaW1wb3J0IHsgQWRkQ2hpbGQsIE5ldywgU2V0QXR0LCB0YWlsd2luZEFkZCB9IGZyb20gXCIuLi8uLi8uLi9KYXZhc2NyaXB0L3Rvb2xcIjtcclxuaW1wb3J0IExvZ28gZnJvbSAnLi4vLi4vLi4vYXNzZXQvaW1hZ2UvTG9nby5wbmcnXHJcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSBcIi4vU2VhcmNoQmFyL3NlYXJjaEJhclwiO1xyXG5pbXBvcnQgTnVsbEF2YXRhciBmcm9tIFwiLi4vLi4vLi4vYXNzZXQvaW1hZ2UvTnVsbCBBdmF0YXIuanBnXCJcclxuXHJcbmNsYXNzIEhlYWRlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMuYm94ID0gTmV3KCdkaXYnKVxyXG4gICAgICAgIHRoaXMuaW1hZ2UgPSBOZXcoJ2ltZycpXHJcbiAgICAgICAgdGhpcy5jaGlsZEJveCA9IE5ldygnZGl2JylcclxuICAgICAgICB0aGlzLnNldHRpbmdCdXR0b24gPSBOZXcoJ2ltZycpXHJcbiAgICAgICAgdGhpcy5zZWFyY2hCYXIgPSBuZXcgU2VhcmNoQmFyKClcclxuXHJcbiAgICAgICAgU2V0QXR0KHRoaXMuc2V0dGluZ0J1dHRvbiwgJ3NyYycsIE51bGxBdmF0YXIpXHJcbiAgICAgICAgU2V0QXR0KHRoaXMuaW1hZ2UsICdzcmMnLCBMb2dvKVxyXG4gICAgICAgIEFkZENoaWxkKHRoaXMuY2hpbGRCb3gsIHRoaXMuc2VhcmNoQmFyLnJlbmRlcigpKVxyXG4gICAgICAgIEFkZENoaWxkKHRoaXMuY2hpbGRCb3gsIHRoaXMuc2V0dGluZ0J1dHRvbilcclxuXHJcbiAgICAgICAgdGhpcy5ib3hTdHlsZSA9IFsndy1mdWxsJywgJ2gtMjAnLCAnYm9yZGVyJywgJ2JvcmRlci1iLWdyYXktMjAwJywgJ2ZsZXgnLCAnZmxleC1yb3cnLCAnaXRlbXMtY2VudGVyJywgJ2p1c3RpZnktYmV0d2VlbicsICdmaXhlZCcsICdiZy13aGl0ZSddXHJcbiAgICAgICAgdGhpcy5pbWFnZVN0eWxlID0gWydoLTE0JywgJ21sLTQnXVxyXG4gICAgICAgIHRoaXMuc2V0dGluZ0J1dHRvblN0eWxlID0gWyd3LTEyJywgJ2gtMTInLCAnYm9yZGVyLTInLCAnYm9yZGVyLWluZGlnby01MDAvMTAwJywgJ3JvdW5kZWQnLCAnbXgtNCddXHJcbiAgICAgICAgdGhpcy5jaGlsZEJveFN0eWxlID0gWydmbGV4JywgJ2ZsZXgtcm93JywgJ2l0ZW1zLWNlbnRlciddXHJcblxyXG4gICAgICAgIHRhaWx3aW5kQWRkKHRoaXMuYm94U3R5bGUsIHRoaXMuYm94KVxyXG4gICAgICAgIHRhaWx3aW5kQWRkKHRoaXMuaW1hZ2VTdHlsZSwgdGhpcy5pbWFnZSlcclxuICAgICAgICB0YWlsd2luZEFkZCh0aGlzLnNldHRpbmdCdXR0b25TdHlsZSwgdGhpcy5zZXR0aW5nQnV0dG9uKVxyXG4gICAgICAgIHRhaWx3aW5kQWRkKHRoaXMuY2hpbGRCb3hTdHlsZSwgdGhpcy5jaGlsZEJveClcclxuICAgIH1cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIEFkZENoaWxkKHRoaXMuYm94LCB0aGlzLmltYWdlKVxyXG4gICAgICAgIEFkZENoaWxkKHRoaXMuYm94LCB0aGlzLmNoaWxkQm94KVxyXG4gICAgICAgIHJldHVybiB0aGlzLmJveFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXIiLCJpbXBvcnQgeyBBZGRDaGlsZCwgTmV3LCB0YWlsd2luZEFkZCB9IGZyb20gXCIuLi8uLi9KYXZhc2NyaXB0L3Rvb2xcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9oZWFkZXIvaGVhZGVyXCI7XHJcbmltcG9ydCBNYWluQ29udGVudCBmcm9tIFwiLi9tYWluQ29udGVudC9tYWluQ29udGVudFwiO1xyXG5pbXBvcnQgU2lkZUJhckxlZnQgZnJvbSBcIi4vc2lkZUJhckxlZnQvc2lkZUJhckxlZnRcIjtcclxuaW1wb3J0IFNpZGVCYXJSaWdodCBmcm9tIFwiLi9zaWRlQmFyUmlnaHQvc2lkZUJhclJpZ2h0XCI7XHJcblxyXG5jbGFzcyBNYWluIHtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5ib3ggPSBOZXcoJ2RpdicpXHJcbiAgICAgICAgdGhpcy5oZWFkZXIgPSBuZXcgSGVhZGVyKCk7XHJcbiAgICAgICAgdGhpcy5zaWRlQmFyTGVmdCA9IG5ldyBTaWRlQmFyTGVmdCgpO1xyXG4gICAgICAgIHRoaXMuc2lkZUJhclJpZ2h0ID0gbmV3IFNpZGVCYXJSaWdodCgpO1xyXG4gICAgICAgIHRoaXMubWFpbkNvbnRlbnQgPSBuZXcgTWFpbkNvbnRlbnQoKTtcclxuXHJcbiAgICAgICAgdGhpcy5ib3hTdHlsZSA9IFsndy1mdWxsJywgJ2ZsZXgnLCAnZmxleC1yb3cnXVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRhaWx3aW5kQWRkKHRoaXMuYm94U3R5bGUsIHRoaXMuYm94KVxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgQWRkQ2hpbGQodGhpcy5ib3gsIHRoaXMuaGVhZGVyLnJlbmRlcigpKVxyXG4gICAgICAgIEFkZENoaWxkKHRoaXMuYm94LCB0aGlzLnNpZGVCYXJMZWZ0LnJlbmRlcigpKVxyXG4gICAgICAgIEFkZENoaWxkKHRoaXMuYm94LCB0aGlzLm1haW5Db250ZW50LnJlbmRlcigpKVxyXG4gICAgICAgIEFkZENoaWxkKHRoaXMuYm94LCB0aGlzLnNpZGVCYXJSaWdodC5yZW5kZXIoKSlcclxuICAgICAgICByZXR1cm4gdGhpcy5ib3hcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbiIsImltcG9ydCB7IEFkZENoaWxkLCBOZXcsIHRhaWx3aW5kQWRkIH0gZnJvbSBcIi4uLy4uLy4uL0phdmFzY3JpcHQvdG9vbFwiO1xyXG5cclxuY2xhc3MgTWFpbkNvbnRlbnQge1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLmJveCA9IE5ldygnZGl2JylcclxuICAgICAgICB0aGlzLmJveC50ZXh0Q29udGVudCA9ICdzc3MnXHJcbiAgICAgICAgdGhpcy5ib3hTdHlsZSA9IFsnZ3JvdycsICdzaHJpbmsnLCAnaC0xMjgnLCAnbXQtMjQnLCAnaW5saW5lLWJsb2NrJ11cclxuICAgICAgICB0YWlsd2luZEFkZCh0aGlzLmJveFN0eWxlLCB0aGlzLmJveClcclxuICAgIH1cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJveFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluQ29udGVudCIsImltcG9ydCB7IEFkZENoaWxkLCBFdmVudCwgTmV3LCBSZW1vdmVFdmVudCwgdGFpbHdpbmRBZGQsIHRhaWx3aW5kUmVtb3ZlIH0gZnJvbSBcIi4uLy4uLy4uLy4uL0phdmFzY3JpcHQvdG9vbFwiO1xyXG5cclxuY2xhc3MgQXZhdGFyIHtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5ib3ggPSBOZXcoJ2RpdicpXHJcbiAgICAgICAgdGhpcy5hdmF0YXIgPSBOZXcoJ2ltZycpXHJcbiAgICAgICAgdGhpcy50aXRsZSA9IE5ldygnZGl2JylcclxuICAgICAgICB0aGlzLmZpcnN0VGl0bGUgPSBOZXcoJ3AnKVxyXG4gICAgICAgIHRoaXMuc2Vjb25kVGl0bGUgPSBOZXcoJ3AnKVxyXG5cclxuICAgICAgICB0aGlzLmZpcnN0VGl0bGUudGV4dENvbnRlbnQgPSAnxJDDoG8gRHV5IEjGsG5nJ1xyXG4gICAgICAgIHRoaXMuc2Vjb25kVGl0bGUudGV4dENvbnRlbnQgPSAnZGFvZHV5aHVuZzAwMDBAZ21haWwuY29tJ1xyXG4gICAgICAgIHRoaXMuZmlyc3RUaXRsZS50aXRsZSA9IHRoaXMuZmlyc3RUaXRsZS50ZXh0Q29udGVudFxyXG4gICAgICAgIHRoaXMuc2Vjb25kVGl0bGUudGl0bGUgPSB0aGlzLnNlY29uZFRpdGxlLnRleHRDb250ZW50XHJcblxyXG4gICAgICAgIHRoaXMuYm94U3R5bGUgPSBbJ3ctZnVsbCcsICdoLTE2JywgJ3NoYWRvdy1bMF8xMHB4XzUwcHhfcmdiYSgyMzAsMjMwLDIzMCwwLjUpXScsICdyb3VuZGVkJyAsICdmbGV4JywgJ2ZsZXgtcm93JywgJ2l0ZW1zLWNlbnRlcicsICdjdXJzb3ItcG9pbnRlciddXHJcbiAgICAgICAgdGhpcy5hdmF0YXJTdHlsZSA9IFsndy0xMicsICdoLTEyJywgJ2JvcmRlcicsICdteC00JywgJ2dyb3ctMCcsICdzaHJpbmstMCddXHJcbiAgICAgICAgdGhpcy5maXJzdFRpdGxlU3R5bGUgPSBbJ2ZvbnQtc2VtaWJvbGQnLCAndy00MCcgLCAndHJ1bmNhdGUnLCAnaW5saW5lLWJsb2NrJ11cclxuICAgICAgICB0aGlzLnNlY29uZFRpdGxlU3R5bGUgPSBbJ3RleHQteHMnLCAndGV4dC1zbGF0ZS00MDAnLCAndy00MCcgLCAndHJ1bmNhdGUnLCAndHJhY2tpbmctd2lkZXN0J11cclxuICAgICAgICB0aGlzLnRpdGxlU3R5bGUgPSBbJ2dyb3cnXVxyXG5cclxuICAgICAgICB0YWlsd2luZEFkZCh0aGlzLmJveFN0eWxlLCB0aGlzLmJveClcclxuICAgICAgICB0YWlsd2luZEFkZCh0aGlzLmF2YXRhclN0eWxlLCB0aGlzLmF2YXRhcilcclxuICAgICAgICB0YWlsd2luZEFkZCh0aGlzLnRpdGxlU3R5bGUsdGhpcy50aXRsZSlcclxuICAgICAgICB0YWlsd2luZEFkZCh0aGlzLmZpcnN0VGl0bGVTdHlsZSwgdGhpcy5maXJzdFRpdGxlKVxyXG4gICAgICAgIHRhaWx3aW5kQWRkKHRoaXMuc2Vjb25kVGl0bGVTdHlsZSwgdGhpcy5zZWNvbmRUaXRsZSlcclxuXHJcbiAgICAgICAgRXZlbnQoJ21vdXNlZW50ZXInLCB0aGlzLmJveCwgdGhpcy5tb3VzZUVudGVySGFuZGxlLmJpbmQodGhpcykpXHJcbiAgICAgICAgRXZlbnQoJ21vdXNlbGVhdmUnLCB0aGlzLmJveCwgdGhpcy5tb3VzZU91dEhhbmRsZS5iaW5kKHRoaXMpKVxyXG4gICAgfVxyXG4gICAgbW91c2VFbnRlckhhbmRsZShlKXtcclxuICAgICAgICB0YWlsd2luZEFkZChbJ2JnLXNsYXRlLTMwMCddLCBlLnRhcmdldClcclxuICAgIH1cclxuICAgIG1vdXNlT3V0SGFuZGxlKGUpe1xyXG4gICAgICAgIHRhaWx3aW5kUmVtb3ZlKFsnYmctc2xhdGUtMzAwJ10sIGUudGFyZ2V0KVxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgQWRkQ2hpbGQodGhpcy5ib3gsIHRoaXMuYXZhdGFyKVxyXG4gICAgICAgIEFkZENoaWxkKHRoaXMudGl0bGUsIHRoaXMuZmlyc3RUaXRsZSlcclxuICAgICAgICBBZGRDaGlsZCh0aGlzLnRpdGxlLCB0aGlzLnNlY29uZFRpdGxlKVxyXG4gICAgICAgIEFkZENoaWxkKHRoaXMuYm94LCB0aGlzLnRpdGxlKVxyXG4gICAgICAgIHJldHVybiB0aGlzLmJveFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdmF0YXIiLCJpbXBvcnQgeyBBZGRDaGlsZCwgTmV3LCB0YWlsd2luZEFkZCB9IGZyb20gXCIuLi8uLi8uLi9KYXZhc2NyaXB0L3Rvb2xcIjtcclxuaW1wb3J0IEF2YXRhciBmcm9tIFwiLi9BdmF0YXIvYXZhdGFyXCI7XHJcbmltcG9ydCBUb29sQmFyIGZyb20gXCIuL3Rvb2xCYXIvdG9vbEJhclwiO1xyXG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vc2lkZUJhckxlZnQubW9kdWxlLnNjc3NcIlxyXG5jbGFzcyBTaWRlQmFyTGVmdCB7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMuYm94ID0gTmV3KCdkaXYnKVxyXG4gICAgICAgIHRoaXMuY29udGVudCA9IE5ldygnZGl2JylcclxuICAgICAgICB0aGlzLmF2YXRhciA9IG5ldyBBdmF0YXIoKVxyXG4gICAgICAgIHRoaXMudG9vbEJhciA9IG5ldyBUb29sQmFyKClcclxuICAgICAgICB0aGlzLmJveFN0eWxlID0gWydncm93LTAnLCdzaHJpbmstMCcsICdiYXNpcy03MicsJ2lubGluZS1ibG9jaycsICdtdC0yNCddXHJcbiAgICAgICAgdGhpcy5jb250ZW50U3R5bGUgPSBbJ3ctNzInLCAnZml4ZWQnLCAncGwtNCcsIFN0eWxlLnNwYWNpbmdTaWRlQmFyICwgJ292ZXJmbG93LXktYXV0bycsICd6LTEwJywgU3R5bGUuc2Nyb2xsU2lkZUJhcl1cclxuXHJcbiAgICAgICAgdGFpbHdpbmRBZGQodGhpcy5ib3hTdHlsZSwgdGhpcy5ib3gpXHJcbiAgICAgICAgdGFpbHdpbmRBZGQodGhpcy5jb250ZW50U3R5bGUsIHRoaXMuY29udGVudClcclxuICAgIH1cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIEFkZENoaWxkKHRoaXMuYm94LCB0aGlzLmNvbnRlbnQpXHJcbiAgICAgICAgQWRkQ2hpbGQodGhpcy5jb250ZW50LCB0aGlzLmF2YXRhci5yZW5kZXIoKSlcclxuICAgICAgICBBZGRDaGlsZCh0aGlzLmNvbnRlbnQsIHRoaXMudG9vbEJhci5yZW5kZXIoKSlcclxuICAgICAgICByZXR1cm4gdGhpcy5ib3hcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lkZUJhckxlZnQiLCJjb25zdCBib3hTdHlsZSA9IFsnZmxleCcsICdmbGV4LXJvdycsICdpdGVtcy1jZW50ZXInLCAncGwtMicsICd3LWZ1bGwnLCAnaC0xNiddXHJcbmNvbnN0IGljb25TdHlsZSA9IFsnbWwtNCcsJ3ctNicsICdoLTYnXVxyXG5jb25zdCB0aXRsZVN0eWxlID0gWydtbC02JywgJ3RleHQtYmFzZScsICdmb250LWJvbGQnLCAndGV4dC1zbGF0ZS02MDAnLCAndHJhY2tpbmctd2lkZSddXHJcblxyXG5leHBvcnQge2JveFN0eWxlLCBpY29uU3R5bGUsIHRpdGxlU3R5bGV9IiwiaW1wb3J0IHsgU2V0QXR0IH0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL0phdmFzY3JpcHQvdG9vbFwiO1xyXG5pbXBvcnQgUHJvZmlsZSBmcm9tIFwiLi4vcHJvZmlsZS9wcm9maWxlXCI7XHJcbmltcG9ydCBJY29uIGZyb20gJy4uLy4uLy4uLy4uLy4uL2Fzc2V0L2ltYWdlL3Bob3RvLnBuZyc7XHJcblxyXG5jbGFzcyBQaG90b3MgZXh0ZW5kcyBQcm9maWxle1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpXHJcbiAgICAgICAgU2V0QXR0KHRoaXMuaWNvbiwgJ3NyYycsIEljb24pXHJcbiAgICAgICAgdGhpcy50aXRsZS50ZXh0Q29udGVudCA9ICdQaG90b3MnXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBob3RvcyIsImltcG9ydCB7IFNldEF0dCB9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi9KYXZhc2NyaXB0L3Rvb2xcIjtcclxuaW1wb3J0IFByb2ZpbGUgZnJvbSBcIi4uL3Byb2ZpbGUvcHJvZmlsZVwiO1xyXG5pbXBvcnQgSWNvbiBmcm9tICcuLi8uLi8uLi8uLi8uLi9hc3NldC9pbWFnZS9mcmllbmRzLnBuZyc7XHJcblxyXG5jbGFzcyBGcmllbmRzIGV4dGVuZHMgUHJvZmlsZXtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoKVxyXG4gICAgICAgIFNldEF0dCh0aGlzLmljb24sICdzcmMnLCBJY29uKVxyXG4gICAgICAgIHRoaXMudGl0bGUudGV4dENvbnRlbnQgPSAnRnJpZW5kcydcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRnJpZW5kcyIsImltcG9ydCB7IFNldEF0dCB9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi9KYXZhc2NyaXB0L3Rvb2xcIjtcclxuaW1wb3J0IFByb2ZpbGUgZnJvbSBcIi4uL3Byb2ZpbGUvcHJvZmlsZVwiO1xyXG5pbXBvcnQgSWNvbiBmcm9tICcuLi8uLi8uLi8uLi8uLi9hc3NldC9pbWFnZS9ncm91cC5wbmcnO1xyXG5cclxuY2xhc3MgR3JvdXBzIGV4dGVuZHMgUHJvZmlsZXtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoKVxyXG4gICAgICAgIFNldEF0dCh0aGlzLmljb24sICdzcmMnLCBJY29uKVxyXG4gICAgICAgIHRoaXMudGl0bGUudGV4dENvbnRlbnQgPSAnR3JvdXBzJ1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHcm91cHMiLCJpbXBvcnQgeyBBZGRDaGlsZCwgU2V0QXR0LCBOZXcsIHRhaWx3aW5kQWRkIH0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL0phdmFzY3JpcHQvdG9vbFwiXHJcbmltcG9ydCBJY29uIGZyb20gJy4uLy4uLy4uLy4uLy4uL2Fzc2V0L2ltYWdlL2FjY291bnQucG5nJ1xyXG5pbXBvcnQge2JveFN0eWxlLCBpY29uU3R5bGUsIHRpdGxlU3R5bGV9IGZyb20gJy4uL0J1dHRvblN0eWxlJ1xyXG5jbGFzcyBQcm9maWxle1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLmJveCA9IE5ldygnZGl2JylcclxuICAgICAgICB0aGlzLmljb24gPSBOZXcoJ2ltZycpXHJcbiAgICAgICAgdGhpcy50aXRsZSA9IE5ldygncCcpXHJcblxyXG4gICAgICAgIFNldEF0dCh0aGlzLmljb24sICdzcmMnLCBJY29uKVxyXG4gICAgICAgIHRoaXMudGl0bGUudGV4dENvbnRlbnQgPSAnUHJvZmlsZSdcclxuXHJcbiAgICAgICAgdGhpcy5ib3hTdHlsZSA9IGJveFN0eWxlXHJcbiAgICAgICAgdGhpcy5pY29uU3R5bGUgPSBpY29uU3R5bGVcclxuICAgICAgICB0aGlzLnRpdGxlU3R5bGUgPSB0aXRsZVN0eWxlXHJcbiAgICAgICAgdGFpbHdpbmRBZGQodGhpcy5ib3hTdHlsZSwgdGhpcy5ib3gpXHJcbiAgICAgICAgdGFpbHdpbmRBZGQodGhpcy5pY29uU3R5bGUsIHRoaXMuaWNvbilcclxuICAgICAgICB0YWlsd2luZEFkZCh0aGlzLnRpdGxlU3R5bGUsIHRoaXMudGl0bGUpXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBBZGRDaGlsZCh0aGlzLmJveCwgdGhpcy5pY29uKVxyXG4gICAgICAgIEFkZENoaWxkKHRoaXMuYm94LCB0aGlzLnRpdGxlKVxyXG4gICAgICAgIHJldHVybiB0aGlzLmJveFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlIiwiaW1wb3J0IHsgU2V0QXR0IH0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL0phdmFzY3JpcHQvdG9vbFwiO1xyXG5pbXBvcnQgUHJvZmlsZSBmcm9tIFwiLi4vcHJvZmlsZS9wcm9maWxlXCI7XHJcbmltcG9ydCBJY29uIGZyb20gJy4uLy4uLy4uLy4uLy4uL2Fzc2V0L2ltYWdlL3NhdmUucG5nJztcclxuXHJcbmNsYXNzIFNhdmUgZXh0ZW5kcyBQcm9maWxle1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpXHJcbiAgICAgICAgU2V0QXR0KHRoaXMuaWNvbiwgJ3NyYycsIEljb24pXHJcbiAgICAgICAgdGhpcy50aXRsZS50ZXh0Q29udGVudCA9ICdTYXZlZCdcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2F2ZSIsImltcG9ydCB7IEFkZENoaWxkLCBOZXcsIHRhaWx3aW5kQWRkIH0gZnJvbSBcIi4uLy4uLy4uLy4uL0phdmFzY3JpcHQvdG9vbFwiO1xyXG5pbXBvcnQgU2F2ZSBmcm9tIFwiLi9zYXZlL3NhdmVcIjtcclxuaW1wb3J0IEZyaWVuZHMgZnJvbSBcIi4vZnJpZW5kcy9mcmllbmRzXCI7XHJcbmltcG9ydCBHcm91cHMgZnJvbSBcIi4vZ3JvdXBzL2dyb3Vwc1wiO1xyXG5pbXBvcnQgUGhvdG9zIGZyb20gXCIuL1Bob3Rvcy9waG90b3NcIjtcclxuaW1wb3J0IFByb2ZpbGUgZnJvbSBcIi4vcHJvZmlsZS9wcm9maWxlXCI7XHJcblxyXG5jbGFzcyBUb29sQmFyIHtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5ib3ggPSBOZXcoJ2RpdicpXHJcbiAgICAgICAgdGhpcy5wcm9maWxlID0gbmV3IFByb2ZpbGUoKVxyXG4gICAgICAgIHRoaXMuZnJpZW5kcyA9IG5ldyBGcmllbmRzKClcclxuICAgICAgICB0aGlzLnBob3RvcyA9IG5ldyBQaG90b3MoKVxyXG4gICAgICAgIHRoaXMuZ3JvdXBzID0gbmV3IEdyb3VwcygpXHJcbiAgICAgICAgdGhpcy5zYXZlZCA9IG5ldyBTYXZlKClcclxuICAgICAgICB0aGlzLmJveFN0eWxlID0gWydmbGV4JywgJ2ZsZXgtY29sJywgJ3ctZnVsbCcsICdtdC02JywgJ3NoYWRvdy1bMF8wXzIwcHhfcmdiYSgyMzAsMjMwLDIzMCwwLjUpXScsICdyb3VuZGVkLWxnJ11cclxuXHJcbiAgICAgICAgdGFpbHdpbmRBZGQodGhpcy5ib3hTdHlsZSwgdGhpcy5ib3gpXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBBZGRDaGlsZCh0aGlzLmJveCwgdGhpcy5wcm9maWxlLnJlbmRlcigpKVxyXG4gICAgICAgIEFkZENoaWxkKHRoaXMuYm94LCB0aGlzLmZyaWVuZHMucmVuZGVyKCkpXHJcbiAgICAgICAgQWRkQ2hpbGQodGhpcy5ib3gsIHRoaXMucGhvdG9zLnJlbmRlcigpKVxyXG4gICAgICAgIEFkZENoaWxkKHRoaXMuYm94LCB0aGlzLmdyb3Vwcy5yZW5kZXIoKSlcclxuICAgICAgICBBZGRDaGlsZCh0aGlzLmJveCwgdGhpcy5zYXZlZC5yZW5kZXIoKSlcclxuICAgICAgICByZXR1cm4gdGhpcy5ib3hcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9vbEJhciIsImltcG9ydCB7IEFkZENoaWxkLCBOZXcsIHRhaWx3aW5kQWRkIH0gZnJvbSBcIi4uLy4uLy4uL0phdmFzY3JpcHQvdG9vbFwiO1xyXG5cclxuY2xhc3MgU2lkZUJhclJpZ2h0IHtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5ib3ggPSBOZXcoJ2RpdicpXHJcbiAgICAgICAgdGhpcy5jb250ZW50ID0gTmV3KCdkaXYnKVxyXG5cclxuICAgICAgICB0aGlzLmJveFN0eWxlID0gWydncm93LTAnLCdzaHJpbmstMCcsICdiYXNpcy03MicsICdpbmxpbmUtYmxvY2snLCAnbXQtMjQnXVxyXG4gICAgICAgIHRoaXMuY29udGVudFN0eWxlID0gWyd3LTcyJywgJ3ByLTQnLCAnZml4ZWQnLCAncmlnaHQtMCcgLCd6LTEwJ11cclxuXHJcbiAgICAgICAgdGFpbHdpbmRBZGQodGhpcy5ib3hTdHlsZSwgdGhpcy5ib3gpXHJcbiAgICAgICAgdGFpbHdpbmRBZGQodGhpcy5jb250ZW50U3R5bGUsIHRoaXMuY29udGVudClcclxuICAgIH1cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIEFkZENoaWxkKHRoaXMuYm94LCB0aGlzLmNvbnRlbnQpXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYm94XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGVCYXJSaWdodCIsImltcG9ydHtCYXNlSW5wdXQgLCBCYXNlTGFiZWwsIEJhc2VCdXR0b259IGZyb20gXCIuLi8uLi8uLi9KYXZhc2NyaXB0L2Jhc2VcIlxyXG5pbXBvcnQgeyBOZXcgLCBBZGRDaGlsZH0gZnJvbSBcIi4uLy4uLy4uL0phdmFzY3JpcHQvdG9vbFwiXHJcblxyXG5jbGFzcyBTaWduVXAge1xyXG4gICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgICB0aGlzLmJveCA9IE5ldygnZGl2Jyk7XHJcbiAgICAgICAgICB0aGlzLmZpc3RsaW5lID0gTmV3KCdoMScpO1xyXG4gICAgICAgICAgdGhpcy5maXN0bGluZS50ZXh0Q29udGVudCA9IFwiUkVHSVNURVIgTk9XXCI7XHJcbiAgICAgICAgICB0aGlzLmZpcnN0dGl0bGUgPSBOZXcoJ3AnKTtcclxuICAgICAgICAgIHRoaXMuZmlyc3R0aXRsZS50ZXh0Q29udGVudCA9IFwiU0lHTiBVUCBGT1IgRlJFRVwiO1xyXG4gICAgICAgICAgdGhpcy50aGlyZGxpbmUgPSBOZXcoJ3AnKTtcclxuICAgICAgICAgIHRoaXMudGhpcmRsaW5lLnRleHRDb250ZW50ID1cIkFscmVhZHkgaGF2ZSBhbiBhY2NvdW50P1wiO1xyXG5cclxuICAgICAgICAgIHRoaXMubGluayA9IE5ldygnYScpO1xyXG4gICAgICAgICAgdGhpcy5saW5rLnRleHRDb250ZW50ID0gXCJTSUdOIElOIFwiO1xyXG5cclxuICAgICAgICAgIHRoaXMudXNlcm5hbWVMYWJlbCA9IG5ldyBCYXNlTGFiZWwoXCJ1c2VybmFtZVwiLFwiVXNlck5hbWVcIik7XHJcbiAgICAgICAgICB0aGlzLmVtYWlsTGFiZWwgPSBuZXcgQmFzZUxhYmVsKFwiZW1haWxcIixcIkVtYWlsXCIpO1xyXG4gICAgICAgICAgdGhpcy5wYXNzd29yZExhYmVsID0gbmV3IEJhc2VMYWJlbChcInBhc3N3b3JkXCIsXCJQYXNzd29yZFwiKTtcclxuXHJcbiAgICAgICAgICB0aGlzLnVzZXJuYW1lSW5wdXQgPSBuZXcgQmFzZUlucHV0KFwidGV4dFwiLFwidXNlcm5hbWVcIixcInVzZXJuYW1lXCIpO1xyXG4gICAgICAgICAgdGhpcy5lbWFpbElucHV0ID0gbmV3IEJhc2VJbnB1dChcInRleHRcIixcImVtYWlsXCIsXCJlbWFpbFwiKTtcclxuICAgICAgICAgIHRoaXMucGFzc3dvcmRJbnB1dCA9IG5ldyBCYXNlSW5wdXQoXCJ0ZXh0XCIsXCJwYXNzd29yZFwiLFwicGFzc3dvcmRcIik7ICAgICBcclxuXHJcbiAgICAgICAgICB0aGlzLmJ0blNpZ25VcCA9IG5ldyBCYXNlQnV0dG9uKFwiU0lHTiBVUFwiKTtcclxuXHJcbiAgICAgICAgICBBZGRDaGlsZCh0aGlzLnRoaXJkbGluZSAsIHRoaXMubGluayk7XHJcbiAgICAgICAgICBcclxuICAgICAgfVxyXG4gICAgICByZW5kZXIoKXtcclxuICAgICAgICAgIEFkZENoaWxkKHRoaXMuYm94LCB0aGlzLmZpc3RsaW5lKTtcclxuICAgICAgICAgIEFkZENoaWxkKHRoaXMuYm94LCB0aGlzLmZpcnN0dGl0bGUpO1xyXG4gICAgICAgICAgQWRkQ2hpbGQodGhpcy5ib3gsIHRoaXMudGhpcmRsaW5lKTtcclxuICAgICAgICAgIEFkZENoaWxkKHRoaXMuYm94LCB0aGlzLmxpbmspO1xyXG4gICAgICAgICAgQWRkQ2hpbGQodGhpcy5ib3gsIHRoaXMudXNlcm5hbWVMYWJlbC5yZW5kZXIoKSk7XHJcbiAgICAgICAgICBBZGRDaGlsZCh0aGlzLmJveCwgdGhpcy5lbWFpbExhYmVsLnJlbmRlcigpKTtcclxuICAgICAgICAgIEFkZENoaWxkKHRoaXMuYm94LCB0aGlzLnBhc3N3b3JkTGFiZWwucmVuZGVyKCkpO1xyXG4gICAgICAgICAgQWRkQ2hpbGQodGhpcy5ib3gsIHRoaXMudXNlcm5hbWVJbnB1dC5yZW5kZXIoKSk7XHJcbiAgICAgICAgICBBZGRDaGlsZCh0aGlzLmJveCwgdGhpcy5lbWFpbElucHV0LnJlbmRlcigpKTtcclxuICAgICAgICAgIEFkZENoaWxkKHRoaXMuYm94LCB0aGlzLnBhc3N3b3JkSW5wdXQucmVuZGVyKCkpO1xyXG4gICAgICAgICAgQWRkQ2hpbGQodGhpcy5ib3gsIHRoaXMuYnRuU2lnblVwLnJlbmRlcigpKTtcclxuXHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5ib3hcclxuICAgICAgfX1cclxuICAgICAgZXhwb3J0IGRlZmF1bHQgU2lnblVwIiwiaW1wb3J0IHsgQWRkQ2hpbGQsIE5ldywgU2V0QXR0LCB0YWlsd2luZEFkZCB9IGZyb20gXCIuLi8uLi9KYXZhc2NyaXB0L3Rvb2xcIjtcclxuaW1wb3J0IFNpZ25VcCBmcm9tIFwiLi9TaWduIFVQL1NpZ25VcFwiO1xyXG5cclxuXHJcbmNsYXNzIFNpZ25JbkFuZFNpZ25VcCB7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMuYm94ID0gTmV3KCdkaXYnKVxyXG4gICAgICAgIHRoaXMuY2hpbGQgPSBOZXcoJ2RpdicpXHJcbiAgICAgICAgdGhpcy5zaWduVXAgPSBuZXcgU2lnblVwKClcclxuICAgICAgICB0aGlzLmJveFN0eWxlID0gWyd3LTQvNScsICdoLTk2JywgJ2JvcmRlcicsICdib3JkZXItYmxhY2snLCAncmVsYXRpdmUnLCAnaW5zZXQtMS8yJywgJy10cmFuc2xhdGUteS0xLzInLCAnLXRyYW5zbGF0ZS14LTEvMiddIFxyXG4gICAgICAgIHRoaXMuY2hpbGRTdHlsZSA9IFsncHgtNCcsICdweS0yJ11cclxuXHJcbiAgICAgICAgdGFpbHdpbmRBZGQodGhpcy5ib3hTdHlsZSwgdGhpcy5ib3gpXHJcbiAgICAgICAgdGFpbHdpbmRBZGQodGhpcy5jaGlsZFN0eWxlLCB0aGlzLmNoaWxkKVxyXG4gICAgICAgIEFkZENoaWxkKHRoaXMuY2hpbGQsIHRoaXMuc2lnblVwLnJlbmRlcigpKVxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgQWRkQ2hpbGQodGhpcy5ib3gsIHRoaXMuY2hpbGQpXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYm94XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWduSW5BbmRTaWduVXAiLCJpbXBvcnQgJ3RhaWx3aW5kY3NzL3RhaWx3aW5kLmNzcydcclxuaW1wb3J0IHsgQWRkQ2hpbGQsIEVsZW1lbnQgfSBmcm9tICcuL0phdmFzY3JpcHQvdG9vbCdcclxuaW1wb3J0IEFwcCBmcm9tICcuL2FwcCdcclxuXHJcbmxldCBjdXJyZW50QXBwID0gbmV3IEFwcCgpO1xyXG4oKCk9PntcclxuICAgIEFkZENoaWxkKEVsZW1lbnQoJyNyb290JyksIGN1cnJlbnRBcHAucmVuZGVyKCkpXHJcbn0pKClcclxuZXhwb3J0IGRlZmF1bHQgY3VycmVudEFwcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==