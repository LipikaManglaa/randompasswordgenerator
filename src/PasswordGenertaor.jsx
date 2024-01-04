import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { lowerCaseLetters, numbers, specialCharacters, upperCaseLetters } from './data/passwordCharacter';

export default function PasswordGenertaor() {
    // condition for input checked
    let [uppercase,setUpperCase]=useState(false)
    let [lowercase,setLowerCase]=useState(false)
    let [number,setNumber]=useState(false)
    let [symbol,setSymbol]=useState(false)
    // password length
    let [passLength ,setPasslength]=useState(10)
    // Random Password Generator
    let [finalPass,setFinalpass]=useState('')


    //function for create generate password
     let generatePassword=()=>{
        let charSet=''
        if(uppercase || lowercase || number || symbol){
            if(uppercase) charSet+=upperCaseLetters;
            if(lowercase) charSet+=lowerCaseLetters;
            if(number) charSet+=numbers;
            if(symbol) charSet+=specialCharacters;
            let rondomPassword=''
            for(let i=0;i<passLength;i++){
                rondomPassword+=charSet.charAt( Math.floor( Math.random()*charSet.length))
            }
            setFinalpass(rondomPassword)
            toast.success("Random password Generate Sucessfully!")

        }else{
            toast.error("Please select atleast one option!")
        }
     }

     //how to copy password
     let copyPassword=()=>{
        navigator.clipboard.writeText(finalPass)
       toast(finalPass )
     }
  return (
   <>
   <div className='w-[100%] h-[100vh] bg-[#1b1452] flex justify-center items-center'>

        <div className='md:w-[450px] bg-[#482c84] p-[20px]'>
            <h2 className='text-[30px] font-bold text-center text-white'>Password Generator</h2>
            <div className='grid grid-cols-[70%_auto] py-[10px] my-[10px] bg-white  items-center rounded-[10px]' >
                <div className='text-center text-[18px]'>
                    {finalPass}
                </div>
                <div className='text-right'><button className='bg-[#1b1452] cursor-pointer rounded-[10px] p-[6px_20px] font-bold text-white mr-2' onClick={copyPassword}>COPY</button></div>
            </div> 
            <div className='grid grid-cols-[70%_auto] py-[10px] my-[10px]  justify-between items-center '>
              <div className='text-white text-[18px]'>Password Length</div>
              <div className=""><input type='number'  className='w-[60px]  rounded-[5px] p-[5px_10px]' value={passLength} min={10} max={25} onChange={(event)=>setPasslength(event.target.value)}/></div>
            </div>
            <div className='grid grid-cols-[70%_auto]    justify-between items-center mb-[10px]'>
              <div className='text-white text-[18px]'>Include Uppercase Letters</div>
              <div className=""><input type='checkbox' className='w-[20px] h-[20px]' checked={uppercase} onChange={()=>setUpperCase(!uppercase)} /></div>
            </div>
            <div className='grid grid-cols-[70%_auto]    justify-between items-center mb-[10px]'>
              <div className='text-white text-[18px]'>Include Lowercase Letters</div>
              <div className=""><input type='checkbox' className='w-[20px] h-[20px]' checked={lowercase} onChange={()=>setLowerCase(!lowercase)} /></div>
            </div>
            <div className='grid grid-cols-[70%_auto]    justify-between items-center mb-[10px]'>
              <div className='text-white text-[18px]'>Include Numbers</div>
              <div className=""><input type='checkbox' className='w-[20px] h-[20px]' checked={number} onChange={()=>setNumber(!number)} /></div>
            </div>
            <div className='grid grid-cols-[70%_auto]    justify-between items-center mb-[10px]'>
              <div className='text-white text-[18px]'>Include Symbols</div>
              <div className=""><input type='checkbox' className='w-[20px] h-[20px]' checked={symbol} onChange={()=>setSymbol(!symbol)}/></div>
            </div>
            <div>
                <button className='w-[100%] bg-[#1b1452] cursor-pointer rounded-[5px]  text-white py-[10px] mt-[10px]' onClick={generatePassword}>Generate Password</button>
            </div>
            <ToastContainer autoClose={1500}/>
        </div>

   </div>
   </>
  )
}
