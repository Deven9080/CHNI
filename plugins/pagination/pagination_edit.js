$('#pagination-demo').twbsPagination({
totalPages: 3,
// the current page that show on start
startPage: 1,

// maximum visible pages
visiblePages: 3,

initiateStartPageClick: true,

// template for pagination links
href: false,

// variable name in href template for page number
hrefVariable: '{{number}}',

// Text labels
first: '<i class="fa fa-step-backward" aria-hidden="true"></i>',
prev: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
next: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
last: '<i class="fa fa-step-forward" aria-hidden="true"></i>',

// carousel-style pagination
loop: false,

// callback function
onPageClick: function (event, page) {
	$('.page-active').removeClass('page-active');
  $('#page'+page).addClass('page-active');
},

// pagination Classes
paginationClass: 'pagination',
nextClass: 'next',
prevClass: 'prev',
lastClass: 'last',
firstClass: 'first',
pageClass: 'page',
activeClass: 'active',
disabledClass: 'disabled'

});

