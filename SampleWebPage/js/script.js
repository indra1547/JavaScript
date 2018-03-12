var header = document.querySelector('header');
var section = document.querySelector('section');

const obj = {
    "profiles": "Dispalying profiles",
    "members": [
        {
            name: "John",
            age: 29,
            isMarried: "Married",
            children: [
                {
                    name: "Peter",
                    age: 8
                }
            ]

        },
        {
            name: "Carpenter",
            age: 35,
            isMarried: "Married",
            children: [
                {
                    name: "Stuart",
                    age: 12
                }
            ]
        },
        {
            name: "Jim",
            age: 39,
            isMarried: "Married",
            children: [
                {
                    name: "Clark",
                    age: 14
                }
            ]
        },

        {
            name: "George",
            age: 39,
            isMarried: "Single",
            children:[]
        }
    ]
}
/* function to populate header */
function populateHeader(obj) {
  var myH1 = document.createElement('h1');
  myH1.textContent = obj.profiles;
  header.appendChild(myH1);

}
/*Function to show profiles */
function showProfiles(obj) {
      var profiles = obj.members;
      for(var i = 0; i < profiles.length; i++) {
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myList = document.createElement('ul');
        myH2.textContent = profiles[i].name;
       
        myPara1.textContent = 'Age: ' + profiles[i].age;
        myPara2.textContent = 'Maritial Status:' + profiles[i].isMarried;
        myPara3.textContent = 'Children : ';
        var child = profiles[i].children;
        if(child.length === 0)
        myPara3.style.visibility = "hidden";
        for(var j = 0; j < child.length; j++) {
          var listItem = document.createElement('li');
          listItem.textContent = 'name :'+child[j].name;
          myList.appendChild(listItem);
          var listItem2 = document.createElement('li')
          listItem2.textContent = 'age :'+child[j].age;
           myList.appendChild(listItem2);
          
        }
        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList);
        section.appendChild(myArticle);
      }
    }

populateHeader(obj);
showProfiles(obj);


