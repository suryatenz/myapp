import React,{useState} from 'react'
import Aboutus from '../components/Aboutus'
import Navbar from '../components/Navbar'
import Alert from '../components/Alert12'

export default function Data() {
    const [mode, setMode] = useState('light'); 
    const [text2Col, settext2Col] = useState('Dark');
    const [alert,setalert] = useState('');

  
    const showAlert = (msg,type)=>{
      setalert({
        message:msg,
        type:type
      })
      setTimeout(()=>{
      setalert(null);
      },1500);
    }
  
    const toggleMode = ()=>{
      if(mode === 'light'){
        setMode('dark');
        settext2Col('Light');
        document.body.style.background = '#042743';
        document.title ="TextUtils-DarkMode"
        // document.body.style.color = 'snowwhite';
        showAlert('Dark Mode Enabled',"success");
  
      }
      else{
        setMode('light');
        settext2Col('Dark');
        document.body.style.background = 'white';
        document.title ="TextUtils-LightMode"
        // document.body.style.color = '#042743';
        showAlert('Light Mode Enabled',"success");
  
      }
    }

  return (
    <div>
         <Navbar title="TextUtills" modes={mode} text2Col={text2Col} toggle={toggleMode} />
          <Alert alert={alert} />
          {/* <Aboutus modes={mode}/> */}
    </div>
  )
}
