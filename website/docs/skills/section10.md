# 10 - Advanced Programming

## Procedural & Systems Programming

:::note[Relevant DSS-P Skills]

- 3\. Technology > 3\.1 Software Development > Computer Science

:::

### Rust Language

- [Rust](https://www.rust-lang.org/) - A programming language that empowers everyone to build reliable and efficient software
  - [Ownership and borrowing](https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html) - A set of rules that govern how a Rust program manages memory
  - [Interior mutability](https://doc.rust-lang.org/book/ch15-05-interior-mutability.html) - A design pattern in Rust that allows you to mutate data even when there are immutable references to that data
  - [Closure](https://doc.rust-lang.org/book/ch13-01-closures.html) - An anonymous function you can save in a variable or pass as an argument to other functions
  - [Trait-based generics](https://doc.rust-lang.org/book/ch10-02-traits.html) - A way to define behavior that a type must provide, allowing for generic code that can operate on any type that implements the specified behavior
  - [Lifetime](https://doc.rust-lang.org/book/ch10-03-lifetime-syntax.html) - A construct the compiler uses to ensure all borrows are valid
  - [Module Pin](https://doc.rust-lang.org/std/pin/index.html) - A module that provides types which pin data to its location in memory
  - Tools
    - [C2Rust](https://c2rust.com/) - A tool that is able to translate most C modules into semantically equivalent Rust code
  - Tutorials
    - [Rust by Example](https://doc.rust-lang.org/rust-by-example/) - A collection of runnable examples that illustrate various Rust concepts and standard libraries

### Go Language

- [Go](https://go.dev/) - An open-source programming language supported by Google
  - Core Features
    - [Go Modules](https://go.dev/wiki/Modules) - The dependency management system for the Go programming language
    - [Defer, panic and recover](https://go.dev/blog/defer-panic-and-recover) - The powerful but unusual control-flow mechanisms in Go
    - [Pointer receiver](https://go.dev/tour/methods/4) - A method that operates on a pointer to the type, allowing it to modify the value to which the receiver points
    - [Interface](https://go.dev/tour/methods/9) - A type defined as a set of method signatures
    - [Goroutine](https://go.dev/tour/concurrency/1) - A lightweight thread managed by the Go runtime
    - [Channel](https://go.dev/tour/concurrency/2) - A typed conduit through which you can send and receive values with the channel operator, `<-`
  - Libraries
    - [Awesome Go](https://awesome-go.com/) - A curated list of awesome Go frameworks, libraries, and software
    - [lo](https://github.com/samber/lo) - A Lodash-style Go library
    - [fp-go](https://github.com/repeale/fp-go) - A collection of Functional Programming helpers
    - [shortuuid](https://github.com/lithammer/shortuuid) - A generator library for concise, unambiguous and URL-safe UUIDs
  - Tools
    - [Go binary size SVG treemap](https://github.com/nikolaydubina/go-binsize-treemap) - A CLI tool to make treemaps of size of Go executable
    - [mvm](https://mvm.sh/) - A fast virtual machine for Go and beyond that enables users to run Go programs directly from source code without compilation
  - Tutorials
    - [Effective Go](https://golang.org/doc/effective_go.html) - A document that gives tips for writing clear, idiomatic Go code
    - [Go by Example](https://gobyexample.com/) - A hands-on introduction to Go using annotated example programs
    - [Learn Go with tests](https://quii.gitbook.io/learn-go-with-tests) - A resource that teaches the fundamentals of Go, including testing, on the first day

### C & Other Procedural Languages

- [C](https://www.open-std.org/jtc1/sc22/wg14/) - A general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system
  - [Macros](https://gcc.gnu.org/onlinedocs/cpp/Macros.html) - A fragment of code which has been given a name
- [Zig](https://ziglang.org/) - A general-purpose programming language and toolchain for maintaining robust, optimal and reusable software
  - [Comptime](https://zig.guide/language-basics/comptime/) - The mechanism that allows you to execute code at compile-time

## Functional & Hybrid Programming

:::note[Relevant DSS-P Skills]

- 3\. Technology > 3\.1 Software Development > Computer Science

:::

### Functional-first & Multi-paradigm Languages

- [F#](https://fsharp.org/) - A universal programming language for writing succinct, robust and performant code
  - Immutable data structure
  - [Discriminated union](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/discriminated-unions) - A type that can store a value of one of several different, but fixed, types
  - [Active pattern](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/active-patterns) - A feature that lets you define named partitions that subdivide input data, so that you can use these names in a pattern matching expression
  - [Computation expression](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/computation-expressions) - A feature that provides a convenient syntax for writing computations that can be sequenced and combined using control flow constructs and bindings
- [OCaml](https://ocaml.org/) - An industrial-strength functional programming language with an emphasis on expressiveness and safety
  - [Functor](https://ocaml.org/manual/latest/moduleexamples.html#s:module-functors) - A module that is parameterized by another module
- [Haskell](https://www.haskell.org/) - An advanced, purely functional programming language
  - Purely functional
  - [Lazy evaluation](https://wiki.haskell.org/Lazy_evaluation) - An evaluation strategy which delays the evaluation of an expression until its value is needed
- [Elixir](https://elixir-lang.org/) - A dynamic, functional language for building scalable and maintainable applications
  - [Process](https://elixir-lang.org/getting-started/processes.html) - A lightweight thread of execution that is isolated and exchanges information via messages
- [Power Fx](https://learn.microsoft.com/en-us/power-platform/power-fx/overview) - A low-code language used across Microsoft Power Platform that is a general-purpose, strong-typed, declarative, and functional programming language

### Multi-paradigm & Hybrid Languages

- 🪙 [Java](https://www.oracle.com/java/) - The #1 programming language and development platform
  - [Built-in concurrency support](https://docs.oracle.com/javase/tutorial/essential/concurrency/sync.html) - The features of the Java platform designed from the ground up to support concurrent programming
- [C#](https://learn.microsoft.com/en-us/dotnet/csharp/) - A modern, object-oriented, and type-safe programming language
  - [Language-Integrated Query (LINQ)](https://learn.microsoft.com/en-us/dotnet/csharp/linq/) - The name for a set of technologies based on the direct integration of query capabilities into the C# language
  - [Delegate](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/delegates/) - A type that represents references to methods with a particular parameter list and return type
  - [Lambda expression](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/lambda-expressions) - A way to create an anonymous function
- [Scala](https://www.scala-lang.org/) - A modern multi-paradigm programming language designed to express common programming patterns in a concise, elegant, and type-safe way
  - [Hybrid OO/functional](https://docs.scala-lang.org/tour/tour-of-scala.html) - A characteristic of a language that fuses object-oriented and functional programming in a statically typed setting
- [Groovy](http://groovy-lang.org/) - A powerful, optionally typed and dynamic language, with static-typing and static compilation capabilities, for the Java platform
- [Dart](https://dart.dev/) - A client-optimized language for fast apps on any platform

## Data & Format Standards

:::note[Relevant DSS-P Skills]

- 3\. Technology > 3\.1 Software Development > Computer Science

:::

### Text Format & Character Code

- [ASCII](https://en.wikipedia.org/wiki/ASCII) - A character encoding standard for electronic communication
- [Unicode](https://home.unicode.org/) - The universal character encoding standard
  - [UTF-8](https://en.wikipedia.org/wiki/UTF-8) - A variable-width character encoding used for electronic communication
  - [Unicode Emoji](https://home.unicode.org/emoji/) - A standardized set of characters that are used like emoticons
- [CSV](https://en.wikipedia.org/wiki/Comma-separated_values) - A delimited text file that uses a comma to separate values
- [TSV](https://en.wikipedia.org/wiki/Tab-separated_values) - A delimited text file format that uses a tab character to separate values in a table
- Libraries
  - [ICU](https://icu.unicode.org/) - A mature, widely used set of C/C++ and Java libraries providing Unicode and Globalization
  - [Python emoji](https://github.com/carpedm20/emoji/) - An emoji library for Python
  - [Go emoji](https://github.com/kyokomi/emoji) - A minimalistic emoji package for Go

### DateTime Format

- [UTC](https://en.wikipedia.org/wiki/Coordinated_Universal_Time) - The primary time standard globally used to regulate clocks and time
- [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) - An international standard covering the worldwide exchange and communication of date- and time-related data
- [Unix time](https://en.wikipedia.org/wiki/Unix_time) - A system for describing a point in time
- Libraries
  - [Ruby Time](https://docs.ruby-lang.org/en/master/Time.html) - An abstraction of dates and times
  - [Python delorean](https://delorean.readthedocs.io/en/latest/index.html) - A library for clearing up the inconvenient truths that arise dealing with datetimes in Python
  - [Python arrow](https://arrow.readthedocs.io/en/latest/) - A Python library that offers a sensible and human-friendly approach to creating, manipulating, formatting and converting dates, times and timestamps
  - [Luxon](https://moment.github.io/luxon/#/) - A powerful, modern, and friendly wrapper for JavaScript dates and times
  - [date-fns](https://date-fns.org/) - A modern JavaScript date utility library that provides the most comprehensive, yet simple and consistent toolset for manipulating JavaScript dates in a browser & Node.js
  - [Day.js](https://day.js.org/) - A minimalist JavaScript library that parses, validates, manipulates, and displays dates and times for modern browsers with a largely Moment.js-compatible API
  - [Go time](https://pkg.go.dev/time) - A package that provides functionality for measuring and displaying time
  - [Go when](https://github.com/olebedev/when) - A natural language date/time parser with no dependencies
- [iCalendar](https://en.wikipedia.org/wiki/ICalendar) - A media type which allows users to store and exchange calendaring and scheduling information

### Data Exchange Languages

- [JSON](https://www.json.org/json-en.html) - A lightweight data-interchange format
  - [jq](https://stedolan.github.io/jq/) - A lightweight and flexible command-line JSON processor
  - [gojq](https://github.com/itchyny/gojq) - A Pure Go implementation of jq
  - [gron](https://github.com/tomnomnom/gron) - A tool that transforms JSON into discrete assignments to make it easier to grep for what you want and see the absolute 'path' to it
  - [JMESPath](https://jmespath.org/) - A query language for JSON
  - [JSON::Tiny](https://metacpan.org/pod/JSON::Tiny) - A minimalistic JSON module with no dependencies
  - [Python json](https://docs.python.org/3/library/json.html) - A module that implements a JSON encoder and decoder
  - [Jackson](https://github.com/FasterXML/jackson) - A suite of data-processing tools for Java, including a streaming JSON parser / generator library and matching data-binding library
- [XML](https://www.w3.org/XML/) - A simple, very flexible text format derived from SGML (ISO 8879)
  - [XPath](https://www.w3.org/TR/xpath/) - An expression language that allows the processing of values conforming to the XQuery and XPath Data Model
  - [DOM](https://dom.spec.whatwg.org/) - A platform-neutral model for events, aborting activities, and node trees
  - [Python xml.etree.ElementTree](https://docs.python.org/3/library/xml.etree.elementtree.html) - A module that implements a simple and efficient API for parsing and creating XML data
  - [Nokogiri](https://nokogiri.org/) - A Ruby library that makes it easy and painless to work with XML and HTML, providing tools for reading, writing, modifying, and querying documents
- [logfmt](https://brandur.org/logfmt) - A log format that is simple, fast, and easy for humans and machines to parse
- [JSON Lines](https://jsonlines.org/) - A convenient format for storing structured data that may be processed one record at a time
- Related Tools
  - [fx](https://fx.wtf/) - A terminal JSON viewer
  - [jnv](https://github.com/ynqa/jnv) - An interactive JSON viewer and jq filter editor designed for navigating JSON

### Configuration Languages

- JSON Superset
  - [Jsonnet](https://jsonnet.org/) - A data templating language for app and tool developers
  - [Hjson](https://hjson.github.io/) - A user interface for JSON
  - [YAML](https://yaml.org/) - A human-friendly data serialization language for all programming languages
    - [yq (python)](https://github.com/kislyuk/yq) - A command-line YAML, XML, TOML processor and jq wrapper for YAML, XML, TOML documents
    - [yq (go)](https://github.com/mikefarah/yq) - A portable command-line YAML, JSON, XML, CSV, TOML and properties processor
    - [YAML::Tiny](https://metacpan.org/pod/YAML::Tiny) - A Perl class for reading and writing YAML-style files, written with as little code as possible
    - [PyYAML](https://github.com/yaml/pyyaml) - A YAML parser and emitter for Python
  - [StrictYAML](https://hitchdev.com/strictyaml/) - A type-safe YAML parser that parses and validates a restricted subset of the YAML specification
  - [JSON with comments](https://github.com/muhammadmuzzammil1998/jsonc) - A JS library to parse and stringify JSONC (JSON with comments)
  - [CUE](https://cuelang.org/) - An open-source data validation language and inference engine with its roots in logic programming
- Other Configuration Languages
  - [TOML](https://toml.io/en/) - A minimal configuration file format that's easy to read
    - [TOML::Tiny](https://metacpan.org/pod/TOML::Tiny) - A minimal, pure perl TOML parser and serializer
    - [Python tomllib](https://docs.python.org/3/library/tomllib.html) - A module that provides an interface for parsing TOML
  - [HCL](https://github.com/hashicorp/hcl) - A toolkit for creating structured configuration languages that are both human- and machine-friendly
- Related Tools
  - [yj](https://github.com/sclevine/yj) - A command-line interface tool to convert between YAML, TOML, JSON, and HCL
- General Expression Languages
  - [CEL](https://cel.dev/) - A general-purpose expression language designed to be fast, portable, and safe to execute

## Text Processing & Manipulation

:::note[Relevant DSS-P Skills]

- 3\. Technology > 3\.1 Software Development > Computer Science

:::

### Regular Expression

- [Regex](https://en.wikipedia.org/wiki/Regular_expression) - A sequence of characters that specifies a search pattern in text
  - [PCRE](https://en.wikipedia.org/wiki/Perl_Compatible_Regular_Expressions) - A library implementing regular expression pattern matching using the same syntax and semantics as Perl 5
  - [Onigmo](https://github.com/k-takata/Onigmo) - A regular expressions library forked from Oniguruma
  - [Python re](https://docs.python.org/3/library/re.html) - The module provides regular expression matching operations similar to those found in Perl
  - [Go regexp](https://pkg.go.dev/regexp) - The package that implements regular expression search
  - [RE2](https://github.com/google/re2) - A fast, safe, thread-friendly alternative to backtracking regular expression engines
- [PRegEx](https://github.com/manoss96/pregex) - A Python library that allows for the programmatic creation of regular expressions
- Regex Tools
  - [Rubular](https://rubular.com/) - A Ruby-based regular expression editor
  - [rubree](https://aim2bpg.github.io/rubree/) - A Ruby regular expression editor inspired by Rubular
  - [Wubular](https://rubyelders.github.io/wubular/) - A Javascript-based regular expression editor, inspired by Rubular
  - [RegEx101](https://regex101.com/) - An online regular expression editor and debugger

### Text Tools

- General Tools
  - [GNU sed](https://www.gnu.org/software/sed/) - A stream editor used to perform basic text transformations on an input stream
  - [sd](https://github.com/chmln/sd) - An intuitive find and replace command-line tool
  - [GNU diffutils](https://www.gnu.org/software/diffutils/) - A package of several programs for finding the differences between files
  - [colordiff](https://www.colordiff.org/) - A tool that produces the same output as diff but with coloured syntax highlighting to improve readability

### Tabular Data

- CLI Tools
  - [csvkit](https://csvkit.readthedocs.io/en/latest/) - A suite of command-line tools for converting to and working with CSV
  - [xsv](https://github.com/BurntSushi/xsv) - A fast CSV command line toolkit written in Rust
  - [qsv](https://github.com/jqnatividad/qsv) - A command line program for indexing, slicing, analyzing, splitting, enriching, transforming & joining CSV files
  - [GNU awk](https://www.gnu.org/software/gawk/) - A program that you can use to select particular records in a file and perform operations upon them
  - [GoAWK](https://github.com/benhoyt/goawk) - A POSIX-compliant AWK interpreter written in Go with CSV support
- Libraries
  - [Text::CSV](https://metacpan.org/pod/Text::CSV) - A comma-separated values manipulator (using XS or PurePerl)
  - [Python csv](https://docs.python.org/3/library/csv.html) - A module that implements classes to read and write tabular data in CSV format
  - [Ruby csv](https://ruby.github.io/csv/) - A complete interface to CSV files and data
  - [smarter_csv](https://github.com/tilo/smarter_csv) - A Ruby Gem for convenient reading and writing of CSV files
  - [Go csv](https://pkg.go.dev/encoding/csv) - A package that reads and writes comma-separated values (CSV) files
  - [Papa Parse](https://www.papaparse.com/) - The powerful, in-browser CSV parser for JavaScript
  - [Python tabulate](https://github.com/astanin/python-tabulate) - A library and a command-line utility that displays data in a visually appealing format
  - [Text::MarkdownTable](https://metacpan.org/pod/Text::MarkdownTable) - A module that can be used to write data in tabular form, formatted in MultiMarkdown syntax
  - [Terminal Table](https://github.com/tj/terminal-table) - A simple, feature-rich ascii table generation library for ruby
  - [go-pretty](https://github.com/jedib0t/go-pretty) - A table-writer and more in golang

### Template Engines

- Template Languages and Engines
  - [gomplate](https://gomplate.ca/) - A fast template renderer supporting many datasources and hundreds of functions
  - [Go template](https://pkg.go.dev/text/template) - A package that implements data-driven templates for generating textual output
    - [sprig](https://masterminds.github.io/sprig/) - A library that provides template functions for Go's template language
  - [mustache](https://mustache.github.io/) - A logic-less template syntax
  - [Jinja](https://www.palletsprojects.com/p/jinja/) - A full-featured template engine for Python
  - [Perl Text::Template](https://metacpan.org/pod/Text::Template) - A library for generating form letters, building HTML pages, or whatever you can imagine
  - [Perl HTML::Template](https://metacpan.org/pod/HTML::Template) - A system for creating HTML templates
  - [Template Toolkit](https://template-toolkit.org/) - A fast, flexible and highly extensible template processing system
  - [ERB](https://github.com/ruby/erb) - An easy to use but powerful templating system for Ruby
  - [Haml](https://haml.info/) - A markup language that's used to cleanly and simply describe the HTML of any web document without the use of inline code
  - [Liquid](https://shopify.github.io/liquid/) - A safe, customer-facing template language for flexible web apps
  - [envsubst in gettext](https://www.gnu.org/software/gettext/manual/gettext.html#envsubst-Invocation) - A program that substitutes the values of environment variables

### Markup & Document Processing

- [unified](https://unifiedjs.com/) - A friendly interface backed by an ecosystem of plugins built for creating and manipulating content
  - [remark](https://remark.js.org/) - A markdown processor powered by plugins
- [markdown-it](https://github.com/markdown-it/markdown-it) - A Markdown parser with 100% CommonMark support, extensions, and syntax plugins
  - [markdown-it-py](https://markdown-it-py.readthedocs.io/en/latest/) - A Python port of the markdown-it project
- [markdownify](https://github.com/matthewwithanm/python-markdownify) - A Python library that converts HTML to Markdown with customizable options for handling tags, formatting, and styling

## Debugging

:::note[Relevant DSS-P Skills]

- 3\. Technology > 3\.1 Software Development > Computer Science

:::

- Debuggers
  - Python
    - [VSCode Python extension](https://marketplace.visualstudio.com/items?itemName=ms-python.python) - An extension with rich support for the Python language
    - [debugpy](https://github.com/microsoft/debugpy/) - An implementation of the Debug Adapter Protocol for Python 3
  - Node.js
    - [VSCode built-in debugger](https://code.visualstudio.com/docs/nodejs/nodejs-debugging) - The built-in debugger that helps you speed up your edit, compile, and debug loop
    - [Node.js built-in inspector](https://nodejs.org/en/learn/getting-started/debugging) - The inspector which allows attaching Chrome DevTools to Node.js instances for debugging and profiling
  - Go
    - [VSCode Go extension](https://marketplace.visualstudio.com/items?itemName=golang.Go) - An extension that provides rich language support for the Go programming language
    - [Delve](https://github.com/go-delve/delve) - A debugger for the Go programming language
  - Ruby
    - [VSCode rdbg Ruby Debugger](https://marketplace.visualstudio.com/items?itemName=KoichiSasada.vscode-rdbg) - A Ruby debugger extension that is based on debug.gem
    - [debug.rb](https://github.com/ruby/debug) - The debugging functionality for Ruby
  - Others
    - [VSCode Bash Debug](https://marketplace.visualstudio.com/items?itemName=rogalmic.bash-debug) - A bash debugger GUI frontend based on bashdb
    - [BASH Debugger](https://bashdb.sourceforge.net/) - A bash shell command-line debugger
    - [GDB](https://www.gnu.org/software/gdb/) - The GNU Project debugger
- Debugger protocols
  - [DAP](https://microsoft.github.io/debug-adapter-protocol/) - The abstract protocol used between a development tool (e.g. IDE or editor) and a debugger
  - [V8 V8 Inspector Protocol](https://v8.dev/docs/inspector) - The protocol that allows for tools to instrument V8 to debug and profile JavaScript applications

### Logging

- Logging Libraries
  - Python
    - [Python logging](https://docs.python.org/3/library/logging.html) - The module that defines functions and classes which implement a flexible event logging system for applications and libraries
    - [loguru](https://github.com/Delgan/loguru) - A library which aims to bring enjoyable logging in Python
  - Javascript/Typescript
    - [bunyan](https://github.com/trentm/node-bunyan) - A simple and fast JSON logging library for node.js services
    - [winston](https://github.com/winstonjs/winston) - A logger for just about everything
    - [debug](https://github.com/debug-js/debug) - A tiny JavaScript debugging utility modelled after Node.js core's debugging technique
  - Go
    - [Charmbracelet log](https://github.com/charmbracelet/log) - A minimal and colorful Go logging library
    - [Go log](https://pkg.go.dev/log) - The package that implements a simple logging package
    - [zap](https://github.com/uber-go/zap/) - Blazing fast, structured, leveled logging in Go
    - [Logrus](https://github.com/sirupsen/logrus) - A structured logger for Go (golang), completely API compatible with the standard library logger
    - [Zero Allocation JSON Logger](https://github.com/rs/zerolog) - The package that provides a fast and simple logger dedicated to JSON output
  - Others
    - [logger](https://man7.org/linux/man-pages/man1/logger.1.html) - A tool to enter messages into the system log
    - [log4j](https://logging.apache.org/log4j/2.x/index.html) - A versatile, industrial-grade Java logging framework
    - [log4sh](https://github.com/kward/log4sh) - An advanced logging framework for shell scripts
    - [log4net](https://logging.apache.org/log4net/) - A port of the excellent Apache log4j framework to the Microsoft .NET runtime

## Test Frameworks & Tools

:::note[Relevant DSS-P Skills]

- 3\. Technology > 3\.1 Software Development > Software Development Process

:::

- Test Concepts and Best Practices
  - [Test Pyramid](https://martinfowler.com/articles/practical-test-pyramid.html) - A way of thinking about how different kinds of tests should be used to create a balanced portfolio
  - [Test case](https://en.wikipedia.org/wiki/Test_case) - A specification of the inputs, execution conditions, testing procedure, and expected results that define a single test
  - [Test double](https://en.wikipedia.org/wiki/Test_double) - An object that can stand in for a real object in a test
  - [Arrange-Act-Assert Pattern](https://xp123.com/3a-arrange-act-assert/) - A pattern for structuring a test into setting up the object to be tested, acting on it through some mutator, and making claims about the object, its collaborators, and its parameters
  - [DAMP (Descriptive And Meaningful Phrases)](https://testing.googleblog.com/2019/12/testing-on-toilet-tests-too-dry-make.html) - A principle to lean more heavily towards, and less on DRY, when writing unit tests
  - [Unit testing best practices with .NET](https://learn.microsoft.com/en-us/dotnet/core/testing/unit-testing-best-practices) - A set of best practices that help you write tests that are robust and easy to maintain
  - [JS Testing Best Practices](https://github.com/goldbergyoni/javascript-testing-best-practices) - A summary of the top testing practices for JavaScript
- Test Protocols
  - [Test Anything Protocol](http://testanything.org/) - A simple text-based interface between testing modules and a test harness
    - [tappy](https://tappy.readthedocs.io/en/latest/) - A set of tools for working with the Test Anything Protocol (TAP)
    - [Node-Tap](https://node-tap.org/) - A Test-Anything-Protocol library for JavaScript

### Test Frameworks

- Bash
  - [Bats-core](https://bats-core.readthedocs.io/en/stable/) - A Bash Automated Testing System
  - [shUnit2](https://github.com/kward/shunit2) - A unit test framework for Bourne based shell scripts
  - [shellspec](https://shellspec.info/) - A full-featured BDD unit testing framework for dash, bash, ksh, zsh and all POSIX shells
- Ruby
  - [Minitest](https://github.com/minitest/minitest) - A complete suite of testing facilities supporting TDD, BDD, mocking, and benchmarking
  - [RSpec](https://rspec.info/) - A testing tool for the Ruby programming language
  - [aruba](https://github.com/cucumber/aruba) - A tool to test command-line applications with Cucumber-Ruby, RSpec or Minitest
- Python
  - [Python unittest](https://docs.python.org/3/library/unittest.html) - A unit testing framework, sometimes referred to as 'PyUnit', which is a Python language version of JUnit
  - [pytest](https://docs.pytest.org/) - A framework that makes it easy to write small, readable tests, and can scale to support complex functional testing
  - [pytest-mock](https://github.com/pytest-dev/pytest-mock/) - A pytest plugin that provides a `mocker` fixture which is a thin-wrapper around the standard `unittest.mock` package
- Javascript/Typescript
  - [Vitest](https://vitest.dev) - A blazing fast unit-test framework powered by Vite
  - [Jest](https://jestjs.io/) - A delightful JavaScript Testing Framework with a focus on simplicity
  - [Mocha](https://mochajs.org/) - A feature-rich JavaScript test framework running on Node.js and in the browser
  - Runtime-integrated
    - [bun test](https://bun.sh/docs/cli/test) - A fast, Jest-compatible test runner built into Bun
    - [deno test](https://docs.deno.com/runtime/fundamentals/testing/) - A built-in test runner that you can use for testing JavaScript and TypeScript code
- Go
  - [Go testing](https://pkg.go.dev/testing) - A package that provides support for automated testing of Go packages
  - [Ginkgo](https://onsi.github.io/ginkgo/) - A BDD-style testing framework for Go
- Others
  - [JUnit](https://junit.org/junit5/) - The 5th major version of the programmer-friendly testing framework for Java and the JVM
  - [xUnit.net](https://xunit.net/) - A free, open source, community-focused unit testing tool for the .NET Framework

### Assertion Libraries

- [Chai](https://www.chaijs.com/) - A BDD / TDD assertion library for node and the browser
- [Gomega](https://onsi.github.io/gomega/) - A matcher/assertion library for Go

### Code Coverage Tools

- [Go cover](https://pkg.go.dev/cmd/cover) - A tool that provides code coverage statistics for Go programs
- [Istanbul](https://istanbul.js.org/) - Yet another JS code coverage tool
- [cobertura](https://cobertura.github.io/cobertura/) - A free Java tool that calculates the percentage of code accessed by tests
- [LCOV](https://github.com/linux-test-project/lcov) - An extension of GCOV, a GNU tool which provides information about what parts of a program are actually executed
- [kcov](https://simonkagstrom.github.io/kcov/) - A code coverage tester for compiled programs
- [SimpleCov](https://github.com/simplecov-ruby/simplecov) - A code coverage tool for Ruby with a powerful configuration library and automatic merging of coverage across test suites

### Test Supporting Tools

- Mocking Libraries
  - Jest / Vitest built-in ones
  - [mock](https://dhuan.github.io/mock/) - A command-line tool for mocking HTTP responses
  - [unittest.mock](https://docs.python.org/3/library/unittest.mock.html) - A library for testing in Python that allows you to replace parts of your system under test with mock objects
  - [sinon.js](https://sinonjs.org/) - A standalone and test framework agnostic JavaScript test spies, stubs and mocks
  - [mockery](https://vektra.github.io/mockery/latest/) - A project that creates mock implementations of Golang interfaces
- Test Data Generators
  - [Databricks Labs Data Generator](https://github.com/databrickslabs/dbldatagen) - A Python library for generating synthetic data within the Databricks environment using Spark
  - [generatedata.com](https://github.com/benkeen/generatedata) - A powerful, feature-rich, random test data generator
  - [gofakeit](https://github.com/brianvoe/gofakeit) - A random data generator written in go
  - [Fake-rs](https://github.com/cksac/fake-rs) - A library for generating fake data in Rust
- Multi-Environment Test Runners
  - [nox](https://nox.thea.codes/) - A command-line tool that automates testing in multiple Python environments, similar to tox
  - [tox](https://tox.wiki/en) - A command-line driven automated testing tool for Python

### Mutation Testing

- [Mutation testing](https://en.wikipedia.org/wiki/Mutation_testing) - A type of software testing where certain statements of the source code are changed to check if the test suite is able to find the errors
  - [cargo-mutants](https://mutants.rs/) - A tool for Rust that helps you improve your program's quality by finding places where bugs can be inserted without causing any tests to fail
  - [Stryker Mutator](https://stryker-mutator.io/) - A tool to test your tests with mutants
  - [PIT Mutation Testing](https://pitest.org/) - A state of the art system, providing gold standard test coverage for Java and the JVM

## Build Automation

:::note[Relevant DSS-P Skills]

- 3\. Technology > 3\.1 Software Development > Computer Science
- 3\. Technology > 3\.1 Software Development > Cloud Infrastructure Utilization

:::

- Build Automation Tools
  - [GNU Make](https://www.gnu.org/software/make/) - A tool which controls the generation of executables and other non-source files of a program
    - [Remake](https://bashdb.sourceforge.net/remake/) - An enhanced version of GNU Make that adds improved error reporting, better tracing, profiling and a debugger
    - [makefile-graph](https://github.com/dnaeon/makefile-graph) - A Go module and CLI application, which parses GNU Make's internal database and generates a graph
  - [Bazel](https://bazel.build/) - A fast, scalable, multi-language and extensible build system
  - [Gradle](https://gradle.org/) - An open-source build automation tool that is designed to be flexible enough to build almost any type of software
  - [Maven](https://maven.apache.org/) - A software project management and comprehension tool
  - [Task](https://taskfile.dev/) - A task runner / build tool that aims to be simpler and easier to use than GNU Make
  - [CMake](https://cmake.org/) - An open-source, cross-platform family of tools designed to build, test and package software
    - [CPack](https://cmake.org/cmake/help/latest/module/CPack.html) - A tool to configure generators for binary installers and source packages
  - [Meson](https://mesonbuild.com/) - An open source build system meant to be both extremely fast, and, even more importantly, as user friendly as possible
  - [Dune](https://dune.build/) - A composable build system for OCaml, OCaml-related languages, and Coq
  - [Rake](https://ruby.github.io/rake/) - A Make-like program implemented in Ruby
  - [fpm](https://fpm.readthedocs.io/) - A tool which lets you easily create packages for Debian, Ubuntu, Fedora, CentOS, RHEL, Arch Linux, and more
- Tutorials
  - [Makefile Tutorial by Example](https://makefiletutorial.com/) - A tutorial that teaches you the basics of Makefiles

### Monorepo Management

- Monorepo Tools
  - [Turborepo](https://turbo.build/repo) - A high-performance build system for JavaScript and TypeScript monorepos
  - 🔒 [Nx](https://nx.dev/) - A smart, fast and extensible build system with first-class monorepo support and powerful integrations
  - [Lerna](https://lerna.js.org/) - The original monorepo tool for JavaScript/TypeScript
- Resources
  - [Monorepo Tools](https://monorepo.tools/) - A website with tools and resources for monorepos

### Program Documentation

- Program Documentation Tools
  - [apiDoc](http://apidocjs.com/) - A tool that creates a documentation from API descriptions in your source code
  - [JSDoc](https://jsdoc.app/) - An API documentation generator for JavaScript
  - [perldoc](https://metacpan.org/dist/Pod-Perldoc/view/perldoc.pod) - A tool that looks up a piece of documentation in .pod format that is embedded in the perl installation tree
    - [Pod](https://metacpan.org/pod/perlpod) - A simple-to-use markup language used for writing documentation for Perl, Perl programs, and Perl modules
  - [pydoc](https://docs.python.org/3/library/pydoc.html) - A tool that automatically generates documentation from Python modules
    - [Docstring](https://www.python.org/dev/peps/pep-0257/) - A string literal that appears as the first statement in a module, function, class, or method definition
  - [godoc](https://pkg.go.dev/golang.org/x/tools/cmd/godoc) - A tool that extracts and generates documentation for Go programs
  - [rustdoc](https://doc.rust-lang.org/rustdoc/) - A tool that generates documentation for Rust projects
  - [RDoc](https://ruby.github.io/rdoc/) - A tool that produces HTML and command-line documentation for Ruby projects
  - [Javadoc](https://www.oracle.com/java/technologies/javase/javadoc-tool.html) - A tool from Oracle for generating API documentation in HTML format from doc comments in source code

## Package Dependency Management

:::note[Relevant DSS-P Skills]

- 3\. Technology > 3\.1 Software Development > Computer Science

:::

- JavaScript & Web Ecosystem
  - [npm CLI](https://www.npmjs.com/) - The world's largest software registry
    - [npm-check-updates](https://github.com/raineorshine/npm-check-updates) - A command-line tool that allows you to upgrade your package.json dependencies to the latest versions
    - [npmgraph](https://npmgraph.js.org/) - A tool for exploring the npm dependency graph
  - [yarn](https://yarnpkg.com/) - A package manager that doubles down as project manager
  - [pNPm](https://pnpm.io) - A fast, disk space efficient package manager
  - [Corepack](https://github.com/nodejs/corepack#readme) - A zero-runtime-dependency Node.js script that acts as a bridge between Node.js projects and the package managers they are intended to be used with during development
  - [dpmland](https://dpmland.deno.dev/) - A simple, modern and easy way to manage the Deno modules and dependencies
  - [Bun package manager](https://bun.sh/package-manager) - A fast, npm-compatible package manager built into Bun
  - [orogene](https://orogene.dev/) - A next-generation package manager for the JavaScript ecosystem
  - [vlt](https://www.vlt.io/home) - A JavaScript package registry for teams that move fast, serving npm-compatible packages together with a secure npm mirror and a fully resolved dependency graph
- Python Development
  - [pip](https://pip.pypa.io/) - The package installer for Python
  - [poetry](https://python-poetry.org/) - A tool for dependency management and packaging in Python
  - [pdm](https://pdm-project.org/en/latest/) - A modern Python package and dependency manager supporting the latest PEP standards
  - [uv](https://docs.astral.sh/uv/) - An extremely fast Python package and project manager, written in Rust
- Systems & Native Languages
  - [go mod](https://pkg.go.dev/cmd/go) - A tool for managing Go source code
  - [Cargo](https://doc.rust-lang.org/stable/cargo/) - The Rust package manager
  - [Conan](https://conan.io/) - A dependency and package manager for C and C++ languages
  - [vcpkg](https://vcpkg.io/) - A free C/C++ package manager for acquiring and managing libraries
  - [bpkg](https://bpkg.sh/bpkg/) - A lightweight bash package manager
- JVM & .NET Frameworks
  - [Maven](https://maven.apache.org/) - A software project management and comprehension tool
  - [Gradle](https://gradle.org/) - An open-source build automation tool that is designed to be flexible enough to build almost any type of software
  - [NuGet CLI](https://www.nuget.org/) - The package manager for .NET
- Other Language Ecosystems
  - [RubyGems CLI](https://rubygems.org/) - The official package manager for Ruby
  - [Bundler](https://bundler.io/) - A tool that provides a consistent environment for Ruby projects
  - [LuaRocks CLI](https://luarocks.org/) - The package manager for Lua modules
  - [cpanminus](https://metacpan.org/pod/App::cpanminus) - A tool to get, unpack, build and install modules from CPAN
  - [stack](https://docs.haskellstack.org/en/stable/) - A cross-platform program for developing Haskell projects
  - [opam](https://opam.ocaml.org/) - A source-based package manager for the OCaml community
  - [Pub](https://pub.dev/) - The official package manager for Dart and Flutter
  - [Hex](https://hex.pm/) - The package manager for the Erlang ecosystem

## Virtual Environment

:::note[Relevant DSS-P Skills]

- 3\. Technology > 3\.1 Software Development > Computer Science

:::

- Virtual Environment Managers
  - [Python venv](https://docs.python.org/3/library/venv.html) - A module for the creation of virtual environments
  - [pyenv](https://github.com/pyenv/pyenv) - A tool for simple Python version management
  - [nodeenv](https://ekalinin.github.io/nodeenv/) - A tool to create isolated node.js environments
  - [nvm](https://github.com/nvm-sh/nvm) - A POSIX-compliant bash script to manage multiple active node.js versions
  - [nvm-windows](https://github.com/coreybutler/nvm-windows) - A node.js version manager for Windows
  - [rv](https://github.com/spinel-coop/rv) - A simple and powerful Ruby version manager written in Rust
  - [frum](https://github.com/TaKO8Ki/frum) - A fast and modern Ruby version manager written in Rust
  - [g](https://github.com/stefanmaric/g) - A simple Go version manager, gluten-free
  - [perlbrew](https://perlbrew.pl/) - A tool to manage multiple perl installations in your $HOME directory
  - [asdf](https://asdf-vm.com/) - A tool version manager
  - [mise](https://mise.jdx.dev/) - A polyglot tool version manager
  - [tenv](https://github.com/tofuutils/tenv) - A versatile version manager for OpenTofu, Terraform, Terragrunt and Atmos
