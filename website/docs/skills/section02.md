# 02 - Web Application Development

## Web Platform Fundamentals

:::note[Relevant DSS-P Skills]

- 3\. Technology > 3\.1 Software Development > Web Application Core Technology

:::

### Web Concepts

- [World Wide Web](https://en.wikipedia.org/wiki/World_Wide_Web) - An information space where documents and other web resources are identified by Uniform Resource Locators (URLs), interlinked by hypertext links, and accessible via the Internet
  - [Hypertext](https://en.wikipedia.org/wiki/Hypertext) - A text displayed on a computer display or other electronic devices with references (hyperlinks) to other text that the reader can immediately access
  - [Semantic Web](https://en.wikipedia.org/wiki/Semantic_Web) - An extension of the World Wide Web that allows Internet data to be machine-readable through standards set by the W3C, enabling automated agents to process information more intelligently
  - [URI](https://en.wikipedia.org/wiki/Uniform_Resource_Identifier) - A unique sequence of characters that identifies a logical or physical resource
  - [URL](https://url.spec.whatwg.org/) - A standard that defines URLs, domains, IP addresses, the application/x-www-form-urlencoded format, and their API
- Core Web Protocols & Languages
  - [HTTP](https://en.wikipedia.org/wiki/HTTP) - An application protocol for distributed, collaborative, hypermedia information systems
    - [HTTP cookie](https://en.wikipedia.org/wiki/HTTP_cookie) - A small piece of data that a server sends to a user's web browser
  - [HTML](https://html.spec.whatwg.org/) - The World Wide Web's core markup language
  - [CSS](https://www.w3.org/Style/CSS/) - A simple mechanism for adding style (e.g., fonts, colors, spacing) to Web documents
- Real-time & Messaging Protocols
  - [WebSockets](https://websockets.spec.whatwg.org/) - A technology that makes it possible to open a two-way interactive communication session between the user's browser and a server
  - [WebRTC](https://webrtc.org/) - A free and open-source project providing web browsers and mobile applications with real-time communication (RTC)
  - [Server-sent events](https://html.spec.whatwg.org/multipage/server-sent-events.html#server-sent-events) - A technology to enable servers to push data to web pages over HTTP or using dedicated server-push protocols
  - [MQTT](https://mqtt.org/) - A lightweight, publish-subscribe, machine to machine network protocol for message queue/message queuing service
  - [AMQP](https://www.amqp.org/) - An open standard application layer protocol for message-oriented middleware
- Data & Event Specifications
  - [CloudEvents](https://cloudevents.io/) - A specification for describing event data in a common way
  - [JSON Merge Patch](https://datatracker.ietf.org/doc/html/rfc7396) - A JSON format that describes changes to be made to a target JSON document
  - [OpenAPI spec](https://www.openapis.org/) - A standard, language-agnostic interface to HTTP APIs
  - [TypeSpec](https://typespec.io/) - A minimal language that helps developers describe API shapes in a familiar way
  - API Tooling
    - [Redocly CLI](https://redocly.com/) - An open-source command-line tool that helps you lint, bundle, and preview OpenAPI definitions
- Web Performance Concepts
  - [DNS Prefetching](https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/dns-prefetch) - A mechanism to resolve domain names before a user tries to follow a link
- Web Application Types
  - [Progressive web app](https://en.wikipedia.org/wiki/Progressive_web_app) - A type of application software delivered through the web, built using common web technologies including HTML, CSS, JavaScript, and WebAssembly

### Browser Technologies & DOM

- Browsers
  - [Chrome](https://www.google.com/chrome/) - A freeware, cross-platform web browser developed by Google
  - [Chromium](https://www.chromium.org/Home/) - An open-source browser project that aims to build a safer, faster, and more stable way for all users to experience the web
  - [Firefox](https://www.mozilla.org/en-US/firefox/) - A free and open-source web browser developed by the Mozilla Foundation
  - [w3m](https://w3m.sourceforge.net/) - A text-based web browser as well as a pager
  - [EWW](https://www.gnu.org/software/emacs/manual/html_mono/eww.html) - The Emacs Web Wowser, a web browser for Emacs
- Rendering Engines
  - [WebKit](https://developer.apple.com/documentation/webkit) - The framework for displaying rich, interactive web content in your apps
  - [Gecko](https://developer.mozilla.org/en-US/docs/Glossary/Gecko) - The web browser engine developed by Mozilla
  - [Blink](https://www.chromium.org/blink/) - The rendering engine used by Chromium
  - [Servo](https://servo.org/) - A modern, high-performance browser engine designed for both application and embedded use
- Scripting Engines
  - [V8 (JavaScript engine)](https://v8.dev/) - Google's open source high-performance JavaScript and WebAssembly engine, written in C++
  - [JavaScriptCore](https://developer.apple.com/documentation/javascriptcore) - The JavaScript engine that powers Safari and other apps on Apple platforms
- Client Scripting APIs
  - [XMLHttpRequest (XHR)](https://xhr.spec.whatwg.org/) - An API that provides scripted client functionality for transferring data between a client and a server
  - [Fetch Standard](https://fetch.spec.whatwg.org/) - A living standard that defines requests, responses, and the process that binds them: fetching
  - [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) - The means for drawing graphics via JavaScript and the HTML `<canvas>` element
  - [WebGL API](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API) - A JavaScript API for rendering high-performance interactive 3D and 2D graphics within any compatible web browser without the use of plug-ins
  - [Web Neural Network API (WebNN)](https://www.w3.org/TR/webnn/) - An emerging web standard that allows web apps and frameworks to accelerate deep neural networks with on-device hardware such as GPUs, CPUs, or NPUs
- Site Analyzers
  - [Wappalyzer](https://www.wappalyzer.com/) - A technology profiler that shows you what websites are built with

### Web Application Architectures

- [Single-page application](https://en.wikipedia.org/wiki/Single-page_application) - A web application or website that interacts with the user by dynamically rewriting the current web page with new data from the web server
- [Multi-page application](https://www.sanity.io/glossary/multipage-application) - A traditional web structure with multiple pages that are independently downloaded from the server, each having its own URL and loaded separately when requested by the user
- [Microfrontend](https://en.wikipedia.org/wiki/Microfrontend) - An architectural pattern for web development where independently developed frontends are composed into a greater whole
- [Islands Architecture](https://docs.astro.build/en/concepts/islands/) - A frontend pattern that renders pages to fast, static HTML with selective "islands" of JavaScript added only where interactivity is needed
- [Backend for Frontend](https://samnewman.io/patterns/architectural/bff/) - An architectural pattern where separate backend services are created specifically for different frontend applications
- [Multitier architecture](https://en.wikipedia.org/wiki/Multitier_architecture) - A client-server architecture where different levels of software architecture are physically separated into presentation, application processing, and data management functions
- [Server-side rendering](https://en.wikipedia.org/wiki/Server-side_rendering) - An approach where static HTML is sent from the server to the client, and client-side JavaScript then makes the web page dynamic by attaching event handlers in a process called hydration
- [Incremental Static Regeneration](https://nextjs.org/docs/pages/guides/incremental-static-regeneration) - A technique that enables static-generation on a per-page basis without needing to rebuild the entire site, allowing updates to static content after deployment
- [JAMstack](https://jamstack.org/) - An architectural approach that decouples the web experience layer from data and business logic, improving flexibility, scalability, performance, and maintainability

## Frontend Development

:::note[Relevant DSS-P Skills]

- 3\. Technology > 3\.1 Software Development > Front-end System Development
- 1\. Business Transformation > 1\.4 Design > Digital Product Design

:::

### UI Frameworks & Core Libraries

- Core SPA Frameworks
  - [React](https://reactjs.org/) - The library for web and native user interfaces
    - Core Concepts
      - [Component](https://react.dev/learn/your-first-component) - A fundamental building block used to create user interfaces
      - [Props](https://react.dev/learn/passing-props-to-a-component) - A mechanism for passing data from a parent component to a child component
      - [Children](https://react.dev/learn/passing-props-to-a-component#passing-jsx-as-children) - A special prop that allows components to be composed
      - [Key Props](https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key) - A special string attribute you need to include when creating lists of elements
      - [Rendering](https://react.dev/learn/render-and-commit) - The process of React asking your components to describe what they want to look like
      - [Event Handler](https://react.dev/learn/responding-to-events) - A function that is executed in response to an event
      - [State](https://react.dev/learn/state-a-components-memory) - A JavaScript object that stores a component's dynamic data
      - [Controlled Component](https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components) - A component where React state controls the value of an input element
      - [Hooks](https://react.dev/reference/react/hooks) - A set of functions that let you "hook into" React state and lifecycle features from function components
      - [Strict Mode](https://react.dev/reference/react/StrictMode) - A tool for highlighting potential problems in an application
      - [Side-effect](https://react.dev/learn/synchronizing-with-effects) - A term that refers to any operation that affects something outside of the function being executed
      - [Refs](https://react.dev/learn/referencing-values-with-refs) - A feature that provides a way to access DOM nodes or React elements created in the render method
      - [Context](https://react.dev/learn/passing-data-deeply-with-context) - A way to pass data through the component tree without having to pass props down manually at every level
      - [Portals](https://react.dev/reference/react-dom/createPortal) - A feature that provides a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component
      - [Suspense](https://react.dev/reference/react/Suspense) - A component that lets you specify a loading indicator for a part of the component tree
      - [Error Boundary](https://react.dev/reference/react/Component#error-boundaries) - A React component that catches JavaScript errors anywhere in their child component tree
  - [Preact](https://preactjs.com/) - A fast 3kB alternative to React with the same modern API
  - [Vue.js](https://vuejs.org/) - A JavaScript framework for building user interfaces
  - [Angular](https://angular.dev/) - A web framework that empowers developers to build fast, reliable applications
  - [Svelte](https://svelte.dev/) - A UI framework that uses a compiler to let you write breathtakingly concise components that do minimal work in the browser, using languages you already know — HTML, CSS and JavaScript
  - [Ember.js](https://emberjs.com/) - A framework for ambitious web developers
- HTML-First Frameworks
  - [htmx](https://htmx.org/) - A library that allows you to access AJAX, CSS Transitions, WebSockets and Server Sent Events directly in HTML, using attributes
  - [htm](https://github.com/developit/htm) - A JSX alternative using standard tagged templates, with no transpiler necessary
- Framework-agnostic Core Libraries
  - [TanStack](https://tanstack.com/) - A collection of high-quality, framework-agnostic open-source libraries for web development
    - [TanStack Query](https://tanstack.com/query) - A powerful asynchronous state management for TS/JS, React, Solid, Vue, Svelte and Angular
    - [TanStack Router](https://tanstack.com/router) - A powerful, type-safe, and framework-agnostic router for building modern web applications
    - [TanStack Table](https://tanstack.com/table) - A headless UI for building powerful tables & datagrids for TS/JS, React, Vue, Solid and Svelte
    - [TanStack Form](https://tanstack.com/form) - A type-safe and framework-agnostic form state management for React, Vue, Solid, and Svelte
    - [TanStack Virtual](https://tanstack.com/virtual) - A headless UI for virtualizing large lists and grids in React, Vue, Svelte, Solid and JS

### State, Routing & Logic

- State Management
  - [Redux](https://redux.js.org/) - A JS library for predictable and maintainable global state management
    - [React-Redux](https://react-redux.js.org/) - The official React binding for Redux
  - [Zustand](https://github.com/pmndrs/zustand) - A small, fast, and scalable barebones state-management solution using simplified flux principles
  - [Recoil](https://recoiljs.org/) - A state management library for React
  - [XState](https://stately.ai/docs) - A library for creating, interpreting, and executing finite state machines and statecharts
- Routing
  - [React Router](https://reactrouter.com/) - A user-obsessed, standards-focused, multi-strategy router you can deploy anywhere
- Syntax & Templating
  - [JSX](https://react.dev/learn/writing-markup-with-jsx) - A syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file
  - [MDX](https://mdxjs.com/) - An authorable format that lets you seamlessly write JSX in your Markdown documents
- WASM Runtimes
  - [PyScript](https://pyscript.net/) - A free Open Source Software (OSS) that facilitates the creation, deployment, and sharing of Python applications

### Styling & UI Components

- CSS Ecosystem
  - Frameworks and UI Kits
    - [Bootstrap](https://getbootstrap.com/) - The world's most popular front-end open source toolkit
    - [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework packed with classes
    - [Oat](https://oat.ink/) - An ultra-lightweight, semantic, zero-dependency HTML UI component library that provides minimal, standards-based CSS and JS
  - Tailwind Component Libraries
    - [daisyUI](https://daisyui.com/) - The most popular component library for Tailwind CSS
  - CSS-in-JS
    - [Emotion](https://emotion.sh/) - A library designed for writing css styles with JavaScript
    - [Linaria](https://linaria.dev/) - A zero-runtime CSS in JS library
  - Preprocessors
    - [Sass language](https://sass-lang.com/) - A stylesheet language that's compiled to CSS
  - Transforms
    - [CSS Transforms 1](https://www.w3.org/TR/css-transforms-1/) - A CSS module that allows elements to be transformed in two-dimensional space
    - [CSS Transforms 2](https://www.w3.org/TR/css-transforms-2/) - A CSS module that allows elements to be transformed in three-dimensional space
- UI Component Libraries
  - [templUI](https://templui.io/) - A growing collection of beautifully designed UI components for Go and templ
  - [Material UI](https://mui.com/material-ui/) - An open-source React component library that implements Google's Material Design
  - [Chakra UI](https://www.chakra-ui.com/) - A component system for building products with speed
  - [Vuetify](https://vuetifyjs.com/en/) - A no design skills required Open Source UI Library with beautifully handcrafted Vue Components
- Specialized UI Widgets
  - Rich Text Editors
    - [Tiptap](https://tiptap.dev/) - The headless and open source editor framework designed for web developers
  - Interaction & Media
    - [Swiper.js](https://swiperjs.com/) - The most modern mobile touch slider with hardware accelerated transitions and amazing native behavior
    - [Hammer.js](https://hammerjs.github.io/) - A javascript library for multi-touch gestures

### Build & Development Tooling

- Development Environments
  - [Storybook](https://storybook.js.org/) - A frontend workshop for building UI components and pages in isolation
- Bundlers
  - [Vite](https://vitejs.dev/) - A build tool that aims to provide a faster and leaner development experience for modern web projects
  - [Parcel](https://parceljs.org/) - The zero configuration build tool
  - [webpack](https://webpack.js.org/) - A static module bundler for modern JavaScript applications
  - [Rspack](https://rspack.rs/) - A high performance JavaScript bundler written in Rust
  - [Rsbuild](https://rsbuild.rs/) - The Rspack-based web build tool
- Transpilers
  - [babel](https://babeljs.io/) - A JavaScript compiler
- Minifiers
  - [JSMin](https://www.crockford.com/jsmin.html) - A minification tool that removes comments and unnecessary whitespace from JavaScript files
- Linters & Formatters
  - [Biome](https://biomejs.dev/) - A fast formatter and linter for JavaScript, TypeScript, JSX, TSX, JSON, HTML, CSS and GraphQL that provides a cohesive toolchain for web projects
  - [Knip](https://knip.dev/) - A tool that finds and fixes unused dependencies, exports and files in JavaScript and TypeScript projects

## Full-stack & Static Site Frameworks

:::note[Relevant DSS-P Skills]

- 3\. Technology > 3\.1 Software Development > Front-end System Development
- 3\. Technology > 3\.1 Software Development > Back-end System Development

:::

### Full-stack Frameworks

- JS/TS Full-stack Frameworks
  - [Next.js](https://nextjs.org/) - A React framework for building full-stack web applications
  - [Nuxt.js](https://nuxtjs.org/) - A free and open-source framework with an intuitive and extendable way to create type-safe, performant and production-grade full-stack web applications and websites with Vue.js
  - [Astro](https://astro.build/) - The web framework for content-driven websites
  - [Fresh](https://fresh.deno.dev/) - A next generation web framework, built for speed, reliability, and simplicity
- Rust Full-Stack Frameworks
  - [Leptos](https://leptos.dev/) - A cutting-edge Rust framework for the modern web

### Static Site Generators

- [Docusaurus](https://docusaurus.io/) - A static-site generator. It builds a single-page application with fast client-side navigation, leveraging the full power of React to make your site interactive
- [mdBook](https://github.com/rust-lang/mdBook) - A utility to create modern online books from Markdown files
- [VuePress](https://v2.vuepress.vuejs.org/) - A Vue-powered Static Site Generator
- [Hugo](https://gohugo.io/) - The world's fastest framework for building websites
  - [Docsy](https://www.docsy.dev/) - A Hugo theme for technical documentation sites, providing easy site navigation, structure, and more
- [Jekyll](https://jekyllrb.com/) - A simple, blog-aware, static site generator perfect for personal, project, or organization sites
- [Eleventy](https://www.11ty.dev/) - A simpler static site generator written in JavaScript
- [Sphinx](http://www.sphinx-doc.org/en/master/) - A tool that makes it easy to create intelligent and beautiful documentation
- [MkDocs](https://www.mkdocs.org/) - A fast, simple and downright gorgeous static site generator that's geared towards building project documentation
  - [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) - A powerful and beautiful theme for the MkDocs static site generator
- [Nanoc](https://nanoc.app/) - A static-site generator, fit for building anything from a small personal blog to a large corporate website
- [gitmal](https://github.com/antonmedv/gitmal) - A static page generator designed for Git repositories

### Headless CMS

- Cloud-native & API-first CMS
  - [Contentful](https://www.contentful.com/) - A headless content management system that provides a content-first approach to building digital products
  - [Strapi](https://strapi.io/) - The leading open-source headless CMS
  - [Sanity](https://www.sanity.io/) - A platform for structured content that lets you build better digital experiences

## Backend Development

:::note[Relevant DSS-P Skills]

- 3\. Technology > 3\.1 Software Development > Back-end System Development

:::

### API Architectural Styles

- [REST](https://en.wikipedia.org/wiki/Representational_state_transfer) - A software architectural style that was created to guide the design and development of the architecture for the World Wide Web
- [SOAP (legacy)](https://en.wikipedia.org/wiki/SOAP) - A messaging protocol specification for exchanging structured information in the implementation of web services
- [GraphQL](https://graphql.org/) - A query language for APIs and a runtime for fulfilling those queries with your existing data
- [gRPC](https://grpc.io/) - A modern open source high performance Remote Procedure Call (RPC) framework that can run in any environment
- [json-rpc](https://www.jsonrpc.org/) - A stateless, light-weight remote procedure call (RPC) protocol
- [Webhook](https://en.wikipedia.org/wiki/Webhook) - A method of augmenting or altering the behavior of a web page or web application with custom callbacks

### Backend Frameworks

- JS/TS Backend Frameworks
  - [Fastify](https://www.fastify.io/) - A fast and low-overhead web framework for Node.js, designed for optimal performance and developer experience
  - [Express.js](https://expressjs.com/) - A minimal and flexible Node.js web application framework
  - [Koa](https://koajs.com/) - A new web framework designed by the team behind Express
  - [Nest.js](https://nestjs.com/) - A progressive Node.js framework for building efficient, reliable and scalable server-side applications
  - [Hono](https://hono.dev/) - A small, simple, and ultrafast web framework for the Edges
- API Tools
  - [tRPC](https://trpc.io/) - A tool that allows you to easily build & consume fully typesafe APIs without schemas or code generation
- Go Backend Frameworks
  - [Echo](https://echo.labstack.com/) - A high performance, extensible, minimalist Go web framework
  - [Fiber](https://gofiber.io/) - An Express inspired web framework built on top of Fasthttp, the fastest HTTP engine for Go, designed to ease development with performance in mind
  - [Gin Web Framework](https://gin-gonic.com/) - A web framework written in Go
  - [Gorilla web toolkit](https://www.gorillatoolkit.org/) - A helpful toolkit that provides useful, composable packages for writing HTTP-based applications
  - [Yokai](https://ankorstore.github.io/yokai/) - A simple, modular and observable Go framework for backend applications
  - [Kratos](https://github.com/go-kratos/kratos) - A lightweight Go framework for building cloud-native microservices, with APIs for transport, middleware, registry, configuration, logging, and code generation
- Python Backend Frameworks & Servers
  - [WSGI](https://wsgi.readthedocs.io/en/latest/index.html) - The Web Server Gateway Interface
    - [Gunicorn](https://gunicorn.org/) - A Python WSGI HTTP Server for UNIX
    - [Flask](https://palletsprojects.com/p/flask/) - A lightweight WSGI web application framework
  - [ASGI](https://asgi.readthedocs.io/en/latest/specs/main.html) - A spiritual successor to WSGI, the long-standing Python standard for compatibility between web servers, frameworks, and applications
    - [Uvicorn](https://www.uvicorn.org/) - A lightning-fast ASGI server implementation for Python, using uvloop and httptools for high performance
    - [Hypercorn](https://hypercorn.readthedocs.io/en/latest/) - An ASGI and WSGI web server based on the sans-io hyper, h11, h2, and wsproto libraries with support for HTTP/1, HTTP/2, and HTTP/3
    - [FastAPI](https://fastapi.tiangolo.com/) - A modern, fast (high-performance), web framework for building APIs with Python based on standard Python type hints
    - [SlowAPI](https://github.com/laurents/slowapi) - A small library to rate limit your ASGI applications
- Ruby Backend Frameworks & Servers
  - [Ruby on Rails](https://rubyonrails.org/) - A web-application framework that includes everything needed to create database-backed web applications according to the Model-View-Controller (MVC) pattern
  - [Rack](https://rack.github.io/) - A modular Ruby web server interface
    - [Puma](https://puma.io/) - A fast, concurrent web server for Ruby & Rack
    - [Falcon](https://socketry.github.io/falcon/) - A multi-process, multi-fiber rack-compatible HTTP server built on top of async, async-container and async-http
    - [Sinatra](https://sinatrarb.com/) - A DSL for quickly creating web applications in Ruby with minimal effort
  - [Sidekiq](https://sidekiq.org/) - A simple, efficient background processing tool for Ruby
  - [Shrine](https://shrinerb.com/) - A file attachment toolkit for Ruby applications
- Perl Backend Frameworks (legacy)
  - Classic CGI
    - [mod_cgi](https://httpd.apache.org/docs/current/mod/mod_cgi.html) - A module for the execution of CGI scripts
    - [CGI.pm](https://metacpan.org/pod/CGI) - A module to handle Common Gateway Interface requests and responses
  - Fast CGI
    - [mod_fcgid](https://httpd.apache.org/mod_fcgid/) - A high performance alternative to mod_cgi or mod_cgid
    - [FCGI.pm](https://metacpan.org/pod/FCGI) - A module for FastCGI applications
- Java Backend Frameworks
  - [Jakarta EE](https://jakarta.ee/) - A set of specifications that define Java APIs for enterprise software development
    - [Apache Tomcat](https://tomcat.apache.org/) - An open-source web server and servlet container
  - [Spring](https://spring.io/) - A project that makes Java simple, modern, productive, reactive, and cloud-ready
    - [Spring Boot](https://spring.io/projects/spring-boot) - A tool that takes an opinionated view of the Spring platform and third-party libraries so you can get started with minimum fuss
- .NET Backend Frameworks
  - [ASP.NET](https://dotnet.microsoft.com/en-us/apps/aspnet) - A free, cross-platform, open source framework for building web apps and services with .NET and C#
- Elixir Backend Frameworks
  - [Phoenix](https://www.phoenixframework.org/) - A web framework for building rich, interactive web applications quickly with less code and fewer moving parts, used to craft APIs, HTML5 apps, and more at scale
- GraphQL Servers
  - [Apollo Server](https://www.apollographql.com/docs/apollo-server) - An open-source, spec-compliant GraphQL server that's compatible with any GraphQL client

## Web Infrastructure

:::note[Relevant DSS-P Skills]

- 3\. Technology > 3\.1 Software Development > Cloud Infrastructure Utilization

:::

### Web Server & Proxy

- Web Servers & Reverse Proxy Servers
  - [NGINX](https://www.nginx.com/) - An open source software for web serving, reverse proxying, caching, load balancing, media streaming, and more
  - [Apache HTTP Server](https://httpd.apache.org/) - A project to develop and maintain an open-source HTTP server for modern operating systems including UNIX and Windows
  - [Caddy](https://caddyserver.com/) - A powerful, extensible platform to serve your sites, services, and apps, written in Go
  - [HAProxy](https://www.haproxy.org/) - A free, very fast and reliable reverse-proxy offering high availability, load balancing, and proxying for TCP and HTTP-based applications
  - [nodejs http-server](https://github.com/http-party/http-server#readme) - A simple static HTTP server
  - [goshs](https://github.com/patrickhener/goshs) - A feature-rich single-binary file server for red teamers and developers supporting HTTP/S, WebDAV, SFTP, SMB, LDAP/S, NTLM hash capture, DNS/SMTP callbacks, TLS, authentication, and share links
- API Management
  - [Unkey](https://www.unkey.com/) - An open-source API management platform designed to help developers secure, manage, and scale their APIs
  - [Kong API gateway](https://konghq.com/products/kong-gateway) - A lightweight, fast, and flexible cloud-native API gateway
  - [Azure API Management](https://azure.microsoft.com/en-us/services/api-management/) - A hybrid, multicloud management platform for APIs across all environments
  - [Amazon API Gateway](https://aws.amazon.com/api-gateway/) - A fully managed service that makes it easy for developers to create, publish, maintain, monitor, and secure APIs at any scale
  - [Google Cloud Apigee](https://cloud.google.com/apigee) - The platform for developing and managing API services
  - [Gravitee](https://www.gravitee.io/) - A unified API visibility and governance platform that provides a single pane of glass for managing, securing, and governing APIs across any infrastructure

### CDN & Edge Computing

- Concepts
  - [Web cache](https://en.wikipedia.org/wiki/Web_cache) - An information technology for the temporary storage (caching) of web documents, such as HTML pages and images, to reduce bandwidth usage, server load, and perceived lag
  - [Content delivery network](https://en.wikipedia.org/wiki/Content_delivery_network) - A geographically distributed network of proxy servers and their data centers
    - [Point of presence](https://en.wikipedia.org/wiki/Point_of_presence) - An artificial demarcation point or interface point between communicating entities
- Forward Proxy Servers
  - [Squid](http://www.squid-cache.org/) - A caching proxy for the Web supporting HTTP, HTTPS, FTP, and more
- CDN Providers
  - [Cloudflare](https://www.cloudflare.com/) - A global network designed to make everything you connect to the Internet secure, private, fast, and reliable
    - [Cloudflare Workers](https://workers.cloudflare.com/) - A serverless execution environment that allows you to create entirely new applications or augment existing ones without configuring or maintaining infrastructure
    - [Cloudflare Workers Bindings](https://developers.cloudflare.com/workers/runtime-apis/bindings/) - A mechanism that allows your Worker to interact with resources on the Cloudflare Developer Platform, providing better performance and fewer restrictions than REST APIs for accessing resources from Workers
  - [Amazon CloudFront](https://aws.amazon.com/cloudfront/) - A content delivery network (CDN) service built for high performance, security, and developer convenience
    - [Lambda@Edge](https://aws.amazon.com/lambda/edge/) - A feature of Amazon CloudFront that lets you run code closer to users of your application
  - [Google Cloud CDN](https://cloud.google.com/cdn) - A content delivery network (CDN) that accelerates delivery of your web and video content
  - [Azure Front Door](https://azure.microsoft.com/en-us/products/frontdoor/) - A modern cloud content delivery network (CDN) that provides a secure and scalable entry point for fast delivery of your global web applications and content
- JAMstack Hosting
  - [GitLab Pages](https://docs.gitlab.com/ee/user/project/pages/) - A feature that allows you to publish static websites directly from a repository in GitLab
  - [Cloudflare Pages](https://pages.cloudflare.com/) - A JAMstack platform for frontend developers to collaborate and deploy websites

## Decentralized Web

:::note[Relevant DSS-P Skills]

- 3\. Technology > 3\.2 Digital Technology > Other Advanced Technologies

:::

### Blockchain Technology

- [Web3](https://en.wikipedia.org/wiki/Web3) - An idea for a new iteration of the World Wide Web which incorporates concepts such as decentralization, blockchain technologies, and token-based economics
- [Blockchain](https://en.wikipedia.org/wiki/Blockchain) - A distributed ledger with growing lists of records
  - [Hashcash](https://en.wikipedia.org/wiki/Hashcash) - A proof-of-work system used to limit email spam and denial-of-service attacks
  - [Proof of work](https://en.wikipedia.org/wiki/Proof_of_work) - A form of cryptographic proof in which one party proves to others that a certain amount of a specific computational effort has been expended
- [Smart contract](https://en.wikipedia.org/wiki/Smart_contract) - A computer program or transaction protocol designed to automatically execute, control, or document events and actions according to contract terms
- [Bitcoin](https://bitcoin.org/) - A decentralized digital currency that can be transferred on the peer-to-peer bitcoin network
- [Ethereum](https://ethereum.org/) - A global, decentralized network that provides direct ownership of digital assets, data, and identity without requiring permission from any central authority
- [Non-fungible token](https://en.wikipedia.org/wiki/Non-fungible_token) - A unique digital identifier that is recorded on a blockchain and is used to certify ownership and authenticity
- [Decentralized autonomous organization](https://en.wikipedia.org/wiki/Decentralized_autonomous_organization) - A member-owned community without centralized leadership managed by decentralized computer programs with voting and finances handled through a blockchain
- [Solidity](https://en.wikipedia.org/wiki/Solidity) - A programming language for implementing smart contracts on various blockchain platforms, most notably Ethereum
- [Web3.js](https://web3js.org/) - A TypeScript/JavaScript library that enables developers to connect to and interact with Ethereum and other EVM-compatible blockchains
- [ethers.js](https://ethers.org/) - A simple, compact and complete JavaScript library for all your Ethereum needs
- [MetaMask](https://metamask.io/) - A crypto wallet that enables users to buy, sell, swap, and store cryptocurrencies while maintaining control over their data and assets
- [WalletConnect](https://walletconnect.com/) - An open-source protocol that establishes encrypted connections between mobile cryptocurrency wallets and desktop-based decentralized applications
- [Hardhat](https://hardhat.org/) - A development environment for Ethereum and EVM-compatible blockchains that helps developers compile, deploy, test, and debug Solidity smart contracts

### Decentralized Social

- [ActivityPub](https://activitypub.rocks/) - A decentralized social networking protocol based on the ActivityStreams 2.0 data format
- [AT Protocol](https://atproto.com/) - An open data network for building social applications where users own their identities and content is represented as interlinked JSON records
- [Fediverse](https://en.wikipedia.org/wiki/Fediverse) - An ensemble of interconnected servers that are used for web publishing and file hosting, but which can communicate with each other
- [Mastodon](https://joinmastodon.org/) - A free, open-source, decentralized social media platform that puts users in control of their feeds without algorithms or ads, allowing independent servers to interoperate through the ActivityPub protocol
- [Bluesky](https://en.wikipedia.org/wiki/Bluesky) - A microblogging social media service and a public benefit corporation based in the United States
- [Nostr](https://nostr.com/) - An open, decentralized social protocol that uses cryptographic signatures to enable censorship-resistant communication across multiple independent servers called relays
- [Matrix](https://en.wikipedia.org/wiki/Matrix_(protocol)) - An open standard and communication protocol for real-time communication that enables seamless communication between different service providers
- [PeerTube](https://joinpeertube.org/) - A free, open-source tool for creating independent video hosting platforms that connect to form a decentralized network, offering an alternative to centralized services
- [Lemmy](https://join-lemmy.org/) - A decentralized discussion platform that allows users to control their experience without corporate tracking or advertising
- [Diaspora](https://diasporafoundation.org/) - A nonprofit, user-owned, distributed social network consisting of independently owned nodes called pods that interoperate to form the network
- [Secure Scuttlebutt](https://scuttlebutt.nz/) - A decentralized social network platform that enables local community development free from corporate data harvesting

## Development & Testing Tools

:::note[Relevant DSS-P Skills]

- 3\. Technology > 3\.1 Software Development > Computer Science
- 3\. Technology > 3\.1 Software Development > Team Development

:::

### Web/HTTP Clients

- HTTP CLI Tools
  - [cURL](https://curl.haxx.se/) - A command line tool and library for transferring data with URLs
  - [Wget](https://www.gnu.org/software/wget/) - A free software package for retrieving files using HTTP, HTTPS, FTP and FTPS
  - [curlie](https://github.com/rs/curlie) - The power of curl, the ease of use of httpie
  - [hurl](https://hurl.dev/) - A command line tool that runs HTTP requests defined in a simple plain text format
  - [httpie cli](https://httpie.io/cli) - A simple yet powerful command-line HTTP and API testing client for the API era
  - [wuzz](https://github.com/asciimoo/wuzz) - An interactive CLI tool for HTTP inspection
  - [httptap](https://github.com/monasticacademy/httptap) - A tool to view the HTTP and HTTPS requests made by any Linux program
- HTTP Client Libraries
  - [Python Requests](https://docs.python-requests.org/en/latest/) - An elegant and simple HTTP library for Python, built for human beings
  - [JS Axios](https://axios-http.com/) - A promise-based HTTP Client for node.js and the browser
  - [Go Resty](https://github.com/go-resty/resty) - A simple HTTP and REST client library for Go
  - [Go FastHTTP](https://github.com/valyala/fasthttp) - A fast HTTP package for Go
  - [Surf](https://github.com/enetx/surf) - An advanced Go HTTP client with Chrome/Firefox browser impersonation, HTTP/3 with QUIC fingerprinting, JA3/JA4 TLS emulation, and anti-bot bypass
  - [Typhoeus](https://github.com/typhoeus/typhoeus) - A library that wraps libcurl in order to make fast and reliable requests
  - [Ruby Net](https://docs.ruby-lang.org/en/master/Net.html) - A collection of classes that implement client-side internet protocols
  - [httpx](https://gitlab.com/os85/httpx) - An HTTP client library for the Ruby programming language
  - [wreq-ruby](https://github.com/SearchApi/wreq-ruby) - An easy and powerful Ruby HTTP client with advanced browser fingerprinting that accurately emulates various browsers with precise TLS/HTTP2 signatures
  - [Rust reqwest](https://docs.rs/reqwest/latest/reqwest/) - An ergonomic, async HTTP client
- GraphQL Libraries
  - [URQL](https://commerce.nearform.com/open-source/urql/) - The highly customizable and versatile GraphQL client for React, Svelte, Vue, or plain JavaScript
- API Testing Platforms
  - [Bruno](https://www.usebruno.com/) - A Git-integrated, fully offline, and open-source API client
  - [Postman/Newman](https://www.postman.com/) - An API platform for building and using APIs
- Classic Web Automation
  - [Mechanize](https://metacpan.org/pod/WWW::Mechanize) - A module that helps you automate interaction with a website
  - [Mechanize (Ruby)](https://github.com/sparklemotion/mechanize) - A ruby library that makes automated web interaction easy

### Web Debugging Tools

- [Chrome DevTools](https://developer.chrome.com/docs/devtools/) - A set of web developer tools built directly into the Google Chrome browser
- [Firefox Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/) - A set of web developer tools built into Firefox that allow you to examine, edit, and debug HTML, CSS, and JavaScript
- [React Developer Tools](https://react.dev/learn/react-developer-tools) - A browser extension and standalone debugger that allows developers to inspect React components, edit props and state, and identify performance problems in React applications
- [Vue.js devtools](https://devtools.vuejs.org/) - A browser extension for debugging Vue.js applications that provides component inspection and state management debugging
- [Redux DevTools](https://github.com/reduxjs/redux-devtools) - A development tool that provides power-ups for Redux development workflow, including hot reloading, action replay, and customizable UI
- [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) - An open-source, automated tool that helps improve web page quality by auditing performance, accessibility, SEO, and best practices
- [Fiddler](https://www.telerik.com/fiddler) - A free web debugging proxy for any browser, system or platform
- [Charles Proxy](https://www.charlesproxy.com/) - An HTTP proxy/monitor that enables developers to view all HTTP and SSL/HTTPS traffic between their machine and the Internet, including requests, responses, and headers
- [mitmproxy](https://mitmproxy.org/) - A free and open source interactive HTTPS proxy that can intercept, inspect, modify, and replay web traffic for debugging, testing, and penetration testing purposes
- [Requestly](https://requestly.com/) - An HTTP interceptor that allows developers to modify URLs, headers, and API responses in real-time for debugging and testing

### Web Test Automation Frameworks

- Browser Automation & Testing
  - [Puppeteer](https://developer.chrome.com/docs/puppeteer/) - A Node.js library which provides a high-level API to control Chrome/Chromium over the DevTools Protocol
  - [Playwright](https://playwright.dev/) - A framework for reliable end-to-end testing for modern web apps with a single API for Chromium, Firefox, and WebKit
    - [Playwright for Go](https://playwright-community.github.io/playwright-go/) - A Go library to automate Chromium, Firefox and WebKit with a single API
  - [Cypress](https://www.cypress.io/) - An open-source, JavaScript-based testing framework that enables developers to write, run, and debug end-to-end and component tests directly in the browser for modern web applications
  - [WebDriver](https://www.w3.org/TR/webdriver2/) - A remote control interface that enables introspection and control of user agents
    - [Selenium WebDriver](https://www.selenium.dev/documentation/webdriver/) - A tool that drives a browser natively, as a user would, either locally or on a remote machine
    - [WebDriver BiDi](https://www.w3.org/TR/webdriver-bidi/) - The BiDirectional WebDriver Protocol, a mechanism for remote control of user agents
  - [Selenium IDE](https://www.selenium.dev/selenium-ide/) - An open source record and playback test automation for the web
  - [Chrome DevTools Protocol (CDP)](https://chromedevtools.github.io/devtools-protocol/) - A low-level API that allows external tools to instrument, inspect, debug, and profile Chromium-based browsers
  - [Karma](https://karma-runner.github.io) - A test runner that spawns a web server and executes source code against test code for each of the connected browsers
  - Supporting Tools
    - [Chrome for Testing](https://googlechromelabs.github.io/chrome-for-testing/) - A new flavor of Chrome that specifically targets web app testing and automation use cases
- Accessibility Testing
  - [axe-core](https://www.deque.com/axe/) - An accessibility testing engine for websites and other HTML-based user interfaces
- AI-powered Web Automation
  - [browser-use](https://docs.browser-use.com/) - An open-source Python library that allows AI agents to interact with web browsers using natural language
- Web Scraping
  - [Crawlee](https://crawlee.dev/) - A web scraping and browser automation library
  - [BeautifulSoup](https://www.crummy.com/software/BeautifulSoup/) - A Python library designed for quick turnaround projects like screen-scraping
  - [Scrapy](https://scrapy.org/) - An open source and collaborative framework for extracting the data you need from websites
  - [Colly](https://go-colly.org/) - A Golang framework for building web scrapers
  - [Katana](https://github.com/projectdiscovery/katana) - A next-generation crawling and spidering framework
  - [Trafilatura](https://trafilatura.readthedocs.io/en/latest/) - A Python package and command-line tool to gather text on the Web
