# Uncanny Facebook\* Simulator
I started playing around with nodejs on the Pluralsight Node Getting Started
course\. When the course got to the ```setInterval()``` function I replaced
the original text with \"Are you registered to vote?\" and an interval of
1\.5 seconds, and the first iteration of the Facebook simulator was born.

I quickly realized that with a few extra minutes of work, I could completely
reverse engineer the Facebook timeline \(excluding, of course, its brilliantly
designed UI\. I don\'t want to make fun of _everything_ about Facebook, just
the Big Brother propaganda element and some of the frequent themes of posts on a
Facebook timeline\.\)\.

## A different experience every time
Just like real Facebook, the themes and types of posts remain relatively
static, but the relative concentration of these types of posts on your feed
will vary each time you log in\. To try and simulate this experience, there is
randomization to the interval for each of the items in the feed so that you get
a unique experience each time you execute the simulator\.

## Usage
1. Install a Javascript runtime\. The simulator was built and tested with the
node runtime\. You can follow the instructions
[here](https://nodejs.org/en/download/) to download and install\.
2. The simulator is a single Javascript file\. No installation is required\. You
can clone the repo or just copy and paste the
```uncanny-facebook-simulator.js``` file onto your filesystem. And then invoke
it from the terminal\.

```bash
# from the directory where the .js file is located
# using node JavaScript runtime, but will probably work with other runtimes
$ node uncanny-facebook-simulator.js
# CTRL+C to stop when done
```

## Contributing
### Adding a new item to the feed
You can add a new item to the feed list by invoking the ```addToChaos()```
function with the new message and interval\.

```javascript
// adding a new message
// addToChaos(String fbMessage, Integer frequencyModifier);
// Add message with slightly under 88 seconds maximum interval
addToChaos('My new feed message', 88);
```

__NOTE__: Not all new messages will be accepted into the repo\. It\'s open
source\. You can fork it and do as you wish in your own repo\.

### Repository uses the UNLICENSE
This repository uses the [UNLICENSE](https://unlicense.org/)\. By contributing
to this repository you agree that you are going to abide by the terms of the
UNLICENSE and not be an intellectual \"property\" troll\. Ideas are not
property and if you want to initiate force against people who copy you need to
get a life and contribute to some other repository\.

### Contribution process
1. Fork the repo on GitHub
2. Clone the project to your own machine
3. Commit changes to your own branch
4. Push your work back up to your fork
5. Submit a Pull request so that we can review your changes

__NOTE__: Be sure to merge the latest from "upstream" before making a pull
request and squash your commits if completed\.

## Legal
\* Facebook is the blah, blah, blah, legalese, legalese of Facebook Inc\. This
repository is a parody and is well within the boundaries of fair use\. Neither
Facebook\'s brand assets nor its brand identity are used in this simple command
line script\.
