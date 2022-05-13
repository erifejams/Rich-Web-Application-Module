1. Explain what is meant by the stream abstraction. 

Stream abstraction is the representation of the abstract idea for the source and destination of data. It isn't too detail, so it leaves room to be used in many different data source. It is good, so that there is no repetition, 
when wanting to use for e.g different methods in a programming language. 

1.1 What is the relationship between streams and the observer pattern? 

Observer pattern is a design pattern implemented by streams. Data streams use observer patterns especially in one to many relationships, so that it doesn't have to rewrite code that repetites itself, so that for example
in a one to many relationship, if somethings changes, then it is known to all the dependencies. Also, because streams increase the performance, using observer patterns contributes to improving the performance.
Lastly, I think the relationship between streams and the observer pattern is important because the observer pattern helps with the updating of events, which I think is important for code reading, writing, updating. 


1.2 What are streams useful for modeling and when might you use them in Rich Web development?
Streams are useful for modelling video data and log files e.g netflix, instagram live.
Streams can be used in Rich Web development for the synchronization of large data, that promises don't help with. Streams can be used in rich web development if you want to make user interaction e.g mouse clicks, keyboard input, 
network reponses etc be more processed easily and highly interactive, it does this by using reactive programming with asynchronous data streams.

2. Assume that you are building an interface to an API in your Rich Web App. 
2.1 Describe in detail how you could use the RxJS library to handle asynchronous network responses to API requests. 

The important steps are retriving the retriving the data from the api asynchronously, then use the data how i want it to behave and then preform other calls based on the output of the data. 
I will also use RxJS operators,promises, node.js and the rest api to build the interface.
I would use the promises because it will check asychronous processing and the promise would be used as a container to hold the data that would be needed for the api requests. 
Functions such as async and await from RxJS library would be useful to use with the promise to hold sending the data to the api requests until the asynchronous action finish.
Also, error handling can be used in those functions, so that if data is rejected it can be handled.
Fetch would be used to get the data that the API requests with .then. All these things e.g. feth, .then, async in the RxJS library would be used together to handle asychronous network responses to API requests.

2.2 In your opinion, what are the benefits to using a streams library for networking over, say, promises? 

It can easily handle loads of asynchronous operations. I think that streams library will also make it easy to read the code because some functions don't have to be repeatedly done for different things, 
it can use something for many methods and if something changes, it updates the changes done on others that are dependent on that operation, so it is faster as well.

2.3 And what do you think are the downsides?
The benefits of using promises are not in streams library. Stream Libraries are more lazy than promises and we would have to use subscribe for it to execute, while with promises it executes immediately.
Streams give out a list, while promise gives a value, so it depends,

3. Consider three asynchronous tasks, A,B & C. 
What are the consequences of these functions sharing global state? 
It will be difficult to change things individually in these functions. it also is bad because of its dependencent on each other. Also, the task can trigger a side effect in the shared global state, which can have an effect on the other tasks. It also is bad causre of readability.

3.2 What is a good practice to alleviate any problems associated with this?
implement collections, which will allow iterators which are push and pull, so that the task would not change the others and would be able to access the data whenever they need.