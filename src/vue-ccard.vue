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
        <template v-for="b in brands" :key="b">
          <img class="card-brand"
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
import amexSvg from './assets/cc-brands/amex.svg';
import auraSvg from './assets/cc-brands/aura.svg';
import dinersSvg from './assets/cc-brands/diners.svg';
import discoverSvg from './assets/cc-brands/discover.svg';
import eloSvg from './assets/cc-brands/elo.svg';
import generic01Svg from './assets/cc-brands/generic01.svg';
import generic02Svg from './assets/cc-brands/generic02.svg';
import hipercardSvg from './assets/cc-brands/hipercard.svg';
import jcbSvg from './assets/cc-brands/jcb.svg';
import mastercardSvg from './assets/cc-brands/mastercard.svg';
import visaSvg from './assets/cc-brands/visa.svg';

const brandImages = {
  amex: amexSvg,
  aura: auraSvg,
  diners: dinersSvg,
  discover: discoverSvg,
  elo: eloSvg,
  generic01: generic01Svg,
  generic02: generic02Svg,
  hipercard: hipercardSvg,
  jcb: jcbSvg,
  mastercard: mastercardSvg,
  visa: visaSvg,
};

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
      return brandImages[file] || brandImages.generic02;
    },
    setCardFlag(cardNumber) {
      const cNumber = cardNumber.replace(/\s/g, '');
      
      if (!cNumber) {
        this.brand = '?';
        return;
      }

      for (const rule of cts.cardBrandRules) {
        if (cNumber.length >= rule.length) {
          const prefix = cNumber.slice(0, rule.length);
          if (rule.prefixes.has(prefix)) {
            this.brand = rule.brand;
            return;
          }
        }
      }

      this.brand = '?';
    },
  },
};
</script>

<style src="./style.css" scoped></style>
