<div class="rating">
 	<?php $full_stars=$post->_star;
 		$empty_stars=5-$full_stars; for ($i=0; $i < $full_stars; $i++): ?>
 		<i class="mk-moon-star-3"></i>
 	 <?php endfor; ?>
 	<?php for ($i=0; $i < $empty_stars; $i++): ?>
 		<i class="mk-moon-star-4"></i>
 	 <?php endfor; ?>
 	</div>
<p class="mk-testimonial-quote"><?php echo get_post_meta( get_the_ID(), '_desc', true ); ?></p>