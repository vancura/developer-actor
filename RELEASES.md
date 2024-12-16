# 1.0.0

## Major Features

### GitHub Integration

- Added new GitHub repository header component with real-time star count
- Implemented automatic star count updates every 3 minutes
- Added support for both development and production environments
- Included GitHub API integration with token authentication

### Analytics & Production Setup

- Integrated Plausible Analytics for website tracking
- Added production environment settings
- Enhanced logging system with improved type annotations

### Modal System Enhancements

- Implemented comprehensive modal navigation system
- Added detection for nested modal states using `inModal` URL parameter
- Added content updating for existing modals instead of creating new ones
- Improved loading states with visual feedback
- Fixed scroll position and event propagation issues
- Enhanced iframe communication with new message types
- Added special handling for index page navigation

### Table of Contents (TOC) Improvements

- Added close button functionality
- Enhanced filtering system to show parent headings with context hierarchy
- Improved dark mode styling for filter and toolbar
- Optimized progress bar visibility logic
- Added debounced window resize handling
- Adjusted muted text opacity values in both light and dark themes

### Visual and Content Updates

- Updated various diagrams and illustrations
- Fine-tuned Dataset sections in diagrams
- Improved Push illustration
- Enhanced dark mode compatibility
- Updated documentation and README

## Technical Improvements

- Removed unused heading activation method
- Disabled Astro dev toolbar
- Updated Spline runtime
- Enhanced type safety across components
- Improved error handling and logging

## Notes

- This release marks version 1.0.0 of the project
- Includes significant improvements to navigation, user interface, and overall stability
- Added proper documentation in RELEASES file

## Development Environment

- Enhanced development workflow with better error handling
- Improved TypeScript integration and type safety
- Added support for mock data in development environment

# 0.5.1

## Navigation & Modal System

- Added new modal-based navigation system for internal links:
    - Responsive design with semi-transparent overlay
    - Click-outside-to-close functionality
    - Proper event handling and error logging
    - Body scroll prevention when modal is open
- Enhanced cross-page hash link navigation support
- Added smooth scroll behavior for navigation events
- Added new Banner component for improved navigation context on inner pages

## Documentation & Content

- Refactored documentation file structure:
    - Renamed files to follow kebab-case convention
    - Updated all internal cross-references
    - Improved dataset schema documentation
- Updated environment variables documentation:
    - Added `ACTOR_FULL_NAME` and `ACTOR_BUILD_TAGS` variables
    - Enhanced technical details for developers

## Technical Improvements

- Removed unused heading activation method from TOC component
- Disabled Astro dev toolbar
- Updated Spline runtime
- Simplified background color format in Tailwind configuration
- Enhanced navigation handling and link management
- Improved error logging and type safety

## Illustrations & Visual Updates

- Multiple illustration updates and optimizations
- Removed obsolete illustrations
- Removed Future Work illustration
- Cleanup of unused illustration assets

## Bug Fixes

- Fixed Vercel deployment issues
- Improved modal navigation behavior
- Enhanced error handling and logging
- Fixed navigation issues with hash links

## Development & Infrastructure

- Updated spellcheck configurations
- Improved file naming conventions
- Enhanced type safety throughout the codebase
- Optimized asset management

## Note

This release focuses on improving navigation with a new modal system, enhancing documentation structure, and updating illustrations. Users will experience smoother internal navigation and better visual consistency across the platform.

# 0.4.0

## Documentation & Content

- Added new API-related illustrations for Actor operations including initialization, abort, charging money, exit, and more core functionalities
- Enhanced documentation's visual elements with new descriptive illustrations for Actor definition files and concepts
- Added Actors logo and improved text formatting throughout documentation
- Updated content and documentation across multiple sections

## UI/UX Improvements

- Added new hero animation with enhanced appearance and pointer event handling
- Improved header responsiveness for mobile devices
- Enhanced Table of Contents (TOC) component:
    - Optimized progress bar rendering
    - Adjusted base width from 8 to 5 pixels
    - Removed debounced rendering for better performance
- Enhanced Illustration component with dynamic image handling
- Adjusted illustration width for left and right positions from 1/3 to 1/2 of container width

