let term, recordCount, yearStart, startEnd;

$('.search').click(function (e) { 
    e.preventDefault();

    term = $('.input-search').val();
    recordCount = $('.input-records').val();
    yearStart = $('.input-year-start').val();
    yearEnd = $('.input-year-end').val();
    console.log(term,recordCount,yearStart,yearEnd);

    
});

$('.reset').click(function (e) { 
    e.preventDefault();
    $('.article').remove();
});