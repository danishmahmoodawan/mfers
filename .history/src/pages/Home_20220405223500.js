
import { useState, useEffect } from 'react';
function Home() {
    
  return (
   <> 
	<section class="first_section">
	<div class="container-fluid">
		<div class="row adj_row">
			<div class="col-sm-12 col-md-6 col-lg-4 text-left">
					<h1>MFERS Title</h1>
                    <img src="../assets/images/character_img.png" />
				</div>
                
                <div class="col-sm-12 col-md-6 col-lg-4 text-center">

                
				<div class="mint_box">
                	<span class="mint_set"> Mint Price : 0.01 ETH</span>
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
				</div>
					
</section>
<section>

    </section>
   	</>
  );
}

export default Home;
