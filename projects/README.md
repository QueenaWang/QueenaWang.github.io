# Projects Framework Guide

This directory contains project showcase pages. Here's how to use the framework files:

## Available Project Frameworks

### 1. Adventure X Hackathon (`adventure-x-hackathon.md`)

- **Status**: Framework ready - fill in details and add images/videos
- **Category**: work
- **Importance**: 1 (highest priority - will appear first)

### 2. COVID-19 Modelling (`covid19-modelling.md`)

- **Status**: Framework ready - fill in details and add visualizations
- **Category**: work
- **Importance**: 2

### 3. Timetabling Optimisation (`timetabling-optimisation.md`)

- **Status**: Framework ready - fill in details and add results
- **Category**: work
- **Importance**: 3

## How to Complete a Project

1. **Add Project Images**:

   - Place images in `assets/img/` directory
   - Update the `img:` field in front matter for thumbnail
   - Replace placeholder image paths in the content

2. **Fill in Project Details**:

   - Replace all `[Description]` placeholders
   - Add your actual content in each section
   - Update technical stack, results, etc.

3. **Add Links** (if available):

   - GitHub repository URL
   - Demo/video URL
   - Any other relevant links

4. **Add Visualizations**:

   - Replace `assets/img/placeholder.jpg` with your actual images
   - Use the provided figure include syntax
   - Add captions to explain visualizations

5. **Optional Enhancements**:
   - Add demo videos using `{% include video.liquid %}`
   - Add code snippets if relevant
   - Include links to publications or reports

## Project Structure

Each project file includes:

- **Front Matter**: Metadata (title, description, img, importance, category)
- **Overview**: Project summary
- **Problem Statement**: What problem you solved
- **Solution/Methodology**: How you approached it
- **Results**: Outcomes and impact
- **Visualizations**: Images, charts, screenshots
- **Technical Stack**: Technologies used
- **Links**: GitHub, demos, etc.
- **Lessons Learned**: Reflection and insights

## Hiding Example Projects

To hide the example projects (1_project.md through 9_project.md), you can either:

1. Delete them, or
2. Change their `importance` to a very high number (e.g., 999) so they appear last

## Adding New Projects

Copy one of the framework files and customize it for your new project. Make sure to:

- Set appropriate `importance` (lower numbers appear first)
- Choose correct `category` (work, fun, etc.)
- Add a thumbnail image path in `img:` field
