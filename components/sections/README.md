# Sections Components

This directory contains the main page section components for the personal website.

## Components

- **HeroSection**: Main landing section with profile image, scroll indicator, and introduction
- **AboutSection**: Personal information and professional background
- **ExperienceSection**: Work experience timeline with companies and roles
- **ProjectsSection**: Featured projects showcase grid

## Usage

```tsx
import {
  HeroSection,
  AboutSection,
  ExperienceSection,
  ProjectsSection,
} from "../components/sections";
```

## Structure

Each section component:
- Is a client component using Framer Motion animations
- Contains its own data (experiences, projects) where applicable
- Follows consistent styling patterns using Tailwind CSS
- Implements proper TypeScript interfaces for data structures
