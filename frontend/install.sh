#!/usr/bin/bash
command -v python3 >/dev/null 2>&1 || { echo >&2 "python3 is not installed.  Aborting."; exit 1; }

a=$(cat /etc/os-release | grep ID_LIKE)

if [ $a == 'ID_LIKE=debian' ];then
	dpkg-query -l python3-venv > /dev/null 2>&1 || { echo >&2 "python3-venv is not installed. Aborting.";exit 1;}
	python3 -m venv .
else
	virtualenv .
fi

source bin/activate
pip install --upgrade pip
pip3 install -r requirements.txt
