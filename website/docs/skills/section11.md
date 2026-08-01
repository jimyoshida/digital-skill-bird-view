# 11 - Specialized Development Domains

## Business & Productivity Application SDKs

:::note[Relevant DSS-P Skills]

- 3\. Technology > 3\.1 Software Development > Service Utilization

:::

### Project & Work Management

- [Python Jira](https://jira.readthedocs.io/) - A Pythonic interface to the JIRA REST APIs
- [Notion SDK for JavaScript](https://github.com/makenotion/notion-sdk-js) - An official client for the Notion API
- [Linear SDK](https://github.com/linear/linear) - A typed TypeScript SDK for interacting with Linear's GraphQL API for planning and building products
- [Asana Python SDK](https://github.com/Asana/python-asana) - The official Python client library for the Asana API that provides programmatic access to Asana's project management platform
- [py-trello](https://github.com/sarumont/py-trello) - A Python API wrapper that represents Trello objects (boards, lists, cards) as corresponding Python objects with cached attributes

### Collaboration & Communication

- [Python Slack SDK](https://slack.dev/python-slack-sdk/) - A software development kit that helps Python developers build apps that integrate with Slack
- [Slack API in Go](https://pkg.go.dev/github.com/slack-go/slack) - A Go library for the Slack API
- [discord.js](https://discord.js.org/) - A powerful Node.js module that allows you to interact with the Discord API very easily
- [Microsoft Teams JavaScript client library](https://learn.microsoft.com/en-us/microsoftteams/platform/teams-sdk/) - A library that helps you create hosted experiences in Teams, Microsoft 365 app, and Outlook, where your app content is hosted in an iFrame
- [Notify](https://github.com/nikoksr/notify) - A dead simple Go library for sending notifications to various messaging services
- [Twilio Node.js SDK](https://github.com/twilio/twilio-node) - The official Node.js helper library for the Twilio API, providing developers with tools to integrate Twilio's communication services
- [Zoom Meeting SDK](https://www.npmjs.com/package/@zoom/meetingsdk) - A WebAssembly-based SDK that embeds Zoom Meeting and Webinar experiences in web applications with support for Angular, React, and Vue.js

### Cloud Storage & File Management

- [Dropbox JavaScript SDK](https://github.com/dropbox/dropbox-sdk-js) - The official Dropbox SDK for JavaScript that provides API V2 access for Node.js and browser applications with OAuth support and TypeScript compatibility
- [Box Node SDK](https://github.com/box/box-node-sdk) - A JavaScript interface for interacting with the Box API that provides complete coverage of Box's API ecosystem with features including authentication methods and automatic retries
- [Airtable.js](https://github.com/Airtable/airtable.js) - The official JavaScript library that provides a simple way to access and interact with your Airtable data through its RESTful API

### Email & Marketing Automation

- [SendGrid Node.js SDK](https://github.com/sendgrid/sendgrid-nodejs) - The official Twilio SendGrid Node.js API library for quickly and easily using the SendGrid Web API v3
- [Mailchimp Marketing Node.js SDK](https://github.com/mailchimp/mailchimp-marketing-node) - The official Node.js client library for the Mailchimp Marketing API that supports authentication via Basic Auth or OAuth2

### Payments & Finance

- [Stripe Node.js SDK](https://github.com/stripe/stripe-node) - A library that provides convenient access to the Stripe API from server-side JavaScript applications with TypeScript support and automatic retries

### CRM & Customer Support

- [JSforce](https://jsforce.github.io/) - A Salesforce API library for JavaScript applications
- [HubSpot Node.js SDK](https://github.com/HubSpot/hubspot-api-nodejs) - An official SDK that provides access to HubSpot's V3 API for managing CRM objects, files, OAuth, and other platform features
- [node-zendesk](https://github.com/blakmatrix/node-zendesk) - A trusted API client library for Node.js and the browser that provides seamless integration with Zendesk's Customer Support Platform

### Enterprise Workspaces

- Microsoft 365 Development
  - [PnPjs](https://pnp.github.io/pnpjs/) - A collection of fluent libraries for consuming SharePoint, Graph, and Office 365 REST APIs
  - [SharePoint Framework (SPFx)](https://learn.microsoft.com/en-us/sharepoint/dev/spfx/sharepoint-framework-overview) - A page and web part model that provides full support for client-side SharePoint development, easy integration with SharePoint data, and extending Microsoft Teams and Microsoft Viva
  - [CLI for Microsoft 365](https://pnp.github.io/cli-microsoft365/) - A cross-platform command line interface that enables you to manage your Microsoft 365 tenant and SharePoint Framework projects on any platform
  - [Microsoft Graph](https://learn.microsoft.com/en-us/graph/overview) - The gateway to data and intelligence in Microsoft 365
  - [Work-IQ](https://github.com/microsoft/work-iq) - An MCP (Model Context Protocol) server and CLI for accessing Microsoft 365 data
- Google Workspace Development
  - [Google Workspace CLI](https://github.com/googleworkspace/cli) - A command-line tool for Drive, Gmail, Calendar, Sheets, Docs, Chat, Admin, and more, dynamically built from Google Discovery Service and including AI agent skills
  - [Google APIs Node.js Client](https://github.com/googleapis/google-api-nodejs-client) - A Node.js client library for using Google APIs with support for OAuth 2.0, API Keys, and JWT token authentication

## Developer Tools Integration SDKs

:::note[Relevant DSS-P Skills]

- 3\. Technology > 3\.1 Software Development > Team Development

:::

### Version Control & DevOps

- [Octokit.js](https://github.com/octokit/octokit.js) - The all-batteries-included GitHub SDK for Browsers, Node.js, and Deno
- [PyGithub](https://github.com/PyGithub/PyGithub) - A Python library that enables you to manage GitHub resources such as repositories, user profiles, and organizations through the GitHub REST API
- [go-github](https://github.com/google/go-github) - A Go client library for accessing the GitHub v3 REST API, providing comprehensive coverage of GitHub's endpoints
- [python-gitlab](https://github.com/python-gitlab/python-gitlab) - A wrapper for the GitLab API written in Python
- [GitLab Go Client](https://gitlab.com/gitlab-org/api/client-go) - An official Go library for interacting with the GitLab API, providing comprehensive support for GitLab resources
- [GitLab Ruby Gem](https://github.com/NARKOZ/gitlab) - A Ruby wrapper and CLI for the GitLab REST API that allows developers to interact with GitLab programmatically
- [Atlassian Python API](https://github.com/atlassian-api/atlassian-python-api) - A Python library that provides a simple wrapper for interacting with Atlassian product REST APIs including Jira, Confluence, and Bitbucket

### Container & Orchestration

- [Docker SDK for Python](https://docker-py.readthedocs.io/) - A Python library for the Docker Engine API that lets you do anything the docker command does from within Python applications
- [Docker SDK for Go](https://github.com/moby/moby/tree/master/client) - The official Go client for the Docker Engine API
- [Kubernetes client-go](https://github.com/kubernetes/client-go) - The official Go client library for interacting with Kubernetes clusters, providing clientsets, dynamic clients, and controller-building tools
- [Kubernetes Python Client](https://github.com/kubernetes-client/python) - The official Python library for interacting with the Kubernetes API, enabling programmatic cluster management and resource operations

### CI/CD & Automation

- [python-jenkins](https://python-jenkins.readthedocs.io/) - A Python wrapper for the Jenkins REST API that provides a conventionally pythonic way to control and automate Jenkins servers
- [GitHub Actions Toolkit](https://github.com/actions/toolkit) - A set of packages that provides functions and utilities to make creating GitHub Actions easier, including features for inputs/outputs and file operations
- [Terraform Plugin SDK](https://github.com/hashicorp/terraform-plugin-sdk) - A framework that enables building Terraform plugins (providers) to manage service providers and custom in-house solutions

## Computer Graphics & Game Development

:::note[Relevant DSS-P Skills]

- 3\. Technology > 3\.1 Software Development > Front-end System Development

:::

### 3D Graphics

- [Three.js](https://threejs.org/) - A JavaScript 3D library that makes it easy to create and display animated 3D computer graphics in a web browser using WebGL
- [GSAP](https://gsap.com/) - A robust JavaScript toolset that turns developers into animation superheroes

### 2D Graphics

- [PixiJS](https://pixijs.com/) - An advanced, open-source 2D rendering engine designed for creating stunning visual experiences on the web

### Graphics APIs

- [WebGL](https://www.khronos.org/webgl/) - A cross-platform, royalty-free web standard for a low-level 3D graphics API based on OpenGL ES
- [OpenGL](https://www.opengl.org/) - A cross-language, cross-platform application programming interface for rendering 2D and 3D vector graphics
- [Vulkan](https://www.vulkan.org/) - A low-overhead, cross-platform, 3D graphics and computing API
  - [nvk](https://github.com/maierfelix/nvk) - Vulkan headers for the Go programming language

## Binary & Media Processing

:::note[Relevant DSS-P Skills]

- 3\. Technology > 3\.1 Software Development > Back-end System Development

:::

### Binary Format Tools

- [file (command)](https://www.darwinsys.com/file/) - A file type guesser
- [hexdump](https://man7.org/linux/man-pages/man1/hexdump.1.html) - A filter which displays the specified files, or the standard input, in a user specified format
- [xxd](https://github.com/ckormanyos/xxd) - The well-known hex-dump-type utility
- [bed](https://github.com/itchyny/bed) - A binary editor written in Go
- [fq](https://github.com/wader/fq) - A tool inspired by jq that lets you poke at binary formats
- [ELF format](https://en.wikipedia.org/wiki/Executable_and_Linkable_Format) - A common standard file format for executable files, object code, shared libraries, and core dumps
- [BinData](https://github.com/dmendel/bindata) - A declarative way to read and write structured binary data in Ruby

### Data Serialization

- [Protobuf](https://protobuf.dev/) - A language-neutral, platform-neutral, extensible mechanism for serializing structured data
- [MessagePack](https://msgpack.org/) - An efficient binary serialization format

### Image & Media Formats

- [JPEG](https://en.wikipedia.org/wiki/JPEG) - A commonly used method of lossy compression for digital images
- [PNG](https://en.wikipedia.org/wiki/PNG) - A raster-graphics file format that supports lossless data compression
- [Webp](https://en.wikipedia.org/wiki/WebP) - A raster graphics file format developed by Google intended as a replacement for JPEG, PNG, and GIF file formats
- [MPEG-4](https://en.wikipedia.org/wiki/MPEG-4) - A method of defining compression of audio and visual digital data
- [High Efficiency Video Coding](https://en.wikipedia.org/wiki/High_Efficiency_Video_Coding) - A video compression standard, designed as a successor to the widely used Advanced Video Coding (AVC)

### Image & Media Processing

- Tools
  - [Swatchify](https://james-see.github.io/swatchify/) - A tool that uses k-means clustering to extract dominant colors from images
  - [exiftool](https://metacpan.org/dist/Image-ExifTool/view/exiftool) - A command-line application and Perl library for reading and writing meta information in files
  - [ImageMagick](https://imagemagick.org/index.php) - A free, open-source software suite, used for editing and manipulating digital images
  - [FFmpeg](https://www.ffmpeg.org/) - A complete, cross-platform solution to record, convert and stream audio and video
- Libraries
  - [go-mp4](https://github.com/abema/go-mp4) - A Go library that provides low-level I/O interfaces for MP4
  - [Native WebP for Go](https://github.com/HugoSmits86/nativewebp) - A native WebP encoder written entirely in Go, with no dependencies on libwebp or other external libraries
  - [Pillow](https://python-pillow.github.io/) - The friendly PIL (Python Imaging Library) fork that adds image processing capabilities to your Python interpreter
  - [RMagick](https://rmagick.github.io/) - A binding from Ruby to the ImageMagick image manipulation library
  - [pure_jpeg](https://github.com/peterc/pure_jpeg) - A pure Ruby JPEG encoder and decoder library with no native dependencies

### Compression & Archiving

- Tools
  - [GNU Gzip](https://www.gnu.org/software/gzip/) - A popular data compression program
  - [GNU tar](https://www.gnu.org/software/tar/) - A program that provides the ability to create tar archives, as well as various other kinds of manipulation
  - [Info-Zip](https://sourceforge.net/projects/infozip/) - A set of open-source software for handling ZIP archives
  - [P7ZIP](https://p7zip.sourceforge.net/) - A port of 7za.exe for POSIX systems
- Libraries
  - [Python Data Compression and Archiving libs](https://docs.python.org/3/library/archiving.html) - The modules that support data compression and the creation and reading of archives
  - [Go compress libs](https://pkg.go.dev/compress) - A package that defines a common interface to compression and decompression algorithms
  - [Go archive libs](https://pkg.go.dev/archive) - A package that defines a common interface for accessing archived file formats
  - [JSZip](https://stuk.github.io/jszip/) - A javascript library for creating, reading and editing .zip files
  - [Ruby module Zlib](https://docs.ruby-lang.org/en/master/Zlib.html) - A module that contains classes for compressing and decompressing streams, and for working with gzip-format files
  - [zlib](https://zlib.net/) - A free, general-purpose, legally unencumbered lossless data-compression library for use on virtually any computer hardware and operating system
  - [zlib-rs](https://github.com/trifectatechfoundation/zlib-rs) - A safer zlib
  - [snappy](https://google.github.io/snappy/) - A compression/decompression library that aims for very high speeds and reasonable compression
  - [rubyzip](https://github.com/rubyzip/rubyzip) - A ruby library for reading and writing zip files
  - [klauspost/compress](https://github.com/klauspost/compress) - A package that provides various compression algorithms including zstandard, S2, optimized deflate (gzip, zip, zlib), snappy, and entropy encoding for Go

## Document Processing

:::note[Relevant DSS-P Skills]

- 3\. Technology > 3\.1 Software Development > Back-end System Development

:::

### Business Document Formats

- [PDF](https://en.wikipedia.org/wiki/PDF) - A file format developed by Adobe to present documents in a manner independent of application software, hardware, and operating systems
- [PDF/A](https://en.wikipedia.org/wiki/PDF/A) - An ISO-standardized version of the Portable Document Format (PDF) specialized for use in the archiving and long-term preservation of electronic documents
- [Office Open XML](https://en.wikipedia.org/wiki/Office_Open_XML) - A zip-based XML-based file format for representing spreadsheets, charts, presentations and word processing documents
- [OpenDocument](https://en.wikipedia.org/wiki/OpenDocument) - A zip-compressed, XML-based file format for spreadsheets, charts, presentations and word-processing documents

### PDF Processing

- Tools
  - [Docling](https://github.com/docling-project/docling) - A powerful library which simplifies document processing, parsing diverse formats
  - [Ghostscript](https://www.ghostscript.com/) - A suite of software based on an interpreter for Adobe Systems' PostScript and Portable Document Format page description languages
  - [qpdf](https://qpdf.sourceforge.io/) - A command-line tool and C++ library that performs content-preserving transformations on PDF files
  - [pdftk server](https://www.pdflabs.com/tools/pdftk-the-pdf-toolkit/) - A command-line tool for working with PDFs
  - [pdfcpu](https://pdfcpu.io/) - A PDF processor written in Go
  - [MinerU](https://mineru.net/) - A high-quality tool for convert PDF to Markdown and JSON
  - [Nano-PDF](https://github.com/gavrielc/Nano-PDF) - A command-line tool that enables users to edit PDF slides using natural language instructions, powered by AI vision models, with multi-page parallel editing and non-destructive text-layer preservation through OCR
- Libraries
  - [Folio](https://github.com/carlos7ags/folio) - A modern PDF library for Go that includes a layout engine, HTML-to-PDF conversion, support for forms, digital signatures, barcodes, and PDF/A compliance
  - [Poppler](https://poppler.freedesktop.org/) - A PDF rendering library based on the xpdf-3.0 code base
  - [PDF.js](https://mozilla.github.io/pdf.js/) - A general-purpose, web standards-based platform for parsing and rendering PDFs
  - [pypdf](https://github.com/py-pdf/pypdf) - A pure-python PDF library capable of splitting, merging, cropping, and transforming the pages of PDF files
  - [PyMuPDF](https://pymupdf.readthedocs.io/en/latest/) - A high-performance Python library for data extraction, analysis, conversion & manipulation of PDF (and other) documents
  - [pdfplumber](https://github.com/jsvine/pdfplumber) - A Python library to plumb a PDF for detailed information about each text character, rectangle, and line, plus table extraction and visual debugging
  - [Prawn PDF](https://prawnpdf.org/) - A fast, nimble PDF generator for Ruby
  - [ReportLab](https://www.reportlab.com/) - The Open Source Python library for generating PDFs and graphics

### Office Document Processing

- Tools
  - [libreoffice cli](https://manpages.ubuntu.com/manpages/trusty/man1/libreoffice.1.html) - The command-line interface for the LibreOffice office suite
  - [markitdown](https://github.com/microsoft/markitdown) - A lightweight Python utility for converting various files to Markdown for use with LLMs and related text analysis pipelines
  - [xlsx2csv](https://github.com/dilshod/xlsx2csv) - A fast and easy way to convert XLSX files to CSV
  - [docx2txt](https://github.com/ankushshah89/python-docx2txt) - A pure python-based command line tool to extract text from docx files
  - [pptx2md](https://github.com/ssine/pptx2md) - A simple tool for converting pptx to markdown
- Libraries
  - [python-pptx](https://python-pptx.readthedocs.io/en/latest/) - A Python library for creating and updating PowerPoint (.pptx) files
  - [PptxGenJS](https://gitbrent.github.io/PptxGenJS/) - A JavaScript library for building PowerPoint presentations that works with Node.js, React, and web browsers
  - [Excelize](https://xuri.me/excelize/) - A Go library for reading and writing XLSX/XLSM/XLTM files
  - [Roo](https://github.com/roo-rb/roo) - A library that can access the contents of various spreadsheet files

## CLI/TUI Development

:::note[Relevant DSS-P Skills]

- 3\. Technology > 3\.1 Software Development > Computer Science
- 3\. Technology > 3\.1 Software Development > Team Development

:::

- Bash
  - [built-in getopts etc.](https://www.gnu.org/software/bash/manual/html_node/Shell-Builtin-Commands.html) - A set of commands that are part of the shell itself
  - [tput](https://www.man7.org/linux/man-pages/man1/tput.1.html) - A command to initialize a terminal or query the terminfo database
  - [dialog](https://invisible-island.net/dialog/dialog.html) - A program that can be used to create nice user interfaces for shell scripts
  - [Gum](https://github.com/charmbracelet/gum) - A tool for glamorous shell scripts
  - [FIGlet](http://www.figlet.org/) - A program for making large letters out of ordinary text
  - [lolcat](https://github.com/busyloop/lolcat) - A program that concatenates files, or standard input, to standard output and adds rainbow coloring
  - [cfonts](https://github.com/dominikwilkowski/cfonts) - A tool to print sexy fonts in your console
- Perl
  - [Getopt::Long](https://metacpan.org/pod/Getopt::Long) - A module that implements an extended getopt function called GetOptions()
  - [Term::ANSIColor](https://metacpan.org/pod/Term::ANSIColor) - A module to colorize text using ANSI escape sequences
  - [Text::ANSITable](https://metacpan.org/pod/Text::ANSITable) - A module to create a formatted table using ASCII characters and ANSI colors
- Python
  - [argparse](https://docs.python.org/3/library/argparse.html) - The module for parsing command-line arguments
  - [getopt](https://docs.python.org/3/library/getopt.html) - The C-style parser for command line options
  - [click](https://palletsprojects.com/p/click/) - A Python package for creating beautiful command line interfaces in a composable way with as little code as necessary
  - [Colorama](https://github.com/tartley/colorama) - A simple cross-platform API for printing colored terminal text from Python
  - [Typer](https://typer.tiangolo.com/) - A library for building CLI applications that users will love using and developers will love creating
  - [Asciimatics](https://github.com/peterbrittain/asciimatics) - A package that provides a cross-platform, full-screen terminal API for building text-based user interfaces
  - [Python Prompt Toolkit](https://python-prompt-toolkit.readthedocs.io/en/master/) - A library for building powerful interactive command line and terminal applications in Python
  - [Questionary](https://github.com/tmbo/questionary) - A Python library for building interactive command line prompts
  - [Urwid](https://urwid.org/) - A console user interface library for Python
  - [Textual](https://textual.textualize.io/) - A Rapid Application Development framework for Python, built by Textualize.io
    - [Rich](https://github.com/Textualize/rich) - A Python library for rich text and beautiful formatting in the terminal
- Ruby
  - [OptionParser](https://github.com/ruby/optparse) - A class for command-line option analysis
  - [colorize](https://github.com/fazibear/colorize) - A gem for colorizing text using ANSI escape sequences
  - [TTY](https://ttytoolkit.org/) - A suite of gems that provide a wide range of tools for building interactive command-line applications
  - [thor](https://github.com/rails/thor) - A toolkit for building powerful command-line interfaces
  - [dry-cli](https://dry-rb.org/gems/dry-cli/) - A general-purpose framework for developing Command Line Interface (CLI) applications that represents commands as objects and offers support for arguments, options, and forwarding variadic arguments to sub-commands
  - [Clamp](https://github.com/mdub/clamp) - A minimal framework for command-line utilities that handles parsing command-line arguments and generating help
  - [TableTennis](https://github.com/gurgeous/table_tennis) - A library for printing stylish tables in your terminal, with auto-theming, layout fitting, and numeric column coloring
- Javascript
  - [yargs](https://yargs.js.org/) - A library for building interactive command line tools by parsing arguments and generating an elegant user interface
  - [minimist](https://github.com/minimistjs/minimist) - A tool to parse argument options
  - [chalk](https://github.com/chalk/chalk) - A terminal string styling tool
  - [cli-progress](https://github.com/npkgz/cli-progress) - An easy to use progress-bar for command-line/terminal applications
  - [FIGLet.js](https://github.com/patorjk/figlet.js) - A FIG Driver written in JavaScript which aims to fully implement the FIGfont spec
  - [Ink](https://github.com/vadimdemedes/ink) - A React-based library for building CLI applications
  - [gradient-string](https://github.com/bokub/gradient-string) - A library for creating beautiful gradients in terminal output
- Go
  - [Fang](https://github.com/charmbracelet/fang) - The CLI starter kit. A small, experimental library for batteries-included Cobra applications
  - [Bubble Tea](https://github.com/charmbracelet/bubbletea) - A Go framework for building terminal apps based on The Elm Architecture
    - [Lip Gloss](https://github.com/charmbracelet/lipgloss) - A declarative library for defining styles and layouts in terminal applications
    - [Bubbles](https://github.com/charmbracelet/bubbles) - A collection of common terminal user interface components
  - [Huh](https://github.com/charmbracelet/huh) - A simple, powerful, and elegant TUI library for building terminal forms and prompts
  - [pflag](https://github.com/spf13/pflag) - A drop-in replacement for Go's flag package, implementing POSIX/GNU-style --flags
  - [color](https://github.com/fatih/color) - A package for Go that lets you use colorized outputs in terms of ANSI escape sequences
  - [Cobra](https://cobra.dev/) - A framework for creating powerful modern CLI applications
  - [urfave/cli](https://cli.urfave.org/) - A simple, fast, and fun package for building command line apps in Go
  - [viper](https://github.com/spf13/viper) - A complete configuration solution for Go applications
  - [Wish](https://github.com/charmbracelet/wish) - A tiny SSH server for your programs
  - [Wishlist](https://github.com/charmbracelet/wishlist) - An SSH directory for your private hostkeys and favorite SSH commands
  - [go-tui](https://www.go-tui.dev/) - A framework for building declarative terminal user interfaces (TUIs) in Go
  - [asciigraph](https://github.com/guptarohit/asciigraph) - A Go package to make lightweight ASCII line graphs in command line apps with no other dependencies
- Rust
  - [clap](https://github.com/clap-rs/clap) - A full featured, fast Command Line Argument Parser for Rust
  - [Ratatui](https://ratatui.rs/) - A Rust library for cooking up delicious terminal user interfaces
  - [R3BL](https://r3bl.com/) - A suite of libraries for building modern terminal apps with Rust
  - [Ansic](https://github.com/zeonzip/ansic) - A modern, efficient and compile time ansi macro and utilities crate for Rust
- C
  - [ncurses](https://invisible-island.net/ncurses/) - A programming library providing an application programming interface (API) that allows the programmer to write text-based user interfaces in a terminal-independent manner

## Desktop App Development

:::note[Relevant DSS-P Skills]

- 3\. Technology > 3\.1 Software Development > Front-end System Development

:::

### Client OS & Environments

- Windows Environment
  - Package Management & Administration
    - [Chocolatey](https://chocolatey.org) - The package manager for Windows
    - [Scoop](https://scoop.sh/) - A command-line installer for Windows
    - [WinGet](https://learn.microsoft.com/en-us/windows/package-manager/winget/) - A command line tool enabling users to discover, install, upgrade, remove and configure applications on Windows
    - [gsudo](https://gerardog.github.io/gsudo/) - A Sudo for Windows, with a similar user-experience to the original Sudo
  - Productivity & Automation
    - [AutoHotKey](https://www.autohotkey.com/) - A free, open-source scripting language for Windows that allows users to easily create small to complex scripts
    - [Clavier+](https://gryder.org/software/clavier-plus/) - Allows to trigger actions with keyboard shortcuts
    - [WinSSHTerm](https://winsshterm.blogspot.com/) - A tabbed SSH solution for Windows, combining PuTTY, WinSCP and VcXsrv
- Android on Linux
  - [Waydroid](https://waydro.id/) - A container-based approach to boot a full Android system on regular GNU/Linux systems running Wayland based desktop environments

### GUI Systems & Windowing

- Display Servers
  - [X.org](https://www.x.org/wiki/) - An open source implementation of the X Window System
  - [Wayland](https://wayland.freedesktop.org/) - A replacement for the X11 window system protocol and architecture
- Desktop Environments
  - [GNOME](https://www.gnome.org/) - An easy and elegant way to use your computer, designed to put you in control and get things done
  - [Xfce](https://www.xfce.org/) - A lightweight desktop environment for UNIX-like operating systems
- Window Managers
  - [openbox](http://openbox.org) - A highly configurable, next generation window manager

### Desktop GUI Toolkits

- Standard Toolkits
  - [Tk](http://www.tcl.tk/) - A graphical user interface toolkit
    - [tkinter](https://docs.python.org/3/library/tkinter.html) - The standard Python interface to the Tcl/Tk GUI toolkit
    - [CustomTkInter](https://customtkinter.tomschimansky.com/) - A python UI-library based on Tkinter, which provides new, modern and fully customizable widgets
  - [GTK](https://www.gtk.org/) - A free and open-source cross-platform widget toolkit for creating graphical user interfaces
    - [pygobject](https://pygobject.gnome.org/) - A set of Python bindings for the GLib, GObject, GIO and GTK object-oriented C libraries
- Compiled & Canvas-Based (Custom Rendering)
  - [Slint](https://slint.dev/) - A declarative GUI toolkit to build native user interfaces for Rust, C++, or JavaScript apps
  - [Gio](https://gioui.org/) - A library for writing cross-platform immediate mode GUI-s in Go
  - [Fyne](https://fyne.io/) - An easy to learn toolkit for creating graphical apps for desktop, mobile and web
- Web-Technology Based
  - Chromium Bundling
    - [Electron](https://www.electronjs.org/) - A framework for building desktop applications using JavaScript, HTML, and CSS
  - System WebView (Hybrid)
    - [Tauri](https://tauri.app/) - A toolkit that helps developers make applications for the major desktop platforms
    - [Wails](https://wails.io/) - A tool that enables developers to build desktop applications using Go and web technologies
    - [Microsoft Edge WebView2](https://learn.microsoft.com/en-us/microsoft-edge/webview2/) - A control that allows you to embed web technologies (HTML, CSS, and JavaScript) in your native apps by using Microsoft Edge as the rendering engine

### Desktop App Testing & Automation

- [xa11y](https://xa11y.dev/) - A Playwright-style library for driving native desktop apps on macOS, Windows, and Linux

### Installation & Packaging

- [NSIS](https://nsis.sourceforge.io/Main_Page) - A professional open source system to create Windows installers
- [Windows App CLI (winapp)](https://learn.microsoft.com/en-us/windows/apps/dev-tools/winapp-cli/) - A command-line interface for managing Windows SDKs, packaging apps with MSIX, generating app identity, manifests, and certificates for cross-platform frameworks
- [PyInstaller](https://pyinstaller.org/) - A tool that bundles a Python application and all its dependencies into a single package

## Mobile App Development

:::note[Relevant DSS-P Skills]

- 3\. Technology > 3\.1 Software Development > Front-end System Development

:::

### Mobile Platforms & Native SDKs

- [Android](https://www.android.com/) - A mobile operating system based on a modified version of the Linux kernel and other open-source software
  - [Android Studio](https://developer.android.com/studio) - The official integrated development environment for Google's Android operating system
- [iOS](https://www.apple.com/ios/) - A mobile operating system created and developed by Apple Inc. exclusively for its hardware

### Mobile Cross-Platform Frameworks

- Canvas-Based (Custom Rendering)
  - [Flutter](https://flutter.dev/) - An open-source UI software development kit created by Google
- Native Widget Brigde
  - [React Native](https://reactnative.dev) - A framework for building native apps with React
    - [Expo](https://expo.dev/) - A framework and a platform for universal React applications that run natively on Android, iOS, and the web
  - [.NET MAUI](https://learn.microsoft.com/en-us/dotnet/maui/what-is-maui) - A cross-platform framework for creating native mobile and desktop apps with C# and XAML
- Web-Technology Based
  - [Capacitor](https://capacitorjs.com/) - A cross-platform native runtime that makes it easy to build performant mobile apps, desktop apps, and Progressive Web Apps
  - [Ionic Framework](https://ionicframework.com/) - An open source UI toolkit for building performant, high-quality mobile and desktop apps using web technologies

### Mobile DevOps & Testing

- [fastlane](https://fastlane.tools/) - The easiest way to automate beta deployments and releases for your iOS and Android apps
- [Appium](https://appium.io/) - An open source test automation framework for use with native, hybrid and mobile web apps

### Application Services & Features

- Notifications
  - [Firebase Cloud Messaging](https://firebase.google.com/products/cloud-messaging/) - A cross-platform messaging solution that lets you reliably send messages at no cost
  - [Apple Push Notification service](https://developer.apple.com/notifications/) - The service for propagating push notifications from a developer's server to their apps on Apple devices
- Device Hardware/OS Integration
  - [GPS](https://en.wikipedia.org/wiki/Global_Positioning_System) - A satellite-based radionavigation system owned by the United States government and operated by the United States Space Force
  - [QR code](https://en.wikipedia.org/wiki/QR_code) - A type of matrix barcode invented in 1994 by the Japanese company Denso Wave
    - [libqrencode](https://github.com/fukuchi/libqrencode) - A fast and compact QR Code encoding library
    - [Pure python QR Code generator](https://github.com/lincolnloop/python-qrcode) - A library that provides a simple way to create QR codes in Python
    - [QR code payment](https://en.wikipedia.org/wiki/QR_code_payment) - A contactless payment method where a payment is performed by scanning a QR code from a mobile app
- Backend-as-a-Service (BaaS)
  - [Firebase](https://firebase.google.com/) - An app development platform that helps you build and grow apps and games users love
  - [Supabase](https://supabase.com/) - A Postgres development platform that provides a database, authentication, instant APIs, edge functions, real-time subscriptions, storage, and vector embeddings
  - [AWS Amplify](https://aws.amazon.com/amplify/) - A complete solution that lets frontend web and mobile developers easily build, ship, and host full-stack applications on AWS

## Internet of Things (IoT)

:::note[Relevant DSS-P Skills]

- 3\. Technology > 3\.2 Digital Technology > Physical Computing

:::

### IoT Concepts

- [Internet of things (IoT)](https://en.wikipedia.org/wiki/Internet_of_things) - The network of physical objects—'things'—that are embedded with sensors, software, and other technologies for the purpose of connecting and exchanging data with other devices and systems over the Internet
- [Edge computing](https://en.wikipedia.org/wiki/Edge_computing) - A distributed computing paradigm that brings computation and data storage closer to the sources of data
- [Machine to machine](https://en.wikipedia.org/wiki/Machine_to_machine) - The direct communication between devices using any communications channel, including wired and wireless
- [Cyber-physical system](https://en.wikipedia.org/wiki/Cyber-physical_system) - A mechanism controlled or monitored by computer-based algorithms, tightly integrated with the internet and its users
- [Digital twin](https://en.wikipedia.org/wiki/Digital_twin) - A digital model of an intended or actual real-world physical product, system, or process that serves as its digital counterpart for purposes such as simulation, testing, monitoring, and maintenance
- [Firmware](https://en.wikipedia.org/wiki/Firmware) - A specific class of computer software that provides the low-level control for a device's specific hardware
- [Over-the-air update](https://en.wikipedia.org/wiki/Over-the-air_update) - The wireless delivery of new software, firmware, or other data to mobile devices

### Communication Standards

- [Wi-Fi](https://en.wikipedia.org/wiki/Wi-Fi) - A family of wireless network protocols, based on the IEEE 802.11 family of standards, which are commonly used for local area networking of devices and Internet access
- [Bluetooth Low Energy](https://en.wikipedia.org/wiki/Bluetooth_Low_Energy) - A wireless personal area network technology designed to provide considerably reduced power consumption and cost while maintaining a similar communication range to classic Bluetooth
- [Zigbee](https://en.wikipedia.org/wiki/Zigbee) - An IEEE 802.15.4-based specification for a suite of high-level communication protocols used to create personal area networks with small, low-power digital radios
- [Near-field communication](https://en.wikipedia.org/wiki/Near-field_communication) - A set of communication protocols that enables communication between two electronic devices over a distance of 4 cm (1+1⁄2 in) or less

### IoT Hardware Platforms

- [Raspberry Pi](https://www.raspberrypi.com/) - A small, affordable computer for you to use and learn with
- [Arduino](https://www.arduino.cc/) - An easy-to-use, open-source hardware and software platform that enables innovation and creativity in electronics projects
- [ESP32](https://www.espressif.com/en/products/socs/esp32) - A feature-rich microcontroller unit with integrated Wi-Fi and Bluetooth connectivity, designed for IoT applications with ultra-low power consumption
- [ESP8266](https://www.espressif.com/en/products/socs/esp8266) - A cost-effective and highly integrated Wi-Fi MCU for IoT applications featuring a 32-bit Tensilica processor with low power consumption
- [BeagleBone](https://www.beagleboard.org/boards/beaglebone-black) - A low-cost, community-supported development platform featuring a 1GHz ARM Cortex-A8 processor that boots Linux in under 10 seconds
- [STM32](https://www.st.com/en/microcontrollers-microprocessors/stm32-32-bit-arm-cortex-mcus.html) - A family of 32-bit microcontrollers based on Arm Cortex-M processors designed to offer high performance, real-time capabilities, and low-power operation
- [Nordic nRF52](https://www.nordicsemi.com/Products/nRF52840) - A family of Bluetooth Low Energy System-on-Chips built around 64 MHz ARM Cortex-M4 processors that support multiprotocol wireless connectivity
- [Particle](https://www.particle.io/) - An integrated IoT platform-as-a-service that provides edge-to-cloud infrastructure for developing, connecting, and managing intelligent devices
- [BBC micro:bit](https://microbit.org/) - A pocket-sized programmable computer designed to inspire children to create their best digital future through hands-on coding and creative technology projects
- [Teensy](https://www.pjrc.com/teensy/) - A compact USB-based microcontroller development board compatible with Arduino software and capable of implementing many project types
- [Adafruit Feather](https://www.adafruit.com/category/943) - A family of compact, portable microcontroller boards designed as a standard for embedded projects with built-in battery connectors and modular expansion capabilities

### IoT Cloud Platforms

- [Azure IoT Hub](https://azure.microsoft.com/en-us/products/iot-hub) - A managed cloud-based service that serves as a central message hub for communication between an IoT application and its connected devices
- [AWS IoT Core](https://aws.amazon.com/iot-core/) - A managed cloud service that enables you to easily and securely connect devices to the cloud and manage device fleets at scale
- [AWS IoT Greengrass](https://aws.amazon.com/greengrass/) - An open-source edge runtime and cloud service for building, deploying, and managing device software
- [ThingWorx](https://www.ptc.com/en/products/thingworx/) - A comprehensive industrial IoT application development platform designed to help organizations connect devices, analyze data, and deliver real-time insights through customizable applications
- [Balena](https://balena.io/) - A container-based IoT device management platform that enables developers to build, deploy, manage, and scale fleets of Linux devices with secure OTA updates and remote access
- [Arduino Cloud](https://cloud.arduino.cc/) - An all-in-one IoT platform that enables users to build, control, and monitor connected projects from anywhere with dashboards and remote access
- [ThingSpeak](https://thingspeak.mathworks.com/) - An IoT analytics platform service that allows you to aggregate, visualize, and analyze live data streams in the cloud with MATLAB integration
- [Losant](https://www.losant.com/) - An enterprise IoT platform that enables organizations to build scalable connected solutions by collecting, integrating, and visualizing data from devices and systems in real-time
- [Adafruit IO](https://io.adafruit.com/) - The easiest way to get your projects onto the Internet of Things, serving as a platform for web-based microcontroller interaction and datalogging
- [ThingsBoard](https://thingsboard.io/) - An open-source IoT platform for data collection, processing, visualization, and device management that enables device connectivity via industry standard protocols
- [Ubidots](https://ubidots.com/) - A cloud-based Industrial IoT platform that enables businesses to connect, monitor, visualize, and act on sensor data in real-time through customizable dashboards and automated workflows

## Low-Code & No-Code Development

:::note[Relevant DSS-P Skills]

- 3\. Technology > 3\.1 Software Development > Service Utilization

:::

### Business Application Platforms

- [Microsoft Power Apps](https://www.microsoft.com/en-us/power-platform/products/power-apps) - A platform to rapidly and efficiently build professional-grade apps for any device
- [AppSheet](https://about.appsheet.com/home/) - The no-code platform that helps build powerful applications and automations to boost productivity
- [OutSystems](https://www.outsystems.com/) - A high-performance low-code platform that accelerates the development of critical enterprise applications

### Workflow & Integration Automation

- [n8n](https://n8n.io/) - A fair-code licensed workflow automation tool that combines AI capabilities with business process automation
- [Microsoft Power Automate](https://www.microsoft.com/en-us/power-platform/products/power-automate) - An end-to-end automation solution built for enterprise to optimize business processes
- [Zapier](https://zapier.com/) - A tool that allows you to connect your apps and automate workflows without any coding knowledge
- [Microsoft Copilot Studio](https://copilotstudio.microsoft.com/) - A graphical low-code tool for creating and maintaining copilots using generative AI and a library of prebuilt connectors and actions

### Web Content & Portal Builders

- [Microsoft Power Pages](https://www.microsoft.com/en-us/power-platform/products/power-pages) - A platform to quickly create enterprise-grade AI-driven business portals with built-in agents
- [Webflow](https://webflow.com/) - A browser-based design tool that gives you the power to build production-ready websites without coding
