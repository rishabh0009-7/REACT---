// var h1 = document.createElement('h1')
// h1.innerHTML = "hello from js "
// console.log(h1); 
//yaha tak backend mai ban gya 
// var parent = document.querySelector("#parent")
// parent.appendChild(h1)
//isse frontend mai show hoga 


// //why we use react ?
// agar hume example button ke click pe h1 change akrna hai to pura ka pura dom re render karna padta hai 
//   iska asar browser pe padega aur uski vajah se application utna achaa nhi ban paayega 
//react js (backend mai bana dega ) + react dom(frontend mai show karega ) --> website 


// to use react js on browser  without installing anything use cdn
//<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
/* <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script> */


//agar yahi same uppar waali cheez react se karani hai vo bhi cdn react se  

var h1 = React.createElement('h1',null,"hello from react")
var parent = document.querySelector('#parent')
var parent = ReactDOM.createRoot(parent)
parent.render(h1)


// to react karta kya ha ?
// before react agar humne kisi ko mssg bheja to saraa chats reload hoti thi par using react se mssg chala jataa hai chats reload nhi hoti kyuki vo ek virtual dom bana leta hai aur usse real dom se compare karta hai 

//note --> jsx--> javascript + html   combination hai likhna ka 