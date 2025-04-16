let final_result = 0;
let is_on = null;
let last_ope = null;

function check_screen(){
    val = document.getElementById('screen').value
    return val
}


function display_key(key){
    let previous_val;
    previous_val = document.getElementById('screen').value
    val = previous_val+String(key);
    document.getElementById('screen').value = String(val);
}
function clear_screen(){
    document.getElementById('screen').value = '';
    final_result = 0;
}
function operation(type_ope){
    
    if (type_ope == 'add'){
        if ( (document.getElementById('screen').value)){
            let temp_val = document.getElementById('screen').value
            document.getElementById('screen').value = '';
            final_result = parseFloat(final_result) + parseFloat(temp_val);
            last_ope = 'add';  
        }
    }
    if (type_ope == 'subb'){
        if ( (document.getElementById('screen').value)){
            let temp_val = document.getElementById('screen').value
            document.getElementById('screen').value = '';
            final_result = parseFloat(temp_val) - parseFloat(final_result);
            last_ope = 'subb';  
        }
    }    
}
function show_result(){
    operation(last_ope)
    document.getElementById('screen').value = ''
    document.getElementById('screen').value = final_result;
}