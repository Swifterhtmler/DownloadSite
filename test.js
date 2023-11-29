let html = '';

for (let i = 1; i <= 27; i++) {
    html += `
    <div class="card">
        <img src="Yrittäjä Gaala Viimeiset Kuva Versiot kopio/kuva ${i}.jpg" alt="Image ${i}">
        <a href="Yrittäjä Gaala Viimeiset Kuva Versiot kopio/kuva ${i}.jpg" download>Lataa Kuva</a>
    </div>
    `;
}

console.log(html);
