# 07 - Fundamental Developer Skills

## Software Development Methods

:::note[Relevant DSS-P Skills]

- 3\. Technology > 3\.1 Software Development > Software Development Process
- 5\. Personal Skill > 5\.2 Conceptual Skill > Adaptability

:::

### Agile Development

- [Agile software development](https://en.wikipedia.org/wiki/Agile_software_development) - An umbrella term for approaches to developing software that reflect the values and principles agreed upon by The Agile Alliance
  - [Agile Manifesto](https://agilemanifesto.org/) - A document that proclaims better ways of developing software by valuing individuals and interactions over processes and tools, working software over comprehensive documentation, customer collaboration over contract negotiation, and responding to change over following a plan
  - [Software prototyping](https://en.wikipedia.org/wiki/Software_prototyping) - The activity of creating prototypes of software applications, i.e., incomplete versions of the software program being developed
  - [Minimum viable product](https://en.wikipedia.org/wiki/Minimum_viable_product) - A version of a product with just enough features to be usable by early customers who can then provide feedback for future product development
  - [User story](https://en.wikipedia.org/wiki/User_story) - An informal, natural language description of features of a software system
    - [Card, Conversation, Confirmation](https://ronjeffries.com/xprog/articles/expcardconversationconfirmation/) - A practice where the Card is a token representing the requirement, the Conversation is where details are teased out, and the Confirmation is the acceptance test for the story
  - [INVEST of PBI](https://en.wikipedia.org/wiki/INVEST_(mnemonic)) - A mnemonic created by Bill Wake as a reminder of the characteristics of a good quality Product Backlog Item (PBI)
    - Independent: The PBI should be self-contained
    - Negotiable: Draft PBIs are not explicit contracts and should leave space for discussion
    - Valuable: A PBI must deliver value to the stakeholders
    - Estimable: You must always be able to estimate the size of a PBI
    - Small: PBIs should not be so big as to become impossible to plan/task/order within a level of accuracy
    - Testable: The PBI or its related description must provide the necessary information to make test development possible
- Key Methodologies
  - [Extreme Programming](https://en.wikipedia.org/wiki/Extreme_programming) - A software development methodology which is intended to improve software quality and responsiveness to changing customer requirements
  - [Scrum](https://www.scrum.org/learning-series/what-is-scrum/) - A framework within which people can address complex adaptive problems, while productively and creatively delivering products of the highest possible value
  - [Acceptance test-driven development](https://en.wikipedia.org/wiki/Acceptance_test-driven_development) - A development methodology based on communication between the business customers, the developers, and the testers
    - [Three Amigos](https://agilealliance.org/glossary/three-amigos/) - A meeting where the product owner, developer, and quality tester come together to establish clarity on the scope of the project
  - [Behavior driven development](https://en.wikipedia.org/wiki/Behavior-driven_development) - An agile software development process that encourages collaboration among developers, quality assurance testers, and customer representatives in a software project
    - [Specification by example](https://en.wikipedia.org/wiki/Specification_by_example) - A collaborative approach to defining requirements and business-oriented functional tests for software products based on capturing and illustrating requirements using realistic examples instead of abstract statements
- Key Practices
  - [Refactoring](https://refactoring.com/) - A disciplined technique for restructuring an existing body of code, altering its internal structure without changing its external behavior
    - [Software rot](https://en.wikipedia.org/wiki/Software_rot) - The tendency for software to deteriorate in quality, performance, or usefulness over time
    - [Technical debt](https://en.wikipedia.org/wiki/Technical_debt) - A concept in software development that reflects the implied cost of additional rework caused by choosing an easy (limited) solution now instead of using a better approach that would take longer
      - [Technical Debt Ratio](https://brainhub.eu/library/technical-debt-ratio) - A metric used to measure the cost of fixing the existing technical debt in a codebase compared to the cost of developing the entire codebase from scratch
  - [Test driven development](https://en.wikipedia.org/wiki/Test-driven_development) - A software development process relying on software requirements being converted to test cases before software is fully developed, and tracking all software development by repeatedly testing the software against all test cases
- Tools for ATDD/BDD
  - [Gauge](https://gauge.org/index.html) - A free and open source test automation framework that takes the pain out of writing and maintaining acceptance tests
  - [Cucumber](https://cucumber.io/) - A tool that supports Behaviour-Driven Development (BDD) by reading executable specifications written in plain text and validating that the software does what those specifications say
    - [Gherkin Syntax](https://cucumber.io/docs/gherkin/) - A set of grammar rules that makes plain text structured enough for Cucumber to understand
    - [cucumber-ruby](https://github.com/cucumber/cucumber-ruby) - The Ruby implementation of Cucumber
  - [RSpec](https://rspec.info/) - A testing tool for the Ruby programming language, created for behavior-driven development (BDD)
  - [Behave](https://behave.readthedocs.io/en/latest/) - A tool for behavior-driven development (BDD) in Python, using tests written in a natural language style, backed up by Python code

### Lean Development

- [Lean software development](https://en.wikipedia.org/wiki/Lean_software_development) - A translation of lean manufacturing principles and practices to the software development domain
  - [Continual improvement process](https://en.wikipedia.org/wiki/Continual_improvement_process) - An ongoing effort to improve products, services, or processes
  - [OODA loop](https://en.wikipedia.org/wiki/OODA_loop) - A four-step approach to decision-making that focuses on filtering available information, putting it in context and quickly making the most appropriate decision while also understanding that changes can be made as more data becomes available
- [Lean manufacturing](https://en.wikipedia.org/wiki/Lean_manufacturing) - A production method aimed primarily at reducing times within the production system as well as response times from suppliers and to customers
  - The 7 Wastes: The activities that add no value for the customer
  - [Value-stream mapping](https://en.wikipedia.org/wiki/Value-stream_mapping) - A lean-management method for analyzing the current state and designing a future state for the series of events that take a product or service from the beginning of the specific process until it reaches the customer
- [Toyota Production System](https://en.wikipedia.org/wiki/Toyota_Production_System) - An integrated socio-technical system, developed by Toyota, that comprises its management philosophy and practices
  - [Kanban](https://en.wikipedia.org/wiki/Kanban_(development)) - A lean method to manage and improve work across human systems
  - [Kaizen](https://en.wikipedia.org/wiki/Kaizen) - A philosophy that focuses on continuous, incremental improvement of all functions and involves all employees from the CEO to the assembly line workers
  - [Autonomation](https://en.wikipedia.org/wiki/Autonomation) - The practice of designing equipment to partially automate a process and to automatically stop when a problem is detected, allowing operators to fix the issue immediately
  - [Heijunka](https://en.wikipedia.org/wiki/Heijunka) - A method for smoothing out production by leveling both the volume and the product mix
  - [Genchi Genbutsu](https://en.wikipedia.org/wiki/Genchi_Genbutsu) - A principle that suggests that to truly understand a situation, one needs to go to the "real place" where the work is done, observe the process, and verify the facts for themselves
  - [Andon (manufacturing)](https://en.wikipedia.org/wiki/Andon_(manufacturing)) - A visual management system used to indicate the status of a production line
  - [Muda (Japanese term)](https://en.wikipedia.org/wiki/Muda_(Japanese_term)) - A key concept in lean process management as one of the three types of deviation from optimal allocation of resources, meaning futility, uselessness, or wastefulness
- [Theory of Constraints](https://en.wikipedia.org/wiki/Theory_of_constraints) - A management paradigm that views any manageable system as being limited in achieving more of its goals by a very small number of constraints

### DevOps & Engineering Productivity

- Concepts
  - [CALMS framework](https://www.atlassian.com/devops/frameworks/calms-framework) - A conceptual model for approaching DevOps that stands for Culture, Automation, Lean, Measurement, and Sharing
- Cultural & Organizational Foundations
  - [Generative organizational culture](https://dora.dev/capabilities/generative-organizational-culture/) - A type of culture characterized by a high degree of trust and cooperation, a shared sense of responsibility for the mission, and a focus on learning and continuous improvement
- Technical Practices
  - [Feature Toggles](https://martinfowler.com/articles/feature-toggles.html) - A powerful technique, allowing teams to modify system behavior without changing code
  - [Blue-Green Deployment](https://martinfowler.com/bliki/BlueGreenDeployment.html) - A technique that reduces downtime and risk by running two identical production environments called Blue and Green
  - [Canary Release](https://martinfowler.com/bliki/CanaryRelease.html) - A technique to reduce the risk of introducing a new software version in production by slowly rolling out the change to a small subset of users before rolling it out to the entire infrastructure
  - [Everything as code](https://docs.aws.amazon.com/wellarchitected/latest/devops-guidance/everything-as-code.html) - A software development practice that seeks to apply the same principles of version control, testing, and deployment to enhance maintainability and scalability of all aspects of the development lifecycle, including networking infrastructure, documentation, and configuration

### Release Automation

- [semantic-release](https://semantic-release.gitbook.io/semantic-release) - A fully automated version management and package publishing tool that determines the next version number, generates release notes, and publishes the package based on formalized commit messages
- [Release Please](https://github.com/googleapis/release-please) - A tool that automates changelog generation, the creation of GitHub releases, and version bumps for your projects based on Conventional Commits
- [GoReleaser](https://goreleaser.com/) - A release automation tool for Go projects
- [Changesets](https://github.com/changesets/changesets) - A tool to manage versioning and changelogs with a focus on monorepos

### Release Conventions & Standards

- [keep a changelog](https://keepachangelog.com/) - A file which contains a curated, chronologically ordered list of notable changes for each version of a project
- [Conventional Commits](https://www.conventionalcommits.org/) - A lightweight convention on top of commit messages that provides an easy set of rules for creating an explicit commit history
- [Semantic Versioning](https://semver.org/) - A simple set of rules and requirements that dictate how version numbers are assigned and incremented
- [CalVer](https://calver.org/) - A versioning convention based on your project's release calendar, instead of arbitrary numbers

## The Open Ecosystem

:::note[Relevant DSS-P Skills]

- 3\. Technology > 3\.1 Software Development > Team Development

:::

### Open Source

- [Open Source Initiative](https://opensource.org/) - A non-profit organization dedicated to promoting and protecting open source software and communities
- Major Public Licenses
  - [MIT](https://en.wikipedia.org/wiki/MIT_License) - A permissive software license originating at the Massachusetts Institute of Technology (MIT) in the late 1980s
  - [BSD](https://en.wikipedia.org/wiki/BSD_licenses) - A family of permissive free software licenses, imposing minimal restrictions on the use and distribution of covered software
  - [Apache](https://en.wikipedia.org/wiki/Apache_License) - A permissive free software license written by the Apache Software Foundation (ASF), allowing users to use, distribute, and modify software without concern for royalties
  - [GPL](https://en.wikipedia.org/wiki/GNU_General_Public_License) - A series of widely used free software licenses, or copyleft licenses, that guarantee end users the freedom to run, study, share, and modify the software
  - [LGPL](https://en.wikipedia.org/wiki/GNU_Lesser_General_Public_License) - A free-software license published by the Free Software Foundation (FSF) that allows developers and companies to use and integrate a software component released under it into their own (even proprietary) software without being required to release the source code of their own components
  - [AGPL](https://www.gnu.org/licenses/agpl-3.0.html) - A free, copyleft license for software and other kinds of works, specifically designed to ensure that if you run a modified program on a server and let other users communicate with it there, your server must also allow them to download the source code corresponding to the modified version running there
  - [SSPL](https://www.mongodb.com/licensing/server-side-public-license) - A strong copyleft software license that mandates that any entity offering the licensed software as a service must release the complete source code of the entire service
- Principles & Adages
  - [Linus's law](https://en.wikipedia.org/wiki/Linus%27s_law) - The assertion that 'given enough eyeballs, all bugs are shallow', which is a key principle in open source development
- Source Repositories
  - [GitHub](https://github.com/) - The AI-powered developer platform to build, scale, and deliver secure software
  - [GitLab.com](https://about.gitlab.com/) - The DevSecOps Platform that empowers organizations to maximize the overall return on software development
- Package Registries
  - [CTAN](https://ctan.org/) - The Comprehensive TEX Archive Network
  - [CPAN](https://www.cpan.org/) - The Comprehensive Perl Archive Network
  - [CRAN](https://cran.r-project.org/) - The Comprehensive R Archive Network
  - [PyPI](https://pypi.org/) - A repository of software for the Python programming language
  - [RubyGems.org](https://rubygems.org/) - The Ruby community's gem hosting service
  - [npm Registry](https://www.npmjs.com/) - The world's largest software registry
  - [JSR](https://jsr.io/) - The open-source package registry for modern JavaScript and TypeScript
  - [pkg.go.dev](https://pkg.go.dev/) - Your source for information about Go packages and modules
  - [crates.io](https://crates.io/) - The Rust community's crate registry
  - [LuaRocks](https://luarocks.org/) - The package manager for Lua modules
  - [Hackage](https://hackage.haskell.org/) - The Haskell community's central package archive of open source software
    - [Stackage](https://www.stackage.org/) - A curated set of packages from Hackage
  - [NuGet Gallery](https://www.nuget.org/) - The package manager for .NET
  - [Maven Central](https://central.sonatype.com/) - The World's Largest and Oldest Component Repository
  - [ConanCenter](https://conan.io/center) - The central repository where you can find all the open source packages created by the community
  - [Anaconda Hub](https://www.anaconda.com/products) - The Hub for Data Science and AI Collaboration

### Open Data

- Tools and Licenses
  - [Creative Commons](https://creativecommons.org/) - A nonprofit organization that helps overcome legal obstacles to the sharing of knowledge and creativity to address the world's pressing challenges
  - [Open Data Commons](https://opendatacommons.org/) - The home of a set of legal tools and licenses to help you publish, provide and use open data
- Open Data Registries
  - [Hugging Face Hub](https://huggingface.co/docs/hub/index) - A platform with over 900k models, 200k datasets, and 300k demos in which people can easily collaborate in their ML workflows
  - [Data.gov](https://data.gov/) - The home of the U.S. Government's open data
  - [Kaggle](https://www.kaggle.com/) - The world's largest data science community with powerful tools and resources to help you achieve your data science goals
  - [Registry of Open Data on AWS](https://registry.opendata.aws/) - A service that makes it easy for people to find datasets that are publicly available through AWS services
  - [OpenML](https://www.openml.org/) - An open, collaborative, frictionless, and automated machine learning environment
  - [OpenStreetMap](https://www.openstreetmap.org/about) - A map of the world, created by people like you and free to use under an open license
- Data Search Engines
  - [Google Dataset search](https://datasetsearch.research.google.com/) - A search engine that enables users to find datasets stored across thousands of repositories on the Web

### Community & Governance

- Umbrella Open Source Foundations
  - [Linux Foundation](https://www.linuxfoundation.org/) - A non-profit organization that supports, protects, and standardizes Linux by providing a neutral, trusted hub for developers to code, manage, and scale open technology projects
  - [Apache Software Foundation](https://www.apache.org/) - A nonprofit corporation to support Apache software projects, including the Apache HTTP Server
  - [Eclipse Foundation](https://www.eclipse.org/) - A provider of a business-friendly environment for open source software collaboration and innovation for a global community of individuals and organizations
- Technology-Specific Foundations
  - [OpenJS Foundation](https://openjsf.org/) - The neutral home for more than 40 open source projects, including Appium, Dojo, jQuery, Node.js, and webpack
  - [Rust Foundation](https://foundation.rust-lang.org/) - An independent non-profit organization dedicated to stewarding and growing the Rust programming language and ecosystem
  - [Python Software Foundation](https://www.python.org/psf/) - The charitable organization behind the Python programming language
  - [PyTorch Foundation](https://pytorch.org/foundation) - A community-driven hub for open-source AI
- Cloud & AI
  - [Cloud Native Computing Foundation](https://www.cncf.io/) - An open source software foundation dedicated to making cloud native computing universal and sustainable
  - [Agentic AI Foundation (AAIF)](https://aaif.io/) - A neutral, open foundation to ensure this critical capability evolves transparently, collaboratively, and in ways that advance the adoption of leading open source AI projects
- Web & Data Standards
  - [World Wide Web Consortium](https://www.w3.org/) - An international community that develops open standards to ensure the long-term growth of the Web
  - [WHATWG](https://whatwg.org/) - A community of people interested in evolving HTML and related technologies
  - [The Open Group](https://www.opengroup.org/) - A global consortium that enables the achievement of business objectives through technology standards
- Ethical & Digital Rights
  - [Free Software Foundation](https://www.fsf.org/) - A nonprofit with a worldwide mission to promote computer user freedom
- Community Governance & Codes of Conduct
  - [Debian Constitution](https://www.debian.org/devel/constitution) - A document that describes the structure of organisation for decision-making in the Debian Project
  - [Ubuntu Code of Conduct](https://ubuntu.com/community/code-of-conduct) - A set of guidelines that covers behavior as a member of the Ubuntu Community
  - [Mozilla Community Participation Guidelines](https://www.mozilla.org/en-US/about/governance/policies/participation/) - A set of guidelines that outline expectations for participants within the Mozilla community
  - [Contributor Covenant](https://www.contributor-covenant.org/) - A code of conduct for contributors to free/open source software projects, created by Coraline Ada Ehmke

## Shell & Terminal

:::note[Relevant DSS-P Skills]

- 3\. Technology > 3\.1 Software Development > Computer Science
- 3\. Technology > 3\.1 Software Development > Team Development

:::

### Bash & Other Shells

- [Bash](https://www.gnu.org/software/bash/) - An sh-compatible shell that incorporates useful features from the Korn shell (ksh) and the C shell (csh)
  - [Line editing](https://www.gnu.org/software/bash/manual/html_node/Command-Line-Editing.html) - The basic features of the GNU command line editing interface
  - [History](https://www.gnu.org/software/bash/manual/html_node/Using-History-Interactively.html) - The history expansion features of Bash
  - [Shell expansions](https://www.gnu.org/software/bash/manual/html_node/Shell-Expansions.html) - The process performed on the command line after it has been split into words
  - [Pipelines](https://www.gnu.org/software/bash/manual/html_node/Pipelines.html) - A sequence of one or more commands separated by one of the control operators ‘|’ or ‘|&’
  - [Built-in commands](https://www.gnu.org/software/bash/manual/html_node/Shell-Builtin-Commands.html) - The commands that are executed within the shell process itself, without forking a new process
  - [Special variables](https://www.gnu.org/software/bash/manual/html_node/Variable-Index.html) - A list of shell variables that are set or used by the shell
  - [Built-in job control](https://www.gnu.org/software/bash/manual/html_node/Job-Control.html) - The ability to selectively stop (suspend) the execution of processes and continue (resume) their execution at a later time
- [Zsh](https://www.zsh.org/) - A shell designed for interactive use, although it is also a powerful scripting language
- [fish-shell](https://fishshell.com/) - A smart and user-friendly command line shell for Linux, macOS, and the rest of the family
- [PowerShell](https://docs.microsoft.com/en-us/powershell/) - A cross-platform task automation solution made up of a command-line shell, a scripting language, and a configuration management framework
- [nushell](https://www.nushell.sh/) - A new type of shell

### Shell Utilities

- General Shell Utilities
  - [coreutils](https://www.gnu.org/software/coreutils/) = A package of GNU software containing many of the basic tools, such as cat, ls, and rm, needed for Unix-like operating systems
  - [GNU parallel](https://www.gnu.org/software/parallel/) - A shell tool for executing jobs in parallel using one or more computers
  - [rlwrap](https://github.com/hanslub42/rlwrap) - A readline wrapper
  - [bash-completion](https://github.com/scop/bash-completion) - A collection of programmable completion functions for bash
  - [direnv](https://direnv.net/) - An extension for your shell that can load and unload environment variables depending on the current directory
  - [zoxide](https://github.com/ajeetdsouza/zoxide) - A smarter cd command
  - [Atuin](https://atuin.sh/) - A tool that replaces your existing shell history with a SQLite database, records additional context for your commands, and optionally syncs your shell history between all of your machines
  - [wttr.in](https://github.com/chubin/wttr.in) - A console-oriented weather forecast service that delivers weather information through command-line tools like curl, httpie, or wget
- Search Tools
  - [findutils](https://www.gnu.org/software/findutils/) - The basic directory searching utilities of the GNU operating system
  - [fzf](https://github.com/junegunn/fzf) - A general-purpose command-line fuzzy finder
  - [fd](https://github.com/sharkdp/fd) - A simple, fast and user-friendly alternative to find
  - [grep](https://www.gnu.org/software/grep/) - A command-line utility for searching plain-text data sets for lines that match a regular expression
  - [ripgrep](https://github.com/BurntSushi/ripgrep) - A line-oriented search tool that recursively searches the current directory for a regex pattern
  - [silversearcher-ag](https://geoff.greer.fm/ag/) - A code-searching tool similar to ack, but faster
- Shell Frameworks & Customization
  - [starship](https://starship.rs/) - The minimal, blazing-fast, and infinitely customizable prompt for any shell!
  - [oh-my-bash](https://ohmybash.nntoan.com/) - An open source, community-driven framework for managing your BASH configuration
  - [oh-my-zsh](https://ohmyz.sh/) - A delightful, open source, community-driven framework for managing your Zsh configuration
  - [Zim Framework](https://zimfw.sh/) - The Zsh configuration framework with blazing speed and modular extensions
  - [Powerlevel10k](https://github.com/romkatv/powerlevel10k) - A theme for Zsh
  - [Pure](https://github.com/sindreshorhus/pure) - A pretty, minimal and fast ZSH prompt
- Shell Tutorials
  - [LinuxCommand.com](https://www.linuxcommand.org/) - A site containing a book and other material designed to help you learn how to use the Linux command line

### Terminal Emulators

- [Terminal Emulators](https://en.wikipedia.org/wiki/Terminal_emulator) - A computer program that emulates a video terminal within some other display architecture
  - [WaveTerm](https://www.waveterm.dev/) - An open-source, cross-platform, AI-integrated terminal
  - [kitty](https://sw.kovidgoyal.net/kitty/) - The fast, feature-rich, GPU based terminal emulator
  - [Rio Terminal](https://rioterm.com/) - A modern terminal for the 21st century
  - [Alacritty](https://alacritty.org/) - A modern terminal emulator that comes with sensible defaults, but allows for extensive configuration
  - [Terminator](https://gnome-terminator.org) - A terminal emulator like xterm, gnome-terminal, konsole, etc.
  - [Windows Terminal](https://github.com/microsoft/terminal) - The new Windows Terminal and the original Windows console host
  - [Mintty](https://mintty.github.io/) - A terminal emulator for Cygwin, MSYS or Msys2, and derived projects, and for WSL
  - [xterm](https://invisible-island.net/xterm/) - A terminal emulator for the X Window System
  - [wterm](https://wterm.dev/) - A terminal emulator for the web that renders directly to the DOM using a Zig+WASM core, enabling native browser text selection, copy/paste, and accessibility
- Technologies & Protocols
  - [Pseudoterminal](https://en.wikipedia.org/wiki/Pseudoterminal) - A pair of pseudo-devices that provides a terminal-like interface used by programs to emulate a terminal
  - [ANSI escape code](https://en.wikipedia.org/wiki/ANSI_escape_code) - A standard for in-band signaling to control the cursor location, color, font styling, and other options on video text terminals
  - [kitty keyboard protocol](https://sw.kovidgoyal.net/kitty/keyboard-protocol/) - A protocol for terminals to send keyboard events to applications running in them
  - [iTerm2 image protocol](https://iterm2.com/documentation-images.html) - A custom escape code to display images inline in the terminal
- Terminal Fonts
  - [Nerd Fonts](https://www.nerdfonts.com/) - A project that patches developer targeted fonts with a high number of glyphs
  - [Share Tech Mono](https://fonts.google.com/specimen/Share+Tech+Mono) - A monospaced sans serif, based on the Share family
  - [Cascadia Code](https://github.com/microsoft/cascadia-code) - A fun, new monospaced font that includes programming ligatures

### Terminal Utilities

- Multiplexers & Session Management
  - [screen](https://www.gnu.org/software/screen/) - A full-screen window manager that multiplexes a physical terminal between several processes
  - [tmux](https://github.com/tmux/tmux/wiki) - A terminal multiplexer
  - [byobu](https://www.byobu.org/) - A GPLv3 open source text-based window manager and terminal multiplexer
  - [zellij](https://zellij.dev/) - A terminal workspace with batteries included
  - [asciinema](https://asciinema.org/) - A free and open source solution for recording terminal sessions and sharing them on the web
  - [ttyd](https://tsl0922.github.io/ttyd/) - A simple command-line tool for sharing terminal over the web
- Console File Managers
  - [midnight commander](https://midnight-commander.org/) - A visual file manager
  - [ranger](https://github.com/ranger/ranger) - A VIM-inspired filemanager for the console
  - [superfile](https://superfile.netlify.app/) - A very fancy and modern terminal file manager

### Linux or Unix-like environments on Windows

- [winpty](https://github.com/rprichard/winpty) - A Windows software package providing a Unix-like VT100 console interface for Windows console programs
- [WSL](https://learn.microsoft.com/en-us/windows/wsl/) - A feature of Windows that enables you to run a GNU/Linux environment on your Windows machine without the need for a separate virtual machine or dual booting
  - [WSLg](https://github.com/microsoft/wslg) - A project that enables support for running Linux GUI applications (X11 and Wayland) on Windows in a fully integrated desktop experience
- [Git for Windows](https://gitforwindows.org/) - A lightweight, native set of tools that bring the full feature set of the Git SCM to Windows
- [MSYS2](https://www.msys2.org/) - A collection of tools and libraries providing you with an easy-to-use environment for building, installing and running native Windows software

## Version Control System

:::note[Relevant DSS-P Skills]

- 3\. Technology > 3\.1 Software Development > Team Development

:::

- Concepts
  - [Distributed Version Control](https://en.wikipedia.org/wiki/Distributed_version_control) - A form of version control where the complete codebase, including its full history, is mirrored on every developer's computer
- Core VCS & Clients
  - [Git](https://git-scm.com/) - A free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency
    - local repository, remote repository
    - branch, tag, worktree
    - push, pull, fetch, rebase, reset, stash
    - staging, commit
  - [Jujutsu (jj)](https://www.jj-vcs.dev/latest/) - A Git-compatible VCS that is both simple and powerful
  - [gitoxide](https://github.com/GitoxideLabs/gitoxide) - An idiomatic, lean, fast & safe pure Rust implementation of Git
  - [TortoiseGit](https://tortoisegit.org/) - A Windows Shell Interface to Git and based on TortoiseSVN
  - [git lfs](https://git-lfs.com/) - An open source Git extension for versioning large files
- Terminal & UI Tools
  - [Informative git prompt for bash and fish](https://github.com/magicmonty/bash-git-prompt) - A bash prompt that displays information about the current git repository
  - [lazygit](https://github.com/jesseduffield/lazygit) - A simple terminal UI for git commands
  - [giff](https://github.com/bahdotsh/giff) - A terminal-based Git diff viewer with interactive rebase capabilities that allows you to view and manage changes between branches
  - [Git Interactive Rebase Tool](https://gitrebasetool.mitmaro.ca/) - An improved sequence editor for Git
- History & Maintenance Tools
  - [BFG Repo-Cleaner](https://rtyley.github.io/bfg-repo-cleaner/) - A simpler, faster alternative to git-filter-branch for cleansing bad data out of your Git repository history
  - [git filter-repo](https://github.com/newren/git-filter-repo) - A versatile tool for rewriting history
  - [degit](https://github.com/Rich-Harris/degit) - Straightforward project scaffolding
- Commit & Changelog Tooling
  - [Git Lint](https://alchemists.io/projects/git-lint) - A command line interface for linting Git commits by ensuring you maintain a clean, easy to read, debuggable, and maintainable project history
  - [commitlint](https://commitlint.js.org/) - A tool that helps your team adhere to a commit convention by linting commit messages
  - [git cliff](https://git-cliff.org/) - A highly customizable changelog generator
- Hook Management
  - [pre-commit](https://pre-commit.com/) - A framework for managing and maintaining multi-language pre-commit hooks
  - [Lefthook](https://lefthook.dev/) - A fast, polyglot Git hooks manager for any type of project
  - [Husky](https://typicode.github.io/husky/) - Ultra-fast modern native git hooks

### Git Hosting Services

- [GitLab SCM](https://about.gitlab.com/solutions/source-code-management/) - The single source of truth for collaborating on code and projects
  - [GitLab CLI](https://gitlab.com/gitlab-org/cli) - An open source tool that brings GitLab to your terminal, next to where you are already working with git and your code
- [Gitea](https://about.gitea.com/products/gitea/) - A painless self-hosted all-in-one software development service, including Git hosting, code review, team collaboration, package registry and CI/CD
- [Codeberg](https://codeberg.org/) - A community-led effort that provides Git hosting and other services for free and open source projects
- [Forgejo](https://forgejo.org/) - A self-hosted lightweight software forge
- [Soft Serve](https://github.com/charmbracelet/soft-serve) - A tasty, self-hostable Git server for the command line
- [Azure Repos](https://learn.microsoft.com/en-us/azure/devops/repos/) - A set of version control tools that you can use to manage your code
- [GitHub](https://github.com/) - The AI-powered developer platform to build, scale, and deliver secure software
  - [GitHub CLI](https://cli.github.com/) - An open source tool that brings pull requests, issues, GitHub Actions, and other GitHub features to your terminal, so you can do all your work in one place

### Branching Models

- [Trunk Based Development](https://trunkbaseddevelopment.com/) - A source-control branching model, where developers collaborate on code in a single branch called 'trunk', resist any pressure to create other long-lived development branches by employing documented techniques
- [GitHub Flow](https://docs.github.com/en/get-started/using-github/github-flow) - A lightweight, branch-based workflow designed for teams that deploy frequently
- [GitLab Flow](https://docs.gitlab.co.jp/ee/topics/gitlab_flow.html) - A simpler alternative to GitFlow that combines feature driven development and feature branches with issue tracking

### Code Review

- [Google Engineering Practices Documentation](https://google.github.io/eng-practices/) - A comprehensive guide to Google's code review processes and policies for both reviewers and change authors
- [Conventional Comments](https://conventionalcomments.org/) - A standard that provides a structured format for code review feedback to improve clarity, reduce misunderstandings, and make comments machine-readable
- [Danger](https://github.com/danger/danger) - A tool to automate team norms in code review

## Integrated Development Environment (IDE)

:::note[Relevant DSS-P Skills]

- 3\. Technology > 3\.1 Software Development > Team Development

:::

- GUI-based
  - [Visual Studio Code](https://code.visualstudio.com/) - A lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux
    - [Awesome VS Code](https://viatsko.github.io/awesome-vscode/) - A curated list of delightful VS Code packages and resources
    - [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) - An extension that supercharges the Git capabilities built into Visual Studio Code
    - [Git Graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph) - An extension to view a Git Graph of your repository, and perform Git actions from the graph
  - AI Assistance Plugins
    - [GitHub Copilot](https://github.com/features/copilot/) - The AI pair programmer that helps you write code faster and with less work
      - [Awesome GitHub Copilot](https://awesome-copilot.github.com/) - A community-contributed collection of agents, instructions, skills, hooks, workflows, plugins, canvas extensions, and tools to enhance the experience
    - [Gemini Code Assist](https://cloud.google.com/products/gemini/code-assist) - An AI-powered assistant for the entire development lifecycle
    - [Amazon Q Developer](https://aws.amazon.com/q/developer/) - The most capable generative AI-powered assistant for software development
    - [Cline](https://cline.bot/) - An open source AI coding agent that brings frontier AI models directly to your VS Code editor
  - AI-integrated IDEs
    - [Cursor](https://www.cursor.com/) - An AI-native fork of VS Code designed for seamless, agentic integration with proprietary and frontier models
    - [Winfsurf](https://codeium.com/windsurf) - Where the work of developers and AI truly flow together, allowing for a coding experience that feels like literal magic
    - [Zed](https://zed.dev/) - A next-generation code editor designed for high-performance collaboration with humans and AI
- Web-based
  - [code-server](https://github.com/coder/code-server) - A VS Code instance running on a remote server, accessible through any web browser
  - [GitHub Codespaces](https://github.com/features/codespaces) - A fully configured, secure cloud development environment native to GitHub that gets you up and coding faster
  - [Replit](https://replit.com/) - A platform to turn ideas into apps in minutes — no coding needed
- Terminal-based
  - [Vim](https://www.vim.org/) - A highly configurable text editor built to make creating and changing any kind of text very efficient
    - [motion and operators](https://vimdoc.sourceforge.net/htmldoc/motion.html) - The commands that move the cursor and the commands used to delete or change text
    - [vim-plug](https://junegunn.github.io/vim-plug/) - The de-facto standard plugin manager for Vim
    - [NERDTree](https://github.com/preservim/nerdtree) - A tree explorer plugin for vim
  - [Neovim](https://neovim.io/) - Hyperextensible Vim-based text editor
    - [LazyVim](https://www.lazyvim.org/) - A Neovim setup powered by 💤 lazy.nvim to make it easy to customize and extend your config
      - [lazy.nvim](https://lazy.folke.io/) - A modern plugin manager for Neovim
    - [NvChad](https://nvchad.com/) - A blazing fast Neovim config providing solid defaults and a beautiful UI
    - [neo-tree.nvim](https://github.com/nvim-neo-tree/neo-tree.nvim) - A Neovim plugin to manage the file system and other tree like structures
    - [colorful-winsep.nvim](https://github.com/nvim-zh/colorful-winsep.nvim) - A colorful window separator for Neovim
    - [mason.nvim](https://github.com/williamboman/mason.nvim) - A Neovim plugin that allows you to easily manage external editor tooling such as LSP servers, DAP servers, linters, and formatters through a single interface
    - [telescope.nvim](https://github.com/nvim-telescope/telescope.nvim) - A highly extendable fuzzy finder over lists
    - [flash.nvim](https://github.com/folke/flash.nvim) - A plugin that helps you navigate your code with search labels, enhanced character motions and Treesitter integration
    - [nvim-llama](https://github.com/jpmcb/nvim-llama) - A simple interface to Ollama for Neovim
  - [Helix](https://helix-editor.com/) - A modal editor, meaning it has different modes for different tasks
  - [GNU Emacs](https://www.gnu.org/software/emacs/) - An extensible, customizable, free/libre text editor — and more
    - [MELPA](https://melpa.org/#/) - Milkypostman's Emacs Lisp Package Archive
    - [doomemacs](https://github.com/doomemacs/doomemacs) - An Emacs framework for the stubborn martian hacker
    - [neotree](https://github.com/jaypei/emacs-neotree) - A tree explorer for Emacs
    - [Treemacs](https://github.com/Alexander-Miller/treemacs) - A tree layout file explorer for Emacs
    - [Spacemacs](https://www.spacemacs.org/#) - A community-driven Emacs distribution
  - Tutorials and Cheet Sheets
    - [OpenVim](https://openvim.com/) - An interactive Vim tutorial
    - [Vim Adventures](https://vim-adventures.com/) - An online game based on VIM's keyboard shortcuts
    - [Vim Cheet Sheet](https://vim.rtorr.com/) - A quick reference guide for Vim commands

### Language Servers

- [LSP](https://microsoft.github.io/language-server-protocol/) - The protocol used between an editor or IDE and a language server that provides language features like auto complete, go to definition, find all references etc.
- [pyright](https://github.com/microsoft/pyright) - A static type checker and language server for Python
  - [Pylance](https://marketplace.visualstudio.com/items?itemName=ms-python.vscode-pylance) - An extension that works alongside the Python extension in Visual Studio Code to provide performant language support
- [Ruby LSP](https://shopify.github.io/ruby-lsp/) - An opinionated language server for Ruby
- [TypeScript Language Server](https://github.com/typescript-language-server/typescript-language-server) - A standalone TypeScript and JavaScript language server
- [Gopls](https://go.dev/gopls/) - The official language server for the Go language
- [rust-analyzer](https://rust-analyzer.github.io/) - A language server for the Rust programming language
- [Eclipse JDT Language Server](https://github.com/eclipse-jdtls/eclipse.jdt.ls) - A Java language server based on the Eclipse JDT

## Code Quality & Refactoring

:::note[Relevant DSS-P Skills]

- 3\. Technology > 3\.1 Software Development > Team Development

:::

- Concepts
  - [SQALE method](https://en.wikipedia.org/wiki/SQALE) - A method to support the evaluation of the quality of a software source code
  - [Cyclomatic complexity](https://en.wikipedia.org/wiki/Cyclomatic_complexity) - A software metric used to indicate the complexity of a program
- Code Metrics Tools
  - [scc](https://github.com/boyter/scc/) - A tool that counts lines of code in many programming languages
  - [cloc](https://github.com/AlDanial/cloc) - A tool that counts blank lines, comment lines, and physical lines of source code in many programming languages

### Analysis Platform

- [SonarQube Server](https://www.sonarsource.com/products/sonarqube/) - An on-premise analysis tool designed to detect coding issues in 30+ languages, frameworks, and IaC platform
- [GitLab Code Coverage](https://docs.gitlab.com/ee/ci/testing/code_coverage.html) - A report that shows the percentage of your code that is covered by tests
- [GitLab Code Quality](https://docs.gitlab.com/ee/ci/testing/code_quality.html) - A feature that uses CodeClimate Engines to provide code quality analysis for your projects

### Formatters

- [EditorConfig](https://editorconfig.org/) - A file format for defining coding styles and a collection of text editor plugins that enable editors to read the file format and adhere to defined styles
- [Prettier](https://prettier.io/) - An opinionated code formatter
- [Ruff](https://docs.astral.sh/ruff/) - An extremely fast Python linter and code formatter, written in Rust
- [Biome](https://biomejs.dev/) - A toolchain of the web that provides a fast formatter and performant linter for JavaScript, TypeScript, JSX, JSON, HTML, CSS, and GraphQL

### Linters

- [ESLint](https://eslint.org/) - An open source project that helps you find and fix problems with your JavaScript code
- [JSHint](https://jshint.com/about/) - A Static Code Analysis Tool for JavaScript
- [Biome](https://biomejs.dev/) - A toolchain of the web that provides a fast formatter and performant linter for JavaScript, TypeScript, JSX, JSON, HTML, CSS, and GraphQL
- [Pylint](https://pylint.readthedocs.io/) - A static code analyser for Python 2 or 3
- [Ruff](https://docs.astral.sh/ruff/) - An extremely fast Python linter and code formatter, written in Rust
- [Staticcheck](https://staticcheck.dev/) - A state of the art linter for the Go programming language
- [revive](https://revive.run/) - Fast & extensible static code analysis framework for Go
- [golangci-lint](https://golangci-lint.run/) - A fast linters runner for Go
- [RuboCop](https://github.com/rubocop/rubocop) - A Ruby static code analyzer (a.k.a linter) and code formatter
- [Rust Clippy](https://doc.rust-lang.org/clippy/) - A collection of lints to catch common mistakes and improve your Rust code
- [PSScriptAnalyzer](https://github.com/PowerShell/PSScriptAnalyzer) - A static code checker for PowerShell modules and scripts
- [ShellCheck](https://www.shellcheck.net/) - A GPLv3 tool that gives warnings and suggestions for bash/sh shell scripts
- [Stylelint](https://stylelint.io/) - A mighty CSS linter that helps you avoid errors and enforce conventions
- [vacuum](https://quobix.com/vacuum/) - An ultra-super-fast, lightweight OpenAPI linter and quality checking tool
- [yamllint](https://github.com/adrienverge/yamllint) - A linter for YAML files
- [ls-lint](https://ls-lint.org/) - An extremely fast file and directory name linter

### Coding style guides

- [Google Style Guides](https://google.github.io/styleguide/) - A collection of documents that provide a set of conventions for writing source code in various programming languages
- [Style Guide for Python](https://peps.python.org/pep-0008/) - A document that gives coding conventions for the Python code comprising the standard library in the main Python distribution
- [Ruby Style Guide](https://rubystyle.guide/) - A community-driven style guide for the Ruby programming language

## Developer AI & Productivity

:::note[Relevant DSS-P Skills]

- 3\. Technology > 3\.1 Software Development > Team Development

:::

### AI Productivity Tools

- [Mods](https://github.com/charmbracelet/mods) - A simple tool that helps you write programs with the assistance of AI
- [gptcli](https://github.com/evilpan/gptcli) - A command-line interface for ChatGPT
- [ShellGPT](https://github.com/TheR1D/shell_gpt) - A command-line productivity tool powered by AI large language models (LLM)
- [OpenCommit](https://github.com/di-sukharev/opencommit) - Auto-generate meaningful commits in a second
- [AI Commits](https://github.com/Nutlope/aicommits) - A CLI that writes your git commit messages for you with AI
- [lootbox](https://github.com/jx-codes/lootbox) - A CLI which is inspired by "Code Mode" - LLMs write TypeScript code to call APIs rather than using tool invocation

### Development Agents

- CLI Coding Agents
  - [Claude Code](https://code.claude.com/docs) - An agentic coding tool that reads your codebase, edits files, runs commands, and integrates with development tools
    - [Plan Mode](https://code.claude.com/docs/en/common-workflows#use-plan-mode-for-safe-code-analysis) - A mode that instructs Claude to create a plan by analyzing the codebase with read-only operations, perfect for exploring codebases, planning complex changes, or reviewing code safely
    - [Hooks](https://code.claude.com/docs/en/hooks) - The user-defined shell commands or LLM prompts that execute automatically at specific points in the agent's lifecycle
    - [Subagents](https://code.claude.com/docs/en/sub-agents) - The specialized AI assistants that handle specific types of tasks, running in their own context with custom prompts and tool access
    - [Sandboxing](https://code.claude.com/docs/en/sandboxing) - A feature that provides filesystem and network isolation for safer, more autonomous agent execution, using OS-level primitives to enforce these isolations and reduce constant permission prompts
    - [Auto-memory](https://code.claude.com/docs/en/memory#auto-memory) - A feature that allows the agent to automatically accumulate knowledge across sessions by saving notes on build commands, debugging insights, architecture notes, and user preferences without manual intervention
  - [Gemini CLI](https://github.com/google-gemini/gemini-cli) - An open-source AI agent that brings the power of Gemini directly into your terminal
    - [Conductor](https://github.com/gemini-cli-extensions/conductor) - The official project management tool for Gemini CLI
    - [Sandboxing](https://geminicli.com/docs/cli/sandbox/) - A feature that isolates potentially dangerous operations from your host system, providing a security barrier between AI operations and your environment, using macOS Seatbelt or container-based methods for isolation
  - [Antigravity CLI](https://github.com/google-antigravity/antigravity-cli) - A terminal-based AI coding agent that understands codebases, makes edits with permission, and executes commands directly from the terminal
  - [Aider](https://aider.chat/) - An AI pair programming tool in your terminal that lets you start a new project or build on your existing codebase
  - [Letta Code](https://docs.letta.com/letta-code) - A memory-first coding agent that lives in your terminal
  - [Deep Agents CLI](https://docs.langchain.com/oss/python/deepagents/cli/overview) - A terminal coding agent built on the Deep Agents SDK
  - [OpenCode.ai](https://opencode.ai/) - An open-source AI coding agent for the terminal that provides an interactive TUI to help you understand, edit, and ship code within real repositories
  - [OpenAI Codex](https://github.com/openai/codex) - A lightweight coding agent that runs in your terminal, providing a local coding assistant
  - [Kimi Code](https://www.kimi.com/code) - A CLI coding agent by Moonshot AI engineered to drop into any dev workflow, supporting codebase analysis, file operations, web search, and parallel sub-agent task handling, powered by the kimi-k2.6 model
  - [Crush](https://github.com/charmbracelet/crush) - The glamourous AI coding agent for your favourite terminal 💘
  - [ForgeCode](https://forgecode.dev/) - A ZSH-integrated coding harness with a multi-agent architecture for research, planning, and execution, supporting multiple LLM providers and ranking at the top of Terminal-Bench
- Desktop Coding Agents
  - [goose](https://block.github.io/goose/) - A local AI agent that automates engineering tasks seamlessly
  - [Open Interpreter](https://www.openinterpreter.com/) - An open-source desktop agent that lets you work alongside agents that can read, edit, and create documents on your computer
  - [Agent Zero](https://www.agent-zero.ai/) - An open-source personal AI agent that uses a dynamic toolset to solve complex tasks by writing and executing code, managing its own computer environment, and learning from its actions
  - [AionUI](https://github.com/iOfficeAI/AionUi) - A Cowork app for AI coding agents with document generation capabilities
- Autonomous Coding Agents
  - [SWE-agent](https://swe-agent.com/latest/) - A tool for fixing bugs and issues in GitHub repositories, powered by a family of language models
  - [mini-swe-agent](https://mini-swe-agent.com/latest/) - A smaller, more accessible version of SWE-agent
  - [Devin](https://devin.ai/) - An autonomous AI software engineer that can handle complex engineering tasks unassisted within its own sandboxed environment
  - [Jules](https://jules.google/) - An Autonomous Coding Agent
  - [Replit Agent](https://replit.com/products/agent) - The first developer agent that can learn and work alongside you in your IDE

### Supporting Tools & Infrastructure

- Platforms
  - [OpenHands](https://docs.all-hands.dev/) - A platform for software development agents powered by AI
  - [Port](https://www.getport.io/) - An agentic developer portal to build autonomous workflows to accelerate every aspect of engineering
  - [Antigravity](https://antigravity.google/) - An agentic development platform
- Agent Orchestration
  - [TAKT (TAKT Agent Koordination Topology)](https://github.com/nrslib/takt) - An open-source framework designed to orchestrate and manage AI coding agents using structured, YAML-defined workflows
  - [KIRA](https://github.com/krafton-ai/KIRA) - An agent framework for terminal-based AI tasks that leverages native tool calling, multimodal input, and marker-based completion verification to achieve state-of-the-art performance on Terminal-Bench
  - [Ultralight](https://burkeholland.github.io/ultralight/) - A multi-agent orchestration framework for VS Code that researches your codebase, builds a phased plan, and delegates work to specialist subagents
- Benchmarks
  - [SWE-bench](https://www.swebench.com/SWE-bench/) - A benchmark for evaluating large language models on real world software issues collected from GitHub
  - [Terminal-Bench](https://www.tbench.ai/) - A collection of harbor-native benchmark tasks for quantifying AI agents' terminal mastery, covering software engineering, machine learning, security, and data science
- Context Providers
  - [Context7](https://context7.com/) - An AI agent and tool designed to provide up-to-date documentation for LLMs and AI code editors
  - [LeanCTX](https://leanctx.com/) - An open-source context compression tool that reduces AI coding assistant token usage by compressing file reads and shell output by up to 99%, working with 29+ AI tools like Cursor and Claude Code
  - [Context Mode](https://github.com/mksglu/context-mode) - Context window optimization for AI coding agents. Sandboxes tool output, 98% reduction
- Semantic Code Retrieval
  - [Serena](https://github.com/oraios/serena) - A powerful coding agent toolkit providing semantic retrieval and editing capabilities
- Session Tracking
  - [Entire](https://entire.io/) - A CLI tool that hooks into your git workflow to capture AI agent sessions on every push, creating a searchable record of how code was written and the intent behind every commit
