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
___CSS_LOADER_EXPORT___.push([module.id, "/*\n! tailwindcss v3.0.2 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */ /* 3 */\n  tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr[title] {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse;  /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;  /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/*\nEnsure the default browser behavior of the `hidden` attribute.\n*/\n\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-border-opacity: 1;\n  border-color: rgb(229 231 235 / var(--tw-border-opacity));\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n}\n\n.fixed {\n  position: fixed;\n}\n\n.relative {\n  position: relative;\n}\n\n.right-0 {\n  right: 0px;\n}\n\n.z-10 {\n  z-index: 10;\n}\n\n.mx-4 {\n  margin-left: 1rem;\n  margin-right: 1rem;\n}\n\n.ml-4 {\n  margin-left: 1rem;\n}\n\n.mt-24 {\n  margin-top: 6rem;\n}\n\n.ml-6 {\n  margin-left: 1.5rem;\n}\n\n.mt-6 {\n  margin-top: 1.5rem;\n}\n\n.inline-block {\n  display: inline-block;\n}\n\n.flex {\n  display: flex;\n}\n\n.h-screen {\n  height: 100vh;\n}\n\n.h-20 {\n  height: 5rem;\n}\n\n.h-14 {\n  height: 3.5rem;\n}\n\n.h-12 {\n  height: 3rem;\n}\n\n.h-128 {\n  height: 32rem;\n}\n\n.h-8 {\n  height: 2rem;\n}\n\n.h-16 {\n  height: 4rem;\n}\n\n.h-6 {\n  height: 1.5rem;\n}\n\n.w-full {\n  width: 100%;\n}\n\n.w-12 {\n  width: 3rem;\n}\n\n.w-72 {\n  width: 18rem;\n}\n\n.w-64 {\n  width: 16rem;\n}\n\n.w-40 {\n  width: 10rem;\n}\n\n.w-6 {\n  width: 1.5rem;\n}\n\n.max-w-full {\n  max-width: 100%;\n}\n\n.shrink {\n  flex-shrink: 1;\n}\n\n.shrink-0 {\n  flex-shrink: 0;\n}\n\n.grow {\n  flex-grow: 1;\n}\n\n.grow-0 {\n  flex-grow: 0;\n}\n\n.basis-72 {\n  flex-basis: 18rem;\n}\n\n.cursor-pointer {\n  cursor: pointer;\n}\n\n.flex-row {\n  flex-direction: row;\n}\n\n.flex-col {\n  flex-direction: column;\n}\n\n.items-center {\n  align-items: center;\n}\n\n.justify-between {\n  justify-content: space-between;\n}\n\n.overflow-y-auto {\n  overflow-y: auto;\n}\n\n.truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.rounded {\n  border-radius: 0.25rem;\n}\n\n.rounded-lg {\n  border-radius: 0.5rem;\n}\n\n.border {\n  border-width: 1px;\n}\n\n.border-2 {\n  border-width: 2px;\n}\n\n.border-indigo-500\\/100 {\n  border-color: rgb(99 102 241 / 1);\n}\n\n.border-b-gray-200 {\n  --tw-border-opacity: 1;\n  border-bottom-color: rgb(229 231 235 / var(--tw-border-opacity));\n}\n\n.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\n\n.bg-slate-200 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(226 232 240 / var(--tw-bg-opacity));\n}\n\n.bg-slate-300 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(203 213 225 / var(--tw-bg-opacity));\n}\n\n.pl-4 {\n  padding-left: 1rem;\n}\n\n.pr-4 {\n  padding-right: 1rem;\n}\n\n.pl-2 {\n  padding-left: 0.5rem;\n}\n\n.text-xs {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n\n.text-base {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n\n.font-semibold {\n  font-weight: 600;\n}\n\n.font-bold {\n  font-weight: 700;\n}\n\n.tracking-widest {\n  letter-spacing: 0.1em;\n}\n\n.tracking-wide {\n  letter-spacing: 0.025em;\n}\n\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n\n.text-slate-400 {\n  --tw-text-opacity: 1;\n  color: rgb(148 163 184 / var(--tw-text-opacity));\n}\n\n.text-slate-600 {\n  --tw-text-opacity: 1;\n  color: rgb(71 85 105 / var(--tw-text-opacity));\n}\n\n.shadow-\\[0_10px_50px_rgba\\(230\\2c 230\\2c 230\\2c 0\\.5\\)\\] {\n  --tw-shadow: 0 10px 50px rgba(230,230,230,0.5);\n  --tw-shadow-colored: 0 10px 50px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.shadow-\\[0_0_20px_rgba\\(230\\2c 230\\2c 230\\2c 0\\.5\\)\\] {\n  --tw-shadow: 0 0 20px rgba(230,230,230,0.5);\n  --tw-shadow-colored: 0 0 20px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n", "",{"version":3,"sources":["webpack://./node_modules/tailwindcss/tailwind.css","webpack://./node_modules/tailwindcss/%3Cinput%20css%20tVoGmL%3E","<no source>"],"names":[],"mappings":"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EJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA,iBAAA;EAAA,wBAAA;EAAA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA,uBAAA;EAAA;AFImB;;AAAnB;EEJA,mBAAA;EAAA;AFImB;;AAAnB;EEJA,mBAAA;EAAA;AFImB;;AAAnB;EEJA,mBAAA;EAAA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA,mBAAA;EAAA;AFImB;;AAAnB;EEJA,gBAAA;EAAA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA;AFImB;;AAAnB;EEJA,qBAAA;EAAA;AFImB;;AAAnB;EEJA,qBAAA;EAAA;AFImB;;AAAnB;EEJA,qBAAA;EAAA;AFImB;;AAAnB;EEJA,+CAAA;EAAA,wDAAA;EAAA;AFImB;;AAAnB;EEJA,4CAAA;EAAA,qDAAA;EAAA;AFImB","sourcesContent":["@tailwind base;\n\n@tailwind components;\n\n@tailwind utilities;\n","/*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  tab-size: 4; /* 3 */\n  font-family: theme('fontFamily.sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"); /* 4 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr[title] {\n  text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: theme('fontFamily.mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace); /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse;  /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;  /* 1 */\n  color: theme('colors.gray.400', #9ca3af); /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/*\nEnsure the default browser behavior of the `hidden` attribute.\n*/\n\n[hidden] {\n  display: none;\n}\n",null],"sourceRoot":""}]);
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
/* harmony import */ var _components_SignIn_SignUp_LogIn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/SignIn&SignUp/LogIn */ "./src/components/SignIn&SignUp/LogIn.js");




class App {
    constructor(){
        this.box = (0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_1__.New)('div')
        this.signIn_SignUp_box = new _components_SignIn_SignUp_LogIn__WEBPACK_IMPORTED_MODULE_2__["default"]()
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

/***/ "./src/components/SignIn&SignUp/LogIn.js":
/*!***********************************************!*\
  !*** ./src/components/SignIn&SignUp/LogIn.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Javascript_tool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Javascript/tool */ "./src/Javascript/tool.js");



class SignInAndSignUp {
    constructor(){
        this.box = (0,_Javascript_tool__WEBPACK_IMPORTED_MODULE_0__.New)('div')
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLFdBQVcsT0FBTyxRQUFRLE1BQU0sS0FBSyxxQkFBcUIsdUJBQXVCLHVCQUF1QixRQUFRLFFBQVEsTUFBTSxTQUFTLHVCQUF1QixxQkFBcUIsdUJBQXVCLHFCQUFxQixxQkFBcUIscUJBQXFCLE9BQU8sTUFBTSxNQUFNLE1BQU0sYUFBYSxPQUFPLE9BQU8sTUFBTSxRQUFRLHVCQUF1Qix1QkFBdUIsdUJBQXVCLFFBQVEsTUFBTSxNQUFNLEtBQUssV0FBVyxPQUFPLE1BQU0sTUFBTSxLQUFLLGFBQWEsT0FBTyxNQUFNLE1BQU0sS0FBSyxhQUFhLE9BQU8sTUFBTSxNQUFNLE1BQU0sV0FBVyxPQUFPLE9BQU8sTUFBTSxLQUFLLHVCQUF1Qix1QkFBdUIsUUFBUSxNQUFNLE1BQU0sS0FBSyxhQUFhLE9BQU8sT0FBTyxNQUFNLEtBQUssdUJBQXVCLHFCQUFxQixPQUFPLE1BQU0sTUFBTSxLQUFLLGFBQWEsT0FBTyxNQUFNLE1BQU0saUJBQWlCLFdBQVcsT0FBTyxLQUFLLFdBQVcsVUFBVSxPQUFPLEtBQUssV0FBVyxPQUFPLE9BQU8sYUFBYSxXQUFXLFVBQVUsT0FBTyxNQUFNLE1BQU0sS0FBSyxhQUFhLE9BQU8sT0FBTyxNQUFNLE1BQU0scUJBQXFCLHNCQUFzQixRQUFRLE1BQU0sTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLEtBQUssS0FBSyxXQUFXLE9BQU8sUUFBUSxNQUFNLFlBQVkscUJBQXFCLHVCQUF1QixRQUFRLE1BQU0sTUFBTSxNQUFNLFdBQVcsVUFBVSxPQUFPLE1BQU0sTUFBTSxLQUFLLFdBQVcsT0FBTyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sS0FBSyxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxXQUFXLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLFdBQVcsV0FBVyxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxXQUFXLEtBQUssT0FBTyxNQUFNLFdBQVcsS0FBSyxPQUFPLE1BQU0sV0FBVyxLQUFLLE9BQU8sTUFBTSxXQUFXLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLFdBQVcsS0FBSyxPQUFPLE1BQU0sV0FBVyxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxXQUFXLEtBQUssT0FBTyxNQUFNLFdBQVcsS0FBSyxPQUFPLE1BQU0sV0FBVyxLQUFLLE9BQU8sTUFBTSxXQUFXLFdBQVcsS0FBSyxPQUFPLE1BQU0sV0FBVyxXQUFXLEtBQUsseUNBQXlDLHlCQUF5Qix3QkFBd0IsaVJBQWlSLDRCQUE0Qiw0QkFBNEIsZ0NBQWdDLHVDQUF1QyxVQUFVLHdC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RDtBQUNBLG1CQUFtQix3REFBTztBQUMxQjtBQUNBO0FBQ0EsUUFBUSx5REFBTSxtQkFBbUIsa0RBQUk7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaMEQ7QUFDMUM7QUFDUztBQUNIO0FBQ0E7QUFDRztBQUN4QztBQUNBO0FBQ0E7QUFDQSxtQkFBbUIscURBQUc7QUFDdEIsMkJBQTJCLHdEQUFPO0FBQ2xDLDJCQUEyQix3REFBTztBQUNsQywwQkFBMEIsc0RBQU07QUFDaEMsMEJBQTBCLHNEQUFNO0FBQ2hDLHlCQUF5QixrREFBSTtBQUM3QjtBQUNBO0FBQ0EsUUFBUSw4REFBVztBQUNuQjtBQUNBO0FBQ0EsUUFBUSwwREFBUTtBQUNoQixRQUFRLDJEQUFRO0FBQ2hCLFFBQVEsMkRBQVE7QUFDaEIsUUFBUSwyREFBUTtBQUNoQixRQUFRLDJEQUFRO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWU7Ozs7Ozs7Ozs7Ozs7OztBQzdCdUQ7QUFDdEU7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHFEQUFHO0FBQ3RCLHVCQUF1QixxREFBRztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsOERBQVc7QUFDbkIsUUFBUSw4REFBVztBQUNuQjtBQUNBO0FBQ0EsUUFBUSwwREFBUTtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7QUNuQnFDO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHFEQUFHO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1prQjtBQUNvQjtBQUM5QjtBQUN2QjtBQUNBLHFCQUFxQiw0Q0FBRztBQUN4QjtBQUNBLElBQUksMERBQVEsQ0FBQyx5REFBTztBQUNwQixDQUFDO0FBQ0QsaUVBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zb2NhaWwtbmV0d29yay8uL25vZGVfbW9kdWxlcy90YWlsd2luZGNzcy90YWlsd2luZC5jc3MiLCJ3ZWJwYWNrOi8vc29jYWlsLW5ldHdvcmsvLi9zcmMvY29tcG9uZW50cy9NYWluL3NpZGVCYXJMZWZ0L3NpZGVCYXJMZWZ0Lm1vZHVsZS5zY3NzIiwid2VicGFjazovL3NvY2FpbC1uZXR3b3JrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9zb2NhaWwtbmV0d29yay8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3NvY2FpbC1uZXR3b3JrLy4vbm9kZV9tb2R1bGVzL3RhaWx3aW5kY3NzL3RhaWx3aW5kLmNzcz9mYmI5Iiwid2VicGFjazovL3NvY2FpbC1uZXR3b3JrLy4vc3JjL2NvbXBvbmVudHMvTWFpbi9zaWRlQmFyTGVmdC9zaWRlQmFyTGVmdC5tb2R1bGUuc2Nzcz84MDc2Iiwid2VicGFjazovL3NvY2FpbC1uZXR3b3JrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3NvY2FpbC1uZXR3b3JrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9zb2NhaWwtbmV0d29yay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9zb2NhaWwtbmV0d29yay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9zb2NhaWwtbmV0d29yay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3NvY2FpbC1uZXR3b3JrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vc29jYWlsLW5ldHdvcmsvLi9zcmMvSmF2YXNjcmlwdC9iYXNlLmpzIiwid2VicGFjazovL3NvY2FpbC1uZXR3b3JrLy4vc3JjL0phdmFzY3JpcHQvdG9vbC5qcyIsIndlYnBhY2s6Ly9zb2NhaWwtbmV0d29yay8uL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vc29jYWlsLW5ldHdvcmsvLi9zcmMvY29tcG9uZW50cy9NYWluL2hlYWRlci9TZWFyY2hCYXIvc2VhcmNoQmFyLmpzIiwid2VicGFjazovL3NvY2FpbC1uZXR3b3JrLy4vc3JjL2NvbXBvbmVudHMvTWFpbi9oZWFkZXIvaGVhZGVyLmpzIiwid2VicGFjazovL3NvY2FpbC1uZXR3b3JrLy4vc3JjL2NvbXBvbmVudHMvTWFpbi9tYWluLmpzIiwid2VicGFjazovL3NvY2FpbC1uZXR3b3JrLy4vc3JjL2NvbXBvbmVudHMvTWFpbi9tYWluQ29udGVudC9tYWluQ29udGVudC5qcyIsIndlYnBhY2s6Ly9zb2NhaWwtbmV0d29yay8uL3NyYy9jb21wb25lbnRzL01haW4vc2lkZUJhckxlZnQvQXZhdGFyL2F2YXRhci5qcyIsIndlYnBhY2s6Ly9zb2NhaWwtbmV0d29yay8uL3NyYy9jb21wb25lbnRzL01haW4vc2lkZUJhckxlZnQvc2lkZUJhckxlZnQuanMiLCJ3ZWJwYWNrOi8vc29jYWlsLW5ldHdvcmsvLi9zcmMvY29tcG9uZW50cy9NYWluL3NpZGVCYXJMZWZ0L3Rvb2xCYXIvQnV0dG9uU3R5bGUuanMiLCJ3ZWJwYWNrOi8vc29jYWlsLW5ldHdvcmsvLi9zcmMvY29tcG9uZW50cy9NYWluL3NpZGVCYXJMZWZ0L3Rvb2xCYXIvUGhvdG9zL3Bob3Rvcy5qcyIsIndlYnBhY2s6Ly9zb2NhaWwtbmV0d29yay8uL3NyYy9jb21wb25lbnRzL01haW4vc2lkZUJhckxlZnQvdG9vbEJhci9mcmllbmRzL2ZyaWVuZHMuanMiLCJ3ZWJwYWNrOi8vc29jYWlsLW5ldHdvcmsvLi9zcmMvY29tcG9uZW50cy9NYWluL3NpZGVCYXJMZWZ0L3Rvb2xCYXIvZ3JvdXBzL2dyb3Vwcy5qcyIsIndlYnBhY2s6Ly9zb2NhaWwtbmV0d29yay8uL3NyYy9jb21wb25lbnRzL01haW4vc2lkZUJhckxlZnQvdG9vbEJhci9wcm9maWxlL3Byb2ZpbGUuanMiLCJ3ZWJwYWNrOi8vc29jYWlsLW5ldHdvcmsvLi9zcmMvY29tcG9uZW50cy9NYWluL3NpZGVCYXJMZWZ0L3Rvb2xCYXIvc2F2ZS9zYXZlLmpzIiwid2VicGFjazovL3NvY2FpbC1uZXR3b3JrLy4vc3JjL2NvbXBvbmVudHMvTWFpbi9zaWRlQmFyTGVmdC90b29sQmFyL3Rvb2xCYXIuanMiLCJ3ZWJwYWNrOi8vc29jYWlsLW5ldHdvcmsvLi9zcmMvY29tcG9uZW50cy9NYWluL3NpZGVCYXJSaWdodC9zaWRlQmFyUmlnaHQuanMiLCJ3ZWJwYWNrOi8vc29jYWlsLW5ldHdvcmsvLi9zcmMvY29tcG9uZW50cy9TaWduSW4mU2lnblVwL0xvZ0luLmpzIiwid2VicGFjazovL3NvY2FpbC1uZXR3b3JrLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qXFxuISB0YWlsd2luZGNzcyB2My4wLjIgfCBNSVQgTGljZW5zZSB8IGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tXFxuKi8vKlxcbjEuIFByZXZlbnQgcGFkZGluZyBhbmQgYm9yZGVyIGZyb20gYWZmZWN0aW5nIGVsZW1lbnQgd2lkdGguIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzQpXFxuMi4gQWxsb3cgYWRkaW5nIGEgYm9yZGVyIHRvIGFuIGVsZW1lbnQgYnkganVzdCBhZGRpbmcgYSBib3JkZXItd2lkdGguIChodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRjc3MvdGFpbHdpbmRjc3MvcHVsbC8xMTYpXFxuKi9cXG5cXG4qLFxcbjo6YmVmb3JlLFxcbjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgYm9yZGVyLXdpZHRoOiAwOyAvKiAyICovXFxuICBib3JkZXItc3R5bGU6IHNvbGlkOyAvKiAyICovXFxuICBib3JkZXItY29sb3I6IGN1cnJlbnRDb2xvcjsgLyogMiAqL1xcbn1cXG5cXG46OmJlZm9yZSxcXG46OmFmdGVyIHtcXG4gIC0tdHctY29udGVudDogJyc7XFxufVxcblxcbi8qXFxuMS4gVXNlIGEgY29uc2lzdGVudCBzZW5zaWJsZSBsaW5lLWhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuMy4gVXNlIGEgbW9yZSByZWFkYWJsZSB0YWIgc2l6ZS5cXG40LiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIGBzYW5zYCBmb250LWZhbWlseSBieSBkZWZhdWx0LlxcbiovXFxuXFxuaHRtbCB7XFxuICBsaW5lLWhlaWdodDogMS41OyAvKiAxICovXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi8gLyogMyAqL1xcbiAgdGFiLXNpemU6IDQ7IC8qIDMgKi9cXG4gIGZvbnQtZmFtaWx5OiB1aS1zYW5zLXNlcmlmLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBBcmlhbCwgXFxcIk5vdG8gU2Fuc1xcXCIsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiLCBcXFwiTm90byBDb2xvciBFbW9qaVxcXCI7IC8qIDQgKi9cXG59XFxuXFxuLypcXG4xLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxuMi4gSW5oZXJpdCBsaW5lLWhlaWdodCBmcm9tIGBodG1sYCBzbyB1c2VycyBjYW4gc2V0IHRoZW0gYXMgYSBjbGFzcyBkaXJlY3RseSBvbiB0aGUgYGh0bWxgIGVsZW1lbnQuXFxuKi9cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDsgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLypcXG4xLiBBZGQgdGhlIGNvcnJlY3QgaGVpZ2h0IGluIEZpcmVmb3guXFxuMi4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2Ugb2YgYm9yZGVyIGNvbG9yIGluIEZpcmVmb3guIChodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTA2NTUpXFxuMy4gRW5zdXJlIGhvcml6b250YWwgcnVsZXMgYXJlIHZpc2libGUgYnkgZGVmYXVsdC5cXG4qL1xcblxcbmhyIHtcXG4gIGhlaWdodDogMDsgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIGJvcmRlci10b3Atd2lkdGg6IDFweDsgLyogMyAqL1xcbn1cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiovXFxuXFxuYWJiclt0aXRsZV0ge1xcbiAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XFxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcXG59XFxuXFxuLypcXG5SZW1vdmUgdGhlIGRlZmF1bHQgZm9udCBzaXplIGFuZCB3ZWlnaHQgZm9yIGhlYWRpbmdzLlxcbiovXFxuXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYge1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XFxufVxcblxcbi8qXFxuUmVzZXQgbGlua3MgdG8gb3B0aW1pemUgZm9yIG9wdC1pbiBzdHlsaW5nIGluc3RlYWQgb2Ygb3B0LW91dC5cXG4qL1xcblxcbmEge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XFxufVxcblxcbi8qXFxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIEVkZ2UgYW5kIFNhZmFyaS5cXG4qL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qXFxuMS4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBgbW9ub2AgZm9udCBmYW1pbHkgYnkgZGVmYXVsdC5cXG4yLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5jb2RlLFxcbmtiZCxcXG5zYW1wLFxcbnByZSB7XFxuICBmb250LWZhbWlseTogdWktbW9ub3NwYWNlLCBTRk1vbm8tUmVndWxhciwgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsIFxcXCJMaWJlcmF0aW9uIE1vbm9cXFwiLCBcXFwiQ291cmllciBOZXdcXFwiLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qXFxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5zbWFsbCB7XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLypcXG5QcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuc3ViLFxcbnN1cCB7XFxuICBmb250LXNpemU6IDc1JTtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5zdWIge1xcbiAgYm90dG9tOiAtMC4yNWVtO1xcbn1cXG5cXG5zdXAge1xcbiAgdG9wOiAtMC41ZW07XFxufVxcblxcbi8qXFxuMS4gUmVtb3ZlIHRleHQgaW5kZW50YXRpb24gZnJvbSB0YWJsZSBjb250ZW50cyBpbiBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTk5OTA4OCwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTIwMTI5NylcXG4yLiBDb3JyZWN0IHRhYmxlIGJvcmRlciBjb2xvciBpbmhlcml0YW5jZSBpbiBhbGwgQ2hyb21lIGFuZCBTYWZhcmkuIChodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05MzU3MjksIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTUwMTYpXFxuMy4gUmVtb3ZlIGdhcHMgYmV0d2VlbiB0YWJsZSBib3JkZXJzIGJ5IGRlZmF1bHQuXFxuKi9cXG5cXG50YWJsZSB7XFxuICB0ZXh0LWluZGVudDogMDsgLyogMSAqL1xcbiAgYm9yZGVyLWNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyAgLyogMyAqL1xcbn1cXG5cXG4vKlxcbjEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcbjIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4zLiBSZW1vdmUgZGVmYXVsdCBwYWRkaW5nIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAxICovXFxuICBtYXJnaW46IDA7IC8qIDIgKi9cXG4gIHBhZGRpbmc6IDA7IC8qIDMgKi9cXG59XFxuXFxuLypcXG5SZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UgYW5kIEZpcmVmb3guXFxuKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHtcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKlxcbjEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuMi4gUmVtb3ZlIGRlZmF1bHQgYnV0dG9uIHN0eWxlcy5cXG4qL1xcblxcbmJ1dHRvbixcXG5bdHlwZT0nYnV0dG9uJ10sXFxuW3R5cGU9J3Jlc2V0J10sXFxuW3R5cGU9J3N1Ym1pdCddIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgLyogMiAqL1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTsgLyogMiAqL1xcbn1cXG5cXG4vKlxcblVzZSB0aGUgbW9kZXJuIEZpcmVmb3ggZm9jdXMgc3R5bGUgZm9yIGFsbCBmb2N1c2FibGUgZWxlbWVudHMuXFxuKi9cXG5cXG46LW1vei1mb2N1c3Jpbmcge1xcbiAgb3V0bGluZTogYXV0bztcXG59XFxuXFxuLypcXG5SZW1vdmUgdGhlIGFkZGl0aW9uYWwgYDppbnZhbGlkYCBzdHlsZXMgaW4gRmlyZWZveC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL2dlY2tvLWRldi9ibG9iLzJmOWVhY2Q5ZDNkOTk1YzkzN2I0MjUxYTU1NTdkOTVkNDk0YzliZTEvbGF5b3V0L3N0eWxlL3Jlcy9mb3Jtcy5jc3MjTDcyOC1MNzM3KVxcbiovXFxuXFxuOi1tb3otdWktaW52YWxpZCB7XFxuICBib3gtc2hhZG93OiBub25lO1xcbn1cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lIGFuZCBGaXJlZm94LlxcbiovXFxuXFxucHJvZ3Jlc3Mge1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKlxcbkNvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIFNhZmFyaS5cXG4qL1xcblxcbjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG46Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKlxcbjEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcbjIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiovXFxuXFxuW3R5cGU9J3NlYXJjaCddIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xcbn1cXG5cXG4vKlxcblJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXG4qL1xcblxcbjo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qXFxuMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4yLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxuKi9cXG5cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXFxuICBmb250OiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qXFxuQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuKi9cXG5cXG5zdW1tYXJ5IHtcXG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcXG59XFxuXFxuLypcXG5SZW1vdmVzIHRoZSBkZWZhdWx0IHNwYWNpbmcgYW5kIGJvcmRlciBmb3IgYXBwcm9wcmlhdGUgZWxlbWVudHMuXFxuKi9cXG5cXG5ibG9ja3F1b3RlLFxcbmRsLFxcbmRkLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbmhyLFxcbmZpZ3VyZSxcXG5wLFxcbnByZSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmZpZWxkc2V0IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmxlZ2VuZCB7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5vbCxcXG51bCxcXG5tZW51IHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKlxcblByZXZlbnQgcmVzaXppbmcgdGV4dGFyZWFzIGhvcml6b250YWxseSBieSBkZWZhdWx0LlxcbiovXFxuXFxudGV4dGFyZWEge1xcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcXG59XFxuXFxuLypcXG4xLiBSZXNldCB0aGUgZGVmYXVsdCBwbGFjZWhvbGRlciBvcGFjaXR5IGluIEZpcmVmb3guIChodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRsYWJzL3RhaWx3aW5kY3NzL2lzc3Vlcy8zMzAwKVxcbjIuIFNldCB0aGUgZGVmYXVsdCBwbGFjZWhvbGRlciBjb2xvciB0byB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgZ3JheSA0MDAgY29sb3IuXFxuKi9cXG5cXG5pbnB1dDo6cGxhY2Vob2xkZXIsXFxudGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcXG4gIG9wYWNpdHk6IDE7ICAvKiAxICovXFxuICBjb2xvcjogIzljYTNhZjsgLyogMiAqL1xcbn1cXG5cXG4vKlxcblNldCB0aGUgZGVmYXVsdCBjdXJzb3IgZm9yIGJ1dHRvbnMuXFxuKi9cXG5cXG5idXR0b24sXFxuW3JvbGU9XFxcImJ1dHRvblxcXCJdIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLypcXG5NYWtlIHN1cmUgZGlzYWJsZWQgYnV0dG9ucyBkb24ndCBnZXQgdGhlIHBvaW50ZXIgY3Vyc29yLlxcbiovXFxuOmRpc2FibGVkIHtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuLypcXG4xLiBNYWtlIHJlcGxhY2VkIGVsZW1lbnRzIGBkaXNwbGF5OiBibG9ja2AgYnkgZGVmYXVsdC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvMTQpXFxuMi4gQWRkIGB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlYCB0byBhbGlnbiByZXBsYWNlZCBlbGVtZW50cyBtb3JlIHNlbnNpYmx5IGJ5IGRlZmF1bHQuIChodHRwczovL2dpdGh1Yi5jb20vamVuc2ltbW9ucy9jc3NyZW1lZHkvaXNzdWVzLzE0I2lzc3VlY29tbWVudC02MzQ5MzQyMTApXFxuICAgVGhpcyBjYW4gdHJpZ2dlciBhIHBvb3JseSBjb25zaWRlcmVkIGxpbnQgZXJyb3IgaW4gc29tZSB0b29scyBidXQgaXMgaW5jbHVkZWQgYnkgZGVzaWduLlxcbiovXFxuXFxuaW1nLFxcbnN2ZyxcXG52aWRlbyxcXG5jYW52YXMsXFxuYXVkaW8sXFxuaWZyYW1lLFxcbmVtYmVkLFxcbm9iamVjdCB7XFxuICBkaXNwbGF5OiBibG9jazsgLyogMSAqL1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgLyogMiAqL1xcbn1cXG5cXG4vKlxcbkNvbnN0cmFpbiBpbWFnZXMgYW5kIHZpZGVvcyB0byB0aGUgcGFyZW50IHdpZHRoIGFuZCBwcmVzZXJ2ZSB0aGVpciBpbnRyaW5zaWMgYXNwZWN0IHJhdGlvLiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy8xNClcXG4qL1xcblxcbmltZyxcXG52aWRlbyB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qXFxuRW5zdXJlIHRoZSBkZWZhdWx0IGJyb3dzZXIgYmVoYXZpb3Igb2YgdGhlIGBoaWRkZW5gIGF0dHJpYnV0ZS5cXG4qL1xcblxcbltoaWRkZW5dIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiosIDo6YmVmb3JlLCA6OmFmdGVyIHtcXG4gIC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxuICBib3JkZXItY29sb3I6IHJnYigyMjkgMjMxIDIzNSAvIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5KSk7XFxuICAtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogMCAwICMwMDAwO1xcbiAgLS10dy1yaW5nLXNoYWRvdzogMCAwICMwMDAwO1xcbiAgLS10dy1zaGFkb3c6IDAgMCAjMDAwMDtcXG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDAgMCAjMDAwMDtcXG59XFxuXFxuLmZpeGVkIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG59XFxuXFxuLnJlbGF0aXZlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnJpZ2h0LTAge1xcbiAgcmlnaHQ6IDBweDtcXG59XFxuXFxuLnotMTAge1xcbiAgei1pbmRleDogMTA7XFxufVxcblxcbi5teC00IHtcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4ubWwtNCB7XFxuICBtYXJnaW4tbGVmdDogMXJlbTtcXG59XFxuXFxuLm10LTI0IHtcXG4gIG1hcmdpbi10b3A6IDZyZW07XFxufVxcblxcbi5tbC02IHtcXG4gIG1hcmdpbi1sZWZ0OiAxLjVyZW07XFxufVxcblxcbi5tdC02IHtcXG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcXG59XFxuXFxuLmlubGluZS1ibG9jayB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi5mbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5oLXNjcmVlbiB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uaC0yMCB7XFxuICBoZWlnaHQ6IDVyZW07XFxufVxcblxcbi5oLTE0IHtcXG4gIGhlaWdodDogMy41cmVtO1xcbn1cXG5cXG4uaC0xMiB7XFxuICBoZWlnaHQ6IDNyZW07XFxufVxcblxcbi5oLTEyOCB7XFxuICBoZWlnaHQ6IDMycmVtO1xcbn1cXG5cXG4uaC04IHtcXG4gIGhlaWdodDogMnJlbTtcXG59XFxuXFxuLmgtMTYge1xcbiAgaGVpZ2h0OiA0cmVtO1xcbn1cXG5cXG4uaC02IHtcXG4gIGhlaWdodDogMS41cmVtO1xcbn1cXG5cXG4udy1mdWxsIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udy0xMiB7XFxuICB3aWR0aDogM3JlbTtcXG59XFxuXFxuLnctNzIge1xcbiAgd2lkdGg6IDE4cmVtO1xcbn1cXG5cXG4udy02NCB7XFxuICB3aWR0aDogMTZyZW07XFxufVxcblxcbi53LTQwIHtcXG4gIHdpZHRoOiAxMHJlbTtcXG59XFxuXFxuLnctNiB7XFxuICB3aWR0aDogMS41cmVtO1xcbn1cXG5cXG4ubWF4LXctZnVsbCB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbi5zaHJpbmsge1xcbiAgZmxleC1zaHJpbms6IDE7XFxufVxcblxcbi5zaHJpbmstMCB7XFxuICBmbGV4LXNocmluazogMDtcXG59XFxuXFxuLmdyb3cge1xcbiAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG4uZ3Jvdy0wIHtcXG4gIGZsZXgtZ3JvdzogMDtcXG59XFxuXFxuLmJhc2lzLTcyIHtcXG4gIGZsZXgtYmFzaXM6IDE4cmVtO1xcbn1cXG5cXG4uY3Vyc29yLXBvaW50ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZmxleC1yb3cge1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuLmZsZXgtY29sIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5pdGVtcy1jZW50ZXIge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmp1c3RpZnktYmV0d2VlbiB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5vdmVyZmxvdy15LWF1dG8ge1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLnRydW5jYXRlIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi5yb3VuZGVkIHtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxufVxcblxcbi5yb3VuZGVkLWxnIHtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG59XFxuXFxuLmJvcmRlciB7XFxuICBib3JkZXItd2lkdGg6IDFweDtcXG59XFxuXFxuLmJvcmRlci0yIHtcXG4gIGJvcmRlci13aWR0aDogMnB4O1xcbn1cXG5cXG4uYm9yZGVyLWluZGlnby01MDBcXFxcLzEwMCB7XFxuICBib3JkZXItY29sb3I6IHJnYig5OSAxMDIgMjQxIC8gMSk7XFxufVxcblxcbi5ib3JkZXItYi1ncmF5LTIwMCB7XFxuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiKDIyOSAyMzEgMjM1IC8gdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcXG59XFxuXFxuLmJnLXdoaXRlIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUgMjU1IDI1NSAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuXFxuLmJnLXNsYXRlLTIwMCB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI2IDIzMiAyNDAgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcblxcbi5iZy1zbGF0ZS0zMDAge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMyAyMTMgMjI1IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG5cXG4ucGwtNCB7XFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxufVxcblxcbi5wci00IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxufVxcblxcbi5wbC0yIHtcXG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xcbn1cXG5cXG4udGV4dC14cyB7XFxuICBmb250LXNpemU6IDAuNzVyZW07XFxuICBsaW5lLWhlaWdodDogMXJlbTtcXG59XFxuXFxuLnRleHQtYmFzZSB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBsaW5lLWhlaWdodDogMS41cmVtO1xcbn1cXG5cXG4uZm9udC1zZW1pYm9sZCB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uZm9udC1ib2xkIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi50cmFja2luZy13aWRlc3Qge1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xcbn1cXG5cXG4udHJhY2tpbmctd2lkZSB7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wMjVlbTtcXG59XFxuXFxuLnRleHQtd2hpdGUge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiKDI1NSAyNTUgMjU1IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcblxcbi50ZXh0LXNsYXRlLTQwMCB7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiByZ2IoMTQ4IDE2MyAxODQgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuXFxuLnRleHQtc2xhdGUtNjAwIHtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IHJnYig3MSA4NSAxMDUgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuXFxuLnNoYWRvdy1cXFxcWzBfMTBweF81MHB4X3JnYmFcXFxcKDIzMFxcXFwyYyAyMzBcXFxcMmMgMjMwXFxcXDJjIDBcXFxcLjVcXFxcKVxcXFxdIHtcXG4gIC0tdHctc2hhZG93OiAwIDEwcHggNTBweCByZ2JhKDIzMCwyMzAsMjMwLDAuNSk7XFxuICAtLXR3LXNoYWRvdy1jb2xvcmVkOiAwIDEwcHggNTBweCB2YXIoLS10dy1zaGFkb3ctY29sb3IpO1xcbiAgYm94LXNoYWRvdzogdmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1yaW5nLXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctc2hhZG93KTtcXG59XFxuXFxuLnNoYWRvdy1cXFxcWzBfMF8yMHB4X3JnYmFcXFxcKDIzMFxcXFwyYyAyMzBcXFxcMmMgMjMwXFxcXDJjIDBcXFxcLjVcXFxcKVxcXFxdIHtcXG4gIC0tdHctc2hhZG93OiAwIDAgMjBweCByZ2JhKDIzMCwyMzAsMjMwLDAuNSk7XFxuICAtLXR3LXNoYWRvdy1jb2xvcmVkOiAwIDAgMjBweCB2YXIoLS10dy1zaGFkb3ctY29sb3IpO1xcbiAgYm94LXNoYWRvdzogdmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1yaW5nLXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctc2hhZG93KTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vbm9kZV9tb2R1bGVzL3RhaWx3aW5kY3NzL3RhaWx3aW5kLmNzc1wiLFwid2VicGFjazovLy4vbm9kZV9tb2R1bGVzL3RhaWx3aW5kY3NzLyUzQ2lucHV0JTIwY3NzJTIwdFZvR21MJTNFXCIsXCI8bm8gc291cmNlPlwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Q0FBYyxDQUFkOzs7Q0FBYzs7QUFBZDs7O0VDUUUsc0JBQXNCLEVBQUUsTUFBTTtFQUM5QixlQUFlLEVBQUUsTUFBTTtFQUN2QixtQkFBbUIsRUFBRSxNQUFNO0VBQzNCLDBCQUEwQixFQUFFLE1BQU07QURYdEI7O0FBQWQ7O0VDZ0JFLGdCQUFnQjtBRGhCSjs7QUFBZDs7Ozs7Q0FBYzs7QUFBZDtFQzJCRSxnQkFBZ0IsRUFBRSxNQUFNO0VBQ3hCLDhCQUE4QixFQUFFLE1BQU0sRUFDcEIsTUFBTTtFQUN4QixXQUFXLEVBQUUsTUFBTTtFQUNuQiw0TkFBc1AsRUFBRSxNQUFNO0FEL0JsUDs7QUFBZDs7O0NBQWM7O0FBQWQ7RUN3Q0UsU0FBUyxFQUFFLE1BQU07RUFDakIsb0JBQW9CLEVBQUUsTUFBTTtBRHpDaEI7O0FBQWQ7Ozs7Q0FBYzs7QUFBZDtFQ21ERSxTQUFTLEVBQUUsTUFBTTtFQUNqQixjQUFjLEVBQUUsTUFBTTtFQUN0QixxQkFBcUIsRUFBRSxNQUFNO0FEckRqQjs7QUFBZDs7Q0FBYzs7QUFBZDtFQzZERSx5Q0FBaUM7VUFBakMsaUNBQWlDO0FEN0RyQjs7QUFBZDs7Q0FBYzs7QUFBZDs7Ozs7O0VDMEVFLGtCQUFrQjtFQUNsQixvQkFBb0I7QUQzRVI7O0FBQWQ7O0NBQWM7O0FBQWQ7RUNtRkUsY0FBYztFQUNkLHdCQUF3QjtBRHBGWjs7QUFBZDs7Q0FBYzs7QUFBZDs7RUM2RkUsbUJBQW1CO0FEN0ZQOztBQUFkOzs7Q0FBYzs7QUFBZDs7OztFQ3lHRSwrR0FBeUksRUFBRSxNQUFNO0VBQ2pKLGNBQWMsRUFBRSxNQUFNO0FEMUdWOztBQUFkOztDQUFjOztBQUFkO0VDa0hFLGNBQWM7QURsSEY7O0FBQWQ7O0NBQWM7O0FBQWQ7O0VDMkhFLGNBQWM7RUFDZCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHdCQUF3QjtBRDlIWjs7QUFBZDtFQ2tJRSxlQUFlO0FEbElIOztBQUFkO0VDc0lFLFdBQVc7QUR0SUM7O0FBQWQ7Ozs7Q0FBYzs7QUFBZDtFQ2dKRSxjQUFjLEVBQUUsTUFBTTtFQUN0QixxQkFBcUIsRUFBRSxNQUFNO0VBQzdCLHlCQUF5QixHQUFHLE1BQU07QURsSnRCOztBQUFkOzs7O0NBQWM7O0FBQWQ7Ozs7O0VDZ0tFLG9CQUFvQixFQUFFLE1BQU07RUFDNUIsZUFBZSxFQUFFLE1BQU07RUFDdkIsb0JBQW9CLEVBQUUsTUFBTTtFQUM1QixjQUFjLEVBQUUsTUFBTTtFQUN0QixTQUFTLEVBQUUsTUFBTTtFQUNqQixVQUFVLEVBQUUsTUFBTTtBRHJLTjs7QUFBZDs7Q0FBYzs7QUFBZDs7RUM4S0Usb0JBQW9CO0FEOUtSOztBQUFkOzs7Q0FBYzs7QUFBZDs7OztFQzBMRSwwQkFBMEIsRUFBRSxNQUFNO0VBQ2xDLDZCQUE2QixFQUFFLE1BQU07RUFDckMsc0JBQXNCLEVBQUUsTUFBTTtBRDVMbEI7O0FBQWQ7O0NBQWM7O0FBQWQ7RUNvTUUsYUFBYTtBRHBNRDs7QUFBZDs7Q0FBYzs7QUFBZDtFQzRNRSxnQkFBZ0I7QUQ1TUo7O0FBQWQ7O0NBQWM7O0FBQWQ7RUNvTkUsd0JBQXdCO0FEcE5aOztBQUFkOztDQUFjOztBQUFkOztFQzZORSxZQUFZO0FEN05BOztBQUFkOzs7Q0FBYzs7QUFBZDtFQ3NPRSw2QkFBNkIsRUFBRSxNQUFNO0VBQ3JDLG9CQUFvQixFQUFFLE1BQU07QUR2T2hCOztBQUFkOztDQUFjOztBQUFkO0VDK09FLHdCQUF3QjtBRC9PWjs7QUFBZDs7O0NBQWM7O0FBQWQ7RUN3UEUsMEJBQTBCLEVBQUUsTUFBTTtFQUNsQyxhQUFhLEVBQUUsTUFBTTtBRHpQVDs7QUFBZDs7Q0FBYzs7QUFBZDtFQ2lRRSxrQkFBa0I7QURqUU47O0FBQWQ7O0NBQWM7O0FBQWQ7Ozs7Ozs7Ozs7Ozs7RUNxUkUsU0FBUztBRHJSRzs7QUFBZDtFQ3lSRSxTQUFTO0VBQ1QsVUFBVTtBRDFSRTs7QUFBZDtFQzhSRSxVQUFVO0FEOVJFOztBQUFkOzs7RUNvU0UsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxVQUFVO0FEdFNFOztBQUFkOztDQUFjOztBQUFkO0VDOFNFLGdCQUFnQjtBRDlTSjs7QUFBZDs7O0NBQWM7O0FBQWQ7O0VDd1RFLFVBQVUsR0FBRyxNQUFNO0VBQ25CLGNBQXdDLEVBQUUsTUFBTTtBRHpUcEM7O0FBQWQ7O0NBQWM7O0FBQWQ7O0VDa1VFLGVBQWU7QURsVUg7O0FBQWQ7O0NBQWM7QUFBZDtFQ3lVRSxlQUFlO0FEelVIOztBQUFkOzs7O0NBQWM7O0FBQWQ7Ozs7Ozs7O0VDMFZFLGNBQWMsRUFBRSxNQUFNO0VBQ3RCLHNCQUFzQixFQUFFLE1BQU07QUQzVmxCOztBQUFkOztDQUFjOztBQUFkOztFQ29XRSxlQUFlO0VBQ2YsWUFBWTtBRHJXQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQzZXRSxhQUFhO0FEN1dEOztBRUFkO0VBQUEsdUJBQUE7RUFBQSwwREFBQTtFQUFBLG1DQUFBO0VBQUEsNEJBQUE7RUFBQSx1QkFBQTtFQUFBO0NBQUE7O0FGSUE7RUVKQTtBRkltQjs7QUFBbkI7RUVKQTtBRkltQjs7QUFBbkI7RUVKQTtBRkltQjs7QUFBbkI7RUVKQTtBRkltQjs7QUFBbkI7RUVKQSxrQkFBQTtFQUFBO0FGSW1COztBQUFuQjtFRUpBO0FGSW1COztBQUFuQjtFRUpBO0FGSW1COztBQUFuQjtFRUpBO0FGSW1COztBQUFuQjtFRUpBO0FGSW1COztBQUFuQjtFRUpBO0FGSW1COztBQUFuQjtFRUpBO0FGSW1COztBQUFuQjtFRUpBO0FGSW1COztBQUFuQjtFRUpBO0FGSW1COztBQUFuQjtFRUpBO0FGSW1COztBQUFuQjtFRUpBO0FGSW1COztBQUFuQjtFRUpBO0FGSW1COztBQUFuQjtFRUpBO0FGSW1COztBQUFuQjtFRUpBO0FGSW1COztBQUFuQjtFRUpBO0FGSW1COztBQUFuQjtFRUpBO0FGSW1COztBQUFuQjtFRUpBO0FGSW1COztBQUFuQjtFRUpBO0FGSW1COztBQUFuQjtFRUpBO0FGSW1COztBQUFuQjtFRUpBO0FGSW1COztBQUFuQjtFRUpBO0FGSW1COztBQUFuQjtFRUpBO0FGSW1COztBQUFuQjtFRUpBO0FGSW1COztBQUFuQjtFRUpBO0FGSW1COztBQUFuQjtFRUpBO0FGSW1COztBQUFuQjtFRUpBO0FGSW1COztBQUFuQjtFRUpBO0FGSW1COztBQUFuQjtFRUpBO0FGSW1COztBQUFuQjtFRUpBO0FGSW1COztBQUFuQjtFRUpBO0FGSW1COztBQUFuQjtFRUpBO0FGSW1COztBQUFuQjtFRUpBO0FGSW1COztBQUFuQjtFRUpBO0FGSW1COztBQUFuQjtFRUpBLGlCQUFBO0VBQUEsd0JBQUE7RUFBQTtBRkltQjs7QUFBbkI7RUVKQTtBRkltQjs7QUFBbkI7RUVKQTtBRkltQjs7QUFBbkI7RUVKQTtBRkltQjs7QUFBbkI7RUVKQTtBRkltQjs7QUFBbkI7RUVKQTtBRkltQjs7QUFBbkI7RUVKQSx1QkFBQTtFQUFBO0FGSW1COztBQUFuQjtFRUpBLG1CQUFBO0VBQUE7QUZJbUI7O0FBQW5CO0VFSkEsbUJBQUE7RUFBQTtBRkltQjs7QUFBbkI7RUVKQSxtQkFBQTtFQUFBO0FGSW1COztBQUFuQjtFRUpBO0FGSW1COztBQUFuQjtFRUpBO0FGSW1COztBQUFuQjtFRUpBO0FGSW1COztBQUFuQjtFRUpBLG1CQUFBO0VBQUE7QUZJbUI7O0FBQW5CO0VFSkEsZ0JBQUE7RUFBQTtBRkltQjs7QUFBbkI7RUVKQTtBRkltQjs7QUFBbkI7RUVKQTtBRkltQjs7QUFBbkI7RUVKQTtBRkltQjs7QUFBbkI7RUVKQTtBRkltQjs7QUFBbkI7RUVKQSxxQkFBQTtFQUFBO0FGSW1COztBQUFuQjtFRUpBLHFCQUFBO0VBQUE7QUZJbUI7O0FBQW5CO0VFSkEscUJBQUE7RUFBQTtBRkltQjs7QUFBbkI7RUVKQSwrQ0FBQTtFQUFBLHdEQUFBO0VBQUE7QUZJbUI7O0FBQW5CO0VFSkEsNENBQUE7RUFBQSxxREFBQTtFQUFBO0FGSW1CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkB0YWlsd2luZCBiYXNlO1xcblxcbkB0YWlsd2luZCBjb21wb25lbnRzO1xcblxcbkB0YWlsd2luZCB1dGlsaXRpZXM7XFxuXCIsXCIvKlxcbjEuIFByZXZlbnQgcGFkZGluZyBhbmQgYm9yZGVyIGZyb20gYWZmZWN0aW5nIGVsZW1lbnQgd2lkdGguIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzQpXFxuMi4gQWxsb3cgYWRkaW5nIGEgYm9yZGVyIHRvIGFuIGVsZW1lbnQgYnkganVzdCBhZGRpbmcgYSBib3JkZXItd2lkdGguIChodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRjc3MvdGFpbHdpbmRjc3MvcHVsbC8xMTYpXFxuKi9cXG5cXG4qLFxcbjo6YmVmb3JlLFxcbjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgYm9yZGVyLXdpZHRoOiAwOyAvKiAyICovXFxuICBib3JkZXItc3R5bGU6IHNvbGlkOyAvKiAyICovXFxuICBib3JkZXItY29sb3I6IGN1cnJlbnRDb2xvcjsgLyogMiAqL1xcbn1cXG5cXG46OmJlZm9yZSxcXG46OmFmdGVyIHtcXG4gIC0tdHctY29udGVudDogJyc7XFxufVxcblxcbi8qXFxuMS4gVXNlIGEgY29uc2lzdGVudCBzZW5zaWJsZSBsaW5lLWhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuMy4gVXNlIGEgbW9yZSByZWFkYWJsZSB0YWIgc2l6ZS5cXG40LiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIGBzYW5zYCBmb250LWZhbWlseSBieSBkZWZhdWx0LlxcbiovXFxuXFxuaHRtbCB7XFxuICBsaW5lLWhlaWdodDogMS41OyAvKiAxICovXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG4gIC1tb3otdGFiLXNpemU6IDQ7IC8qIDMgKi9cXG4gIHRhYi1zaXplOiA0OyAvKiAzICovXFxuICBmb250LWZhbWlseTogdGhlbWUoJ2ZvbnRGYW1pbHkuc2FucycsIHVpLXNhbnMtc2VyaWYsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEFyaWFsLCBcXFwiTm90byBTYW5zXFxcIiwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCIsIFxcXCJOb3RvIENvbG9yIEVtb2ppXFxcIik7IC8qIDQgKi9cXG59XFxuXFxuLypcXG4xLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxuMi4gSW5oZXJpdCBsaW5lLWhlaWdodCBmcm9tIGBodG1sYCBzbyB1c2VycyBjYW4gc2V0IHRoZW0gYXMgYSBjbGFzcyBkaXJlY3RseSBvbiB0aGUgYGh0bWxgIGVsZW1lbnQuXFxuKi9cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDsgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLypcXG4xLiBBZGQgdGhlIGNvcnJlY3QgaGVpZ2h0IGluIEZpcmVmb3guXFxuMi4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2Ugb2YgYm9yZGVyIGNvbG9yIGluIEZpcmVmb3guIChodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTA2NTUpXFxuMy4gRW5zdXJlIGhvcml6b250YWwgcnVsZXMgYXJlIHZpc2libGUgYnkgZGVmYXVsdC5cXG4qL1xcblxcbmhyIHtcXG4gIGhlaWdodDogMDsgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIGJvcmRlci10b3Atd2lkdGg6IDFweDsgLyogMyAqL1xcbn1cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiovXFxuXFxuYWJiclt0aXRsZV0ge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcbn1cXG5cXG4vKlxcblJlbW92ZSB0aGUgZGVmYXVsdCBmb250IHNpemUgYW5kIHdlaWdodCBmb3IgaGVhZGluZ3MuXFxuKi9cXG5cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNiB7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogaW5oZXJpdDtcXG59XFxuXFxuLypcXG5SZXNldCBsaW5rcyB0byBvcHRpbWl6ZSBmb3Igb3B0LWluIHN0eWxpbmcgaW5zdGVhZCBvZiBvcHQtb3V0LlxcbiovXFxuXFxuYSB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gRWRnZSBhbmQgU2FmYXJpLlxcbiovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLypcXG4xLiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIGBtb25vYCBmb250IGZhbWlseSBieSBkZWZhdWx0LlxcbjIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAsXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiB0aGVtZSgnZm9udEZhbWlseS5tb25vJywgdWktbW9ub3NwYWNlLCBTRk1vbm8tUmVndWxhciwgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsIFxcXCJMaWJlcmF0aW9uIE1vbm9cXFwiLCBcXFwiQ291cmllciBOZXdcXFwiLCBtb25vc3BhY2UpOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuc21hbGwge1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qXFxuUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbnN1YixcXG5zdXAge1xcbiAgZm9udC1zaXplOiA3NSU7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3ViIHtcXG4gIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuc3VwIHtcXG4gIHRvcDogLTAuNWVtO1xcbn1cXG5cXG4vKlxcbjEuIFJlbW92ZSB0ZXh0IGluZGVudGF0aW9uIGZyb20gdGFibGUgY29udGVudHMgaW4gQ2hyb21lIGFuZCBTYWZhcmkuIChodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05OTkwODgsIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0yMDEyOTcpXFxuMi4gQ29ycmVjdCB0YWJsZSBib3JkZXIgY29sb3IgaW5oZXJpdGFuY2UgaW4gYWxsIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTM1NzI5LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTk1MDE2KVxcbjMuIFJlbW92ZSBnYXBzIGJldHdlZW4gdGFibGUgYm9yZGVycyBieSBkZWZhdWx0LlxcbiovXFxuXFxudGFibGUge1xcbiAgdGV4dC1pbmRlbnQ6IDA7IC8qIDEgKi9cXG4gIGJvcmRlci1jb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgIC8qIDMgKi9cXG59XFxuXFxuLypcXG4xLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4yLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuMy4gUmVtb3ZlIGRlZmF1bHQgcGFkZGluZyBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMSAqL1xcbiAgbWFyZ2luOiAwOyAvKiAyICovXFxuICBwYWRkaW5nOiAwOyAvKiAzICovXFxufVxcblxcbi8qXFxuUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlIGFuZCBGaXJlZm94LlxcbiovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLypcXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbjIuIFJlbW92ZSBkZWZhdWx0IGJ1dHRvbiBzdHlsZXMuXFxuKi9cXG5cXG5idXR0b24sXFxuW3R5cGU9J2J1dHRvbiddLFxcblt0eXBlPSdyZXNldCddLFxcblt0eXBlPSdzdWJtaXQnXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IC8qIDIgKi9cXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5Vc2UgdGhlIG1vZGVybiBGaXJlZm94IGZvY3VzIHN0eWxlIGZvciBhbGwgZm9jdXNhYmxlIGVsZW1lbnRzLlxcbiovXFxuXFxuOi1tb3otZm9jdXNyaW5nIHtcXG4gIG91dGxpbmU6IGF1dG87XFxufVxcblxcbi8qXFxuUmVtb3ZlIHRoZSBhZGRpdGlvbmFsIGA6aW52YWxpZGAgc3R5bGVzIGluIEZpcmVmb3guIChodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9nZWNrby1kZXYvYmxvYi8yZjllYWNkOWQzZDk5NWM5MzdiNDI1MWE1NTU3ZDk1ZDQ5NGM5YmUxL2xheW91dC9zdHlsZS9yZXMvZm9ybXMuY3NzI0w3MjgtTDczNylcXG4qL1xcblxcbjotbW96LXVpLWludmFsaWQge1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSBhbmQgRmlyZWZveC5cXG4qL1xcblxcbnByb2dyZXNzIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLypcXG5Db3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBTYWZhcmkuXFxuKi9cXG5cXG46Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLypcXG4xLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4yLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4qL1xcblxcblt0eXBlPSdzZWFyY2gnXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5SZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuKi9cXG5cXG46Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKlxcbjEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiovXFxuXFxuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxufVxcblxcbi8qXFxuUmVtb3ZlcyB0aGUgZGVmYXVsdCBzcGFjaW5nIGFuZCBib3JkZXIgZm9yIGFwcHJvcHJpYXRlIGVsZW1lbnRzLlxcbiovXFxuXFxuYmxvY2txdW90ZSxcXG5kbCxcXG5kZCxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5ocixcXG5maWd1cmUsXFxucCxcXG5wcmUge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5maWVsZHNldCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5sZWdlbmQge1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxub2wsXFxudWwsXFxubWVudSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLypcXG5QcmV2ZW50IHJlc2l6aW5nIHRleHRhcmVhcyBob3Jpem9udGFsbHkgYnkgZGVmYXVsdC5cXG4qL1xcblxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogdmVydGljYWw7XFxufVxcblxcbi8qXFxuMS4gUmVzZXQgdGhlIGRlZmF1bHQgcGxhY2Vob2xkZXIgb3BhY2l0eSBpbiBGaXJlZm94LiAoaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kbGFicy90YWlsd2luZGNzcy9pc3N1ZXMvMzMwMClcXG4yLiBTZXQgdGhlIGRlZmF1bHQgcGxhY2Vob2xkZXIgY29sb3IgdG8gdGhlIHVzZXIncyBjb25maWd1cmVkIGdyYXkgNDAwIGNvbG9yLlxcbiovXFxuXFxuaW5wdXQ6OnBsYWNlaG9sZGVyLFxcbnRleHRhcmVhOjpwbGFjZWhvbGRlciB7XFxuICBvcGFjaXR5OiAxOyAgLyogMSAqL1xcbiAgY29sb3I6IHRoZW1lKCdjb2xvcnMuZ3JheS40MDAnLCAjOWNhM2FmKTsgLyogMiAqL1xcbn1cXG5cXG4vKlxcblNldCB0aGUgZGVmYXVsdCBjdXJzb3IgZm9yIGJ1dHRvbnMuXFxuKi9cXG5cXG5idXR0b24sXFxuW3JvbGU9XFxcImJ1dHRvblxcXCJdIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLypcXG5NYWtlIHN1cmUgZGlzYWJsZWQgYnV0dG9ucyBkb24ndCBnZXQgdGhlIHBvaW50ZXIgY3Vyc29yLlxcbiovXFxuOmRpc2FibGVkIHtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuLypcXG4xLiBNYWtlIHJlcGxhY2VkIGVsZW1lbnRzIGBkaXNwbGF5OiBibG9ja2AgYnkgZGVmYXVsdC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvMTQpXFxuMi4gQWRkIGB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlYCB0byBhbGlnbiByZXBsYWNlZCBlbGVtZW50cyBtb3JlIHNlbnNpYmx5IGJ5IGRlZmF1bHQuIChodHRwczovL2dpdGh1Yi5jb20vamVuc2ltbW9ucy9jc3NyZW1lZHkvaXNzdWVzLzE0I2lzc3VlY29tbWVudC02MzQ5MzQyMTApXFxuICAgVGhpcyBjYW4gdHJpZ2dlciBhIHBvb3JseSBjb25zaWRlcmVkIGxpbnQgZXJyb3IgaW4gc29tZSB0b29scyBidXQgaXMgaW5jbHVkZWQgYnkgZGVzaWduLlxcbiovXFxuXFxuaW1nLFxcbnN2ZyxcXG52aWRlbyxcXG5jYW52YXMsXFxuYXVkaW8sXFxuaWZyYW1lLFxcbmVtYmVkLFxcbm9iamVjdCB7XFxuICBkaXNwbGF5OiBibG9jazsgLyogMSAqL1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgLyogMiAqL1xcbn1cXG5cXG4vKlxcbkNvbnN0cmFpbiBpbWFnZXMgYW5kIHZpZGVvcyB0byB0aGUgcGFyZW50IHdpZHRoIGFuZCBwcmVzZXJ2ZSB0aGVpciBpbnRyaW5zaWMgYXNwZWN0IHJhdGlvLiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy8xNClcXG4qL1xcblxcbmltZyxcXG52aWRlbyB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qXFxuRW5zdXJlIHRoZSBkZWZhdWx0IGJyb3dzZXIgYmVoYXZpb3Igb2YgdGhlIGBoaWRkZW5gIGF0dHJpYnV0ZS5cXG4qL1xcblxcbltoaWRkZW5dIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiLG51bGxdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnNyYy1jb21wb25lbnRzLU1haW4tc2lkZUJhckxlZnQtc2lkZUJhckxlZnQtbW9kdWxlX19zcGFjaW5nU2lkZUJhci0ta3BpcTMge1xcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2cmVtKTtcXG59XFxuXFxuLnNyYy1jb21wb25lbnRzLU1haW4tc2lkZUJhckxlZnQtc2lkZUJhckxlZnQtbW9kdWxlX19zY3JvbGxTaWRlQmFyLS1welZtcDo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDIsIDEwMSwgMTAxLCAwLjU5Nik7XFxuICB3aWR0aDogOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuLnNyYy1jb21wb25lbnRzLU1haW4tc2lkZUJhckxlZnQtc2lkZUJhckxlZnQtbW9kdWxlX19zY3JvbGxTaWRlQmFyLS1welZtcDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcXG4gIHdpZHRoOiA5MCU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9NYWluL3NpZGVCYXJMZWZ0L3NpZGVCYXJMZWZ0Lm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0kseUJBQUE7QUFDSjs7QUFFSTtFQUNJLDRDQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FBQ1I7QUFDSTtFQUNJLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FBQ1JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnNwYWNpbmdTaWRlQmFye1xcclxcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDZyZW0pO1xcclxcbn1cXHJcXG4uc2Nyb2xsU2lkZUJhcntcXHJcXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXJ7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwMiwgMTAxLCAxMDEsIDAuNTk2KTtcXHJcXG4gICAgICAgIHdpZHRoOiA4cHg7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICB9XFxyXFxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1ie1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMCwgMjMwLCAyMzApO1xcclxcbiAgICAgICAgd2lkdGg6OTAlIDtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwic3BhY2luZ1NpZGVCYXJcIjogXCJzcmMtY29tcG9uZW50cy1NYWluLXNpZGVCYXJMZWZ0LXNpZGVCYXJMZWZ0LW1vZHVsZV9fc3BhY2luZ1NpZGVCYXItLWtwaXEzXCIsXG5cdFwic2Nyb2xsU2lkZUJhclwiOiBcInNyYy1jb21wb25lbnRzLU1haW4tc2lkZUJhckxlZnQtc2lkZUJhckxlZnQtbW9kdWxlX19zY3JvbGxTaWRlQmFyLS1welZtcFwiXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi90YWlsd2luZC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdGFpbHdpbmQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2lkZUJhckxlZnQubW9kdWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2lkZUJhckxlZnQubW9kdWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgTmV3LCBTZXRBdHQsIEV2ZW50fSBmcm9tIFwiLi90b29sXCI7XHJcblxyXG5jbGFzcyBCYXNlSW5wdXR7XHJcbiAgICBjb25zdHJ1Y3Rvcih0eXBlLCBuYW1lLCBpZCl7XHJcbiAgICAgICAgdGhpcy5pbnB1dCA9IE5ldygnaW5wdXQnKVxyXG4gICAgICAgIHRoaXMuZXZlbnQgPSBFdmVudFxyXG4gICAgICAgIFNldEF0dCh0aGlzLmlucHV0LCAndHlwZScsIHR5cGUpXHJcbiAgICAgICAgU2V0QXR0KHRoaXMuaW5wdXQsICduYW1lJywgbmFtZSlcclxuICAgICAgICBTZXRBdHQodGhpcy5pbnB1dCwgJ2lkJywgaWQpXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbnB1dFxyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBCYXNlTGFiZWx7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCB0aXRsZSl7XHJcbiAgICAgICAgdGhpcy5sYWJlbCA9IE5ldygnbGFiZWwnKVxyXG4gICAgICAgIHRoaXMubGFiZWwudGV4dENvbnRlbnQgPSB0aXRsZVxyXG4gICAgICAgIFNldEF0dCh0aGlzLmxhYmVsLCAnZm9yJywgbmFtZSlcclxuICAgIH1cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxhYmVsXHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIEJhc2VCdXR0b257XHJcbiAgICBjb25zdHJ1Y3Rvcih0ZXh0KXtcclxuICAgICAgICB0aGlzLmJ1dHRvbiA9IE5ldygnYnV0dG9uJylcclxuICAgICAgICB0aGlzLmJ1dHRvbi50ZXh0Q29udGVudCA9IHRleHRcclxuICAgIH1cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHRoaXMuYnV0dG9uXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgICBCYXNlSW5wdXQsXHJcbiAgICBCYXNlTGFiZWwsXHJcbiAgICBCYXNlQnV0dG9uXHJcbn0iLCJjb25zdCBFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvci5iaW5kKGRvY3VtZW50KVxyXG5jb25zdCBFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwuYmluZChkb2N1bWVudClcclxuZnVuY3Rpb24gdGFpbHdpbmRBZGQoYXJyYXlTdHlsZSwgcG9pbnQpe1xyXG4gICAgcG9pbnQuY2xhc3NMaXN0LmFkZCguLi5hcnJheVN0eWxlKVxyXG59XHJcbmZ1bmN0aW9uIHRhaWx3aW5kUmVtb3ZlKGFycmF5U3R5bGUsIHBvaW50KXtcclxuICAgIHBvaW50LmNsYXNzTGlzdC5yZW1vdmUoLi4uYXJyYXlTdHlsZSlcclxufVxyXG5mdW5jdGlvbiB0YWlsd2luZFRvZ2dsZShhcnJheVN0eWxlLCBwb2ludCl7XHJcbiAgICBwb2ludC5jbGFzc0xpc3QudG9nZ2xlKC4uLmFycmF5U3R5bGUpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIE5ldyhzdHJpbmcpe1xyXG4gICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHJpbmcpXHJcbn1cclxuZnVuY3Rpb24gQWRkQ2hpbGQocGFyZW50Tm9kZSwgY2hpbGROb2RlKXtcclxuICAgIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoY2hpbGROb2RlKVxyXG59XHJcbmZ1bmN0aW9uIEV2ZW50KHN0cmluZywgcG9pbnQsIGNhbGxiYWNrKXtcclxuICAgIHBvaW50LmFkZEV2ZW50TGlzdGVuZXIoc3RyaW5nLCBjYWxsYmFjaylcclxufVxyXG5mdW5jdGlvbiBSZW1vdmVFdmVudChzdHJpbmcsIHBvaW50LCBjYWxsYmFjayl7XHJcbiAgICBwb2ludC5yZW1vdmVFdmVudExpc3RlbmVyKHN0cmluZyxjYWxsYmFjaylcclxufVxyXG5mdW5jdGlvbiBTZXRBdHQobm9kZSwgbmFtZUF0dHJpYnVlLCB2YWx1ZSl7XHJcbiAgICBub2RlLnNldEF0dHJpYnV0ZShuYW1lQXR0cmlidWUsIHZhbHVlKVxyXG59XHJcbmV4cG9ydCB7XHJcbiAgICB0YWlsd2luZEFkZCxcclxuICAgIHRhaWx3aW5kUmVtb3ZlLFxyXG4gICAgdGFpbHdpbmRUb2dnbGUsXHJcbiAgICBFbGVtZW50LFxyXG4gICAgRWxlbWVudHMsXHJcbiAgICBOZXcsXHJcbiAgICBBZGRDaGlsZCxcclxuICAgIEV2ZW50LFxyXG4gICAgU2V0QXR0LFxyXG4gICAgUmVtb3ZlRXZlbnRcclxufSIsImltcG9ydCBNYWluIGZyb20gXCIuL2NvbXBvbmVudHMvTWFpbi9tYWluXCI7XHJcbmltcG9ydCB7IEFkZENoaWxkLCBOZXcsIHRhaWx3aW5kQWRkIH0gZnJvbSBcIi4vSmF2YXNjcmlwdC90b29sXCI7XHJcbmltcG9ydCBTaWduSW5BbmRTaWduVXAgZnJvbSBcIi4vY29tcG9uZW50cy9TaWduSW4mU2lnblVwL0xvZ0luXCI7XHJcblxyXG5jbGFzcyBBcHAge1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLmJveCA9IE5ldygnZGl2JylcclxuICAgICAgICB0aGlzLnNpZ25Jbl9TaWduVXBfYm94ID0gbmV3IFNpZ25JbkFuZFNpZ25VcCgpXHJcbiAgICAgICAgdGhpcy5tYWluQXBwID0gbmV3IE1haW4oKVxyXG5cclxuICAgICAgICB0aGlzLmJveFN0eWxlID0gWyd3LWZ1bGwnLCAnaC1zY3JlZW4nXVxyXG5cclxuICAgICAgICB0YWlsd2luZEFkZCh0aGlzLmJveFN0eWxlLCB0aGlzLmJveClcclxuICAgIH1cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIEFkZENoaWxkKHRoaXMuYm94LCB0aGlzLnNpZ25Jbl9TaWduVXBfYm94LnJlbmRlcigpKVxyXG4gICAgICAgIHJldHVybiB0aGlzLmJveFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHAiLCJpbXBvcnQgeyBCYXNlSW5wdXQsIEJhc2VMYWJlbCB9IGZyb20gXCIuLi8uLi8uLi8uLi9KYXZhc2NyaXB0L2Jhc2VcIjtcclxuaW1wb3J0IHsgQWRkQ2hpbGQsIE5ldywgU2V0QXR0LCB0YWlsd2luZEFkZCB9IGZyb20gXCIuLi8uLi8uLi8uLi9KYXZhc2NyaXB0L3Rvb2xcIjtcclxuXHJcbmNsYXNzIFNlYXJjaEJhciB7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMuYm94ID0gTmV3KCdkaXYnKVxyXG4gICAgICAgIHRoaXMuU2VhcmNoQmFyID0gbmV3IEJhc2VJbnB1dCgndGV4dCcsICdzZWFyY2hCYXInLCAnc2VhcmNoQmFyJylcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgdGhpcy5ib3hTdHlsZSA9IFsncmVsYXRpdmUnLCAndy02NCcsJ21heC13LWZ1bGwnXVxyXG4gICAgICAgIHRoaXMuU2VhcmNoQmFyU3R5bGUgPSBbJ3ctZnVsbCcsICdiZy1zbGF0ZS0yMDAnLCAndGV4dC13aGl0ZScsICdyb3VuZGVkLWxnJywgJ3BsLTQnLCAnaC04J11cclxuXHJcbiAgICAgICAgU2V0QXR0KHRoaXMuU2VhcmNoQmFyLmlucHV0LCAncGxhY2Vob2xkZXInLCAnU2VhcmNoJylcclxuXHJcbiAgICAgICAgdGFpbHdpbmRBZGQodGhpcy5ib3hTdHlsZSwgdGhpcy5ib3gpXHJcbiAgICAgICAgdGFpbHdpbmRBZGQodGhpcy5TZWFyY2hCYXJTdHlsZSwgdGhpcy5TZWFyY2hCYXIuaW5wdXQpXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBBZGRDaGlsZCh0aGlzLmJveCwgdGhpcy5TZWFyY2hCYXIucmVuZGVyKCkpXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYm94XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEJhciIsImltcG9ydCB7IEFkZENoaWxkLCBOZXcsIFNldEF0dCwgdGFpbHdpbmRBZGQgfSBmcm9tIFwiLi4vLi4vLi4vSmF2YXNjcmlwdC90b29sXCI7XHJcbmltcG9ydCBMb2dvIGZyb20gJy4uLy4uLy4uL2Fzc2V0L2ltYWdlL0xvZ28ucG5nJ1xyXG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gXCIuL1NlYXJjaEJhci9zZWFyY2hCYXJcIjtcclxuaW1wb3J0IE51bGxBdmF0YXIgZnJvbSBcIi4uLy4uLy4uL2Fzc2V0L2ltYWdlL051bGwgQXZhdGFyLmpwZ1wiXHJcblxyXG5jbGFzcyBIZWFkZXIge1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLmJveCA9IE5ldygnZGl2JylcclxuICAgICAgICB0aGlzLmltYWdlID0gTmV3KCdpbWcnKVxyXG4gICAgICAgIHRoaXMuY2hpbGRCb3ggPSBOZXcoJ2RpdicpXHJcbiAgICAgICAgdGhpcy5zZXR0aW5nQnV0dG9uID0gTmV3KCdpbWcnKVxyXG4gICAgICAgIHRoaXMuc2VhcmNoQmFyID0gbmV3IFNlYXJjaEJhcigpXHJcblxyXG4gICAgICAgIFNldEF0dCh0aGlzLnNldHRpbmdCdXR0b24sICdzcmMnLCBOdWxsQXZhdGFyKVxyXG4gICAgICAgIFNldEF0dCh0aGlzLmltYWdlLCAnc3JjJywgTG9nbylcclxuICAgICAgICBBZGRDaGlsZCh0aGlzLmNoaWxkQm94LCB0aGlzLnNlYXJjaEJhci5yZW5kZXIoKSlcclxuICAgICAgICBBZGRDaGlsZCh0aGlzLmNoaWxkQm94LCB0aGlzLnNldHRpbmdCdXR0b24pXHJcblxyXG4gICAgICAgIHRoaXMuYm94U3R5bGUgPSBbJ3ctZnVsbCcsICdoLTIwJywgJ2JvcmRlcicsICdib3JkZXItYi1ncmF5LTIwMCcsICdmbGV4JywgJ2ZsZXgtcm93JywgJ2l0ZW1zLWNlbnRlcicsICdqdXN0aWZ5LWJldHdlZW4nLCAnZml4ZWQnLCAnYmctd2hpdGUnXVxyXG4gICAgICAgIHRoaXMuaW1hZ2VTdHlsZSA9IFsnaC0xNCcsICdtbC00J11cclxuICAgICAgICB0aGlzLnNldHRpbmdCdXR0b25TdHlsZSA9IFsndy0xMicsICdoLTEyJywgJ2JvcmRlci0yJywgJ2JvcmRlci1pbmRpZ28tNTAwLzEwMCcsICdyb3VuZGVkJywgJ214LTQnXVxyXG4gICAgICAgIHRoaXMuY2hpbGRCb3hTdHlsZSA9IFsnZmxleCcsICdmbGV4LXJvdycsICdpdGVtcy1jZW50ZXInXVxyXG5cclxuICAgICAgICB0YWlsd2luZEFkZCh0aGlzLmJveFN0eWxlLCB0aGlzLmJveClcclxuICAgICAgICB0YWlsd2luZEFkZCh0aGlzLmltYWdlU3R5bGUsIHRoaXMuaW1hZ2UpXHJcbiAgICAgICAgdGFpbHdpbmRBZGQodGhpcy5zZXR0aW5nQnV0dG9uU3R5bGUsIHRoaXMuc2V0dGluZ0J1dHRvbilcclxuICAgICAgICB0YWlsd2luZEFkZCh0aGlzLmNoaWxkQm94U3R5bGUsIHRoaXMuY2hpbGRCb3gpXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBBZGRDaGlsZCh0aGlzLmJveCwgdGhpcy5pbWFnZSlcclxuICAgICAgICBBZGRDaGlsZCh0aGlzLmJveCwgdGhpcy5jaGlsZEJveClcclxuICAgICAgICByZXR1cm4gdGhpcy5ib3hcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyIiwiaW1wb3J0IHsgQWRkQ2hpbGQsIE5ldywgdGFpbHdpbmRBZGQgfSBmcm9tIFwiLi4vLi4vSmF2YXNjcmlwdC90b29sXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vaGVhZGVyL2hlYWRlclwiO1xyXG5pbXBvcnQgTWFpbkNvbnRlbnQgZnJvbSBcIi4vbWFpbkNvbnRlbnQvbWFpbkNvbnRlbnRcIjtcclxuaW1wb3J0IFNpZGVCYXJMZWZ0IGZyb20gXCIuL3NpZGVCYXJMZWZ0L3NpZGVCYXJMZWZ0XCI7XHJcbmltcG9ydCBTaWRlQmFyUmlnaHQgZnJvbSBcIi4vc2lkZUJhclJpZ2h0L3NpZGVCYXJSaWdodFwiO1xyXG5cclxuY2xhc3MgTWFpbiB7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMuYm94ID0gTmV3KCdkaXYnKVxyXG4gICAgICAgIHRoaXMuaGVhZGVyID0gbmV3IEhlYWRlcigpO1xyXG4gICAgICAgIHRoaXMuc2lkZUJhckxlZnQgPSBuZXcgU2lkZUJhckxlZnQoKTtcclxuICAgICAgICB0aGlzLnNpZGVCYXJSaWdodCA9IG5ldyBTaWRlQmFyUmlnaHQoKTtcclxuICAgICAgICB0aGlzLm1haW5Db250ZW50ID0gbmV3IE1haW5Db250ZW50KCk7XHJcblxyXG4gICAgICAgIHRoaXMuYm94U3R5bGUgPSBbJ3ctZnVsbCcsICdmbGV4JywgJ2ZsZXgtcm93J11cclxuICAgICAgICBcclxuICAgICAgICB0YWlsd2luZEFkZCh0aGlzLmJveFN0eWxlLCB0aGlzLmJveClcclxuICAgIH1cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIEFkZENoaWxkKHRoaXMuYm94LCB0aGlzLmhlYWRlci5yZW5kZXIoKSlcclxuICAgICAgICBBZGRDaGlsZCh0aGlzLmJveCwgdGhpcy5zaWRlQmFyTGVmdC5yZW5kZXIoKSlcclxuICAgICAgICBBZGRDaGlsZCh0aGlzLmJveCwgdGhpcy5tYWluQ29udGVudC5yZW5kZXIoKSlcclxuICAgICAgICBBZGRDaGlsZCh0aGlzLmJveCwgdGhpcy5zaWRlQmFyUmlnaHQucmVuZGVyKCkpXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYm94XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW4iLCJpbXBvcnQgeyBBZGRDaGlsZCwgTmV3LCB0YWlsd2luZEFkZCB9IGZyb20gXCIuLi8uLi8uLi9KYXZhc2NyaXB0L3Rvb2xcIjtcclxuXHJcbmNsYXNzIE1haW5Db250ZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5ib3ggPSBOZXcoJ2RpdicpXHJcbiAgICAgICAgdGhpcy5ib3gudGV4dENvbnRlbnQgPSAnc3NzJ1xyXG4gICAgICAgIHRoaXMuYm94U3R5bGUgPSBbJ2dyb3cnLCAnc2hyaW5rJywgJ2gtMTI4JywgJ210LTI0JywgJ2lubGluZS1ibG9jayddXHJcbiAgICAgICAgdGFpbHdpbmRBZGQodGhpcy5ib3hTdHlsZSwgdGhpcy5ib3gpXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5ib3hcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbkNvbnRlbnQiLCJpbXBvcnQgeyBBZGRDaGlsZCwgRXZlbnQsIE5ldywgUmVtb3ZlRXZlbnQsIHRhaWx3aW5kQWRkLCB0YWlsd2luZFJlbW92ZSB9IGZyb20gXCIuLi8uLi8uLi8uLi9KYXZhc2NyaXB0L3Rvb2xcIjtcclxuXHJcbmNsYXNzIEF2YXRhciB7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMuYm94ID0gTmV3KCdkaXYnKVxyXG4gICAgICAgIHRoaXMuYXZhdGFyID0gTmV3KCdpbWcnKVxyXG4gICAgICAgIHRoaXMudGl0bGUgPSBOZXcoJ2RpdicpXHJcbiAgICAgICAgdGhpcy5maXJzdFRpdGxlID0gTmV3KCdwJylcclxuICAgICAgICB0aGlzLnNlY29uZFRpdGxlID0gTmV3KCdwJylcclxuXHJcbiAgICAgICAgdGhpcy5maXJzdFRpdGxlLnRleHRDb250ZW50ID0gJ8SQw6BvIER1eSBIxrBuZydcclxuICAgICAgICB0aGlzLnNlY29uZFRpdGxlLnRleHRDb250ZW50ID0gJ2Rhb2R1eWh1bmcwMDAwQGdtYWlsLmNvbSdcclxuICAgICAgICB0aGlzLmZpcnN0VGl0bGUudGl0bGUgPSB0aGlzLmZpcnN0VGl0bGUudGV4dENvbnRlbnRcclxuICAgICAgICB0aGlzLnNlY29uZFRpdGxlLnRpdGxlID0gdGhpcy5zZWNvbmRUaXRsZS50ZXh0Q29udGVudFxyXG5cclxuICAgICAgICB0aGlzLmJveFN0eWxlID0gWyd3LWZ1bGwnLCAnaC0xNicsICdzaGFkb3ctWzBfMTBweF81MHB4X3JnYmEoMjMwLDIzMCwyMzAsMC41KV0nLCAncm91bmRlZCcgLCAnZmxleCcsICdmbGV4LXJvdycsICdpdGVtcy1jZW50ZXInLCAnY3Vyc29yLXBvaW50ZXInXVxyXG4gICAgICAgIHRoaXMuYXZhdGFyU3R5bGUgPSBbJ3ctMTInLCAnaC0xMicsICdib3JkZXInLCAnbXgtNCcsICdncm93LTAnLCAnc2hyaW5rLTAnXVxyXG4gICAgICAgIHRoaXMuZmlyc3RUaXRsZVN0eWxlID0gWydmb250LXNlbWlib2xkJywgJ3ctNDAnICwgJ3RydW5jYXRlJywgJ2lubGluZS1ibG9jayddXHJcbiAgICAgICAgdGhpcy5zZWNvbmRUaXRsZVN0eWxlID0gWyd0ZXh0LXhzJywgJ3RleHQtc2xhdGUtNDAwJywgJ3ctNDAnICwgJ3RydW5jYXRlJywgJ3RyYWNraW5nLXdpZGVzdCddXHJcbiAgICAgICAgdGhpcy50aXRsZVN0eWxlID0gWydncm93J11cclxuXHJcbiAgICAgICAgdGFpbHdpbmRBZGQodGhpcy5ib3hTdHlsZSwgdGhpcy5ib3gpXHJcbiAgICAgICAgdGFpbHdpbmRBZGQodGhpcy5hdmF0YXJTdHlsZSwgdGhpcy5hdmF0YXIpXHJcbiAgICAgICAgdGFpbHdpbmRBZGQodGhpcy50aXRsZVN0eWxlLHRoaXMudGl0bGUpXHJcbiAgICAgICAgdGFpbHdpbmRBZGQodGhpcy5maXJzdFRpdGxlU3R5bGUsIHRoaXMuZmlyc3RUaXRsZSlcclxuICAgICAgICB0YWlsd2luZEFkZCh0aGlzLnNlY29uZFRpdGxlU3R5bGUsIHRoaXMuc2Vjb25kVGl0bGUpXHJcblxyXG4gICAgICAgIEV2ZW50KCdtb3VzZWVudGVyJywgdGhpcy5ib3gsIHRoaXMubW91c2VFbnRlckhhbmRsZS5iaW5kKHRoaXMpKVxyXG4gICAgICAgIEV2ZW50KCdtb3VzZWxlYXZlJywgdGhpcy5ib3gsIHRoaXMubW91c2VPdXRIYW5kbGUuYmluZCh0aGlzKSlcclxuICAgIH1cclxuICAgIG1vdXNlRW50ZXJIYW5kbGUoZSl7XHJcbiAgICAgICAgdGFpbHdpbmRBZGQoWydiZy1zbGF0ZS0zMDAnXSwgZS50YXJnZXQpXHJcbiAgICB9XHJcbiAgICBtb3VzZU91dEhhbmRsZShlKXtcclxuICAgICAgICB0YWlsd2luZFJlbW92ZShbJ2JnLXNsYXRlLTMwMCddLCBlLnRhcmdldClcclxuICAgIH1cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIEFkZENoaWxkKHRoaXMuYm94LCB0aGlzLmF2YXRhcilcclxuICAgICAgICBBZGRDaGlsZCh0aGlzLnRpdGxlLCB0aGlzLmZpcnN0VGl0bGUpXHJcbiAgICAgICAgQWRkQ2hpbGQodGhpcy50aXRsZSwgdGhpcy5zZWNvbmRUaXRsZSlcclxuICAgICAgICBBZGRDaGlsZCh0aGlzLmJveCwgdGhpcy50aXRsZSlcclxuICAgICAgICByZXR1cm4gdGhpcy5ib3hcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXZhdGFyIiwiaW1wb3J0IHsgQWRkQ2hpbGQsIE5ldywgdGFpbHdpbmRBZGQgfSBmcm9tIFwiLi4vLi4vLi4vSmF2YXNjcmlwdC90b29sXCI7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSBcIi4vQXZhdGFyL2F2YXRhclwiO1xyXG5pbXBvcnQgVG9vbEJhciBmcm9tIFwiLi90b29sQmFyL3Rvb2xCYXJcIjtcclxuaW1wb3J0IFN0eWxlIGZyb20gXCIuL3NpZGVCYXJMZWZ0Lm1vZHVsZS5zY3NzXCJcclxuY2xhc3MgU2lkZUJhckxlZnQge1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLmJveCA9IE5ldygnZGl2JylcclxuICAgICAgICB0aGlzLmNvbnRlbnQgPSBOZXcoJ2RpdicpXHJcbiAgICAgICAgdGhpcy5hdmF0YXIgPSBuZXcgQXZhdGFyKClcclxuICAgICAgICB0aGlzLnRvb2xCYXIgPSBuZXcgVG9vbEJhcigpXHJcbiAgICAgICAgdGhpcy5ib3hTdHlsZSA9IFsnZ3Jvdy0wJywnc2hyaW5rLTAnLCAnYmFzaXMtNzInLCdpbmxpbmUtYmxvY2snLCAnbXQtMjQnXVxyXG4gICAgICAgIHRoaXMuY29udGVudFN0eWxlID0gWyd3LTcyJywgJ2ZpeGVkJywgJ3BsLTQnLCBTdHlsZS5zcGFjaW5nU2lkZUJhciAsICdvdmVyZmxvdy15LWF1dG8nLCAnei0xMCcsIFN0eWxlLnNjcm9sbFNpZGVCYXJdXHJcblxyXG4gICAgICAgIHRhaWx3aW5kQWRkKHRoaXMuYm94U3R5bGUsIHRoaXMuYm94KVxyXG4gICAgICAgIHRhaWx3aW5kQWRkKHRoaXMuY29udGVudFN0eWxlLCB0aGlzLmNvbnRlbnQpXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBBZGRDaGlsZCh0aGlzLmJveCwgdGhpcy5jb250ZW50KVxyXG4gICAgICAgIEFkZENoaWxkKHRoaXMuY29udGVudCwgdGhpcy5hdmF0YXIucmVuZGVyKCkpXHJcbiAgICAgICAgQWRkQ2hpbGQodGhpcy5jb250ZW50LCB0aGlzLnRvb2xCYXIucmVuZGVyKCkpXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYm94XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGVCYXJMZWZ0IiwiY29uc3QgYm94U3R5bGUgPSBbJ2ZsZXgnLCAnZmxleC1yb3cnLCAnaXRlbXMtY2VudGVyJywgJ3BsLTInLCAndy1mdWxsJywgJ2gtMTYnXVxyXG5jb25zdCBpY29uU3R5bGUgPSBbJ21sLTQnLCd3LTYnLCAnaC02J11cclxuY29uc3QgdGl0bGVTdHlsZSA9IFsnbWwtNicsICd0ZXh0LWJhc2UnLCAnZm9udC1ib2xkJywgJ3RleHQtc2xhdGUtNjAwJywgJ3RyYWNraW5nLXdpZGUnXVxyXG5cclxuZXhwb3J0IHtib3hTdHlsZSwgaWNvblN0eWxlLCB0aXRsZVN0eWxlfSIsImltcG9ydCB7IFNldEF0dCB9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi9KYXZhc2NyaXB0L3Rvb2xcIjtcclxuaW1wb3J0IFByb2ZpbGUgZnJvbSBcIi4uL3Byb2ZpbGUvcHJvZmlsZVwiO1xyXG5pbXBvcnQgSWNvbiBmcm9tICcuLi8uLi8uLi8uLi8uLi9hc3NldC9pbWFnZS9waG90by5wbmcnO1xyXG5cclxuY2xhc3MgUGhvdG9zIGV4dGVuZHMgUHJvZmlsZXtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoKVxyXG4gICAgICAgIFNldEF0dCh0aGlzLmljb24sICdzcmMnLCBJY29uKVxyXG4gICAgICAgIHRoaXMudGl0bGUudGV4dENvbnRlbnQgPSAnUGhvdG9zJ1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQaG90b3MiLCJpbXBvcnQgeyBTZXRBdHQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vSmF2YXNjcmlwdC90b29sXCI7XHJcbmltcG9ydCBQcm9maWxlIGZyb20gXCIuLi9wcm9maWxlL3Byb2ZpbGVcIjtcclxuaW1wb3J0IEljb24gZnJvbSAnLi4vLi4vLi4vLi4vLi4vYXNzZXQvaW1hZ2UvZnJpZW5kcy5wbmcnO1xyXG5cclxuY2xhc3MgRnJpZW5kcyBleHRlbmRzIFByb2ZpbGV7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKClcclxuICAgICAgICBTZXRBdHQodGhpcy5pY29uLCAnc3JjJywgSWNvbilcclxuICAgICAgICB0aGlzLnRpdGxlLnRleHRDb250ZW50ID0gJ0ZyaWVuZHMnXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZyaWVuZHMiLCJpbXBvcnQgeyBTZXRBdHQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vSmF2YXNjcmlwdC90b29sXCI7XHJcbmltcG9ydCBQcm9maWxlIGZyb20gXCIuLi9wcm9maWxlL3Byb2ZpbGVcIjtcclxuaW1wb3J0IEljb24gZnJvbSAnLi4vLi4vLi4vLi4vLi4vYXNzZXQvaW1hZ2UvZ3JvdXAucG5nJztcclxuXHJcbmNsYXNzIEdyb3VwcyBleHRlbmRzIFByb2ZpbGV7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKClcclxuICAgICAgICBTZXRBdHQodGhpcy5pY29uLCAnc3JjJywgSWNvbilcclxuICAgICAgICB0aGlzLnRpdGxlLnRleHRDb250ZW50ID0gJ0dyb3VwcydcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR3JvdXBzIiwiaW1wb3J0IHsgQWRkQ2hpbGQsIFNldEF0dCwgTmV3LCB0YWlsd2luZEFkZCB9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi9KYXZhc2NyaXB0L3Rvb2xcIlxyXG5pbXBvcnQgSWNvbiBmcm9tICcuLi8uLi8uLi8uLi8uLi9hc3NldC9pbWFnZS9hY2NvdW50LnBuZydcclxuaW1wb3J0IHtib3hTdHlsZSwgaWNvblN0eWxlLCB0aXRsZVN0eWxlfSBmcm9tICcuLi9CdXR0b25TdHlsZSdcclxuY2xhc3MgUHJvZmlsZXtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5ib3ggPSBOZXcoJ2RpdicpXHJcbiAgICAgICAgdGhpcy5pY29uID0gTmV3KCdpbWcnKVxyXG4gICAgICAgIHRoaXMudGl0bGUgPSBOZXcoJ3AnKVxyXG5cclxuICAgICAgICBTZXRBdHQodGhpcy5pY29uLCAnc3JjJywgSWNvbilcclxuICAgICAgICB0aGlzLnRpdGxlLnRleHRDb250ZW50ID0gJ1Byb2ZpbGUnXHJcblxyXG4gICAgICAgIHRoaXMuYm94U3R5bGUgPSBib3hTdHlsZVxyXG4gICAgICAgIHRoaXMuaWNvblN0eWxlID0gaWNvblN0eWxlXHJcbiAgICAgICAgdGhpcy50aXRsZVN0eWxlID0gdGl0bGVTdHlsZVxyXG4gICAgICAgIHRhaWx3aW5kQWRkKHRoaXMuYm94U3R5bGUsIHRoaXMuYm94KVxyXG4gICAgICAgIHRhaWx3aW5kQWRkKHRoaXMuaWNvblN0eWxlLCB0aGlzLmljb24pXHJcbiAgICAgICAgdGFpbHdpbmRBZGQodGhpcy50aXRsZVN0eWxlLCB0aGlzLnRpdGxlKVxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgQWRkQ2hpbGQodGhpcy5ib3gsIHRoaXMuaWNvbilcclxuICAgICAgICBBZGRDaGlsZCh0aGlzLmJveCwgdGhpcy50aXRsZSlcclxuICAgICAgICByZXR1cm4gdGhpcy5ib3hcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZSIsImltcG9ydCB7IFNldEF0dCB9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi9KYXZhc2NyaXB0L3Rvb2xcIjtcclxuaW1wb3J0IFByb2ZpbGUgZnJvbSBcIi4uL3Byb2ZpbGUvcHJvZmlsZVwiO1xyXG5pbXBvcnQgSWNvbiBmcm9tICcuLi8uLi8uLi8uLi8uLi9hc3NldC9pbWFnZS9zYXZlLnBuZyc7XHJcblxyXG5jbGFzcyBTYXZlIGV4dGVuZHMgUHJvZmlsZXtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoKVxyXG4gICAgICAgIFNldEF0dCh0aGlzLmljb24sICdzcmMnLCBJY29uKVxyXG4gICAgICAgIHRoaXMudGl0bGUudGV4dENvbnRlbnQgPSAnU2F2ZWQnXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNhdmUiLCJpbXBvcnQgeyBBZGRDaGlsZCwgTmV3LCB0YWlsd2luZEFkZCB9IGZyb20gXCIuLi8uLi8uLi8uLi9KYXZhc2NyaXB0L3Rvb2xcIjtcclxuaW1wb3J0IFNhdmUgZnJvbSBcIi4vc2F2ZS9zYXZlXCI7XHJcbmltcG9ydCBGcmllbmRzIGZyb20gXCIuL2ZyaWVuZHMvZnJpZW5kc1wiO1xyXG5pbXBvcnQgR3JvdXBzIGZyb20gXCIuL2dyb3Vwcy9ncm91cHNcIjtcclxuaW1wb3J0IFBob3RvcyBmcm9tIFwiLi9QaG90b3MvcGhvdG9zXCI7XHJcbmltcG9ydCBQcm9maWxlIGZyb20gXCIuL3Byb2ZpbGUvcHJvZmlsZVwiO1xyXG5cclxuY2xhc3MgVG9vbEJhciB7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMuYm94ID0gTmV3KCdkaXYnKVxyXG4gICAgICAgIHRoaXMucHJvZmlsZSA9IG5ldyBQcm9maWxlKClcclxuICAgICAgICB0aGlzLmZyaWVuZHMgPSBuZXcgRnJpZW5kcygpXHJcbiAgICAgICAgdGhpcy5waG90b3MgPSBuZXcgUGhvdG9zKClcclxuICAgICAgICB0aGlzLmdyb3VwcyA9IG5ldyBHcm91cHMoKVxyXG4gICAgICAgIHRoaXMuc2F2ZWQgPSBuZXcgU2F2ZSgpXHJcbiAgICAgICAgdGhpcy5ib3hTdHlsZSA9IFsnZmxleCcsICdmbGV4LWNvbCcsICd3LWZ1bGwnLCAnbXQtNicsICdzaGFkb3ctWzBfMF8yMHB4X3JnYmEoMjMwLDIzMCwyMzAsMC41KV0nLCAncm91bmRlZC1sZyddXHJcblxyXG4gICAgICAgIHRhaWx3aW5kQWRkKHRoaXMuYm94U3R5bGUsIHRoaXMuYm94KVxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgQWRkQ2hpbGQodGhpcy5ib3gsIHRoaXMucHJvZmlsZS5yZW5kZXIoKSlcclxuICAgICAgICBBZGRDaGlsZCh0aGlzLmJveCwgdGhpcy5mcmllbmRzLnJlbmRlcigpKVxyXG4gICAgICAgIEFkZENoaWxkKHRoaXMuYm94LCB0aGlzLnBob3Rvcy5yZW5kZXIoKSlcclxuICAgICAgICBBZGRDaGlsZCh0aGlzLmJveCwgdGhpcy5ncm91cHMucmVuZGVyKCkpXHJcbiAgICAgICAgQWRkQ2hpbGQodGhpcy5ib3gsIHRoaXMuc2F2ZWQucmVuZGVyKCkpXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYm94XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvb2xCYXIiLCJpbXBvcnQgeyBBZGRDaGlsZCwgTmV3LCB0YWlsd2luZEFkZCB9IGZyb20gXCIuLi8uLi8uLi9KYXZhc2NyaXB0L3Rvb2xcIjtcclxuXHJcbmNsYXNzIFNpZGVCYXJSaWdodCB7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMuYm94ID0gTmV3KCdkaXYnKVxyXG4gICAgICAgIHRoaXMuY29udGVudCA9IE5ldygnZGl2JylcclxuXHJcbiAgICAgICAgdGhpcy5ib3hTdHlsZSA9IFsnZ3Jvdy0wJywnc2hyaW5rLTAnLCAnYmFzaXMtNzInLCAnaW5saW5lLWJsb2NrJywgJ210LTI0J11cclxuICAgICAgICB0aGlzLmNvbnRlbnRTdHlsZSA9IFsndy03MicsICdwci00JywgJ2ZpeGVkJywgJ3JpZ2h0LTAnICwnei0xMCddXHJcblxyXG4gICAgICAgIHRhaWx3aW5kQWRkKHRoaXMuYm94U3R5bGUsIHRoaXMuYm94KVxyXG4gICAgICAgIHRhaWx3aW5kQWRkKHRoaXMuY29udGVudFN0eWxlLCB0aGlzLmNvbnRlbnQpXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBBZGRDaGlsZCh0aGlzLmJveCwgdGhpcy5jb250ZW50KVxyXG4gICAgICAgIHJldHVybiB0aGlzLmJveFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWRlQmFyUmlnaHQiLCJpbXBvcnQgeyBOZXcsIFNldEF0dCB9IGZyb20gXCIuLi8uLi9KYXZhc2NyaXB0L3Rvb2xcIjtcclxuXHJcblxyXG5jbGFzcyBTaWduSW5BbmRTaWduVXAge1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLmJveCA9IE5ldygnZGl2JylcclxuICAgIH1cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJveFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWduSW5BbmRTaWduVXAiLCJpbXBvcnQgJ3RhaWx3aW5kY3NzL3RhaWx3aW5kLmNzcydcclxuaW1wb3J0IHsgQWRkQ2hpbGQsIEVsZW1lbnQgfSBmcm9tICcuL0phdmFzY3JpcHQvdG9vbCdcclxuaW1wb3J0IEFwcCBmcm9tICcuL2FwcCdcclxuXHJcbmxldCBjdXJyZW50QXBwID0gbmV3IEFwcCgpO1xyXG4oKCk9PntcclxuICAgIEFkZENoaWxkKEVsZW1lbnQoJyNyb290JyksIGN1cnJlbnRBcHAucmVuZGVyKCkpXHJcbn0pKClcclxuZXhwb3J0IGRlZmF1bHQgY3VycmVudEFwcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==