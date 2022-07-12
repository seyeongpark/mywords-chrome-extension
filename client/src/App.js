import React, {useEffect, useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';


function App() {

  const [myWords, setMyWords] = useState([]);
  const [word, setWord] = useState("");
  const [wordClass, setWordClass] = useState("noun");
  const [description, setDescription] = useState("");
  
  const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myWords"));

  useEffect(() => {
    if(leadsFromLocalStorage){
      setMyWords(leadsFromLocalStorage)
    }
  },[])

  const saveWord = async () => {
    if(setWord){
      const obj= {
        word: word,
        class: wordClass,
        description: description
      }
      myWords.push({obj})

    setMyWords([...myWords, obj]) 

    setWord("");
    setWordClass("");
    setDescription("");

    localStorage.setItem("myWords", JSON.stringify(myWords))
    console.log(obj)
    }
  }

//   const removeItem = async (num) => {
//     myWords.splice(num, 1);
//     localStorage.setItem("myWords", JSON.stringify(myWords))
//     setMyWords(myWords)
// }

  return (
    <div className="App">
      <input type="text" placeholder="word" className="input-word"
      onChange={e => setWord(e.target.value)} 
      value={word}/>

      <select id="input-word-cls-el" className="input-word-cls" onChange={e => setWordClass(e.target.value)} value={wordClass}>
                <option>noun</option>
                <option>verb</option>
                <option>adjective</option>
                <option>adverb</option>
            </select>
      <input type="text" placeholder="description" className="input-des" onChange={e=> setDescription(e.target.value)} value={description}></input>
      <button id="save-btn" onClick={saveWord}>save</button>

            <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Word</th>
                <th scope="col"></th>
                <th scope="col">Description</th>
                <th scope="col">Remove</th>
              </tr>
            </thead>
                <tbody>
                    {
                      myWords && myWords.map((myWord) =>
                      <tr>
                        <th scope="row" key={myWord.id}></th>
                        <td className='word-el' key={myWord.id}>{myWord.word}</td>
                        <td className="word-cls-el" key={myWord.id}>{myWord.class}</td>
                        <td className="des-el" key={myWord.id}>{myWord.description}</td>
                        <td>
                            <button id="remove-btn">Remove</button>
                        </td>
                      </tr>)
                    }
                </tbody>
          </table>      

    </div>
  );
}

export default App;
