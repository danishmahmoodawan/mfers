
import { useState, useEffect } from 'react';
function Home() {
    
  return (
   <> 
	<section class="first_section">
	<div class="container-fluid">
		<div class="row adj_row mfer_row">
			<div class="col-sm-12 col-md-6 col-lg-4 text-left">
					<h1>MFERS Title</h1>
                    <img src="../assets/images/character_img.png" />
				</div>
                
                <div class="col-sm-12 col-md-6 col-lg-4 text-center">

            <div class="main_divider"></div>

				<div class="mint_box">
                	<span class="mint_set"> Mint Price : 0.01 ETH</span>
                    </div>

                    <div class="mint_box mint_suply">
                	<span class="mint_set"> Total Supply : 5,555</span>
                    </div>

                    <div class="mint_box minted_suply">
                	<span class="mint_set"> Minted Supply : 2,333</span>
                    </div>

                    <div class="mint_box limit_trans">
                	<span class="mint_set"> Limit : 5 Per Transaction</span>
                    </div>
                    </div>
                <div class="col-sm-12 col-md-6 col-lg-4 text-right">
					<div class="set_sticky">
                    <img src="../assets/images/sticky_note.svg" />
  <div class="text-block">
    <a class="buttonsw" href="https://discord.com" target={{target:"_blank"}}>Connect Wallet</a>
    <a class="buttonsw" href="https://discord.com" target={{target:"_blank"}}>Cross Chain</a>

  </div>
                    </div>
				</div>
                
				</div>
                <div class="row adj_row">
			<div class="col-sm-12 col-md-6 col-lg-4 text-left img_set">
                    <img src="../assets/images/character_img.png" />
				</div>
                
                <div class="col-sm-12 col-md-6 col-lg-4 text-center ">
                <div class="minted_sec"></div>

                <div class="row minted_row">
			       <div class="col-3 cent_icon"> <a href="#"><img src="assets/images/plus.svg" alt="" /></a></div>
					<div class="col-6 p-0"><h1 class="counted">5</h1></div>
					<div class="col-3 cent_icon"><a href="#"><img src="assets/images/minus.svg" alt="" /></a></div>
					</div>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-4 text-center ">
                <div class="btn">
    <a class="buttonsw" href="https://discord.com" target={{target:"_blank"}}>Connect Wallet</a>
  </div>
</div>
				</div>




				</div>
					
</section>
<section>

    </section>
   	</>
  );
}

export default Home;
