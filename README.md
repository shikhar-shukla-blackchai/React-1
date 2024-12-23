# Q)

Q) Why is react so fast?

-React is fast due to the implementation of React Fiber the new reconciliation algorithm. React Fiber works by breaking down updates into smaller, manageable chunks and prioritizing them based on their importance. Instead of re-rendering the entire DOM, React Fiber identifies the differences between the previous and current states of the virtual DOM. It then updates only the parts of the real DOM that have changed (updates the DOM only when required). This update process ensures that React delivers a fast and responsive UX.

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
- useEffect()

# State variable

cosnt [varName, setVarName]= useState(["defaultData"])

- IMP: whenever state variables is update, react triggers a recon

- A state variable is used to manage data that can change over time and trigger a re-render when updated.

# useState()

cosnt [varName, setVarName]= useState(["defaultData"])

NOTE: when ever state variable changes, React re-render the whole Reconciliation cycle(re-renders the component)

- React is keeping track of the state variable and will update the state variable using useState(). It will then call/re-render this component once again but it will only update the changed value, which React gets to know by using the diff algorithem

- setVarName(); is used to update varName variable

- useState(): is a very powerfull hook which keeps the UI layer in synce with the date layer

Q) How a "const" var is geting modified/change, how setVarName() is able to change its vale?

- When rendering/calling this component once again but this thme when you invoke this function this "varName" is a new variable then it was before

- React is keep track of every thing, initial itme varName was "defaultData", so as i call setVarName() its call this component onse again it will create a new instance , this varName is different then that older varName and now when new varName is created it is not created with the "defaultData" but it is create with the update value form the "setVarName()"

# SAP (Single Page Application)

-SPA stands for Single Page Application . It's a type of web application or website that interacts with the user by dynamically rewriting the current web page rather than loading entire new pages from the server. In other words, a single HTML page is loaded initially, and then the content is updated dynamically as the user interacts with the application, typically through JavaScript

# 2 type of routing

- Client-Side Routing
  Routing is managed in the browser using JavaScript, allowing the app to load and update content dynamically without reloading the entire page.

- Server-Side Routing
  Routing is managed on the server, with each navigation request fetching a new HTML page from the server.

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

# Monolithic Architecture

-In the past, we used to build large projects where everything was bundled together. Imagine building an entire application where all the code—APIs, user interface, database connections, authentication, even notification services— resides in one massive project with single code base.

# Microservices Architecture

- The idea is to split your application into a set of smaller, interconnected services instead of building a single monolithic application. Each service handles a specific job, like handling user accounts or managing payments. Inside each service, there's a mini-world of its own, with its own set of rules (business logic) and tools (adapters). Some services talk to each other in different ways, like using REST or messaging. Others might even have their own website!
- Eg., The React project I'm working on is a UI microservice.

# How do the microservices interect with each other?

-Each microservice runs on its specific port. This means that different services can be deployed independently, with each one assigned to a different port. All these ports are then mapped to a domain name, providing a unified access point for the entire application.

NOTE: all the microservices are run on there own sepecifice ports

- Eg., domainName/:1234 - UI
- Eg., domainName/api:1000 - BE
- Eg., domainName/sms:3000 - SMS

- They call to different URL, suppose UI whant to connect with the BE, they will make a call to "/api" or will call the port "1000"

# How webApp and UI app fecth the date form the BE

- 1. App Loads => Api call(500ms) => Render UI [X] Bad UX
- 2. App Loads => Render (loading screen) => Api call(500ms) => Render UI [✔] Good UX

# Conditional Rendaring

- Render based on condition is know as Conditional Rendaring, like shimmer UI - untile we get the data from Api call

# useEffect()

SYNTEX: EP-8, 2:01:00
const User = ({ name }) => {

useEffect(()=>{
console.log("useEffect()"); [2nd]
return()=>{
console.log("useEffect Return / ComponentWillUnmount("); [3rd]}
})
console.log('render'); [1st]
return (<div> </div>);
};

render sequence

- [1st] console.log("render");
- [2nd] console.log("useEffect");
- [3rd] console.log("useEffect return/ componetWillUnmount()");

NOTE: in useEffect we can return a callBack function which will be same as componentWillUnmount from Class Componet, and this callBack function will be called when we leave the page

- No Dependency Array: The effect runs after every render, including both initial and subsequent renders.
- Empty Dependency Array []: The effect runs only once, after the initial render (just once)
- Dependency Array with Multiple Variables[var1,var2]: Effect runs when any variable in the array changes.

# useParams by react-router-dom

- In react-router-dom, you can define dynamic routes using a colon (:) followed by a parameter name in the path attribute.

<Route path="/user/:id" element={<User />} />
const {id} = useParams();

When the route is matched, useParams can be used inside the component (e.g., User) to access the dynamic id from the URL.

# Class Component

syntex:
class Users extends React.Component {
constructor(props) {
super(props);
this.state = {All state var in this Obj};
}
render() {
return;
}
}

- Never update state variables directly lick this use this.setState
  this.setState{(key: update)}

Render sequence Class component: constructor >>> render()

# componentDidMount() in class Component

NOTE: [X] componentDidMount() === useEffect() [X]:
naver say componentDidMount() and useEffect() is Equal to each outer they are not, useEffect function/hook did not use componentDidMount method behind the sceen

- componentDidMount(): is use to make api calls, after rendering the shimmer UI, we make the API call and re-render the component.

loadApp/Mounting =>render<Shimmer/> => api call => re-render

Render sequence for multiple childerns

- render Phase
  Parent Constructor
  Parent Render
  Chind1 Constructor
  Chind1 Render
  Chind2 Constructor
  Chind2 Render
  Chind2 Constructor
  Chind2 Render

- Commit Phase
  Chind1 Component did mount
  Chind2 Component did mount
  Chind3 Component did mount
  Parent Component did mount

# ComponentWillUnmount()

- ComponentWillUnmount(): will be called when we are leaving the page/Component in SAP(single page application) and the contant of that page will be removed.

# React lifeCycle-method-diagram

- React is fast because of this 2 phase

  1st) render Phase

  - constructor
  - render

    2nd) Commit phase

  - React updates DOM and refs
  - componentDidMount()

NOTE: react buch the render Phase together and aswell as Commit Phase together

Render sequence for multiple childerns

- render Phase
  Parent Constructor
  Parent Render
  Chind1 Constructor
  Chind1 Render
  Chind2 Constructor
  Chind2 Render
  Chind2 Constructor
  Chind2 Render

- Commit Phase
  Chind1 Component did mount
  Chind2 Component did mount
  Chind3 Component did mount
  Parent Component did mount

---MOUNTING ---

Constructor (dummy)
Render (dummy)

<HTML Dummy>
Component Did Mount
<API Call>
<this.setState> -> state Variable is updated

--- UPDATE ---

render(APi data)

   <HTML (new API data)>
ComponentDid Update()

--- UNMOUNTIMG ---

componentWllUnmount()
