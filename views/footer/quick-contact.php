<?php

/**
 * template part for footer quick contact. views/footer
 *
 * @author 		Artbees
 * @package 	jupiter/views
 * @version     5.0.0
 */

global $mk_options;
				
if ($mk_options['disable_quick_contact'] != 'true') return false;

if(is_singular(array('post', 'portfolio')) && $mk_options['quick_contact_on_single'] == 'false') return false;

$captcha_quick_contact = isset($mk_options['captcha_quick_contact']) ? $mk_options['captcha_quick_contact'] : 'true';

$id = mt_rand(99, 999);
$tabindex_1 = $id;
$tabindex_2 = $id + 1;
$tabindex_3 = $id + 2;
$tabindex_4 = $id + 3;

mk_update_contact_form_email(2342, 15, $mk_options['quick_contact_email']);

?>
	<div class="modal_bg"></div>
	<a href="#" class="modal_close_btn">close</a>
	<div class="quick_contact_desc"><p><?php echo $mk_options['quick_contact_desc']; ?></p></div>
	<div class="mk-quick-contact-wrapper  js-bottom-corner-btn js-bottom-corner-btn--contact">
			
		<a href="#" class="mk-quick-contact-link">Request a quote<i class="mk-icon-edit"></i></a>
		<div id="mk-quick-contact">
			<!-- <div class="mk-quick-contact-title">
				<?php echo $mk_options['quick_contact_title']; ?>
			</div> -->
			<form class="mk-contact-form" method="post" novalidate="novalidate">

				<div class="step1_wrap">
					<div class="step_heading">STEP 1: Who are you?</div>
					<div class="left_side">
						<input type="text" placeholder="<?php _e('First Name*', 'mk_framework'); ?>" required="required" id="contact_firstname" name="contact_firstname" class="text-input" value="" tabindex="<?php echo $tabindex_1; ?>" />
						<input type="text" placeholder="<?php _e('E-mail*', 'mk_framework'); ?>" required="required" id="contact_email" name="contact_email" class="text-input" value="" tabindex="<?php echo $tabindex_1; ?>" />
						<input type="text" placeholder="<?php _e('Company*', 'mk_framework'); ?>" required="required" id="contact_company" name="contact_company" class="text-input" value="" tabindex="<?php echo $tabindex_1; ?>" />
					</div>
					<div class="right_side">
						<input type="text" placeholder="<?php _e('Last Name*', 'mk_framework'); ?>" required="required" id="contact_lastname" name="contact_lastname" class="text-input" value="" tabindex="<?php echo $tabindex_1; ?>" />
						<input type="text" placeholder="<?php _e('Phone', 'mk_framework'); ?>" required="required" id="contact_phone" name="contact_phone" class="text-input" value="" tabindex="<?php echo $tabindex_1; ?>" />
						<input type="text" placeholder="<?php _e('Region*', 'mk_framework'); ?>" required="required" id="contact_region" name="contact_region" class="text-input" value="" tabindex="<?php echo $tabindex_1; ?>" />	
					</div>
					<a href="#" class="gotostep2">Go to step 2 <i class="mk-icon-chevron-right"></i><i class="mk-icon-chevron-right"></i></a>
				</div>

				<div class="step2_wrap">
					<div class="step_heading">STEP 2: What are you looking for?</div>
					<div class="left_side">
						<input type="text" placeholder="<?php _e('What are you interested in?', 'mk_framework'); ?>" required="required" id="contact_interes" name="contact_interes" class="text-input" value="" tabindex="<?php echo $tabindex_1; ?>" />	
						<input type="text" placeholder="<?php _e('Do you need additional services?', 'mk_framework'); ?>" required="required" id="contact_addserv" name="contact_addserv" class="text-input" value="" tabindex="<?php echo $tabindex_1; ?>" />	
						<input type="text" placeholder="<?php _e('What\'s your deadline?', 'mk_framework'); ?>" required="required" id="contact_deadline" name="contact_deadline" class="text-input" value="" tabindex="<?php echo $tabindex_1; ?>" />	
						<input type="text" placeholder="<?php _e('What is your budget', 'mk_framework'); ?>" required="required" id="contact_budget" name="contact_budget" class="text-input" value="" tabindex="<?php echo $tabindex_1; ?>" />
						<a href="#" class="gotostep1"><i class="mk-icon-chevron-left"></i><i class="mk-icon-chevron-left"></i> Go to step 1</a>
					</div>
					<div class="right_side">
						<p>Additional information<br>
							(brief description of your project)</p>
						<textarea required="required" id="contact_content" name="contact_content" class="textarea" tabindex="<?php echo $tabindex_3; ?>"></textarea>
						<?php if ($captcha_quick_contact == 'true') { ?>
							<div class="captcha_input">
								<input placeholder="<?php _e('Enter Captcha', 'mk_framework'); ?>" type="text" name="captcha" class="captcha-form text-input full" required="required" autocomplete="off" />
				            	<a href="#" class="captcha-change-image"><?php _e('Not readable? Change text.', 'mk_framework'); ?></a>
							</div>
							<div class="captcha_image">
								<span class="captcha-image-holder"></span>
							</div>
						<?php } ?>
						<div class="btn-cont">
							<button tabindex="<?php echo $tabindex_4; ?>" class="mk-progress-button mk-contact-button shop-flat-btn shop-skin-btn" data-style="move-up">
		                        <span class="mk-progress-button-content"><?php _e('Send', 'mk_framework'); ?><i class="mk-li-paper-plane"></i></span>
		                        <span class="mk-progress">
		                            <span class="mk-progress-inner"></span>
		                        </span>
		                        <span class="state-success"><i class="mk-moon-checkmark"></i></span>
		                        <span class="state-error"><i class="mk-moon-close"></i></span>
		                    </button>
	                	</div>
					</div>
				</div>
				<?php wp_nonce_field('mk-contact-form-security', 'security'); ?>
				<?php echo mk_contact_form_hidden_values(15, 2342); ?>
			</form>
			<div class="bottom-arrow"></div>
		</div>
	</div>