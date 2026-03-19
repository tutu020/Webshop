document.addEventListener('DOMContentLoaded', function () {
    console.log("Filter system active ✅");

    const buttons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.product-card');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const filter = this.dataset.filter.toLowerCase();
            
            // Active class bijwerken voor de knoppen
            buttons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            cards.forEach(card => {
                // We pakken de categorie én de tekst van de titel (h4)
                const category = card.dataset.category.toLowerCase();
                const productName = card.querySelector('h4').textContent.toLowerCase();

                // Check of de filter 'all' is, OF de categorie matcht, OF de productnaam de filter bevat
                if (filter === 'all' || 
                    category === filter || 
                    productName.includes(filter)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});
