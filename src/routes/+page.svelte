<script lang="ts">
	import { base } from "$app/paths";

    // Organizing team data here makes the HTML much cleaner and easier to manage.
    // Make sure to update the competencies to reflect your actual roles!
    const teamMembers = [
        { 
            name: "Acosta, Sandra Liliana", 
            competencies: ["Gestión de Proyectos", "Análisis de Requisitos"],
            rpaLink: "https://docs.google.com/document/..." 
        },
        { 
            name: "Fernández, Matías", 
            competencies: ["Desarrollo Svelte", "Lógica de Negocio"],
            rpaLink: "#" 
        },
        { 
            name: "Insaurralde, Mariano", 
            competencies: ["Diseño UI/UX", "Control de Versiones"],
            rpaLink: "#" 
        },
        { 
            name: "Maurel Garcete, Philippe", 
            competencies: ["Gestión Gerencial", "Arquitectura de Datos"],
            rpaLink: "#" 
        },
        { 
            name: "Sánchez, Franco", 
            competencies: ["Testing", "Infraestructura"],
            rpaLink: "#" 
        }
    ];
</script>

<svelte:head>
    <title>Stakeholders - Portfolio</title>
</svelte:head>

<main>
    <section class="hero">
    <img class="logo" src="{base}/images/logo-equipo.jpeg" alt="Logo de Stakeholders" />
        <h1>Stakeholders</h1>
        <p class="subtitle">Portfolio de Ingeniería en Sistemas de Información</p>
    </section>

    <section class="presentation">
        <h2>Presentación del Equipo</h2>
        <div class="video-container">
        <iframe 
            src="https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
            title="Presentación del Equipo Stakeholders" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen>
        </iframe>
        </div>
        
        <div class="team-grid">
            {#each teamMembers as member}
                <div class="member-card">
                    <div class="avatar-placeholder"></div>
                    <h3>{member.name}</h3>
                    <div class="competencies">
                        <strong>Competencias:</strong>
                        <ul>
                            {#each member.competencies as skill}
                                <li>{skill}</li>
                            {/each}
                        </ul>
                    </div>
                </div>
            {/each}
        </div>
    </section>

    <section class="section-block">
        <h2>Desafíos Desarrollados</h2>
        <p>Explora nuestro proceso de aprendizaje y las soluciones propuestas a lo largo de la cursada.</p>
        <a href="{base}/desafios" class="btn">Ver Desafíos (D3 - D7)</a>
    </section>

    <section class="section-block">
        <h2>Ruta Personal de Aprendizaje (RPA)</h2>
        <p>Documentación individual del progreso y aprendizaje de cada integrante del equipo.</p>
        <div class="rpa-links">
            {#each teamMembers as member}
                <a href={member.rpaLink} target="_blank" rel="noreferrer" class="rpa-btn">
                    RPA - {member.name.split(',')[0]}
                </a>
            {/each}
        </div>
    </section>

    <section class="section-block">
        <h2>Mapa Conceptual</h2>
        <p>Integración de saberes teóricos y prácticos de la asignatura.</p>
        <div class="map-container">
            <div class="map-placeholder">Mapa Nivel 1</div>
        </div>
    </section>
</main>

<style>
    :global(body) {
        background-color: #0a0a0a;
        color: #e2e8f0;
        font-family: system-ui, -apple-system, sans-serif;
    }

    main {
        max-width: 1000px;
        margin: 0 auto;
        padding: 2rem 1rem;
        display: flex;
        flex-direction: column;
        gap: 3rem;
    }

    h1, h2, h3 {
        color: #ffffff;
        margin-top: 0;
    }

    .hero {
        text-align: center;
        padding: 3rem 0;
        border-bottom: 1px solid #333;
    }

    .logo {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        object-fit: cover;
        border: 4px solid #4CAF50;
        margin-bottom: 1rem;
    }

    .hero h1 {
        font-size: 3rem;
        margin-bottom: 0.5rem;
    }

    .subtitle {
        color: #a0aec0;
        font-size: 1.2rem;
    }

    .section-block, .presentation {
        background: #111;
        padding: 2rem;
        border-radius: 15px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    }

    .video-container {
        width: 100%;
        max-width: 800px;
        margin: 0 auto 2rem auto;
        border-radius: 10px;
        overflow: hidden;
        /* This forces the container into a perfect 16:9 widescreen box */
        aspect-ratio: 16 / 9; 
        background: #000; /* Keeps a clean black background while the video loads */
    }

    iframe {
        width: 100%;
        height: 100%;
        border: none;
    }

    .team-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1.5rem;
    }

    .member-card {
        background: #1a1a1a;
        padding: 1.5rem;
        border-radius: 10px;
        border: 1px solid #333;
        text-align: center;
    }

    .avatar-placeholder {
        width: 80px;
        height: 80px;
        background: #333;
        border-radius: 50%;
        margin: 0 auto 1rem auto;
    }

    .competencies {
        text-align: left;
        margin-top: 1rem;
        font-size: 0.9rem;
        color: #a0aec0;
    }

    .competencies ul {
        padding-left: 1.2rem;
        margin-top: 0.5rem;
    }

    .btn, .rpa-btn {
        display: inline-block;
        background: transparent;
        color: #fff;
        text-decoration: none;
        padding: 0.8rem 1.5rem;
        border: 2px solid #4CAF50;
        border-radius: 8px;
        transition: all 0.2s;
        font-weight: bold;
    }

    .btn:hover, .rpa-btn:hover {
        background: #4CAF50;
        color: #000;
    }

    .rpa-links {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        margin-top: 1.5rem;
    }

    .map-container {
        margin-top: 1.5rem;
    }

    .map-placeholder {
        width: 100%;
        height: 300px;
        background: #2d3748;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        color: #a0aec0;
        font-weight: bold;
    }
</style>
