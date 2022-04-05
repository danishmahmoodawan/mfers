
import { useState, useEffect } from 'react';
function Home() {
    
  return (
   <> 
	<section class="first_section">
	<div class="container">
		<div class="row mt-5 mb-5">
			<div class="col-12 text-center">
					<h1>TITLE HERE</h1>
				</div>
				</div>
				</div>
					<div class="container">
						<div class="row text-center">
								<div class="col-md-6 col-sm-6 adj_col ">
									<img class="mb-3" src="assets/images/image1.svg" alt="" />
									<img class="mt-3" src="assets/images/image2.svg" alt="" />
								</div>
								<div class="col-md-6 col-sm-6">
								<div class="main_row row_bg count_call">
									<div class="row text-center mt-5 mb-5">
										<h2>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </h2>
									</div>
									<div class="row mb_row text-center">
										<div class="col-12 mb-3">
											<button type="button" class="btn btn_font mb-2 d-block ">1111</button>
											<button type="button" class="btn btn_font mb-2 d-block">MINT</button>
										</div>
										</div>
										<div class="row">
													<div class="col-3 cent_icon"> <a href="#"><img src="assets/images/plus.svg" alt="" /></a></div>
										<div class="col-6 p-0"><h1 class="counted">5</h1></div>
										<div class="col-3 cent_icon"><a href="#"><img src="assets/images/minus.svg" alt="" /></a></div>
										</div>

										<div class="row">
									<div class="col-12 mt-5 mb-3 mint_cw">
										<button type="button" class="btn bg-btnn btn_font mb-2 d-block">MINT</button>
									</div>
									</div>

								</div>
								<div class="row set_row  count_head">
									<div class="col-12 text-center"> 
											<button type="button" class="btn bg-none counted mb-2">SNEAK PEEK</button>
									</div>
								</div>
							</div>
				</div>
				</div>
				</section>

	<section class="second_section">
					<div class="container-fluid">
							<div class="col_img ">
								<img src="assets/images/image_bg_1.svg" alt="featured image" />
								<img class="ml-2 mr-2" src="assets/images/image_bg_2.svg" alt="featured image" />
								<img src="assets/images/image_bg_3.svg" alt=" featured image" />
							</div>
						</div>
							</section>

<section class="third_section">
   <div class="container text-center">
      <h1 class=" faq_heading">RARITY</h1>
      <div class="row mt-3 mb-3">
         <div class="col-md-4 col-sm-12">
            	<div class="box_image">
               		<img src="assets/images/image_common.svg" alt="Flying Kites" />
               		<div class="text_image">
                  		<h3 class="text_set">COMMON</h3>
               		</div>
            	</div>
            <div class="text_captioned ">
               <h3 class="text_set_cap">3000/16000 ( 20% )</h3>
            </div>
         </div>
	
         <div class="col-md-4 col-sm-12">
            <div class="box_image">
               <img src="assets/images/image_common.svg" alt="Flying Kites" />
               <div class="text_image">
                  <h3 class="text_set uncomon">UNCOMMON</h3>
               </div>
            </div>
            <div class="text_captioned text-center">
               <h3 class="text_set_cap">3000/16000 ( 20% )</h3>
            </div>
        </div>
	
         <div class="col-md-4 col-sm-12">
            <div class="box_image">
               <img src="assets/images/image_common.svg" alt="Flying Kites" />
               <div class="text_image">
                  <h3 class="text_set rare">RARE</h3>
               </div>
            </div>
            <div class="text_captioned text-center">
               <h3 class="text_set_cap">3000/16000 ( 20% )</h3>
            </div>
         </div>
      </div>
      <div class="row mt-3 mb-3">
         <div class="col-md-4 col-sm-12">
            <div class="box_image">
               <img src="assets/images/image_common.svg" alt="Flying Kites" />
               <div class="text_image">
                  <h3 class="text_set uniq">UNIQUE</h3>
               </div>
            </div>
            <div class="text_captioned ">
               <h3 class="text_set_cap">3000/16000 ( 20% )</h3>
            </div>
         </div>
         <div class="col-md-4 col-sm-12">
            <div class="box_image">
               <img src="assets/images/image_common.svg" alt="Flying Kites" />
               <div class="text_image">
                  <h3 class="text_set epic">EPIC</h3>
               </div>
            </div>
            <div class="text_captioned text-center">
               <h3 class="text_set_cap">3000/16000 ( 20% )</h3>
            </div>
         </div>
         <div class="col-md-4 col-sm-12">
            <div class="box_image">
               <img src="assets/images/image_common.svg" alt="Flying Kites" />
               <div class="text_image">
                  <h3 class="text_set legnd">LEGEND</h3>
               </div>
            </div>
            <div class="text_captioned text-center">
               <h3 class="text_set_cap">3000/16000 ( 20% )</h3>
            </div>
         </div>
      </div>
   </div>
</section>

<section class="faq_sec">
   <div class="container text-center">
      <h1 class="rarity">FAQ</h1>
      <div class="row mt-3 mb-3">
         <div class="col-md-12 col-sm-12">
            <div id="accordion">
               <div class="card">
                  <div class="card-header" id="headingOne">
                     <h5 class="mb-0">
                        <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        SOME QUESTION SOME TEXT SOME QUESTION ?
                        <i class="fas fa-sort-down"></i>  </button>
                     </h5>
                  </div>
                  <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                     <div class="card-body">
                        SOME ANSWER SOME ANSWER, SOME TEXT, SOME ANSWERS, SOME TEXT, SOME ANSWERS, SOME TEXT	
                     </div>
                  </div>
               </div>
               <div class="card">
                  <div class="card-header" id="headingTwo">
                     <h5 class="mb-0">
                        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        SOME QUESTION SOME TEXT SOME QUESTION ?
                        <i class="fas fa-sort-down"></i>  </button>
                     </h5>
                  </div>
                  <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                     <div class="card-body">
                        SOME ANSWER SOME ANSWER, SOME TEXT, SOME ANSWERS, SOME TEXT, SOME ANSWERS, SOME TEXT			
                     </div>
                  </div>
               </div>
               <div class="card">
                  <div class="card-header" id="headingThree">
                     <h5 class="mb-0">
                        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        SOME QUESTION SOME TEXT SOME QUESTION ?
                        <i class="fas fa-sort-down"></i>	  </button>
                     </h5>
                  </div>
                  <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                     <div class="card-body">
                        SOME ANSWER SOME ANSWER, SOME TEXT, SOME ANSWERS, SOME TEXT, SOME ANSWERS, SOME TEXT			
                     </div>
                  </div>
               </div>
               <div class="card">
                  <div class="card-header" id="headingThre">
                     <h5 class="mb-0">
                        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThre" aria-expanded="false" aria-controls="collapseThree">
                        SOME QUESTION SOME TEXT SOME QUESTION ?
                        <i class="fas fa-sort-down"></i></button>
                     </h5>
                  </div>
                  <div id="collapseThre" class="collapse" aria-labelledby="headingThre" data-parent="#accordion">
                     <div class="card-body">
                        SOME ANSWER SOME ANSWER, SOME TEXT, SOME ANSWERS, SOME TEXT, SOME ANSWERS, SOME TEXT			
                     </div>
                  </div>
               </div>
               <div class="card">
                  <div class="card-header" id="headingThreew">
                     <h5 class="mb-0">
                        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThreew" aria-expanded="false" aria-controls="collapseThree">
                        SOME QUESTION SOME TEXT SOME QUESTION ?
                        <i class="fas fa-sort-down"></i>	</button>
                     </h5>
                  </div>
                  <div id="collapseThreew" class="collapse" aria-labelledby="headingThreew" data-parent="#accordion">
                     <div class="card-body">
                        SOME ANSWER SOME ANSWER, SOME TEXT, SOME ANSWERS, SOME TEXT, SOME ANSWERS, SOME TEXT			
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
<section class="footer_sec" >
   <div class="container text-center">
      <h1 class="rarity mt-4 mb-4">TITLE</h1>
      <div class="row">
         <div class="col-md-12">
            <button type="button" class="btn bg-btnn btn_font mb-2 d-block btn_contract">CONTRACT ADDRESS</button>
         </div>
      </div>
      <div class="row   text-center">
         <div class="col-md-12 image_oc"> 
            <a href="#"><img src="assets/images/icon/ICON_INSTA.svg" alt="insta_icon" /></a>
            <a href="#"><img src="assets/images/icon/ICON_MEDIUM.svg" alt="medium_icon" /></a>
            <a href="#"><img src="assets/images/icon/ICON_OS.svg" alt="_icon" /></a>
            <a href="#"><img src="assets/images/icon/ICON_TWITTER.svg" alt="twitter_icon" /></a>
            <a href="#"><img src="assets/images/icon/ICON_DISCORD.svg" alt="discord_icon" /></a>
        </div>
    </div>
    </div>
</section>   	</>
  );
}

export default Home;
