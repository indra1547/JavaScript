/*Below snippet explains the asynchronus code flow */

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

function createTweet(tweet){
  setTimeout(() => {
    tweets.push(tweet);
  },1000)
}

getTweets();

createTweet({title : 'tweet three', body : 'This is tweet three'}) // only first two tweets are rendered

