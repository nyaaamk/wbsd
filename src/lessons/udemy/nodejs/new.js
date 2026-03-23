const text = `To begin with,

remember that Angular is just JavaScript.

So we've loaded a script file

and the JavaScript engine sitting inside the browser

has processed that JavaScript.

At this point then,

Angular the JavaScript

inside the Angular file is going to deal

with the things that the browser makes available

to the JavaScript engine.

Things to manipulate the DOM, that tree structure

that the HTML is processed into.

So for starters,

what Angular is going to do is help us manage

updating and manipulating the DOM.

To do that we're going to use the first

of what's called a directive.

A directive is generally either an attribute

or a value of an attribute

that is sitting on an HTML element.

Now when this HTML is processed,

these directives, these special attributes,

cause Angular to do work.

Because in JavaScript inside the browser

you can go and interrogate, look at,

attributes and values of attributes on HTML elements.

So let's call this TestApp.

And this ng-app, I'll do it without spaces,

means that this will be the name of my Angular app.

So when I find code in my Angular app

that references this name,

we'll know we're looking at this slice of HTML.

I'll do something similar called ng-controller.

And I'll say MainController as

and we'll just say vm.

What this means is we can actually control

different parts within the HTML of the app.

So this controller means that the code inside

this controller in the JavaScript,

will manage what goes on between these two,

or we might say the children

of this particular HTML element.

So in this case the body element.

The as vm is just a nicety to make it easier

to deal with the data and the different methods

that will be made available via this controller.

Now we'll see an example of that in just a moment.

But first let's add in our own Angular code

that we're now going to need.

Our code that will use the objects and the features

of Angular made available in this angular.js file.

To do that we need to reference our own file.

So I'll say script source equals, and I'll say assets,

remember we decided that the public folder

would be used

for the static content

and that we would actually respond to HTTP requests

for /assets as things inside the public folder.

So I'll say /assets/js/app.js.

Now again what's going on here?

This app.js file in this public folder

is not processed by node.

Because it's inside the static content directory.

Node is simply going to deliver the contents of this file,

when the browser requests it via an HTTP request.

The node won't process, it won't run this JavaScript at all.

So this script tag will then cause the browser

to make that request and the browser,

the JavaScript engine inside each particular user's browser

will do the processing.

Now let's go over into our app.js file

and actually write some code here.

Oh and by the way, in our index page

we loaded the angular.js script tag in the head

and this other script tag in the body.

You don't have to do it quite this way,

but I like to do things this way because

I want Angular to be completely loaded

before the browser renders,

or outputs the visual things

that we see on the screen.

And these scripts in the head tag

will be processed before that happens.

But on the other hand, the code that I'm going to write

I don't necessarily need to wait for that to happen

because that will make the page take longer

to actually begin to appear.

So I'll put my code inside the body tag, this script tag,

and the Angular code in a script tag inside the head tag.

And that's just an architectural choice.

But in my app.js file,

because my angular.js file was loaded already,

I now have a variable, an object called angular.

And we'll use this a lot.

It provides all the functionality that I need.

I can say angular.module and I'll give it the same name

that I put in ng-app.

And then just an empty array.

What this does is it sets up the new module.

My angular file.

My Angular app that is.

And this module

is in some ways like the idea

of module.exports.

It's a named thing that contains code

that is safe inside of it.

That won't collide with other code necessarily.

And then I can use this,

and by the way, this empty array would be a list

of other modules this module depends on.

Kind of like require,

but it's just empty now

because this is a very simple app that we're building.

So I can say TestApp to say all right,

now go find that module.

I created it here and now I can reference it

and do other things like .controller.

.controller, which I'm just making my life

a little bit cleaner-looking here,

it's really this but JavaScript ignores the white space,

so I can move it down just for ease of

looking at my code.

Remember we said our controller was called MainController,

and then I'm going to give it a function

that will actually be run.

So what this does is it adds a controller of this name,

to this module, to this app,

and executes this function.

And I'll just call my controller function here.

I'll create it and it will be executed,

it'll be called here by Angular itself.

And then I'm going to say this.message hello.

So what I've done is I've added a property

to the this variable.

Which because I said as vm,

what Angular actually did

was make the this variable point

to the same object that this variable here,

which I call vm or view model,

that is the model or the data and properties methods

that I want for this particular view,

or that is to say this particular screen,

is going to be made available

because it's on the same object.

So Angular then will attach message

and I can actually access message inside my HTML.

I can do that with, for example,

a double set of curly braces.

Two curly braces and then two ending curly braces,

and I can say vm.message.

So what's happening here?

Well, this string is what will be given

from node to the browser.

But once the browser has this HTML

and processes all this JavaScript,

it's going to see these attributes in the DOM,

it's going to find those same things

in the JavaScript code

where Angular is expecting them to be

in the way Angular is expecting them to be set up.

And then it's going to see this property on the object,

and it's going to see these curly braces in the DOM,

and it will know that means replace this

with the value

that is actually on the variable.

Now again this is kind of like what EJS was doing

when it was replacing values,

but that was really just replacing strings.

Angular is doing something similar

but it's using JavaScript's ability to update the DOM,

the DOM tree, not the string of HTML that was downloaded,

but the DOM tree that was generated

when stored by the browser after the fact.

So this will be in the DOM tree,

the screen will want to render this

and Angular will actually change what's in the DOM

and the screen will render instead

what we're asking it to

via the Angular code and my code.

So if I refresh this,

I see hello.

Hello is in the DOM.

Interesting, no?

That didn't change what was downloaded.

If I hit F12 and refresh,

and go to localhost.

What was downloaded was vm.message

with these curly braces.

That will pulled into the DOM,

the JavaScript was run

and then when the JavaScript ran in the browser,

it replaced that with Hello.

At that point, that had nothing to do with node.

But everything to do with Angular.

Angular makes it very easy for us to manipulate the DOM.

And that's why it's so popular to use

when building web applications.

All right, so and to recap what we're seeing one more time,

node.js delivered this entire HTML page,

AngularJS was then loaded by the browser

in its JavaScript engine.

We attached this ng-app attribute

which Angular looks for,

the JavaScript code that is Angular looks for,

and we gave it this name which matched the module

that we're working with.

And so that meant that that module and the code inside of it

are going to be managing all of this HTML.

Then ng.controller has a name,

that was the name of the controller inside that module

and it will execute this function that we give it

which then makes things available to use

inside this particular HTML element.

And we used double curly braces

in order to output a value.

We used the this variable inside the function

to attach a property

and then we used the as,

what's called controller as AngularJS

to give ourselves a variable name

that matched up and is the same object

that the this variable was pointing to,

and we were able to output our value

because when the AngularJS code ran

it saw this in the DOM,

these double curly braces,

and then replaced that value in the DOM

with the value here stored in the JavaScript.

So AngularJS is helping us manage our code

and is really helping us manage our UI.

And makes it easy for us to code a UI

that's very responsive, that's very modern.

And that's one of the reasons why AngularJS is so popular.

For example, something pretty simple and pretty neat.

I can set a text box

and use a directive

that is this special attribute called ng-model

and set the same value.

And I'll just do a return

to separate those two things visually,

and then I'll refresh the page

and you can see that I have a text box now

filled with Hello

and the value outputted to the DOM.

So in both cases, either with double curly braces

or with ng-model,

I'm able to attach something to the DOM.

I'm able to update the DOM

and Angular does that for me

by telling it what variable I want to actually output.

But more than that,

Angular keeps track of the values

and will update the DOM again when necessary.

So if I say Hello World,

every time I type a value

into the text box,

every time I type a character

that actually generates an event inside the browser

and AngularJS is looking for those events,

and then updated the DOM for me.

Notice how the text is changing as I type,

and I didn't have to do anything else

other than bind, that is connect,

both this input value and this block of text

via AngularJS to the values in my JavaScript.

So that's pretty neat.

I can make dynamic web applications.

Web applications where the UI changes

in response to the user's input, very easily.

And that's not something I can do very easily with node.

Because node is the server technology.

So every time the user takes an action,

I would have to send an HTTP request to node

via normal browser request,

get the response back.

With new HTML the browser

would re-render a new page

and that works, but it's not as interactive,

not as dynamic.

Instead AngularJS lets us and helps us

to use the core features within Internet browsers

and JavaScript engines

in order to send those requests and responses

behind the scenes

and dynamically update the user interface

by dynamically updating the values

within the document object model,

within that tree structure that browser has

in order to actually render the page.

Now let's try something else just for fun.

We'll go ahead and add

let's say an array, people.

And it will be an array of objects.

Each object will be a name.

So I'll have an object with a name value pair

John Doe,

Jane Doe,

and let's go Jim Doe.

Now because the people variable,

this array is attached to this,

which is then available inside the HTML here,

I can then use that array.

So let's go ahead and try this,

I'll put another break, another carriage return,

and we'll do an unordered list.

And then I'll do a single li

and I'll say ng-repeat,

another attribute that Angular looks for,

recognises and is coded in JavaScript to do some work for.

I'll say ng-repeat person

in vm.people.

And then I'll use my double curly braces

to say person.name.

So what's happening here?

Well, this is an array,

and ng-repeat loops over arrays.

It does it by saying, here is a variable,

and here's the array

and it will loop over the array

and every time it looks over the array,

the current value that I'm looking at in the array

will be called person.

And then AngularJS is actually going to recreate

this little block of HTML,

this little element in the DOM,

for every element in the array.

For every value in the array.

So I'll end up with three lis in the DOM.

Now what comes back from node is just this.

But Angular will take care of updating the DOM

and creating one li

for every one of these values in the array.

So go back here to my index file,

take a look at it again,

and we'll go ahead and refresh,

and there they are.

AngularJS went ahead and created the extra elements

in the DOM using that ng-repeat we told Angular to do that.

And again, Angular is just JavaScript code

running using what the browser

provides the JavaScript engine,

in order to be able to update the screen.

Interesting, right?

Pretty neat.

Now if you are not very familiar with AngularJS,

you may have a lot of questions.

And AngularJS is a big topic.

And to be clear, this course is not about Angular,

we're touching on the MEAN stack

because often when you talk about node,

you often deal in the MEAN stack.

But Angular itself is one option

for how you build your UI.

You certainly don't have to do it this way.

And Angular is such a big topic

that it really deserves its own course.

That said, I wanted to show you a little bit

of what the kinds of things you see in Angular are,

so you can understand why things like the MEAN stack

are so popular.

I can build very expressive, very dynamic

web applications all in one language,

and I can save myself a lot of time

doing what I call plumbing,

that is manually making changes and updating things

when I have utilities like AngularJS

that will do that for me.

So this is the basic idea

behind an Angular application.

I have JavaScript running in the browser

that is helping me manage my user interface

and I have my user interface in the markup

that is in the HTML,

that has special things that tells Angular what to do.

So work is being done in node

and work is being done in Angular.

All right, so that is just a little introduction

to what you see when dealing with AngularJS.

Let's move on.`;
