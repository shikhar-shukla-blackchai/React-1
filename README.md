# Better Comments

- ! \* ? //

# IMP:

- React is JS at the end of the day
- Functional components are function at the end of the day
- JSX is React.createElement() at the end of the day
- React.createElement() is an object(React element) at the end of the day
- EVERY THING IS JS

# NOTE: In create-react-app, the bundler used is webpack.

# Namaste React 🚀

- NOTE: Minify —> Optimization —>Clean console —> Bundle

- ReactElement(Object) => HTML(Browser Understands)
- Package.json is a confiregation for npm

# NPM VS. NPX

- NPM: if you wanted to install a package. you need to use the command 'npm'
- NPX: if you want to exectue a package directly form the surver (dont want to download the package locally), you write npx parcel <something>, to execte the package directlly form the surver

# Parcel

- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Building - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod buldes

# JSX

- JSX - is not HTMl indide JS [X]
- JSX - HTML-like syntex[✔]
- JSX (transpiled before i reaches the JS) - Parcel - Babel
- JSX(Babel transpiles it to) => React.createElement (now JS understand the code) => ReactElement -JS Object => HTMLElement(render)

# Config driven UI

- Config === Data === state
- A Config-Driven UI - is a design and development approach where the UI is dynamically generated based on a configuration file or data structure, rather than being hardcoded UI. The configuration typically defines the structure, layout, behavior, and styling of the UI components.

# Components

- Class Components - Old
- Functional Components - New

# Functional Components

- Functional Components - A React functional componet is a function that returnes some peace of JSX code or React element

* SAME ALL 3
  1- {Title()} - functional componet is a normal js Function
  2- <Title />
  3- <Title></Title>

# Compinent composition

- Composing 2 or more component one another

# Props

- Props === Arguments
- Props are typically passed as arguments to the component, similar to how you would pass arguments to a regular function.

# Map $ key

- unique id/Key (Best practice) >>>>>>>> index as a key >>>>>>> not using key (not acctible)

- It is compalsary to pass "key" if you are using .map() method
- Eg., {resList.map((restaurent) => (
  <RestaurantCard key={restaurent?.info?.id} resData={restaurent} />
  ))}
