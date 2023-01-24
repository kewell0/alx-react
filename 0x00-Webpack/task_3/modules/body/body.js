import $ from "jquery";
import _ from 'lodash';
import '../css/main.css';

$('body').append('<button>Click here to get started</button>');
$('body').append("<p id='count'></p>");


let count = 0;

function updateCounter() { count++; }

$('button').click(_.debounce(() => {
    updateCounter();
    $('#count').text(`${count} clicks on the button`);
}));
