# 08 - OS & Network Basics

## Core OS Concepts

:::note[Relevant DSS-P Skills]

- 3\. Technology > 3\.1 Software Development > Cloud Infrastructure Utilization

:::

- [System call](https://en.wikipedia.org/wiki/System_call) - The programmatic way in which a computer program requests a service from the kernel of the operating system on which it is executed
- [Protection ring](https://en.wikipedia.org/wiki/Protection_ring) - A mechanism to protect data and functionality from faults and malicious behavior
- [Daemon](https://en.wikipedia.org/wiki/Daemon_(computing)) - A computer program that runs as a background process, rather than being under the direct control of an interactive user
- [Environment variable](https://en.wikipedia.org/wiki/Environment_variable) - A named variable whose value is set outside the program, typically through functionality built into the operating system or a microservice
- [POSIX standard](https://en.wikipedia.org/wiki/POSIX) - A family of standards specified by the IEEE Computer Society for maintaining compatibility between operating systems

### Process Management

- [Process](https://en.wikipedia.org/wiki/Process_(computing)) - The instance of a computer program that is being executed by one or more threads
  - [Thread](https://en.wikipedia.org/wiki/Thread_(computing)) - The smallest sequence of programmed instructions that can be managed independently by a scheduler
  - [Scheduling](https://en.wikipedia.org/wiki/Scheduling_(computing)) - The action of assigning resources to perform tasks
  - [Context switch](https://en.wikipedia.org/wiki/Context_switch) - The process of storing the state of a process or thread, so that it can be restored and resume execution at a later point
  - [Interrupt](https://en.wikipedia.org/wiki/Interrupt) - A request for the processor to interrupt currently executing code, so that the event can be processed in a timely manner

### Inter-Process Communication (IPC)

- Pipes
  - [Anonymous pipe](https://en.wikipedia.org/wiki/Anonymous_pipe) - A simplex FIFO communication channel that may be used for one-way interprocess communication
  - [Named pipe](https://en.wikipedia.org/wiki/Named_pipe) - An extension to the traditional pipe concept on Unix and Unix-like systems, and is one of the methods of inter-process communication
- [Shared memory](https://en.wikipedia.org/wiki/Shared_memory) - A memory that may be simultaneously accessed by multiple programs with an intent to provide communication among them or avoid redundant copies
- [Signal](https://en.wikipedia.org/wiki/Signal_(IPC)) - An asynchronous notification sent to a process or to a specific thread within the same process in order to notify it of an event that occurred
- [Unix domain socket](https://en.wikipedia.org/wiki/Unix_domain_socket) - A data communications endpoint for exchanging data between processes executing on the same host operating system

### Memory Management

- [Virtual memory](https://en.wikipedia.org/wiki/Virtual_memory) - A memory management technique that provides an idealized abstraction of the storage resources that are actually available on a given machine
  - [Memory paging](https://en.wikipedia.org/wiki/Memory_paging) - A memory management scheme by which a computer stores and retrieves data from secondary storage for use in main memory
  - [Page fault](https://en.wikipedia.org/wiki/Page_fault) - A type of exception raised by computer hardware when a running program accesses a memory page that is not currently mapped by the memory management unit into the virtual address space of a process
  - [Resident set size (RSS)](https://en.wikipedia.org/wiki/Resident_set_size) - The portion of memory occupied by a process that is held in main memory
  - [Working set size (WSS)](https://en.wikipedia.org/wiki/Working_set_size) - The set of pages in the virtual address space of the process that are currently resident in main memory
- [Page cache](https://en.wikipedia.org/wiki/Cache_(computing)) - A hardware or software component that stores data so that future requests for that data can be served faster

### Storage Management

- [Disk partitioning](https://en.wikipedia.org/wiki/Disk_partitioning) - The creation of one or more regions on a secondary storage device, so that each region can be managed separately
- [Loop device](https://en.wikipedia.org/wiki/Loop_device) - A pseudo-device that makes a file accessible as a block device
- [File system](https://en.wikipedia.org/wiki/File_system) - A method and data structure that the operating system uses to control how data is stored and retrieved
  - [Journaling file system](https://en.wikipedia.org/wiki/Journaling_file_system) - A file system that keeps a journal, a circular log of changes that have not yet been committed to the main part of the file system
  - [Path](https://en.wikipedia.org/wiki/Path_(computing)) - The general form of the name of a file or directory, specifies a unique location in a file system
  - [Glob pattern](https://en.wikipedia.org/wiki/Glob_(programming)) - A pattern that specifies sets of filenames with wildcard characters
  - [File handle/descriptor](https://en.wikipedia.org/wiki/File_descriptor) - A unique identifier for a file or other input/output resource, such as a pipe or network socket
  - [Symbolic link](https://en.wikipedia.org/wiki/Symbolic_link) - A term for any file that contains a reference to another file or directory in the form of an absolute or relative path and that affects pathname resolution
  - [Permissions](https://en.wikipedia.org/wiki/File-system_permissions) - A feature of many modern file systems which control the ability of the users of a computer to view, change, navigate, and execute the contents of the file system
    - [Setuid](https://en.wikipedia.org/wiki/Setuid) - A Unix access rights flag that allows users to run an executable with the permissions of the executable's owner or group
    - [Sticky bit](https://en.wikipedia.org/wiki/Sticky_bit) - A user ownership access right flag that can be assigned to files and directories on Unix-like systems
  - [Inode](https://en.wikipedia.org/wiki/Inode) - A data structure in a Unix-style file system that describes a file-system object such as a file or a directory
- [RAID](https://en.wikipedia.org/wiki/RAID) - A data storage virtualization technology that combines multiple physical disk drive components into one or more logical units for the purposes of data redundancy, performance improvement, or both

## Base Network Concepts & Protocols

:::note[Relevant DSS-P Skills]

- 3\. Technology > 3\.1 Software Development > Cloud Infrastructure Utilization

:::

- [The OSI Model](https://en.wikipedia.org/wiki/OSI_model) - A conceptual model that provides a common basis for the coordination of standards development for the purpose of systems interconnection

### Link Layer (L2)

- [Ethernet](https://en.wikipedia.org/wiki/Ethernet) - A family of wired computer networking technologies
  - [ARP](https://en.wikipedia.org/wiki/Address_Resolution_Protocol) - A communication protocol used for discovering the link layer address, such as a MAC address, associated with a given internet layer address
    - [MAC address](https://en.wikipedia.org/wiki/MAC_address) - A unique identifier assigned to a network interface controller for use as a network address in communications within a network segment
  - [VLAN](https://en.wikipedia.org/wiki/VLAN) - A broadcast domain that is partitioned and isolated in a computer network at the data link layer

### Internet Layer (L3)

- [The Internet](https://en.wikipedia.org/wiki/Internet) - The global system of interconnected computer networks that uses the Internet protocol suite to communicate between networks and devices
- [IP](https://en.wikipedia.org/wiki/Internet_Protocol) - The network layer communications protocol in the Internet protocol suite
  - [Link-local address](https://en.wikipedia.org/wiki/Link-local_address) - A network address that is valid only for communications within the network segment or the broadcast domain that the host is connected to
  - [IP-multicast](https://en.wikipedia.org/wiki/IP_multicast) - A method of sending Internet Protocol datagrams to a group of interested receivers in a single transmission
  - [IPv6](https://en.wikipedia.org/wiki/IPv6) - The most recent version of the Internet Protocol, the communications protocol that provides an identification and location system for computers on networks and routes traffic across the Internet
    - [Unique local address](https://en.wikipedia.org/wiki/Unique_local_address) - An IPv6 address in the address block fc00::/7
  - [ICMP](https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol) - A supporting protocol in the Internet protocol suite
  - [ICMPv6](https://en.wikipedia.org/wiki/ICMPv6) - The implementation of the Internet Control Message Protocol for Internet Protocol version 6
  - [DHCP](https://en.wikipedia.org/wiki/Dynamic_Host_Configuration_Protocol) - A network management protocol used on Internet Protocol networks for automatically assigning IP addresses and other communication parameters to devices connected to the network
  - [DHCPv6](https://en.wikipedia.org/wiki/DHCPv6) - A network protocol for configuring Internet Protocol version 6 hosts with IP addresses, IP prefixes and other configuration data required to operate in an IPv6 network
  - [NAT](https://en.wikipedia.org/wiki/Network_address_translation) - A method of mapping an IP address space into another by modifying network address information in the IP header of packets while they are in transit across a traffic routing device
  - [NAT64](https://en.wikipedia.org/wiki/NAT64) - An IPv6 transition mechanism that facilitates communication between IPv6 and IPv4 hosts
  - [NDP](https://en.wikipedia.org/wiki/Neighbor_Discovery_Protocol) - A protocol in the Internet protocol suite used with Internet Protocol Version 6
- Routing
  - [Routing table](https://en.wikipedia.org/wiki/Routing_table) - A data table stored in a router or a network host that lists the routes to particular network destinations
  - [CIDR](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) - A method for allocating IP addresses and for IP routing

### Transport Layer (L4)

- [Network socket](https://en.wikipedia.org/wiki/Network_socket) - A software structure within a network node of a computer network that serves as an endpoint for sending and receiving data across the network
- [TCP](https://en.wikipedia.org/wiki/Transmission_Control_Protocol) - A main protocol of the Internet protocol suite
  - [TCP window scale option](https://en.wikipedia.org/wiki/TCP_window_scale_option) - An option to increase the receive window size allowed in Transmission Control Protocol above its former maximum value of 65,535 bytes
- [UDP](https://en.wikipedia.org/wiki/User_Datagram_Protocol) - A core member of the Internet protocol suite
- [QUIC](https://quicwg.org/) - A UDP-based, stream-multiplexing, encrypted transport protocol

### Network Architectures

- [Peer-to-peer](https://en.wikipedia.org/wiki/Peer-to-peer) - A distributed computing or networking architecture in which participants share resources directly without reliance on a centralized administrative system

## Domain Name System (DNS)

:::note[Relevant DSS-P Skills]

- 3\. Technology > 3\.1 Software Development > Cloud Infrastructure Utilization

:::

- [DNS](https://en.wikipedia.org/wiki/Domain_Name_System) - The hierarchical and decentralized naming system used to identify computers, services, and other resources reachable through the Internet or other Internet Protocol networks
- [mDNS](https://en.wikipedia.org/wiki/Multicast_DNS) - A protocol that resolves hostnames to IP addresses within small networks that do not include a local name server

### Domain Registration & Lookup

- [IANA WHOIS Service](https://www.iana.org/whois) - A service to look up the registration data of a domain name or IP address
- [Registration Data Access Protocol (RDAP)](https://en.wikipedia.org/wiki/Registration_Data_Access_Protocol) - A computer network communications protocol that delivers registration data from Domain Name Registries and Regional Internet Registries
- [Domain drop catching](https://en.wikipedia.org/wiki/Domain_drop_catching) - The practice of registering a domain name once registration has lapsed, immediately after expiry

### Server & Resolver Implementations

- [BIND (dnsutils)](https://www.isc.org/bind/) - A very flexible, full-featured DNS system
- [dnsmasq](https://thekelleys.org.uk/dnsmasq/doc.html) - A lightweight, easy to configure DNS forwarder, DHCP and router advertisement server
- [CoreDNS](https://coredns.io/) - A DNS server that chains plugins
- [systemd-resolved](https://man7.org/linux/man-pages/man8/systemd-resolved.service.8.html) - A system service that provides network name resolution to local applications
- mDNS Implementations
  - [Avahi](https://www.avahi.org/) - A system which facilitates service discovery on a local network via the mDNS/DNS-SD protocol suite
  - [Bonjour](https://developer.apple.com/bonjour/) - Apple's implementation of zero-configuration networking

### Client Tools

- Part of BIND
  - [dig](https://linux.die.net/man/1/dig) - A flexible tool for interrogating DNS name servers
  - [nslookup](https://linux.die.net/man/1/nslookup) - A program to query Internet domain name servers
- [dog](https://github.com/ogham/dog) - A command-line DNS client
- [Doggo](https://doggo.mrkaran.dev/docs/) - A modern command-line DNS client (like dig) written in Go

- Managed DNS Services
  - [Amazon Route53](https://aws.amazon.com/route53/) - A highly available and scalable cloud Domain Name System web service
  - [Google Cloud DNS](https://cloud.google.com/dns/) - A high-performance, resilient, global Domain Name System service that publishes your domain names to the global DNS in a cost-effective way

## Email System

:::note[Relevant DSS-P Skills]

- 3\. Technology > 3\.1 Software Development > Cloud Infrastructure Utilization

:::

- [Email](https://en.wikipedia.org/wiki/Email) - A method of exchanging messages between people using electronic devices
- [SMTP](https://en.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol) - A communication protocol for electronic mail transmission
- [POP](https://en.wikipedia.org/wiki/Post_Office_Protocol) - An application-layer Internet standard protocol used by e-mail clients to retrieve e-mail from a mail server
- [IMAP](https://en.wikipedia.org/wiki/Internet_Message_Access_Protocol) - An Internet standard protocol used by email clients to retrieve email messages from a mail server over a TCP/IP connection
- [MIME](https://en.wikipedia.org/wiki/MIME) - A standard that extends the format of email messages to support text in character sets other than ASCII
  - [Quoted-printable encoding](https://en.wikipedia.org/wiki/Quoted-printable) - An encoding that represents data in the 8-bit ASCII character set, so that it can be sent using a 7-bit data path
  - [Base64](https://en.wikipedia.org/wiki/Base64) - A group of binary-to-text encoding schemes that represent binary data in an ASCII string format by translating it into a radix-64 representation

### Mailbox Formats

- Unix Mbox
- Maildir

### Server Software (MTA/MDA)

- [Postfix](https://www.postfix.org/) - A mail server that started life at IBM research as an alternative to the widely-used Sendmail program
- [Maddy Mail Server](https://github.com/foxcpp/maddy) - An all-in-one mail server that implements all functionality required to run a mail service
- Testing Servers
  - [Mailpit](https://mailpit.axllent.org/) - A small, fast, low memory, zero-dependency, multi-platform email testing tool & API for developers
- IMAP
  - [Cyrus IMAP](https://www.cyrusimap.org/) - A highly scalable enterprise mail system designed for use in small to large enterprise environments
  - [Dovecot](https://www.dovecot.org/) - An open source IMAP and POP3 email server for Linux/UNIX-like systems

### Client Software & Utilities

- TUI Clients & Utilities
  - [mailutils](https://mailutils.org/) - A set of libraries and utilities for handling electronic mail
    - [mail command](https://mailutils.org/manual/html_section/mail.html) - A command to send and receive mail
  - [Himalaya](https://github.com/pimalaya/himalaya) - A CLI application for email management, built in Rust, that allows users to interact with emails through shell commands, with support for IMAP, Maildir, SMTP, OAuth 2.0, and PGP encryption
  - [Mutt](http://www.mutt.org/) - A small but very powerful text based program for reading and sending electronic mail under unix operating systems
  - [swaks](http://www.jetmore.org/john/code/swaks/) - A featureful, flexible, scriptable, transaction-oriented SMTP test tool
  - [msmtp](https://marlam.de/msmtp/) - An SMTP client that transmits mail to an SMTP server for delivery, designed to be configured as a sendmail replacement for mail clients
  - [Pop](https://github.com/charmbracelet/pop) - A library for sending emails from your terminal
  - [GNU sharutils](https://www.gnu.org/software/sharutils/) - A set of utilities for creating and unpacking shell archives
- Libraries
  - [go-mail](https://github.com/wneessen/go-mail/wiki) - A simple to use, yet feature rich mail library for Go
- GUI Clients
  - [Thunderbird](https://www.thunderbird.net/en-US/) - A free email application that’s easy to set up and customize
  - [Sylpheed](https://sylpheed.sraoss.jp/en/) - A simple, lightweight but featureful, and easy-to-use e-mail client

### Spam Test and Reputation

- [mail-tester](https://www.mail-tester.com/) - A free online service that allows you to test your emails for Spam, Malformed Content and Mail Server Configuration problems
- [Spamhaus Project](https://www.spamhaus.org/) - A non-profit organization that tracks spam and related cyber threats

- Cloud Services
  - [Amazon SES](https://aws.amazon.com/ses/) - A cost-effective, flexible, and scalable email service that enables developers to send mail from within any application
  - [SendGrid](https://sendgrid.com/) - A cloud-based email delivery platform that provides reliable transactional and marketing email delivery at scale

## Unix-like Operating Systems

:::note[Relevant DSS-P Skills]

- 3\. Technology > 3\.1 Software Development > Cloud Infrastructure Utilization

:::

- [The Linux Kernel](https://www.kernel.org/) - The main component of a Linux operating system and is the core interface between a computer's hardware and its processes
  - Threads
    - [Pthreads](https://en.wikipedia.org/wiki/Pthreads) - An execution model that exists independently from a programming language, as well as a parallel execution model
  - Filesystems
    - [Ext4](https://en.wikipedia.org/wiki/Ext4) - The default file system for many major Linux distributions
    - [XFS](https://en.wikipedia.org/wiki/XFS) - A high-performance journaling file system created by Silicon Graphics, Inc
    - [Btrfs](https://en.wikipedia.org/wiki/Btrfs) - A copy-on-write filesystem for Linux with advanced features including snapshots, RAID, and self-healing
    - [UnionFS](https://en.wikipedia.org/wiki/UnionFS) - A filesystem service for Linux, FreeBSD and NetBSD which implements a union mount for other file systems
    - [OverlayFS](https://en.wikipedia.org/wiki/OverlayFS) - A union mount filesystem implementation for Linux
    - [proc.5](https://man7.org/linux/man-pages/man5/proc.5.html) - A virtual filesystem that provides an interface to kernel data structures
    - [sysfs.5](https://man7.org/linux/man-pages/man5/sysfs.5.html) - A virtual filesystem that exports information about various kernel subsystems, hardware devices, and associated device drivers
  - Container Support
    - [cgroups](https://man7.org/linux/man-pages/man7/cgroups.7.html) - A Linux kernel feature which allow processes to be organized into hierarchical groups whose usage of various types of resources can then be limited and monitored
    - [namespaces](https://man7.org/linux/man-pages/man7/namespaces.7.html) - A wrapper for a global system resource in an abstraction that makes it appear to the processes within the namespace that they have their own isolated instance of the global resource
    - [lxc/rootfs](https://man7.org/linux/man-pages/man7/lxc.7.html) - The userspace interface for the Linux kernel containment features
    - [nsenter](https://www.man7.org/linux/man-pages/man1/nsenter.1.html) - A command that executes a program in the namespaces of other processes
  - [FUSE (Filesystem in Userspace)](https://github.com/libfuse/libfuse) - An interface for userspace programs to export a filesystem to the Linux kernel
    - [s3fs](https://github.com/s3fs-fuse/s3fs-fuse) - A FUSE filesystem that allows you to mount an Amazon S3 bucket as a local filesystem
  - [eBPF (Extended Berkeley Packet Filter)](https://ebpf.io/) - A revolutionary technology with origins in the Linux kernel that can run sandboxed programs in a privileged context

### Linux Distributions

- General Purpose
  - [Arch Linux](https://archlinux.org/) - A simple, lightweight distribution
  - [Debian](https://www.debian.org/) - A complete Free Operating System
  - [Fedora](https://www.fedoraproject.org/) - An innovative, free and open-source operating system platform built by the community for hardware, clouds, and containers
  - [Gentoo](https://www.gentoo.org/) - A highly flexible, source-based Linux distribution that emphasizes customization and performance
  - [NixOS](https://nixos.org/) - A Linux distribution with a unique approach to package and configuration management
  - [openSUSE](https://www.opensuse.org/) - A free Linux operating system for desktops, servers and containers
- Server-focused
  - [Ubuntu server](https://ubuntu.com/server) - The standard platform for public clouds, on-premises, and IoT devices
- Desktop-focused
  - Debian-based
    - [Ubuntu desktop](https://ubuntu.com/desktop) - The Linux-based operating system that runs from the desktop, to the cloud, to all your internet connected things
    - [BunsenLabs Linux](https://www.bunsenlabs.org/) - A distribution offering a light-weight and easily customizable Openbox desktop
  - Arch-based
    - [Manjaro Linux](https://manjaro.org/) - A user-friendly Linux distribution based on the independently developed Arch operating system
    - [Mabox Linux](https://maboxlinux.org/) - Fast, lightweight and functional Linux Desktop "relaxed" rolling-release, Manjaro based with Openbox Window Manager

### BSD Distributions

- [FreeBSD](https://www.freebsd.org/) - A free and open-source Unix-like operating system descended from the Berkeley Software Distribution (BSD)
- [NetBSD](https://www.netbsd.org/) - A free, fast, secure, and highly portable Unix-like Open Source operating system
- [OpenBSD](https://www.openbsd.org/) - A free and open-source, Unix-like operating system as a fork of NetBSD that emphasizes extremely high security and cryptography

### System Services & Auth

- [Systemd](https://www.freedesktop.org/wiki/Software/systemd/) - A system and service manager for Linux operating systems
  - [journald](https://www.freedesktop.org/software/systemd/man/latest/systemd-journald.html#) - A system service that collects and stores logging data
  - [hostnamed](https://www.freedesktop.org/software/systemd/man/latest/systemd-hostnamed.html#) - A system service that may be used to control the hostname and related machine metadata from user programs
  - [networkd](https://www.freedesktop.org/software/systemd/man/latest/systemd-networkd.html#) - A system service that manages networks
  - [resolved](https://www.freedesktop.org/software/systemd/man/latest/systemd-resolved.html#) - A system service that provides network name resolution to local applications
  - [timesyncd](https://www.freedesktop.org/software/systemd/man/latest/systemd-timesyncd.html#) - A system service that may be used to synchronize the local system clock with a remote Network Time Protocol server
- [linux-pam](https://github.com/linux-pam/linux-pam) - A system of libraries that handle the authentication tasks of applications and services in a Linux system

## Machine Virtualization

:::note[Relevant DSS-P Skills]

- 3\. Technology > 3\.1 Software Development > Cloud Infrastructure Utilization

:::

- [Virtualization](https://en.wikipedia.org/wiki/Virtualization) - The act of creating a virtual version of something, including virtual computer hardware platforms, storage devices, and computer network resources
- [libvirt](https://libvirt.org/) - A toolkit to manage virtualization platforms

### Type-1 Hypervisors

- [KVM](https://www.linux-kvm.org/page/Main_Page) - A full virtualization solution for Linux on x86 hardware containing virtualization extensions
- [Hyper-V](https://learn.microsoft.com/en-us/windows-server/virtualization/hyper-v/overview) - A hardware virtualization product from Microsoft
- [Proxmox VE](https://www.proxmox.com/en/products/proxmox-virtual-environment/overview) - A complete, open-source server management platform for enterprise virtualization

### Type-2 Hypervisors

- [VirtualBox](https://www.virtualbox.org/) - A powerful x86 and AMD64/Intel64 virtualization product for enterprise as well as home use
- [QEMU](https://www.qemu.org/) - A generic and open source machine emulator and virtualizer

### CPU Emulators

- [QEMU](https://www.qemu.org/) - A generic and open source machine emulator and virtualizer

### Computer Hardware

- Processing Units
  - [Central processing unit (CPU)](https://en.wikipedia.org/wiki/Central_processing_unit) - The primary processor in a computer that executes program instructions by performing arithmetic, logic, controlling, and input/output operations
  - [Graphics processing unit (GPU)](https://en.wikipedia.org/wiki/Graphics_processing_unit) - A specialized electronic circuit designed for accelerating graphics rendering and parallel computing tasks, widely used for 3D graphics, AI/ML workloads, and video processing
  - [Neural processing unit (NPU)](https://en.wikipedia.org/wiki/Neural_processing_unit) - A specialized hardware designed to accelerate artificial intelligence and machine learning applications through efficient execution of neural networks and computer vision tasks
- CPU Architectures
  - [x86-64](https://en.m.wikipedia.org/wiki/X86-64) - A 64-bit version of the x86 instruction set
  - [ARM64](https://en.m.wikipedia.org/wiki/AArch64) - The 64-bit extension of the ARM architecture family
- CPU Extensions
  - [x86 virtualization](https://en.wikipedia.org/wiki/X86_virtualization)
  - [Intel AMX](https://en.wikipedia.org/wiki/Advanced_Matrix_Extensions)

## Linux Host Administration

:::note[Relevant DSS-P Skills]

- 3\. Technology > 3\.1 Software Development > Cloud Infrastructure Utilization

:::

### Core Utilities

- [util-linux](https://git.kernel.org/pub/scm/utils/util-linux/util-linux.git/) - A random collection of Linux utilities
  - [lsblk](https://man7.org/linux/man-pages/man8/lsblk.8.html) - A command that lists information about all available or the specified block devices
  - [lsns](https://man7.org/linux/man-pages/man8/lsns.8.html) - A command that lists information about all the currently accessible namespaces or about the given namespace
  - [swapon](https://man7.org/linux/man-pages/man8/swapon.8.html) - A command used to specify devices on which paging and swapping are to take place
- [rsync](https://rsync.samba.org/) - An open source utility that provides fast incremental file transfer
- [sudo](https://www.sudo.ws/) - A system administrator to delegate authority to give certain users the ability to run some commands as root or another user
- [shadow-utils](https://github.com/shadow-maint/shadow) - includes the necessary programs for converting UNIX password files to the shadow password format, plus programs for managing user and group accounts
  - [useradd](https://man7.org/linux/man-pages/man8/useradd.8.html) - A low level utility for adding users
- [jc](https://kellyjonbrazil.github.io/jc/docs/) - A CLI tool and Python library that converts the output of popular command-line tools and file-types to JSON or Dictionaries
- [aha](https://github.com/theZiz/aha) - An Ansi HTML Adapter
  - [NO_COLOR](https://no-color.org/) - An environment variable to disable ANSI color in command-line software
- [Vixie Cron](https://github.com/vixie/cron) - An open source implementation of POSIX Cron
  - [Crontab.guru](https://crontab.guru/) - A quick and simple editor for cron schedule expressions
- [logrotate](https://github.com/logrotate/logrotate) - allows for the automatic rotation compression, removal and mailing of log files
- [Syslog](https://en.wikipedia.org/wiki/Syslog) - A standard for message logging

### Process & System Monitoring

- [procps](https://gitlab.com/procps-ng/procps) - A set of command line and full-screen utilities that provide information out of the pseudo-filesystem most commonly located at /proc
  - [ps](https://man7.org/linux/man-pages/man1/ps.1.html) - A command that displays information about a selection of the active processes
  - [top](https://www.man7.org/linux/man-pages/man1/top.1.html) - A program that provides a dynamic real-time view of a running system
  - [free](https://www.man7.org/linux/man-pages/man1/free.1.html) - A command that displays the total amount of free and used physical and swap memory in the system
  - [vmstat](https://www.man7.org/linux/man-pages/man8/vmstat.8.html) - A command that reports information about processes, memory, paging, block IO, traps, disks and cpu activity
- [psmisc](https://gitlab.com/psmisc/psmisc) - A package of small utilities that use the proc file-system
  - [pstree](https://man7.org/linux/man-pages/man1/pstree.1.html) - A command that shows running processes as a tree
  - [killall](https://man7.org/linux/man-pages/man1/killall.1.html) - A command that sends a signal to all processes running any of the specified commands
- [lsof](https://lsof.readthedocs.io/en/latest/) - A command for LiSting Open Files
- [strace](https://strace.io/) - A diagnostic, debugging and instructional userspace utility for Linux
- [inxi](https://smxi.org/docs/inxi.htm) - A full featured system information script
- [witr](https://github.com/pranshuparmar/witr) - A tool that explains the causal ancestry and purpose of running processes
- Performance Monitors
  - [sysstat](https://sysstat.github.io/) - A collection of performance monitoring tools for Linux
    - [iostat](https://man7.org/linux/man-pages/man1/iostat.1.html) - A command used for monitoring system input/output device loading
  - [Monit](https://mmonit.com/monit/) - A small Open Source utility for managing and monitoring Unix systems
  - [atop](https://github.com/Atoptool/atop#atop) - An ASCII full-screen performance monitor for Linux
  - [smem](https://www.selenic.com/smem/) - A tool that can give numerous reports on memory usage on Linux systems

### Time Synchronization

- [NTP](https://en.wikipedia.org/wiki/Network_Time_Protocol) - A networking protocol for clock synchronization between computer systems over packet-switched, variable-latency data networks
- [chrony](https://chrony.tuxfamily.org/) - A versatile implementation of the Network Time Protocol
- [pool.ntp.org](https://www.ntppool.org/en/) - A big virtual cluster of timeservers providing reliable easy to use NTP service for millions of clients

### Modern CLI Alternatives

- [gdu](https://github.com/dundee/gdu) - A fast disk usage analyzer with a console interface written in Go
- [lsd](https://github.com/Peltoche/lsd) - A rewrite of GNU ls with a lot of added features like colors, icons, tree-view, and more formatting options
- [eza](https://eza.rocks/) - A modern replacement for ls
- [broot](https://dystroy.org/broot/) - A new way to see and navigate directory trees
- [bat](https://github.com/sharkdp/bat) - A cat(1) clone with wings
- [dust](https://github.com/bootandy/dust) - A more intuitive version of du in rust
- [dua](https://github.com/byron/dua-cli) - A tool to view disk space usage and delete unwanted data, fast
- [duf](https://github.com/muesli/duf) - A better 'df' alternative
- [procs](https://github.com/dalance/procs) - A modern replacement for ps written in Rust
- [htop](https://hisham.hm/htop/) - An interactive process viewer for Unix systems
- [btop++](https://github.com/aristocratos/btop) - A resource monitor for Linux, macOS, and FreeBSD
- [glances](https://nicolargo.github.io/glances/) - A cross-platform monitoring tool which aims to present a large amount of monitoring information through a curses or Web based interface
- [neofetch](https://github.com/dylanaraps/neofetch) - A command-line system information tool

### Package Management Tools

- [dpkg](https://salsa.debian.org/dpkg-team/dpkg) - The base package management system for Debian
  - [apt](https://salsa.debian.org/apt-team/apt) - A command-line utility for installing, updating, removing, and otherwise managing deb packages on Ubuntu, Debian, and related Linux distributions
- [Pacman](https://archlinux.org/pacman/) - A utility which manages software packages in Linux
  - [Yay](https://github.com/Jguer/yay) - An AUR Helper Written in Go
- [yum](http://yum.baseurl.org/) - An automatic updater and package installer/remover for rpm systems
- [dnf](https://github.com/rpm-software-management/dnf) - The next-generation version of yum
- [Homebrew](https://brew.sh/) - The Missing Package Manager for macOS (or Linux)
- [pipx](https://pipx.pypa.io/stable/) - A tool to install and run Python applications in isolated environments
- [Flatpak](https://flatpak.org/) - A system for building, distributing, and running sandboxed desktop applications on Linux
- [Snapcraft](https://snapcraft.io/) - A software packaging and deployment system developed by Canonical for operating systems that use the Linux kernel
- [arkade](https://github.com/alexellis/arkade) - A portable marketplace for downloading your favourite devops CLIs and installing helm charts to your Kubernetes cluster
- [Plaza](https://github.com/StaszeKrk/plaza) - A customizable, riceable terminal UI for finding, installing, and managing packages across pacman, AUR, apt, dnf, and Flatpak

## Linux Network Administration

:::note[Relevant DSS-P Skills]

- 3\. Technology > 3\.1 Software Development > Cloud Infrastructure Utilization

:::

### Configuration & Management

- [iproute2](https://github.com/shemminger/iproute2) - A collection of utilities for controlling TCP / IP networking and traffic control in Linux
  - [ip](https://man7.org/linux/man-pages/man8/ip.8.html) - The main command to show / manipulate routing, network devices, interfaces and tunnels
  - [ss](https://man7.org/linux/man-pages/man8/ss.8.html) - A utility to investigate sockets
- [net-tools (legacy)](https://sourceforge.net/projects/net-tools/) - A collection of programs for controlling the network subsystem of the Linux kernel
  - [ifconfig](https://man7.org/linux/man-pages/man8/ifconfig.8.html) - A command used to configure a network interface
  - [netstat](https://man7.org/linux/man-pages/man8/netstat.8.html) - A command that prints network connections, routing tables, interface statistics, masquerade connections, and multicast memberships
- [NetworkManager](https://networkmanager.dev/) - A daemon that sits on top of libudev and other Linux kernel interfaces and provides a high-level interface for network configuration
- [Ubuntu NetPlan](https://netplan.io/) - A network configuration abstraction renderer

### Analysis & Security

- [tcpdump](https://www.tcpdump.org/) - A powerful command-line packet analyzer
- [wireshark](https://www.wireshark.org/) - The world's foremost network protocol analyzer
- [nmap](https://nmap.org/) - An open source tool for network exploration and security auditing
  - [ncat](https://nmap.org/ncat/) - A feature-packed networking utility which reads and writes data across networks from the command line
- [traceroute](https://traceroute.sourceforge.net/) - A computer network diagnostic tool for displaying the route and measuring transit delays of packets across an Internet Protocol network

### Proxies & Gateways

- [SOCKS Proxy](https://en.wikipedia.org/wiki/SOCKS) - An Internet protocol that exchanges network packets between a client and server through a proxy server
  - [Dante](https://www.inet.no/dante/) - A SOCKS server and SOCKS client, implementing RFC 1928 and related standards
  - [tun2socks](https://github.com/xjasonlyu/tun2socks) - A SOCKS proxy for TCP and UDP, that handles all connections from a TUN device
  - [proxychains](https://github.com/haad/proxychains) - A tool that forces any TCP connection made by any given application to follow through proxy like TOR or any other SOCKS4, SOCKS5 or HTTP(S) proxy
- Tunneling
  - [cloudflared](https://github.com/cloudflare/cloudflared) - The command-line client for Cloudflare Tunnel, a daemon that proxies traffic from the Cloudflare network to your origins
  - [ngrok](https://ngrok.com/) - A unified ingress platform that delivers reverse proxy, API gateway, and secure tunnels to expose local applications to the internet

## File Sharing & Remote Access

:::note[Relevant DSS-P Skills]

- 3\. Technology > 3\.1 Software Development > Cloud Infrastructure Utilization

:::

### File Servers and Protocols

- [SMB](https://en.wikipedia.org/wiki/Server_Message_Block) - A network communication protocol for providing shared access to files, printers, and serial ports between nodes on a network
  - [Samba](https://www.samba.org/) - The standard Windows interoperability suite of programs for Linux and Unix
- [FTP](https://en.wikipedia.org/wiki/File_Transfer_Protocol) - A standard communication protocol used for the transfer of computer files from a server to a client on a computer network
  - [vsftpd](https://security.appspot.com/vsftpd.html) - A GPL licensed FTP server for UNIX-like systems, including Linux
- [SFTP](https://en.wikipedia.org/wiki/SSH_File_Transfer_Protocol) - A network protocol that provides file access, file transfer, and file management over any reliable data stream
  - [SFTPGo](https://sftpgo.com/) - A fully featured and highly configurable SFTP server with optional HTTP/S, FTP/S and WebDAV support

### Remote Access Servers and Protocols

- [SSH](https://en.wikipedia.org/wiki/Secure_Shell) - A cryptographic network protocol for operating network services securely over an unsecured network
  - [openssh](https://openssh.com/) - The premier connectivity tool for remote login with the SSH protocol
- [RDP](https://en.wikipedia.org/wiki/Remote_Desktop_Protocol) - A proprietary protocol developed by Microsoft which provides a user with a graphical interface to connect to another computer over a network connection
  - [xrdp](https://github.com/neutrinolabs/xrdp) - An open-source Remote Desktop Protocol server
- [RFB](https://github.com/rfbproto/rfbproto/blob/master/rfbproto.rst) - A simple protocol for remote access to graphical user interfaces
  - [x11vnc](https://github.com/LibVNC/x11vnc) - A VNC server for X11
  - [TightVNC](https://www.tightvnc.com/) - A free remote desktop application
- [Mosh](https://mosh.org/) - A replacement for interactive SSH terminals
- Mesh VPN
  - [Tailscale](https://tailscale.com/) - A Zero Trust identity-based connectivity platform that replaces your legacy VPN, SASE, and PAM and connects remote teams, multi-cloud environments, CI/CD pipelines, Edge & IoT devices, and AI workloads
