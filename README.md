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

# Instance

-In React, an instance refers to a specific, individual realization of a component that has been created and rendered within the application. When you define a React component—whether as a class or a function—you're essentially creating a blueprint. Each time this component is used in the JSX of another component, React creates an instance of it. This instance maintains its own state and lifecycle, allowing for multiple independent uses of the same component within an application.

# Config driven UI

- Config === Data === state
- A Config-Driven UI - is a design and development approach where the UI is dynamically generated based on a configuration file or data structure, rather than being hardcoded UI. The configuration typically defines the structure, layout, behavior, and styling of the UI components.
- Whenever we have react App we have a UI layer and data layer, UI layer will display what is being sent by the data layer.

# Components

- Class Components - Old
- Functional Components - New

# Functional Components

- Functional Components - A React functional componet is a function that returnes some peace of JSX code or React element

* SAME ALL 3
  1- {Title()} - functional componet is a normal js Function
  2- <Title />
  3- <Title></Title>

# Component Composition

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

# Planning for the UI Structure

\*\* Header

- Logo
- Nav Items

\*\* Body

- Search
- Restaurant Container
- Restaurant Card

* Restaurant Card

- Dish Name
- Image
- Restaurant Name
- Rating
- Cuisines
- Time to Deliver

\*\* Footer

- Copyright
- Links
- Address
- Contact

# Hard coded data/state or URL or string

- Never put the hard coded date/state or URL links(URL is also a hard coded string) or hard coded "string" or images inside the any component file

# 100-line File size

- Please remember to keep your components or files below 100 lines of code. If they exceed this limit, it may be beneficial to consider breaking them down into smaller components and files.

# State Variables

- The crucial point about State variables is that whenever they update, React triggers a reconciliation cycle and re-renders the component.
- This means that as soon as the data layer changes, React promptly updates the UI layer. The data layer is always kept in sync with the UI layer.
- To achieve this rapid operation, React employs a reconciliation algorithm, also known as the diffing algorithm or React-Fibre which we will delve into further below.

# Hook

-It's simply a regular JS function. However, it becomes powerful when used within React, as it's provided to us by React itself. These pre-built functions have underlying logic developed by React developers. When we install React via npm, we gain access to these superpowers.

# types of Hooks

- useState()
  -useEffect()

# useState()

- when ever state variable changes, React re-render the component

cosnt [varName, setVarName]= useState(["defaultData"])

- setVarName(); is used to update varName variable

- useState(): is a very powerfull hook which keeps the UI layer in synce with the date layer

# Reconciliation Algorithem === React fiber

-At the core lies React-Fiber - a powerhouse reimplementation of React's algorithm. The goal of React Fiber is to increase its suitability for areas like animation, layout, and gestures. Its headline feature is incremental rendering: the ability to split rendering work into chunks and spread it out over multiple
frames.

# Actual DOM

 <div>
    <p>
      <img/>
    </p>
    <p>
      <img/>
    </p>
 </div>

# Virtual DOM

- Virtual DOM is a representaion of Actual DOM
  -React Virtual DOM === JS bject/React element
  - Virtual DOM is not created by react, it was present loge before React

# Reconciliation

The algorithm React uses to diff one tree with another to determine which parts need to be changed.

# Reconciliation VS rendering

- The reason it can support so many targets is because React is designed so that reconciliation and rendering are separate phases. The reconciler does the work of computing which parts of a tree have changed; the renderer then uses that information to actually update the rendered app.
