#!/usr/bin/env perl
use strict;
use warnings;
use open ':std', ':encoding(UTF-8)';

# Dark fill and light cluster background per section (12 domains)
my @DARK = (
    '#1565C0', '#2E7D32', '#C62828', '#6A1B9A', '#E65100',
    '#00695C', '#F57F17', '#37474F', '#880E4F', '#283593',
    '#558B2F', '#4E342E',
);
my @LIGHT = (
    '#DBEAFE', '#DCFCE7', '#FEE2E2', '#EDE9FE', '#FFEDD5',
    '#CCFBF1', '#FEF9C3', '#F1F5F9', '#FCE7F3', '#E0E7FF',
    '#ECFCCB', '#FDF4FF',
);

my ($sec_n, $sub_n) = (0, 0);
my $cur_sec;
my (@nodes, @edges);

while (<>) {
    if (/^# (.+)/) {
        $sec_n++; $sub_n = 0;
        my $label = $1;
        $label =~ s/ - /\\n/;   # "01\nLong Title" fits the ellipse better
        my $id = "s$sec_n";
        $cur_sec = $id;
        push @nodes, { id => $id, level => 1, label => $label, sec => $sec_n };
        push @edges, ['root', $id];
    } elsif (/^## (.+)/) {
        $sub_n++;
        my $id = "s${sec_n}b$sub_n";
        push @nodes, { id => $id, level => 2, label => $1, sec => $sec_n };
        push @edges, [$cur_sec, $id] if $cur_sec;
    }
}

print "graph skillmap {\n";
print "  graph [layout=sfdp, overlap=prism, splines=curved, K=1.5];\n";
print "  node  [fontname=Helvetica, margin=\"0.06,0.02\"];\n";
print "  edge  [color=\"#bbbbbb\"];\n\n";

print "  root [label=\"DX Skills\", shape=circle, width=1.4,\n";
print "        style=filled, fillcolor=\"#1E293B\", fontcolor=white, fontsize=13];\n\n";

my %by_sec;
for my $n (@nodes) {
    push @{ $by_sec{ $n->{sec} } }, $n if exists $n->{sec};
}

for my $si (sort { $a <=> $b } keys %by_sec) {
    my $dark  = $DARK[$si - 1]  // '#555555';
    my $light = $LIGHT[$si - 1] // '#EEEEEE';
    print "  subgraph cluster_$si {\n";
    print "    style=filled; fillcolor=\"$light\"; color=\"$light\";\n";
    for my $n (@{ $by_sec{$si} }) {
        my $lbl = $n->{label};
        $lbl =~ s/"/\\"/g;
        if ($n->{level} == 1) {
            print "    $n->{id} [label=\"$lbl\", shape=ellipse,\n";
            print "      style=filled, fillcolor=\"$dark\", fontcolor=white, fontsize=10];\n";
        } elsif ($n->{level} == 2) {
            print "    $n->{id} [label=\"$lbl\", shape=box, style=\"filled,rounded\",\n";
            print "      fillcolor=white, fontsize=9];\n";
        }
    }
    print "  }\n\n";
}

for my $e (@edges) {
    print "  $e->[0] -- $e->[1];\n";
}
print "}\n";
