import React,{ useState }from 'react'


export default function Textfrom(props){

    const handleUpclick = ()=>{
        let tt = text.toUpperCase();
        Settext(tt);
        props.showAlert("Uppercase Converted","success");
        // let count1 = tt.length; 
        // changecount(count1);
        // let count2 = tt.split(" ").length;
        // changewordcount(count2);
    } 
    const clearText = ()=>{
        Settext('');
        props.showAlert("Text cleared","success");

    }
    const handlelowclick = ()=>{
        let ee = text.toLowerCase();
        Settext(ee);
        props.showAlert("Lowercase Converted","success");

        // let count1 = ee.length; 
        // changecount(count1);
        // let count2 = ee.split(" ").length;
        // changewordcount(count2);
    }
    const captialletter = ()=>{
        let ab = text.split(" ");
        let mywor = '';
        // console.log(ab.length);
        for( let i =0;i<ab.length;i++){
            let an = ' ';
            an = ab[i].charAt(0);
            an = an.toUpperCase();
            // console.log(an);
            ab[i] = ab[i].replace(ab[i].charAt(0),an);
            mywor = mywor+' '+ab[i];
        }
        Settext(mywor);
        props.showAlert("Capital Converted","success");

        // let count1 = mywor.length; 
        // changecount(count1);
        // let count2 = mywor.split(" ").length;
        // changewordcount(count2-1);
    }
    const clearSpaces = ()=>{
         let newtext = text.split(/[ ]+/);
         Settext(newtext.join(" "));
        props.showAlert("Spaces cleared","success");

    }
    const copyToClipboard = ()=>{
        let text = document.getElementById("textid");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copyed to Clipboard","success");

    }
    const onchange = (event)=>{
          Settext(event.target.value);
    }
    const[text,Settext]=useState('');
    // const[count,changecount]=useState(0);
    // const[wordcount,changewordcount]=useState(0);
    let hh = text.split(" ").length;
    let hhh = hh;
    hh = hh-1;
    hhh = hhh-1;

    return(
        <>  
        <div className="kk" style={{color : props.modes === 'light' ? 'black':'white'}}>
            <div className="container">
                <br/>
                <h3>{props.heading}</h3>
                <div className="surya mb-3">
                    <textarea className="form-control" value={text} onChange={onchange} style={{backgroundColor : props.modes === 'dark' ? '#042743':'white',color : props.modes === 'light' ? 'black':'white'}} id="textid" rows="3"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpclick} >Convert to upper</button>
                <button className="btn btn-primary my-2 mx-2" onClick={handlelowclick} >Convert To lower</button>
                <button className="btn btn-primary my-2 mx-2" onClick={captialletter} >First letter captial</button>
                <button className="btn btn-primary my-2 mx-2" onClick={clearSpaces} >Remover EmptySpace</button>
                <button className="btn btn-primary my-2 mx-2" onClick={copyToClipboard} >Copy to clipbord</button>
                <button className="btn btn-primary my-2 mx-2" onClick={clearText} >Clear text</button>
                
            </div>
            <div className="container">
                <h1>Your Text summary</h1>
                {/* <p> lenght - {count} , words - {wordcount}</p> */}
                <p>{`words - ${hh <= 1?hh:hhh} , length - ${text.length}` }</p>
            </div>
            <div className="container">
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter in the text Box to Preview"}</p>
            </div>
            </div>
        </>
    );
}