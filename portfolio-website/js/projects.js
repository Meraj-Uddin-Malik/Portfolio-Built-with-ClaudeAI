// Projects Data Management
// Optional file for managing project data dynamically

(function() {
  'use strict';

  // Project data structure
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A fully responsive e-commerce platform with shopping cart functionality, product filtering, and checkout process. Built with vanilla JavaScript.',
      image: 'https://placehold.co/600x400/0066cc/ffffff?text=E-commerce+Platform',
      tags: ['HTML', 'CSS', 'JavaScript'],
      githubUrl: 'https://github.com/yourusername/project1',
      liveUrl: 'https://project1-demo.com',
      featured: true
    },
    {
      id: 2,
      title: 'Weather Dashboard',
      description: 'Real-time weather application with location search, 5-day forecast, and beautiful data visualizations. Integrated with weather API.',
      image: 'https://placehold.co/600x400/8b28ff/ffffff?text=Weather+Dashboard',
      tags: ['HTML', 'CSS', 'JavaScript', 'API'],
      githubUrl: 'https://github.com/yourusername/project2',
      liveUrl: 'https://project2-demo.com',
      featured: true
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'Intuitive task manager with drag-and-drop functionality, priority levels, and local storage persistence. Clean and minimal interface.',
      image: 'https://placehold.co/600x400/10b981/ffffff?text=Task+Manager',
      tags: ['HTML', 'CSS', 'JavaScript'],
      githubUrl: 'https://github.com/yourusername/project3',
      liveUrl: 'https://project3-demo.com',
      featured: true
    }
  ];

  // Create project card HTML
  const createProjectCard = (project) => {
    return `
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
            <a href="${project.liveUrl}" class="btn btn-primary" aria-label="View ${project.title} live demo" target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          </div>
        </div>
      </article>
    `;
  };

  // Render projects to the DOM
  const renderProjects = (projectsToRender = projects) => {
    const projectsGrid = document.querySelector('.projects-grid');

    if (projectsGrid) {
      // Clear existing projects (if dynamically loading)
      // projectsGrid.innerHTML = '';

      // Add project cards
      // projectsToRender.forEach(project => {
      //   projectsGrid.innerHTML += createProjectCard(project);
      // });

      // Note: Projects are currently hardcoded in HTML
      // Uncomment the above code to render projects dynamically
    }
  };

  // Filter projects by tag
  const filterProjectsByTag = (tag) => {
    if (tag === 'all') {
      return projects;
    }
    return projects.filter(project =>
      project.tags.some(t => t.toLowerCase() === tag.toLowerCase())
    );
  };

  // Get featured projects
  const getFeaturedProjects = () => {
    return projects.filter(project => project.featured);
  };

  // Search projects
  const searchProjects = (query) => {
    const lowerQuery = query.toLowerCase();
    return projects.filter(project =>
      project.title.toLowerCase().includes(lowerQuery) ||
      project.description.toLowerCase().includes(lowerQuery) ||
      project.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
    );
  };

  // Export functions for use in other scripts
  window.ProjectsManager = {
    projects,
    renderProjects,
    filterProjectsByTag,
    getFeaturedProjects,
    searchProjects,
    createProjectCard
  };

  // Initialize
  const init = () => {
    // Optionally render projects dynamically
    // renderProjects(getFeaturedProjects());

    console.log('Projects manager initialized');
    console.log(`Total projects: ${projects.length}`);
  };

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
