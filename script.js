document.addEventListener('DOMContentLoaded', () => {
    const toggleThemeButton = document.getElementById('toggleTheme');
    const cardsContainer = document.querySelector('.cards');

    // Datos simulados para las tarjetas
    const tendencias = [
        { titulo: 'IA Generativa', descripcion: 'El futuro de la creatividad impulsado por algoritmos.', categoria: 'IA' },
        { titulo: 'Paneles Solares 4.0', descripcion: 'Eficiencia mejorada y diseño innovador.', categoria: 'Energía' },
        { titulo: 'Finanzas Descentralizadas (DeFi)', descripcion: 'La evolución de las criptomonedas.', categoria: 'Cripto' }
    ];

    // Crear tarjetas dinámicamente
    tendencias.forEach(({ titulo, descripcion, categoria }) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <h3>${titulo}</h3>
            <p>${descripcion}</p>
            <span class="categoria">${categoria}</span>
        `;
        card.addEventListener('click', () => {
            alert(`Más detalles sobre ${titulo}`);
        });
        cardsContainer.appendChild(card);
    });

    // Alternar entre modos oscuro y claro
    toggleThemeButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        toggleThemeButton.textContent = document.body.classList.contains('dark-mode')
            ? 'Cambiar a Modo Claro'
            : 'Cambiar a Modo Oscuro';
    });

    // Gráfico principal debajo de las tarjetas
    const ctx = document.createElement('canvas');
    ctx.setAttribute('aria-label', 'Gráfico de tendencias tecnológicas');
    ctx.setAttribute('role', 'img');
    cardsContainer.after(ctx);

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['IA Generativa', 'Energías Renovables', 'DeFi'],
            datasets: [{
                label: 'Popularidad en 2025',
                data: [85, 70, 65],
                backgroundColor: ['#6200ea', '#03dac6', '#018786']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: true, position: 'top' }
            }
        }
    });

    // Gráficos adicionales para secciones específicas
    // Gráfico para "Inteligencia Artificial"
    const chartAI = document.getElementById('chartAI');
    new Chart(chartAI, {
        type: 'line',
        data: {
            labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
            datasets: [{
                label: 'Tendencias de IA',
                data: [10, 25, 40, 60, 80],
                borderColor: '#6200ea',
                backgroundColor: 'rgba(98, 0, 234, 0.2)',
                tension: 0.3
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'top' },
                title: { display: true, text: 'Evolución de la IA' }
            }
        }
    });

    // Gráfico para "Energía Renovable"
    const chartEnergia = document.getElementById('chartEnergia');
    new Chart(chartEnergia, {
        type: 'bar',
        data: {
            labels: ['Solar', 'Eólica', 'Hidráulica', 'Geotérmica', 'Biomasa'],
            datasets: [{
                label: 'Popularidad por Tipo',
                data: [70, 80, 50, 40, 30],
                backgroundColor: ['#03dac6', '#018786', '#6200ea', '#bb86fc', '#ff0266']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'top' },
                title: { display: true, text: 'Fuentes de Energía Renovable' }
            }
        }
    });

    // Gráfico para "Criptomonedas"
    const chartCripto = document.getElementById('chartCripto');
    new Chart(chartCripto, {
        type: 'pie',
        data: {
            labels: ['Bitcoin', 'Ethereum', 'Dogecoin', 'Cardano', 'Otros'],
            datasets: [{
                label: 'Distribución del Mercado',
                data: [40, 30, 15, 10, 5],
                backgroundColor: ['#ff0266', '#bb86fc', '#03dac6', '#018786', '#6200ea']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'top' },
                title: { display: true, text: 'Participación en el Mercado Cripto' }
            }
        }
    });
});
