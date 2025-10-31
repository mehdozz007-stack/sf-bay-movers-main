# Deployment Guide

This guide provides comprehensive instructions for setting up and running the S&F Moving website on your local machine.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

### Required Software

1. **Node.js** (version 18.x or higher)
   - Download from: https://nodejs.org/
   - Verify installation: `node --version`
   - Recommended: Install via [nvm](https://github.com/nvm-sh/nvm) for version management

2. **npm** (comes with Node.js) or **yarn**
   - Verify npm: `npm --version`
   - Or install yarn: `npm install -g yarn`

3. **Git** (for cloning the repository)
   - Download from: https://git-scm.com/
   - Verify installation: `git --version`

### Optional Tools

- **Visual Studio Code** - Recommended IDE
- **Chrome** or **Firefox** - For development and testing
- **React Developer Tools** - Browser extension for debugging

## Installation Steps

### 1. Clone the Repository

```bash
# Using HTTPS
git clone <YOUR_GIT_URL>

# Or using SSH (if configured)
git clone <YOUR_SSH_URL>

# Navigate to the project directory
cd <PROJECT_DIRECTORY>
```

### 2. Install Dependencies

Using npm:
```bash
npm install
```

Using yarn:
```bash
yarn install
```

This will install all required dependencies listed in `package.json`, including:
- React and React DOM
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui components
- TanStack Query
- React Router DOM
- And all other project dependencies

### 3. Environment Configuration

Create a `.env.local` file in the root directory for environment variables:

```bash
# Create the file
touch .env.local
```

Add the following environment variables (if needed):

```env
# Mapbox API Token (for map functionality)
VITE_MAPBOX_TOKEN=your_mapbox_token_here

# Add other environment variables as needed
```

**Note**: To get a Mapbox token:
1. Sign up at https://www.mapbox.com/
2. Create a new token with public scopes
3. Copy the token to your `.env.local` file

### 4. Start Development Server

Using npm:
```bash
npm run dev
```

Using yarn:
```bash
yarn dev
```

The development server will start, and you'll see output similar to:

```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:8080/
  ➜  Network: http://[your-ip]:8080/
  ➜  press h + enter to show help
```

### 5. Open in Browser

Navigate to `http://localhost:8080/` in your web browser to view the website.

The page will automatically reload when you make changes to the source code.

## Build for Production

### Create Production Build

Using npm:
```bash
npm run build
```

Using yarn:
```bash
yarn build
```

This command:
1. Compiles TypeScript to JavaScript
2. Bundles all assets with Vite
3. Optimizes for production (minification, tree-shaking)
4. Outputs files to the `dist/` directory

### Preview Production Build Locally

Using npm:
```bash
npm run preview
```

Using yarn:
```bash
yarn preview
```

This serves the production build locally at `http://localhost:4173/` for testing.

## Project Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality checks |

## Development Workflow

### File Watching

Vite automatically watches for file changes and provides:
- **Hot Module Replacement (HMR)**: Instant updates without full page reload
- **Fast Refresh**: Preserves React component state during updates
- **Error Overlay**: Shows build errors directly in the browser

### Making Changes

1. Edit files in the `src/` directory
2. Changes are automatically detected and reflected in the browser
3. Check the terminal for any build errors or warnings

### Component Development

When creating or modifying components:

1. **Create new component** in `src/components/`:
   ```tsx
   // src/components/YourComponent.tsx
   export const YourComponent = () => {
     return <div>Your content</div>;
   };
   ```

2. **Import and use** in pages or other components:
   ```tsx
   import { YourComponent } from "@/components/YourComponent";
   ```

3. **Use shadcn/ui components**:
   ```tsx
   import { Button } from "@/components/ui/button";
   import { Card } from "@/components/ui/card";
   ```

### Styling

This project uses Tailwind CSS with a custom design system:

1. **Use utility classes**:
   ```tsx
   <div className="flex items-center justify-center p-4 bg-background">
   ```

2. **Use design tokens** from `src/index.css`:
   ```tsx
   <div className="text-gold bg-muted">
   ```

3. **Responsive design**:
   ```tsx
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
   ```

## Troubleshooting

### Port Already in Use

If port 8080 is already in use:

```bash
# Kill the process using the port (Unix/Mac)
lsof -ti:8080 | xargs kill -9

# Or change the port in vite.config.ts
server: {
  port: 3000, // Change to any available port
}
```

### Node Modules Issues

If you encounter dependency issues:

```bash
# Remove node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Clear npm cache
npm cache clean --force

# Reinstall dependencies
npm install
```

### TypeScript Errors

If you see TypeScript errors in the editor:

1. Ensure you're using TypeScript 5.x
2. Restart your IDE/editor
3. Check `tsconfig.json` configuration

### Build Failures

If the build fails:

1. Check for syntax errors in the terminal output
2. Ensure all imports are correct
3. Verify all environment variables are set
4. Clear the Vite cache:
   ```bash
   rm -rf node_modules/.vite
   npm run dev
   ```

### Mapbox Map Not Loading

If the map doesn't display:

1. Verify `VITE_MAPBOX_TOKEN` is set in `.env.local`
2. Check that the token has the correct permissions
3. Ensure the token is active in your Mapbox account
4. Check browser console for specific error messages

## Browser Compatibility

This website is compatible with:

- **Chrome** (last 2 versions)
- **Firefox** (last 2 versions)
- **Safari** (last 2 versions)
- **Edge** (last 2 versions)

## Performance Tips

### Development

- Use React DevTools for component debugging
- Keep the browser console open for warnings
- Use Vite's built-in performance tools

### Production

- Images are optimized during build
- Code is automatically split for faster loading
- CSS is purged of unused styles
- JavaScript is minified and tree-shaken

## Next Steps

After setting up locally:

1. **Explore the code**: Start with `src/pages/Index.tsx`
2. **Customize content**: Update text, images, and contact information
3. **Modify styles**: Edit `src/index.css` and `tailwind.config.ts`
4. **Add features**: Create new components or enhance existing ones
5. **Test thoroughly**: Check all sections and interactive features

## Deployment to Production

This project can be deployed to any static hosting provider that supports SPA routing. Common choices include Vercel, Netlify, and other static hosts. Build the site with `npm run build` and publish the `dist/` folder to your host.

### Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build and deploy
npm run build
netlify deploy --prod --dir=dist
```

### Traditional Hosting

1. Run `npm run build`
2. Upload contents of `dist/` folder to your web server
3. Configure server to serve `index.html` for all routes

## Support

For issues or questions:

1. Review `DEV.md` for architecture details
2. Open an issue in the project repository
3. Contact the development team

## License

This project is proprietary software for S&F Moving. All rights reserved.

---

**Last Updated**: 2025-10-31

**Maintained By**: S&F Moving Development Team
