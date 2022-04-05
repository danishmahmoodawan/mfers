
import { useState, useEffect } from 'react';
function Home() {
    
  return (
   <> 
	<section className="first_section">
	<div className="container-fluid">
		<div className="row adj_row mfer_row">
			<div className="col-sm-12 col-md-6 col-lg-4 text-left">
					<h1>MFERS Title</h1>
                    <img src="../assets/images/character_img.png" />
				</div>
                
                <div className="col-sm-12 col-md-6 col-lg-4 text-center">

            <div className="main_divider"></div>

				<div className="mint_box">
                	<span className="mint_set"> Mint Price : 0.01 ETH</span>
                    </div>

                    <div className="mint_box mint_suply">
                	<span className="mint_set"> Total Supply : 5,555</span>
                    </div>

                    <div className="mint_box minted_suply">
                	<span className="mint_set"> Minted Supply : 2,333</span>
                    </div>

                    <div className="mint_box limit_trans">
                	<span className="mint_set"> Limit : 5 Per Transaction</span>
                    </div>
                    </div>
                <div className="col-sm-12 col-md-6 col-lg-4 text-right">
					<div className="set_sticky">
                    <img src="../assets/images/sticky_note.svg" />
  <div className="text-block">
    <a className="buttonsw" href="https://discord.com" target={{target:"_blank"}}>Connect Wallet</a>
    <a className="buttonsw" href="https://discord.com" target={{target:"_blank"}}>Cross Chain</a>

  </div>
                    </div>
				</div>
                
				</div>
                <div className="row adj_row">
			<div className="col-sm-12 col-md-6 col-lg-4 text-left img_set">
                    <img src="../assets/images/character_img.png" />
				</div>
                
                <div className="col-sm-12 col-md-6 col-lg-4 text-center ">
                <div className="minted_sec"></div>

                <div className="row minted_row">
			       <div className="col-3 cent_icon"> <a href="#"><img src="assets/images/plus.svg" alt="" /></a></div>
					<div className="col-6 p-0"><h1 className="counted">5</h1></div>
					<div className="col-3 cent_icon"><a href="#"><img src="assets/images/minus.svg" alt="" /></a></div>
					</div>
                    <div className="minted_btn">
    <a className="button_mint" href="https://discord.com" target={{target:"_blank"}}>Mint Now</a> </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 suply_col">
                <h1>Supply On</h1>
                <div className="supply_box mint_left">
                	<span className="mint_set"> Ethereum </span>
                    <span className="mint_set mint_right"> 1,233 </span> </div>

                <div className="supply_box">
                	<span className="mint_set"> Solana </span>
                    <span className="mint_set mint_right"> 2,331 </span> </div>

                <div className="supply_box mint_left">
                	<span className="mint_set"> Fantom </span>
                    <span className="mint_set mint_right"> 1,231 </span> </div>
                    
                <div className="supply_box">
                	<span className="mint_set"> Fantom </span>
                    <span className="mint_set mint_right"> 1,231 </span> </div>
                    
                <div className="supply_box mint_left">
                	<span className="mint_set"> Fantom </span>
                    <span className="mint_set mint_right"> 1,231 </span> </div>

</div>
				</div>
				</div>
					
</section>
<section>
<div className="container-fluid">
		<div className="row adj_row mfer_row">
			<div className="col-sm-12 col-md-6 col-lg-4 text-left">
                    <img src="../assets/images/character_img.png" />
				</div>
                <div className="col-sm-12 col-md-6 col-lg-8">
<p className="paraset">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce faucibus elementum euismod. Nullam ut nunc interdum, vehicula nisi elementum, tincidunt mi. Phasellus orci massa, convallis sed aliquet ac, cursus mollis urna. Praesent nec accumsan urna.
</p>
				</div>
                </div>
                <div className="row">
                <div className="col-12">
                <img src="../assets/images/character_img.png" />
                </div>
                </div>
                </div>
    </section>
   	</>
  );
}

export default Home;
