$(document).ready(function () {
    $('form').on('submit', function (e) {
        e.preventDefault();

        if ($('input').val() !== '') {
            let toDoItem = $('input').val();
            $('ul').append("<li> <span class='fa fa-square-o'></span> " + toDoItem + "</li>");
            $('input[type=text]').val(''); // clear input
        };

    });

    $('ul').on('click', 'li', function () {
        let checkBox = $(this).find('.fa');
        checkBox.toggleClass("fa-square-o fa-check-square-o");
        $(this).toggleClass("text-muted")
    });
});


// $(function () {

//     // Use jQuery to select the a tags in the document
//     // add a click event handler and prevent the default action of the link (e.preventDefault)
//     $('a.contactLink').on('click', function (e) {

//         e.preventDefault();
//         // Find a jQuery method that gets the text inside of the clicked element.
//         // Save the text in a variable for use later
//         const name = $(this).text();

//         // Find a jQuery method that will get the contents of the data attributes on the clicked element
//         // Store each value in it's own variable
//         const email = $(this).data('email');
//         const website = $(this).data('website');

//         // Create a variable that holds the string:
//         // <a href="**website**">**name**</a>'s email is <a href="mailto:**email**">**email**</a>'
//         const text = `<a href="${website}">${name}</a> can be reached at <a href="mailto:${email}">${email}</a>`;

//         // Select the h2.showInfo element and insert the text variable inside
//         // Be sure to find a method that will allow you to insert HTML
//         $('h2.showInfo').html(text);

//     });

// });