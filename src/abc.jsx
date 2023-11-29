  {/* <nav className={`uk-navbar-container`} style={{backgroundColor:'yellow'}}>
    <div className="uk-container">
        <div uk-navbar="true">

            <div className="uk-navbar-center">

                <div className="uk-navbar-center-left"  style={{paddingRight:'50px'}}>
                    <ul className="uk-navbar-nav">
                    {imageNames.map((item,index)=>(
                     <li key={item}>
                     <a href={`${urls[index]}`} className={style.anchor}>
                       <img className={style.SocialImages} src={process.env.PUBLIC_URL + '/Assets/' + item} alt='fb Logo' />
                     </a>
                   </li>
                   ))}
                        
                    </ul>
                </div>
                <div className='uk-navbar-item uk-logo ' style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                <Link to={'/'}><img className={style.logoImg} src={process.env.PUBLIC_URL + '/Assets/LogoImage/burger.png'} alt = 'logo'/></Link>
                <Link to="/" className={style.logotxt}>FOOD MANIA</Link>
                </div>
                <div className="uk-navbar-center-right"   style={{paddingLeft:'50px'}}>
                    <ul className="uk-navbar-nav">
                    <li className="uk-active"><Link to="/">Home</Link></li>
                        <li>
                            <Link to="/">Parent</Link>
                            <div className="uk-navbar-dropdown">
                                <ul className="uk-nav uk-navbar-dropdown-nav">
                                    <li className="uk-active"><Link to="/">Home</Link></li>
                                    <li><Link to="/">Item</Link></li>
                                    <li><Link to="/">Item</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li className="uk-active-nav"><Link to="/">Home</Link></li>
                        <li className="uk-active-nav"><Link to="/">Home</Link></li>
                      
                    </ul>
                </div>

            </div>
            <div class="uk-navbar-right">

<ul class="uk-navbar-nav">
    {/* <li>
        <Link to = "/">Parent <span uk-navbar-parent-icon></span></Link>
    </li> 
    <li>
    <Link class="uk-button uk-button-default" to={'/'}>Link</Link>

    </li>
</ul>
</div>
        </div>
    </div>
</nav></div> */}