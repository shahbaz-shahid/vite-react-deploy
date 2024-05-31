const Nike =()=>{
    return(
        <main className="nike container">
            <div className="nike-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
               
                <div className="nike-btn">
                    <button>shop Now</button>
                    <button id="len">category</button>

                </div>
                <div className="shopping">
                    <p id="me">Also Avilabe on</p>
                    <div className="brand-icons">
                       <a href="https://Amazon.com"target="blank"><img src="public/Images/amazon.png" alt="amazon-logo" /></a>
                       <a href="https://flipkart.com"target="blank"><img src="public/Images/flipkart.png" alt="flipkart-logo" /></a>

                    </div>
                    
                </div>

            </div>
            <div className="image">
                <img src="public/Images/shoe_image.png" alt="Shoe image" />
            </div>
        </main>
    )
};

export default Nike;