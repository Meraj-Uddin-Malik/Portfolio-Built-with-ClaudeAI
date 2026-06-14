// Projects Data Management
// Manage project data and expose rendering utilities via window.ProjectsManager

(function() {
  'use strict';

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A fully responsive e-commerce platform with shopping cart functionality, product filtering, and checkout process. Built with vanilla JavaScript.',
      image: 'https://placehold.co/600x400/0066cc/ffffff?text=E-commerce+Platform',
      tags: ['HTML', 'CSS', 'JavaScript'],
      githubUrl: 'https://github.com/meraj-uddin-malik/project1',
      liveUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Weather Dashboard',
      description: 'Real-time weather application with location search, 5-day forecast, and beautiful data visualizations. Integrated with weather API.',
      image: 'https://placehold.co/600x400/8b28ff/ffffff?text=Weather+Dashboard',
      tags: ['HTML', 'CSS', 'JavaScript', 'API'],
      githubUrl: 'https://github.com/meraj-uddin-malik/project2',
      liveUrl: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'Intuitive task manager with drag-and-drop functionality, priority levels, and local storage persistence. Clean and minimal interface.',
      image: 'https://placehold.co/600x400/10b981/ffffff?text=Task+Manager',
      tags: ['HTML', 'CSS', 'JavaScript'],
      githubUrl: 'https://github.com/meraj-uddin-malik/project3',
      liveUrl: '#',
      featured: true
    }
  ];

  const createProjectCard = (project) => `
    <article class="card project-card">
      <img src="${project.image}" alt="${project.title} project screenshot" class="card-image" loading="lazy">
      <div class="card-content">
        <h3 class="card-title">${project.title}</h3>
        <p class="card-description">${project.description}</p>
        <div class="card-tags">
          ${project.tags.map(tag => `<span class="badge">${tag}</span>`).join('')}
        </div>
        <div class="card-links">
          <a href="${project.githubUrl}" class="btn btn-outline" aria-label="View ${project.title} source code on GitHub" target="_blank" rel="noopener noreferrer">
            View Code
          </a>
          <a href="${project.liveUrl}" class="btn btn-primary" aria-label="View ${project.title} live demo">
            Live Demo
          </a>
        </div>
      </div>
    </article>
  `;

  const renderProjects = (projectsToRender = projects) => {
    const projectsGrid = document.querySelector('.projects-grid');
    if (projectsGrid) {
      projectsGrid.innerHTML = projectsToRender.map(createProjectCard).join('');
    }
  };

  const filterProjectsByTag = (tag) => {
    if (tag === 'all') return projects;
    return projects.filter(p => p.tags.some(t => t.toLowerCase() === tag.toLowerCase()));
  };

  const getFeaturedProjects = () => projects.filter(p => p.featured);

  const searchProjects = (query) => {
    const q = query.toLowerCase();
    return projects.filter(p =>
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.tags.some(t => t.toLowerCase().includes(q))
    );
  };

  window.ProjectsManager = {
    projects,
    renderProjects,
    filterProjectsByTag,
    getFeaturedProjects,
    searchProjects,
    createProjectCard
  };

})();
