// Navbar Scroll Animation
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('navbar-scrolled');
        } else {
            $('.navbar').removeClass('navbar-scrolled');
        }
    });
});

// Smooth Scroll to Sections
$(document).ready(function() {
    $('.nav-link').click(function(e) {
        e.preventDefault();
        var targetSection = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(targetSection).offset().top - 50
        }, 1000);
    });
});

// Card Animation on Hover
$(document).ready(function() {
    $('.card').hover(function() {
        $(this).css('transform', 'translateY(-10px)');
    }, function() {
        $(this).css('transform', 'translateY(0)');
    });
});

// Form Submission
$(document).ready(function() {
    $('#contactForm').submit(function(e) {
        e.preventDefault();
        var formData = $(this).serialize();
        $.ajax({
            type: 'POST',
            url: 'process.php', // Change to your form processing script
            data: formData,
            success: function(response) {
                alert('Form submitted successfully!');
                $('#contactForm')[0].reset();
            },
            error: function() {
                alert('Error submitting form. Please try again later.');
            }
        });
    });
});
