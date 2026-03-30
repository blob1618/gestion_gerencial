<script lang="ts">
  import challenges from "$lib/Challenges";
</script>

<div class="projectContainer">
    <div class="projects">
        <h1>Desafíos (D3 - D7)</h1>
        <p class="note">
            Registro de los desafíos abordados durante la cursada, incluyendo resoluciones y reflexiones del equipo.
        </p>
        
        {#each challenges as challenge}
            <div class="project">
                <div class="header">
                    <h2>{challenge.title}</h2>
                    <div class="techsContainer">
                        <span class="tech-label">Herramientas:</span>
                        <div class="techs">
                            {#each challenge.tools as tool}
                                <div class="pill">{tool}</div>
                            {/each}
                        </div>
                    </div>
                </div>
                
                <div class="content">
                    <div class="section">
                        <h3>Problema abordado</h3>
                        <p>{challenge.problem}</p>
                    </div>

                    <div class="section">
                        <h3>Solución propuesta</h3>
                        <p>{challenge.solution}</p>
                    </div>

<div class="section">
    <h3>Evidencias</h3>
    <ul>
        {#each challenge.evidences as evidence}
            <li>
                <a href="{evidence.url}" target="_blank" rel="noreferrer" class="evidence-link">
                    {evidence.title}
                </a>
            </li>
        {/each}
    </ul>
</div>

                    <div class="section reflection-box">
                        <h3>Reflexión del equipo</h3>
                        <p><strong>¿Qué hemos aprendido?</strong> {challenge.reflection.learned}</p>
                        <p><strong>¿Qué haríamos distinto?</strong> {challenge.reflection.doDifferently}</p>
                        <p><strong>Competencias desarrolladas:</strong> {challenge.reflection.competencies}</p>
                    </div>
                </div>
            </div>
        {/each}
    </div>
</div>

<style>
    .projectContainer {
        width: 100%;
        max-width: 900px;
        display: flex;
        justify-content: center;
        box-sizing: border-box;
        text-align: center;
        padding: 1em;
        margin: 0 auto;
    }

    .note {
        opacity: 0.5;
        margin: 0;
        max-width: 900px;
        text-align: left;
    }

    .projectContainer .projects {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 40px;
        margin-top: 30px;
    }

    h1 {
        font-weight: 700;
        text-align: start;
        color: white;
    }

    h2 {
        display: flex;
        margin: 0 0 15px 0;
        font-size: 1.8rem;
    }

    h3 {
        color: #e2e8f0;
        margin-bottom: 0.5rem;
        font-size: 1.2rem;
    }

    .project {
        text-align: start;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        color: white;
        background: #111;
        padding: 2rem;
        width: 100%;
        border-radius: 25px;
        transition: transform 0.2s ease-in-out;
    }

    .project p, .project li {
        font-weight: 100;
        color: #708090;
        line-height: 1.6;
    }

    .project ul {
        margin-top: 0;
        padding-left: 20px;
    }

    .projects {
        width: 100%;
        margin: 50px auto;
        display: grid;
        grid-gap: 1rem;
        grid-template-columns: 1fr;
        margin-bottom: 10px;
    }

    .header {
        border-bottom: 1px solid #333;
        padding-bottom: 15px;
        margin-bottom: 20px;
    }

    .techsContainer {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .tech-label {
        color: #708090;
        font-weight: bold;
    }

    .techs {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }

    .pill {
        background: #222;
        border: 1px solid #444;
        padding: 5px 12px;
        border-radius: 15px;
        font-size: 0.9rem;
    }

    .section {
        margin-bottom: 25px;
    }

    .reflection-box {
        background: #1a1a1a;
        padding: 15px;
        border-left: 4px solid #4CAF50; /* A nice accent color for the reflection */
        border-radius: 0 8px 8px 0;
    }

    .reflection-box p strong {
        color: #e2e8f0;
        display: block;
        margin-top: 10px;
        margin-bottom: 2px;
    }

    @media (min-width: 900px) {
        .projectContainer {
            padding: 0;
        }
        .projects > h1 {
            font-size: 48px;
            margin: 50px 0 0 0;
        }
    }
</style>
