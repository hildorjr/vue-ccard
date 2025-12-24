<template>
  <div class="demo-page">
    <header>
      <h1>vue-ccard</h1>
      <p class="tagline">A reactive credit card component for Vue 2 & 3</p>
      <div class="links">
        <a href="https://github.com/hildorjr/vue-ccard" target="_blank">GitHub</a>
        <a href="https://www.npmjs.com/package/vue-ccard" target="_blank">npm</a>
      </div>
    </header>

    <main>
      <section class="preview">
        <VueCCard
          :number="card.number"
          :holder="card.holder"
          :exp="card.exp"
          :cvc="card.cvc"
          :is-typing-cvc="isTypingCvc"
        />
      </section>

      <section class="form">
        <div class="field">
          <label for="number">Card Number</label>
          <input
            id="number"
            v-model="card.number"
            type="text"
            placeholder="4111 1111 1111 1111"
            maxlength="19"
            @input="formatCardNumber"
          >
        </div>

        <div class="field">
          <label for="holder">Card Holder</label>
          <input
            id="holder"
            v-model="card.holder"
            type="text"
            placeholder="John Doe"
            maxlength="26"
          >
        </div>

        <div class="row">
          <div class="field">
            <label for="exp">Expiry</label>
            <input
              id="exp"
              v-model="card.exp"
              type="text"
              placeholder="MM/YY"
              maxlength="5"
              @input="formatExpiry"
            >
          </div>

          <div class="field">
            <label for="cvc">CVC</label>
            <input
              id="cvc"
              v-model="card.cvc"
              type="text"
              placeholder="123"
              maxlength="4"
              @focus="isTypingCvc = true"
              @blur="isTypingCvc = false"
            >
          </div>
        </div>
      </section>

      <section class="test-cards">
        <h3>Test Card Numbers</h3>
        <div class="cards-grid">
          <button v-for="testCard in testCards" :key="testCard.number" @click="applyTestCard(testCard)">
            <span class="brand">{{ testCard.brand }}</span>
            <span class="number">{{ testCard.number }}</span>
          </button>
        </div>
      </section>

      <section class="docs">
        <h2>Installation</h2>
        <pre><code>npm install vue-ccard</code></pre>

        <h2>Usage</h2>
        <pre><code>&lt;template&gt;
  &lt;VueCCard
    :number="cardNumber"
    :holder="cardHolder"
    :exp="cardExp"
    :cvc="cardCvc"
    :is-typing-cvc="isTypingCvc"
  /&gt;
&lt;/template&gt;

&lt;script&gt;
import VueCCard from 'vue-ccard';

export default {
  components: { VueCCard },
  data() {
    return {
      cardNumber: '',
      cardHolder: '',
      cardExp: '',
      cardCvc: '',
      isTypingCvc: false,
    };
  },
};
&lt;/script&gt;</code></pre>

        <h2>Props</h2>
        <table>
          <thead>
            <tr>
              <th>Prop</th>
              <th>Type</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>number</code></td>
              <td>String</td>
              <td>Credit card number</td>
            </tr>
            <tr>
              <td><code>holder</code></td>
              <td>String</td>
              <td>Cardholder name</td>
            </tr>
            <tr>
              <td><code>exp</code></td>
              <td>String</td>
              <td>Expiration date (MM/YY)</td>
            </tr>
            <tr>
              <td><code>cvc</code></td>
              <td>String</td>
              <td>Security code</td>
            </tr>
            <tr>
              <td><code>is-typing-cvc</code></td>
              <td>Boolean</td>
              <td>Flips card to show back</td>
            </tr>
          </tbody>
        </table>

        <h2>Supported Cards</h2>
        <p class="supported-cards">Visa, Mastercard, American Express, Discover, JCB, Diners Club, Elo, Hipercard, Aura</p>
      </section>
    </main>

    <footer>
      <p>MIT License · Made by <a href="https://hildor.dev" target="_blank">Hildor Júnior</a></p>
    </footer>
  </div>
</template>

<script>
import VueCCard from 'vue-ccard';

