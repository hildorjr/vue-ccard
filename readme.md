# vue-ccard

A Vue.js component that displays a reactive credit card preview for payment forms.

---

<!-- prettier-ignore-start -->
[![version][version-badge]][package]
[![downloads][downloads-badge]][npmtrends]
[![size][size-badge]][package]
[![total downloads][total-downloads-badge]][package]
[![lgtm][lgtm-badge]][lgtm]
[![MIT License][license-badge]][license]
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
[![PRs Welcome][prs-badge]][prs]
<!-- prettier-ignore-end -->

## What is this?

This is a Vue.js component that renders a beautiful virtual credit card which is reactive to user input. The purpose is to enhance user experience in a online purchase situation.

Here is a example of vue-ccard in action:

![Working Example](https://media3.giphy.com/media/JTgJcgmk7nznxpO8X5/giphy.gif)

## Table of contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Installation](#installation)
- [Usage](#usage)
- [Other Solutions](#other-solutions)
- [Issues](#issues)
  - [🐛 Bugs](#-bugs)
  - [💡 Feature Requests](#-feature-requests)
- [Contributors ✨](#contributors-)
- [LICENSE](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

This module is distributed via [npm][npm] which is bundled with [node][node] and
should be installed as one of your project's `dependencies`:

```
npm install --save vue-ccard
```

## Usage

Here is a basic example on how to implement this component:
```
<template>
  <div id="app">
    <vue-c-card
      :number="cc.number"
      :holder="cc.holder"
      :exp="cc.exp"
      :cvc="cc.cvc"
      :is-typing-cvc="isTypingCvc"/>
    
    <label for="number">Number</label>
    <input type="text" v-model="cc.number" id="number">

    <label for="holder">Holder</label>
    <input type="text" v-model="cc.holder" id="holder">

    <label for="exp">Expiration Date</label>
    <input type="text" v-model="cc.exp" id="exp">

    <label for="cvc">CVC</label>
    <input type="text" v-model="cc.cvc"
      @focus="isTypingCvc = true"
      @blur="isTypingCvc = false" id="cvc">
  </div>
</template>

<script>
import VueCCard from 'vue-ccard';

export default {
  name: 'app',
  components: {
    VueCCard,
  },
  data() {
    return {
      isTypingCvc: false,
      cc: {
        number: '',
        holder: '',
        exp: '',
        cvc: '',
      },
    };
  },
};
</script>
```

## Other solutions

I'm not aware of any, if you are please [make a pull request][prs] and add it
here!

## Issues

_Looking to contribute? Look for the [Good First Issue][good-first-issue]
label._

### 🐛 Bugs

Please file an issue for bugs, missing documentation, or unexpected behavior.

[**See Bugs**][bugs]

### 💡 Feature requests

Please file an issue to suggest new features. Vote on feature requests by adding
a 👍. This helps maintainers prioritize what to work on.

[**See Feature Requests**][requests]

## Contributors ✨

Thanks goes to these people ([emoji key][emojis]):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center">
      <a href="https://hildor.com.br" target="_blank">
        <img src="https://avatars2.githubusercontent.com/u/26314970?s=460&u=c15163820da8044436b818e009c83d22ba252fb2&v=4" width="100px;" alt="Hildor Júnior">
        <br>
        <sub>
          <b>Hildor Júnior</b>
        </sub>
      </a>
      <br>
      <a href="https://github.com/hildorjr/vue-ccard/commits?author=hildorjr" title="Commits">📖</a>
    </td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors][all-contributors] specification.
Contributions of any kind welcome!

## LICENSE

MIT

<!-- prettier-ignore-start -->
[npm]: https://www.npmjs.com
[node]: https://nodejs.org
[size-badge]: https://img.shields.io/github/repo-size/hildorjr/vue-ccard?style=flat-square
[version-badge]: https://img.shields.io/npm/v/vue-ccard.svg?style=flat-square
[package]: https://www.npmjs.com/package/vue-ccard
[downloads-badge]: https://img.shields.io/npm/dm/vue-ccard.svg?style=flat-square
[total-downloads-badge]: https://img.shields.io/npm/dt/vue-ccard.svg?color=red&label=total%20downloads&style=flat-square
[lgtm-badge]: https://img.shields.io/lgtm/grade/javascript/github/hildorjr/vue-ccard.svg?logo=lgtm&logoWidth=18&style=flat-square
[lgtm]: https://lgtm.com/projects/g/hildorjr/vue-ccard
[npmtrends]: http://www.npmtrends.com/vue-ccard
[license-badge]: https://img.shields.io/npm/l/vue-ccard.svg?style=flat-square
[license]: https://github.com/hildorjr/vue-ccard/blob/master/LICENSE
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[emojis]: https://github.com/all-contributors/all-contributors#emoji-key
[all-contributors]: https://github.com/all-contributors/all-contributors
[bugs]: https://github.com/hildorjr/vue-ccard/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+sort%3Acreated-desc+label%3Abug
[requests]: https://github.com/hildorjr/vue-ccard/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+sort%3Areactions-%2B1-desc+label%3Aenhancement
[good-first-issue]: https://github.com/hildorjr/vue-ccard/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+sort%3Areactions-%2B1-desc+label%3Aenhancement+label%3A%22good+first+issue%22
<!-- prettier-ignore-end -->
