1. Explain using code examples what is meant by props and state in React JS?
Props is the shorten version of properties. In react, props is used as an object argument to contain data that is passed into a react component. 

function Greetings(props) {
  return <h1>Welcome, {props.name}</h1>;
}
This code will return a react element. In this code shown above, props will hold data, which in this case will be the name of the person e.g. EJ. When props.name is called, the data will have EJ. Therefore the sentence returned will be Welcome, EJ.


function Car(props) {
  return <h2>I am a { props.brand }!</h2>;
}

function Garage() {
  return {
		<>
		<h1>Who lives in my garage?</h1>
		<Car brand="Ford" />
		</>
  }
}
ReactDOM.render(<Garage />, document.getElementById('root'));

The above diagram basically shows hoe props are used to pass data from component to component. Props are really useful for passing components because they are only read only.

1.2. State is used because props are read only meaning props can't be intereative because they props don't change. State makes it interactive to use. To properly define state, in an article written by tarak maamar called "state in react: an overview", 
state was defined as a plain Javascript object used by react to represent an information about the component's current situation. To simplify this definition in my own words, state is basically used to show and represent the changes that happens to an 
object over time e.g value in data changes and it also controls the behaviour after each change. The below code shows how state works. The state just holds the current time and this is what gets printed out.

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);



to see changes, this.setState() is a method that can be used to change the value of the state. The below code show the colour of the mustang is originally red, but with this.setState(), the colour of the mustang is changed to a blue. 
This code example shows how the data in a state can be changed.

  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964
    };
  }
  changeColor = () => {
    this.setState({color: "blue"});
  }
  

state can be manage by a hook called useState() and that can be seen by the code above. The code below shows how the state can be managed by using useState(). The current state is orange and this colour is managed by useState, 
but when the the button is clicked, it changes the favourite colour to pink. This code also shows how the state can be interactive and the data inside the state can be changed using hook function.

import { useState } from "react";
import ReactDOM from "react-dom";

function ColorChange() {
  const [color, setColor] = useState("orange");

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button
        type="button"
        onClick={() => setColor("Pink")}
      >Pink</button>
    </>
  )
}

ReactDOM.render(<Color />, document.getElementById('root'));



2. In functional programming, what does the term functor mean? 
In functional programming, a functor is a data object that can hold elements of any data type and which implements the map() function to call on each of the elements of the functor to produce a result in a new functor. 
Basically the functor preforms an operation.

2.1 Can you give an example in JavaScript?
['185', '467', '989']
.map(s => parseInt(s))
.map(n => n / 10)   

This is an exmaple  of a functor in functional programming. This shows how the functor has an array of numbers. The numbers are turned into integers using hte first map and through the second map, each of the elements are divided by 10 e.g 123/10, 456/10. 
This results in a new functor being printed out and shows the ouput: [18.5, 46.7, 98.9].

3. We have looked at three kinds of asynchronous programming mechanisms, namely callbacks, promises and streams. 
Mention one advantage and one disadvantage of each type.
Advantage:
- callbacks: makes sure a function is not going to run before a task is completed, the funtion will run after the task is completed. it listens and waits. for example in a button, if a user 
doesn't click it a function may not run, until the user clicks it then the specific function will run. An advantage is that is good for using for user responses/input and giving the user the requested or right output.
- promises: It allows for better error handling, especially when you want to display multiple error messages, which means that that a catch handler can be put in the code to catch the error and display it.
- streams: it allows for processing data in real-time.

Disadvantage:
- callbacks: It does not scale well for complex asychronous code meaning that is becomes hard to read and debug when the code is complex.
- promises: multiple arguments cannot be returned.
- streams: both events on the writable and readable streams need to be managed. Requires longer lines of code which may make the launch time slower.


4. With the aid of a diagram and example code, describe the Cascading Style Sheets (CSS) Box Model 
The CSS Box Model is used as a guideline for developers, so to make it easy to put other elements around the content area such as images, text etc.
please refer to the diagram save as CSS Box Model diagram - 4.PNG as part of this submission as the diagram of the CSS Box Model. This diagram shows the picture of the box model.It is split into 3 sections - margin, border, padding surrounding the content area. 
which are optional, when creating css code for surrounding the content. The CSS box model shows how all elements can have their own box because they might need sizing, moving the location from left to right etc and these can be done with the use 
of the box model to help direction which option e'g margin, border, padding etc to use.
<!DOCTYPE html>
<html>
<head>
    <style>
    div {
      background-color: pink;
      width: 300px;
      border: 15px solid red;
      padding: 80px;
      margin: 20px;
    }
    </style>
    </head>
    <body>
		<div>The Box Model</div>
  </body>
</html>

This shows all the parts of the box model e.g. margin, padding, border and the content which says The Box Model.

4.2. show how it can be used to space DOM elements. 
The below code shows how elements can be spaced in the DOM elements because the margin and padding moves the elements depending on the size specified for them e.g. margin = 60px. The elements can also be moved left, right, bottom, top, by specifying,
padding-top, margin-bottom, padding-left etc. This is how it can be used to move elements around. 

<html>

  <head>
    <style>
      div {
        padding: 40px;
        border-style: solid;
        border-color: blue;
      }

    </style>
  </head>

  <body>
    <div>padding</div>
  </body>

</html>

Refer to the diagram called padding.PNG to see the results of padding code. The above code show padding code and what it produces as part of the css box model. Padding is the space between the content and its border. Padding creates extra space within the element.

<html>

  <head>
    <style>
      div {
        border-color: red;
        border-style: dashed;
      }

      h1 {
        border-style: solid;
      }

    </style>
  </head>

  <body>
    <h1>Solid border</h1>
    <div>border</div>
  </body>

</html>

Refer to the diagram called border.PNG to see the results of border code. The above code shows border and how it can be changed to different lines e.g spotted, solid also the colour can be changed, in this case red. Border is the properties of the border of the box e.g. the colour, line style etc. 

<html>

  <head>
    <style>
      h1 {
        margin: 80px;
        border-style: dashed;
      }

    </style>
  </head>

  <body>
    <h1>margin</h1>
  </body>

</html>
Refer to the diagram called margin.PNG to see the results of margin code. The above code shows the margin code and what it produces as part of the css box model. Margin is used to create space aroung the elements, outside the defined border.
All these form the CSS box model and is useful for designing and spacing DOM elements.


5. Detail how the browser loads and bootstraps a rich web application from an initial URL
- when the user navigates to a url or selects a hyperlink, the browser goes to the domain name servers(DNS), an address book that tells where the website is. This is the initial request and this request is sent accross the network to the web application server.
- The browser makes a TCP/IP connection to server IP address and designated port associated with the URL. These protocols will tell where the files, to load the website are located in the server.
- An application server or HTTP proxy listens at that IP address and accepts the connection from the browser.
- The broswer sends a HTTP request over te now opened TCP/IP connection.
- The first HTTP request will start loading the initial assests(HTML, CSS, JS or multimedia files) from the server to the browser.
- As the files are loaded, the browser parses each in turn and runs any commands that may be contained in the files. For example, the html elements would build the content etc
- DOM is constructed when loading is happening and this is when the user browsers begins to receive HTML response.
- The application server parses the request and responds to the browser over the same open TCP/IP connection, delivering the needed files.
- When the DOM finish loading, the users browser displays the content.
- This processes continues until the last asset has been fetched.
- Window load event fires.