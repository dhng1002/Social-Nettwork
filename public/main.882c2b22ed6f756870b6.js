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
___CSS_LOADER_EXPORT___.push([module.id, "/*\n! tailwindcss v3.0.2 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */ /* 3 */\n  tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr[title] {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse;  /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;  /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/*\nEnsure the default browser behavior of the `hidden` attribute.\n*/\n\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  --tw-border-opacity: 1;\n  border-color: rgb(229 231 235 / var(--tw-border-opacity));\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n}\n\n.fixed {\n  position: fixed;\n}\n\n.relative {\n  position: relative;\n}\n\n.inset-1\\/2 {\n  top: 50%;\n  right: 50%;\n  bottom: 50%;\n  left: 50%;\n}\n\n.right-0 {\n  right: 0px;\n}\n\n.z-10 {\n  z-index: 10;\n}\n\n.mx-4 {\n  margin-left: 1rem;\n  margin-right: 1rem;\n}\n\n.ml-4 {\n  margin-left: 1rem;\n}\n\n.mt-24 {\n  margin-top: 6rem;\n}\n\n.ml-6 {\n  margin-left: 1.5rem;\n}\n\n.mt-6 {\n  margin-top: 1.5rem;\n}\n\n.inline-block {\n  display: inline-block;\n}\n\n.flex {\n  display: flex;\n}\n\n.h-screen {\n  height: 100vh;\n}\n\n.h-96 {\n  height: 24rem;\n}\n\n.h-20 {\n  height: 5rem;\n}\n\n.h-14 {\n  height: 3.5rem;\n}\n\n.h-12 {\n  height: 3rem;\n}\n\n.h-128 {\n  height: 32rem;\n}\n\n.h-8 {\n  height: 2rem;\n}\n\n.h-16 {\n  height: 4rem;\n}\n\n.h-6 {\n  height: 1.5rem;\n}\n\n.w-full {\n  width: 100%;\n}\n\n.w-4\\/5 {\n  width: 80%;\n}\n\n.w-12 {\n  width: 3rem;\n}\n\n.w-72 {\n  width: 18rem;\n}\n\n.w-64 {\n  width: 16rem;\n}\n\n.w-40 {\n  width: 10rem;\n}\n\n.w-6 {\n  width: 1.5rem;\n}\n\n.max-w-full {\n  max-width: 100%;\n}\n\n.shrink {\n  flex-shrink: 1;\n}\n\n.shrink-0 {\n  flex-shrink: 0;\n}\n\n.grow {\n  flex-grow: 1;\n}\n\n.grow-0 {\n  flex-grow: 0;\n}\n\n.basis-72 {\n  flex-basis: 18rem;\n}\n\n.translate-x-1\\/2 {\n  --tw-translate-x: 50%;\n  transform: var(--tw-transform);\n}\n\n.translate-y-1\\/2 {\n  --tw-translate-y: 50%;\n  transform: var(--tw-transform);\n}\n\n.-translate-y-1\\/2 {\n  --tw-translate-y: -50%;\n  transform: var(--tw-transform);\n}\n\n.-translate-x-1\\/2 {\n  --tw-translate-x: -50%;\n  transform: var(--tw-transform);\n}\n\n.cursor-pointer {\n  cursor: pointer;\n}\n\n.flex-row {\n  flex-direction: row;\n}\n\n.flex-col {\n  flex-direction: column;\n}\n\n.items-center {\n  align-items: center;\n}\n\n.justify-between {\n  justify-content: space-between;\n}\n\n.overflow-y-auto {\n  overflow-y: auto;\n}\n\n.truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.rounded {\n  border-radius: 0.25rem;\n}\n\n.rounded-lg {\n  border-radius: 0.5rem;\n}\n\n.border {\n  border-width: 1px;\n}\n\n.border-2 {\n  border-width: 2px;\n}\n\n.border-indigo-500\\/100 {\n  border-color: rgb(99 102 241 / 1);\n}\n\n.border-black {\n  --tw-border-opacity: 1;\n  border-color: rgb(0 0 0 / var(--tw-border-opacity));\n}\n\n.border-b-gray-200 {\n  --tw-border-opacity: 1;\n  border-bottom-color: rgb(229 231 235 / var(--tw-border-opacity));\n}\n\n.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\n\n.bg-slate-200 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(226 232 240 / var(--tw-bg-opacity));\n}\n\n.bg-slate-300 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(203 213 225 / var(--tw-bg-opacity));\n}\n\n.pl-4 {\n  padding-left: 1rem;\n}\n\n.pr-4 {\n  padding-right: 1rem;\n}\n\n.pl-2 {\n  padding-left: 0.5rem;\n}\n\n.text-xs {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n\n.text-base {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n\n.font-semibold {\n  font-weight: 600;\n}\n\n.font-bold {\n  font-weight: 700;\n}\n\n.tracking-widest {\n  letter-spacing: 0.1em;\n}\n\n.tracking-wide {\n  letter-spacing: 0.025em;\n}\n\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n\n.text-slate-400 {\n  --tw-text-opacity: 1;\n  color: rgb(148 163 184 / var(--tw-text-opacity));\n}\n\n.text-slate-600 {\n  --tw-text-opacity: 1;\n  color: rgb(71 85 105 / var(--tw-text-opacity));\n}\n\n.shadow-\\[0_10px_50px_rgba\\(230\\2c 230\\2c 230\\2c 0\\.5\\)\\] {\n  --tw-shadow: 0 10px 50px rgba(230,230,230,0.5);\n  --tw-shadow-colored: 0 10px 50px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.shadow-\\[0_0_20px_rgba\\(230\\2c 230\\2c 230\\2c 0\\.5\\)\\] {\n  --tw-shadow: 0 0 20px rgba(230,230,230,0.5);\n  --tw-shadow-colored: 0 0 20px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n", "",{"version":3,"sources":["webpack://./node_modules/tailwindcss/tailwind.css","webpack://./node_modules/tailwindcss/%3Cinput%20css%202nASVf%3E","<no source>"],"names":[],"mappings":"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AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA,sBAAA;EAAA;AFImB;;AAAnB;EEJA,sBAAA;EAAA;AFImB;;AAAnB;EEJA,uBAAA;EAAA;AFImB;;AAAnB;EEJA,uBAAA;EAAA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA,iBAAA;EAAA,wBAAA;EAAA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA,uBAAA;EAAA;AFImB;;AAAnB;EEJA,uBAAA;EAAA;AFImB;;AAAnB;EEJA,mBAAA;EAAA;AFImB;;AAAnB;EEJA,mBAAA;EAAA;AFImB;;AAAnB;EEJA,mBAAA;EAAA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA,mBAAA;EAAA;AFImB;;AAAnB;EEJA,gBAAA;EAAA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA,qBAAA;EAAA;AFImB;;AAAnB;EEJA,qBAAA;EAAA;AFImB;;AAAnB;EEJA,qBAAA;EAAA;AFImB;;AAAnB;EEJA,+CAAA;EAAA,wDAAA;EAAA;AFImB;;AAAnB;EEJA,4CAAA;EAAA,qDAAA;EAAA;AFImB","sourcesContent":["@tailwind base;\n\n@tailwind components;\n\n@tailwind utilities;\n","/*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  tab-size: 4; /* 3 */\n  font-family: theme('fontFamily.sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"); /* 4 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr[title] {\n  text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: theme('fontFamily.mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace); /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse;  /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;  /* 1 */\n  color: theme('colors.gray.400', #9ca3af); /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/*\nEnsure the default browser behavior of the `hidden` attribute.\n*/\n\n[hidden] {\n  display: none;\n}\n",null],"sourceRoot":""}]);
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
        this.button
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
//adadsdada

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



class SignInAndSignUp {
    constructor(){
        this.box = (0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_0__.New)('div')

        this.boxStyle = ['w-4/5', 'h-96', 'border', 'border-black', 'relative', 'inset-1/2', '-translate-y-1/2', '-translate-x-1/2'] 

        ;(0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_0__.tailwindAdd)(this.boxStyle, this.box)
    }
    render(){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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USxRQUFRLE1BQU0sS0FBSyxxQkFBcUIscUJBQXFCLHVCQUF1QixRQUFRLE1BQU0sTUFBTSxLQUFLLGFBQWEsYUFBYSxRQUFRLE1BQU0sTUFBTSxVQUFVLGFBQWEsYUFBYSxPQUFPLE1BQU0sTUFBTSxLQUFLLFdBQVcsWUFBWSxPQUFPLE1BQU0sTUFBTSxNQUFNLGFBQWEsT0FBTyxPQUFPLE1BQU0sUUFBUSx1QkFBdUIscUJBQXFCLE9BQU8sTUFBTSxNQUFNLEtBQUssV0FBVyxPQUFPLE1BQU0sTUFBTSxNQUFNLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLFdBQVcsT0FBTyxRQUFRLE1BQU0sS0FBSyxxQkFBcUIsdUJBQXVCLHVCQUF1QixRQUFRLFFBQVEsTUFBTSxTQUFTLHVCQUF1QixxQkFBcUIsdUJBQXVCLHFCQUFxQixxQkFBcUIscUJBQXFCLE9BQU8sTUFBTSxNQUFNLE1BQU0sYUFBYSxPQUFPLE9BQU8sTUFBTSxRQUFRLHVCQUF1Qix1QkFBdUIsdUJBQXVCLFFBQVEsTUFBTSxNQUFNLEtBQUssV0FBVyxPQUFPLE1BQU0sTUFBTSxLQUFLLGFBQWEsT0FBTyxNQUFNLE1BQU0sS0FBSyxhQUFhLE9BQU8sTUFBTSxNQUFNLE1BQU0sV0FBVyxPQUFPLE9BQU8sTUFBTSxLQUFLLHVCQUF1Qix1QkFBdUIsUUFBUSxNQUFNLE1BQU0sS0FBSyxhQUFhLE9BQU8sT0FBTyxNQUFNLEtBQUssdUJBQXVCLHFCQUFxQixPQUFPLE1BQU0sTUFBTSxLQUFLLGFBQWEsT0FBTyxNQUFNLE1BQU0saUJBQWlCLFdBQVcsT0FBTyxLQUFLLFdBQVcsVUFBVSxPQUFPLEtBQUssV0FBVyxPQUFPLE9BQU8sYUFBYSxXQUFXLFVBQVUsT0FBTyxNQUFNLE1BQU0sS0FBSyxhQUFhLE9BQU8sT0FBTyxNQUFNLE1BQU0scUJBQXFCLHNCQUFzQixRQUFRLE1BQU0sTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLEtBQUssS0FBSyxXQUFXLE9BQU8sUUFBUSxNQUFNLFlBQVkscUJBQXFCLHVCQUF1QixRQUFRLE1BQU0sTUFBTSxNQUFNLFdBQVcsVUFBVSxPQUFPLE1BQU0sTUFBTSxLQUFLLFdBQVcsT0FBTyxLQUFLLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxNQUFNLEtBQUssS0FBSyxPQUFPLE1BQU0sS0FBSyxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsS0FBSyxPQUFPLE1BQU0sS0FBSyxPQUFPLE1BQU0sS0FBSyxPQUFPLE1BQU0sV0FBVyxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxXQUFXLEtBQUssT0FBTyxNQUFNLFdBQVcsS0FBSyxPQUFPLE1BQU0sV0FBVyxLQUFLLE9BQU8sTUFBTSxXQUFXLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLFdBQVcsV0FBVyxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxL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Ozs7QUM3QnVEO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixxREFBRztBQUN0Qix1QkFBdUIscURBQUc7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDhEQUFXO0FBQ25CLFFBQVEsOERBQVc7QUFDbkI7QUFDQTtBQUNBLFFBQVEsMERBQVE7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7O0FDbkJrRDtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixxREFBRztBQUN0QjtBQUNBO0FBQ0E7QUFDQSxRQUFRLDhEQUFXO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCa0I7QUFDb0I7QUFDOUI7QUFDdkI7QUFDQSxxQkFBcUIsNENBQUc7QUFDeEI7QUFDQSxJQUFJLDBEQUFRLENBQUMseURBQU87QUFDcEIsQ0FBQztBQUNELGlFQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc29jYWlsLW5ldHdvcmsvLi9ub2RlX21vZHVsZXMvdGFpbHdpbmRjc3MvdGFpbHdpbmQuY3NzIiwid2VicGFjazovL3NvY2FpbC1uZXR3b3JrLy4vc3JjL2NvbXBvbmVudHMvTWFpbi9zaWRlQmFyTGVmdC9zaWRlQmFyTGVmdC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9zb2NhaWwtbmV0d29yay8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vc29jYWlsLW5ldHdvcmsvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9zb2NhaWwtbmV0d29yay8uL25vZGVfbW9kdWxlcy90YWlsd2luZGNzcy90YWlsd2luZC5jc3M/ZmJiOSIsIndlYnBhY2s6Ly9zb2NhaWwtbmV0d29yay8uL3NyYy9jb21wb25lbnRzL01haW4vc2lkZUJhckxlZnQvc2lkZUJhckxlZnQubW9kdWxlLnNjc3M/ODA3NiIsIndlYnBhY2s6Ly9zb2NhaWwtbmV0d29yay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9zb2NhaWwtbmV0d29yay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vc29jYWlsLW5ldHdvcmsvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vc29jYWlsLW5ldHdvcmsvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vc29jYWlsLW5ldHdvcmsvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9zb2NhaWwtbmV0d29yay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3NvY2FpbC1uZXR3b3JrLy4vc3JjL0phdmFzY3JpcHQvYmFzZS5qcyIsIndlYnBhY2s6Ly9zb2NhaWwtbmV0d29yay8uL3NyYy9KYXZhc2NyaXB0L3Rvb2wuanMiLCJ3ZWJwYWNrOi8vc29jYWlsLW5ldHdvcmsvLi9zcmMvYXBwLmpzIiwid2VicGFjazovL3NvY2FpbC1uZXR3b3JrLy4vc3JjL2NvbXBvbmVudHMvTWFpbi9oZWFkZXIvU2VhcmNoQmFyL3NlYXJjaEJhci5qcyIsIndlYnBhY2s6Ly9zb2NhaWwtbmV0d29yay8uL3NyYy9jb21wb25lbnRzL01haW4vaGVhZGVyL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9zb2NhaWwtbmV0d29yay8uL3NyYy9jb21wb25lbnRzL01haW4vbWFpbi5qcyIsIndlYnBhY2s6Ly9zb2NhaWwtbmV0d29yay8uL3NyYy9jb21wb25lbnRzL01haW4vbWFpbkNvbnRlbnQvbWFpbkNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vc29jYWlsLW5ldHdvcmsvLi9zcmMvY29tcG9uZW50cy9NYWluL3NpZGVCYXJMZWZ0L0F2YXRhci9hdmF0YXIuanMiLCJ3ZWJwYWNrOi8vc29jYWlsLW5ldHdvcmsvLi9zcmMvY29tcG9uZW50cy9NYWluL3NpZGVCYXJMZWZ0L3NpZGVCYXJMZWZ0LmpzIiwid2VicGFjazovL3NvY2FpbC1uZXR3b3JrLy4vc3JjL2NvbXBvbmVudHMvTWFpbi9zaWRlQmFyTGVmdC90b29sQmFyL0J1dHRvblN0eWxlLmpzIiwid2VicGFjazovL3NvY2FpbC1uZXR3b3JrLy4vc3JjL2NvbXBvbmVudHMvTWFpbi9zaWRlQmFyTGVmdC90b29sQmFyL1Bob3Rvcy9waG90b3MuanMiLCJ3ZWJwYWNrOi8vc29jYWlsLW5ldHdvcmsvLi9zcmMvY29tcG9uZW50cy9NYWluL3NpZGVCYXJMZWZ0L3Rvb2xCYXIvZnJpZW5kcy9mcmllbmRzLmpzIiwid2VicGFjazovL3NvY2FpbC1uZXR3b3JrLy4vc3JjL2NvbXBvbmVudHMvTWFpbi9zaWRlQmFyTGVmdC90b29sQmFyL2dyb3Vwcy9ncm91cHMuanMiLCJ3ZWJwYWNrOi8vc29jYWlsLW5ldHdvcmsvLi9zcmMvY29tcG9uZW50cy9NYWluL3NpZGVCYXJMZWZ0L3Rvb2xCYXIvcHJvZmlsZS9wcm9maWxlLmpzIiwid2VicGFjazovL3NvY2FpbC1uZXR3b3JrLy4vc3JjL2NvbXBvbmVudHMvTWFpbi9zaWRlQmFyTGVmdC90b29sQmFyL3NhdmUvc2F2ZS5qcyIsIndlYnBhY2s6Ly9zb2NhaWwtbmV0d29yay8uL3NyYy9jb21wb25lbnRzL01haW4vc2lkZUJhckxlZnQvdG9vbEJhci90b29sQmFyLmpzIiwid2VicGFjazovL3NvY2FpbC1uZXR3b3JrLy4vc3JjL2NvbXBvbmVudHMvTWFpbi9zaWRlQmFyUmlnaHQvc2lkZUJhclJpZ2h0LmpzIiwid2VicGFjazovL3NvY2FpbC1uZXR3b3JrLy4vc3JjL2NvbXBvbmVudHMvU2lnbkluJlNpZ25VcC9TaWduSW5BbmRTaWduVXAuanMiLCJ3ZWJwYWNrOi8vc29jYWlsLW5ldHdvcmsvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLypcXG4hIHRhaWx3aW5kY3NzIHYzLjAuMiB8IE1JVCBMaWNlbnNlIHwgaHR0cHM6Ly90YWlsd2luZGNzcy5jb21cXG4qLy8qXFxuMS4gUHJldmVudCBwYWRkaW5nIGFuZCBib3JkZXIgZnJvbSBhZmZlY3RpbmcgZWxlbWVudCB3aWR0aC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvNClcXG4yLiBBbGxvdyBhZGRpbmcgYSBib3JkZXIgdG8gYW4gZWxlbWVudCBieSBqdXN0IGFkZGluZyBhIGJvcmRlci13aWR0aC4gKGh0dHBzOi8vZ2l0aHViLmNvbS90YWlsd2luZGNzcy90YWlsd2luZGNzcy9wdWxsLzExNilcXG4qL1xcblxcbiosXFxuOjpiZWZvcmUsXFxuOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBib3JkZXItd2lkdGg6IDA7IC8qIDIgKi9cXG4gIGJvcmRlci1zdHlsZTogc29saWQ7IC8qIDIgKi9cXG4gIGJvcmRlci1jb2xvcjogY3VycmVudENvbG9yOyAvKiAyICovXFxufVxcblxcbjo6YmVmb3JlLFxcbjo6YWZ0ZXIge1xcbiAgLS10dy1jb250ZW50OiAnJztcXG59XFxuXFxuLypcXG4xLiBVc2UgYSBjb25zaXN0ZW50IHNlbnNpYmxlIGxpbmUtaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4yLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXG4zLiBVc2UgYSBtb3JlIHJlYWRhYmxlIHRhYiBzaXplLlxcbjQuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgYHNhbnNgIGZvbnQtZmFtaWx5IGJ5IGRlZmF1bHQuXFxuKi9cXG5cXG5odG1sIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7IC8qIDEgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqLyAvKiAzICovXFxuICB0YWItc2l6ZTogNDsgLyogMyAqL1xcbiAgZm9udC1mYW1pbHk6IHVpLXNhbnMtc2VyaWYsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEFyaWFsLCBcXFwiTm90byBTYW5zXFxcIiwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCIsIFxcXCJOb3RvIENvbG9yIEVtb2ppXFxcIjsgLyogNCAqL1xcbn1cXG5cXG4vKlxcbjEuIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXG4yLiBJbmhlcml0IGxpbmUtaGVpZ2h0IGZyb20gYGh0bWxgIHNvIHVzZXJzIGNhbiBzZXQgdGhlbSBhcyBhIGNsYXNzIGRpcmVjdGx5IG9uIHRoZSBgaHRtbGAgZWxlbWVudC5cXG4qL1xcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwOyAvKiAxICovXFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKlxcbjEuIEFkZCB0aGUgY29ycmVjdCBoZWlnaHQgaW4gRmlyZWZveC5cXG4yLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBvZiBib3JkZXIgY29sb3IgaW4gRmlyZWZveC4gKGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTE5MDY1NSlcXG4zLiBFbnN1cmUgaG9yaXpvbnRhbCBydWxlcyBhcmUgdmlzaWJsZSBieSBkZWZhdWx0LlxcbiovXFxuXFxuaHIge1xcbiAgaGVpZ2h0OiAwOyAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgYm9yZGVyLXRvcC13aWR0aDogMXB4OyAvKiAzICovXFxufVxcblxcbi8qXFxuQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuKi9cXG5cXG5hYmJyW3RpdGxlXSB7XFxuICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcbn1cXG5cXG4vKlxcblJlbW92ZSB0aGUgZGVmYXVsdCBmb250IHNpemUgYW5kIHdlaWdodCBmb3IgaGVhZGluZ3MuXFxuKi9cXG5cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNiB7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogaW5oZXJpdDtcXG59XFxuXFxuLypcXG5SZXNldCBsaW5rcyB0byBvcHRpbWl6ZSBmb3Igb3B0LWluIHN0eWxpbmcgaW5zdGVhZCBvZiBvcHQtb3V0LlxcbiovXFxuXFxuYSB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gRWRnZSBhbmQgU2FmYXJpLlxcbiovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLypcXG4xLiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIGBtb25vYCBmb250IGZhbWlseSBieSBkZWZhdWx0LlxcbjIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAsXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiB1aS1tb25vc3BhY2UsIFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXFxcIkxpYmVyYXRpb24gTW9ub1xcXCIsIFxcXCJDb3VyaWVyIE5ld1xcXCIsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbnNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKlxcblByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuICBib3R0b206IC0wLjI1ZW07XFxufVxcblxcbnN1cCB7XFxuICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuLypcXG4xLiBSZW1vdmUgdGV4dCBpbmRlbnRhdGlvbiBmcm9tIHRhYmxlIGNvbnRlbnRzIGluIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTk5MDg4LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MjAxMjk3KVxcbjIuIENvcnJlY3QgdGFibGUgYm9yZGVyIGNvbG9yIGluaGVyaXRhbmNlIGluIGFsbCBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTkzNTcyOSwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE5NTAxNilcXG4zLiBSZW1vdmUgZ2FwcyBiZXR3ZWVuIHRhYmxlIGJvcmRlcnMgYnkgZGVmYXVsdC5cXG4qL1xcblxcbnRhYmxlIHtcXG4gIHRleHQtaW5kZW50OiAwOyAvKiAxICovXFxuICBib3JkZXItY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7ICAvKiAzICovXFxufVxcblxcbi8qXFxuMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxuMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbjMuIFJlbW92ZSBkZWZhdWx0IHBhZGRpbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDsgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIG1hcmdpbjogMDsgLyogMiAqL1xcbiAgcGFkZGluZzogMDsgLyogMyAqL1xcbn1cXG5cXG4vKlxcblJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSBhbmQgRmlyZWZveC5cXG4qL1xcblxcbmJ1dHRvbixcXG5zZWxlY3Qge1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qXFxuMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4yLiBSZW1vdmUgZGVmYXVsdCBidXR0b24gc3R5bGVzLlxcbiovXFxuXFxuYnV0dG9uLFxcblt0eXBlPSdidXR0b24nXSxcXG5bdHlwZT0ncmVzZXQnXSxcXG5bdHlwZT0nc3VibWl0J10ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyAvKiAyICovXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lOyAvKiAyICovXFxufVxcblxcbi8qXFxuVXNlIHRoZSBtb2Rlcm4gRmlyZWZveCBmb2N1cyBzdHlsZSBmb3IgYWxsIGZvY3VzYWJsZSBlbGVtZW50cy5cXG4qL1xcblxcbjotbW96LWZvY3VzcmluZyB7XFxuICBvdXRsaW5lOiBhdXRvO1xcbn1cXG5cXG4vKlxcblJlbW92ZSB0aGUgYWRkaXRpb25hbCBgOmludmFsaWRgIHN0eWxlcyBpbiBGaXJlZm94LiAoaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvZ2Vja28tZGV2L2Jsb2IvMmY5ZWFjZDlkM2Q5OTVjOTM3YjQyNTFhNTU1N2Q5NWQ0OTRjOWJlMS9sYXlvdXQvc3R5bGUvcmVzL2Zvcm1zLmNzcyNMNzI4LUw3MzcpXFxuKi9cXG5cXG46LW1vei11aS1pbnZhbGlkIHtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi8qXFxuQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUgYW5kIEZpcmVmb3guXFxuKi9cXG5cXG5wcm9ncmVzcyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qXFxuQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gU2FmYXJpLlxcbiovXFxuXFxuOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcbjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qXFxuMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuKi9cXG5cXG5bdHlwZT0nc2VhcmNoJ10ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxufVxcblxcbi8qXFxuUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiovXFxuXFxuOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLypcXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbjIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4qL1xcblxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4qL1xcblxcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG4vKlxcblJlbW92ZXMgdGhlIGRlZmF1bHQgc3BhY2luZyBhbmQgYm9yZGVyIGZvciBhcHByb3ByaWF0ZSBlbGVtZW50cy5cXG4qL1xcblxcbmJsb2NrcXVvdGUsXFxuZGwsXFxuZGQsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxuaHIsXFxuZmlndXJlLFxcbnAsXFxucHJlIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuZmllbGRzZXQge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxubGVnZW5kIHtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbm9sLFxcbnVsLFxcbm1lbnUge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qXFxuUHJldmVudCByZXNpemluZyB0ZXh0YXJlYXMgaG9yaXpvbnRhbGx5IGJ5IGRlZmF1bHQuXFxuKi9cXG5cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IHZlcnRpY2FsO1xcbn1cXG5cXG4vKlxcbjEuIFJlc2V0IHRoZSBkZWZhdWx0IHBsYWNlaG9sZGVyIG9wYWNpdHkgaW4gRmlyZWZveC4gKGh0dHBzOi8vZ2l0aHViLmNvbS90YWlsd2luZGxhYnMvdGFpbHdpbmRjc3MvaXNzdWVzLzMzMDApXFxuMi4gU2V0IHRoZSBkZWZhdWx0IHBsYWNlaG9sZGVyIGNvbG9yIHRvIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBncmF5IDQwMCBjb2xvci5cXG4qL1xcblxcbmlucHV0OjpwbGFjZWhvbGRlcixcXG50ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xcbiAgb3BhY2l0eTogMTsgIC8qIDEgKi9cXG4gIGNvbG9yOiAjOWNhM2FmOyAvKiAyICovXFxufVxcblxcbi8qXFxuU2V0IHRoZSBkZWZhdWx0IGN1cnNvciBmb3IgYnV0dG9ucy5cXG4qL1xcblxcbmJ1dHRvbixcXG5bcm9sZT1cXFwiYnV0dG9uXFxcIl0ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKlxcbk1ha2Ugc3VyZSBkaXNhYmxlZCBidXR0b25zIGRvbid0IGdldCB0aGUgcG9pbnRlciBjdXJzb3IuXFxuKi9cXG46ZGlzYWJsZWQge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4vKlxcbjEuIE1ha2UgcmVwbGFjZWQgZWxlbWVudHMgYGRpc3BsYXk6IGJsb2NrYCBieSBkZWZhdWx0LiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy8xNClcXG4yLiBBZGQgYHZlcnRpY2FsLWFsaWduOiBtaWRkbGVgIHRvIGFsaWduIHJlcGxhY2VkIGVsZW1lbnRzIG1vcmUgc2Vuc2libHkgYnkgZGVmYXVsdC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9qZW5zaW1tb25zL2Nzc3JlbWVkeS9pc3N1ZXMvMTQjaXNzdWVjb21tZW50LTYzNDkzNDIxMClcXG4gICBUaGlzIGNhbiB0cmlnZ2VyIGEgcG9vcmx5IGNvbnNpZGVyZWQgbGludCBlcnJvciBpbiBzb21lIHRvb2xzIGJ1dCBpcyBpbmNsdWRlZCBieSBkZXNpZ24uXFxuKi9cXG5cXG5pbWcsXFxuc3ZnLFxcbnZpZGVvLFxcbmNhbnZhcyxcXG5hdWRpbyxcXG5pZnJhbWUsXFxuZW1iZWQsXFxub2JqZWN0IHtcXG4gIGRpc3BsYXk6IGJsb2NrOyAvKiAxICovXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAvKiAyICovXFxufVxcblxcbi8qXFxuQ29uc3RyYWluIGltYWdlcyBhbmQgdmlkZW9zIHRvIHRoZSBwYXJlbnQgd2lkdGggYW5kIHByZXNlcnZlIHRoZWlyIGludHJpbnNpYyBhc3BlY3QgcmF0aW8uIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0KVxcbiovXFxuXFxuaW1nLFxcbnZpZGVvIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLypcXG5FbnN1cmUgdGhlIGRlZmF1bHQgYnJvd3NlciBiZWhhdmlvciBvZiB0aGUgYGhpZGRlbmAgYXR0cmlidXRlLlxcbiovXFxuXFxuW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuKiwgOjpiZWZvcmUsIDo6YWZ0ZXIge1xcbiAgLS10dy10cmFuc2xhdGUteDogMDtcXG4gIC0tdHctdHJhbnNsYXRlLXk6IDA7XFxuICAtLXR3LXJvdGF0ZTogMDtcXG4gIC0tdHctc2tldy14OiAwO1xcbiAgLS10dy1za2V3LXk6IDA7XFxuICAtLXR3LXNjYWxlLXg6IDE7XFxuICAtLXR3LXNjYWxlLXk6IDE7XFxuICAtLXR3LXRyYW5zZm9ybTogdHJhbnNsYXRlWCh2YXIoLS10dy10cmFuc2xhdGUteCkpIHRyYW5zbGF0ZVkodmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcXG4gIGJvcmRlci1jb2xvcjogcmdiKDIyOSAyMzEgMjM1IC8gdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcXG4gIC0tdHctcmluZy1vZmZzZXQtc2hhZG93OiAwIDAgIzAwMDA7XFxuICAtLXR3LXJpbmctc2hhZG93OiAwIDAgIzAwMDA7XFxuICAtLXR3LXNoYWRvdzogMCAwICMwMDAwO1xcbiAgLS10dy1zaGFkb3ctY29sb3JlZDogMCAwICMwMDAwO1xcbn1cXG5cXG4uZml4ZWQge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbn1cXG5cXG4ucmVsYXRpdmUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uaW5zZXQtMVxcXFwvMiB7XFxuICB0b3A6IDUwJTtcXG4gIHJpZ2h0OiA1MCU7XFxuICBib3R0b206IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG59XFxuXFxuLnJpZ2h0LTAge1xcbiAgcmlnaHQ6IDBweDtcXG59XFxuXFxuLnotMTAge1xcbiAgei1pbmRleDogMTA7XFxufVxcblxcbi5teC00IHtcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4ubWwtNCB7XFxuICBtYXJnaW4tbGVmdDogMXJlbTtcXG59XFxuXFxuLm10LTI0IHtcXG4gIG1hcmdpbi10b3A6IDZyZW07XFxufVxcblxcbi5tbC02IHtcXG4gIG1hcmdpbi1sZWZ0OiAxLjVyZW07XFxufVxcblxcbi5tdC02IHtcXG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcXG59XFxuXFxuLmlubGluZS1ibG9jayB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi5mbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5oLXNjcmVlbiB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uaC05NiB7XFxuICBoZWlnaHQ6IDI0cmVtO1xcbn1cXG5cXG4uaC0yMCB7XFxuICBoZWlnaHQ6IDVyZW07XFxufVxcblxcbi5oLTE0IHtcXG4gIGhlaWdodDogMy41cmVtO1xcbn1cXG5cXG4uaC0xMiB7XFxuICBoZWlnaHQ6IDNyZW07XFxufVxcblxcbi5oLTEyOCB7XFxuICBoZWlnaHQ6IDMycmVtO1xcbn1cXG5cXG4uaC04IHtcXG4gIGhlaWdodDogMnJlbTtcXG59XFxuXFxuLmgtMTYge1xcbiAgaGVpZ2h0OiA0cmVtO1xcbn1cXG5cXG4uaC02IHtcXG4gIGhlaWdodDogMS41cmVtO1xcbn1cXG5cXG4udy1mdWxsIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udy00XFxcXC81IHtcXG4gIHdpZHRoOiA4MCU7XFxufVxcblxcbi53LTEyIHtcXG4gIHdpZHRoOiAzcmVtO1xcbn1cXG5cXG4udy03MiB7XFxuICB3aWR0aDogMThyZW07XFxufVxcblxcbi53LTY0IHtcXG4gIHdpZHRoOiAxNnJlbTtcXG59XFxuXFxuLnctNDAge1xcbiAgd2lkdGg6IDEwcmVtO1xcbn1cXG5cXG4udy02IHtcXG4gIHdpZHRoOiAxLjVyZW07XFxufVxcblxcbi5tYXgtdy1mdWxsIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuLnNocmluayB7XFxuICBmbGV4LXNocmluazogMTtcXG59XFxuXFxuLnNocmluay0wIHtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbn1cXG5cXG4uZ3JvdyB7XFxuICBmbGV4LWdyb3c6IDE7XFxufVxcblxcbi5ncm93LTAge1xcbiAgZmxleC1ncm93OiAwO1xcbn1cXG5cXG4uYmFzaXMtNzIge1xcbiAgZmxleC1iYXNpczogMThyZW07XFxufVxcblxcbi50cmFuc2xhdGUteC0xXFxcXC8yIHtcXG4gIC0tdHctdHJhbnNsYXRlLXg6IDUwJTtcXG4gIHRyYW5zZm9ybTogdmFyKC0tdHctdHJhbnNmb3JtKTtcXG59XFxuXFxuLnRyYW5zbGF0ZS15LTFcXFxcLzIge1xcbiAgLS10dy10cmFuc2xhdGUteTogNTAlO1xcbiAgdHJhbnNmb3JtOiB2YXIoLS10dy10cmFuc2Zvcm0pO1xcbn1cXG5cXG4uLXRyYW5zbGF0ZS15LTFcXFxcLzIge1xcbiAgLS10dy10cmFuc2xhdGUteTogLTUwJTtcXG4gIHRyYW5zZm9ybTogdmFyKC0tdHctdHJhbnNmb3JtKTtcXG59XFxuXFxuLi10cmFuc2xhdGUteC0xXFxcXC8yIHtcXG4gIC0tdHctdHJhbnNsYXRlLXg6IC01MCU7XFxuICB0cmFuc2Zvcm06IHZhcigtLXR3LXRyYW5zZm9ybSk7XFxufVxcblxcbi5jdXJzb3ItcG9pbnRlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5mbGV4LXJvdyB7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG4uZmxleC1jb2wge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLml0ZW1zLWNlbnRlciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uanVzdGlmeS1iZXR3ZWVuIHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLm92ZXJmbG93LXktYXV0byB7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4udHJ1bmNhdGUge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLnJvdW5kZWQge1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG59XFxuXFxuLnJvdW5kZWQtbGcge1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbn1cXG5cXG4uYm9yZGVyIHtcXG4gIGJvcmRlci13aWR0aDogMXB4O1xcbn1cXG5cXG4uYm9yZGVyLTIge1xcbiAgYm9yZGVyLXdpZHRoOiAycHg7XFxufVxcblxcbi5ib3JkZXItaW5kaWdvLTUwMFxcXFwvMTAwIHtcXG4gIGJvcmRlci1jb2xvcjogcmdiKDk5IDEwMiAyNDEgLyAxKTtcXG59XFxuXFxuLmJvcmRlci1ibGFjayB7XFxuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMCAwIDAgLyB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xcbn1cXG5cXG4uYm9yZGVyLWItZ3JheS0yMDAge1xcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcXG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHJnYigyMjkgMjMxIDIzNSAvIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5KSk7XFxufVxcblxcbi5iZy13aGl0ZSB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1IDI1NSAyNTUgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcblxcbi5iZy1zbGF0ZS0yMDAge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNiAyMzIgMjQwIC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG5cXG4uYmctc2xhdGUtMzAwIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDMgMjEzIDIyNSAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuXFxuLnBsLTQge1xcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbn1cXG5cXG4ucHItNCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4ucGwtMiB7XFxuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXG59XFxuXFxuLnRleHQteHMge1xcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDFyZW07XFxufVxcblxcbi50ZXh0LWJhc2Uge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcXG59XFxuXFxuLmZvbnQtc2VtaWJvbGQge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmZvbnQtYm9sZCB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4udHJhY2tpbmctd2lkZXN0IHtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcXG59XFxuXFxuLnRyYWNraW5nLXdpZGUge1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDI1ZW07XFxufVxcblxcbi50ZXh0LXdoaXRlIHtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IHJnYigyNTUgMjU1IDI1NSAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXG5cXG4udGV4dC1zbGF0ZS00MDAge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiKDE0OCAxNjMgMTg0IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcblxcbi50ZXh0LXNsYXRlLTYwMCB7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiByZ2IoNzEgODUgMTA1IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcblxcbi5zaGFkb3ctXFxcXFswXzEwcHhfNTBweF9yZ2JhXFxcXCgyMzBcXFxcMmMgMjMwXFxcXDJjIDIzMFxcXFwyYyAwXFxcXC41XFxcXClcXFxcXSB7XFxuICAtLXR3LXNoYWRvdzogMCAxMHB4IDUwcHggcmdiYSgyMzAsMjMwLDIzMCwwLjUpO1xcbiAgLS10dy1zaGFkb3ctY29sb3JlZDogMCAxMHB4IDUwcHggdmFyKC0tdHctc2hhZG93LWNvbG9yKTtcXG4gIGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdyk7XFxufVxcblxcbi5zaGFkb3ctXFxcXFswXzBfMjBweF9yZ2JhXFxcXCgyMzBcXFxcMmMgMjMwXFxcXDJjIDIzMFxcXFwyYyAwXFxcXC41XFxcXClcXFxcXSB7XFxuICAtLXR3LXNoYWRvdzogMCAwIDIwcHggcmdiYSgyMzAsMjMwLDIzMCwwLjUpO1xcbiAgLS10dy1zaGFkb3ctY29sb3JlZDogMCAwIDIwcHggdmFyKC0tdHctc2hhZG93LWNvbG9yKTtcXG4gIGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdyk7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy90YWlsd2luZGNzcy90YWlsd2luZC5jc3NcIixcIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy90YWlsd2luZGNzcy8lM0NpbnB1dCUyMGNzcyUyMDJuQVNWZiUzRVwiLFwiPG5vIHNvdXJjZT5cIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0NBQWMsQ0FBZDs7O0NBQWM7O0FBQWQ7OztFQ1FFLHNCQUFzQixFQUFFLE1BQU07RUFDOUIsZUFBZSxFQUFFLE1BQU07RUFDdkIsbUJBQW1CLEVBQUUsTUFBTTtFQUMzQiwwQkFBMEIsRUFBRSxNQUFNO0FEWHRCOztBQUFkOztFQ2dCRSxnQkFBZ0I7QURoQko7O0FBQWQ7Ozs7O0NB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Q29udGVudFwiOltcIkB0YWlsd2luZCBiYXNlO1xcblxcbkB0YWlsd2luZCBjb21wb25lbnRzO1xcblxcbkB0YWlsd2luZCB1dGlsaXRpZXM7XFxuXCIsXCIvKlxcbjEuIFByZXZlbnQgcGFkZGluZyBhbmQgYm9yZGVyIGZyb20gYWZmZWN0aW5nIGVsZW1lbnQgd2lkdGguIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzQpXFxuMi4gQWxsb3cgYWRkaW5nIGEgYm9yZGVyIHRvIGFuIGVsZW1lbnQgYnkganVzdCBhZGRpbmcgYSBib3JkZXItd2lkdGguIChodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRjc3MvdGFpbHdpbmRjc3MvcHVsbC8xMTYpXFxuKi9cXG5cXG4qLFxcbjo6YmVmb3JlLFxcbjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgYm9yZGVyLXdpZHRoOiAwOyAvKiAyICovXFxuICBib3JkZXItc3R5bGU6IHNvbGlkOyAvKiAyICovXFxuICBib3JkZXItY29sb3I6IGN1cnJlbnRDb2xvcjsgLyogMiAqL1xcbn1cXG5cXG46OmJlZm9yZSxcXG46OmFmdGVyIHtcXG4gIC0tdHctY29udGVudDogJyc7XFxufVxcblxcbi8qXFxuMS4gVXNlIGEgY29uc2lzdGVudCBzZW5zaWJsZSBsaW5lLWhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuMy4gVXNlIGEgbW9yZSByZWFkYWJsZSB0YWIgc2l6ZS5cXG40LiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIGBzYW5zYCBmb250LWZhbWlseSBieSBkZWZhdWx0LlxcbiovXFxuXFxuaHRtbCB7XFxuICBsaW5lLWhlaWdodDogMS41OyAvKiAxICovXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG4gIC1tb3otdGFiLXNpemU6IDQ7IC8qIDMgKi9cXG4gIHRhYi1zaXplOiA0OyAvKiAzICovXFxuICBmb250LWZhbWlseTogdGhlbWUoJ2ZvbnRGYW1pbHkuc2FucycsIHVpLXNhbnMtc2VyaWYsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEFyaWFsLCBcXFwiTm90byBTYW5zXFxcIiwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCIsIFxcXCJOb3RvIENvbG9yIEVtb2ppXFxcIik7IC8qIDQgKi9cXG59XFxuXFxuLypcXG4xLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxuMi4gSW5oZXJpdCBsaW5lLWhlaWdodCBmcm9tIGBodG1sYCBzbyB1c2VycyBjYW4gc2V0IHRoZW0gYXMgYSBjbGFzcyBkaXJlY3RseSBvbiB0aGUgYGh0bWxgIGVsZW1lbnQuXFxuKi9cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDsgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLypcXG4xLiBBZGQgdGhlIGNvcnJlY3QgaGVpZ2h0IGluIEZpcmVmb3guXFxuMi4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2Ugb2YgYm9yZGVyIGNvbG9yIGluIEZpcmVmb3guIChodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTA2NTUpXFxuMy4gRW5zdXJlIGhvcml6b250YWwgcnVsZXMgYXJlIHZpc2libGUgYnkgZGVmYXVsdC5cXG4qL1xcblxcbmhyIHtcXG4gIGhlaWdodDogMDsgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIGJvcmRlci10b3Atd2lkdGg6IDFweDsgLyogMyAqL1xcbn1cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiovXFxuXFxuYWJiclt0aXRsZV0ge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcbn1cXG5cXG4vKlxcblJlbW92ZSB0aGUgZGVmYXVsdCBmb250IHNpemUgYW5kIHdlaWdodCBmb3IgaGVhZGluZ3MuXFxuKi9cXG5cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNiB7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogaW5oZXJpdDtcXG59XFxuXFxuLypcXG5SZXNldCBsaW5rcyB0byBvcHRpbWl6ZSBmb3Igb3B0LWluIHN0eWxpbmcgaW5zdGVhZCBvZiBvcHQtb3V0LlxcbiovXFxuXFxuYSB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gRWRnZSBhbmQgU2FmYXJpLlxcbiovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLypcXG4xLiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIGBtb25vYCBmb250IGZhbWlseSBieSBkZWZhdWx0LlxcbjIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAsXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiB0aGVtZSgnZm9udEZhbWlseS5tb25vJywgdWktbW9ub3NwYWNlLCBTRk1vbm8tUmVndWxhciwgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsIFxcXCJMaWJlcmF0aW9uIE1vbm9cXFwiLCBcXFwiQ291cmllciBOZXdcXFwiLCBtb25vc3BhY2UpOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuc21hbGwge1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qXFxuUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbnN1YixcXG5zdXAge1xcbiAgZm9udC1zaXplOiA3NSU7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3ViIHtcXG4gIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuc3VwIHtcXG4gIHRvcDogLTAuNWVtO1xcbn1cXG5cXG4vKlxcbjEuIFJlbW92ZSB0ZXh0IGluZGVudGF0aW9uIGZyb20gdGFibGUgY29udGVudHMgaW4gQ2hyb21lIGFuZCBTYWZhcmkuIChodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05OTkwODgsIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0yMDEyOTcpXFxuMi4gQ29ycmVjdCB0YWJsZSBib3JkZXIgY29sb3IgaW5oZXJpdGFuY2UgaW4gYWxsIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTM1NzI5LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTk1MDE2KVxcbjMuIFJlbW92ZSBnYXBzIGJldHdlZW4gdGFibGUgYm9yZGVycyBieSBkZWZhdWx0LlxcbiovXFxuXFxudGFibGUge1xcbiAgdGV4dC1pbmRlbnQ6IDA7IC8qIDEgKi9cXG4gIGJvcmRlci1jb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgIC8qIDMgKi9cXG59XFxuXFxuLypcXG4xLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4yLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuMy4gUmVtb3ZlIGRlZmF1bHQgcGFkZGluZyBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMSAqL1xcbiAgbWFyZ2luOiAwOyAvKiAyICovXFxuICBwYWRkaW5nOiAwOyAvKiAzICovXFxufVxcblxcbi8qXFxuUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlIGFuZCBGaXJlZm94LlxcbiovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLypcXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbjIuIFJlbW92ZSBkZWZhdWx0IGJ1dHRvbiBzdHlsZXMuXFxuKi9cXG5cXG5idXR0b24sXFxuW3R5cGU9J2J1dHRvbiddLFxcblt0eXBlPSdyZXNldCddLFxcblt0eXBlPSdzdWJtaXQnXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IC8qIDIgKi9cXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5Vc2UgdGhlIG1vZGVybiBGaXJlZm94IGZvY3VzIHN0eWxlIGZvciBhbGwgZm9jdXNhYmxlIGVsZW1lbnRzLlxcbiovXFxuXFxuOi1tb3otZm9jdXNyaW5nIHtcXG4gIG91dGxpbmU6IGF1dG87XFxufVxcblxcbi8qXFxuUmVtb3ZlIHRoZSBhZGRpdGlvbmFsIGA6aW52YWxpZGAgc3R5bGVzIGluIEZpcmVmb3guIChodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9nZWNrby1kZXYvYmxvYi8yZjllYWNkOWQzZDk5NWM5MzdiNDI1MWE1NTU3ZDk1ZDQ5NGM5YmUxL2xheW91dC9zdHlsZS9yZXMvZm9ybXMuY3NzI0w3MjgtTDczNylcXG4qL1xcblxcbjotbW96LXVpLWludmFsaWQge1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSBhbmQgRmlyZWZveC5cXG4qL1xcblxcbnByb2dyZXNzIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLypcXG5Db3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBTYWZhcmkuXFxuKi9cXG5cXG46Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLypcXG4xLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4yLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4qL1xcblxcblt0eXBlPSdzZWFyY2gnXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5SZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuKi9cXG5cXG46Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKlxcbjEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiovXFxuXFxuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxufVxcblxcbi8qXFxuUmVtb3ZlcyB0aGUgZGVmYXVsdCBzcGFjaW5nIGFuZCBib3JkZXIgZm9yIGFwcHJvcHJpYXRlIGVsZW1lbnRzLlxcbiovXFxuXFxuYmxvY2txdW90ZSxcXG5kbCxcXG5kZCxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5ocixcXG5maWd1cmUsXFxucCxcXG5wcmUge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5maWVsZHNldCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5sZWdlbmQge1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxub2wsXFxudWwsXFxubWVudSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLypcXG5QcmV2ZW50IHJlc2l6aW5nIHRleHRhcmVhcyBob3Jpem9udGFsbHkgYnkgZGVmYXVsdC5cXG4qL1xcblxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogdmVydGljYWw7XFxufVxcblxcbi8qXFxuMS4gUmVzZXQgdGhlIGRlZmF1bHQgcGxhY2Vob2xkZXIgb3BhY2l0eSBpbiBGaXJlZm94LiAoaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kbGFicy90YWlsd2luZGNzcy9pc3N1ZXMvMzMwMClcXG4yLiBTZXQgdGhlIGRlZmF1bHQgcGxhY2Vob2xkZXIgY29sb3IgdG8gdGhlIHVzZXIncyBjb25maWd1cmVkIGdyYXkgNDAwIGNvbG9yLlxcbiovXFxuXFxuaW5wdXQ6OnBsYWNlaG9sZGVyLFxcbnRleHRhcmVhOjpwbGFjZWhvbGRlciB7XFxuICBvcGFjaXR5OiAxOyAgLyogMSAqL1xcbiAgY29sb3I6IHRoZW1lKCdjb2xvcnMuZ3JheS40MDAnLCAjOWNhM2FmKTsgLyogMiAqL1xcbn1cXG5cXG4vKlxcblNldCB0aGUgZGVmYXVsdCBjdXJzb3IgZm9yIGJ1dHRvbnMuXFxuKi9cXG5cXG5idXR0b24sXFxuW3JvbGU9XFxcImJ1dHRvblxcXCJdIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLypcXG5NYWtlIHN1cmUgZGlzYWJsZWQgYnV0dG9ucyBkb24ndCBnZXQgdGhlIHBvaW50ZXIgY3Vyc29yLlxcbiovXFxuOmRpc2FibGVkIHtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuLypcXG4xLiBNYWtlIHJlcGxhY2VkIGVsZW1lbnRzIGBkaXNwbGF5OiBibG9ja2AgYnkgZGVmYXVsdC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvMTQpXFxuMi4gQWRkIGB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlYCB0byBhbGlnbiByZXBsYWNlZCBlbGVtZW50cyBtb3JlIHNlbnNpYmx5IGJ5IGRlZmF1bHQuIChodHRwczovL2dpdGh1Yi5jb20vamVuc2ltbW9ucy9jc3NyZW1lZHkvaXNzdWVzLzE0I2lzc3VlY29tbWVudC02MzQ5MzQyMTApXFxuICAgVGhpcyBjYW4gdHJpZ2dlciBhIHBvb3JseSBjb25zaWRlcmVkIGxpbnQgZXJyb3IgaW4gc29tZSB0b29scyBidXQgaXMgaW5jbHVkZWQgYnkgZGVzaWduLlxcbiovXFxuXFxuaW1nLFxcbnN2ZyxcXG52aWRlbyxcXG5jYW52YXMsXFxuYXVkaW8sXFxuaWZyYW1lLFxcbmVtYmVkLFxcbm9iamVjdCB7XFxuICBkaXNwbGF5OiBibG9jazsgLyogMSAqL1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgLyogMiAqL1xcbn1cXG5cXG4vKlxcbkNvbnN0cmFpbiBpbWFnZXMgYW5kIHZpZGVvcyB0byB0aGUgcGFyZW50IHdpZHRoIGFuZCBwcmVzZXJ2ZSB0aGVpciBpbnRyaW5zaWMgYXNwZWN0IHJhdGlvLiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy8xNClcXG4qL1xcblxcbmltZyxcXG52aWRlbyB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qXFxuRW5zdXJlIHRoZSBkZWZhdWx0IGJyb3dzZXIgYmVoYXZpb3Igb2YgdGhlIGBoaWRkZW5gIGF0dHJpYnV0ZS5cXG4qL1xcblxcbltoaWRkZW5dIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiLG51bGxdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnNyYy1jb21wb25lbnRzLU1haW4tc2lkZUJhckxlZnQtc2lkZUJhckxlZnQtbW9kdWxlX19zcGFjaW5nU2lkZUJhci0ta3BpcTMge1xcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2cmVtKTtcXG59XFxuXFxuLnNyYy1jb21wb25lbnRzLU1haW4tc2lkZUJhckxlZnQtc2lkZUJhckxlZnQtbW9kdWxlX19zY3JvbGxTaWRlQmFyLS1welZtcDo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDIsIDEwMSwgMTAxLCAwLjU5Nik7XFxuICB3aWR0aDogOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuLnNyYy1jb21wb25lbnRzLU1haW4tc2lkZUJhckxlZnQtc2lkZUJhckxlZnQtbW9kdWxlX19zY3JvbGxTaWRlQmFyLS1welZtcDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcXG4gIHdpZHRoOiA5MCU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9NYWluL3NpZGVCYXJMZWZ0L3NpZGVCYXJMZWZ0Lm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0kseUJBQUE7QUFDSjs7QUFFSTtFQUNJLDRDQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FBQ1I7QUFDSTtFQUNJLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FBQ1JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnNwYWNpbmdTaWRlQmFye1xcclxcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDZyZW0pO1xcclxcbn1cXHJcXG4uc2Nyb2xsU2lkZUJhcntcXHJcXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXJ7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwMiwgMTAxLCAxMDEsIDAuNTk2KTtcXHJcXG4gICAgICAgIHdpZHRoOiA4cHg7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICB9XFxyXFxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1ie1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMCwgMjMwLCAyMzApO1xcclxcbiAgICAgICAgd2lkdGg6OTAlIDtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwic3BhY2luZ1NpZGVCYXJcIjogXCJzcmMtY29tcG9uZW50cy1NYWluLXNpZGVCYXJMZWZ0LXNpZGVCYXJMZWZ0LW1vZHVsZV9fc3BhY2luZ1NpZGVCYXItLWtwaXEzXCIsXG5cdFwic2Nyb2xsU2lkZUJhclwiOiBcInNyYy1jb21wb25lbnRzLU1haW4tc2lkZUJhckxlZnQtc2lkZUJhckxlZnQtbW9kdWxlX19zY3JvbGxTaWRlQmFyLS1welZtcFwiXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi90YWlsd2luZC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdGFpbHdpbmQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2lkZUJhckxlZnQubW9kdWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2lkZUJhckxlZnQubW9kdWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgTmV3LCBTZXRBdHQsIEV2ZW50fSBmcm9tIFwiLi90b29sXCI7XHJcblxyXG5jbGFzcyBCYXNlSW5wdXR7XHJcbiAgICBjb25zdHJ1Y3Rvcih0eXBlLCBuYW1lLCBpZCl7XHJcbiAgICAgICAgdGhpcy5pbnB1dCA9IE5ldygnaW5wdXQnKVxyXG4gICAgICAgIHRoaXMuZXZlbnQgPSBFdmVudFxyXG4gICAgICAgIFNldEF0dCh0aGlzLmlucHV0LCAndHlwZScsIHR5cGUpXHJcbiAgICAgICAgU2V0QXR0KHRoaXMuaW5wdXQsICduYW1lJywgbmFtZSlcclxuICAgICAgICBTZXRBdHQodGhpcy5pbnB1dCwgJ2lkJywgaWQpXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbnB1dFxyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBCYXNlTGFiZWx7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCB0aXRsZSl7XHJcbiAgICAgICAgdGhpcy5sYWJlbCA9IE5ldygnbGFiZWwnKVxyXG4gICAgICAgIHRoaXMubGFiZWwudGV4dENvbnRlbnQgPSB0aXRsZVxyXG4gICAgICAgIFNldEF0dCh0aGlzLmxhYmVsLCAnZm9yJywgbmFtZSlcclxuICAgIH1cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxhYmVsXHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIEJhc2VCdXR0b257XHJcbiAgICBjb25zdHJ1Y3Rvcih0ZXh0KXtcclxuICAgICAgICB0aGlzLmJ1dHRvbiA9IE5ldygnYnV0dG9uJylcclxuICAgICAgICB0aGlzLmJ1dHRvbi50ZXh0Q29udGVudCA9IHRleHRcclxuICAgIH1cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHRoaXMuYnV0dG9uXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgICBCYXNlSW5wdXQsXHJcbiAgICBCYXNlTGFiZWwsXHJcbiAgICBCYXNlQnV0dG9uXHJcbn0iLCJjb25zdCBFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvci5iaW5kKGRvY3VtZW50KVxyXG5jb25zdCBFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwuYmluZChkb2N1bWVudClcclxuZnVuY3Rpb24gdGFpbHdpbmRBZGQoYXJyYXlTdHlsZSwgcG9pbnQpe1xyXG4gICAgcG9pbnQuY2xhc3NMaXN0LmFkZCguLi5hcnJheVN0eWxlKVxyXG59XHJcbmZ1bmN0aW9uIHRhaWx3aW5kUmVtb3ZlKGFycmF5U3R5bGUsIHBvaW50KXtcclxuICAgIHBvaW50LmNsYXNzTGlzdC5yZW1vdmUoLi4uYXJyYXlTdHlsZSlcclxufVxyXG5mdW5jdGlvbiB0YWlsd2luZFRvZ2dsZShhcnJheVN0eWxlLCBwb2ludCl7XHJcbiAgICBwb2ludC5jbGFzc0xpc3QudG9nZ2xlKC4uLmFycmF5U3R5bGUpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIE5ldyhzdHJpbmcpe1xyXG4gICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHJpbmcpXHJcbn1cclxuZnVuY3Rpb24gQWRkQ2hpbGQocGFyZW50Tm9kZSwgY2hpbGROb2RlKXtcclxuICAgIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoY2hpbGROb2RlKVxyXG59XHJcbmZ1bmN0aW9uIEV2ZW50KHN0cmluZywgcG9pbnQsIGNhbGxiYWNrKXtcclxuICAgIHBvaW50LmFkZEV2ZW50TGlzdGVuZXIoc3RyaW5nLCBjYWxsYmFjaylcclxufVxyXG5mdW5jdGlvbiBSZW1vdmVFdmVudChzdHJpbmcsIHBvaW50LCBjYWxsYmFjayl7XHJcbiAgICBwb2ludC5yZW1vdmVFdmVudExpc3RlbmVyKHN0cmluZyxjYWxsYmFjaylcclxufVxyXG5mdW5jdGlvbiBTZXRBdHQobm9kZSwgbmFtZUF0dHJpYnVlLCB2YWx1ZSl7XHJcbiAgICBub2RlLnNldEF0dHJpYnV0ZShuYW1lQXR0cmlidWUsIHZhbHVlKVxyXG59XHJcbmV4cG9ydCB7XHJcbiAgICB0YWlsd2luZEFkZCxcclxuICAgIHRhaWx3aW5kUmVtb3ZlLFxyXG4gICAgdGFpbHdpbmRUb2dnbGUsXHJcbiAgICBFbGVtZW50LFxyXG4gICAgRWxlbWVudHMsXHJcbiAgICBOZXcsXHJcbiAgICBBZGRDaGlsZCxcclxuICAgIEV2ZW50LFxyXG4gICAgU2V0QXR0LFxyXG4gICAgUmVtb3ZlRXZlbnRcclxufSIsImltcG9ydCBNYWluIGZyb20gXCIuL2NvbXBvbmVudHMvTWFpbi9tYWluXCI7XHJcbmltcG9ydCB7IEFkZENoaWxkLCBOZXcsIHRhaWx3aW5kQWRkIH0gZnJvbSBcIi4vSmF2YXNjcmlwdC90b29sXCI7XHJcbmltcG9ydCBTaWduSW5BbmRTaWduVXAgZnJvbSBcIi4vY29tcG9uZW50cy9TaWduSW4mU2lnblVwL1NpZ25JbkFuZFNpZ25VcFwiO1xyXG5cclxuY2xhc3MgQXBwIHtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5ib3ggPSBOZXcoJ2RpdicpXHJcbiAgICAgICAgdGhpcy5zaWduSW5fU2lnblVwX2JveCA9IG5ldyBTaWduSW5BbmRTaWduVXAoKVxyXG4gICAgICAgIHRoaXMubWFpbkFwcCA9IG5ldyBNYWluKClcclxuXHJcbiAgICAgICAgdGhpcy5ib3hTdHlsZSA9IFsndy1mdWxsJywgJ2gtc2NyZWVuJ11cclxuXHJcbiAgICAgICAgdGFpbHdpbmRBZGQodGhpcy5ib3hTdHlsZSwgdGhpcy5ib3gpXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBBZGRDaGlsZCh0aGlzLmJveCwgdGhpcy5zaWduSW5fU2lnblVwX2JveC5yZW5kZXIoKSlcclxuICAgICAgICByZXR1cm4gdGhpcy5ib3hcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwXHJcbi8vYWRhZHNkYWRhIiwiaW1wb3J0IHsgQmFzZUlucHV0LCBCYXNlTGFiZWwgfSBmcm9tIFwiLi4vLi4vLi4vLi4vSmF2YXNjcmlwdC9iYXNlXCI7XHJcbmltcG9ydCB7IEFkZENoaWxkLCBOZXcsIFNldEF0dCwgdGFpbHdpbmRBZGQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vSmF2YXNjcmlwdC90b29sXCI7XHJcblxyXG5jbGFzcyBTZWFyY2hCYXIge1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLmJveCA9IE5ldygnZGl2JylcclxuICAgICAgICB0aGlzLlNlYXJjaEJhciA9IG5ldyBCYXNlSW5wdXQoJ3RleHQnLCAnc2VhcmNoQmFyJywgJ3NlYXJjaEJhcicpXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIHRoaXMuYm94U3R5bGUgPSBbJ3JlbGF0aXZlJywgJ3ctNjQnLCdtYXgtdy1mdWxsJ11cclxuICAgICAgICB0aGlzLlNlYXJjaEJhclN0eWxlID0gWyd3LWZ1bGwnLCAnYmctc2xhdGUtMjAwJywgJ3RleHQtd2hpdGUnLCAncm91bmRlZC1sZycsICdwbC00JywgJ2gtOCddXHJcblxyXG4gICAgICAgIFNldEF0dCh0aGlzLlNlYXJjaEJhci5pbnB1dCwgJ3BsYWNlaG9sZGVyJywgJ1NlYXJjaCcpXHJcblxyXG4gICAgICAgIHRhaWx3aW5kQWRkKHRoaXMuYm94U3R5bGUsIHRoaXMuYm94KVxyXG4gICAgICAgIHRhaWx3aW5kQWRkKHRoaXMuU2VhcmNoQmFyU3R5bGUsIHRoaXMuU2VhcmNoQmFyLmlucHV0KVxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgQWRkQ2hpbGQodGhpcy5ib3gsIHRoaXMuU2VhcmNoQmFyLnJlbmRlcigpKVxyXG4gICAgICAgIHJldHVybiB0aGlzLmJveFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hCYXIiLCJpbXBvcnQgeyBBZGRDaGlsZCwgTmV3LCBTZXRBdHQsIHRhaWx3aW5kQWRkIH0gZnJvbSBcIi4uLy4uLy4uL0phdmFzY3JpcHQvdG9vbFwiO1xyXG5pbXBvcnQgTG9nbyBmcm9tICcuLi8uLi8uLi9hc3NldC9pbWFnZS9Mb2dvLnBuZydcclxuaW1wb3J0IFNlYXJjaEJhciBmcm9tIFwiLi9TZWFyY2hCYXIvc2VhcmNoQmFyXCI7XHJcbmltcG9ydCBOdWxsQXZhdGFyIGZyb20gXCIuLi8uLi8uLi9hc3NldC9pbWFnZS9OdWxsIEF2YXRhci5qcGdcIlxyXG5cclxuY2xhc3MgSGVhZGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5ib3ggPSBOZXcoJ2RpdicpXHJcbiAgICAgICAgdGhpcy5pbWFnZSA9IE5ldygnaW1nJylcclxuICAgICAgICB0aGlzLmNoaWxkQm94ID0gTmV3KCdkaXYnKVxyXG4gICAgICAgIHRoaXMuc2V0dGluZ0J1dHRvbiA9IE5ldygnaW1nJylcclxuICAgICAgICB0aGlzLnNlYXJjaEJhciA9IG5ldyBTZWFyY2hCYXIoKVxyXG5cclxuICAgICAgICBTZXRBdHQodGhpcy5zZXR0aW5nQnV0dG9uLCAnc3JjJywgTnVsbEF2YXRhcilcclxuICAgICAgICBTZXRBdHQodGhpcy5pbWFnZSwgJ3NyYycsIExvZ28pXHJcbiAgICAgICAgQWRkQ2hpbGQodGhpcy5jaGlsZEJveCwgdGhpcy5zZWFyY2hCYXIucmVuZGVyKCkpXHJcbiAgICAgICAgQWRkQ2hpbGQodGhpcy5jaGlsZEJveCwgdGhpcy5zZXR0aW5nQnV0dG9uKVxyXG5cclxuICAgICAgICB0aGlzLmJveFN0eWxlID0gWyd3LWZ1bGwnLCAnaC0yMCcsICdib3JkZXInLCAnYm9yZGVyLWItZ3JheS0yMDAnLCAnZmxleCcsICdmbGV4LXJvdycsICdpdGVtcy1jZW50ZXInLCAnanVzdGlmeS1iZXR3ZWVuJywgJ2ZpeGVkJywgJ2JnLXdoaXRlJ11cclxuICAgICAgICB0aGlzLmltYWdlU3R5bGUgPSBbJ2gtMTQnLCAnbWwtNCddXHJcbiAgICAgICAgdGhpcy5zZXR0aW5nQnV0dG9uU3R5bGUgPSBbJ3ctMTInLCAnaC0xMicsICdib3JkZXItMicsICdib3JkZXItaW5kaWdvLTUwMC8xMDAnLCAncm91bmRlZCcsICdteC00J11cclxuICAgICAgICB0aGlzLmNoaWxkQm94U3R5bGUgPSBbJ2ZsZXgnLCAnZmxleC1yb3cnLCAnaXRlbXMtY2VudGVyJ11cclxuXHJcbiAgICAgICAgdGFpbHdpbmRBZGQodGhpcy5ib3hTdHlsZSwgdGhpcy5ib3gpXHJcbiAgICAgICAgdGFpbHdpbmRBZGQodGhpcy5pbWFnZVN0eWxlLCB0aGlzLmltYWdlKVxyXG4gICAgICAgIHRhaWx3aW5kQWRkKHRoaXMuc2V0dGluZ0J1dHRvblN0eWxlLCB0aGlzLnNldHRpbmdCdXR0b24pXHJcbiAgICAgICAgdGFpbHdpbmRBZGQodGhpcy5jaGlsZEJveFN0eWxlLCB0aGlzLmNoaWxkQm94KVxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgQWRkQ2hpbGQodGhpcy5ib3gsIHRoaXMuaW1hZ2UpXHJcbiAgICAgICAgQWRkQ2hpbGQodGhpcy5ib3gsIHRoaXMuY2hpbGRCb3gpXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYm94XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlciIsImltcG9ydCB7IEFkZENoaWxkLCBOZXcsIHRhaWx3aW5kQWRkIH0gZnJvbSBcIi4uLy4uL0phdmFzY3JpcHQvdG9vbFwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL2hlYWRlci9oZWFkZXJcIjtcclxuaW1wb3J0IE1haW5Db250ZW50IGZyb20gXCIuL21haW5Db250ZW50L21haW5Db250ZW50XCI7XHJcbmltcG9ydCBTaWRlQmFyTGVmdCBmcm9tIFwiLi9zaWRlQmFyTGVmdC9zaWRlQmFyTGVmdFwiO1xyXG5pbXBvcnQgU2lkZUJhclJpZ2h0IGZyb20gXCIuL3NpZGVCYXJSaWdodC9zaWRlQmFyUmlnaHRcIjtcclxuXHJcbmNsYXNzIE1haW4ge1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLmJveCA9IE5ldygnZGl2JylcclxuICAgICAgICB0aGlzLmhlYWRlciA9IG5ldyBIZWFkZXIoKTtcclxuICAgICAgICB0aGlzLnNpZGVCYXJMZWZ0ID0gbmV3IFNpZGVCYXJMZWZ0KCk7XHJcbiAgICAgICAgdGhpcy5zaWRlQmFyUmlnaHQgPSBuZXcgU2lkZUJhclJpZ2h0KCk7XHJcbiAgICAgICAgdGhpcy5tYWluQ29udGVudCA9IG5ldyBNYWluQ29udGVudCgpO1xyXG5cclxuICAgICAgICB0aGlzLmJveFN0eWxlID0gWyd3LWZ1bGwnLCAnZmxleCcsICdmbGV4LXJvdyddXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGFpbHdpbmRBZGQodGhpcy5ib3hTdHlsZSwgdGhpcy5ib3gpXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBBZGRDaGlsZCh0aGlzLmJveCwgdGhpcy5oZWFkZXIucmVuZGVyKCkpXHJcbiAgICAgICAgQWRkQ2hpbGQodGhpcy5ib3gsIHRoaXMuc2lkZUJhckxlZnQucmVuZGVyKCkpXHJcbiAgICAgICAgQWRkQ2hpbGQodGhpcy5ib3gsIHRoaXMubWFpbkNvbnRlbnQucmVuZGVyKCkpXHJcbiAgICAgICAgQWRkQ2hpbGQodGhpcy5ib3gsIHRoaXMuc2lkZUJhclJpZ2h0LnJlbmRlcigpKVxyXG4gICAgICAgIHJldHVybiB0aGlzLmJveFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluIiwiaW1wb3J0IHsgQWRkQ2hpbGQsIE5ldywgdGFpbHdpbmRBZGQgfSBmcm9tIFwiLi4vLi4vLi4vSmF2YXNjcmlwdC90b29sXCI7XHJcblxyXG5jbGFzcyBNYWluQ29udGVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMuYm94ID0gTmV3KCdkaXYnKVxyXG4gICAgICAgIHRoaXMuYm94LnRleHRDb250ZW50ID0gJ3NzcydcclxuICAgICAgICB0aGlzLmJveFN0eWxlID0gWydncm93JywgJ3NocmluaycsICdoLTEyOCcsICdtdC0yNCcsICdpbmxpbmUtYmxvY2snXVxyXG4gICAgICAgIHRhaWx3aW5kQWRkKHRoaXMuYm94U3R5bGUsIHRoaXMuYm94KVxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYm94XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5Db250ZW50IiwiaW1wb3J0IHsgQWRkQ2hpbGQsIEV2ZW50LCBOZXcsIFJlbW92ZUV2ZW50LCB0YWlsd2luZEFkZCwgdGFpbHdpbmRSZW1vdmUgfSBmcm9tIFwiLi4vLi4vLi4vLi4vSmF2YXNjcmlwdC90b29sXCI7XHJcblxyXG5jbGFzcyBBdmF0YXIge1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLmJveCA9IE5ldygnZGl2JylcclxuICAgICAgICB0aGlzLmF2YXRhciA9IE5ldygnaW1nJylcclxuICAgICAgICB0aGlzLnRpdGxlID0gTmV3KCdkaXYnKVxyXG4gICAgICAgIHRoaXMuZmlyc3RUaXRsZSA9IE5ldygncCcpXHJcbiAgICAgICAgdGhpcy5zZWNvbmRUaXRsZSA9IE5ldygncCcpXHJcblxyXG4gICAgICAgIHRoaXMuZmlyc3RUaXRsZS50ZXh0Q29udGVudCA9ICfEkMOgbyBEdXkgSMawbmcnXHJcbiAgICAgICAgdGhpcy5zZWNvbmRUaXRsZS50ZXh0Q29udGVudCA9ICdkYW9kdXlodW5nMDAwMEBnbWFpbC5jb20nXHJcbiAgICAgICAgdGhpcy5maXJzdFRpdGxlLnRpdGxlID0gdGhpcy5maXJzdFRpdGxlLnRleHRDb250ZW50XHJcbiAgICAgICAgdGhpcy5zZWNvbmRUaXRsZS50aXRsZSA9IHRoaXMuc2Vjb25kVGl0bGUudGV4dENvbnRlbnRcclxuXHJcbiAgICAgICAgdGhpcy5ib3hTdHlsZSA9IFsndy1mdWxsJywgJ2gtMTYnLCAnc2hhZG93LVswXzEwcHhfNTBweF9yZ2JhKDIzMCwyMzAsMjMwLDAuNSldJywgJ3JvdW5kZWQnICwgJ2ZsZXgnLCAnZmxleC1yb3cnLCAnaXRlbXMtY2VudGVyJywgJ2N1cnNvci1wb2ludGVyJ11cclxuICAgICAgICB0aGlzLmF2YXRhclN0eWxlID0gWyd3LTEyJywgJ2gtMTInLCAnYm9yZGVyJywgJ214LTQnLCAnZ3Jvdy0wJywgJ3Nocmluay0wJ11cclxuICAgICAgICB0aGlzLmZpcnN0VGl0bGVTdHlsZSA9IFsnZm9udC1zZW1pYm9sZCcsICd3LTQwJyAsICd0cnVuY2F0ZScsICdpbmxpbmUtYmxvY2snXVxyXG4gICAgICAgIHRoaXMuc2Vjb25kVGl0bGVTdHlsZSA9IFsndGV4dC14cycsICd0ZXh0LXNsYXRlLTQwMCcsICd3LTQwJyAsICd0cnVuY2F0ZScsICd0cmFja2luZy13aWRlc3QnXVxyXG4gICAgICAgIHRoaXMudGl0bGVTdHlsZSA9IFsnZ3JvdyddXHJcblxyXG4gICAgICAgIHRhaWx3aW5kQWRkKHRoaXMuYm94U3R5bGUsIHRoaXMuYm94KVxyXG4gICAgICAgIHRhaWx3aW5kQWRkKHRoaXMuYXZhdGFyU3R5bGUsIHRoaXMuYXZhdGFyKVxyXG4gICAgICAgIHRhaWx3aW5kQWRkKHRoaXMudGl0bGVTdHlsZSx0aGlzLnRpdGxlKVxyXG4gICAgICAgIHRhaWx3aW5kQWRkKHRoaXMuZmlyc3RUaXRsZVN0eWxlLCB0aGlzLmZpcnN0VGl0bGUpXHJcbiAgICAgICAgdGFpbHdpbmRBZGQodGhpcy5zZWNvbmRUaXRsZVN0eWxlLCB0aGlzLnNlY29uZFRpdGxlKVxyXG5cclxuICAgICAgICBFdmVudCgnbW91c2VlbnRlcicsIHRoaXMuYm94LCB0aGlzLm1vdXNlRW50ZXJIYW5kbGUuYmluZCh0aGlzKSlcclxuICAgICAgICBFdmVudCgnbW91c2VsZWF2ZScsIHRoaXMuYm94LCB0aGlzLm1vdXNlT3V0SGFuZGxlLmJpbmQodGhpcykpXHJcbiAgICB9XHJcbiAgICBtb3VzZUVudGVySGFuZGxlKGUpe1xyXG4gICAgICAgIHRhaWx3aW5kQWRkKFsnYmctc2xhdGUtMzAwJ10sIGUudGFyZ2V0KVxyXG4gICAgfVxyXG4gICAgbW91c2VPdXRIYW5kbGUoZSl7XHJcbiAgICAgICAgdGFpbHdpbmRSZW1vdmUoWydiZy1zbGF0ZS0zMDAnXSwgZS50YXJnZXQpXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBBZGRDaGlsZCh0aGlzLmJveCwgdGhpcy5hdmF0YXIpXHJcbiAgICAgICAgQWRkQ2hpbGQodGhpcy50aXRsZSwgdGhpcy5maXJzdFRpdGxlKVxyXG4gICAgICAgIEFkZENoaWxkKHRoaXMudGl0bGUsIHRoaXMuc2Vjb25kVGl0bGUpXHJcbiAgICAgICAgQWRkQ2hpbGQodGhpcy5ib3gsIHRoaXMudGl0bGUpXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYm94XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF2YXRhciIsImltcG9ydCB7IEFkZENoaWxkLCBOZXcsIHRhaWx3aW5kQWRkIH0gZnJvbSBcIi4uLy4uLy4uL0phdmFzY3JpcHQvdG9vbFwiO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gXCIuL0F2YXRhci9hdmF0YXJcIjtcclxuaW1wb3J0IFRvb2xCYXIgZnJvbSBcIi4vdG9vbEJhci90b29sQmFyXCI7XHJcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9zaWRlQmFyTGVmdC5tb2R1bGUuc2Nzc1wiXHJcbmNsYXNzIFNpZGVCYXJMZWZ0IHtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5ib3ggPSBOZXcoJ2RpdicpXHJcbiAgICAgICAgdGhpcy5jb250ZW50ID0gTmV3KCdkaXYnKVxyXG4gICAgICAgIHRoaXMuYXZhdGFyID0gbmV3IEF2YXRhcigpXHJcbiAgICAgICAgdGhpcy50b29sQmFyID0gbmV3IFRvb2xCYXIoKVxyXG4gICAgICAgIHRoaXMuYm94U3R5bGUgPSBbJ2dyb3ctMCcsJ3Nocmluay0wJywgJ2Jhc2lzLTcyJywnaW5saW5lLWJsb2NrJywgJ210LTI0J11cclxuICAgICAgICB0aGlzLmNvbnRlbnRTdHlsZSA9IFsndy03MicsICdmaXhlZCcsICdwbC00JywgU3R5bGUuc3BhY2luZ1NpZGVCYXIgLCAnb3ZlcmZsb3cteS1hdXRvJywgJ3otMTAnLCBTdHlsZS5zY3JvbGxTaWRlQmFyXVxyXG5cclxuICAgICAgICB0YWlsd2luZEFkZCh0aGlzLmJveFN0eWxlLCB0aGlzLmJveClcclxuICAgICAgICB0YWlsd2luZEFkZCh0aGlzLmNvbnRlbnRTdHlsZSwgdGhpcy5jb250ZW50KVxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgQWRkQ2hpbGQodGhpcy5ib3gsIHRoaXMuY29udGVudClcclxuICAgICAgICBBZGRDaGlsZCh0aGlzLmNvbnRlbnQsIHRoaXMuYXZhdGFyLnJlbmRlcigpKVxyXG4gICAgICAgIEFkZENoaWxkKHRoaXMuY29udGVudCwgdGhpcy50b29sQmFyLnJlbmRlcigpKVxyXG4gICAgICAgIHJldHVybiB0aGlzLmJveFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWRlQmFyTGVmdCIsImNvbnN0IGJveFN0eWxlID0gWydmbGV4JywgJ2ZsZXgtcm93JywgJ2l0ZW1zLWNlbnRlcicsICdwbC0yJywgJ3ctZnVsbCcsICdoLTE2J11cclxuY29uc3QgaWNvblN0eWxlID0gWydtbC00Jywndy02JywgJ2gtNiddXHJcbmNvbnN0IHRpdGxlU3R5bGUgPSBbJ21sLTYnLCAndGV4dC1iYXNlJywgJ2ZvbnQtYm9sZCcsICd0ZXh0LXNsYXRlLTYwMCcsICd0cmFja2luZy13aWRlJ11cclxuXHJcbmV4cG9ydCB7Ym94U3R5bGUsIGljb25TdHlsZSwgdGl0bGVTdHlsZX0iLCJpbXBvcnQgeyBTZXRBdHQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vSmF2YXNjcmlwdC90b29sXCI7XHJcbmltcG9ydCBQcm9maWxlIGZyb20gXCIuLi9wcm9maWxlL3Byb2ZpbGVcIjtcclxuaW1wb3J0IEljb24gZnJvbSAnLi4vLi4vLi4vLi4vLi4vYXNzZXQvaW1hZ2UvcGhvdG8ucG5nJztcclxuXHJcbmNsYXNzIFBob3RvcyBleHRlbmRzIFByb2ZpbGV7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKClcclxuICAgICAgICBTZXRBdHQodGhpcy5pY29uLCAnc3JjJywgSWNvbilcclxuICAgICAgICB0aGlzLnRpdGxlLnRleHRDb250ZW50ID0gJ1Bob3RvcydcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGhvdG9zIiwiaW1wb3J0IHsgU2V0QXR0IH0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL0phdmFzY3JpcHQvdG9vbFwiO1xyXG5pbXBvcnQgUHJvZmlsZSBmcm9tIFwiLi4vcHJvZmlsZS9wcm9maWxlXCI7XHJcbmltcG9ydCBJY29uIGZyb20gJy4uLy4uLy4uLy4uLy4uL2Fzc2V0L2ltYWdlL2ZyaWVuZHMucG5nJztcclxuXHJcbmNsYXNzIEZyaWVuZHMgZXh0ZW5kcyBQcm9maWxle1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpXHJcbiAgICAgICAgU2V0QXR0KHRoaXMuaWNvbiwgJ3NyYycsIEljb24pXHJcbiAgICAgICAgdGhpcy50aXRsZS50ZXh0Q29udGVudCA9ICdGcmllbmRzJ1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGcmllbmRzIiwiaW1wb3J0IHsgU2V0QXR0IH0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL0phdmFzY3JpcHQvdG9vbFwiO1xyXG5pbXBvcnQgUHJvZmlsZSBmcm9tIFwiLi4vcHJvZmlsZS9wcm9maWxlXCI7XHJcbmltcG9ydCBJY29uIGZyb20gJy4uLy4uLy4uLy4uLy4uL2Fzc2V0L2ltYWdlL2dyb3VwLnBuZyc7XHJcblxyXG5jbGFzcyBHcm91cHMgZXh0ZW5kcyBQcm9maWxle1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpXHJcbiAgICAgICAgU2V0QXR0KHRoaXMuaWNvbiwgJ3NyYycsIEljb24pXHJcbiAgICAgICAgdGhpcy50aXRsZS50ZXh0Q29udGVudCA9ICdHcm91cHMnXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdyb3VwcyIsImltcG9ydCB7IEFkZENoaWxkLCBTZXRBdHQsIE5ldywgdGFpbHdpbmRBZGQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vSmF2YXNjcmlwdC90b29sXCJcclxuaW1wb3J0IEljb24gZnJvbSAnLi4vLi4vLi4vLi4vLi4vYXNzZXQvaW1hZ2UvYWNjb3VudC5wbmcnXHJcbmltcG9ydCB7Ym94U3R5bGUsIGljb25TdHlsZSwgdGl0bGVTdHlsZX0gZnJvbSAnLi4vQnV0dG9uU3R5bGUnXHJcbmNsYXNzIFByb2ZpbGV7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMuYm94ID0gTmV3KCdkaXYnKVxyXG4gICAgICAgIHRoaXMuaWNvbiA9IE5ldygnaW1nJylcclxuICAgICAgICB0aGlzLnRpdGxlID0gTmV3KCdwJylcclxuXHJcbiAgICAgICAgU2V0QXR0KHRoaXMuaWNvbiwgJ3NyYycsIEljb24pXHJcbiAgICAgICAgdGhpcy50aXRsZS50ZXh0Q29udGVudCA9ICdQcm9maWxlJ1xyXG5cclxuICAgICAgICB0aGlzLmJveFN0eWxlID0gYm94U3R5bGVcclxuICAgICAgICB0aGlzLmljb25TdHlsZSA9IGljb25TdHlsZVxyXG4gICAgICAgIHRoaXMudGl0bGVTdHlsZSA9IHRpdGxlU3R5bGVcclxuICAgICAgICB0YWlsd2luZEFkZCh0aGlzLmJveFN0eWxlLCB0aGlzLmJveClcclxuICAgICAgICB0YWlsd2luZEFkZCh0aGlzLmljb25TdHlsZSwgdGhpcy5pY29uKVxyXG4gICAgICAgIHRhaWx3aW5kQWRkKHRoaXMudGl0bGVTdHlsZSwgdGhpcy50aXRsZSlcclxuICAgIH1cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIEFkZENoaWxkKHRoaXMuYm94LCB0aGlzLmljb24pXHJcbiAgICAgICAgQWRkQ2hpbGQodGhpcy5ib3gsIHRoaXMudGl0bGUpXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYm94XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGUiLCJpbXBvcnQgeyBTZXRBdHQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vSmF2YXNjcmlwdC90b29sXCI7XHJcbmltcG9ydCBQcm9maWxlIGZyb20gXCIuLi9wcm9maWxlL3Byb2ZpbGVcIjtcclxuaW1wb3J0IEljb24gZnJvbSAnLi4vLi4vLi4vLi4vLi4vYXNzZXQvaW1hZ2Uvc2F2ZS5wbmcnO1xyXG5cclxuY2xhc3MgU2F2ZSBleHRlbmRzIFByb2ZpbGV7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKClcclxuICAgICAgICBTZXRBdHQodGhpcy5pY29uLCAnc3JjJywgSWNvbilcclxuICAgICAgICB0aGlzLnRpdGxlLnRleHRDb250ZW50ID0gJ1NhdmVkJ1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTYXZlIiwiaW1wb3J0IHsgQWRkQ2hpbGQsIE5ldywgdGFpbHdpbmRBZGQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vSmF2YXNjcmlwdC90b29sXCI7XHJcbmltcG9ydCBTYXZlIGZyb20gXCIuL3NhdmUvc2F2ZVwiO1xyXG5pbXBvcnQgRnJpZW5kcyBmcm9tIFwiLi9mcmllbmRzL2ZyaWVuZHNcIjtcclxuaW1wb3J0IEdyb3VwcyBmcm9tIFwiLi9ncm91cHMvZ3JvdXBzXCI7XHJcbmltcG9ydCBQaG90b3MgZnJvbSBcIi4vUGhvdG9zL3Bob3Rvc1wiO1xyXG5pbXBvcnQgUHJvZmlsZSBmcm9tIFwiLi9wcm9maWxlL3Byb2ZpbGVcIjtcclxuXHJcbmNsYXNzIFRvb2xCYXIge1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLmJveCA9IE5ldygnZGl2JylcclxuICAgICAgICB0aGlzLnByb2ZpbGUgPSBuZXcgUHJvZmlsZSgpXHJcbiAgICAgICAgdGhpcy5mcmllbmRzID0gbmV3IEZyaWVuZHMoKVxyXG4gICAgICAgIHRoaXMucGhvdG9zID0gbmV3IFBob3RvcygpXHJcbiAgICAgICAgdGhpcy5ncm91cHMgPSBuZXcgR3JvdXBzKClcclxuICAgICAgICB0aGlzLnNhdmVkID0gbmV3IFNhdmUoKVxyXG4gICAgICAgIHRoaXMuYm94U3R5bGUgPSBbJ2ZsZXgnLCAnZmxleC1jb2wnLCAndy1mdWxsJywgJ210LTYnLCAnc2hhZG93LVswXzBfMjBweF9yZ2JhKDIzMCwyMzAsMjMwLDAuNSldJywgJ3JvdW5kZWQtbGcnXVxyXG5cclxuICAgICAgICB0YWlsd2luZEFkZCh0aGlzLmJveFN0eWxlLCB0aGlzLmJveClcclxuICAgIH1cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIEFkZENoaWxkKHRoaXMuYm94LCB0aGlzLnByb2ZpbGUucmVuZGVyKCkpXHJcbiAgICAgICAgQWRkQ2hpbGQodGhpcy5ib3gsIHRoaXMuZnJpZW5kcy5yZW5kZXIoKSlcclxuICAgICAgICBBZGRDaGlsZCh0aGlzLmJveCwgdGhpcy5waG90b3MucmVuZGVyKCkpXHJcbiAgICAgICAgQWRkQ2hpbGQodGhpcy5ib3gsIHRoaXMuZ3JvdXBzLnJlbmRlcigpKVxyXG4gICAgICAgIEFkZENoaWxkKHRoaXMuYm94LCB0aGlzLnNhdmVkLnJlbmRlcigpKVxyXG4gICAgICAgIHJldHVybiB0aGlzLmJveFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb29sQmFyIiwiaW1wb3J0IHsgQWRkQ2hpbGQsIE5ldywgdGFpbHdpbmRBZGQgfSBmcm9tIFwiLi4vLi4vLi4vSmF2YXNjcmlwdC90b29sXCI7XHJcblxyXG5jbGFzcyBTaWRlQmFyUmlnaHQge1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLmJveCA9IE5ldygnZGl2JylcclxuICAgICAgICB0aGlzLmNvbnRlbnQgPSBOZXcoJ2RpdicpXHJcblxyXG4gICAgICAgIHRoaXMuYm94U3R5bGUgPSBbJ2dyb3ctMCcsJ3Nocmluay0wJywgJ2Jhc2lzLTcyJywgJ2lubGluZS1ibG9jaycsICdtdC0yNCddXHJcbiAgICAgICAgdGhpcy5jb250ZW50U3R5bGUgPSBbJ3ctNzInLCAncHItNCcsICdmaXhlZCcsICdyaWdodC0wJyAsJ3otMTAnXVxyXG5cclxuICAgICAgICB0YWlsd2luZEFkZCh0aGlzLmJveFN0eWxlLCB0aGlzLmJveClcclxuICAgICAgICB0YWlsd2luZEFkZCh0aGlzLmNvbnRlbnRTdHlsZSwgdGhpcy5jb250ZW50KVxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgQWRkQ2hpbGQodGhpcy5ib3gsIHRoaXMuY29udGVudClcclxuICAgICAgICByZXR1cm4gdGhpcy5ib3hcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lkZUJhclJpZ2h0IiwiaW1wb3J0IHsgTmV3LCBTZXRBdHQsIHRhaWx3aW5kQWRkIH0gZnJvbSBcIi4uLy4uL0phdmFzY3JpcHQvdG9vbFwiO1xyXG5cclxuXHJcbmNsYXNzIFNpZ25JbkFuZFNpZ25VcCB7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMuYm94ID0gTmV3KCdkaXYnKVxyXG5cclxuICAgICAgICB0aGlzLmJveFN0eWxlID0gWyd3LTQvNScsICdoLTk2JywgJ2JvcmRlcicsICdib3JkZXItYmxhY2snLCAncmVsYXRpdmUnLCAnaW5zZXQtMS8yJywgJy10cmFuc2xhdGUteS0xLzInLCAnLXRyYW5zbGF0ZS14LTEvMiddIFxyXG5cclxuICAgICAgICB0YWlsd2luZEFkZCh0aGlzLmJveFN0eWxlLCB0aGlzLmJveClcclxuICAgIH1cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJveFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWduSW5BbmRTaWduVXAiLCJpbXBvcnQgJ3RhaWx3aW5kY3NzL3RhaWx3aW5kLmNzcydcclxuaW1wb3J0IHsgQWRkQ2hpbGQsIEVsZW1lbnQgfSBmcm9tICcuL0phdmFzY3JpcHQvdG9vbCdcclxuaW1wb3J0IEFwcCBmcm9tICcuL2FwcCdcclxuXHJcbmxldCBjdXJyZW50QXBwID0gbmV3IEFwcCgpO1xyXG4oKCk9PntcclxuICAgIEFkZENoaWxkKEVsZW1lbnQoJyNyb290JyksIGN1cnJlbnRBcHAucmVuZGVyKCkpXHJcbn0pKClcclxuZXhwb3J0IGRlZmF1bHQgY3VycmVudEFwcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==