
import './style.css'

const app = document.querySelector('#app')

app.innerHTML = `
  <div class="venom-shell">

    <header class="enterprise-header">
      <h1>VENOM</h1>
      <p>THE SHELBY PREDATOR ENTERPRISE</p>
      <p>ENTERPRISE COMMAND CENTER</p>
    </header>

    <main class="shelby-chain">
      <h2>SHELBY CHAIN</h2>
      <p>VENOM REAL-WORLD ASSET PLATFORM</p>

      <section class="chain-status">
        <h3>CHAIN STATUS</h3>
        <p>INITIALIZING</p>
      </section>

      <section class="transaction-center">
        <h3>TRANSACTION CENTER</h3>
        <p>Awaiting first transaction.</p>
      </section>
    </main>

  </div>
`
