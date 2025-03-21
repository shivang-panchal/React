import { useState,useCallback,useEffect,useRef } from "react"


function App() {
  
  const [length,setLength] = useState(8)
  const [numberAllowed,setNumberAllowed] = useState(false)
  const [charAllowed,setCharAllowed] = useState(false)
  const [password,setPassword] = useState("")

  // ref hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{

    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*{}+=_-[]~`"

    for(let i =1;i<=length;i++){

      let char =Math.floor(Math.random()*str.length+1)

      pass += str.charAt(char)

    }

    setPassword(pass)

  },[length,numberAllowed,charAllowed,setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,50)
    window.navigator.clipboard.writeText(password)},[password])


  useEffect(()=>{passwordGenerator()},[length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <>

      <div className="w-full max-w-md mx-auto shadow-md  rounded-lg my-8 px-4 text-center py-3  text-orange-500 bg-gray-700">
      <h1 className="text-3xl text-center text-white pb-4">Password Generator</h1>
        <div className="flex rounded-lg overflow-hidden mb-4">
          <input type="text" value={password} className="outline-none w-full  py-1 px-3 text-black bg-white" placeholder="password" readonly ref={passwordRef} />
          <button onClick={copyPasswordToClipboard} class="bg-blue-500 text-white px-3 py-1 shrink-0 outline-none cursor-pointer">Copy</button>
          </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range" min={8}  max={50} value={length} className="cursor-pointer" onChange={(e)=>{setLength(e.target.value)}}/>
            <label>Length :- {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={numberAllowed} id="numberInput" onChange={()=>{setNumberAllowed((prev)=>!prev)}} />
            <label>Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={charAllowed} id="numberInput" onChange={()=>{setCharAllowed((prev)=>!prev)}} />
            <label>Characters</label>
          </div>

        </div>
      </div>

    </>
  )
}

export default App
