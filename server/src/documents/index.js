//? Date Formatter
function formatDMY(date) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }); 
  
  // To transform "16 May 2024" format
  const parts = formattedDate.split(" ");
  const finalDate = `${parseInt(parts[1])} ${parts[0]} ${parts[2]}`;
  return finalDate;
  // 27 May 2024
}

export default (products) => {
  const totalAmount = products.reduce((sum, product) => sum + parseFloat(product.amount), 0);
  console.log("totalAmount", totalAmount);
  console.log("products", products);

  // Product row in table
  const productRows = products.map((product) => {
    const { category, description, amount } = product;

    return `
    <tr>
    <td>
      <span class="product-description">${description}</span>
    </td>
    <td class="product-category">${category}</td>
    <td class="product-amount">Rs. ${amount}</td>
  </tr>`;
  }).join("");

    return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <style>
        html {
          font-family: "Geist", sans-serif;
          font-size: 150%;
        }
        .invoice-container {
          padding: 0 3rem;
        }
        .logo-container {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .header-section {
          height: fit-content;
          margin-bottom: 40px;
          margin-top: 40px;
          display: flex;
          justify-content: space-between;
          align-items: start;
        }
        .header-section-title, .table-header {
          font-weight: 700;
          text-transform: uppercase;
        }
        .customer-name {
          font-weight: 600;
          text-transform: uppercase;
        }
        .billed-to,
        .invoice-info {
          flex: 1;
          display: inline-block;
          background: blue;
        }
        .invoice-info {
          margin-left: auto;
          text-align: right;
        }
        .invoice-details {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }
        .invoice-detail-row {
          display: flex;
          justify-content: space-between;
          gap: 0.75rem;
          width: 100%;
        }
        .invoice-detail-key {
          font-weight: 600;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
        }
        th,
        td {
          padding: 1rem 0.5rem;
        }
        th {
          font-weight: 800;
          text-transform: uppercase;
          text-align: right;
        }
        th:first-child {
          text-align: left;
        }
        .border-y {
          border-top: 1px solid #e5e7eb;
          border-bottom: 1px solid #e5e7eb;
        }
        .product-description {
          width: fit-content;
          padding: 0.25rem 0.5rem;
          font-weight: 600;
          border: 1px solid #d4d4d4;
          border-radius: 999px;
          text-transform: uppercase;
        }
        .product-category, .product-amount {
          text-align: right;
        }
        .total-section {
          text-align: right;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          margin: 2rem auto;
        }
        .total-text {
          font-size: 1.25rem;
        }
        .total-amount {
          font-weight: 800;
          font-size: 1.3rem;
          margin-left: 10px;
        }
        .footer {
          width: 100%;
          border-top: 2px solid #d4d4d4;
          padding-top: 1rem;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2rem;
        }
        .footer-icon {
          display: inline-block;
          width: 5rem;
          height: 5rem;
          background-color: #d4d4d4;
        }
        .upper-table th, .upper-table td {
          padding: 0.5rem; 
        }
      </style>
    </head>
    <body>
      <main class="invoice-container">
        <section class="logo-container">
          <div style="width: 100%; text-align: center;">
            <svg style="" width="370" viewBox="0 0 432 123" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="431" height="122" rx="13.5" fill="white" stroke="#C5C5C5"/>
              <path d="M139.75 16.5C148.05 16.5 153 20.75 153 27.8C153 34.9 148.05 39.2 139.75 39.2H132.5V52H126V16.5H139.75ZM132.5 33.55H139.45C143.85 33.55 146.3 31.6 146.3 27.8C146.3 24.1 143.9 22.15 139.45 22.15H132.5V33.55ZM152.398 52L165.198 16.5H173.148L185.948 52H179.148L176.198 43.6H162.148L159.198 52H152.398ZM164.048 38.05H174.298L169.198 23.05L164.048 38.05ZM205.157 16.5C212.507 16.5 217.707 20.45 217.707 27.2C217.707 31.55 215.007 34.6 211.507 35.6C215.157 36.15 216.757 38 217.107 41.75L218.007 52H211.457L210.707 42.7C210.457 39.6 208.607 38.6 204.107 38.6H196.807V52H190.307V16.5H205.157ZM196.807 32.9H204.457C208.657 32.9 211.007 31.05 211.007 27.6C211.007 24.1 208.657 22.15 204.457 22.15H196.807V32.9ZM252.43 39.3C252.43 47.6 246.93 52.8 238.18 52.8C229.43 52.8 223.98 47.6 223.98 39.3V16.45H230.48V39.3C230.48 44.4 233.33 47.15 238.18 47.15C243.08 47.15 245.88 44.4 245.88 39.3V16.45H252.43V39.3Z" fill="black"/>
              <path d="M156 92.6C154.6 100.75 149.3 105.8 140.95 105.8C130.55 105.8 124.15 97.75 124.15 87.3C124.15 76.8 130.5 68.7 140.95 68.7C148.9 68.7 154.25 73.45 155.8 81.3L149 81.6C148.05 77 145.1 74.35 140.85 74.35C133.95 74.35 130.9 80.1 130.9 87.3C130.9 94.45 134 100.15 140.85 100.15C145.3 100.15 148.3 97.3 149.15 92.25L156 92.6ZM176.989 105.8C166.439 105.8 160.039 98.75 160.039 87.3C160.039 75.75 166.439 68.7 176.989 68.7C187.589 68.7 193.889 75.75 193.889 87.3C193.889 98.75 187.589 105.8 176.989 105.8ZM166.839 87.3C166.839 95.3 170.589 100.15 176.989 100.15C183.389 100.15 187.189 95.3 187.189 87.3C187.189 79.2 183.389 74.35 176.989 74.35C170.589 74.35 166.839 79.2 166.839 87.3ZM205.322 93.05C206.072 97.2 209.022 99.95 213.872 99.95C217.622 99.95 220.172 98.45 220.172 95.55C220.122 92.6 217.622 90.9 211.572 89.4C204.472 87.7 199.472 84.65 199.472 78.95C199.472 72.65 204.672 68.7 212.272 68.7C220.122 68.7 225.422 73.55 226.172 80.5L219.622 80.8C219.122 76.85 216.322 74.3 212.172 74.3C208.572 74.3 206.022 76.15 206.122 79.05C206.172 82.45 210.272 83.5 214.322 84.55C221.722 86.3 226.822 89.65 226.822 95.2C226.822 101.9 220.872 105.6 213.572 105.6C205.222 105.6 199.322 100.85 198.722 93.45L205.322 93.05ZM232.836 69.5H241.586L251.386 97L261.136 69.5H269.936V105H263.436V80.6L254.486 104.95H248.286L239.336 80.6V105H232.836V69.5ZM277.318 69.5H301.218V75.15H283.818V84.4H300.618V90H283.818V99.35H301.618V105H277.318V69.5ZM333.48 69.5V75.15H322.68V105H316.18V75.15H305.43V69.5H333.48ZM338.793 69.5H345.293V105H338.793V69.5ZM382.758 92.6C381.358 100.75 376.058 105.8 367.708 105.8C357.308 105.8 350.908 97.75 350.908 87.3C350.908 76.8 357.258 68.7 367.708 68.7C375.658 68.7 381.008 73.45 382.558 81.3L375.758 81.6C374.808 77 371.858 74.35 367.608 74.35C360.708 74.35 357.658 80.1 357.658 87.3C357.658 94.45 360.758 100.15 367.608 100.15C372.058 100.15 375.058 97.3 375.908 92.25L382.758 92.6ZM393.896 93.05C394.646 97.2 397.596 99.95 402.446 99.95C406.196 99.95 408.746 98.45 408.746 95.55C408.696 92.6 406.196 90.9 400.146 89.4C393.046 87.7 388.046 84.65 388.046 78.95C388.046 72.65 393.246 68.7 400.846 68.7C408.696 68.7 413.996 73.55 414.746 80.5L408.196 80.8C407.696 76.85 404.896 74.3 400.746 74.3C397.146 74.3 394.596 76.15 394.696 79.05C394.746 82.45 398.846 83.5 402.896 84.55C410.296 86.3 415.396 89.65 415.396 95.2C415.396 101.9 409.446 105.6 402.146 105.6C393.796 105.6 387.896 100.85 387.296 93.45L393.896 93.05Z" fill="black"/>
              <rect x="266" y="15" width="150" height="38" rx="19" fill="black"/>
              <path d="M289.331 36.573C289.673 38.397 290.965 39.632 293.093 39.632C294.822 39.632 295.981 38.948 295.981 37.599C295.981 36.231 294.803 35.395 292.105 34.711C289.901 34.16 287.906 33.077 287.906 30.911C287.906 28.631 289.73 27.206 292.314 27.206C295.202 27.206 297.121 29.011 297.406 31.5L295.696 31.614C295.449 29.923 294.157 28.802 292.295 28.802C290.756 28.802 289.616 29.619 289.616 30.911C289.616 32.545 291.573 33.001 293.283 33.476C295.734 34.16 297.691 35.376 297.691 37.428C297.691 39.936 295.411 41.228 292.96 41.228C290.015 41.228 287.849 39.423 287.621 36.687L289.331 36.573ZM300.086 27.51H301.72V41H300.086V27.51ZM305.207 27.51H307.487L314.099 39.062V27.51H315.733V41H313.358L306.841 29.638V41H305.207V27.51ZM329.969 36.554C329.475 39.385 327.632 41.304 324.516 41.304C320.64 41.304 318.417 38.188 318.417 34.274C318.417 30.341 320.621 27.206 324.516 27.206C327.385 27.206 329.266 28.992 329.855 31.652L328.126 31.766C327.689 29.866 326.378 28.802 324.516 28.802C321.438 28.802 320.127 31.348 320.127 34.274C320.127 37.181 321.457 39.708 324.516 39.708C326.492 39.708 327.822 38.53 328.221 36.44L329.969 36.554ZM332.371 27.51H340.845V29.106H334.005V33.457H340.617V35.015H334.005V39.404H340.997V41H332.371V27.51ZM348.208 31.538C348.569 29.049 350.336 27.206 353.034 27.206C355.504 27.206 357.328 28.84 357.328 31.044C357.328 33.001 355.77 34.331 353.737 35.604C352.654 36.212 350.051 38.055 349.994 39.404H357.442V41H347.961C347.961 36.972 350.849 35.509 353.148 34.046C354.573 33.134 355.618 32.089 355.618 31.044C355.618 29.733 354.554 28.802 353.034 28.802C351.4 28.802 350.279 29.828 349.918 31.652L348.208 31.538ZM364.764 41.304C361.496 41.304 359.425 38.587 359.425 34.274C359.425 29.923 361.496 27.206 364.764 27.206C368.051 27.206 370.122 29.923 370.122 34.274C370.122 38.587 368.051 41.304 364.764 41.304ZM361.135 34.274C361.135 37.751 362.446 39.708 364.764 39.708C367.101 39.708 368.412 37.751 368.412 34.274C368.412 30.778 367.101 28.802 364.764 28.802C362.446 28.802 361.135 30.778 361.135 34.274ZM372.348 31.538C372.709 29.049 374.476 27.206 377.174 27.206C379.644 27.206 381.468 28.84 381.468 31.044C381.468 33.001 379.91 34.331 377.877 35.604C376.794 36.212 374.191 38.055 374.134 39.404H381.582V41H372.101C372.101 36.972 374.989 35.509 377.288 34.046C378.713 33.134 379.758 32.089 379.758 31.044C379.758 29.733 378.694 28.802 377.174 28.802C375.54 28.802 374.419 29.828 374.058 31.652L372.348 31.538ZM388.904 41.304C385.636 41.304 383.565 38.587 383.565 34.274C383.565 29.923 385.636 27.206 388.904 27.206C392.191 27.206 394.262 29.923 394.262 34.274C394.262 38.587 392.191 41.304 388.904 41.304ZM385.275 34.274C385.275 37.751 386.586 39.708 388.904 39.708C391.241 39.708 392.552 37.751 392.552 34.274C392.552 30.778 391.241 28.802 388.904 28.802C386.586 28.802 385.275 30.778 385.275 34.274Z" fill="white"/>
              <path d="M12 16V16C36.8528 16 57 36.1472 57 61V61H12V16Z" fill="black"/>
              <path d="M12 106C12 81.1472 32.1472 61 57 61V61V106H12V106Z" fill="black"/>
              <path d="M60.3477 16H105.348V16C105.348 40.8528 85.2005 61 60.3477 61V61V16Z" fill="black"/>
              <path d="M60.3477 61H105.348V106V106C80.4949 106 60.3477 85.8528 60.3477 61V61Z" fill="black"/>
            </svg>
          </div>

        </section>
        
        <table class="upper-table" style="margin: 20px 0px 20px 0;" >
          <thead>
            <tr>
              <th class="table-header">BILLED TO : </th>
              <th class="table-header">INVOICE : </th>
            </tr>
          </thead>
          <tbody style="" >
            <tr>
              <td style="text-transform: uppercase;" >${products[0].customer || "N/A"}</td>
              <td style="text-align: right;" >193857093DF</td>
            </tr>
            <tr>
              <td></td>
              <td style="text-align: right;" >${formatDMY(products[0].date)}</td>
            </tr>
          </tbody>
        </table>
        <table class="border-y" style="margin-top: 4rem" >
          <thead>
            <tr style="border-bottom: 1px solid #e5e7eb">
              <th class="table-header">Description</th>
              <th class="table-header">Category</th>
              <th class="table-header">Amount</th>
            </tr>
          </thead>
          <tbody>
            ${productRows}
          </tbody>
        </table>
        <div class="total-section">
          <span class="total-text">Total</span>
          <span class="total-amount">Rs. ${totalAmount}</span>
        </div>
        <table class="footer" style="margin-top: 4rem" >
          <thead>
            <tr style="">
              <th class="footer-qr" style="text-align: right;">
                
                <svg width="150" height="150" viewBox="0 0 232 232"
      xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:ev="http://www.w3.org/2001/xml-events">
  <rect x="0" y="0" width="232" height="232" fill="#ffffff"/>
  <defs>
  <rect id="p" width="8" height="8"/>
  </defs>
  <g fill="#000000">
  <use xlink:href="#p" x="32" y="32"/>
  <use xlink:href="#p" x="32" y="40"/>
  <use xlink:href="#p" x="32" y="48"/>
  <use xlink:href="#p" x="32" y="56"/>
  <use xlink:href="#p" x="32" y="64"/>
  <use xlink:href="#p" x="32" y="72"/>
  <use xlink:href="#p" x="32" y="80"/>
  <use xlink:href="#p" x="32" y="96"/>
  <use xlink:href="#p" x="32" y="104"/>
  <use xlink:href="#p" x="32" y="144"/>
  <use xlink:href="#p" x="32" y="152"/>
  <use xlink:href="#p" x="32" y="160"/>
  <use xlink:href="#p" x="32" y="168"/>
  <use xlink:href="#p" x="32" y="176"/>
  <use xlink:href="#p" x="32" y="184"/>
  <use xlink:href="#p" x="32" y="192"/>
  <use xlink:href="#p" x="40" y="32"/>
  <use xlink:href="#p" x="40" y="80"/>
  <use xlink:href="#p" x="40" y="96"/>
  <use xlink:href="#p" x="40" y="104"/>
  <use xlink:href="#p" x="40" y="112"/>
  <use xlink:href="#p" x="40" y="120"/>
  <use xlink:href="#p" x="40" y="144"/>
  <use xlink:href="#p" x="40" y="192"/>
  <use xlink:href="#p" x="48" y="32"/>
  <use xlink:href="#p" x="48" y="48"/>
  <use xlink:href="#p" x="48" y="56"/>
  <use xlink:href="#p" x="48" y="64"/>
  <use xlink:href="#p" x="48" y="80"/>
  <use xlink:href="#p" x="48" y="96"/>
  <use xlink:href="#p" x="48" y="104"/>
  <use xlink:href="#p" x="48" y="120"/>
  <use xlink:href="#p" x="48" y="144"/>
  <use xlink:href="#p" x="48" y="160"/>
  <use xlink:href="#p" x="48" y="168"/>
  <use xlink:href="#p" x="48" y="176"/>
  <use xlink:href="#p" x="48" y="192"/>
  <use xlink:href="#p" x="56" y="32"/>
  <use xlink:href="#p" x="56" y="48"/>
  <use xlink:href="#p" x="56" y="56"/>
  <use xlink:href="#p" x="56" y="64"/>
  <use xlink:href="#p" x="56" y="80"/>
  <use xlink:href="#p" x="56" y="104"/>
  <use xlink:href="#p" x="56" y="112"/>
  <use xlink:href="#p" x="56" y="120"/>
  <use xlink:href="#p" x="56" y="144"/>
  <use xlink:href="#p" x="56" y="160"/>
  <use xlink:href="#p" x="56" y="168"/>
  <use xlink:href="#p" x="56" y="176"/>
  <use xlink:href="#p" x="56" y="192"/>
  <use xlink:href="#p" x="64" y="32"/>
  <use xlink:href="#p" x="64" y="48"/>
  <use xlink:href="#p" x="64" y="56"/>
  <use xlink:href="#p" x="64" y="64"/>
  <use xlink:href="#p" x="64" y="80"/>
  <use xlink:href="#p" x="64" y="96"/>
  <use xlink:href="#p" x="64" y="104"/>
  <use xlink:href="#p" x="64" y="112"/>
  <use xlink:href="#p" x="64" y="120"/>
  <use xlink:href="#p" x="64" y="128"/>
  <use xlink:href="#p" x="64" y="144"/>
  <use xlink:href="#p" x="64" y="160"/>
  <use xlink:href="#p" x="64" y="168"/>
  <use xlink:href="#p" x="64" y="176"/>
  <use xlink:href="#p" x="64" y="192"/>
  <use xlink:href="#p" x="72" y="32"/>
  <use xlink:href="#p" x="72" y="80"/>
  <use xlink:href="#p" x="72" y="96"/>
  <use xlink:href="#p" x="72" y="120"/>
  <use xlink:href="#p" x="72" y="144"/>
  <use xlink:href="#p" x="72" y="192"/>
  <use xlink:href="#p" x="80" y="32"/>
  <use xlink:href="#p" x="80" y="40"/>
  <use xlink:href="#p" x="80" y="48"/>
  <use xlink:href="#p" x="80" y="56"/>
  <use xlink:href="#p" x="80" y="64"/>
  <use xlink:href="#p" x="80" y="72"/>
  <use xlink:href="#p" x="80" y="80"/>
  <use xlink:href="#p" x="80" y="96"/>
  <use xlink:href="#p" x="80" y="112"/>
  <use xlink:href="#p" x="80" y="128"/>
  <use xlink:href="#p" x="80" y="144"/>
  <use xlink:href="#p" x="80" y="152"/>
  <use xlink:href="#p" x="80" y="160"/>
  <use xlink:href="#p" x="80" y="168"/>
  <use xlink:href="#p" x="80" y="176"/>
  <use xlink:href="#p" x="80" y="184"/>
  <use xlink:href="#p" x="80" y="192"/>
  <use xlink:href="#p" x="88" y="96"/>
  <use xlink:href="#p" x="88" y="112"/>
  <use xlink:href="#p" x="88" y="120"/>
  <use xlink:href="#p" x="88" y="128"/>
  <use xlink:href="#p" x="96" y="48"/>
  <use xlink:href="#p" x="96" y="80"/>
  <use xlink:href="#p" x="96" y="88"/>
  <use xlink:href="#p" x="96" y="96"/>
  <use xlink:href="#p" x="96" y="104"/>
  <use xlink:href="#p" x="96" y="112"/>
  <use xlink:href="#p" x="96" y="136"/>
  <use xlink:href="#p" x="96" y="144"/>
  <use xlink:href="#p" x="96" y="152"/>
  <use xlink:href="#p" x="96" y="160"/>
  <use xlink:href="#p" x="96" y="176"/>
  <use xlink:href="#p" x="96" y="184"/>
  <use xlink:href="#p" x="96" y="192"/>
  <use xlink:href="#p" x="104" y="32"/>
  <use xlink:href="#p" x="104" y="40"/>
  <use xlink:href="#p" x="104" y="48"/>
  <use xlink:href="#p" x="104" y="56"/>
  <use xlink:href="#p" x="104" y="88"/>
  <use xlink:href="#p" x="104" y="96"/>
  <use xlink:href="#p" x="104" y="112"/>
  <use xlink:href="#p" x="104" y="120"/>
  <use xlink:href="#p" x="104" y="136"/>
  <use xlink:href="#p" x="104" y="144"/>
  <use xlink:href="#p" x="104" y="160"/>
  <use xlink:href="#p" x="104" y="168"/>
  <use xlink:href="#p" x="104" y="176"/>
  <use xlink:href="#p" x="104" y="184"/>
  <use xlink:href="#p" x="112" y="40"/>
  <use xlink:href="#p" x="112" y="64"/>
  <use xlink:href="#p" x="112" y="80"/>
  <use xlink:href="#p" x="112" y="96"/>
  <use xlink:href="#p" x="112" y="104"/>
  <use xlink:href="#p" x="112" y="112"/>
  <use xlink:href="#p" x="112" y="128"/>
  <use xlink:href="#p" x="112" y="144"/>
  <use xlink:href="#p" x="112" y="160"/>
  <use xlink:href="#p" x="112" y="184"/>
  <use xlink:href="#p" x="112" y="192"/>
  <use xlink:href="#p" x="120" y="32"/>
  <use xlink:href="#p" x="120" y="40"/>
  <use xlink:href="#p" x="120" y="48"/>
  <use xlink:href="#p" x="120" y="56"/>
  <use xlink:href="#p" x="120" y="88"/>
  <use xlink:href="#p" x="120" y="96"/>
  <use xlink:href="#p" x="120" y="104"/>
  <use xlink:href="#p" x="120" y="120"/>
  <use xlink:href="#p" x="120" y="144"/>
  <use xlink:href="#p" x="120" y="168"/>
  <use xlink:href="#p" x="120" y="176"/>
  <use xlink:href="#p" x="120" y="184"/>
  <use xlink:href="#p" x="120" y="192"/>
  <use xlink:href="#p" x="128" y="32"/>
  <use xlink:href="#p" x="128" y="48"/>
  <use xlink:href="#p" x="128" y="64"/>
  <use xlink:href="#p" x="128" y="72"/>
  <use xlink:href="#p" x="128" y="80"/>
  <use xlink:href="#p" x="128" y="88"/>
  <use xlink:href="#p" x="128" y="112"/>
  <use xlink:href="#p" x="128" y="136"/>
  <use xlink:href="#p" x="128" y="144"/>
  <use xlink:href="#p" x="128" y="168"/>
  <use xlink:href="#p" x="128" y="176"/>
  <use xlink:href="#p" x="128" y="192"/>
  <use xlink:href="#p" x="136" y="96"/>
  <use xlink:href="#p" x="136" y="104"/>
  <use xlink:href="#p" x="136" y="112"/>
  <use xlink:href="#p" x="136" y="144"/>
  <use xlink:href="#p" x="136" y="176"/>
  <use xlink:href="#p" x="136" y="192"/>
  <use xlink:href="#p" x="144" y="32"/>
  <use xlink:href="#p" x="144" y="40"/>
  <use xlink:href="#p" x="144" y="48"/>
  <use xlink:href="#p" x="144" y="56"/>
  <use xlink:href="#p" x="144" y="64"/>
  <use xlink:href="#p" x="144" y="72"/>
  <use xlink:href="#p" x="144" y="80"/>
  <use xlink:href="#p" x="144" y="96"/>
  <use xlink:href="#p" x="144" y="136"/>
  <use xlink:href="#p" x="144" y="144"/>
  <use xlink:href="#p" x="144" y="176"/>
  <use xlink:href="#p" x="152" y="32"/>
  <use xlink:href="#p" x="152" y="80"/>
  <use xlink:href="#p" x="152" y="112"/>
  <use xlink:href="#p" x="152" y="128"/>
  <use xlink:href="#p" x="152" y="136"/>
  <use xlink:href="#p" x="152" y="144"/>
  <use xlink:href="#p" x="152" y="168"/>
  <use xlink:href="#p" x="152" y="176"/>
  <use xlink:href="#p" x="152" y="184"/>
  <use xlink:href="#p" x="160" y="32"/>
  <use xlink:href="#p" x="160" y="48"/>
  <use xlink:href="#p" x="160" y="56"/>
  <use xlink:href="#p" x="160" y="64"/>
  <use xlink:href="#p" x="160" y="80"/>
  <use xlink:href="#p" x="160" y="104"/>
  <use xlink:href="#p" x="160" y="112"/>
  <use xlink:href="#p" x="160" y="120"/>
  <use xlink:href="#p" x="160" y="136"/>
  <use xlink:href="#p" x="160" y="144"/>
  <use xlink:href="#p" x="160" y="152"/>
  <use xlink:href="#p" x="160" y="160"/>
  <use xlink:href="#p" x="160" y="168"/>
  <use xlink:href="#p" x="160" y="176"/>
  <use xlink:href="#p" x="160" y="192"/>
  <use xlink:href="#p" x="168" y="32"/>
  <use xlink:href="#p" x="168" y="48"/>
  <use xlink:href="#p" x="168" y="56"/>
  <use xlink:href="#p" x="168" y="64"/>
  <use xlink:href="#p" x="168" y="80"/>
  <use xlink:href="#p" x="168" y="104"/>
  <use xlink:href="#p" x="168" y="112"/>
  <use xlink:href="#p" x="168" y="128"/>
  <use xlink:href="#p" x="168" y="136"/>
  <use xlink:href="#p" x="168" y="160"/>
  <use xlink:href="#p" x="168" y="176"/>
  <use xlink:href="#p" x="168" y="184"/>
  <use xlink:href="#p" x="176" y="32"/>
  <use xlink:href="#p" x="176" y="48"/>
  <use xlink:href="#p" x="176" y="56"/>
  <use xlink:href="#p" x="176" y="64"/>
  <use xlink:href="#p" x="176" y="80"/>
  <use xlink:href="#p" x="176" y="96"/>
  <use xlink:href="#p" x="176" y="112"/>
  <use xlink:href="#p" x="176" y="176"/>
  <use xlink:href="#p" x="184" y="32"/>
  <use xlink:href="#p" x="184" y="80"/>
  <use xlink:href="#p" x="184" y="104"/>
  <use xlink:href="#p" x="184" y="112"/>
  <use xlink:href="#p" x="184" y="120"/>
  <use xlink:href="#p" x="184" y="144"/>
  <use xlink:href="#p" x="184" y="160"/>
  <use xlink:href="#p" x="184" y="168"/>
  <use xlink:href="#p" x="184" y="184"/>
  <use xlink:href="#p" x="184" y="192"/>
  <use xlink:href="#p" x="192" y="32"/>
  <use xlink:href="#p" x="192" y="40"/>
  <use xlink:href="#p" x="192" y="48"/>
  <use xlink:href="#p" x="192" y="56"/>
  <use xlink:href="#p" x="192" y="64"/>
  <use xlink:href="#p" x="192" y="72"/>
  <use xlink:href="#p" x="192" y="80"/>
  <use xlink:href="#p" x="192" y="104"/>
  <use xlink:href="#p" x="192" y="112"/>
  <use xlink:href="#p" x="192" y="128"/>
  <use xlink:href="#p" x="192" y="136"/>
  <use xlink:href="#p" x="192" y="144"/>
  <use xlink:href="#p" x="192" y="176"/>
  <use xlink:href="#p" x="192" y="192"/>
  </g>
  <g></g></svg>
              </th>
              <td class="footer-text" style="text-align: center; font-size: 100%; color: #4b5563;">
                Must be paid within 3 days to avoid penalties.
              </td>
            </tr>
          </thead>
        </table>
      </main>
    </body>
  </html>`
};


{/* <section class="header-section">
        <div class="billed-to">
          <h3 class="header-section-title">BILLED TO :</h3>
          <div class="customer-name">John Doe</div>
        </div>
        <div class="invoice-info">
          <h3 class="header-section-title">INVOICE :</h3>
          <div class="invoice-details">
            <div class="invoice-detail-row">
              <span class="invoice-detail-key">ID</span>
              <span>INV12345</span>
            </div>
            <div class="invoice-detail-row">
              <span class="invoice-detail-key">Date</span> 
              <span>01 MAY 2024</span>
            </div>
          </div>
        </div>
      </section> */}

// Footer
// <div class="footer" style="display: flex; align-items: center; justify-content: center;" >
//   <div class="footer-icon"></div>
//   <span class="footer-text">
    
//   </span>
// </div>

// <div style="height: 5rem; width: 5rem; margin-left: auto; background-image: url("./qrcode.svg");"></div>