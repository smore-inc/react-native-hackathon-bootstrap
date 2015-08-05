"""
Hack script
===========
"""

import sys
from time import sleep
from argparse import ArgumentParser
from termcolor import colored
from utils import run_command, has_command, report, report_success, Icons, react_native_version

def run_init_command(args):
    """Initialize the envirionment."""
    report("Setting up HackApp development env", icon=Icons.lollipop, section=True)

    report("Starting setup. This is going to take a while, go grab a coffee", color="magenta", section=True,
           icon=Icons.coffee)
    print ""
    sleep(3)

    if not has_command("pod"):
        report("Setting up CocoaPods (we may need your password for this)", section=True)
        run_command("sudo gem install cocoapods --no-ri --no-rdoc")
        report_success("Installed cocoapods!")

    report("Testing for brew", section=True)
    if not has_command("brew"):
        report("Please install brew to setup the env (go to http://brew.sh/)", color="red")
        return

    report_success("Found brew!")

    report("Updating brew packages", section=True)
    run_command("brew update")

    report("Installing iojs", section=True)
    run_command("brew unlink node")
    run_command("brew install iojs")
    run_command("brew link iojs --force")
    run_command("brew install watchman")
    run_command("brew install flow")
    report_success("Installed iojs")

    report("Instaling global npm packages", section=True)
    run_command("npm install -g react-native-cli gulp")

    report("Instaling project npm packages (this may take a while)", section=True)
    run_command("npm install", hide_output=True)
    report_success("Installed all node dependencies!")
    run_patch_es6_modules_command(args)

    report("Updating pods")
    run_command("pod install")

    report_success("All done!")
    run_command('open HackApp.xcworkspace')


def run_open_command(args):
    """Open the project in XCode."""
    run_command('open HackApp.xcworkspace')

def run_atom_init_command(args):
    """Installing atom related packages."""
    run_command('apm install linter linter-eslint pigments react tree-view-git-status')
    report_success("Installed atom packages!")
    run_command("atom .")


BEFORE_PATCH_VERSION = r"""exports.IMPORT_RE = /(\bimport\s+?(?:.+\s+?from\s+?)?)(['"])([^'"]+)(\2)/g;"""
AFTER_PATCH_VERSION = r"""exports.IMPORT_RE = /(\bimport\s+(?:[^'"]+\s+from\s+)??)(['"])([^'"]+)(\2)/g;"""

def run_patch_es6_modules_command(args):
    """patches RN 0.9 to support multiline imports"""
    if react_native_version() != "0.9.0-rc":
        report("Non supported react-native version, skipping packager patching.")
        return

    patterns_file = "node_modules/react-native/packager/" + \
                    "react-packager/src/DependencyResolver/replacePatterns.js"

    content = open(patterns_file).read()
    if AFTER_PATCH_VERSION in content:
        report("Your version was already patched, skipping packager patching.")
        return

    if BEFORE_PATCH_VERSION not in content:
        report("Can't find replacement target, skipping packager patching.")
        return

    content = content.replace(BEFORE_PATCH_VERSION, AFTER_PATCH_VERSION)
    open(patterns_file,'w').write(content)
    report_success("Successfuly patched packager.")



##############################################################################
# Parsing and options
##############################################################################

def _get_parser():

    banner = u'\U0001f42c   ' + u"\u00A0" + colored(u"HackApp command line utility", "magenta",
                                                    attrs=['bold', "underline"])

    epilog = "Learn more about the command line utility: \n" + colored("http://tinyurl.com/p535p69", "cyan",
                                                                       attrs=['underline'])

    parser = ArgumentParser(description=banner, epilog=epilog)

    # Create sub parsers
    subparsers = parser.add_subparsers(help='commands', dest='subparser')

    # commands
    init_cmd = subparsers.add_parser('init', help='Init the environment and open the XCode project')
    init_cmd = subparsers.add_parser('atom-init', help='Install useful atom plugins')
    init_cmd = subparsers.add_parser('patch-packager', help='Patch packager to support multiline es6 imports (http://tinyurl.com/ovs5gh8)')
    open_cmd = subparsers.add_parser('open', help='Open the project in XCode')

    return parser


def run(args, unknown_args, parser):
    """
    The main entry point for the script.

    Most of the time we'll just get the right sub parser and run the matching command
    """

    if args.subparser == 'init':
        run_init_command(args)

    if args.subparser == 'open':
        run_open_command(args)

    if args.subparser == 'atom-init':
        run_atom_init_command(args)

    if args.subparser == 'patch-packager':
        run_patch_es6_modules_command(args)


def start():
    """Start the hack command."""
    parser = _get_parser()

    if len(sys.argv) == 1:
        parser.print_help()
        return

    ns, unknown_args = parser.parse_known_args()
    run(ns, unknown_args, parser)
