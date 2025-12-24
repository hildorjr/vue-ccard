# vue-ccard

A reactive credit card component for Vue 2 & 3 with TypeScript support.

[![npm version](https://img.shields.io/npm/v/vue-ccard.svg?style=flat-square)](https://www.npmjs.com/package/vue-ccard)
[![npm downloads](https://img.shields.io/npm/dm/vue-ccard.svg?style=flat-square)](https://www.npmjs.com/package/vue-ccard)
[![bundle size](https://img.shields.io/bundlephobia/minzip/vue-ccard?style=flat-square)](https://bundlephobia.com/package/vue-ccard)
[![license](https://img.shields.io/npm/l/vue-ccard.svg?style=flat-square)](https://github.com/hildorjr/vue-ccard/blob/master/LICENSE)

![vue-ccard demo](https://media3.giphy.com/media/JTgJcgmk7nznxpO8X5/giphy.gif)

## Features

- Works with Vue 2 and Vue 3
- TypeScript support
- Auto-detects card brand from number
- Flip animation when typing CVC
- Supports Visa, Mastercard, Amex, Discover, JCB, Diners, Elo, Hipercard, Aura

## Demo

[Live Demo](https://hildorjr.github.io/vue-ccard)

## Installation

```bash
npm install vue-ccard
```

## Usage

```vue
<template>
  <VueCCard
    :number="card.number"
    :holder="card.holder"
    :exp="card.exp"
    :cvc="card.cvc"
    :is-typing-cvc="isTypingCvc"
  />

  <input v-model="card.number" placeholder="Card number">
  <input v-model="card.holder" placeholder="Card holder">
  <input v-model="card.exp" placeholder="MM/YY">
  <input
    v-model="card.cvc"
    placeholder="CVC"
    @focus="isTypingCvc = true"
    @blur="isTypingCvc = false"
  >
</template>

<script>
import VueCCard from 'vue-ccard';

export default {
  components: { VueCCard },
  data() {
    return {
      isTypingCvc: false,
      card: {
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

### With TypeScript

```vue
<script setup lang="ts">
import VueCCard from 'vue-ccard';
import { ref, reactive } from 'vue';

const isTypingCvc = ref(false);
const card = reactive({
  number: '',
  holder: '',
  exp: '',
  cvc: '',
});
</script>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `number` | `String` | `''` | Credit card number |
| `holder` | `String` | `''` | Cardholder name |
| `exp` | `String` | `''` | Expiration date (MM/YY) |
| `cvc` | `String` | `''` | Security code |
| `is-typing-cvc` | `Boolean` | `false` | When true, flips the card to show the back |
| `width` | `Number \| String` | `350` | Card width in pixels (height auto-scales to maintain credit card ratio) |

## Supported Card Brands

The component auto-detects the card brand based on the card number:

- Visa
- Mastercard (including 2-series)
- American Express
- Discover
- JCB
- Diners Club
- Elo
- Hipercard
- Aura

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

[MIT](./LICENSE) © [Hildor Junior](https://hildor.dev)
