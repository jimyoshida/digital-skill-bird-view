#!/usr/bin/perl
use strict;
use warnings;
use open ':std', ':encoding(UTF-8)';
use File::Temp qw(tempfile);
use File::Copy qw(move);

if ( @ARGV < 2 ) {
    print STDERR "Usage: $0 <intro_md_file> <readme_file>\n";
    exit 1;
}

my ($intro_file, $readme_file) = @ARGV;

# Read intro.md and keep only the body: drop the YAML frontmatter and the
# level-1 header, since README.md supplies its own title.
open my $fh_intro, '<:encoding(UTF-8)', $intro_file or die "Could not open '$intro_file': $!";
my @lines = <$fh_intro>;
close $fh_intro;

if ( @lines && $lines[0] =~ /^---\s*$/ ) {
    shift @lines;
    shift @lines while @lines && $lines[0] !~ /^---\s*$/;
    shift @lines if @lines; # drop the closing '---'
}

shift @lines while @lines && $lines[0] =~ /^\s*$/;
shift @lines if @lines && $lines[0] =~ /^#\s+\S/;
shift @lines while @lines && $lines[0] =~ /^\s*$/;

my $body = join('', @lines);
$body =~ s/\s+\z/\n/;

# Rewrite relative links so they still resolve from the repo root: intro.md's
# links are relative to website/docs/, but README.md lives at the repo root.
$body =~ s{(\]\()([^)]+)(\))}{
    my ($open, $url, $close) = ($1, $2, $3);
    $url = "website/docs/$url" unless $url =~ m{^(?:[a-z]+:|/|#)};
    "$open$url$close"
}ge;

# Splice the body into README.md between the Introduction markers.
open my $fh_readme, '<:encoding(UTF-8)', $readme_file or die "Could not open '$readme_file': $!";
my ($fh_out, $temp_file) = tempfile(SUFFIX => '.tmp');
binmode $fh_out, ':encoding(UTF-8)';

my $in_section = 0;
my $replaced = 0;
while ( my $line = <$fh_readme> ) {
    if ( $line =~ /^<!--Introduction-->/ ) {
        print $fh_out $line;
        print $fh_out "\n$body\n";
        $in_section = 1;
        $replaced = 1;
        next;
    }
    if ($in_section) {
        if ( $line =~ /^<!--\/Introduction-->/ ) {
            $in_section = 0;
            print $fh_out $line;
        }
        next;
    }
    print $fh_out $line;
}
close $fh_readme;
close $fh_out;

die "Could not find <!--Introduction--> ... <!--/Introduction--> markers in '$readme_file'\n"
    unless $replaced;

move($temp_file, $readme_file) or die "Could not replace '$readme_file': $!";

print "Synced '$intro_file' into '$readme_file'.\n";

exit 0;
