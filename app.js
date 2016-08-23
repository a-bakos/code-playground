// OKOS - jQuery

$(document).ready(function () {
    $(document).keydown(function (key) {
        switch (parseInt(key.which)) {
            // First row -- numbers, backspace
            case 49: $('#num-1').addClass('button-pressed');
            break;
            case 50: $('#num-2').addClass('button-pressed');
            break;
            case 51: $('#num-3').addClass('button-pressed');
            break;
            case 52: $('#num-4').addClass('button-pressed');
            break;
            case 53: $('#num-5').addClass('button-pressed');
            break;
            case 54: $('#num-6').addClass('button-pressed');
            break;
            case 55: $('#num-7').addClass('button-pressed');
            break;
            case 56: $('#num-8').addClass('button-pressed');
            break;
            case 57: $('#num-9').addClass('button-pressed');
            break;
            case 48: $('#num-0').addClass('button-pressed');
            break;
            case 189: $('#num-hyphen').addClass('button-pressed');
            break;
            case 187: $('#num-plus').addClass('button-pressed');
            break;
            case 8: $('#num-backspace').addClass('button-pressed');
            break;
                
            // Letters in order starting from TAB, going left to right direction
            case 9: $('#letter-tab').addClass('button-pressed');
            break;
            case 81: $('#letter-q').addClass('button-pressed');
            break;
            case 87: $('#letter-w').addClass('button-pressed');
            break;
            case 69: $('#letter-e').addClass('button-pressed');
            break;            
            case 82: $('#letter-r').addClass('button-pressed');
            break;            
            case 84: $('#letter-t').addClass('button-pressed');
            break;            
            case 89: $('#letter-y').addClass('button-pressed');
            break;
            case 85: $('#letter-u').addClass('button-pressed');
            break;            
            case 73: $('#letter-i').addClass('button-pressed');
            break;
            case 79: $('#letter-o').addClass('button-pressed');
            break;
            case 80: $('#letter-p').addClass('button-pressed');
            break;
            case 219: $('#letter-brackets-open').addClass('button-pressed');
            break;            
            case 221: $('#letter-brackets-close').addClass('button-pressed');
            break;
            case 13: $('#letter-enter').addClass('button-pressed');
            break;

            case 20: $('#letter-caps').addClass('button-pressed');
            break;
            case 65: $('#letter-a').addClass('button-pressed');
            break;
            case 83: $('#letter-s').addClass('button-pressed');
            break;
            case 68: $('#letter-d').addClass('button-pressed');
            break;
            case 70: $('#letter-f').addClass('button-pressed');
            break;
            case 71: $('#letter-g').addClass('button-pressed');
            break;
            case 72: $('#letter-h').addClass('button-pressed');
            break;
            case 74: $('#letter-j').addClass('button-pressed');
            break;
            case 75: $('#letter-k').addClass('button-pressed');
            break;
            case 76: $('#letter-l').addClass('button-pressed');
            break;
            case 186: $('#letter-colon').addClass('button-pressed');
            break;
            case 192: $('#letter-at').addClass('button-pressed');
            break;
            
            case 16: $('#letter-lshift').addClass('button-pressed');
            break;
            case 220: $('#letter-backslash').addClass('button-pressed');
            break;
            case 90: $('#letter-z').addClass('button-pressed');
            break;
            case 88: $('#letter-x').addClass('button-pressed');
            break;
            case 67: $('#letter-c').addClass('button-pressed');
            break;            
            case 86: $('#letter-v').addClass('button-pressed');
            break;            
            case 66: $('#letter-b').addClass('button-pressed');
            break;
            case 78: $('#letter-n').addClass('button-pressed');
            break;
            case 77: $('#letter-m').addClass('button-pressed');
            break;
            case 188: $('#letter-comma').addClass('button-pressed');
            break;
            case 190: $('#letter-dot').addClass('button-pressed');
            break;
            case 191: $('#letter-fwdslash').addClass('button-pressed');
            break;
                
            case 17: $('#btn-lctrl').addClass('button-pressed');
            break;
            case 32: $('#btn-spacebar').addClass('button-pressed');
            break;
        }
    });
    
    $(document).keyup(function (key) {
        switch (parseInt(key.which)) {
            // First row -- numbers, backspace
            case 49: $('#num-1').removeClass('button-pressed');
            break;
            case 50: $('#num-2').removeClass('button-pressed');
            break;
            case 51: $('#num-3').removeClass('button-pressed');
            break;
            case 52: $('#num-4').removeClass('button-pressed');
            break;
            case 53: $('#num-5').removeClass('button-pressed');
            break;
            case 54: $('#num-6').removeClass('button-pressed');
            break;
            case 55: $('#num-7').removeClass('button-pressed');
            break;
            case 56: $('#num-8').removeClass('button-pressed');
            break;
            case 57: $('#num-9').removeClass('button-pressed');
            break;
            case 48: $('#num-0').removeClass('button-pressed');
            break;
            case 189: $('#num-hyphen').removeClass('button-pressed');
            break;
            case 187: $('#num-plus').removeClass('button-pressed');
            break;
            case 8: $('#num-backspace').removeClass('button-pressed');
            break;
            
            // Letters in order starting from TAB, going left to right direction
            case 9: $('#letter-tab').removeClass('button-pressed');
            break;
            case 81: $('#letter-q').removeClass('button-pressed');
            break;
            case 87: $('#letter-w').removeClass('button-pressed');
            break;
            case 69: $('#letter-e').removeClass('button-pressed');
            break;            
            case 82: $('#letter-r').removeClass('button-pressed');
            break;            
            case 84: $('#letter-t').removeClass('button-pressed');
            break;            
            case 89: $('#letter-y').removeClass('button-pressed');
            break;
            case 85: $('#letter-u').removeClass('button-pressed');
            break;            
            case 73: $('#letter-i').removeClass('button-pressed');
            break;
            case 79: $('#letter-o').removeClass('button-pressed');
            break;
            case 80: $('#letter-p').removeClass('button-pressed');
            break;
            case 219: $('#letter-brackets-open').removeClass('button-pressed');
            break;            
            case 221: $('#letter-brackets-close').removeClass('button-pressed');
            break;
            case 13: $('#letter-enter').removeClass('button-pressed');
            break;

            case 20: $('#letter-caps').removeClass('button-pressed');
            break;
            case 65: $('#letter-a').removeClass('button-pressed');
            break;
            case 83: $('#letter-s').removeClass('button-pressed');
            break;
            case 68: $('#letter-d').removeClass('button-pressed');
            break;
            case 70: $('#letter-f').removeClass('button-pressed');
            break;
            case 71: $('#letter-g').removeClass('button-pressed');
            break;
            case 72: $('#letter-h').removeClass('button-pressed');
            break;
            case 74: $('#letter-j').removeClass('button-pressed');
            break;
            case 75: $('#letter-k').removeClass('button-pressed');
            break;
            case 76: $('#letter-l').removeClass('button-pressed');
            break;
            case 186: $('#letter-colon').removeClass('button-pressed');
            break;
            case 192: $('#letter-at').removeClass('button-pressed');
            break;
                
            case 16: $('#letter-lshift').removeClass('button-pressed');
            break;
            case 220: $('#letter-backslash').removeClass('button-pressed');
            break;
            case 90: $('#letter-z').removeClass('button-pressed');
            break;
            case 88: $('#letter-x').removeClass('button-pressed');
            break;
            case 67: $('#letter-c').removeClass('button-pressed');
            break;            
            case 86: $('#letter-v').removeClass('button-pressed');
            break;            
            case 66: $('#letter-b').removeClass('button-pressed');
            break;
            case 78: $('#letter-n').removeClass('button-pressed');
            break;
            case 77: $('#letter-m').removeClass('button-pressed');
            break;
            case 188: $('#letter-comma').removeClass('button-pressed');
            break;
            case 190: $('#letter-dot').removeClass('button-pressed');
            break;
            case 191: $('#letter-fwdslash').removeClass('button-pressed');
            break;
                
            case 17: $('#btn-lctrl').removeClass('button-pressed');
            break;
            case 32: $('#btn-spacebar').removeClass('button-pressed');
            break;
        }
    });
    
    // Character counter in display module
	$('textarea[name="input-area"]').keyup(function(){
		var numCharacters = $(this).val().length;
		$('.text-info span').html(numCharacters);
	});
});