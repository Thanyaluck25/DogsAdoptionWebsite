import "./FooterStyles.css"

const Footer = ()=>{
    return (
        <div className="footer">
            <div className="top">
                <div>
                    <h1>Doggy</h1>
                    <p>A little love is all they need</p>
                </div>

                <div>
                    <a href="/">
                        <i class="fa-brands fa-facebook"></i>
                    </a>
                    <a href="/">
                        <i class="fa-brands fa-line"></i>
                    </a>
                    <a href="/">
                        <i class="fa-brands fa-twitter"></i>
                    </a>
                    <a href="/">
                        <i class="fa-solid fa-phone"></i>
                    </a>
                </div>
            </div>
        </div>

    )
}

export default Footer