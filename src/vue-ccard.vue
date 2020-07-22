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
        <p class="card-holder">{{ holder.length > 0 ? holder : 'João da Silva' }}</p>
        <p class="card-exp">{{ exp.length > 0 ? exp : '••/••' }}</p>
      </div>
      <div class="back">
          <p class="card-cvc">{{ cvc.length > 0 ? cvc : '•••' }}</p>
      </div>
    </div>
  </div>
</template>

<script>
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
        cNumber.slice(0, 3) === '301'
        || cNumber.slice(0, 3) === '305'
        || cNumber.slice(0, 2) === '36'
        || cNumber.slice(0, 2) === '38'
      ) {
        this.brand = 'diners';
      } else if (
        [
          '636368', '438935',
          '504175', '451416',
          '509048', '509067',
          '509049', '509069',
          '509050', '509074',
          '509068', '509040',
          '509045', '509051',
          '509046', '509066',
          '509047', '509042',
          '509052', '509043',
          '509064', '509040',
        ].includes(cNumber.slice(0, 6))
      ) {
        this.brand = 'elo';
      } else if (['5067', '4576', '4011'].includes(cNumber.slice(0, 4))) {
        this.brand = 'elo';
      } else if (cNumber.slice(0, 5) === '36297') {
        this.brand = 'elo';
      } else if (cNumber.slice(0, 2) === '34' || cNumber.slice(0, 2) === '37') {
        this.brand = 'amex';
      } else if (
        cNumber.slice(0, 2) === '64'
        || cNumber.slice(0, 2) === '65'
        || cNumber.slice(0, 4) === '6011'
        || cNumber.slice(0, 3) === '622'
      ) {
        this.brand = 'discover';
      } else if (cNumber.slice(0, 2) === '50') {
        this.brand = 'aura';
      } else if (cNumber.slice(0, 2) === '35') {
        this.brand = 'jcb';
      } else if (cNumber.slice(0, 2) === '38' || cNumber.slice(0, 2) === '60') {
        this.brand = 'hipercard';
      } else if (cNumber.slice(0, 1) === '4') {
        this.brand = 'visa';
      } else if (cNumber.slice(0, 1) === '5') {
        this.brand = 'mastercard';
      } else {
        this.brand = '?';
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.vue-c-card {
  perspective: 800px;
  .credit-card,
  .front,
  .back {
    width: 400px;
    height: 200px;
    @media (max-width: 450px) {
      width: 100%;
      height: 200px;
    }
  }
  .credit-card {
    background: #bdbdbd;
    color: #fff;
    border-radius: 6px;
    box-shadow: 1px 1px 8px #333;
    text-shadow: 1px 1px 0px #333;
    margin-bottom: 20px;
    transition: transform 0.5s;
    position: relative;
    transform-style: preserve-3d;
    text-align: left;
    &.flip-cc {
      transform: rotateY(180deg);
    }
    &.visa-cc {
      background: #7598c1;
    }
    &.mastercard-cc {
      background: #e4854b;
    }
    &.diners-cc {
      background: #0078bf;
    }
    &.amex-cc {
      background: #6f93c5;
    }
    &.elo-cc {
      background: #1aa1d8;
    }
    &.discover-cc {
      background: #c77547;
    }
    &.aura-cc {
      background: #918db9;
    }
    &.hipercard-cc {
      background: #88404e;
    }
    &.jcb-cc {
      background: #2d8f48;
    }
    .front,
    .back {
      backface-visibility: hidden;
      position: absolute;
      top: 0;
      left: 0;
    }
    .front {
      z-index: 2;
      transform: rotateY(0deg);
    }
    .back {
      transform: rotateY(-180deg);
    }
    .card-number,
    .card-holder,
    .card-exp,
    .card-cvc {
      font-family: monospace;
      letter-spacing: 1px;
      font-size: 18px;
      position: absolute;
      font-weight: 600;
      @media (max-width: 450px) {
        font-size: 14px !important;
      }
    }
    .card-brand {
      position: absolute;
      top: 15px;
      right: 35px;
      height: 50px;
    }
    .card-number {
      font-size: 21px;
      letter-spacing: 5px;
      top: 80px;
      left: 35px;
      width: 350px;
      height: 23px;
      text-overflow: ellipsis;
      overflow-x: hidden;
      white-space: nowrap;
    }
    .card-holder {
      letter-spacing: 1px;
      text-transform: uppercase;
      width: 240px;
      height: 45px;
      text-overflow: ellipsis;
      overflow-x: hidden;
      top: 120px;
      left: 35px;
      @media (max-width: 500px) {
        width: 60%;
        height: 45px;
      }
    }
    .card-exp {
      top: 120px;
      right: 35px;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 60px;
    }
    .card-cvc {
      top: 90px;
      right: 35px;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 50px;
      padding: 10px;
      z-index: 2;
      background: rgba(0, 0, 0, 0.1);
    }
  }
}
</style>
