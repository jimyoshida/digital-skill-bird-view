#!/usr/bin/env perl
use strict;
use warnings;
use open ':std', ':encoding(UTF-8)';

my $in_admonition = 0;
my $admonition_title = '';

while (<>) {
    # Convert Docusaurus admonitions to pandoc-compatible format
    # Start of admonition: :::note[Title] or :::note
    if (/^:::(\w+)(?:\[(.*?)\])?/) {
        $in_admonition = 1;
        my $type = uc($1);
        $admonition_title = $2 || $type;
        print "\n> **${admonition_title}**\n>\n";
        next;
    }

    # End of admonition: :::
    if (/^:::$/ && $in_admonition) {
        $in_admonition = 0;
        print "\n";
        next;
    }

    # Inside admonition: prefix lines with >
    if ($in_admonition) {
        # Skip empty lines inside admonition
        if (/^\s*$/) {
            print ">\n";
        } else {
            print "> $_";
        }
        next;
    }

    print;
}
