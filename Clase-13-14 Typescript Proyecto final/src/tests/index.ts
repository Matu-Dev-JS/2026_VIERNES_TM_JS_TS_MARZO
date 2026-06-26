// Importar las pruebas para que se registren en el runner
import './component.test'

import { runTests } from "./runner";

// Ejecutar las pruebas cuando la página se cargue
window.addEventListener("DOMContentLoaded", async () => {
    const container = document.getElementById("test-results");
    if (!container) return;

    container.innerHTML = `
        <div class="loading-state">
            <div class="spinner"></div>
            <p>Ejecutando suite de pruebas...</p>
        </div>
    `;

    // Retraso mínimo para ver el efecto de carga y asegurar transiciones suaves
    await new Promise((resolve) => setTimeout(resolve, 300));

    const suiteResult = await runTests();

    // Calcular tasa de éxito
    const successRate = suiteResult.total > 0 
        ? Math.round((suiteResult.passed / suiteResult.total) * 100) 
        : 0;

    const isSuccess = suiteResult.failed === 0;

    // Generar la estructura del dashboard
    container.innerHTML = `
        <header class="test-header">
            <div class="header-main">
                <h1>Suite de Pruebas</h1>
                <span class="suite-status-badge ${isSuccess ? 'status-pass' : 'status-fail'}">
                    ${isSuccess ? 'PASANDO' : 'FALLANDO'}
                </span>
            </div>
            <p class="subtitle">Pruebas unitarias básicas ejecutadas en tiempo real sin librerías externas.</p>
        </header>

        <section class="stats-grid">
            <div class="stat-card">
                <span class="stat-label">Total Pruebas</span>
                <span class="stat-value">${suiteResult.total}</span>
            </div>
            <div class="stat-card stat-success">
                <span class="stat-label">Pasadas</span>
                <span class="stat-value">${suiteResult.passed}</span>
            </div>
            <div class="stat-card ${suiteResult.failed > 0 ? 'stat-error' : 'stat-neutral'}">
                <span class="stat-label">Fallidas</span>
                <span class="stat-value">${suiteResult.failed}</span>
            </div>
            <div class="stat-card">
                <span class="stat-label">Tasa de Éxito</span>
                <span class="stat-value">${successRate}%</span>
            </div>
            <div class="stat-card">
                <span class="stat-label">Duración</span>
                <span class="stat-value">${suiteResult.durationMs.toFixed(2)} ms</span>
            </div>
        </section>

        <section class="test-list-section">
            <h2>Detalle de los Resultados</h2>
            <div class="test-list">
                ${suiteResult.results.map((result) => {
                    return `
                        <div class="test-item ${result.passed ? 'item-pass' : 'item-fail'}">
                            <div class="test-item-header">
                                <span class="status-icon">${result.passed ? '✓' : '✗'}</span>
                                <span class="test-name">${result.name}</span>
                                <span class="test-duration">${result.durationMs.toFixed(2)} ms</span>
                            </div>
                            ${!result.passed && result.error ? `
                                <div class="test-error-details">
                                    <div class="error-msg">${result.error.message}</div>
                                    ${result.error.stack ? `
                                        <pre class="error-stack"><code>${escapeHTML(result.error.stack)}</code></pre>
                                    ` : ''}
                                </div>
                            ` : ''}
                        </div>
                    `;
                }).join('')}
            </div>
        </section>

        <footer class="test-footer">
            <button id="run-again-btn" class="btn btn-primary">Volver a Ejecutar</button>
            <a href="index.html" class="btn btn-secondary">Volver a la Aplicación</a>
        </footer>
    `;

    // Manejador para volver a ejecutar las pruebas
    document.getElementById("run-again-btn")?.addEventListener("click", () => {
        window.location.reload();
    });
});

/**
 * Escapa caracteres HTML para evitar inyecciones al renderizar el stack trace.
 */
function escapeHTML(str: string): string {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
