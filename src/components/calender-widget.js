import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

/**
 * CalendarWidget
 * <calendar-widget></calendar-widget>
 * Displays a simple calendar
 */
class CalendarWidget extends LitElement {
  static properties = {
    date: {type: Date},
  };

  static styles = css`
    :host {
      display: block;
      width: 250px;
      height: 300px;
      background-color: white;
      border: 1px solid black;
    }

    table {
      width: 100%;
      border-collapse: collapse;
    }

    th,
    td {
      border: 1px solid black;
      padding: 5px;
      text-align: center;
    }

    th {
      background-color: lightgray;
    }
  `;

  constructor() {
    super();
    this.date = new Date();
  }

  render() {
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let firstDayOfMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay();
    let daysInMonth = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate();

    return html`
      <table>
        <thead>
          <tr>
            <th colspan="7">${months[this.date.getMonth()]} ${this.date.getFullYear()}</th>
          </tr>
          <tr>
            ${days.map(day => html`<th>${day}</th>`)}
          </tr>
        </thead>
        <tbody>
          <tr>
            ${Array(firstDayOfMonth).fill(0).map(() => html`<td></td>`)}
            ${Array.from({ length: daysInMonth }, (_, i) => {
              let day = i + 1;
              return html`<td>${day}</td>`;
            })}
          </tr>
        </tbody>
      </table>
    `;
  }
}

customElements.define('calendar-widget', CalendarWidget);