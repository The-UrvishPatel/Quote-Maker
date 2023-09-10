import React from "react";
import Download from  "./Download";

export default function Quote () {

    const [quote, setQuote] = React.useState({

        line: "Somewhere, something incredible is waiting to be known",
        name: "Carl Sagan",
        image: ""

    });


    async function getNewImage () {

        try {

            let response = await fetch("https://api.unsplash.com/photos/random?client_id=JxorfyXjJhe9GiB5pdmIxcx8aRHNhqZR-0XEy2xlgaQ&query=mountains,night,nature,morning,river,milkyway,space,universe,moon&topics=mountains,night,nature,river,morning,milkyway,space,universe,moon&count=1&orientation=landscape")

            response = await response.json()

            let imageURL = response[0].urls.regular
            

            setQuote(prevState => ({
    
                ...prevState,
                image: imageURL
    
            }));

        } catch(err) {

            alert("Error! Try again!")
        }
    }


    function handleChange (event) {

        const {name , value} = event.target;

        setQuote (prevState => ({

            ...prevState,
            [name] : value
        
        }))

        // console.log(quote)
    }

    React.useEffect(()=>{

        getNewImage()

    },[])



    return (
        
        <div className="quote-container">

            <div className="all-input">
                
                <div className="input-container"> 
                    <label htmlFor="line" className="label">Enter the Quote :&nbsp;</label>
                    <input className="input" type="text" name="line" id="line" placeholder="Quote Sentence" onChange={handleChange}/>
                </div>
                
                <div className="input-container"> 
                    <label htmlFor="name" className="label">Enter the Author's name :&nbsp;</label>
                    <input className="input" type="text" name="name" id="name" placeholder="Author's name" onChange={handleChange}/>
                </div>

            </div>

            <button className="btn" onClick={getNewImage}>New Image</button>
            
            <div className="quote">

                <img src={quote.image} alt="Background" className="image"/>
                
                <div className="quote-text">
                    <p className="quote-line">{quote.line}</p>
                    <p className="quote-author-name">~{quote.name}</p>
                </div>
            </div>

            
            <Download />

        </div>

    )
}

