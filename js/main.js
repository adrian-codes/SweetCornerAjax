var pages = {
    Home: {pageUrl: 'home.html', default : true},
    "About Us": {pageUrl: 'aboutus.html'},
    Services: {pageUrl: 'services.html'},
    Contact: {pageUrl: 'contact.html'}
};

$('document').ready(function(){
    createMenu();
});

function createMenu() {
    var  header_ul = $('.header ul');
    for(var index in pages) {
        var li = $('<li/>').addClass('menu');
        var a =  $('<a/>').text(index);
        
        (function() {
           var my_index = index;
            li.on('click', 'a', function(){
            var my_page = pages[my_index];
            loadPage(my_page.pageUrl)
            });
        })();
        
        li.append(a);
        header_ul.append(li);
        if(pages[index].default==true) {
            loadPage(pages[index].pageUrl);   
        }
    }
}

function loadPage (page_url) {
    $.get(page_url, function(data) {
        $('.main_content').html(data);
    });
}