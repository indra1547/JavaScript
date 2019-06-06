/*Handling async behavior using call backs
We are passing to an asynchronous function a function which it will call when the task is completed.
*/
let tweets = [
  {title: 'tweet one', body: 'This is tweet one'},
  {title: 'tweet two', body: 'This is tweet two'}
];

function getTweets(){
  let output = "";
  setTimeout(() => {
    tweets.forEach((tweet) =>{
      output += `<li>${tweet.title}</li>`
    });
    document.body.innerHTML = output;
    
  },1000)
}

function createTweet(tweet,callback){
  setTimeout(() => {
    tweets.push(tweet);
    callback();
  },1000)
}

getTweets();

createTweet({title : 'tweet three', body : 'This is tweet three'},getTweets) // all 3 tweets are rendered

