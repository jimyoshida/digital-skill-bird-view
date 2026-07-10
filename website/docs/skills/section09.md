# 09 - Programming Concepts & Paradigms

## Software Design & Architecture

:::note[Relevant DSS-P Skills]

- 3\. Technology > 3\.1 Software Development > Software Design Methodology

:::

### Design Principles

- [Orthogonality and DRY principle](https://www.artima.com/intv/dry.html) - The principle that every piece of knowledge must have a single, unambiguous, authoritative representation within a system
- [Separation of concerns](https://en.wikipedia.org/wiki/Separation_of_concerns) - A design principle for separating a computer program into distinct sections
- [Design by Contract](https://en.wikipedia.org/wiki/Design_by_contract) - An approach for designing software that prescribes formal, precise and verifiable interface specifications for software components
- [Law of Demeter](https://en.wikipedia.org/wiki/Law_of_Demeter) - A design guideline for developing software, particularly object-oriented programs
- [Hyrum's Law](https://www.hyrumslaw.com/) - The law of implicit interfaces, stating that with a sufficient number of users of an API, all observable behaviors of your system will be depended on by somebody
- [SOLID - The principle of OOD](https://en.wikipedia.org/wiki/SOLID) - A mnemonic acronym for five design principles intended to make object-oriented designs more understandable, flexible, and maintainable
  - Single responsibility
  - Open–closed
  - Liskov substitution
  - Interface segregation
  - Dependency inversion
- [The Reactive Manifesto](https://www.reactivemanifesto.org/) - A coherent approach to systems architecture where applications are responsive, resilient, elastic and message driven
- [Unix philosophy](https://en.wikipedia.org/wiki/Unix_philosophy) - A set of cultural norms and philosophical approaches to software development
- [KISS principle](https://en.wikipedia.org/wiki/KISS_principle) - A design principle which states that most systems work best if they are kept simple rather than made complicated
- [Wirth's law](https://en.wikipedia.org/wiki/Wirth%27s_law) - An adage on computer performance which states that software is getting slower more rapidly than hardware is becoming faster

### Design Best Practices

- [Resource acquisition is initialization (RAII)](https://en.wikipedia.org/wiki/Resource_acquisition_is_initialization) - A programming idiom where the life cycle of a resource is bound to the lifetime of an object
- [Rob Pike's 5 Rules of Programming](https://users.ece.utexas.edu/~adnan/pike.html) - A set of rules about where to focus optimization efforts, emphasizing measurement and the importance of data structures
- [The Zen of Python](https://www.python.org/dev/peps/pep-0020/) - A collection of 19 guiding principles for writing computer programs that influence the design of the Python programming language
- [The twelve-factor app](https://12factor.net/) - A methodology for building software-as-a-service apps that are suitable for deployment on modern cloud platforms

### Design Patterns

- [Software design pattern](https://en.wikipedia.org/wiki/Software_design_pattern) - A general, reusable solution to a commonly occurring problem within a given context in software design
- [Entity–control–boundary](https://en.wikipedia.org/wiki/Entity%E2%80%93control%E2%80%93boundary) - An architectural pattern used in software design and analysis that helps in structuring the responsibilities of classes in an object-oriented system
- [Command Query Responsibility Segregation](https://en.wikipedia.org/wiki/Command_Query_Responsibility_Segregation) - A pattern that separates read and update operations for a data store
- [Fluent interface](https://en.wikipedia.org/wiki/Fluent_interface) - A method for designing object-oriented APIs based on method chaining with the goal of making the readability of the source code close to that of ordinary written prose
- [Model-view-controller pattern](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) - A software design pattern commonly used for developing user interfaces that divides the related program logic into three interconnected elements
- [Dependency injection](https://en.wikipedia.org/wiki/Dependency_injection) - A design pattern in which an object or function receives other objects or functions that it depends on

### Architectural Styles

- [Three-tier architecture](https://en.wikipedia.org/wiki/Multitier_architecture) - A client–server architecture in which presentation, application processing, and data management functions are logically separated
- [Microservices architecture](https://martinfowler.com/articles/microservices.html) - An approach to developing a single application as a suite of small services, each running in its own process and communicating with lightweight mechanisms
- [Event-driven architecture](https://en.wikipedia.org/wiki/Event-driven_architecture) - A software architecture paradigm promoting the production, detection, consumption of, and reaction to events
- [Resource-oriented architecture](https://en.wikipedia.org/wiki/Resource-oriented_architecture) - A style of software architecture and programming paradigm for designing and developing software in the form of a network of resources
- [Background processing](https://en.wikipedia.org/wiki/Background_process) - The execution of tasks in the background, allowing the main application to remain responsive

### Architecture Description

- [System](https://en.wikipedia.org/wiki/System) - A group of interacting or interrelated elements that act according to a set of rules to form a unified whole
  - [Systems architecture](https://en.wikipedia.org/wiki/Systems_architecture) - The conceptual model that defines the structure, behavior, and more views of a system
    - [4+1 architectural view model](https://en.wikipedia.org/wiki/4%2B1_architectural_view_model) - A view model used for "describing the architecture of software-intensive systems, based on the use of multiple, concurrent views"
    - [The C4 model](https://c4model.com/) - An easy to learn, developer friendly approach to software architecture diagramming
    - [UML](https://www.omg.org/spec/UML/About-UML/) - The graphical language for visualizing, specifying, constructing, and documenting the artifacts of a software-intensive system
    - [Flowchart](https://en.wikipedia.org/wiki/Flowchart) - A type of diagram that represents a workflow or process
  - [Conway's law](https://en.wikipedia.org/wiki/Conway%27s_law) - An adage stating that organizations design systems that mirror their own communication structure
- Related Standards
  - [ISO/IEC/IEEE 42010 (Architecture description)](https://en.wikipedia.org/wiki/ISO/IEC_42010) - An international standard for architecture descriptions of systems and software

### Domain-Driven Design (DDD)

- [Domain-driven design](https://en.wikipedia.org/wiki/Domain-driven_design) - A major software design approach, focusing on modeling software to match a domain according to input from that domain's experts
  - [Ubiquitous Language](https://martinfowler.com/bliki/UbiquitousLanguage.html) - The practice of building up a common, rigorous language between developers and users
- [Object-oriented analysis and design](https://en.wikipedia.org/wiki/Object-oriented_analysis_and_design) - A technical approach for analyzing and designing an application, system, or business by applying object-oriented programming, as well as using visual modeling throughout the software development process
  - [Use case](https://en.wikipedia.org/wiki/Use_case) - A list of actions or event steps typically defining the interactions between a role (known in the Unified Modeling Language as an actor) and a system to achieve a goal
- [Ontology](https://en.wikipedia.org/wiki/Ontology_(information_science)) - A representation, formal naming and definition of the categories, properties and relations between the concepts, data and entities that substantiate one, many or all domains of discourse
  - [Semantic network](https://en.wikipedia.org/wiki/Semantic_network) - A knowledge base that represents semantic relations between concepts in a network
    - [WordNet](https://wordnet.princeton.edu/) - A large lexical database of English
- [Database design](https://en.wikipedia.org/wiki/Database_design) - The organization of data according to a database model

## Core Programming Concepts

:::note[Relevant DSS-P Skills]

- 3\. Technology > 3\.1 Software Development > Computer Science

:::

### Language Mechanics & Execution

- [Source code](https://en.wikipedia.org/wiki/Source_code) - A collection of code, possibly with comments, written using a human-readable programming language, usually as plain text
- [Statement](https://en.wikipedia.org/wiki/Statement_(computer_science)) - A syntactic unit of an imperative programming language that expresses some action to be carried out
- [Expression](https://en.wikipedia.org/wiki/Expression_(computer_science)) - A syntactic entity in a programming language that may be evaluated to determine its value
  - Operator and Operand
- [Literal](https://en.wikipedia.org/wiki/Literal_(computer_programming)) - A notation for representing a fixed value in source code
  - Template string or literal
  - [Heredoc](https://en.wikipedia.org/wiki/Here_document) - A file literal or input stream literal representing a section of source code that is treated as if it were a separate file
- [Constant](https://en.wikipedia.org/wiki/Constant_(computer_programming)) - A value that cannot be altered by the program during normal execution
- [Variable](https://en.wikipedia.org/wiki/Variable_(computer_science)) - An abstract storage location paired with an associated symbolic name, which contains some known or unknown quantity of information referred to as a value
- [Scope](https://en.wikipedia.org/wiki/Scope_(computer_science)) - The region of a computer program where the binding of a name to an entity (name binding) is valid
- [Data type](https://en.wikipedia.org/wiki/Data_type) - A collection or grouping of data values, usually specified by a set of possible values and allowed operations
  - [Primitives](https://en.wikipedia.org/wiki/Primitive_data_type) - A data type provided by a programming language as a basic building block or one not defined in terms of other data types
  - [Nominal type system](https://en.wikipedia.org/wiki/Nominal_type_system) - A major class of type systems, in which compatibility and equivalence of data types is determined by explicit declarations and/or the names of the types
  - [Structural type system](https://en.wikipedia.org/wiki/Structural_type_system) - A major class of type systems in which type compatibility and equivalence are determined by the type's actual structure or definition
  - [Duck typing](https://en.wikipedia.org/wiki/Duck_typing) - An application of the duck test determining type compatibility based on the presence of certain methods and properties
  - [Union type](https://en.wikipedia.org/wiki/Union_type) - A data type definition that specifies which of a number of permitted primitive types may be stored in its instances
  - [Type variance](https://en.wikipedia.org/wiki/Type_variance) - The relationship between subtypes of a composite type and the subtypes of its components
  - [Type safety](https://en.wikipedia.org/wiki/Type_safety) - The extent to which a programming language discourages or prevents type errors
- [Reference](https://en.wikipedia.org/wiki/Reference_(computer_science)) - A value that enables a program to indirectly access a particular datum in the computer's memory or other storage device
  - [Null pointer](https://en.wikipedia.org/wiki/Null_pointer) - A value saved for indicating that the pointer or reference does not refer to a valid object

### Memory Management

- [Reference counting](https://en.wikipedia.org/wiki/Reference_counting) - A programming technique of storing the number of references, pointers, or handles to a resource
- [Garbage collection](https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)) - A form of automatic memory management where the collector attempts to reclaim memory occupied by objects no longer in use
- [Smart pointer](https://en.wikipedia.org/wiki/Smart_pointer) - An abstract data type that simulates a pointer while providing added features, such as automatic memory management or bounds checking
- [Memory safety](https://en.wikipedia.org/wiki/Memory_safety) - The state of being protected from various software bugs and security vulnerabilities when dealing with memory access

### Control Flow Structures

- [Control flow](https://en.wikipedia.org/wiki/Control_flow) - The order in which individual statements, instructions or function calls of an imperative program are executed or evaluated
- [Continuation](https://en.wikipedia.org/wiki/Continuation) - A data structure that represents the rest of a program's computation at a given point
  - [call-with-current-continuation](https://en.wikipedia.org/wiki/Call-with-current-continuation) - A control flow operator, notably in the Scheme programming language, used to capture and invoke continuations
- [Exception handling](https://en.wikipedia.org/wiki/Exception_handling_(programming)) - The process of responding to the occurrence of exceptions during the execution of a program
- [Finite-state machine](https://en.wikipedia.org/wiki/Finite-state_machine) - A mathematical model of computation representing an abstract machine that can be in exactly one of a finite number of states at any given time

### Foundational Techniques & Properties

- [State](https://en.wikipedia.org/wiki/State_(computer_science)) - The stored information, at a given instant in time, to which a computer program or system has access
- [Function](https://en.wikipedia.org/wiki/Function_(computer_programming)) - A sequence of program instructions that performs a specific task, packaged as a unit
  - [Parameter](https://en.wikipedia.org/wiki/Parameter_(computer_programming)) - A special kind of variable used in a subroutine or function to refer to one of the pieces of data provided as input
  - [Anonymous function](https://en.wikipedia.org/wiki/Anonymous_function) - A function definition that is not bound to an identifier
- [Immutable object](https://en.wikipedia.org/wiki/Immutable_object) - An object whose state cannot be modified after it is created
- [Generic Programming](https://en.wikipedia.org/wiki/Generic_programming) - A style of computer programming in which algorithms are written in terms of types to-be-specified-later that are then instantiated when needed
- [Assertion](https://en.wikipedia.org/wiki/Assertion_(software_development)) - A statement that a predicate (a Boolean-valued function) is expected to always be true at that point in the code
- [Autovivification](https://en.wikipedia.org/wiki/Autovivification) - The automatic creation of a new variable or data structure as required when it is first used

### Module Structure & Organization

- [Cohesion](https://en.wikipedia.org/wiki/Cohesion_(computer_science)) - The degree to which the elements inside a module belong together
- [Coupling](https://en.wikipedia.org/wiki/Coupling_(computer_programming)) - The degree of interdependence between software modules, a measure of how closely connected two routines or modules are, and the strength of the relationships between modules

## Programming Paradigms

:::note[Relevant DSS-P Skills]

- 3\. Technology > 3\.1 Software Development > Computer Science

:::

### Object-oriented Programming

- [Object-oriented Programming](https://en.wikipedia.org/wiki/Object-oriented_programming) - A programming paradigm based on the object - a software entity that encapsulates data and function(s)
  - [Abstraction](https://en.wikipedia.org/wiki/Abstraction_(computer_science)) - The process of hiding the complexity of a system by modeling classes appropriate to the problem and working at the most relevant level of detail
  - [Encapsulation](https://en.wikipedia.org/wiki/Encapsulation_(computer_programming)) - The bundling of data with the methods that operate on that data, or the restricting of direct access to some of an object's components
  - [Polymorphism](https://en.wikipedia.org/wiki/Polymorphism_(computer_science)) - The provision of a single interface to entities of different types
    - [Dynamic dispatch](https://en.wikipedia.org/wiki/Dynamic_dispatch) - The process of selecting which implementation of a polymorphic operation (method or function) to call at run time
  - [Inheritance](https://en.wikipedia.org/wiki/Inheritance_(object-oriented_programming)) - The mechanism of basing an object or class upon another object or class, retaining similar implementation
  - [Class](https://en.wikipedia.org/wiki/Class_(computer_programming)) - An extensible program-code-template for creating objects, providing initial values for state and implementations of behavior
  - [Interface](https://en.wikipedia.org/wiki/Interface_(object-oriented_programming)) - An abstract type that contains no data, but defines behaviors as method signatures
  - [Method](https://en.wikipedia.org/wiki/Method_(computer_programming)) - A procedure associated with an object, and implicitly acting upon that object
  - [This keyword](https://en.wikipedia.org/wiki/This_(computer_programming)) - A keyword used in many object-oriented programming languages to refer to the object associated with the current function or method call
  - [Prototype-based programming](https://en.wikipedia.org/wiki/Prototype-based_programming) - A style of object-oriented programming in which behavior reuse is performed via a process of reusing existing objects that serve as prototypes

### Functional Programming

- [Functional Programming](https://en.wikipedia.org/wiki/Functional_programming) - A programming paradigm where programs are constructed by applying and composing functions
  - [Algebraic data type](https://en.wikipedia.org/wiki/Algebraic_data_type) - A composite data type formed by combining other types
  - [Pattern matching](https://en.wikipedia.org/wiki/Pattern_matching) - The act of checking a given sequence of tokens for the presence of the constituents of some pattern
  - [First-class function](https://en.wikipedia.org/wiki/First-class_function) - The property of a programming language that treats functions as first-class citizens (e.g., assignable to variables, passable as arguments)
    - [Map](https://en.wikipedia.org/wiki/Map_(higher-order_function)) - A higher-order function that applies a given function to each element of a sequence, returning a sequence containing the results
    - [Filter](https://en.wikipedia.org/wiki/Filter_(higher-order_function)) - A higher-order function that processes a data structure to produce a new data structure containing only those elements for which a given predicate returns true
    - [Reduce](https://en.wikipedia.org/wiki/Fold_(higher-order_function)) - A higher-order function (also known as fold) that reduces a data structure to a single value by recursively applying a combining operation
  - [Referential transparency](https://en.wikipedia.org/wiki/Referential_transparency) - A property of expressions such that an expression can be replaced with its corresponding value without changing the program's behavior
  - [Closure](https://en.wikipedia.org/wiki/Closure_(computer_programming)) - A function together with a referencing environment for the non-local variables of that function
  - [Side-effect](https://en.wikipedia.org/wiki/Side_effect_(computer_science)) - An observable effect of an operation, function, or expression that modifies state variable values outside its local environment
  - [Monad](https://en.wikipedia.org/wiki/Monad_(functional_programming)) - A software design pattern with a structure that combines program fragments (functions) and wraps their return values in a type with additional computation
  - [Currying](https://en.wikipedia.org/wiki/Currying) - The technique of converting a function that takes multiple arguments into a sequence of functions that each takes a single argument

### Reactive Programming & Others

- [Reactive Programming](https://en.wikipedia.org/wiki/Reactive_programming) - A declarative programming paradigm concerned with data streams and the propagation of change
  - [Functional Reactive Programming (FRP)](https://en.wikipedia.org/wiki/Functional_reactive_programming) - A programming paradigm for reactive programming using the building blocks of functional programming
  - Languages & Frameworks
    - [RO](https://ro.samber.dev/) - A library for streams and reactive programming for Go
    - [ReactiveX](https://reactivex.io/) - An API for asynchronous programming with observable streams
    - [Elm](https://elm-lang.org/) - A delightful language for reliable web applications
- [Aspect-oriented Programming](https://en.wikipedia.org/wiki/Aspect-oriented_programming) - A programming paradigm that aims to increase modularity by allowing the separation of cross-cutting concerns
  - [Cross-cutting concern](https://en.wikipedia.org/wiki/Cross-cutting_concern) - An aspect of a program that affect several modules, without the possibility of being encapsulated in any of them

## Scripting Languages

:::note[Relevant DSS-P Skills]

- 3\. Technology > 3\.1 Software Development > Computer Science

:::

### Python

- [Python](https://www.python.org/) - A programming language that lets you work quickly and integrate systems more effectively
  - Core Features
    - [Python import system](https://docs.python.org/3/reference/import.html) - The mechanism that organizes Python code into modules and packages, facilitating code reuse and structuring large applications
    - [Special method names](https://docs.python.org/3/reference/datamodel.html#specialnames) - The methods, identified by leading and trailing double underscores, that allow classes to implement operations invoked by special syntax
    - [Type Hints](https://peps.python.org/pep-0484/) - A standard syntax for type annotations of variables, function parameters, and return values, used for static analysis
      - [typing module](https://docs.python.org/3/library/typing.html) - The standard library module providing runtime support for type hints
      - [Mypy](https://mypy-lang.org/) - An optional static type checker for Python that aims to combine the benefits of dynamic typing and static typing
    - [f-string](https://peps.python.org/pep-0498/) - A type of string literal, prefixed with 'f' or 'F', which allows embedding expressions inside string constants using minimal syntax
    - [with statement](https://peps.python.org/pep-0343/) - A statement that simplifies exception handling by encapsulating standard uses of try/finally statements for resource management
      - [contextlib](https://docs.python.org/3/library/contextlib.html) - A module that provides utilities for common tasks involving the with statement
    - [Generators](https://peps.python.org/pep-0255/) - A simple and powerful way to create iterators, defined using a function with the yield statement
    - [Decorators](https://peps.python.org/pep-0318/) - A syntax using the '@' symbol for transforming functions and methods, often used for modifying or enhancing them non-intrusively
    - [Coroutine](https://peps.python.org/pep-0492/) - A specialized generator function, defined with `async def`, that can suspend and resume its execution, enabling cooperative multitasking
    - [Lambda](https://peps.python.org/pep-0312/) - A small anonymous function defined using the `lambda` keyword, restricted to a single expression
    - [Data Classes](https://peps.python.org/pep-0557/) - A module and decorator providing a concise way to create classes primarily used to store data, automatically generating special methods
    - [Pattern Matching](https://docs.python.org/3/reference/compound_stmts.html#match) - A feature providing functionality similar to switch statements, allowing matching of values against complex patterns including sequences, mappings, and object structures
    - [Unpacking Operator](https://peps.python.org/pep-0448/) - The extended usages of the `*` iterable unpacking operator and `**` dictionary unpacking operators to allow unpacking in more positions, an arbitrary number of times, and in additional circumstances
  - Key Libraries
    - [pathlib](https://docs.python.org/3/library/pathlib.html) - The module offering classes representing filesystem paths with semantics appropriate for different operating systems
    - [dotenv](https://github.com/theskumar/python-dotenv) - A library that reads key-value pairs from a .env file and can set them as environment variables
    - [Pydantic](https://docs.pydantic.dev/) - A data validation and settings management library for Python
    - [Tenacity](https://github.com/jd/tenacity) - A general-purpose retrying library for Python
  - Development Tools
    - [IPython](https://ipython.org/) - A rich interactive interface to Python with a history mechanism, tab completion, and special magic commands

### JavaScript & TypeScript

- [JavaScript/ECMAScript](https://www.ecma-international.org/publications/standards/Ecma-262.htm) - The standard that defines the ECMAScript Language
  - Module System
    - [CommonJS](http://commonjs.org/) - A project with the goal of specifying an ecosystem for JavaScript outside the browser
    - [ES modules](https://nodejs.org/api/esm.html) - The official standard format to package JavaScript code for reuse
    - [UMD](https://github.com/umdjs/umd/) - The patterns for Universal Module Definition for use in the browser, and in AMD and CommonJS-based systems
  - Core Features
    - [Event-driven](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events) - A programming paradigm in which the flow of the program is determined by events such as user actions, sensor outputs, or messages from other programs
    - [Spread and rest operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) - The syntax that allows an iterable such as an array expression or string to be expanded in places where zero or more arguments or elements are expected
    - [Generator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator) - An object returned by a generator function and it conforms to both the iterable protocol and the iterator protocol
  - Key Libraries
    - [Lodash](https://lodash.com/) - A modern JavaScript utility library delivering modularity, performance & extras
    - [dax](https://github.com/dsherret/dax) - Cross-platform shell tools for Deno and Node.js inspired by zx
    - [Bun Shell](https://bun.sh/docs/runtime/shell) - A built-in shell-like interface for running shell scripts
    - [zx](https://google.github.io/zx/) - A tool for writing better scripts
    - [Zod](https://zod.dev/) - A TypeScript-first schema validation with static type inference
    - [yup](https://github.com/jquense/yup) - A schema builder for runtime value parsing and validation
  - [Typescript](https://www.typescriptlang.org/index.html) - A strongly typed programming language that builds on JavaScript, giving you better tooling at any scale
    - [Union Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types) - A way to combine multiple types into one
    - [Type Aliases](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases) - A name for any type
    - [Type Assertions](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions) - A way to tell the compiler 'trust me, I know what I'm doing'
    - [Mapped Types](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html) - A generic type which uses a union of PropertyKeys to iterate through keys of another type to create a new one
    - [Nominal typing techniques](https://michalzalecki.com/nominal-typing-in-typescript/) - A way to simulate nominal types in TypeScript, which by default has a structural type system
    - [Declaration Files](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html) - The files where you define the types for a library
    - [Decorators](https://www.typescriptlang.org/docs/handbook/decorators.html) - A special kind of declaration that can be attached to a class declaration, method, accessor, property, or parameter
  - TS Type Utilities
    - [json-schema-to-typescript](https://github.com/bcherny/json-schema-to-typescript) - A tool to compile JSONSchema to TypeScript type declarations
    - [Json Schema to TS](https://github.com/thomasaribart/json-schema-to-ts) - The FromSchema method lets you infer TS types directly from JSON schemas
- Tutorials & Practices
  - [33 JS Concepts](https://github.com/leonardomso/33-js-concepts) - A repository with articles about 33 concepts every JavaScript developer should know
  - [JS Project Guidelines](https://github.com/elsewhencode/project-guidelines) - A set of best practices for JavaScript projects
  - [Callback Hell](http://callbackhell.com/) - The nesting of callback functions when dealing with asynchronous logic
  - [NodeSchool](https://nodeschool.io/) - A set of open source workshops that teach web software skills
  - [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices) - A summary and curation of the top-ranked content on Node.js best practices

### Ruby, Perl & Others

- [Ruby](https://www.ruby-lang.org/en/) - A dynamic, open source programming language with a focus on simplicity and productivity
  - Core Features
    - [Percent notation](https://docs.ruby-lang.org/en/master/syntax/literals_rdoc.html) - A concise syntax for generating various literal types, such as strings, arrays, and regular expressions, using a percent sign and delimiters
    - [Fiber](https://docs.ruby-lang.org/en/master/Fiber.html) - A lightweight concurrency primitive that allows for cooperative multitasking by pausing and resuming execution
    - [proc](https://docs.ruby-lang.org/en/master/Kernel.html#method-i-proc) - A mechanism to encapsulate a block of code into an object that can be stored, passed, and executed
    - [lambda](https://docs.ruby-lang.org/en/master/Kernel.html#method-i-lambda) - A specialized block object that enforces strict argument checking and localized return behavior
    - [then](https://docs.ruby-lang.org/en/master/Kernel.html#method-i-then) - A method that yields the object itself to a block and returns the result, facilitating functional-style method chaining
    - [define_method](https://docs.ruby-lang.org/en/master/Module.html#method-i-define_method) - The ability to create and register methods at runtime using `define_method`, enhancing code flexibility and reducing repetition
    - [instance_eval](https://docs.ruby-lang.org/en/master/BasicObject.html#method-i-instance_eval) - A method that evaluates a block or string within the context of a specific object instance, granting access to its internal scope and private methods
  - Libraries
    - [io-event](https://socketry.github.io/io-event/) - The low level cross-platform primitives for constructing event loops
    - [Async](https://socketry.github.io/async/) - A composable asynchronous I/O framework for Ruby based on io-event
  - Development Tools
    - [IRB (Interactive Ruby)](https://ruby.github.io/irb/) - A tool to interactively execute Ruby expressions read from the standard input
- [Perl](https://www.perl.org/) - A family of two high-level, general-purpose, interpreted, dynamic programming languages
  - Core Features
    - [Special variables](https://metacpan.org/dist/perl/view/pod/perlvar.pod) - The variables that have a special meaning to Perl
    - [Built-in regex](https://metacpan.org/dist/perl/view/pod/perlre.pod) - The syntax of regular expressions in Perl
    - [Context](https://perldoc.perl.org/perldata#Context) - A property of expressions that determines how they behave when evaluated
    - [Scalar values](https://perldoc.perl.org/perldata#Scalar-values) - A single item of data
      - [Reference](https://perldoc.perl.org/perlreftut#Making-References) - A scalar data type that 'points' to another piece of data
    - [Quote-like operators](https://metacpan.org/dist/perl/view/pod/perlop.pod#Simpler-Quote-Like-Operators) - A set of generic quoting operators
    - [I/O operators](https://metacpan.org/dist/perl/view/pod/perlop.pod#I%2FO-Operators) - The operators used for input and output operations, such as reading from a filehandle
- [Tcl](https://www.tcl-lang.org/) - A dynamic programming language and a graphical user interface toolkit used for a wide range of applications
  - [Event-driven by design](https://wiki.tcl-lang.org/page/event+loop) - The built-in event loop that makes it ideal for GUIs and networking
- [Lua](https://www.lua.org/) - A powerful, efficient, lightweight, embeddable scripting language
- [Emacs Lisp](https://www.gnu.org/software/emacs/manual/html_node/elisp/) - The programming language used to extend and customize the Emacs text editor
  - [S-expression](https://en.wikipedia.org/wiki/S-expression) - A notation for nested list (tree-structured) data
  - [Homoiconicity](https://en.wikipedia.org/wiki/Homoiconicity) - A property of some programming languages in which the primary representation of programs is also a data structure in a primitive type of the language itself

## Asynchronous & Concurrency

:::note[Relevant DSS-P Skills]

- 3\. Technology > 3\.1 Software Development > Computer Science

:::

- [Concurrent computing](https://en.wikipedia.org/wiki/Concurrent_computing) - A form of computing in which several computations are executed concurrently instead of sequentially
  - [Coroutine](https://en.wikipedia.org/wiki/Coroutine) - A computer program component that generalizes subroutines for non-preemptive multitasking, by allowing execution to be suspended and resumed
  - [Async/await](https://en.wikipedia.org/wiki/Async/await) - A syntactic feature that allows an asynchronous, non-blocking function to be structured in a way similar to an ordinary synchronous function
  - [Futures and promises](https://en.wikipedia.org/wiki/Futures_and_promises) - The constructs used for synchronizing program execution, representing a proxy for a result that is initially unknown
  - [Semaphore](https://en.wikipedia.org/wiki/Semaphore_(programming)) - A variable or abstract data type used to control access to a common resource by multiple threads in a concurrent system
  - [Mutex](https://en.wikipedia.org/wiki/Lock_(computer_science)) - A synchronization primitive that prevents state from being modified or accessed by multiple threads of execution at the same time
  - [Channel](https://en.wikipedia.org/wiki/Channel_(programming)) - A model for interprocess communication and synchronization via message passing
  - [Thread safety](https://en.wikipedia.org/wiki/Thread_safety) - A property of computer code applicable in multi-threaded environments, ensuring correct manipulation of shared data structures
  - [Deadlock](https://en.wikipedia.org/wiki/Deadlock) - A situation in concurrent computing where no member of a group of entities can proceed because each waits for another member to take action

## Language Analysis

:::note[Relevant DSS-P Skills]

- 3\. Technology > 3\.1 Software Development > Computer Science

:::

- Concepts
  - [Formal language](https://en.wikipedia.org/wiki/Formal_language) - A set of words, i.e. finite strings of letters, symbols, or tokens
    - [Well-formed formula](https://en.wikipedia.org/wiki/Well-formed_formula) - A finite sequence of symbols from a given alphabet that is part of a formal language
  - [Formal grammar](https://en.wikipedia.org/wiki/Formal_grammar) - A set of formation rules for strings in a formal language
  - [Chomsky hierarchy](https://en.wikipedia.org/wiki/Chomsky_hierarchy) - A containment hierarchy of classes of formal grammars
  - [Automata theory](https://en.wikipedia.org/wiki/Automata_theory) - The study of abstract machines and automata, as well as the computational problems that can be solved using them
    - [Finite-state machine](https://en.wikipedia.org/wiki/Finite-state_machine) - A mathematical model of computation that can be in exactly one of a finite number of states at any given time, changing from one state to another in response to some inputs
  - [Lexical analysis](https://en.wikipedia.org/wiki/Lexical_analysis) - The conversion of a text into meaningful lexical tokens belonging to categories defined by a lexer program
  - [Parsing](https://en.wikipedia.org/wiki/Parsing) - A process of analyzing a string of symbols conforming to the rules of a formal grammar by breaking it into parts
  - [BNF syntax](https://en.wikipedia.org/wiki/Backus%E2%80%93Naur_form) - A notation technique for context-free grammars, often used to describe the syntax of languages used in computing
  - [AST](https://en.wikipedia.org/wiki/Abstract_syntax_tree) - A tree representation of the abstract syntactic structure of source code written in a programming language
- Parser Generators
  - [ANTLR](https://www.antlr.org/) - A powerful parser generator for reading, processing, executing, or translating structured text or binary files
  - [Bison](https://www.gnu.org/software/bison/) - A general-purpose parser generator that converts a grammar description for a context-free grammar into a C program to parse that grammar
- Lexer Generators
  - [Flex](https://github.com/westes/flex) - The Fast Lexical Analyzer - scanner generator
  - [Ragel](https://www.colm.net/open-source/ragel/) - A state machine compiler
- Parsers/Libraries
  - [tree-sitter](https://github.com/tree-sitter/tree-sitter) - A parser generator tool and an incremental parsing library
  - [ts-morph](https://ts-morph.com/) - A TypeScript Compiler API wrapper

## Program Translation

:::note[Relevant DSS-P Skills]

- 3\. Technology > 3\.1 Software Development > Computer Science

:::

- Concepts
  - [Compiler](https://en.wikipedia.org/wiki/Compiler) - A computer program that translates computer code written in one programming language into another language
  - [Transpiler](https://en.wikipedia.org/wiki/Source-to-source_compiler) - A type of translator that takes the source code of a program written in a programming language as its input and produces an equivalent source code in the same or a different programming language
    - [Intermediate representation](https://en.wikipedia.org/wiki/Intermediate_representation) - The data structure or code used internally by a compiler or virtual machine to represent source code
  - [Program optimization](https://en.wikipedia.org/wiki/Program_optimization) - The process of modifying a software system to make some aspect of it work more efficiently or use fewer resources
  - [Machine code](https://en.wikipedia.org/wiki/Machine_code) - A computer program written in machine language instructions that can be executed directly by a computer's central processing unit (CPU)
  - [Cross compiler](https://en.wikipedia.org/wiki/Cross_compiler) - A compiler capable of creating executable code for a platform other than the one on which the compiler is running
  - [Linker](https://en.wikipedia.org/wiki/Linker_(computing)) - A computer system program that takes one or more object files and combines them into a single executable file

### Major Compiler Infrastructures

- [LLVM Compiler Infrastructure](https://llvm.org/) - A collection of modular and reusable compiler and toolchain technologies
  - [Clang](https://clang.llvm.org/) - A C language family frontend for LLVM
  - [LLD](https://lld.llvm.org/) - The LLVM Linker
- [gcc](https://www.gnu.org/software/gcc/) - The GNU Compiler Collection which includes front ends for C, C++, Objective-C, Fortran, Ada, Go, and D
- [rustc](https://doc.rust-lang.org/rustc/what-is-rustc.html) - The compiler for the Rust programming language

### Specific Translators & Build Tools

- [MinGW-w64](https://www.mingw-w64.org/) - An advancement of the original mingw.org project, created to support the GCC compiler on Windows systems
- [Go build command](https://pkg.go.dev/cmd/go) - A tool for managing Go source code
  - Static binary executable
- [GopherJS](https://github.com/gopherjs/gopherjs) - A compiler from Go to JavaScript
- [Bunster](https://bunster.netlify.app/) - A shell compiler that turns your scripts into a self-contained executable programs

### Linkers (Standalone)

- [mold](https://github.com/rui314/mold/) - A Modern Linker
- Runtime Libraries
  - [glibc](https://sourceware.org/glibc/) - The GNU C Library project which provides the core libraries for the GNU system and GNU/Linux systems
  - [musl libc](https://musl.libc.org/) - A C standard library intended for operating systems based on the Linux kernel

## Program Execution

:::note[Relevant DSS-P Skills]

- 3\. Technology > 3\.1 Software Development > Computer Science

:::

- Concepts
  - [Runtime System](https://en.wikipedia.org/wiki/Runtime_system) - The part of a program that runs on a computer, for the language in which the program was written
  - [Bytecode](https://en.wikipedia.org/wiki/Bytecode) - A form of instruction set designed for efficient execution by a software interpreter
  - [Just-in-time compilation](https://en.wikipedia.org/wiki/Just-in-time_compilation) - A way of executing computer code that involves compilation during execution of a program
  - [Global interpreter lock](https://en.wikipedia.org/wiki/Global_interpreter_lock) - A mutex that protects access to Python objects, preventing multiple threads from executing Python bytecodes at the same time

### Runtime Implementations

- Javascript
  - [Node.js](https://nodejs.org/) - A free, open-source, cross-platform JavaScript runtime environment
    - [libuv](https://libuv.org/) - A multi-platform support library with a focus on asynchronous I/O
  - [Deno](https://deno.com/) - A modern runtime for TypeScript and JavaScript
    - [Deno Deploy](https://deno.com/deploy) - A distributed HTTP service that allows you to run JavaScript, TypeScript, and WebAssembly at the edge
    - [Deno Subhosting](https://deno.com/subhosting) - A platform for SaaS providers to securely run untrusted customer code at scale using V8 isolates
  - [Bun](https://bun.sh/) - A fast, all-in-one toolkit for running, building, testing, and debugging JavaScript and TypeScript
  - [WinterJS](https://github.com/wasmerio/winterjs) - A blazingly fast JavaScript runtime built on Rust, using the SpiderMonkey engine and the Tokio runtime
- Python
  - CPython (default)
  - [pypy](https://www.pypy.org/) - A fast, compliant alternative implementation of Python
  - [Pyodide](https://pyodide.org/en/stable/) - A Python distribution for the browser and Node.js based on WebAssembly
- Ruby
  - CRuby (default)
  - [JRuby](https://www.jruby.org/) - An implementation of the Ruby programming language atop the Java Virtual Machine
- [Java SE](https://www.oracle.com/java/technologies/java-se-glance.html) - The most proven, trusted, and secure development platform for modern application development
  - [Java HotSpot VM](https://docs.oracle.com/en/java/javase/22/vm/java-virtual-machine-technology-overview.html) - The primary Java Virtual Machine for desktops and servers, produced by Oracle Corporation
  - [JMX API](https://docs.oracle.com/en/java/javase/22/jmx/introduction-jmx-technology.html) - The Java Management Extensions technology which is a standard part of the Java Platform
  - [JDK tools](https://docs.oracle.com/en/java/javase/22/docs/specs/man/index.html) - The command-line tools to create and build applications
  - [GraalVM](https://oracle.com/java/graalvm/) - An advanced JDK with ahead-of-time Native Image compilation
  - [OpenJDK](https://openjdk.org/) - The place to collaborate on an open-source implementation of the Java Platform, Standard Edition
  - [Eclipse Temurin](https://adoptium.net/temurin/) - The open-source, enterprise-ready, and TCK-certified builds of OpenJDK
- [.NET](https://dotnet.microsoft.com/en-us/) - The free, open-source, cross-platform framework for building modern apps and powerful cloud services
  - [CLR](https://learn.microsoft.com/en-us/dotnet/standard/clr) - The virtual machine component of .NET Framework

- Runtime Utilities
  - [PM2](https://pm2.keymetrics.io/) - A daemon process manager that will help you manage and keep your application online
  - [PyCall](https://github.com/mrkn/pycall.rb) - A Ruby library that allows you to call Python functions from Ruby
  - [VisualVM](https://visualvm.github.io/) - An All-in-One Java Troubleshooting Tool

## Algorithm & Computational Complexity

:::note[Relevant DSS-P Skills]

- 3\. Technology > 3\.1 Software Development > Computer Science

:::

- Concepts
  - [Complexity class](https://en.wikipedia.org/wiki/Complexity_class) - A set of computational problems of related resource-based complexity

- Reference Resources
  - [NIST Dictionary of Algorithms and Data Structures](https://xlinux.nist.gov/dads/) - A dictionary of algorithms, algorithmic techniques, data structures, archetypal problems, and related definitions

### Algorithm

- [Algorithm](https://en.wikipedia.org/wiki/Algorithm) - A finite sequence of rigorous instructions, typically used to solve a class of specific problems or to perform a computation
  - Analysis Techniques
    - [Amortized analysis](https://en.wikipedia.org/wiki/Amortized_analysis) - A method for analyzing a given algorithm's complexity
    - [Big O notation](https://en.wikipedia.org/wiki/Big_O_notation) - A mathematical notation that describes the limiting behavior of a function when the argument tends towards a particular value or infinity
  - Algorithmic Paradigms
    - [Recursion](https://en.wikipedia.org/wiki/Recursion_(computer_science)) - A method of solving a computational problem where the solution depends on solutions to smaller instances of the same problem
    - [Divide and conquer](https://en.wikipedia.org/wiki/Divide-and-conquer_algorithm) - An algorithm design paradigm
    - [Dynamic programming](https://en.wikipedia.org/wiki/Dynamic_programming) - A method for solving a complex problem by breaking it down into a collection of simpler subproblems
    - [Backtracking](https://en.wikipedia.org/wiki/Backtracking) - A class of algorithms for finding solutions to some computational problems
    - [Greedy algorithm](https://en.wikipedia.org/wiki/Greedy_algorithm) - An algorithmic paradigm that follows the problem-solving heuristic of making the locally optimal choice at each stage
  - Sorting Algorithms
    - [Quicksort](https://en.wikipedia.org/wiki/Quicksort) - An in-place sorting algorithm
    - [Merge sort](https://en.wikipedia.org/wiki/Merge_sort) - An efficient, general-purpose, and comparison-based sorting algorithm
    - [Heapsort](https://en.wikipedia.org/wiki/Heapsort) - A comparison-based sorting algorithm
  - Searching Algorithms
    - [Binary search](https://en.wikipedia.org/wiki/Binary_search) - A search algorithm that finds the position of a target value within a sorted array
    - [Interpolation search](https://en.wikipedia.org/wiki/Interpolation_search) - An algorithm for searching for a key in a sorted array that has been ordered by numerical values assigned to the keys
  - String Algorithms
    - [Knuth–Morris–Pratt algorithm](https://en.wikipedia.org/wiki/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm) - A string-searching algorithm that searches for occurrences of a "word" W within a main text string T
    - [Boyer–Moore algorithm](https://en.wikipedia.org/wiki/Boyer%E2%80%93Moore_string-search_algorithm) - A string-searching algorithm that is the standard benchmark for practical string-search literature
    - [Longest common subsequence](https://en.wikipedia.org/wiki/Longest_common_subsequence) - The problem of finding the longest subsequence common to all sequences in a set of sequences
  - Graph Algorithms
    - Traversal
      - [Breadth-first search](https://en.wikipedia.org/wiki/Breadth-first_search) - An algorithm for traversing or searching tree or graph data structures
      - [Depth-first search](https://en.wikipedia.org/wiki/Depth-first_search) - An algorithm for traversing or searching tree or graph data structures
    - Shortest Path
      - [Dijkstra's algorithm](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm) - An algorithm for finding the shortest paths between nodes in a weighted graph
      - [Bellman–Ford algorithm](https://en.wikipedia.org/wiki/Bellman%E2%80%93Ford_algorithm) - An algorithm that computes shortest paths from a single source vertex to all of the other vertices in a weighted digraph
    - [Minimum Spanning Tree](https://en.wikipedia.org/wiki/Minimum_spanning_tree) - A subset of the edges of a connected, edge-weighted undirected graph that connects all the vertices together
      - [Prim's algorithm](https://en.wikipedia.org/wiki/Prim's_algorithm) - A greedy algorithm that finds a minimum spanning tree for a weighted undirected graph
      - [Kruskal's algorithm](https://en.wikipedia.org/wiki/Kruskal's_algorithm) - A minimum-spanning-tree algorithm which finds an edge of the least possible weight that connects any two trees in the forest
    - Other
      - [Tarjan's strongly connected components algorithm](https://en.wikipedia.org/wiki/Tarjan%27s_strongly_connected_components_algorithm) - An algorithm in graph theory for finding the strongly connected components (SCCs) of a directed graph
      - [Topological sorting](https://en.wikipedia.org/wiki/Topological_sorting) - A linear ordering of the vertices of a directed acyclic graph (DAG)
  - Hashing Algorithms
    - [Hash function](https://en.wikipedia.org/wiki/Hash_function) - Any function that can be used to map data of arbitrary size to fixed-size values

### Data Structures

- [Abstract Data Types](https://en.wikipedia.org/wiki/Abstract_data_type) - A mathematical model for data types
  - [String](https://en.wikipedia.org/wiki/String_(computer_science)) - A finite sequence of symbols that are chosen from a set called an alphabet
  - [List](https://en.wikipedia.org/wiki/List_(abstract_data_type)) - An abstract data type that represents a finite number of ordered values
  - [Associative array](https://en.wikipedia.org/wiki/Associative_array) - An abstract data type that can hold a collection of (key, value) pairs
  - [Stack](https://en.wikipedia.org/wiki/Stack_(abstract_data_type)) - An abstract data type that serves as a collection of elements, with two main operations: push and pop
  - [Queue](https://en.wikipedia.org/wiki/Queue_(abstract_data_type)) - An abstract data type that serves as a collection of elements, with two main operations: enqueue and dequeue
    - [Priority queue](https://en.wikipedia.org/wiki/Priority_queue) - An abstract data type which is like a regular queue or stack data structure, but where additionally each element has a "priority" associated with it
  - [Tree](https://en.wikipedia.org/wiki/Tree_(abstract_data_type)) - An abstract data type that represents a hierarchical tree structure with a set of connected nodes
  - [Graph](https://en.wikipedia.org/wiki/Graph_(abstract_data_type)) - An abstract data type that is meant to implement the undirected graph and directed graph concepts from mathematics
    - [Directed acyclic graph (DAG)](https://en.wikipedia.org/wiki/Directed_acyclic_graph) - A directed graph with no directed cycles
- [Data Structures](https://en.wikipedia.org/wiki/Data_structure) - A data organization, management, and storage format that is designed to enable efficient access and modification
  - [Passive data structure](https://en.wikipedia.org/wiki/Passive_data_structure) - A record data structure that contains only public data fields and provides no methods other than implicitly for reading/writing the fields
  - [Array](https://en.wikipedia.org/wiki/Array_(data_type)) - A data structure consisting of a collection of elements (values or variables)
    - [Array slicing](https://en.wikipedia.org/wiki/Array_slicing) - An operation that extracts a subset of elements from an array and packages them as another array
    - [Sparse matrix](https://en.wikipedia.org/wiki/Sparse_matrix) - A matrix in which most of the elements are zero, allowing for specialized storage and algorithms to save memory and processing time
  - [Hash table](https://en.wikipedia.org/wiki/Hash_table) - A data structure that implements an associative array abstract data type
    - Collision Resolution
      - [Cuckoo hashing](https://en.wikipedia.org/wiki/Cuckoo_hashing) - A scheme in computer programming for resolving hash collisions of keys in a hash table
      - [Linear probing](https://en.wikipedia.org/wiki/Linear_probing) - A scheme in computer programming for resolving collisions in hash tables
  - [Linked data structure](https://en.wikipedia.org/wiki/Linked_data_structure) - A data structure which consists of a set of data records (nodes) linked together and organized by references
  - [Persistent structure](https://en.wikipedia.org/wiki/Persistent_data_structure) - A data structure that always preserves the previous version of itself when it is modified
  - [Disjoint-set data structure](https://en.wikipedia.org/wiki/Disjoint-set_data_structure) - A data structure that stores a collection of disjoint (non-overlapping) sets
  - Tree-based
    - [Search tree](https://en.wikipedia.org/wiki/Search_tree) - A tree data structure used for locating specific keys from within a set
      - [Binary search tree (BST)](https://en.wikipedia.org/wiki/Binary_search_tree) - A rooted binary tree data structure with the key of each internal node being greater than all keys in the respective node's left subtree and less than the ones in its right subtree
    - [Markle tree](https://en.wikipedia.org/wiki/Merkle_tree) - A tree in which every leaf node is labelled with the cryptographic hash of a data block
    - [Heap](https://en.wikipedia.org/wiki/Heap_(data_structure)) - A tree-based data structure that satisfies the heap property
    - [Trie](https://en.wikipedia.org/wiki/Trie) - A search tree data structure used to locate specific keys from within a set
    - [Fenwick tree](https://en.wikipedia.org/wiki/Fenwick_tree) - A data structure that can efficiently update elements and calculate prefix sums in a table of numbers
  - Graph-based
    - [Adjacency matrix](https://en.wikipedia.org/wiki/Adjacency_matrix) - A square matrix used to represent a finite graph
    - [Adjacency list](https://en.wikipedia.org/wiki/Adjacency_list) - A collection of unordered lists used to represent a finite graph
