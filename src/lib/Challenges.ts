const challenges = [
	{
		id: 'd3',
		title: 'Desafío 3: Portfolio (Micrositio)',
		problem:
			'El equipo tuvo la tarea de diseñar y desarrollar un portfolio digital para documentar nuestro proceso de aprendizaje, producciones y reflexiones a lo largo de la cursada de Gestión Gerencial. El sitio requería una arquitectura de la información estricta, lineamientos de UX específicos (máximo 3 niveles de profundidad, diseño responsive, alta legibilidad) y despliegue automatizado.',
		solution:
			'Desarrollamos una aplicación web estática utilizando SvelteKit. La arquitectura utiliza un layout centralizado para mantener una navegación consistente y ruteo dinámico para mostrar cada desafío. Implementamos un tema oscuro responsive y de alto contraste usando CSS puro para asegurar la legibilidad. Finalmente, configuramos un pipeline de CI/CD con GitHub Actions para construir y desplegar automáticamente el sitio en GitHub Pages con cada push a la rama principal.',
		evidences: [
			{
				title: 'URL del Micrositio en vivo (GitHub Pages)',
				url: 'https://blob1618.github.io/gestion_gerencial'
			},
			{
				title: 'Repositorio de código fuente (GitHub)',
				url: 'https://github.com/blob1618/gestion_gerencial'
			},
			{
				title: 'Video de presentación del equipo (YouTube Embed)',
				url: 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID'
			}
		],
		tools: ['SvelteKit', 'TypeScript', 'CSS', 'Vite', 'Git', 'GitHub Actions'],
		reflection: {
			learned:
				'Aprendimos a configurar un proyecto de SvelteKit para la generación de sitios estáticos (SSG) usando @sveltejs/adapter-static. También dominamos el uso de la variable de ruta base ($app/paths) para despliegues en subdirectorios y la configuración de flujos de trabajo automatizados (workflows) en GitHub.',
			doDifferently:
				'Para futuros proyectos web, definiríamos un sistema de diseño más estricto y armaríamos un prototipo de la interfaz (UI/UX) en una herramienta como Figma antes de ponernos a codear, en lugar de iterar directamente sobre el CSS puro durante la fase de desarrollo.',
			competencies:
				'Pensamiento estructurado, Capacidad de síntesis, Comunicación técnica efectiva.'
		}
	}
];

export default challenges;
