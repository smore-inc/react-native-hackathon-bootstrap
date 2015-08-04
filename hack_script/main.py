"""
Hack script
===========
"""

import sys
from argparse import ArgumentParser
from termcolor import colored
from utils import run_command, has_command

def run_init_command(args):
    """Initialize the envirionment."""

def run_open_command(args):
    """Open the project in XCode."""
    run_command('open HackApp.xcworkspace')


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
    open_cmd = subparsers.add_parser('open', help='Open the project in XCode')

    return parser


def run(args, unknown_args, parser):
    """
    The main entry point for the script.

    Most of the time we'll just get the right sub parser and run the matching command
    """
    # Restart command
    if args.subparser == 'init':
        run_init_command(args)

    # Tail command
    if args.subparser == 'open':
        run_open_command(args)


def start():
    """Start the hack command."""
    parser = _get_parser()

    if len(sys.argv) == 1:
        parser.print_help()
        return

    ns, unknown_args = parser.parse_known_args()
    run(ns, unknown_args, parser)
