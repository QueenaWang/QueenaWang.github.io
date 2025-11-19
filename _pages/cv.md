---
layout: cv
permalink: /cv/
title: CV
nav: true
nav_order: 5
cv_pdf: CV_Xinyue Wang.pdf # you can also use external links here
cv_view_only: false # Set to true to show PDF in viewer only (no download)
description: Professional experience and academic background in actuarial science, finance, and data analytics.
toc:
  sidebar: left
_styles: >
  .cv-pdf-viewer {
    width: 100%;
    height: 800px;
    border: 1px solid var(--global-divider-color);
    border-radius: 8px;
    margin-bottom: 2rem;
    position: relative;
    overflow: hidden;
    background-color: var(--global-bg-color);
  }
  .cv-pdf-viewer iframe {
    width: 100%;
    height: 100%;
    border: none;
    pointer-events: auto;
  }
  .cv-pdf-viewer::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    pointer-events: none;
  }
  .cv-pdf-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 40px;
    background: linear-gradient(to bottom, var(--global-bg-color), transparent);
    z-index: 2;
    pointer-events: none;
  }
  .cv-pdf-note {
    text-align: center;
    color: var(--global-text-color-light);
    font-size: 0.875rem;
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
    font-style: italic;
  }
---

{% if page.cv_pdf and page.cv_view_only %}

<div class="cv-pdf-viewer-container">
  <div class="cv-pdf-viewer" id="cv-pdf-viewer">
    <div class="cv-pdf-overlay"></div>
    {% if page.cv_pdf contains '://' %}
      <iframe src="{{ page.cv_pdf }}#toolbar=0&navpanes=0&scrollbar=1" type="application/pdf" oncontextmenu="return false;"></iframe>
    {% else %}
      <iframe src="{{ page.cv_pdf | prepend: 'assets/pdf/' | relative_url }}#toolbar=0&navpanes=0&scrollbar=1" type="application/pdf" oncontextmenu="return false;"></iframe>
    {% endif %}
  </div>
  <p class="cv-pdf-note">📄 View-only mode - Right-click and download are disabled</p>
</div>

<script>
  // Disable right-click context menu
  document.getElementById('cv-pdf-viewer').addEventListener('contextmenu', function(e) {
    e.preventDefault();
    return false;
  });

  // Disable common keyboard shortcuts for saving/downloading
  document.addEventListener('keydown', function(e) {
    // Disable Ctrl+S, Ctrl+P, Ctrl+Shift+S, F12
    if ((e.ctrlKey && (e.key === 's' || e.key === 'S' || e.key === 'p' || e.key === 'P')) ||
        (e.ctrlKey && e.shiftKey && (e.key === 's' || e.key === 'S')) ||
        e.key === 'F12') {
      e.preventDefault();
      return false;
    }
  }, false);

  // Disable text selection on the viewer
  document.getElementById('cv-pdf-viewer').style.userSelect = 'none';
  document.getElementById('cv-pdf-viewer').style.webkitUserSelect = 'none';
</script>

{% endif %}
