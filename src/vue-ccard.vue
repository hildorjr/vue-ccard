<template>
  <div class="vue-c-card">
    <div class="credit-card"
      :class="{
        'flip-cc': isTypingCvc,
        'amex-cc': brand === 'amex',
        'diners-cc': brand === 'diners',
        'mastercard-cc': brand === 'mastercard',
        'visa-cc': brand === 'visa',
        'elo-cc': brand === 'elo',
        'hipercard-cc': brand === 'hipercard',
        'aura-cc': brand === 'aura',
        'discover-cc': brand === 'discover',
        'jcb-cc': brand === 'jcb'}">
      <div class="front">
        <template v-for="b in brands">
          <img class="card-brand" :key="b"
            v-show="b === brand"
            :src="brandImgPath(b)" :alt="b">
        </template>
        <img class="card-brand"
          v-if="!brands.includes(brand) && number.length < 18"
          :src="brandImgPath('generic02')" alt="Brand">
        <img class="card-brand"
          v-if="!brands.includes(brand) && number.length >= 18"
          :src="brandImgPath('generic01')" alt="Brand">
        <p class="card-number">{{ number.length > 0 ? number : '•••• •••• •••• ••••' }}</p>
        <p class="card-holder">{{ holder.length > 0 ? holder : '' }}</p>
        <p class="card-exp">{{ exp.length > 0 ? exp : '••/••' }}</p>
      </div>
      <div class="back">
          <p class="card-cvc">{{ cvc.length > 0 ? cvc : '•••' }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import * as cts from './constants';

export default {
  name: 'VueCCard',
  props: {
    number: String,
    holder: String,
    exp: String,
    cvc: String,
    isTypingCvc: Boolean,
  },
  data() {
    return {
      brand: '',
      brands: ['amex', 'diners', 'mastercard', 'visa', 'aura', 'hipercard', 'discover', 'elo', 'jcb'],
    };
  },
  watch: {
    number(newValue) {
      this.setCardFlag(newValue);
    },
  },
  methods: {
    brandImgPath(file) {
      const images = require.context('./assets/cc-brands/', false, /\.svg$/);
      return images(`./${file}.svg`);
    },
    setCardFlag(cardNumber) {
      const cNumber = cardNumber.replace(/\s/g, '');
      if (
        cts.eloNumbers6d.includes(cNumber.slice(0, 6))
        || cts.eloNumbers5d.includes(cNumber.slice(0, 5))
        || cts.eloNumbers4d.includes(cNumber.slice(0, 4))
      ) {
        this.brand = 'elo';
      } else if (
        cts.discoverNumbers4d.includes(cNumber.slice(0, 4))
        || cts.discoverNumbers3d.includes(cNumber.slice(0, 3))
        || cts.discoverNumbers2d.includes(cNumber.slice(0, 2))
      ) {
        this.brand = 'discover';
      } else if (
        cts.dinersNumbers3d.includes(cNumber.slice(0, 3))
        || cts.dinersNumbers2d.includes(cNumber.slice(0, 2))
      ) {
        this.brand = 'diners';
      } else if (
        cts.amexNumbers2d.includes(cNumber.slice(0, 2))
      ) {
        this.brand = 'amex';
      } else if (
        cts.auraNumbers2d.includes(cNumber.slice(0, 2))
      ) {
        this.brand = 'aura';
      } else if (
        cts.jcbNumbers2d.includes(cNumber.slice(0, 2))
      ) {
        this.brand = 'jcb';
      } else if (
        cts.hipercardNumbers2d.includes(cNumber.slice(0, 2))
      ) {
        this.brand = 'hipercard';
      } else if (
        cts.visaNumbers1d.includes(cNumber.slice(0, 1))
      ) {
        this.brand = 'visa';
      } else if (
        cts.masterNumbers1d.includes(cNumber.slice(0, 1))
      ) {
        this.brand = 'mastercard';
      } else {
        this.brand = '?';
      }
    },
  },
};
</script>

<style src="./style.scss" lang="scss" scoped></style>
