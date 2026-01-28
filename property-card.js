class PropertyCard extends HTMLElement {
 constructor() {
 super();
 this.attachShadow({ mode: 'open' });
 this.shadowRoot.innerHTML = `
 <style>
 :host {
 display: block;
 margin: 10px;
 padding: 20px;
 border: 1px solid #ddd;
 border-radius: 5px;
 }
 img {
 max-width: 100%;
 height: auto;
 }
 .details {
 background: #007bff;
 color: white;
 padding: 10px 20px;
 border: none;
 border-radius: 5px;
 cursor: pointer;
 }
 </style>
 <div class="card">
 <h3></h3>
 <p></p>
 <img>
 <div class="price"></div>
 <button class="details">Подробнее</button>
 </div>
 `;
 }

 connectedCallback() {
 const title = this.getAttribute('title');
 const description = this.getAttribute('description');
 const image = this.getAttribute('image');
 const price = this.getAttribute('price');

 this.shadowRoot.querySelector('h3').textContent = title;
 this.shadowRoot.querySelector('p').textContent = description;
 this.shadowRoot.querySelector('img').src = image;
 this.shadowRoot.querySelector('.price').textContent = `Цена: ${price} руб.`;
 }
}

customElements.define('property-card', PropertyCard);