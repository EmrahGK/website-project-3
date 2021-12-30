console.log("Script is running");

$(document).ready(() => {
    $('teacher-select').selectize({
        sortField: 'text'
    });
  
    $('class-select').selectize({
        sortField: 'text'
    });
});