export default {
  name: 'App',
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
      testCards: [
        { brand: 'Visa', number: '4111 1111 1111 1111' },
        { brand: 'Mastercard', number: '5555 5555 5555 4444' },
        { brand: 'Mastercard 2', number: '2223 0000 4841 0010' },
        { brand: 'Amex', number: '3714 496353 98431' },
        { brand: 'Discover', number: '6011 1111 1111 1117' },
        { brand: 'JCB', number: '3530 1113 3330 0000' },
        { brand: 'Diners', number: '3056 9309 0259 04' },
        { brand: 'Elo', number: '6362 9700 0457 0013' },
      ],
    };
  },
  methods: {
    formatCardNumber(e) {
      let value = e.target.value.replace(/\s/g, '').replace(/\D/g, '');
      value = value.match(/.{1,4}/g)?.join(' ') || '';
      this.card.number = value;
    },
    formatExpiry(e) {
      let value = e.target.value.replace(/\D/g, '');
      if (value.length >= 2) {
        value = value.slice(0, 2) + '/' + value.slice(2);
      }
      this.card.exp = value;
    },
    applyTestCard(testCard) {
      this.card.number = testCard.number;
      this.card.holder = 'John Doe';
      this.card.exp = '12/28';
      this.card.cvc = '123';
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'DM Sans', system-ui, sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  min-height: 100vh;
  color: #e8e8e8;
}

.demo-page {
  max-width: 520px;
  margin: 0 auto;
  padding: 48px 24px;
}

header {
  text-align: center;
  margin-bottom: 48px;

  h1 {
    font-size: 2.5rem;
    font-weight: 600;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .tagline {
    color: #a0a0a0;
    margin-top: 8px;
    font-size: 1.1rem;
  }

  .links {
    margin-top: 16px;
    display: flex;
    gap: 16px;
    justify-content: center;

    a {
      color: #667eea;
      text-decoration: none;
      font-weight: 500;
      padding: 8px 16px;
      border: 1px solid #667eea;
      border-radius: 6px;
      transition: all 0.2s;

      &:hover {
        background: #667eea;
        color: #fff;
      }
    }
  }
}

main {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.preview {
  display: flex;
  justify-content: center;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 20px;

  .row {
    display: flex;
    gap: 16px;
  }

  .field {
    display: flex;
    flex-direction: column;
    gap: 6px;
    flex: 1;

    label {
      font-size: 0.85rem;
      font-weight: 500;
      color: #a0a0a0;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    input {
      padding: 14px 16px;
      border: 2px solid #2a2a4a;
      border-radius: 8px;
      background: #1a1a2e;
      color: #fff;
      font-size: 1rem;
      font-family: inherit;
      transition: border-color 0.2s;

      &:focus {
        outline: none;
        border-color: #667eea;
      }

      &::placeholder {
        color: #555;
      }
    }
  }
}

.test-cards {
  margin-top: 16px;

  h3 {
    font-size: 0.85rem;
    font-weight: 500;
    color: #a0a0a0;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 12px;
  }

  .cards-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;

    button {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 4px;
      padding: 12px;
      background: #1a1a2e;
      border: 1px solid #2a2a4a;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.2s;

      &:hover {
        border-color: #667eea;
        background: #1f1f3a;
      }

      .brand {
        font-size: 0.75rem;
        font-weight: 600;
        color: #667eea;
        text-transform: uppercase;
      }

      .number {
        font-size: 0.8rem;
        color: #888;
        font-family: monospace;
      }
    }
  }
}

.docs {
  margin-top: 32px;
  padding-top: 32px;
  border-top: 1px solid #2a2a4a;

  h2 {
    font-size: 1.1rem;
    font-weight: 600;
    color: #667eea;
    margin-bottom: 12px;
    margin-top: 24px;

    &:first-child {
      margin-top: 0;
    }
  }

  pre {
    background: #0d0d1a;
    border: 1px solid #2a2a4a;
    border-radius: 8px;
    padding: 16px;
    overflow-x: auto;

    code {
      font-family: 'JetBrains Mono', 'Fira Code', monospace;
      font-size: 0.85rem;
      color: #a0d0ff;
      white-space: pre;
    }
  }

  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.9rem;

    th, td {
      text-align: left;
      padding: 10px 12px;
      border-bottom: 1px solid #2a2a4a;
    }

    th {
      color: #a0a0a0;
      font-weight: 500;
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    td {
      code {
        background: #0d0d1a;
        padding: 2px 6px;
        border-radius: 4px;
        font-family: monospace;
        font-size: 0.85rem;
        color: #a0d0ff;
      }
    }
  }

  .supported-cards {
    color: #a0a0a0;
    line-height: 1.6;
  }
}

footer {
  margin-top: 64px;
  text-align: center;
  color: #666;
  font-size: 0.9rem;

  a {
    color: #667eea;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
