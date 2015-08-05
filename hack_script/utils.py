import subprocess
from time import sleep
import os
from termcolor import colored
import json


class Icons:
    corn = u"\U0001f33d"
    lollipop = u"\U0001f36d"
    coffee = u"\U00002615"

##############################################################################
# Utils
##############################################################################

def has_command(command):
    """
    Check if the command is available
    """

    return run_command(command, hide_output=True) != 127


def run_command(command, hide_output=False):
    """
    Runs a command, return the return code

    """
    if hide_output:
        devnull = open(os.devnull, 'wb')
        return subprocess.call(command, stdout=devnull, stderr=devnull, shell=True)

    return subprocess.call(command, shell=True)


def report(message, color="cyan", icon=None, section=False):
    """
    """

    text = colored(message, color)

    if icon:
        text = icon + " " + u"\u00A0" + text

    if section:
        print ""
    print text


def report_success(message):
    report(message, icon=Icons.corn, color="green")

def react_native_version():
    """Get the current RN version"""
    package_json_path = 'node_modules/react-native/package.json'

    if not os.path.isfile(package_json_path):
        raise RuntimeError("React native is not installed! run npm install!")

    return json.load(open(package_json_path)).get('version')