## Layout & Typography

- Improved heading and blockquote spacing in MDX content:
    - Added `clear-both` to headings
    - Adjusted vertical spacing for h2, h3, and h4 headings
    - Added consistent margin spacing to blockquotes
- Enhanced main content typography
- Fixed heading anchor link underline styles
- Improved code example styling:
    - Made code example tabs responsive with smaller text on mobile
    - Increased vertical margin around code switcher component
    - Enhanced button layout with better padding and text scaling

## Technical Improvements

- Updated package dependencies and configurations
- Enhanced ESLint and TypeScript configurations
- Standardized interface naming convention by adding 'I' prefix
- Replaced innerHTML with safer DOM manipulation methods
- Fixed PostCSS configuration
- Improved file paths and code organization throughout the project

## Styling & Visual Updates

- Updated dark mode icon color to accent-dark
- Multiple illustration updates and optimizations
- Image optimization improvements
- Removed Spline-based illustrations in favor of upcoming test images

## Bug Fixes

- Fixed build issues
- Addressed WebKit scrolling problems by deactivating mouse events for the hero
- Fixed file paths and DOMRect fallback in CodeSwitcher component
- Resolved layout spacing issues with clear-both divs
- Fixed robots.txt configuration

## Development & Infrastructure

- Updated ESLint configuration and removed problematic plugins
- Enhanced project configuration and build process
- Improved TypeScript support and type definitions
- Updated package dependencies and configurations
- Standardized file paths and code organization

## Note

This release includes multiple commits focused on documentation updates, UI improvements, and technical enhancements. Users should notice improved performance, better mobile responsiveness, and enhanced visual consistency across the platform.

# 0.3.0

## New Features

- Added smooth hero section docking for TOC with dynamic position updates
- Implemented class-based managers for improved functionality:
    - `CodeCopyManager` for code copying features
    - Refactored smooth scroll functionality into a class-based structure

## Improvements

- Enhanced TOC positioning with smooth transitions from hero section
- Added proper lifecycle management with cleanup handling
- Fixed scroll position preservation when switching code tabs
- Simplified CodeSwitcher initialization

## Code Quality

- Consolidated logger-related imports
- Relocated type definitions for better organization
    - Moved logger types to `utils/logger.ts`
    - Moved scroll types to utils module
- Added proper method binding for better event handling

## Other Changes

- Removed sitemap references
- Updated package dependencies
- Adjusted Prettier settings
- Updated spellcheck configurations

**Full Changelog**: https://github.com/vancura/developer-actor/compare/0.2.1...0.3.0

# 0.2.0

## New Features

- Added synchronized code tab switching across multiple `CodeSwitcher` instances
- Introduced new `CodeSwitcher` component with tab management functionality
- Added `CodeExample` component for individual code examples
- Implemented code copy functionality with visual feedback
- Added `SmoothScroll` component for anchor links with enhanced logging
- Added placeholder images for non-content illustrations
- Enhanced TOC for wide screens with dynamic behavior

## Improvements

- Improved table responsiveness and spacing in MDX content
- Enhanced styles for `HeadingLinks` and MDX content
- Added external link indicator in MDX content
- Refactored TOC visibility thresholds for better user interaction
- Enhanced logging and error handling throughout components
- Improved code readability and organization
- Updated component styling and layout consistency

## Bug Fixes

- Fixed code block overflow issues
- Resolved TOC conflicts with edge-to-edge illustrations
- Fixed anchor styling issues
- Improved handling of heading IDs and scroll behavior

## Other Changes

- Removed wide image layout option
- Updated VSCode settings
- Cleaned up unused components and content files
- Reorganized component configurations
- Updated dependencies

## Breaking Changes

- Removed 'wide' layout option from illustrations and images
- Renamed CopyCode component to CodeCopy
- Removed `SCROLL_OFFSET` from component configurations

**Full Changelog**: https://github.com/vancura/developer-actor/compare/0.1.0...0.2.0

# 0.1.0

Initial release.

**Full Changelog**: https://github.com/vancura/developer-actor/commits/0.1.0
