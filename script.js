document.addEventListener('DOMContentLoaded', () => {
  const nodes = document.querySelectorAll('[data-children]');

  nodes.forEach(node => {
    node.addEventListener('click', (e) => {
      e.stopPropagation();
      node.classList.toggle('collapsed');
    });
  });

  document.getElementById('expandAll').addEventListener('click', () => {
    nodes.forEach(node => node.classList.remove('collapsed'));
  });

  document.getElementById('collapseAll').addEventListener('click', () => {
    nodes.forEach(node => node.classList.add('collapsed'));
  });

  // Initialize collapsed at deeper levels for a cleaner first view.
  document.querySelectorAll('[data-children]').forEach((node, index) => {
    if (node.querySelector('strong')?.textContent !== 'CEO') {
      const level = node.closest('ul').parentElement.closest('ul')?.parentElement.closest('ul');
      if (level) {
        node.classList.add('collapsed');
      }
    }
  });
});
