<template>
  <div class="vue-c-card">
    <div class="credit-card" :class="cardClasses">
      <div class="front">
        <img class="card-brand" :src="brandImage" :alt="brand">
        <p class="card-number">{{ displayNumber }}</p>
        <p class="card-holder">{{ holder }}</p>
        <p class="card-exp">{{ displayExp }}</p>
      </div>
      <div class="back">
        <p class="card-cvc">{{ displayCvc }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { cardBrandRules } from './constants';
import { brandImages, genericImages } from './assets/cc-brands';

export default {
  name: 'VueCCard',
  props: {
    number: { type: String, default: '' },
    holder: { type: String, default: '' },
    exp: { type: String, default: '' },
    cvc: { type: String, default: '' },
    isTypingCvc: { type: Boolean, default: false },
  },
  computed: {
    brand() {
      const digits = this.number.replace(/\s/g, '');
      if (!digits) return null;

      for (const rule of cardBrandRules) {
        if (digits.length >= rule.length && rule.prefixes.has(digits.slice(0, rule.length))) {
          return rule.brand;
        }
      }
      return null;
    },
    cardClasses() {
      return {
        'flip-cc': this.isTypingCvc,
        [`${this.brand}-cc`]: this.brand,
      };
    },
    brandImage() {
      if (this.brand && brandImages[this.brand]) {
        return brandImages[this.brand];
      }
      return this.number.length >= 18 ? genericImages.generic01 : genericImages.generic02;
    },
    displayNumber() {
      return this.number || '•••• •••• •••• ••••';
    },
    displayExp() {
      return this.exp || '••/••';
    },
    displayCvc() {
      return this.cvc || '•••';
    },
  },
};
</script>

<style src="./style.css" scoped></style>
