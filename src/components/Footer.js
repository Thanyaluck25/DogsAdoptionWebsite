import "./FooterStyles.css"

const Footer = ()=>{
    return (
        <div className="footer">
            <div className="top">
                <div>
                    <h1>Doggy</h1>
                    <p>Create by Thanyaluck Y.</p>
                </div>

                <div>
                    <a href="https://www.facebook.com/SoiDogPageInEnglish/">
                        <i class="fa-brands fa-facebook"></i>
                    </a>
                    <a href="https://www.youtube.com/user/SoiDogFoundation?themeRefresh=1">
                        <i class="fa-brands fa-youtube"></i>
                    </a>
                    <a href="https://twitter.com/SoiDogPhuket">
                        <i class="fa-brands fa-twitter"></i>
                    </a>
                    <a href="https://www.instagram.com/soidogfoundation/">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                </div>
            </div>
        </div>

    )
}

export default Footer