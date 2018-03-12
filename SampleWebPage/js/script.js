let header = document.querySelector('header');
let section = document.querySelector('section');

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
let populateHeader = (obj) => {
  let myH1 = document.createElement('h1');
  myH1.textContent = obj.profiles;
  header.appendChild(myH1);

}
/*Function to show profiles */
let showProfiles = (obj)=> {
      let profiles = obj.members;
      for(let i = 0; i < profiles.length; i++) {
        let myArticle = document.createElement('article');
        let myH2 = document.createElement('h2');
        let myPara1 = document.createElement('p');
        let myPara2 = document.createElement('p');
        let myPara3 = document.createElement('p');
        let myList = document.createElement('ul');
        myH2.textContent = profiles[i].name;
       
        myPara1.textContent = 'Age: ' + profiles[i].age;
        myPara2.textContent = 'Maritial Status:' + profiles[i].isMarried;
        myPara3.textContent = 'Children : ';
        let child = profiles[i].children;
        if(child.length === 0)
        myPara3.style.visibility = "hidden";
        for(let j = 0; j < child.length; j++) {
          let listItem = document.createElement('li');
          listItem.textContent = 'name :'+child[j].name;
          myList.appendChild(listItem);
          let listItem2 = document.createElement('li')
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


